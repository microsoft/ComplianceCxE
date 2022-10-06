# Migrating from AIP Unified Labeling to Microsoft Purview Information Protection and Office sensitivity labels

# Introduction

Built-in labeling forms the cornerstone of a Microsoft Purview information protection deployment because it integrates labeling technology inside the products users are accustomed to across all the platforms they use (Windows, macOS, iOS, Android, and web), as well as across Microsoft apps and services online, and beyond. Built-in labeling is also designed to work with other Microsoft Purview capabilities, such as data classification and Microsoft Purview data loss prevention (DLP). The Azure Information Protection Unified Labeling client is another option users of Windows devices have for labeling documents in a way that's compatible with Office sensitivity labels, and it includes an Office plugin that provides functionality that's equivalent to the labeling functionality being included in the Office apps, and as such it is becoming redundant for customers deploying the latest versions of Office. Microsoft recommends customers migrate from using the AIP plugin to using built-in sensitivity labels in Office applications, ahead of a future deprecation of the AIP plugin.

This guide describes the process to transition an environment that's currently using the Office plugin in the Azure Information Protection Unified Labeling client for labeling Office documents and emails, into one that implements sensitivity labeling using built-in functionality in subscription Office client applications.

What this document doesn't cover:

- Deployment of MIP in environments where AIP is not already deployed or in deployment.
- Deployment of features and capabilities not currently implemented with AIP at the customer.
- Migration of deployments on the deprecated AIP Classic client.
- Deployment or analysis of the AIP Scanner.
- Development or development support for custom solutions developed by the customer, including use of the MIP SDK, scripts and PowerShell.
- Migration or mitigations for users of perpetual Office clients (2013, Office 2016, Office 2019 or Office 2021).

# Why you need to migrate to built-in sensitivity labels

While the AIP Unified Labeling client provides extensive and effective labeling and protection capabilities, the plugin model with which is implemented is inconvenient to IT departments since it requires them to separately test, deploy and maintain additional software. The AIP plug-in, like any other plug-in based solution, also consumes additional resources on endpoint devices, which causes lower performance and longer load times for the Office applications. You can learn about the performance and reliability impact of the AIP plugin and other plugins used in your organization from the metrics available in the [M365 Apps Add-in health dashboard](https://config.office.com/officeSettings/officeapphealth/overview) for your tenant.To learn how to use this resource for assessing add-in health and more see the [Microsoft 365 Apps admin center documentation](https://learn.microsoft.com/en-us/deployoffice/admincenter/microsoft-365-apps-health#add-in-health).

In addition to the performance and reliability benefits of using built-in labeling, there's new functionality provided by built-in labels that is not available to users of the AIP plugin. This includes:

- Automatic labeling as you type, as opposed to labeling upon save or send.
- Support for automatic and recommended labeling using advanced classifiers, including [Exact Data Matching](https://learn.microsoft.com/en-us/microsoft-365/compliance/apply-sensitivity-label-automatically?view=o365-worldwide#custom-sensitive-information-types-with-exact-data-match), [Trainable Classifiers](https://learn.microsoft.com/en-us/microsoft-365/compliance/apply-sensitivity-label-automatically?view=o365-worldwide#configuring-trainable-classifiers-for-a-label) and others.
- Recommended labeling support in Outlook emails by default.
- [Preview of sensitive information matches when recommended labeling is triggered in Word](https://support.microsoft.com/en-us/office/sensitivity-labels-are-automatically-applied-or-recommended-for-your-files-and-emails-in-office-622e0d9c-f38c-470a-bcdb-9e90b24d71a1).
- [Persistence of labeling and protection when exporting documents in PDF format](https://insider.office.com/en-us/blog/apply-sensitivity-labels-to-pdfs-created-with-office-apps).
- Assigning different rights to different users when applying a label with User-defined permissions.
- Support for account switching within the Office applications and mailbox switching in Outlook.
- Control over whether users are allowed to disable labeling in their devices.

For a detailed comparison of the capabilities of built-in labeling in Office applications and those in the AIP plug-in, see [the public documentation for this topic](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip?view=o365-worldwide).

It's important to highlight that while the AIP plugin is only available for Office on Windows desktops, users of labeling with devices running Mac OS, iOS or Android, as well as users of the Office web apps in Microsoft 365 have been using built-in labeling, much in the same way users of Windows will be doing once you disable the AIP plugin in their devices. This consistency in capabilities and user experience can make deployment, updates and support easier for all those involved.

For these reasons, Microsoft recently announced the upcoming deprecation of the AIP Unified Labeling Office plugin functionality that is replaced with built-in labeling in Office apps. As of this writing Microsoft plans to support the use of the AIP plugin for Office apps until March 2024 (see [the official deprecation announcement](https://aka.ms/AIP2MIPDeprecation)for details), and by this date organizations will need to have transitioned to using built-in labels in Office applications to ensure continued supportability. Nevertheless, Microsoft recommends migrating to built-in labeling as early as possible to leverage the benefits described above as well as new enhancements that will be introduced in the coming months.

One other important clarification is that the deprecation announcement discussed above and the migration process discussed in this document is relevant only to the AIP plugin for Office, which is one component of the AIP client for Windows. Other components shipped as part of this client are not affected by this process and can continue to be used as today until changes relevant to these components are announced. These components include the Classify and Protect functionality in Windows Explorer, the AIP viewer for opening protected non-Office files on Windows devices, the AIP Scanner and the AIP PowerShell modules.

# What this migration involves

In order to migrate from the AIP plugin to built-in labeling in Office apps you must perform the following changes in your environment:

- Update Office applications to the required versions if not at that level already. Information about the required versions is included below.
- Implement new configurations to match advanced settings in the AIP app that are currently being used in your organization (this is not required in most cases since most organizations do not use these advanced settings). Details on such settings and the equivalent configurations for built-in labeling are included below.
- Disable the AIP plugin using the methods described in the relevant section below.

## What this migration **does not** involve

Migrating from the AIP plugin to built-in labeling in Office does not change the source of label definitions, their settings or their meaning. It also doesn't change how labels are encoded in labeled documents or how protected documents are constructed. This means that during the migration you are **not** required to:

- Create or modify your labels or label policies.
- Relabel or re-protect existing documents or emails.
- Make configuration changes to services that use labels or refer to labels such as DLP, Microsoft 365 autolabeling, SharePoint, OneDrive or Exchange online, Microsoft Defender for Applications, third party software that is compatible with sensitivity labels.
- Migrate users mailboxes or data to the cloud. Built-in sensitivity labeling in Office apps is compatible with Office apps when they access documents on-premises or connect to on-premises mailboxes. It is also compatible with the use of the RMS connector for organizations that have deployed it to support on-premises SharePoint and Exchange servers.
- Removing the AIP client from desktops. After migrating to built-in sensitivity labels in Office applications, the AIP client can continue to be deployed in Windows devices if required for other uses such as labeling and protection of non-Office files.
- Make any changes on non-Windows devices. Office apps in Mac, iOS and Android devices are already using built-in sensitivity labels so they do not require any changes.
- Stopping or changing the use of the AIP Scanner (now the MIP Scanner) or AIP PowerShell commandlets. The same versions you currently use can continue to be used in the same configurations.

# Migrating from the AIP plugin to built-in labeling in Office apps

This section describes the process to migrate from the AIP plugin to built-in sensitivity labels in Office in detail. The process involves the following steps.

1. Confirm configuration pre-requisites are met, including assignment of licenses, software products and compatible labeling configurations.
2. Verify that you are running Office applications that include all the equivalent functionality to the AIP features on which you currently rely. If this is not the case, plan for the update to be performed once you have upgraded to the required versions. If desired, you can test sensitivity labeling in the preview versions of the Office applications to validate that they meet your requirements and to prepare for the implementation in advance of the availability of the functionality in question in the Office channel your organization uses.
3. If specific advanced configurations in AIP are utilized that are implemented in a different way in built-in labeling, implement the equivalent configurations to match that functionality.
4. Communicate upcoming changes to users in a suitable manner so that they are prepared for any user experience changes (e.g. changes in the layout of the label bar). Also provide required information to help desk and other areas of the organization that need to be aware of the changes in order to support users.
5. Roll out the required settings to disable the AIP plugin and start using built-in labeling in Office applications.

It's important to highlight that since the AIP Unified Labeling client and built-in sensitivity labels in Office use the same labeling and protection syntax, labels and labeled documents produced with either tool are fully compatible with each other. This means that the steps for the migration can be performed gradually, and that if there are any concerns or challenges in updating some devices, you can have an extended period of coexistence between users of built-in labeling in Office for Windows and users of the AIP plugin, just like it is now the case for users of built-in labeling in Mac, iOS and Android devices.

## Step 1: Verification of pre-requisites

In order to be able to utilize built-in sensitivity labels in Office, your users must be assigned licenses that cover this functionality. The list of licenses that support this functionality is available [here](https://aka.ms/AIP2MIPPrereqs).

One additional requirement for performing the migration is that all devices where sensitivity labels will be applied or protected documents will be consumed must have a network connection with internet access so they can communicate with Microsoft 365 services. Permanently disconnected devices without the ability to access Office 365 services can't use built-in sensitivity labels. If you have environments with such devices, work with your Microsoft account team to discuss options to integrate these devices into your information protection environment.

## Step 2: verify Office application versions and upgrade apps if required.

You must also verify that all users are running the minimum required versions of the Office 365 apps. The required version depends on the minimum functionality that's required.

To validate your readiness, check capabilities of the currently supported versions of the Office 365 apps which are documented [here](https://aka.ms/AIPMIPVersionParity).

Internal note: content that's equivalent to the following must be included in a separate page that will be linked above.

\*\*\* beginning of content to move into linked document \*\*\*

Internal note: content that's equivalent to the following must be included in a separate page that will be linked above.

| Requirement | Deployment wave |
| --- | --- |
| Users are trained to use the horizontal label bar under the ribbon: ![](RackMultipart20221006-1-hjmzp7_html_a4e7ff6f457522b.png) | Monthly Enterprise Channel: MEC Wave 1 (min version # TBD) Semi Annual Enterprise Channel: SAEC Wave 1 (min version # TBD)Current Channel: CC Wave 1 (min version # TBD)Preview channel for evaluation: (min version # TBD) |
| You have AIP policies with email oversharing popup notifications in place: ![](RackMultipart20221006-1-hjmzp7_html_144e481e141d3282.png) | Monthly Enterprise Channel: MEC Wave 2 (min version # TBD) Semi Annual Enterprise Channel: SAEC Wave 2 (min version # TBD)Current Channel: CC Wave 2 (min version # TBD)Preview channel for evaluation: (min version # TBD)
Note that this functionality also requires the configuration of DLP rules with Policy tips, see section below for details. |
| Inheritance of label from attachments to email is configured. | Monthly Enterprise Channel: MEC Wave 1 (min version # TBD) Semi Annual Enterprise Channel: SAEC Wave 1 (min version # TBD)Current Channel: CC Wave 1 (min version # TBD)Preview channel for evaluation: (min version # TBD) |
| Your users rely on granting rights to whole domains when sharing with external parties: ![](RackMultipart20221006-1-hjmzp7_html_4987e12df25a944f.png) | Monthly Enterprise Channel: MEC Wave 1 (min version # TBD) Semi Annual Enterprise Channel: SAEC Wave 1 (min version # TBD)Current Channel: CC Wave 1 (min version # TBD)Preview channel for evaluation: (min version # TBD) |
| You have labels with Double Key Encryption settings defined. | Monthly Enterprise Channel: MEC Wave 2 (min version # TBD) Semi Annual Enterprise Channel: SAEC Wave 2 (min version # TBD)Current Channel: CC Wave 2 (min version # TBD)Preview channel for evaluation: (min version # TBD) |
| You have labels with s/MIME settings defined. | Monthly Enterprise Channel: MEC Wave 2 (min version # TBD) Semi Annual Enterprise Channel: SAEC Wave 2 (min version # TBD)Current Channel: CC Wave 2 (min version # TBD)Preview channel for evaluation: (min version # TBD) |
| Users rely on the end user revocation of documents | Monthly Enterprise Channel: MEC Wave 2 (min version # TBD) Semi Annual Enterprise Channel: SAEC Wave 2 (min version # TBD)Current Channel: CC Wave 2 (min version # TBD)Preview channel for evaluation: (min version # TBD) |
|
 |
 |

\*\*\* end of content to move to linked document \*\*\*

Please note that Office 2013, Office 2016, Office 2019 and Office 2021 do not support built-in labeling and are thus not covered in this guide. If you have these versions of Office deployed in your environment, work with your account team to discuss how you can address the licensing and software deployment requirements to migrate users to the Microsoft 365 apps.

You can verify the versions of Office that you are currently running in your environment by using the [Inventory section](https://config.office.com/officeSettings/inventory) of the Microsoft 365 apps admin portal described above.

## Step 3: implement required configuration changes if needed

Some advanced configurations in the AIP client are not implemented directly by sensitivity labeling in Office apps but equivalent results can be achieved using other capabilities in the Microsoft 365 solution.

The following table lists specific AIP Advanced settings functionality and provides links to documentation for the equivalent implementations in an environment that uses built-in labels.

| **Functionality** | **Solution** | **Implementation guide** | **Requirements** |
| --- | --- | --- | --- |
| [AIP popupsto control oversharing](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) | Use of advanced Policy tips with DLP rules for Exchange. | [https://aka.ms/OversharingPU2PolicyTips](https://aka.ms/OversharingPU2PolicyTips) | Microsoft 365 E5/A5/G5, Compliance E5/A5/G5 or Information Protection E5/A5/G5 licenses. |
| [_LabelbyCustomProperties_ and _CustomPropertiesbyLabel_ advanced settings](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#migrate-labels-from-secure-islands-and-other-labeling-solutions) for migrating labels from a third party solution or for coexistence with a third party labeling solution. | Solution TBD | [https://aka.ms/LabelbyCustomProperty2MIP](https://aka.ms/LabelbyCustomProperty2MIP) | TBD |
| Remove redundant visual markings in labeled documents using the [_WordShapeNameToRemove_, _RemoveExternalContentMarkingInApp_, _ExternalContentMarkingToRemove_, _PowerPointShapeNameToRemove_](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#remove-headers-and-footers-from-other-labeling-solutions)[_RemoveExternalMarkingFromCustomLayouts_, _RemoveExternalContentMarkingInAllSlides_ or _PowerPointRemoveAllShapesByShapeName_](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#remove-headers-and-footers-from-other-labeling-solutions) advanced settings in AIP. | Solution TBD | [https://aka.ms/RemoveMarkings2MIP](https://aka.ms/RemoveMarkings2MIP) | TND |

## Step 4: deliver communications for user awareness and help-desk training

While built-in sensitivity labels closely replicate the functionality implemented in the AIP plugin for Office, there are some specific differences in user interface and behavior which should be communicated to users in advance of the change so the chances of confusion are minimized. The main changes users will notice include:

- Movement of the Sensitivity button further to the right in the Office ribbon.
- Movement of the (optionally displayed) label bar to the application's title bar and design change.
- Availability of the sensitivity label option directly in the Save As dialog box.
- Replacement of the Help and Feedback section of the label pull down with the Learn More customizable link.
- Prompt to label documents upon creation or access rather than upon save action.
- Changes in the experience when trying to share sensitive content with external users if the AIP Oversharing popup messages are in use in the organization.
- Changes in the permissions picker when labels with user-defined permissions are applied.

Delivering proactive communications to users to prepare them for these changes is usually beneficial, and a sample email with end-user awareness materials that can be used for this purpose can be found [here](https://aka.ms/AIP2MIPtraining). You may want to customize the materials with screen shots that show your own sensitivity labels, as well as remove sections about functionality you are not using in your environment.

Other changes such as improvements in autolabeling behaviors, the sensitive content review pane, inheritance of labels to exported PDF documents, are generally self-explanatory and should not require proactive user communications.

If it is desired to provide information to help desk or support teams for them to better be able to support users during the migration, it is recommended that they review the [sensitivity labels in Office apps documentation for administrators](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide) and the [end-user documentation for sensitivity labels](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide). It may also be useful to share with support personnel information about [known issues and limitations in sensitivity labeling](https://support.microsoft.com/en-us/office/known-issues-with-sensitivity-labels-in-office-b169d687-2bbd-4e21-a440-7da1b2743edc).

## Step 5: disable the AIP plugin

Disabling the AIP plugin is the final step in the process to migrate to built-in sensitivity labels in Office. Once the AIP plugin is disabled, Office applications that support sensitivity labels will automatically show the labeling UI unless explicitly configured not to hide it.

If you have deployed configurations to force loading the AIP plugin in Office, or to disable built-in labeling, you must remove those settings as part of this process.

The process to enable sensitivity labels in Office and disable the AIP plugin is documented [here](https://aka.ms/AIP2MIPswitch).

Note: the content in the link above must be updated to include the following information.

\*\*\* beginning of content to move to linked document \*\*\*

In versions of Office for Windows earlier than 16.0.15716.0, the AIP plugin will be loaded if installed unless special configurations are deployed to change this behavior. Starting with Office version 16.0.15716.0, in the absence of special configurations, Office will use the built-in sensitivity labeling UI even if the AIP plugin is installed. If the AIP client is not installed on a device, the built-in sensitivity labeling UI will be shown unless explicitly disabled by policy.

There are three configuration elements that control whether the AIP plugin is loaded and shown in Office applications if installed, or the built-in sensitivity label user interface is displayed and used. These three configurations are:

- The add-in load controls in the Windows registry for the plugin corresponding to each Office application. The Office add-in load controls are documented [here](https://learn.microsoft.com/en-US/microsoft-365/troubleshoot/group-policy/office-add-in-not-loaded). The identifiers for each of the addins to use as per the guidance in the document linked above are as follows:

| **Application** | **ProgID** |
| --- | --- |
| Word | MSIP.WordAddin |
| --- | --- |
| Excel | MSIP.ExcelAddin |
| PowerPoint | MSIP.PowerPointAddin |
| Outlook | MSIP.OutlookAddin |

- The value "UseOfficeForLabelling" (dword) under the [HKEY\_CURRENT\_USER\Software\Microsoft\Office\16.0\Common\Security\Labels] registry key in computers running Office for Windows versions lower than 16.0.15716.0. Setting this value to 1 disables the plugin in all Office applications and enables built-in labeling. Setting it to 0 disables built-in labeling and loads the plugin if installed. This setting has no effect on versions of Office 16.0.15716.0 or greater.
- The value "AIPException" (dword) under [HKEY\_CURRENT\_USER\Software\Microsoft\Office\16.0\Common\Security\Labels] registry key in computers running Office for Windows versions 16.0.15716.0 or greater. Setting this value to 1 forces load of the AIP plugin while disabling the built-in labeling UI if the plugin is installed. Setting it to 0 or not configuring it disables built-in labeling and loads the plugin if installed. This setting has no effect on versions of Office lower than 16.0.15716.0.

Please note that all the settings above can be deployed via GPO.

The following table summarizes how these settings interact to define the label UI that's active in Office applications when the AIP plugin is installed.

| **AIP plugin installed​** | **Settings​ (as described above)** | **Label Experience​** | **Explanation of behavior** |
| --- | --- | --- | --- |
|
 | UseOfficeforLabelling​ | AIPException​ | Office Version \< ​16.0.15716 | Office version 16.0.15716 or greater​ |
 |
| No, or add-in loading is disabled | 0​ | Any | No labeling UI​ | No labeling UI​ | No change in behavior. No sensitivity labeling experience |
| No, or add-in loading is disabled | 1​ | Any | Built-in labeling​ | Built-in labeling​ | No change in behavior. Built-in labeling is _explicitly_ enabled and behavior doesn't change. |
| No, or add-in loading is disabled | Not set​ | Any | Built-in labeling​ | Built-in labeling​ | No change in behavior. Built-in labeling is _implicitly_ enabled in the absence of any setting or the AIP plugin. |
|
| |
|
| |
| Yes​ | 0​ | 0 or not set​ | AIP​ | No labeling UI​ | New behavior. User loses all labeling experience after update to version 16.0.15716. To keep AIP UI you must configure the AIPException setting.​ |
| Yes​ | 0​ | 1​ | AIP​ | AIP​ | New behavior. AIP is _explicitly_ configured to load by the AIPException setting.​ |
|
| |
|
| |
| Yes​ | 1​ | Any | Built-in labeling​ | Built-in labeling​ | No change in behavior. Built-in labels are ​enabled in all versions of Office. |
|
| |
|
| |
| Yes​ | Not set​ | 0 or not set​ | AIP​ | Built-in labeling​ | New behavior. In the absence of overriding settings, versions of Office earlier than 16.0.15716 load the AIP client if installed, and later versions ignore the plugin and show the built-in labeling UI. ​ |
| Yes​ | Null​ | 1​ | AIP​ | AIP​ | New behavior. AIP client is forced to load in newer Office clients by configuring the AIPException setting. ​ |

\*\*\* end of content to move to linked document \*\*\*

#
