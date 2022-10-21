![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `User Interface` / `Label Color`

The label color helps end-users recognize a sensitivity label at-a-glance.

## Product Capabilities
The table below lists the main use cases for this feature and its transition from the AIP Add-in to the built-in labeling solution. These are mapped to product screenshots in the next section.

| Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :---- | :---- | :---- | :---- |
| :material-numeric-1-circle:{ .num  } **Default Color**   | :material-shield-check:{ .success } `Supported`<br>When admins don't choose a color, label icon appears without a fill color |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-shield-check:{ .success } `Supported` |
| :material-numeric-2-circle:{ .num  } **Preset Colors**   | :material-shield-off-outline:{ .notsupported } `Not Supported` |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-shield-check:{ .success } `Supported`<br>Admins can select from 10 present colors in the compliance center, and visible in the label icon. |
| :material-numeric-3-circle:{ .num  } **Custom Colors**   | :material-shield-check:{ .success } `Supported`<br>Admins provide a HEX color value in Label Advanced Settings [`color`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#specify-a-color-for-the-label). *See [`Set-Label`](https://learn.microsoft.com/en-us/powershell/module/exchange/set-label?view=exchange-ps#-advancedsettings)* |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-shield-check:{ .success } `Supported` |
| ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |


## Product Screenshots

Use the screenshots below to help you evaluate the visual changes that correspond to the numbered use cases above. 

See [Sensitivity Menu](SensitivityMenu.md), [Sensitivity Bar](SensitivityBar.md), [Sensitivity Status](SensitivityStatus.md) for mroe information about how the label color is used.

### Sensitivity Label Color Wheel

![image](https://user-images.githubusercontent.com/43501191/196059176-68430362-1ee1-4acd-8ab1-9cbc232a2a15.png)

### Color Presets in Security & Compliance Admin Center

![image](https://user-images.githubusercontent.com/43501191/194782177-ae6233f3-8344-4fbc-a39c-2dc2ef653ae0.png)

### When custom colors are selected in Security & Compliance Admin Center

![image](https://user-images.githubusercontent.com/43501191/194782162-70d755f7-dcf3-49bc-91be-d5923b13bdaa.png)


## Learn More

Use these references to learn more about the end-user experience

:material-help-circle: [Choose label color presets](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#label-colors)

:material-help-circle: [Configuring custom colors by using PowerShell](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#configuring-custom-colors-by-using-powershell)

:material-help-circle: [End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9)

:material-help-circle: [Office Insiders Blog](https://insider.office.com/blog/sensitivity-bar-in-office-for-windows)
