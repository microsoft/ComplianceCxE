# Oversharing Popups Playbook

## Introduction

Labeled emails contain sensitive information to your organization to be shared with intended recipients only. Oversharing popups enables an admin to configure popups that ensure the end-user sending a labeled email or attachment is aware of your organization’s policies. These policies can be configured to warn the user before send, request business justification input from the user or block send of the sensitive labeled content. Previously available in AIP add-in, oversharing popups is now available in MIP built-in labeling for preview. For more information about custom settings in AIP Add-in, view our [admin guide for the AIP client](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent).

## Scenarios in Scope

### Get a list of existing Oversharing Popup settings

To determine whether your organization’s current configuration of oversharing popups in AIP add-in is available for preview, please run the following PowerShell cmdlets. You will need an administrator email with Compliance administrator or Global administrator role and the `<policy name>` that is configured with oversharing popups.

1.	Connect to Security & Compliance PowerShell using an administrator email (Link)
2.	Once you have connected to the Security & Compliance PowerShell, get the label policy configuration:

```PS C:\> (Get-LabelPolicy -Identity Global).settings```

The PowerShell terminal will show the label policy configuration that includes all custom settings for that policy.

### Scenarios in-scope for preview

Oversharing popups configurations are available for migration from AIP add-in in two phases. To determine if your organization’s configuration is eligible for preview of the current phase, map your Oversharing Popup settings (from the previous step) to one or more of the configuration options listed below. If your scenarios are not part of the current preview, they will be available in phase two.

Phase 1: Labeled email and attachments for warn, justify, and block popups.

|AIP Add-In Custom Setting|Configuration Scenario|
|------------------|------------------|
|OutlookWarnUntrustedCollaborationLabel / OutlookWarnTrustedDomains|#1 Warn Popup and Trusted Domains|
|OutlookJustifyUntrustedCollaborationLabel / OutlookJustifyTrustedDomains|#2 Justify Popup and Trusted Domains|
|OutlookBlockUntrustedCollaborationLabel / OutlookBlockTrustedDomains|#3 Block Popup and Trusted Domains|

Scenarios out-of-scope for phase 1
If the label policy contains any of the custom settings listed below, you will have to wait for Phase 2.

|AIP Add-In Custom Setting|Configuration Scenario|
|------------------|------------------|
|OutlookUnlabeledCollaborationAction|Unlabeled emails and attachments|
|OutlookOverrideUnlabeledCollaborationExtensions|File extension allow list|
|OutlookUnlabeledCollaborationActionOverrideMailBodyBehavior|Unlabeled emails without attachments|
|OutlookCollaborationRule|Customized popup messages|

## Configuration Steps

To get create and deploy DLP policies, view the Microsoft Purview [DLP docs](https://learn.microsoft.com/en-us/microsoft-365/compliance/dlp-create-deploy-policy?view=o365-worldwide#scenario-2-show-policy-tip-as-oversharing-popup-preview) and create a policy matching scenario 2. For each AIP matched configuration, follow the "Steps to create policy for scenario 2" with the following modifications:

### 1. Warn Popup with Trusted Domains

Skip step 17 and follow the rest of the steps.
This ensures **block access for everyone** is not configured. 

Once deployed, users see this warn popup on send:

![image](https://user-images.githubusercontent.com/25543918/224189550-26887252-0e5d-4c24-9f4f-4918eaac3ff1.png)

### 2. Justify Popup with Trusted Domains

Follow all steps and replace step 20 with the following:

20. Select **Allow overrides from M365 services** and **Require a business justification to override**. (optional) To show the acknowledgement option, select **Require the end user to explicitly acknowledge the override**.

Once deployed, users see this justify popup (with optional acknowledgement option) on send:

![image](https://user-images.githubusercontent.com/25543918/224188889-3d9a0c82-0dad-4c56-b616-b41914c3abb7.png)

### 3. Block Popup with Trusted Domains

Follow all steps.

Once deployed, users see this block popup on send:

![image](https://user-images.githubusercontent.com/25543918/224189075-3e2e32fd-64ca-4720-88ea-718b9cfb953e.png)

!!! info
    In Outlook, untrusted recipients are listed in the policy tip while the email is drafted. Previously in AIP, untrusted recipients were shown in the popup dialogue.

## PowerShell Instructions (Advanced)

DLP policies and rules can also be configured in PowerShell. To configure oversharing popups using PowerShell, first create a DLP policy and add DLP rules for each warn, justify or block popup type.

1.	Configure and scope your DLP Policy using [New-DlpCompliancePolicy](https://learn.microsoft.com/powershell/module/exchange/new-dlpcompliancepolicy?view=exchange-ps#-exchangelocation)
2.	Configure each oversharing rule using [New-DlpComplianceRule](https://learn.microsoft.com/powershell/module/exchange/new-dlpcompliancerule?view=exchange-ps)

To configure a new DLP policy:

```PS C:\> New-DlpCompliancePolicy -Name <DLP Policy Name> -ExchangeLocation All```

The sample DLP policy is scoped to all users in your organization. Scope your DLP Policies using ```-ExchangeSenderMemberOf``` and ```-ExchangeSenderMemberOfException```.

|Parameter|Configuration|
|-----------------|-----------------|
|-ContentContainsSensitiveInformation|Configures one or more sensitivity label conditions. This sample includes one. At least one label is mandatory.|
|-ExceptIfRecipientDomainIs|List of trusted domains.|
|-NotifyAllowOverride|"WithJustification" enables justification radio buttons, "WithoutJustification" disables them.|
|-NotifyOverrideRequirements|"WithAcknowledgement" enables the new acknowledgement option. Optional.|

### Scenario #1 Warn Popup and Trusted Domains

To configure a new DLP rule:

```PS C:\> New-DlpComplianceRule -Name <DLP Rule Name> -Policy <DLP Policy Name> -NotifyUser Owner -NotifyPolicyTipDisplayOption "Dialog" -ContentContainsSensitiveInformation @(@{operator = "And"; groups = @(@{operator="Or";name="Default";labels=@(@{name=<Label GUID>;type="Sensitivity"})})}) -ExceptIfRecipientDomainIs @("contoso.com","microsoft.com")```

### Scenario #2 Justify Popup and Trusted Domains

To configure a new DLP rule:

```PS C:\> New-DlpComplianceRule -Name <DLP Rule Name> -Policy <DLP Policy Name> -NotifyUser Owner -NotifyPolicyTipDisplayOption "Dialog" -BlockAccess $true -ContentContainsSensitiveInformation @(@{operator = "And"; groups = @(@{operator = "Or"; name = "Default"; labels = @(@{name=<Label GUID 1>;type="Sensitivity"},@{name=<Label GUID 2>;type="Sensitivity"})})}) -ExceptIfRecipientDomainIs @("contoso.com","microsoft.com") -NotifyAllowOverride "WithJustification"```

### Scenario #3 Block Popup and Trusted Domains

To configure a new DLP rule:

```PS C:\> New-DlpComplianceRule -Name <DLP Rule Name> -Policy <DLP Policy Name> -NotifyUser Owner -NotifyPolicyTipDisplayOption "Dialog" -BlockAccess $true -ContentContainsSensitiveInformation @(@{operator = "And"; groups = @(@{operator = "Or"; name = "Default"; labels = @(@{name=<Label GUID 1>;type="Sensitivity"},@{name=<Label GUID 2>;type="Sensitivity"})})}) -ExceptIfRecipientDomainIs @("contoso.com","microsoft.com")```

## Additional Customization Features

### Customize Policy Tips

In DLP Rule configuration, select “Customize the policy tip text” and enter the custom text option.

![image](https://user-images.githubusercontent.com/25543918/224189143-744a276d-4c0d-481e-b742-edde5558e11d.png)

Localize your custom policy tips with ```Set-DlpComplianceRule cmdlet``` and [-NotifyPolicyTipCustomTextTranslations](https://learn.microsoft.com/powershell/module/exchange/new-dlpcompliancerule#-notifypolicytipcustomtexttranslations) in Security & Compliance PowerShell.

### Customize Compliance URL for “Learn More”

In DLP Rule configuration, select “Provide a compliance URL for the end user to learn more about your organization’s policies.”

![image](https://user-images.githubusercontent.com/25543918/224189191-85c27113-8380-47a5-aa85-dbfc2afdaaf6.png)

When a user clicks “Learn more” in the popup body, the user will be redirected to the link configured.

![image](https://user-images.githubusercontent.com/25543918/224189203-c66a1518-e654-4199-8efe-61ed82c7f222.png)

## New Feature: Acknowledgement Option

In DLP Rule configuration, select “Allow overrides from M365 services” and “Require the end user to explicitly acknowledge the override” to enable the new acknowledgement option. 

![image](https://user-images.githubusercontent.com/25543918/224189217-fb90029c-2d42-4b98-b8bd-bdebe9b7cfeb.png)

If “Require a business justification to override” is selected, the business justification radio button options will be enabled in the popup UX.
In Outlook, the acknowledgement option requires the user to explicitly check the box to enable send:

![image](https://user-images.githubusercontent.com/25543918/224189240-399005f0-2a99-41ac-a4e2-d09dd0fdcac7.png)

