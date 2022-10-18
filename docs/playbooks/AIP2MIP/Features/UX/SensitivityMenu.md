![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `User Interface` / `Sensitivity Menu`

The sensitivity menu is the primary method for users to apply labels that are assigned to them. It can be found in Home tab of the Ribbon in Word, Excel, PowerPoint, and Outlook.


## Product Capabilities

The table below lists the main use cases for this feature and its transition from the AIP Add-in to the built-in labeling solution. These are mapped to product screenshots in the next section.

|  | Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :----: | :---- | :---- | :---- | :---- |
| 1 | **Placement**<br>Primary UI entry point for interacting with the sensitivity menu. | :material-shield-check:{ .success } `Supported`<br>Displays a "Sensitivity" menu in the app's primary commanding toolbar, Ribbon's Home tab, near text formatting options. Available only for signed-in users who are in scope of at least one label policy. |  :material-shield-check:{ .success } `Supported`<br>Displays a "Sensitivity" menu in the app's primary commanding toolbar, Ribbon's Home tab near the far right. Available only for signed-in users who are in scope of at least one label policy. | :material-shield-check:{ .success } `No change` |
| 2 | **Policy Owner** <br>Username for signed-in user whose label policy is serving the visible labels in the menu. | :material-shield-off-outline:{ .notsupported } `Not Supported` |  :material-shield-check:{ .success } `Supported`<br>Displays username at the top of the label menu. | :material-shield-check:{ .success } `No change` |
| 3 | **Label Taxonomy** <br>Representation of the parent/sublabel hierarchy and each label's admin-localized display name. | :material-shield-check:{ .success } `Supported`<br>Parent vs. sub-labels displayed in menu hierarchy in submenus. |  :material-shield-check:{ .success } `No change` ||
| 4 | **Label Description** <br>Admin-localized tooltip text for a label.| :material-shield-check:{ .success } `Supported`<br>Description available on hover of each label in the menu in a tooltip.  |  :material-shield-check:{ .success } `No change` ||
| 5 | **Label Color**<br>Determines how each label's color is displayed in the sensitivity menu.<br>*See [Label Color](LabelColors.md)* | :material-shield-off-outline:{ .notsupported } `Not Supported` |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-shield-check:{ .success } `Supported`<br>Displays the color defined in the label information within the label icon. When no color is configured, the icon appears with no fill color. |
| 6 | **Label Encryption** <br>Determines how each label's encryption settings are represented in the sensitivity menu. <br>*See [Encryption Status](EncryptionStatus.md)* | :material-shield-off-outline:{ .notsupported } `Not Supported` || :material-shield-check:{ .success } `Supported`<br>Displays "lock" alongside label that applies encryption. |
| 7 | **Sensitivity Bar Toggle** <br>Determines whether a user can show or hide the sensitivity bar from the sensitivity menu.<br>*See [Sensitivity Bar](SensitivityBar.md)*| :material-shield-check:{ .success } `Supported`<br>User can show/hide sensitivity bar. |  :material-shield-off-outline:{ .notplanned  } `Not Applicable` | :material-shield-off-outline:{ .notsupported } `Not Supported`<br>Sensitivity bar is designed to always remain on screen near the document title or email subject. *See [Sensitivity Bar](SensitivityBar.md)* |
| 8 | **Help & Feedback**   <br>Determines how an admin-defined url in their label policy is represented in the sensitivity menu. | :material-shield-check:{ .success } `Supported`<br>Popup button available in sensitivity menu, requires advanced setting [`ReportAnIssueLink`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#add-report-an-issue-for-users)  |  :material-shield-check:{ .success } `Supported`<br>Displays "learn more" button within the menu, using configured from Compliance Admin Center's ["Provide users with a link to a custom help page"](https://learn.microsoft.com/en-us/microsoft-365/compliance/get-started-with-sensitivity-labels?view=o365-worldwide#end-user-documentation-for-sensitivity-labels) setting. | :material-shield-check:{ .success } `No change` |
| 9 | **Localized Label Information** <br>Determines whether admin-provided label name and description respond to the user's display language in their Office app <br> See how to [configure display language](https://learn.microsoft.com/en-us/microsoft-365/compliance/create-sensitivity-labels?view=o365-worldwide#example-configuration-to-configure-a-sensitivity-label-for-different-languages) | :material-shield-check:{ .success } `Supported`  |  :material-shield-check:{ .success } `No change` ||
|  | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |

## Product Screenshots

Use the screenshots below to help you evaluate the visual changes that correspond to the numbered use cases above. 

### Add-In `🌎 Latest`

![image](https://user-images.githubusercontent.com/43501191/194768341-7b459df0-d85c-496f-9f71-edb5e5d493a9.png)


### Built-In `🌎 Current Channel`

![image](https://user-images.githubusercontent.com/43501191/194768592-b6e53ac9-f184-46a9-9ba8-f56bdaaae86d.png)

### Built-In `⭐ In Preview`

![image](https://user-images.githubusercontent.com/43501191/194768599-79cfe147-69c7-4e45-aca5-2eaf1cb4bf09.png)


## Learn More

:material-help-circle: [Learn about sensitivity labels](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels)

:material-help-circle: [Configure a label color](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#label-colors)
