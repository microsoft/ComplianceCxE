![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Labeling Automation` / `Default Labels`

Default labels set a base level of protection settings that you can apply to all your content and differentiate them by content type.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

| Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](AIPLatest) | :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](MIPLatest) | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :---- | :---- | :---- | :---- |
| :material-numeric-1-circle:{ .num  } **Automation Outcome: User-Based Default label** <br>Determines if admins can assign a label by default. | :material-shield-check:{ .success } `Supported`<br>Admins define policy that applies a default sensitivity to unlabeled new or edited documents **automatically**. |  :material-shield-check:{ .success } `Same as AIP` | :material-shield-check:{ .success } `No change` |
| :material-numeric-2-circle:{ .num  } **Automation Triggers** <br>Determines how/when the automation outcome is evaluated. | :material-shield-check:{ .success } `Supported`<br>For files, default label is applied to an editable file while it’s loaded, which changes the file’s content. This may cause unexpected Save prompts for users who don’t make changes to an unlabeled file.<br><br>For emails, default label is applied when the new/reply message is loaded. |  :material-shield-check:{ .success } `Supported`<br>For files, default label is triggered only during the save flow, ensuring that files are labeled when their edits are saved without unnecessary prompts that impact user productivity. See [note 1 below](#change-management-notes).<br><br>For emails, same as AIP. | :material-calendar-clock:{ .planning } `In Planning`<br>For files, new [sensitivity bar](../UX/SensitivityBar.md) displays the default label within the Save flow so users never miss the automated sensitivity when they persist changes to a file. |
| :material-numeric-3-circle:{ .num  } **Workload and content-type settings** <br>Determines if the automation outcomes can be customized by workload or content type | :material-shield-check:{ .success } `Supported`<br>See [content-type scoping](../Environment/ContentTypeScoping.md) for differentiating default labels for files vs. emails. |  :material-shield-check:{ .success } `Supported`<br>Same as AIP | :material-shield-check:{ .success } `No change` |
| :material-numeric-4-circle:{ .num  } **Precedence rules** <br>Determines how this automation outcome "competes" with other policies or settings that are in effect. | :material-shield-check:{ .success } `Supported`<br>Default labels only apply when the file is unlabeled and never replace an existing label.<br><br>Default labels are triggered only once per session. If a user removes a default label, it won’t get reapplied until the file’s next session.<br><br>If users are required to apply a label, default labeling policy takes precedence to prevent mandatory labeling prompts when a default label is defined. |  :material-shield-check:{ .success } `Supported`<br>Same as AIP | :material-shield-check:{ .success } `No change` |
| ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | 


### Change Management Notes

!!! note

    Since the label is applied during the save flow, the file may appear unlabeled in the sensitivity status until the user saves the file.


## Learn More

:material-help-circle: [Specify a default label](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels#what-label-policies-can-do)

:material-help-circle: [Outlook-specific options for default label and mandatory labeling](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#outlook-specific-options-for-default-label-and-mandatory-labeling)

:material-help-circle: [Easy Trials: Default sensitivity label policy](https://learn.microsoft.com/en-us/microsoft-365/compliance/mip-easy-trials#default-sensitivity-label-policy)


<!-- ============ LINKS =========== -->

[AIPLatest]: https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history
[MIPLatest]: https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps

[SCCLabels]: https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels
[IWLabels]: https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9
[SCCLanguages]: https://learn.microsoft.com/en-us/microsoft-365/compliance/create-sensitivity-labels#example-configuration-to-configure-a-sensitivity-label-for-different-languages
