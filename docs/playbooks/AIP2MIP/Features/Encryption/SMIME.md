![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Encryption` / `S/MIME`

Use S/MIME to encrypt emails instead of Rights Management Service when applying sensitivity labels.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :----                  | :---- | :---- | :---- | :---- | 
| 1 | **Encrypt with S/MIME** <br>Determines whether an email can be encrypted with S/MIME.  | :material-shield-check:{ .success } `Supported`  |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-shield-check:{ .success } `Supported` |
| 2 | **Sign with S/MIME** <br>Determines whether an email can be signed with S/MIME.  | :material-shield-check:{ .success } `Supported`  |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-shield-check:{ .success } `Supported` |
|  | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |  ~~~~~~~~~~~~~~~ | 

### Change Management Notes

!!! tip

    AIP Add-in uses advanced setting `OfficeContentExtractionTimeout` to work around 
    performance degradations when using S/MIME labels. 
    These performance issues do not impact Outlook when using the built-in labeling, 
    so this setting is not needed when migrating from AIP add-in.

## Product Screenshots

Use the screenshots below to help you evaluate the visual changes that correspond to the numbered use cases above. 

### Add-In `🌎 Latest`

TODO

### Built-In `🌎 Current Channel`

:material-shield-off-outline:{ .notsupported } `Not Supported`

### Built-In `⭐ In Preview`

TODO

## Learn More

:material-help-circle: [Built-in Labeling: Configure a label to apply S/MIME protection in Outlook](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#configure-a-label-to-apply-smime-protection-in-outlook)

:material-help-circle: [S/MIME sensitivity options in Outlook](https://insider.office.com/en-us/blog/smime-sensitivity-options-in-outlook)

:material-help-circle: [Add-in Labeling: Configure a label to apply S/MIME protection in Outlook](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#configure-a-label-to-apply-smime-protection-in-outlook)
