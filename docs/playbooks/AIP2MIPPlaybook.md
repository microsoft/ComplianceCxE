# **Migrating from AIP Unified Labeling to Microsoft Purview Information Protection and Office sensitivity labels**

# Introduction

Sensitivity labeling forms the cornerstone of a Microsoft Purview information protection deployment. The Azure Information Protection Unified Labeling client has been the visible face of sensitivity labeling for users, and inside Office applications this was implemented through the Azure Information Protection add-in for Office, whihc allowed users to label documents from within the applications while working on a document.

At the same time, having to install and manage an add-in in applications to enable users to perform actions they all need to perform is not optimal since it involves significant effort for IT to test, deploy and manage, consumes resources on endpoint devices, and limits the functionality that's possible, especialy on device platforms other than Windows, so Microsoft has incorporated sensitivity labeling functionality directly into Office applications so users can perform labeling without having to rely on an add-in. By incorporating labeling technology directly inside the products that users are accustomed to across all the platforms they use (Windows, macOS, iOS, Android, and web), Office provides a natural user experience that avoids disrupting the way they work, and that reduces the burden on IT administrators and support personnel. 

Built-in labeling is also designed to work with other Microsoft Purview capabilities, such as data classification and Microsoft Purview data loss prevention (DLP). As Microsoft incorporates in the latest versions of Office applications functionality that is equivalent to that provided by the AIP add-on for Office, the add-in is becoming redundant for users of those versions. Microsoft recommends that customers migrate from using the AIP add-in to using built-in sensitivity labels in Office applications, ahead of the eventual deprecation of the AIP add-in.

This guide describes the process to transition an environment that's currently using the Office add-in in the Azure Information Protection Unified Labeling client for labeling Office documents and emails, into one that implements sensitivity labeling using built-in functionality in subscription Office client applications.

What this document doesn't cover:

- Deployment of MIP in environments where AIP is not already deployed or in deployment.
- Deployment of features and capabilities not currently implemented with AIP at the customer.
- Migration of deployments on the deprecated AIP Classic client.
- Deployment or analysis of the AIP Scanner.
- Development or development support for custom solutions developed by the customer, including use of the MIP SDK, scripts and PowerShell.
- Migration or mitigations for users of perpetual Office clients (2013, Office 2016, Office 2019 or Office 2021).

# Why you need to migrate to built-in sensitivity labels

While the AIP Unified Labeling client provides extensive and effective labeling and protection capabilities, the add-in model with which is implemented can be  inconvenient to IT departments and users for the following reasons: 
* since it requires administrators to separately test, deploy and maintain additional software. 
* The AIP add-in, like any other add-in based solution, consumes additional resources on endpoint devices, which causes lower performance and longer load times for the Office applications. You can learn about the performance and reliability impact of the AIP add-in and other add-ins used in your organization from the metrics available in the [M365 Apps Add-in health dashboard](https://config.office.com/officeSettings/officeapphealth/overview) for your tenant. To learn how to use this resource for assessing add-in health and more see the [Microsoft 365 Apps admin center documentation](https://learn.microsoft.com/en-us/deployoffice/admincenter/microsoft-365-apps-health#add-in-health).
* The AIP add-in for Office is only available on Windows. Users of labeling with devices running Mac OS, iOS or Android, as well as users of the Office web apps in Microsoft 365 are already been using built-in labeling, which introduces a difference in user experience and capabilities between users of the AIP add-in and users of built-in labeling in other platforms.
* The AIP add-in doesn't implement advanced functionality that's available with built-in labeling in Office, including:
  - Automatic labeling as you type, as opposed to labeling upon save or send.
  - Support for automatic and recommended labeling using advanced classifiers, including [Exact Data Matching](https://learn.microsoft.com/en-us/microsoft-365/compliance/apply-sensitivity-label-automatically?view=o365-worldwide#custom-sensitive-information-types-with-exact-data-match), [Trainable Classifiers](https://learn.microsoft.com/en-us/microsoft-365/compliance/apply-sensitivity-label-automatically?view=o365-worldwide#configuring-trainable-classifiers-for-a-label) and others.
  - Recommended labeling support in Outlook emails by default.
  - [Preview of sensitive information matches when recommended labeling is triggered in Word](https://support.microsoft.com/en-us/office/sensitivity-labels-are-automatically-applied-or-recommended-for-your-files-and-emails-in-office-622e0d9c-f38c-470a-bcdb-9e90b24d71a1).
  - [Persistence of labeling and protection when exporting documents in PDF format](https://insider.office.com/en-us/blog/apply-sensitivity-labels-to-pdfs-created-with-office-apps).
  - Assigning different rights to different users when applying a label with User-defined permissions.
  - Support for account switching within the Office applications and mailbox switching in Outlook.
  - Control over whether users are allowed to disable labeling in their devices.

For a detailed comparison of the capabilities of built-in labeling in Office applications and those in the AIP plug-in, see [the public documentation for this topic](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip?view=o365-worldwide).


[!WARNING]
    This site supplements the official [Microsoft Purview documentation](https://docs.microsoft.com/microsoft-365/compliance/) and other information on the [docs.microsoft.com](https://docs.microsoft.com) site.
    
    
    

!!! warning "Please note"
    The deprecation announcement discussed above and the migration process discussed in this document is relevant only to the AIP add-in for Office, which is only one component of the AIP client for Windows. Other components shipped as part of this client are not affected by this migration and can continue to be used as today until changes relevant to these components are announced. These components include the Classify and Protect functionality in Windows Explorer for labeling Office and non-Office documents, the AIP viewer for opening protected non-Office files on Windows devices, the AIP Scanner for on-premises data and the AIP PowerShell module.

# What this migration involves

In order to migrate from the AIP add-in to built-in labeling in Office apps you must perform the following changes in your environment:

- Update Office applications to the required versions if not at that level already. Information about the required versions is included below.
- Implement new configurations to match advanced settings in the AIP app that are currently being used in your organization (this is not required in most cases since most organizations do not use these advanced settings). Details on such settings and the equivalent configurations for built-in labeling are included below.
- Disable the AIP add-in using the methods described in the relevant section below.

## What this migration **does not** involve

Migrating from the AIP add-in to built-in labeling in Office does not change the source of label definitions, their settings or their meaning. It also doesn't change how labels are encoded in labeled documents or how protected documents are constructed. This means that during the migration you are **not** required to:

- Create or modify your labels or label policies.
- Relabel or re-protect existing documents or emails.
- Make configuration changes to services that use labels or refer to labels such as DLP, Microsoft 365 autolabeling, SharePoint, OneDrive or Exchange online, Microsoft Defender for Applications, third party software that is compatible with sensitivity labels.
- Migrate users mailboxes or data to the cloud. Built-in sensitivity labeling in Office apps is compatible with Office apps when they access documents on-premises or connect to on-premises mailboxes. It is also compatible with the use of the RMS connector for organizations that have deployed it to support on-premises SharePoint and Exchange servers.
- Removing the AIP client from desktops. After migrating to built-in sensitivity labels in Office applications, the AIP client can continue to be deployed in Windows devices if required for other uses such as labeling and protection of non-Office files.
- Make any changes on non-Windows devices. Office apps in Mac, iOS and Android devices are already using built-in sensitivity labels so they do not require any changes.
- Stopping or changing the use of the AIP Scanner (now the MIP Scanner) or AIP PowerShell commandlets. The same versions you currently use can continue to be used in the same configurations.

# Migrating from the AIP add-in to built-in labeling in Office apps

Now that you understand why you should be migrating fro the AIP add-in to built-in sensitivity labels in Office, [click here](https://microsoft.github.io/ComplianceCxE/playbooks/AIP2MIP/GetStarted/) to learn how to plan and execute this migration.  

