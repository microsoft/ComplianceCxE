![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Labeling Automation` / `Automatic labeling of files and emails using default labels`

Use default labels to set a base level of protection that you want applied to all your content.


## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

| Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`][AIPLatest] | :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`][MIPLatest] | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :---- | :---- | :---- | :---- | 
| :material-numeric-1-circle:{ .num  } **Automation Outcome: User-Based Default label** <br>Determines whether users can be assigned a default label for files and emails | :material-shield-check:{ .success } `Supported`<br>Admins define policy that applies a default sensitivity to unlabeled new or edited documents automatically. | :material-shield-check:{ .success } `Supported`<br>Same as AIP | ::material-shield-check:{ .success } `Supported`<br>No change |
| :material-numeric-2-circle:{ .num  } **Automation Triggers** <br>Determines what actions cause the default label policy to get evaluated and applied. | :material-shield-check:{ .success } `Supported`<br>For **files**, default label is applied to an editable file while it’s loaded, which changes the file’s content. This may cause unexpected Save prompts for users who don’t make changes to an unlabeled file.<br><br>For **emails**, default label is applied when the new/reply message is loaded. | :material-shield-check:{ .success } `Supported`<br>For **files**, default label is triggered only during the save flow, ensuring that files are labeled when their edits are saved without unnecessary prompts that impact user productivity. See note 1 below.<br><br>For **emails**, same as AIP. | :material-calendar-star:{ .preview } `In Preview`<br>For **files**, new [sensitivity bar](../UX/SensitivityBar.md) displays the default label within the Save flow so users never miss the automated sensitivity when they persist changes to a file. |
| :material-numeric-3-circle:{ .num  } **Precedence rules** <br>Determines whether and how policies or use cases take precedence over default labeling triggers. | :material-shield-check:{ .success } `Supported`<br>Default labels only apply when the file is **unlabeled** and never replace an existing label.<br><br>Default labels are triggered only **once per session**. If a user removes a default label, it won’t get reapplied until the file’s next session.<br><br>If users are required to apply a label, default labeling policy takes precedence to prevent **mandatory labeling** prompts when a default label is defined. | :material-shield-check:{ .success } `Supported`<br>Same as AIP | ::material-shield-check:{ .success } `Supported`<br>No change |
| :material-numeric-4-circle:{ .num  } **Customizations** <br>Determines whether users or admins can configure the default labeling experience. | :material-shield-check:{ .success } `Supported`<br>Uses advanced setting `OutlookDefaultLabel` to configure a different default label for emails. See [content-type scoping](../Environment/ContentTypeScoping.md) for differentiating default labels for files vs. emails. | :material-shield-check:{ .success } `Supported`<br>Same as AIP | ::material-shield-check:{ .success } `Supported`<br>No change |
| ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |  ~~~~~~~~~~~~~~~ | 


### Change Management Notes

!!! note "Note 1"

    Since the label is applied during the save flow, the file may appear unlabeled in the sensitivity status until the user saves the file. 
    Once the save flow is initiated, the default label is read from policy and applied to the file.


## Learn more

- [Specify a default label][SCMDefaultLabels]


<!-- Links -->

[AIPLatest]: https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history
[MIPLatest]: https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps


[SCMDefaultLabels]: https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide#what-label-policies-can-do
