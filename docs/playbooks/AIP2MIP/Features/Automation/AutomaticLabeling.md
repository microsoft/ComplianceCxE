![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Labeling Automation` / `Automatic or recommended labeling of files or emails based sensitive content`

Use automated content inspection for automatic or recommended labeling of files or emails that contain sensitive information types (SITs).


## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

| Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`][AIPLatest] | :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`][MIPLatest] | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :---- | :---- | :---- | :---- | 
| :material-numeric-1-circle:{ .num  } **Automation Outcome: Content-based automatic label** <br>Determines whether files and emails can be labeled automatically when SITs are found in the content. | :material-shield-check:{ .success } `Supported`<br>Admins can configure policies to **recommend** a classification or apply it **automatically** based on detection of sensitive information types (SITs).<br>- Built-in SITs<br>- Custom SITs | :material-shield-check:{ .success } `Supported`<br>Admins can configure policies to **recommend** a classification or apply it **automatically** based on detection of sensitive information types (SITs).<br>- Built-in SITs<br>- Custom SITs<br>- Named Entity SITs<br>- Exact Data Match SITs<br>- Credentials SITs<br>- Trainable Classifiers | :material-shield-check:{ .success } `Supported`<br>New intelligent classifiers<br>- Named entities |
| :material-numeric-2-circle:{ .num  } **Automation Triggers** <br>Determines what actions trigger evaluation of the content for sensitive information types. | :material-shield-check:{ .success } `Supported`<br>SITs are scanned when files are saved and emails are sent. Triggered even when PC is disconnected from the internet using local classifiers. | :material-shield-check:{ .success } `Supported`<br>SITs start scanning when a file is opened or email is edited, and continues in the background as you edit.<br><br>Requires internet connection to trigger evaluation of SITs. | :material-shield-check:{ .success } `Supported`<br>No change |
| :material-numeric-3-circle:{ .num  } **User Experience** <br>Determines how users interact with the app to accomplish the automation outcome. | :material-shield-check:{ .success } `Supported`<br>With automatic labels, they’re applied to the file or email without user intervention. Recommended labels display a yellow information bar with customizable text indicating that a recommendation is available, with the option to apply or dismiss it. | :material-shield-check:{ .success } `Supported`<br>With automatic labels, they’re applied to the file or email without user intervention. Recommended labels display a yellow information bar with customizable text indicating that a recommendation is available, with the option to apply or dismiss it. Once a recommendation is applied, a yellow information bar confirms their choice was applied. In Word, users see the text that triggered the SIT highlighted in their document and can review all detected SITs in Editor. | :material-shield-check:{ .success } `Supported`<br><br>No change |
| :material-numeric-4-circle:{ .num  } **Precedence rules** <br>Determines whether and how policies or use cases take precedence over auto labeling triggers. | :material-shield-check:{ .success } `Supported`<br>Manually applied labels have the highest priority and are never overridden by an automatic label.<br><br>Automatic labels can override automatic or default labels of lower priority only. | :material-shield-check:{ .success } `Supported`<br>Same as AIP.<br><br>See note 1 when an automatic labeling triggers a sublabel of higher priority within the same parent label. | :material-shield-check:{ .success } `Supported`<br><br>No change |
| :material-numeric-5-circle:{ .num  } **Customizations** <br>Determines whether users or admins can configure the auto labeling experience. | :material-shield-check:{ .success } `Supported`<br>Uses advanced setting `OutlookRecommendationEnabled` to enable recommended labeling for emails, which is off by default.<br><br>:material-shield-off-outline:{ .notsupported } `Not Supported`<br>Admins cannot configure notification messages when label recommendations are available. | :material-shield-check:{ .success } `Supported`<br>Admins can configure a custom message when notifying users that a label recommendation is available.<br><br>:material-shield-check:{ .success } `Not needed`<br>Advanced setting `OutlookRecommendationEnabled` is not needed with built-in labeling; emails are included in recommended labeling policies that apply to email. | :material-shield-check:{ .success } `Supported`<br><br>No change |
| ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |  ~~~~~~~~~~~~~~~ | 


### Change Management Notes

!!! note "Note 1"

    Built-in labeling treats all sublabels with equal priority, so automatic labels do not override a lower-priority sublabel from the same parent label.

## Product Screenshots

Use the screenshots below to help you evaluate the visual changes that correspond to the numbered use cases above. 

### Add-In `🌎 Latest`

TODO

### Built-In `🌎 Current Channel`

TODO

### Built-In `⭐ In Preview`

TODO

## Learn more

- [Apply a sensitivity label to content automatically][SCMAutoLabels]


<!-- Links -->

[AIPLatest]: https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history
[MIPLatest]: https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps


[SCMAutoLabels]: https://learn.microsoft.com/en-us/microsoft-365/compliance/apply-sensitivity-label-automatically
