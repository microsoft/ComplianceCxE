# Step 2: Deploy M365 Apps for Enterprise
![Step2](https://user-images.githubusercontent.com/43501191/194729700-2ff6cba2-4e1a-4944-adc3-49cf9ed1c774.png)

## Overview
The second step in preparing your migration to built-in labeling from AIP Add-in is to verify that all its users are configured and deployed with supported versions of Word, Excel, PowerPoint, and Outlook.

To use sensitivity labels that are built into Office desktop apps for Windows and Mac, you [**must use a subscription edition of Office**](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#labeling-client-for-desktop-apps), aka M365 Apps for Enterprise. The built-in labeling client doesn't support standalone editions like Office 2016, sometimes called "Office Perpetual".

> ⚠️ Note: M365 Apps for Enterprise **require a network connection with internet access** so they can communicate with Microsoft 365 services. Permanently disconnected devices without the ability to access Microsoft 365 services can't use built-in sensitivity labels. If you have environments with such devices, work with your Microsoft account team to discuss options to integrate these devices into your information protection environment.


## Checklist
If your users are fully deployed for M365 Apps for Enterprise, proceed to [step 3](AIP2MIPStep3.md). Otherwise, follow this checklist to plan your migration.

- [ ] [Identify devices that are running the AIP Add-in](https://learn.microsoft.com/en-us/deployoffice/admincenter/inventory) and confirm they're all using M365 Apps
- [ ] For users who are not using supported editions of Office, consult your Office deployment team to evaluate a migration strategy. 
- [ ] [Leverage the Microsoft 365 FastTrack](https://learn.microsoft.com/en-us/fasttrack/introduction) resources to help you plan and manage your deployment.
- [ ] [Review the minimum supported Office version](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#sensitivity-label-capabilities-in-word-excel-and-powerpoint) for sensitivity labeling capabilites you need.

### Recommendations
- To take full advantage of the latest sensitivity labeling capabilities in Office powered by Microsoft Purview, consider using [current or monthly release channels](https://learn.microsoft.com/en-us/deployoffice/overview-update-channels#comparison-of-the-update-channels-for-microsoft-365-apps)
- If you're deploying M365 Apps for the first time, but aren't yet ready to adopt the built-in labeling experience, [opt-out of built-in labeling](https://aka.ms/AIP2MIP/HowTo/OptOut). 

> 💡 Tip: Check out [Office Deployment Insiders](https://www.youtube.com/c/OfficeDeploymentInsiders) YouTube channel for quick and easy tips to understand how to take manage your organization's deployment of M365 Apps.

## Additional Resources
- [M365 Admin Center's inventory of devices and add-ins](https://learn.microsoft.com/en-us/deployoffice/admincenter/inventory)
- [Choose how to install M365 Field Guide](https://learn.microsoft.com/en-us/deployoffice/fieldnotes/install-options)
- [Office Deployment Insiders](https://www.youtube.com/c/OfficeDeploymentInsiders) YouTube channel
