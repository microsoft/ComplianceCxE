# Auditing `⚠️ Partially Support` 

Audting enables admins to review labeling activities in [Activity Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-activity-explorer) or [Content Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-content-explorer).

## Scenarios
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section.


|  | Use Case            | Add-In<br>(Current)| Built-In<br>(Current) | Built-In<br>(Coming Soon)|
| :----                  | :---- | :---- | :---- | :---- |
| 1 | **Disable Auditing** | `✅ Supported`  |  `✅ Supported`  | `✅ Supported`  |
| 2 | **Labeling Actions** <br>- FileSensitivityLabelApplied, FileSensitivityLabelChanged, FileSensitivityLabelRemoved | `✅ Supported`  |  `✅ Supported`  | `✅ Supported`  |
| 3 | **Auto labeling policy matches**| `✅ Supported`  |  `✅ Supported`  | `✅ Supported`  |
| 1 | **Protection Properties** <br>- ProtectionOwner, ProtectionOwnerBefore, ProtectionTime, ProtectionType, ProtectionTypeBefore, RMSOwner | `Not Supported`  |  `✅ Supported`  | `🔷 In Development`  |
|  | ~~~~~ | ~~~~~~~~~~ | ~~~~~~~~~~ | ~~~~~~~~~~ |


## Advanced Settings

lorem ipsum

## Migration Guidelines
- `IT 🟩🔲🔲 Silent Change`: As new auditing events or properties are added, they'll be available directly in content explorer or activiity explorer with no action from Admins.
- `IW 🟩🔲🔲 Silent Change`: end-users are not impacted by changes in auditing events.


## Learn more
- [Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#auditing-labeling-activities)
- [Activity Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-activity-explorer)
- [Content Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-content-explorer)
- [Auditing for PDFs labeled or encrypted in Office](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#pdf-support)
