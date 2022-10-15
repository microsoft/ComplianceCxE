![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Auditing` 

Auditing enables admins to review labeling activities in [Activity Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-activity-explorer) or [Content Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-content-explorer).


## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case  | :simple-microsoftazure: Add-In<br>:material-download: `Latest`| :material-microsoft-office: Built-In<br>:material-cloud-download: `Current Channel` | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :---: | :---- | :---- | :---- | :---- |
| 1 | **Disable Auditing** <br>Determines whether apps respect the [`EnableAudit`](https://learn.microsoft.com/en-us/powershell/module/exchange/set-labelpolicy?view=exchange-ps#-advancedsettings) setting  | :material-shield-check:{ .success } `Supported` |  :material-shield-check:{ .success } `No Change` | :material-shield-check:{ .success } `No Change` |
| 2 | **Log Labeling Actions** <br>FileSensitivityLabelApplied, FileSensitivityLabelChanged, FileSensitivityLabelRemoved  | :material-shield-check:{ .success } `Supported`  |  :material-shield-check:{ .success } `No Change` | :material-shield-check:{ .success } `No Change` |
| 3 | **Log Auto labeling policy matches** <br>xxxx  | :material-shield-check:{ .success } `Supported`  |  :material-shield-check:{ .success } `No Change` | :material-shield-check:{ .success } `No Change` |
| 4 | **Log Protection Properties** <br>ProtectionOwner, ProtectionOwnerBefore, ProtectionTime, ProtectionType, ProtectionTypeBefore, RMSOwner  | :material-shield-check:{ .success } `Supported` |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-calendar-star:{ .preview } `In Preview` |
|  | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |


## Learn More

- [Auditing Labeling Activities](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#auditing-labeling-activities)
- [Sensitivity label activities](https://learn.microsoft.com/en-us/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance#sensitivity-label-activities)
- [Activity Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-activity-explorer)
- [Content Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-content-explorer)
- [Auditing for PDFs labeled or encrypted in Office](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#pdf-support)
