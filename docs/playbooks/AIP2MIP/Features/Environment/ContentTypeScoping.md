![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Labeling Environment` / `Scope labels and policies by content type`

Choose who to configure which labels and policies are published to which workload.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

| Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :--- | :---- | :---- | :---- | 
| :material-numeric-1-circle:{ .num  } **Disable sensitivity labels by workload** <br>Determines how admins can disable labeling by app without disabling it for all apps. | :material-shield-check:{ .success } `Supported`<br>Admins can deploy Office configuration policy that disables AIP add-in in each Office app. | :material-shield-off-outline:{ .error } `Not Supported` |  :material-dev-to:{ .development  } `In Development`<br>Admins can configure a workload without sensitivity labels to disable labeling in that app. |
| :material-numeric-2-circle:{ .num  } **Publish different labels by content type** <br>Determines of admins can publish different labels for files vs. emails. | :material-shield-off-outline:{ .error } `Not Supported` | :material-shield-off-outline:{ .error } `Not Supported` |  :material-dev-to:{ .development  } `In Development`<br>Admins can configure different labels for files vs. emails. |
| :material-numeric-3-circle:{ .num  } **Configure different policies by content type** <br>Determines if admins can configure automation or enforcement policies differently based on content type. | :material-shield-check:{ .success } `Supported`<br>Admin can configure different default labels between files and emails. Admin can configure enforcement of mandatory labels in files but not emails. Admins can configure automatic labeling policies differently for files vs. emails. | :material-shield-check:{ .success } `Supported`<br>Same as AIP | :material-shield-check:{ .success } `Supported`<br>Same as AIP |
| ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | 


## Learn More

:material-help-circle: [Sensitivity labels in Office apps](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps)


<!-- ============ LINKS =========== -->

[AIPLatest]: https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history
[MIPLatest]: https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps
