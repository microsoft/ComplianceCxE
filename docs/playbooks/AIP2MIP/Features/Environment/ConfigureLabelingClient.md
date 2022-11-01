![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Environment` / `Configure Labeling Clients for Office `

Office apps allow you to configure which which labeling client is used to view and apply sensitivity labels with Word, Excel, PowerPoint, and Outlook.

The product capabilities table below references the following Office configurations by their registry key names:

- [`UseOfficeForLabelling`](../../AIPException.md): Refers to the configuration "**Use the Sensitivity feature in Office to apply and view sensitivity labels**", which can be administered via Group Policy or Office Cloud Policy. This setting controls how Office apps decide whether to use built-in labeling.
- [`AIPException`](../../AIPException.md): Refers to a *new configuration* "**Use the Azure Information Protection add-in for sensitivity labeling**", which can be administered via Group Policy or Office Cloud Policy. This setting controls whether Office apps allow AIP add-in to load. Starting in v2211, this setting is required when using AIP Add-in. See :material-alert-circle:{ .warning } [warning below](#change-management-notes) for more information.

Review the configuration matrix for [`UseOfficeForLabelling` and `AIPException`](../../AIPException.md) for more information.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

| Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`][AIPLatest] | :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`][MIPLatest] | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :---: | :---- | :---- | :---- | 
| :material-numeric-1-circle:{ .num  }  **Disable Microsoft Information Protection** <br>Determines how Office apps can prevent all of Microsoft's labeling solutions from loading. | :material-shield-off-outline:{ .notplanned  } `Not Applicable`<br>Configuration handled by Office, not AIP Add-in client. |  `Supported`<br>Use [`UseOfficeForLabelling == false`](../../AIPException.md) to disable built-in labeling. If AIP Add-in is installed, you also need to disable the add-in for each Office app to fully disable labeling from Microsoft. | :material-calendar-star:{ .preview } `In Preview`<br>Use [`UseOfficeForLabelling == false`](../../AIPException.md) disables all labeling from Microsoft (including AIP Add-in). See :material-alert-circle:{ .warning } [warning below](#change-management-notes). |
| :material-numeric-2-circle:{ .num  }  **Use AIP Add-in for sensitivity labeling powered by Microsoft Purview** <br>Determines how to configure Office to use AIP Add-in (if installed) | :material-shield-check:{ .success } `Supported`<br>AIP Add-in is set as the default for Office during its installation. |  :material-shield-check:{ .success } `Supported`<br>Office apps can be configured with [`UseOfficeForLabelling == false`](../../AIPException.md) to disable built-in labeling, which forces AIP add-in's default configuration to load. | :material-calendar-star:{ .preview } `In Preview`<br>Starting v2211, Office apps must be explicitly configured to allow the AIP add-in to load. If [`UseOfficeForLabelling`](../../AIPException.md) is not configured, Office will default to built-in labeling. Customers must deploy a new configuration [`AIPException == true`](../../AIPException.md) to continue using AIP add-in during its maintenance period. |
| :material-numeric-3-circle:{ .num  }  **Use built-in labeling for sensitivity labeling powered by Microsoft Purview** <br>Determines how to configure Office to use built-in labeling  | :material-shield-check:{ .success } `Supported`<br>When AIP client is installed, the add-in is automatically set as the default labeling client for Office.  |  :material-shield-check:{ .success } `Supported`<br>When AIP client is installed, the add-in is automatically set as the default labeling client for Office. Admins can deploy [`UseOfficeForLabelling == false`](../../AIPException.md) to explicitly disable built-in labeling. | :material-alert:{ .error } `Major Change`<br>:material-calendar-star:{ .preview } `In Preview`<br>Starting in v2211 in Current Channel, Office will no long support the AIP add-in as the default labeling client. To allow the AIP add-in while using Office, admins must deploy [`AIPException == true`](../../AIPException.md). |
|  | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |

### Change Management Notes

!!! warning

    If you've previously configured `UseOfficeForLabelling==false` to enable the AIP add-in for Office, 
    users will be unable to view or apply labels after `Current Channel v2211`. 
    You must deploy [`AIPException==true`](../../AIPException.md) to continue using AIP add-in.


## Learn More

:material-help-circle: [Configuration matrix for `UseOfficeForLabelling` and `AIPException`](../../AIPException.md)

:material-help-circle: [Disable sensitivity labeling from Microsoft Information Protection](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#office-file-types-supported)

:material-help-circle: [Choose between add-in or built-in labeling from Microsoft Information Protection](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip)

:material-help-circle: [Use Cloud Policy Service to easily deploy configuration policies](https://learn.microsoft.com/en-us/deployoffice/admincenter/overview-cloud-policy)



<!-- ============ LINKS =========== -->

[AIPLatest]: https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history
[MIPLatest]: https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps
