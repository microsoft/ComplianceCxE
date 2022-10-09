# Configure Labeling Clients for Office 

`✅ Supported | ⚪⚪🔴 Major Change`

Office apps allow you to configure which which labeling client is used to view and apply sensitivity labels with Word, Excel, PowerPoint, and Outlook.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case             | Add-In| Built-In (Current) | Built-In (Coming Soon)|
| :----                   | :---- | :---- | :---- | :---- |
| 1 | **Disable Microsoft Information Protection (All)**   | `✅ Supported`  | `✅ Supported` No change | `✅ Supported` No change  |
| 2 | **Use built-in labeling by default**   | `✅ Supported` If you uninstal the AIP client, built-in labeling will load instead of add-in | `✅ Supported` If you set regkey `UseOfficeForLabelling==true`, built-in labeling loads instead of the add-in | `✅ Supported` No change  |
| 3 | **Use add-in labeling by default**    | `✅ Supported` When the add-in is installed, it sets itself as the default labeling client for Office | `✅ Supported` If you set regkey `UseOfficeForLabelling==false`, add-in labeling loads instead of the built-in if it's installed | `⭐ In Preview` You must  deploy regkey `AIPException==true` to continue using add-in |

## Migration Guidance
    !!! note
        If you've previously configured `UseOfficeForLabelling==false` to enable the AIP add-in for Office, users will be unable to view or apply labels after `Current Channel v2211`. You must  deploy regkey `AIPException==true` to continue using add-in.

## Learn More
- [Disable sensitivity labeling from Microsoft Information Protection]([https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#office-file-types-supported](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#if-you-need-to-turn-off-built-in-labeling-in-office-apps-on-windows))
- [Choose between add-in or built-in labeling from Microsoft Information Protection]([https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-file-types](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip))
- [Use Cloud Policy Service to easily deploy configuration policies](https://learn.microsoft.com/en-us/deployoffice/admincenter/overview-cloud-policy)
