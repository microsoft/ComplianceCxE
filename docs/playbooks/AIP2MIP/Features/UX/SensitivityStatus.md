# Sensitivity Status `✅ Fully Supported`

The sensitivity status shows what label is currently applied to a file or email.

## Product Capabilities
The table below lists the main characteristics of the sensitivity status and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case | Add-In| Built-In (Current) | Built-In (Coming Soon)|
| :---- | :---- | :---- | :---- | :---- |
| 1 | **Sensitivity Menu**   | `✅ Supported` Displays selected label in menu |  `✅ Supported` No change | `✅ Supported` No change |
| 2 | **Sensitivity Bar**    | `✅ Supported` Displays selected label in bar |  `✅ Supported` No change | `✅ Supported` No change |
| 3 | **Application Status** | `🚫 Not Supported` |  `✅ Supported` Displays selected label in application status bar alongside other document status indicators | `✅ Supported` Selected label status hidden by default in app status bar. |


## Product Screenshots

### Sensitivity menu with AIP Add-in
![image](https://user-images.githubusercontent.com/43501191/194781280-ff0c139a-2f0e-47ab-acc5-4e4f164daf48.png)
 

### Sensitivity menu with Built-In (Current)
![image](https://user-images.githubusercontent.com/43501191/194781309-c39f64b3-b70d-47f1-ba25-9a81d0f35ef7.png)

### Sensitivity menu with Built-In (Coming Soon)
![image](https://user-images.githubusercontent.com/43501191/194781330-818bf687-b427-4b0a-9f9a-37ad9cf729bc.png)

## Migration Guidelines
When transitioning from the add-in to the built-in labeling solution for Office, consider the following migration guidelines.
- `IT 🟢⚪⚪ Silent Change`: There's no change required for compliance admins when replacing the add-in with built-in labeling for this feature.
- `IW ⚪🟡⚪ Minor Change`: The sensitivity status is hidden by default in the application status bar. This is because it's placement in the status bar is often missed by end-users and is dupicative with the label status in the sensitivity bar near the document title.

## Learn More
Use these references to learn more about the end-user experience
- [Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#sensitivity-bar)
- [End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9)
- [Office Insiders Blog](https://insider.office.com/blog/sensitivity-bar-in-office-for-windows)
