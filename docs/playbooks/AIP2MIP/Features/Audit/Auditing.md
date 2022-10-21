![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Auditing` 

Auditing enables admins to review labeling activities in [Activity Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-activity-explorer) or [Content Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-content-explorer).


## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

| Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :---- | :---- | :---- | :---- |
| :material-numeric-1-box:{ .num  } **Disable Auditing** <br>Determines whether auditing can be disabled.  | :material-shield-check:{ .success } `Supported`<br>Uses advanced setting [`EnableAudit`](https://learn.microsoft.com/en-us/powershell/module/exchange/set-labelpolicy?view=exchange-ps#-advancedsettings) |  :material-shield-check:{ .success } `Supported` | :material-shield-check:{ .success } `No change` |
| :material-numeric-2-box:{ .num  } **Log Labeling Actions** <br>Determines whether `FileSensitivityLabelApplied`, `FileSensitivityLabelChanged`, `FileSensitivityLabelRemoved` are logged.  | :material-shield-check:{ .success } `Supported` |  :material-shield-check:{ .success } `Supported` | :material-shield-check:{ .success } `No change` |
| :material-numeric-3-box:{ .num  } **Log Auto labeling policy matches** <br>Determines whether label actions resulting from auto labeling are captured in audit log.  | :material-shield-check:{ .success } `Supported`<br>Uses advanced setting [`LogMatchedContent`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#send-information-type-matches-to-azure-information-protection-analytics) |  :material-shield-check:{ .success } `Supported` | :material-shield-check:{ .success } `No change` |
| :material-numeric-4-box:{ .num  } **Log Protection Properties** <br>Determines whether `ProtectionOwner`, `ProtectionOwnerBefore`, `ProtectionTime`, `ProtectionType`, `ProtectionTypeBefore`, `RMSOwner` are logged.  | :material-shield-check:{ .success } `Supported` |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-dev-to:{ .development  } `In Development` |
| ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |


## Learn More

- [Auditing Labeling Activities](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#auditing-labeling-activities)
- [Sensitivity label activities](https://learn.microsoft.com/en-us/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance#sensitivity-label-activities)
- [Activity Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-activity-explorer)
- [Content Explorer](https://learn.microsoft.com/en-us/microsoft-365/compliance/data-classification-content-explorer)
- [Auditing for PDFs labeled or encrypted in Office](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#pdf-support)
