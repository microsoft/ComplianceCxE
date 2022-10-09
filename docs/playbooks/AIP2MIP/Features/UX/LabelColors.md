# Label Color `⭐ In Preview`

The label color helps end-users recognize a sensitivity label at-a-glance.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case             | Add-In| Built-In (Current) | Built-In (Coming Soon)|
| :----                   | :---- | :---- | :---- | :---- |
| 1 | **Default Color**   | `✅ Supported` When admins don't choose a color, label icon appears hollow/transparent  |  `🚫 Not Supported` | `🟢 Coming Soon` When admins don't choose a color, label icon appears hollow/transparent |
| 2 | **Preset Colors**   | `🚫 Not Supported` |  `🚫 Not Supported` | `🟢 Coming Soon` Admins can select from 10 present colors in the compliance center, and visible in the label icon. |
| 3 | **Custom Colors**   | `✅ Supported` Admins provide a HEX color value in PowerShell |  `🚫 Not Supported` | `🟢 Coming Soon` Admins provide a HEX color value in PowerShell, and visible in the label icon. |


## Product Screenshots

### Color Presets
![image](https://user-images.githubusercontent.com/43501191/194782177-ae6233f3-8344-4fbc-a39c-2dc2ef653ae0.png)

### When custom colors are selected
![image](https://user-images.githubusercontent.com/43501191/194782162-70d755f7-dcf3-49bc-91be-d5923b13bdaa.png)


## Migration Guidelines
When transitioning from the add-in to the built-in labeling solution for Office, consider the following migration guidelines.
- `IT 🟢⚪⚪ Silent Change`: Labels that are already assigned colors require no changes from admins to be displayed in the Office apps
- `IW 🟢⚪⚪ Minor Change`: The new sensitivity bar and updated sensitivity menu will display the admin-selected colors without action or need for adjustment by users.

## Learn More
Use these references to learn more about the end-user experience
- [Choose label color presets](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#label-colors)
- [Configuring custom colors by using PowerShell](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#configuring-custom-colors-by-using-powershell)
- [End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9)
- [Office Insiders Blog](https://insider.office.com/blog/sensitivity-bar-in-office-for-windows)
