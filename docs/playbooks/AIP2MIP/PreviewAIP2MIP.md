![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)


<h1 align="center">Preview programs for evaluating sensitivity labeling in M365 Apps</h1>

<p align="center">
<a href="https://aka.ms/AIP2MIP/HowTo/GetStarted">Playbook Overview</a> > <a href="../GetStarted">Get Started</a> > <a href="../AIP2MIPStep1">Step 1</a> > <a href="../AIP2MIPStep2">Step 2</a>  > <a href="../AIP2MIPStep3">Step 3</a>  > <a href="../AIP2MIPStep4">Step 4</a> [<b>Preview Programs</b>] > <a href="../AIP2MIPStep5">Step 5</a>
</p>


## Overview 
The best way to prepare for enabling the built-in labeling client is to get started today and try it out in your environment. We recommend deploying one of the available previews to subsets of your users and give feedback to Microsoft.

## Preview programs
Microsoft offers 3 preview channels to help you try information protection capabilities in M365 Apps. This gives you the opportunity to evaluate upcoming features early and provide feedback to the product team.

### 1. Alpha Preview

This is a pre-release private preview program that requires registration in the Purview Customer Connection Program (CCP) and opt-in to the alpha channel for a tenant of your choice. 

This program provides a unified testing environment for all unreleased information protection capabilities in Office apps, giving you a comprehensive testing platform. This is great even if your organization doesn't need all features being previewed because it reflects the eventual reality of your production environment and enables early integration and compatibility testing.

This is ideal for limited testing by your information protection team who are comparing functionality of the AIP add-in with built-in labeling. 

> Note: we do our best to deliver a high-quality preview experience, but this is still pre-production code that hasn't completed all quality assurance processes. You may encounter product quality issues and highly recommend you submit feedback.

#### Available features

As of `March 13, 2023`, the following features are available in the private preview. Note there may be other features included in the private preview if they've already graduated to the public preview.

`⭐ Available in private preview` 

- Block, Warn, Justify before sending emails based on sensitivity labels

`✳️ Graduated to public preview` 

- Sensitivity bar in Word, Excel, PowerPoint, and Outlook. [Learn more](https://insider.office.com/en-us/blog/sensitivity-bar-in-office-for-windows)
- AIP Add-in disabled by default. [Learn more](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip?view=o365-worldwide#how-to-configure-newer-versions-of-office-to-enable-the-aip-add-in)
- Specify a default sublabel for a parent label [Learn more](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#specify-a-default-sublabel-for-a-parent-label)
- Emails inherit the highest sensitivity from their attachments
- Ability to assign different labels to users between Files and Emails


`✅ Graduated to general availability` 

- Protect PDFs with sensitivity labels in Word, Excel, and PowerPoint. [Learn more](https://insider.office.com/en-us/blog/apply-sensitivity-labels-to-pdfs-created-with-office-apps)
- S/MIME encryption as an outcome of labeling. [Learn more](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#configure-a-label-to-apply-smime-protection-in-outlook)
- Users can restrict access to domain names when using user-defined permissions [Learn more](https://learn.microsoft.com/en-us/microsoft-365/compliance/encryption-sensitivity-labels?view=o365-worldwide#support-for-organization-wide-custom-permissions)


#### Program Requirements

- `🔶 Required` [Sign-up](https://aka.ms/JoinCompliancePrivacyCCP) for Microsoft Purview Customer Connection Program (CCP). Here you will provide a tenant ID that will be enabled for the private preview and agree to confidentiality requirements.
- `🔶 Required` [Enroll test devices](https://insider.office.com/en-us/business/explore) in the Office Insider Beta channel
- `🔶 Required` [Disable the AIP Add-in](AIPException.md) for the test devices. This preview only supports built-in labeling.
- `🔵 Recommended` [Enable product telemetry](https://learn.microsoft.com/en-us/deployoffice/privacy/overview-privacy-controls) to help the product team monitor success and quality metrics. We value your privacy and use compliant telemetry to help us see at-scale how our features are performing to decide whether they’re ready for broader release. 

> Note: Only devices enrolled in the Insider Beta channel of Office **and** signed-in using an account from the provided tenant ID will be activated for the private preview. 

> 💡 Tip: We recommend using test tenants wherever possible, but keep in mind that only users enrolled in the Insider Beta channel are affected. So you can choose to enroll your production environment since only users in the Beta channel would see the preview features.

<p align="center"><a href="https://aka.ms/JoinCompliancePrivacyCCP" target="_blank"><img src="https://user-images.githubusercontent.com/43501191/195403048-0d147259-99c5-4487-9fb7-e235882b4a79.png" alt="Join Alpha Preview"/></a></p>


### 2. Beta Preview

This is the standard public preview program available to all subscribers of M365 Apps. This is ideal for small/medium pilots for deploying the built-in labeling client to a population of your end-users.

#### Available features

You can review full list of public preview features, please visit [Sensitivity label capabilities](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#support-for-sensitivity-label-capabilities-in-apps).

#### Program Requirements

- `🔶 Required` [Enroll test devices](https://insider.office.com/en-us/business/explore) in the Office Insider Beta channel
- `🔶 Required` [Disable the AIP Add-in](AIPException.md) for the test devices. This preview only supports built-in labeling.
- `🔵 Recommended` [Sign-up](https://aka.ms/JoinCompliancePrivacyCCP) for Microsoft Purview Customer Connection Program (CCP). Although we don't use the tenant ID you might enroll in the CCP for the public Beta Preview, you can still benefit from the community within the CCP.
- `🔵 Recommended` [Enable product telemetry](https://learn.microsoft.com/en-us/deployoffice/privacy/overview-privacy-controls) to help the product team monitor success and quality metrics. We value your privacy and use compliant telemetry to help us see at-scale how our features are performing to decide whether they’re ready for broader release. 

<p align="center"><a href="https://insider.office.com/en-us/business/explore" target="_blank"><img src="https://user-images.githubusercontent.com/43501191/195403244-ddfd1b3d-cf9e-4e3e-8586-49e16fef1df2.png" alt="Join Beta Preview"/></a></p>

### 3. General Avaialbility Preview

The [Current Channel (CC)](https://learn.microsoft.com/en-us/deployoffice/overview-update-channels#preview-upcoming-new-features-of-current-channel) and [Semi-Annual Enterprise Channel (SAEC)](https://learn.microsoft.com/en-us/deployoffice/overview-update-channels#preview-upcoming-new-features-of-semi-annual-enterprise-channel) offer previews of functionality that's staged for general availability release. This is ideal for large pilots of enabling the built-in labeling experience, allowing at-scale validation across day-to-day scenarios and line-of-business apps.

#### Program Requirements

- `🔶 Required` [Sign up for CC preview or SAEC preview](https://learn.microsoft.com/en-us/DeployOffice/overview-update-channels#preview-upcoming-new-features-of-current-channel) for the test devices. This preview only supports built-in labeling.
- `🔶 Required` [Disable the AIP Add-in](AIPException.md) for the test devices. This preview is only support built-in labeling.
- `🔵 Recommended` [Sign-up](https://aka.ms/JoinCompliancePrivacyCCP) for Microsoft Purview Customer Connection Program (CCP). Although we don't use the tenant ID you might enroll in the CCP for the public Beta Preview, you can still benefit from the community within the CCP.
- `🔵 Recommended` [Enable product telemetry](https://learn.microsoft.com/en-us/deployoffice/privacy/overview-privacy-controls) to help the product team monitor success and quality metrics. We value your privacy and use compliant telemetry to help us see at-scale how our features are performing to decide whether they’re ready for broader release. 

<p align="center"><a href="https://learn.microsoft.com/en-us/deployoffice/overview-update-channels#preview-upcoming-new-features-of-current-channel" target="_blank"><img src="https://user-images.githubusercontent.com/43501191/195403803-08f43086-8054-4749-af57-8f003f4e0938.png" alt="Join GA Preview"/></a></p>

## Help us improve

The primary goal of the preview programs is to get customer feedback to identify quality/adoption issues early. Please submit feedback whenever you experience something you don’t like, or even that you do like! We review all feedback regularly. 

- **In-product feedback**. All M365 apps provide a way to send feedback directly to Microsoft. For the apps within this preview, [use Ribbon > Help > Feedback](https://insider.office.com/en-us/handbook#Provide-feedback) to submit bugs, praise, or suggestions. 
- **Customer Connection Program (CCP)**. The CCP allows you to connect with product experts to submit feedback. We will regularly host product roundtables, demos, trainings, and other engagements.
- **Direct engagement with a Microsoft contact**. You’re always welcome to reach out to your existing Microsoft contact from the relevant product team or customer experience team. However, to help facilitate tracking of feedback and maintaining compliant customer feedback, we highly encourage you to use in-product feedback.

> ⚠️ Warning: you cannot use support tickets to provide feedback for features in the private preview. Please use only the 3 options provided above. 


## Additional Resources

- [Find your Microsoft 365 tenant ID](https://docs.microsoft.com/en-us/onedrive/find-your-office-365-tenant-id)
