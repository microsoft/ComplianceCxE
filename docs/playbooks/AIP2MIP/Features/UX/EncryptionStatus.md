# Encryption Status `⚠️ Partially Supported`

The Encryption status shows whether the current file or email has encryption.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case | Add-In| Built-In (Current) | Built-In (Coming Soon)|
| :---- | :---- | :---- | :---- | :---- |
| 1 | **Sensitivity Menu**        | `🚫 Not Supported` No encryption indicator in sensitivity menu |  `🚫 Not Supported` No encryption indicator in sensitivity menu  | `🟢 Coming Soon` Displays encryption status of each available label in its icon |
| 2 | **Sensitivity Bar**         | `🚫 Not Supported` No encryption indicator in sensitivity bar |  `🚫 Not Supported` | `🟢 Coming Soon` Displays encryption status of each available label in its icon |
| 3 | **Application Status**      | `✅ Supported` Displays "lock" indicator in app status bar |  `✅ Supported` No change | `✅ Supported` No change |
| 4 | **Policy Tip**              | `✅ Supported` Displays yellow bar showing label's name and description when encryption is applied |  `⚠️ Partial` Policy tip only shown for user-defined permissions | `⚠️ Partial` Policy tip only shown for user-defined permissions |
| 5 | **View Permissions button** | `✅ Supported` Available from Policy Tip and Application Status |  `⚠️ Partial` Available from Application Status | `⚠️ Partial` Available from Application Status |


## Product Screenshots

### AIP Add-in
![image](https://user-images.githubusercontent.com/43501191/194781714-2a006b49-7847-43df-9cf8-48e2081399e6.png)

### Built-In (Current)
![image](https://user-images.githubusercontent.com/43501191/194781678-f4d8d702-8c18-4a72-a74a-0e7e5f07185c.png)

### Built-In (Coming Soon)
![image](https://user-images.githubusercontent.com/43501191/194781680-b766b754-019d-49f1-890a-6b6722797713.png)

## Migration Guidelines
When transitioning from the add-in to the built-in labeling solution for Office, consider the following migration guidelines.
- `IT 🟢⚪⚪ Silent Change`: There's no change required for compliance admins when replacing the add-in with built-in labeling for this feature.
- `IW ⚪🟡⚪ Minor Change`: End-users may notice differences in how they determine if a document is encrypted. The main difference is relying on the sensitivity bar and its iconography as the primary indicator for encryption status.

## Learn More
Use these references to learn more about the end-user experience
- [Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#sensitivity-bar)
- [End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9)
- [Office Insiders Blog](https://insider.office.com/blog/sensitivity-bar-in-office-for-windows)
