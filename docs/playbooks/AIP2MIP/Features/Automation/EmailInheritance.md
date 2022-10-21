![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Labeling Automation` / `Emails inherit their attachments' highest sensitivity`

Emails can be automatically labeled based on the highest sensitivity of all their attachments.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

| Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :---- | :---- | :---- | :---- | 
| :material-numeric-1-box:{ .num  } **Label Precedence: Highest attachment sensitivity** <br>Determines which attachment label gets recommended or applied when there are multiple labeled attachments. | :material-shield-check:{ .success } `Supported`<br>The attachment must be a physical file, and cannot be a link to a file|  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-dev-to:{ .development  } `In Development`<br>The attachment must be a physical file, and cannot be a link to a file |
| :material-numeric-2-box:{ .num  } **Label Automation: Automatic** <br>Determines whether admins can configure  | :material-shield-check:{ .success } `Supported`<br>Uses advanced setting `AttachmentAction = "Automatic"`. Shows message "*This email was automatically labeled as \<label name\>*" |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-dev-to:{ .development  } `In Development`<br>When a label is automatically applied to the email, it displays a message to the user indicating which label was applied. "*Your email has been automatically applied the higher label \<label name\> from the attachment*" |
| :material-numeric-3-box:{ .num  } **Label Automation: Recommended** <br>Determines whether admins can configure the email's attachment to get recommended to users, requiring accept or dismiss for the label recommendation. | :material-shield-check:{ .success } `Supported`<br>Uses advanced setting `AttachmentAction = "Recommended"`. Shows message "*It is recommended to label this email as \<label name\>*" |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-dev-to:{ .development  } `In Development`<br>When a label is automatically applied to the email, it displays a message to the user indicating which label was applied. "*Your attachment has higher label \<label name\> than your email, do you want to apply that label to your email? Accept \| Dismiss*" |
| :material-numeric-4-box:{ .num  } **Custom Attachment Action Tip** <br>Determines whether admins can configure a message to replace the default automatic or recommended message. | :material-shield-check:{ .success } `Supported`<br>Uses advanced setting `AttachmentActionTip`  |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-shield-off-outline:{ .notplanned  } `Not Planned`<br>*[See note below](#change-management-notes)* |
| ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |  ~~~~~~~~~~~~~~~ | 

### Change Management Notes

!!! note

    AIP Add-in uses advanced setting [`AttachmentActionTip`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#for-email-messages-with-attachments-apply-a-label-that-matches-the-highest-classification-of-those-attachments) 
    to allow admins to customize the message that appears when an attachment's label is recommended or applied to the email. 
    This works for a single language only. It's generally recommended to avoid overriding UI text to benefit from 
    consistency for similar scenarios across the M365 information protection landscape and across all supported languages for M365 Apps.

## Product Screenshots

Use the screenshots below to help you evaluate the visual changes that correspond to the numbered use cases above. 

### Add-In `🌎 Latest`

TODO

### Built-In `🌎 Current Channel`

:material-shield-off-outline:{ .notsupported } `Not Supported`

### Built-In :material-dev-to:{ .development  } `In Development`

TODO

## Learn More

:material-help-circle: [Built-in Labeling: Configure a label to apply S/MIME protection in Outlook](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#configure-a-label-to-apply-smime-protection-in-outlook)

:material-help-circle: [S/MIME sensitivity options in Outlook](https://insider.office.com/en-us/blog/smime-sensitivity-options-in-outlook)

:material-help-circle: [Add-in Labeling: Configure a label to apply S/MIME protection in Outlook](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#configure-a-label-to-apply-smime-protection-in-outlook)
