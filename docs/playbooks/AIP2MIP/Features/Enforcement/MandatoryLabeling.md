![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Labeling Enforcement` / `Mandatory Labeling`

Mandatory labeling ensures a label must be applied before users can save documents and send emails.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :----                  | :---- | :---- | :---- | :---- | 
| 1 | **Require a label for files: Triggered onSave** <br>Determines whether users are prompted to apply a label before saving their file. | :material-shield-check:{ .success } `Supported`  |  :material-shield-check:{ .success } `Supported`  | :material-calendar-clock:{ .planning } `In Planning`<br>Sensitivity bar integrated directly within all Save, Export, Print scenarios where mandatory labeling is enforced "inline" in the user flow to minimize effort and simplify compliance with required labeling policies. |
| 2 | **Require a label for files: Triggered onExit**<br>Determines whether users are prompted to apply a label before closing their document. Users are still prompted to label their file during save, but can postpone its enforcement until they try to close the app.  | :material-shield-check:{ .success } `Supported`<br>Uses advanced setting [`PostponeMandatoryBeforeSave`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#remove-not-now-for-documents-when-you-use-mandatory-labeling)  |  :material-shield-off-outline:{ .notsupported } `Not Supported` |  :material-calendar-clock:{ .planning } `In Planning` |
| 3 | **Require a label for emails: Triggered onSend** <br>Determines whether users are prompted to apply a label before sending an email. | :material-shield-check:{ .success } `Supported`  |  :material-shield-check:{ .success } `Supported`  ||
| 4 | **Exempt emails from mandatory labeling policy** <br>Determines whether admins can exempt emails from mandatory labeling. | :material-shield-check:{ .success } `Supported`<br>Uses advanced setting [`DisableMandatoryInOutlook`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#exempt-outlook-messages-from-mandatory-labeling)  |  :material-shield-check:{ .success } `Supported`  ||
|  | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |  ~~~~~~~~~~~~~~~ | 


### Change Management Notes

!!! note

    With built-in labeling, the order of enforcement of mandatory labeling can vary by app during the save process. 
    In all cases, the file is never persisted in storage until a label is applied or the save operation is canceled.


## Product Screenshots

Use the screenshots below to help you evaluate the visual changes that correspond to the numbered use cases above. 

### Add-In `🌎 Latest`

TODO

### Built-In `🌎 Current Channel`

TODO

### Built-In `⭐ In Preview`

TODO

## Learn more

- [Require users to apply a label to their email and documents](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#require-users-to-apply-a-label-to-their-email-and-documents)
- [Exempt Outlook messages from mandatory labeling](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#exempt-outlook-messages-from-mandatory-labeling)
