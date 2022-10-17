![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `User Interface` / `Sensitivity Bar`

The sensitivity bar offers a second method of viewing or applying sensitivity labels and provides a more prominent experience that's easier for users to recognize and use. See [Sensitivity Menu](SensitivityMenu.md) for the primary method for applying labels.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :---: | :---- | :---- | :---- | :---- |
| 1 | **Placement** <br>Primary UI entry point for interacting with the sensitivity bar.  | `✅ Supported`<br>Appears below ribbon. Only available in editing view.  |  :material-shield-off-outline:{ .notsupported } `Not Supported` | `✅ Supported`<br>Appears in editing view near content's name in application title bar (files) or subject line (email), in application's file menu, Save New popup, and Rename File popup. |
| 2 | **Label Taxonomy** <br>Representation of the parent/sublabel hierarchy and each label's admin-localized display name. | `✅ Supported` <br>Displays labels and sublabels in menu hierarchy |  :material-shield-off-outline:{ .notsupported } `Not Supported` | `✅ Supported` <br>Displays parent label / sublabel combination (see note below) |
| 3 | **Label Description** <br>Admin-localized tooltip text for a label.| `✅ Supported` <br>Displays description on hover of label names |  :material-shield-off-outline:{ .notsupported } `Not Supported` | `✅ Supported` <br>Displays description on hover of label names |
| 4 | **Label Color**  <br>Determines how each label's color is displayed in the sensitivity menu.<br>*See [Label Color](LabelColors.md)*  | `✅ Supported` Displays color on hover of label names and alongside selected label |  :material-shield-off-outline:{ .notsupported } `Not Supported` | `✅ Supported` <br>Displays color on hover of label names and alongside selected label |
| 5 | **Label Encryption** <br>Determines how each label's encryption settings are represented in the sensitivity menu. <br>*See [Encryption Status](EncryptionStatus.md)* | :material-shield-off-outline:{ .notsupported } `Not Supported` |  :material-shield-off-outline:{ .notsupported } `Not Supported` | `✅ Supported` <br>Displays "lock" indicator alongside each encrypted label |
| 6 | **Enforcement Prompt** <br>Determines whether and how a user is prompted within the sensitivity bar about optional or required labels when no label is applied yet. | `⚠️ Partial` Indicates "not set" when label is missing |  :material-shield-off-outline:{ .notsupported } `Not Supported` | `✅ Supported` <br>Sensitivity status prompts for missing labels when optional "no label" or required (with mandatory labeling) "select a label" |
| 7 | **Sensitivity Bar Toggle** <br>Determines whether a user can show or hide the sensitivity bar. | `✅ Supported` <br>Button to close sensitivity bar. Requires sensitivity menu to show the bar. |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-shield-off-outline:{ .notsupported } `Not Supported` |
| 8 | **Sensitivity Bar Default Visibility** <br>Determines whether sensitivity bar is hidden for users. | `✅ Supported` <br>Label Policy Advanced setting [`HideBarByDefault`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#display-the-information-protection-bar-in-office-apps) controls whether sensitivity bar is hidden or shown. By default, it is shown to users. When admin hides the bar by default, user can still show it via Sensitivity Bar Toggle |  :material-shield-off-outline:{ .notsupported } `Not Supported` | `✅ Supported` <br>When advanced setting [`HideBarByDefault`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#display-the-information-protection-bar-in-office-apps) is configured to hide the bar by default, the sensitivity bar collapses to show only the sensitivity icon, color, and encryption status where applicable. See [`Set-LabelPolicy`](https://learn.microsoft.com/en-us/powershell/module/exchange/set-labelpolicy?view=exchange-ps#-advancedsettings) |
| 9 | **Localized Label Information** <br>Determines whether admin-provided label name and description respond to the user's display language in their Office app <br> See how to [configure display language](https://learn.microsoft.com/en-us/microsoft-365/compliance/create-sensitivity-labels?view=o365-worldwide#example-configuration-to-configure-a-sensitivity-label-for-different-languages) | `✅ Supported`  |  `✅ No Change` | `✅ No Change` |
|  | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |

### Change Management Notes

!!! tip

    Although the new sensitivity bar for built-in labels uses less space than the add-in in editing view, it's available in more scenarios across the document lifecycle. 
    Users with the new sensitivity bar can view and apply labels when saving a new document for the first time, renaming an existing file, or when using the File menu for additional document actions. 
    Learn more about these [contextual sensitivity bars from the Office Insiders Blog](https://insider.office.com/en-us/blog/sensitivity-bar-in-office-for-windows).

!!! tip

    To help users stay focused on their content while ensuring that they recognize the sensitivity of their documents, 
    the label in the sensitivity bar hides the sublabel after a short delay when opening the file or changing labels. 
    The parent label, or labels without sublabels, are always shown with their respective label color and encryption status. 
    The full label name is shown in a tooltip or when using the sensitivity bar to change labels.



## Product Screenshots

Use the screenshots below to help you evaluate the visual changes that correspond to the numbered use cases above. 


### Add-In `🌎 Latest`

![image](https://user-images.githubusercontent.com/43501191/194782370-9140f44b-b7fc-45f2-8efb-141c0075dfc3.png)

### Built-In `🌎 Current Channel`

:material-shield-off-outline:{ .notsupported } `Not Supported`

### Built-In `⭐ In Preview`

![image](https://user-images.githubusercontent.com/43501191/194782457-9b8e14b2-57e0-4f2b-bd36-b4e9fbcb3f79.png)

#### Built-In Sensitivity Bar when Saving a New File `⭐ In Preview`

![image](https://user-images.githubusercontent.com/43501191/194783579-4ff04296-9207-4de1-80eb-cdf2baa877da.png)

#### Built-In Sensitivity Bar when Renaming a File `⭐ In Preview`

![image](https://user-images.githubusercontent.com/43501191/194783625-9164f801-67ea-4c46-894d-46889b113a15.png)


## Learn More

:material-help-circle:  [Learn more about Sensitivity Bar](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#sensitivity-bar)

:material-help-circle:  [Learn about sensitivity labels](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels)

:material-help-circle:  [Configure a label color](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#label-colors)

:material-help-circle:  [End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9)

:material-help-circle:  [Office Insiders Blog](https://insider.office.com/blog/sensitivity-bar-in-office-for-windows)
