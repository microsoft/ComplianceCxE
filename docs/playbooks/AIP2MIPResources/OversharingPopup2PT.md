# Using policy tips for controlling oversharing based on attachment and email labels

If you are currently using the functionality in the Azure Information Protection Unified Labeling plugin for Outlook for controlling oversharing via alerting popups, you will need to implement equivalent functionality using DLP policy tips in Microsoft 365. This functionality is implemented in the AIP client using the [OutlookWarnUntrustedCollaborationLabel, OutlookJustifyUntrustedCollaborationLabel and OutlookBlockUntrustedCollaborationLabel](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) advanced configurations.
If you don't have these AIP advanced settings configured in your environment you don't need to follow the steps in this guide.

In this document we will review the different oversharing controls available in the AIP Unified Labeling client and how to configure in the compliance center equivalent functionality using Exchange DLP rules with policy tips that provide equivalent functionality. 

Pre-requisites:
- Users for which oversharing needs to be controlled need to be running a version of the Office applications that supports advanced policy tips. Learn about the required versions for each Office update channel [here](https://aka.ms/AIPMIPVersionParity)
- Users for which oversharing needs to be controlled need to be assigned one of the licenses described (on this page)[https://aka.ms/AIP2MIPPrereqs].


## Implementing rules that warn users about potential oversharing

If you are currently using the OutlookWarnUntrustedCollaborationLabel advanced setting in the AIP client to warn users of possible oversharing without blocking them, you need to implement a DLP policy for Exchange that has a rule with the following settings:

| **Configuration** | **Value** |
| --- | --- |
| Conditions | ** Content Contains ** / ** Sensitivity Label ** / The labels that need to be controlled |
|| ** And Not ** / ** Recipient domain is ** / list of internal domains allowed in the oversharing popup configuration |
|| As an alternative to the later condition you can use ** Content is shared from Microsoft 365 / With people outside my organization **| 
| --- | --- |
| Actions | No actions |
| User notification | Enabled |
|  | Notify users in Office 365 service with a policy tip |
|  | Customize the text of the policy tip to match the text in your oversharing popup configuration |
| User overrides | Disabled |

	
## Implementing rules that require justification from users when they try to share sensitive content externally via email

If you are currently using the OutlookJustifyUntrustedCollaborationLabel advanced setting in the AIP client to block sharing of sensitive content until they justify the action you need to implement a DLP policy for Exchange that has a rule with the following settings:

| **Configuration** | **Value** |
| --- | --- |
| Conditions | ** Content Contains ** / ** Sensitivity Label ** / The labels that need to be controlled |
|| ** And Not ** / ** Recipient domain is ** / list of internal domains allowed in the oversharing popup configuration |
|| As an alternative to the later condition you can use ** Content is shared from Microsoft 365 / With people outside my organization **| 
| --- | --- |
| Actions | Restrict access or encrypt the content in Microsoft 365 locations / Block everyone |
| User notification | Enabled |
|  | Notify users in Office 365 service with a policy tip |
|  | Customize the text of the policy tip to match the text in your oversharing popup configuration |
| User overrides | Allow overrides from M365 services / Allow overrides / Require user to provide a business justification to override |

## Implementing rules that block users from sending sensitive content externally via email

If you are currently using the OutlookBlockUntrustedCollaborationLabel advanced setting in the AIP client to block sharing of sensitive content without allowing users to override the action you need to implement a DLP policy for Exchange that has a rule with the following settings:

| **Configuration** | **Value** |
| --- | --- |
| Conditions | ** Content Contains ** / ** Sensitivity Label ** / The labels that need to be controlled |
|| ** And Not ** / ** Recipient domain is ** / list of internal domains allowed in the oversharing popup configuration |
|| As an alternative to the later condition you can use ** Content is shared from Microsoft 365 / With people outside my organization **| 
| --- | --- |
| Actions | Restrict access or encrypt the content in Microsoft 365 locations / Block everyone |
| User notification | Enabled |
|  | Notify users in Office 365 service with a policy tip |
|  | Customize the text of the policy tip to match the text in your oversharing popup configuration |
| User overrides | Disabled |
