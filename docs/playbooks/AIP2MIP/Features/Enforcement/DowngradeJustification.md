![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Labeling Enforcement` / `Downgrade Justification`

If a user tries to remove a label or replace it with a label that has a lower-order number, you can require the user provides a justification to perform this action. 

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

| Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) |
| :---- | :---- | :---- | 
| :material-numeric-1-circle:{ .num  } **Placement**<br>Determines how the justification prompt is represented to users. | :material-shield-check:{ .success } `Supported`<br>Uses a popup prompt with call to action "*Your organization requires justification for changing this classification label.*" |  :material-shield-check:{ .success } `Supported`<br>Uses a popup prompt with call to action "*Your organization requires justification to change this label.*"  | 
| :material-numeric-2-circle:{ .num  } **Triggers**<br>Determines what user actions can trigger the justification prompt | :material-shield-check:{ .success } `Supported`<br>Triggers every time a label is downgraded |  :material-shield-check:{ .success } `Supported`<br>Triggers on the first label downgrade for a given session. *[See note below](#change-management-notes)* |
| :material-numeric-3-circle:{ .num  } **Justification option: Not applicable**<br>Determines whether users can indicate that the prior label is no longer applicable to the content. | :material-shield-check:{ .success } `Supported`<br>Uses "*The previous label no longer applies*"  |  :material-shield-check:{ .success } `Supported`<br>Uses "*Previous label no longer applies*"  |
| :material-numeric-3-circle:{ .num  } **Justification option: Not correct**<br>Determines whether users can indicate that the prior label is not correct for the content. | :material-shield-check:{ .success } `Supported`<br>Uses "*Previous label was incorrect*"  |  :material-shield-check:{ .success } `Supported`<br>Uses "*Previous label was incorrect*" |
| :material-numeric-3-circle:{ .num  } **Justification option: User provides justification**<br>Determines whether users can enter their own justification text. | :material-shield-check:{ .success } `Supported`<br>Uses "*Other (explain)*" |  :material-shield-check:{ .success } `Supported`<br>Uses "*Other (explain) - Do not enter sensitive information*" |
| :material-numeric-3-circle:{ .num  } **Justification option: Custom justification prompt**<br>Determines whether admins can specify the text of the justification prompt, such as "Do not enter sensitive information" | :material-shield-check:{ .success } `Supported`<br>uses advanced setting [`JustificationTextForUserText`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#customize-justification-prompt-texts-for-modified-labels) |  :material-shield-off-outline:{ .notplanned  } `Not Planned`<br>Standard prompt text for user-provided justification warns users about avoiding sensitive information in the plaintext justification. *[See note below](#change-management-notes)* |
| :material-numeric-4-circle:{ .num  } **User justification audit**<br>Determines whether Administrators can read the justification reason along with the label change in activity explorer. | :material-shield-check:{ .success } `Supported`  |  :material-shield-check:{ .success } `Supported` |
| ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | 

### Change Management Notes

!!! note

    AIP Add-in uses advanced setting [`JustificationTextForUserText`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#customize-justification-prompt-texts-for-modified-labels) for admins to configure 
    the text that appears alongside the "other" justification option. Although this offers a convenient customization option, it is most commonly 
    used to provide a warning to end-users about avoiding sensitive information since the justification field's contents is directly visible 
    in the audit log.

!!! note

    AIP Add-in prompts users for each label downgrade, but this is unnecessary for end-users to get the repeated interruption in their workflow. 
    Using built-in labeling, the first time a label is downgraded in a given session, the justification prompt is shown. The user's justification 
    is recorded and indicates why the original label wasn't appropriate for the document. For subsequent downgrades within the same session, 
    the original justification reason is still applicable (for the original label), making additional prompts repetitive. At any time, admins 
    can consult the audit log, which tracks every label change; this allows admins to trace the justification reason for why the original label 
    isn't valid for the content and all subsequent label changes.


## Product Screenshots

Use the screenshots below to help you evaluate the visual changes that correspond to the numbered use cases above. 

### Add-In `🌎 Latest`

TODO

### Built-In `🌎 Current Channel`

TODO


## Learn More

:material-help-circle: [Specify a default label](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels#what-label-policies-can-do)

:material-help-circle: [Outlook-specific options for default label and mandatory labeling](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#outlook-specific-options-for-default-label-and-mandatory-labeling)

:material-help-circle: [Easy Trials: Default sensitivity label policy](https://learn.microsoft.com/en-us/microsoft-365/compliance/mip-easy-trials#default-sensitivity-label-policy)
