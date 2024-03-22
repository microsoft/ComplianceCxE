# Migrating from WIP to Microsoft Purview for more comprehensive data security in your organization
Microsoft has announced sunset of certain capabilities within the solution known as Windows Information Protection (WIP), previously referred to as Enterprise Data Protection (EDP) by the end of Q3CY24. Below we will share more details about the scope of the deprecation and our recommendations to leverage Microsoft Purview Information Protection and Data Loss Prevention for your multi-cloud and multi-platform data protection needs. Microsoft Purview goes beyond WIP capabilities and provides more granular enforcement actions and classification techniques – Sensitive Info Types, Exact Data Match, and ML driven trainable classifiers can be used. Unlike WIP, Purview is also not limited to Windows devices as it also supports macOS. 

## How does deprecation impact WIP users?
WIP as an offering is no longer under active feature development. The sunset process will follow the standard [Windows client feature lifecycle](https://learn.microsoft.com/en-us/windows/whats-new/feature-lifecycle), which shows which existing features and capabilities are supported and for what timelines. This was announced in July [here](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/announcing-the-sunset-of-windows-information-protection-wip/ba-p/3579282). 
Following this deprecation announcement, the Microsoft Endpoint Manager team announced ending support for WIP without enrollment scenario by EOY 2022, which only impacts unmanaged devices. The announcement by the Microsoft Endpoint Manager team is [here](https://techcommunity.microsoft.com/t5/intune-customer-success/support-tip-end-of-support-guidance-for-windows-information/ba-p/3580091). Please visit the Microsoft Endpoint Manager announcement for the latest on the decommissioning of MEM’s support for the ‘unenrolled’ scenario.

## How should you respond to the deprecation notice?
If you are using WIP without enrollment, Microsoft will be communicating with you directly about the impact to your devices and the timelines for that impact. Please keep an eye on the message center for the latest updates.
Microsoft Endpoint Manager will continue to support WIP with enrollment (managed devices) scenarios for the duration of the OS lifecycle (until 2026) and will continue to offer options to enroll both corporate and personal devices for management (and subsequently to receive WIP policy).

## Common WIP Protection features
WIP provided customers with the following key capabilities:
•	Extend data protection to managed and unmanaged devices
•	Protect enterprise data at rest when it's stored on a protected device
•	Restrict which apps, removable drives, printers, network shares, and sites are allowed or restricted from copying, accessing, and storing sensitive data
•	Classify data based upon the app or site where it was created, copied, or downloaded.
•	Granular controls to designate different levels of data access restrictions
•	Remote wipe sensitive data at rest

## Learn how Purview is a more powerful replacement for WIP(As at February 2024)
<figure>
    <img src="docs/playbooks/img/WIP2MIP1.png"/> 
</figure>
<figure>
    <img src="docs/playbooks/img/WIP2MIP2.png"/> 
</figure>

## Leverage DLP to define work vs non-work data boundaries
To prevent users from egressing data via activities such as printing, copying to USB drives, network shares, or uploading to sensitive domains, you can define groups of unsanctioned devices such as printers and USB removeable drives or domains such as dropbox.com. Learn more here: [Configure endpoint DLP settings - Microsoft Purview (compliance) | Microsoft Learn])https://review.learn.microsoft.com/en-us/purview/dlp-configure-endpoint-settings?view=o365-worldwide&branch=main#sensitive-service-domains)
Defining apps/URLs as corporate or work, or enterprise network, and defining an action to enforce data that moves out of those domains
This example will use WIP’s Network Boundary and Allowed App configuration as examples.

Network boundary configuration within WIP:
<figure>
    <img src="docs/playbooks/img/WIP2MIP3.png"/> 
</figure>
Allowed Apps configuration within WIP:
<figure>
    <img src="docs/playbooks/img/WIP2MIP4.png"/> 
</figure>

For this scenario of sensitive business sites and apps we will use DLP policies and define sensitive service domain groups and restricted app groups to ensure protection of data. Data is in this organization is stored in SharePoint and OneDrive within Microsoft 365. 

To prevent external sharing of sensitive items from SharePoint and OneDrive we will create a DLP policy to address this. This table below covers some common variations and how to configure the policy.

| Intent | Policy Configuration in Purview |  
|:---|:---|
| “We need to block all sharing of SharePoint and OneDrive items to all external recipients...” | - <b>Administrative scope:</b> Full directory<br>- <b>Where to monitor:</b> SharePoint sites, OneDrive accounts <br>- <b>Conditions</b> for a match: First Condition > Shared outside my org <br>- <b>Action:</b> Restrict access or encrypt the content in Microsoft 365 locations > Block users from receiving email or accessing shared SharePoint, OneDrive > Block only people outside your organization| 
| "...that contain social security numbers, credit card data or have the "Confidential" sensitivity label...” | - <b>What to monitor:</b> use the Custom template <br>- <b>Condition for a match:</b> Create a second condition that is joined to the first condition with a boolean AND <br>- <b>Conditions for a match:</b> Second condition, first condition group > Content contains Sensitive info types U.S. Social Security Number (SSN), Credit Card Number <br>- <b>Condition group configuration:</b> Create a second Condition group connected to the first by boolean OR <br>- <b>Condition for a match:</b> Second condition group, second condition > Content contains any of these sensitivity labels Confidential.|
| “...We don't want this to apply to anyone on the Human Resources team...” | - <b>Where to apply </b> exclude the Human Resources Team OneDrive accounts| 
| "...We want to notify our Security team with an email every time a file is shared and then blocked..." | -- <b>Incident reports: </b> Send an alert to admins when a rule match occurs <br>- <b>Send email alerts to these people (optional): </b> add the Security team <br>- <b>Send an alert every time an activity matches the rule: </b> selected <br>- <b>Use email incident reports to notify you when a policy match occurs: </b> On <br>- <b>Send notifications to these people: </b> add individual admins as desired <br>- <b>You can also include the following information in the report:  </b> Select all options|
| "...In addition, we want the user to be alerted via email and within the interface if possible...” | - <b>User notifications </b> On <br>- <b>Notify uses in Office 365 with a policy tip: </b> selected| 
| “...Lastly, we don’t want any exceptions to the policy and need to be able to see this activity within the system...” | - <b>User overrides: </b> Not selected| 

For files stored on the device (either Windows 10/11 or MacOS) itself, we will protect data egress with an Endpoint DLP policy. 
Within DLP settings, we can define the set of Restricted App groups and Sensitive Service Domains. These groups are able to have their own enforcement mode in the policy configuration.
<figure>
    <img src="docs/playbooks/img/WIP2MIP5.png"/> 
</figure>
Allowed Apps configuration within WIP:
<figure>
    <img src="docs/playbooks/img/WIP2MIP6.png"/> 
</figure>

With our <b>App Allowlist feature coming in Q1 2024</b>, admins can choose to only allow a group of known apps, and block all other apps. 

To begin configuring the Endpoint DLP policy:
1.	Create and scope a policy that is applied only to the Devices location. 
2.	Create a rule that uses the content condition that is triggered by any of our sensitive data classifiers, in this case we will use Credit Card Number as an example.
3.	In the action, select Audit or Restrict activities on devices.
4.	Select the user activities you want to monitor or restrict and the actions you want Microsoft Purview to take in response to those activities. These actions can include:

   a.	Upload to a restricted cloud service domain. Here we will use the domain groups created earlier to set a unique enforcement for those groups, as well as the overall enforcement mode. 
   <figure>
    <img src="docs/playbooks/img/WIP2MIP7.png"/> 
</figure>
    b.  Paste to supported browsers
    <br>c.	Copy to clipboard
    <br>d.	Copy to removeable USB device
    <br>e.	Copy to Network Drive
   <br> f.	Print
   <br> g.	Copy to unallowed Bluetooth app
   <br> h.	Copy or move using RDP

<br>5.	In addition to the overall enforcement action, more granular exceptions can be configured based on either corporate network presence or VPN groups. VPN groups can be configured in the Endpoint DLP settings page.
<br>6.	File activities for apps in restricted app groups can also be used to define enforcement modes unique from the enforcement overall for defined app groups from Settings page.

## Labeling from source

Default SharePoint document library labels: When SharePoint is enabled for sensitivity labels, you can configure a default label for document libraries. Then, any new files uploaded to that library, or existing files edited in the library will have that label applied if they don't already have a sensitivity label, or they have a sensitivity label but with lower priority. This can be used to replicate the Personal / Work boundary functions of WIP. The label can then be used as a condition in any DLP policy.

## Labeling protection for unmanaged devices

In BYOD use cases where the Endpoint client can be offboarded by the user, an additional layer of protection should be applied to data with Labeling with Encryption.
When you create a sensitivity label, you can restrict access to content that the label will be applied to. When a document, email, or meeting invite is encrypted, access to the content is restricted, so that it:
•	Can be decrypted only by users authorized by the label's encryption settings.
•	Remains encrypted no matter where it resides, inside or outside your organization, even if the file's renamed.
•	Is encrypted both at rest (for example, in a OneDrive account) and in transit (for example, email as it traverses the internet).
This encryption setting can be applied to any sensitivity label

<figure>
    <img src="docs/playbooks/img/WIP2MIP8.png"/> 
</figure>
<figure>
    <img src="docs/playbooks/img/WIP2MIP9.png"/> 
</figure>

To learn more visit [Apply encryption using sensitivity labels | Microsoft Learn](https://learn.microsoft.com/en-us/purview/encryption-sensitivity-labels)

## Conditional Access + session controls using Microsoft Defender for Cloud Apps
Microsoft Defender for Cloud Apps offers the ability to protect sensitive content in your SaaS apps through [Conditional Access App Control](https://learn.microsoft.com/en-us/defender-cloud-apps/proxy-intro-aad). It uses a reverse proxy architecture and integrates with your Identity Provider. It enables user app access and sessions to be monitored and controlled in real time based on access and session policies. You can configure access and session policies to either enforce labels or block actions on managed devices like download, cut, copy, print of sensitive documents on, for example, unmanaged devices. To see all protection actions that can be employed with access and session policies see [How Conditional Access App Control Works](https://learn.microsoft.com/en-us/defender-cloud-apps/proxy-intro-aad#how-it-works) 

## Using Windows MAM
Another solution that is designed to extend protection and configuration to unmanaged devices is MAM for Windows.  Windows MAM supports targeted management for org accounts and data within enabled apps on unmanaged devices through the following features:
<br>•	Application Configuration Policies allow administrators to pre-define app specific settings for the org account.  Example: Set homepage or favorites in Edge.
<br>•	Application Protection Policies enable administrators to control data protection and health checks for org data in the client application.  Example: Allow or block copy and paste of org data.
<br>•	Windows Defender Threat Defense integrates with the MAM health checks and allows administrators to configure automatic actions (block/wipe) based on the client device risk evaluated by the Windows Security Center.  Example: Immediately wipe all Org data if high risk malware is detected.
<br>•	App Protection Conditional Access enables administrators to block access to service data if the client app isn’t protected by MAM.  Example: End users cannot connect to Exchange via OWA if the browser isn’t protected by MAM.

The first application to adopt MAM for Windows is Microsoft Edge and will be available in CY2023.  Because it is a browser, Microsoft Edge will offer broad, MAM protected, access to org resources, including M365 web apps, SaaS apps and customer internet and intranet sites.

## Leverage Tenant Restrictions to manage how SaaS and LOB applications are accessed
To prevent users from egressing data within LOB applications and across SaaS applications through work and personal identities, we recommend turning on:s
<br>•	[Device Restrictions](https://learn.microsoft.com/en-us/mem/intune/configuration/device-restrictions-windows-10#cloud-and-storage) to control LOB access and behavior on managed devices 
<br>•	[Tenant Restrictions aka TRv2](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/tenant-restrictions) to control the list of tenants that users on your network are permitted to access. Azure AD only grants access to permitted tenants - all other tenants are blocked, even ones that your users may be guests in.

For more detailed information and instructions see: [Use tenant restrictions to manage access to SaaS apps - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/tenant-restrictions) and [Device restriction settings for Windows 10/11 in Microsoft Intune | Microsoft Learn.](https://learn.microsoft.com/en-us/mem/intune/configuration/device-restrictions-windows-10#cloud-and-storage) 

You can also clearly define isolation policies between sanctioned LOB applications that are allowed to access sensitive corporate data vs those non-LOB applications that are blocked – e.g. allow Outlook, and block notepad+. You have the ability to prevent users from adding non-work accounts to sanctioned LOB applications – e.g. lock down Outlook to corporate identity only. Learn more [here](https://learn.microsoft.com/en-us/mem/intune/configuration/email-settings-configure?tabs=outlook-android%2Coutlook-ios%2Coutlook-windows#windows-client)


