![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `User Interface` / `Sensitivity Status`

The sensitivity status shows what label is currently applied to a file or email.

## Product Capabilities
The table below lists the main use cases for this feature and its transition from the AIP Add-in to the built-in labeling solution. These are mapped to product screenshots in the next section.

|  | Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :---: | :---- | :---- | :---- | :---- |
| 1 | **Sensitivity Menu**<br> Determines how the selected label is represented in the sensitivity menu. <br>*See [Sensitivity Menu](SensitivityMenu.md)*| :material-shield-check:{ .success } `Supported`<br>Displays selected label in menu |  :material-shield-check:{ .success } `Supported` ||
| 2 | **Sensitivity Bar** <br> Determines how the selected label is represented in the sensitivity bar.<br>*See [Sensitivity Bar](SensitivityBar.md)*| :material-shield-check:{ .success } `Supported`<br>Displays selected label in sensitivity bar |  :material-shield-check:{ .success } `No change` ||
| 3 | **Application Status**<br> Determines how the selected label is represented in the application status bar. | :material-shield-off-outline:{ .notsupported } `Not Supported` |  :material-shield-check:{ .success } `Supported`<br>Displays selected label in application status bar alongside other document status indicators | :material-shield-check:{ .success } `Supported`<br>Selected label status hidden by default in app status bar. See note below. |
| 4 | **Localized Label Information** <br>Determines whether admin-provided label name and description respond to the user's display language in their Office app <br> See how to [configure display language](https://learn.microsoft.com/en-us/microsoft-365/compliance/create-sensitivity-labels?view=o365-worldwide#example-configuration-to-configure-a-sensitivity-label-for-different-languages) | :material-shield-check:{ .success } `Supported`  |  :material-shield-check:{ .success } `No change` ||
|  | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |


### Change Management Notes

!!! note

    *Removing Sensitivity Status from Application Status Bar*: The sensitivity status is hidden by default in the application status bar.
    This is because it's placement in the status bar is often missed by end-users and is dupicative with the label status in the sensitivity 
    bar near the document title.


## Product Screenshots

Use the screenshots below to help you evaluate the visual changes that correspond to the numbered use cases above.

### Add-In `🌎 Latest`

![image](https://user-images.githubusercontent.com/43501191/194781280-ff0c139a-2f0e-47ab-acc5-4e4f164daf48.png)

### Built-In `🌎 Current Channel`

![image](https://user-images.githubusercontent.com/43501191/194781309-c39f64b3-b70d-47f1-ba25-9a81d0f35ef7.png)

### Built-In `⭐ In Preview`

![image](https://user-images.githubusercontent.com/43501191/194781330-818bf687-b427-4b0a-9f9a-37ad9cf729bc.png)

## Learn More
Use these references to learn more about the end-user experience

:material-help-circle: [Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#sensitivity-bar)

:material-help-circle: [End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9)

:material-help-circle: [Office Insiders Blog](https://insider.office.com/blog/sensitivity-bar-in-office-for-windows)
