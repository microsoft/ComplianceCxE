![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `User Interface` / `Encryption Status`

The Encryption status shows whether the current file or email has encryption.

## Product Capabilities

The table below lists the main use cases for this feature and its transition from the AIP Add-in to the built-in labeling solution. These are mapped to product screenshots in the next section.

|  | Use Case  | Add-In<br>`🌎 Latest`| Built-In<br>`🌎 Current Channel` | Built-In<br>`⭐ In Preview` |
| :----: | :---- | :---- | :---- | :---- |
| 1 | **Sensitivity Menu**<br>Determines how the sensitivity menu indicates which labels apply encryption. | `🚫 Not Supported`<br>No encryption indicator in sensitivity menu |  `🚫 Not Supported` <br>No encryption indicator in sensitivity menu  | `✅ Supported`<br>Displays encryption status of each available label in its icon |
| 2 | **Sensitivity Bar** <br>Determines how the sensitivity bar indicates which labels apply encryption.  | `🚫 Not Supported`<br>No encryption indicator in sensitivity bar |  `🚫 Not Supported` | `✅ Supported` <br>Displays encryption status of each available label in its icon |
| 3 | **Application Status** <br>Determines how the application status bar indicates whether the current document is encrypted.  | `✅ Supported`<br>Displays "lock" indicator in app status bar |  `✅ No Change` | `✅ No Change` |
| 4 | **Policy Tip** <br>Determines how users are notified of encryption settings applied to a file.  | `✅ Supported`<br>Displays yellow bar showing label's name and description when encryption is applied |  `✅ Supported` <br>Policy tip only shown for user-defined permissions | `✅ Supported`<br>Policy tip only shown for user-defined permissions |
| 5 | **View Permissions button** <br>Provides access to protection properties for a file that's encrypted. | `✅ Supported`<br>Available from Policy Tip and Application Status |  `✅ Supported` <br>Available from Application Status |`✅ Supported` <br>Available from Application Status |
|  | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |

### Change Management Notes

> **Note**
> End-users may notice differences in how they determine if a document is encrypted. The main difference is relying on the sensitivity bar and its iconography as the primary indicator for encryption status.

## Product Screenshots

Use the screenshots below to help you evaluate the visual changes that correspond to the numbered use cases above. 


### Add-In `🌎 Latest`

![image](https://user-images.githubusercontent.com/43501191/194781714-2a006b49-7847-43df-9cf8-48e2081399e6.png)

### Built-In `🌎 Current Channel`

![image](https://user-images.githubusercontent.com/43501191/194781678-f4d8d702-8c18-4a72-a74a-0e7e5f07185c.png)

### Built-In `⭐ In Preview`

![image](https://user-images.githubusercontent.com/43501191/194781680-b766b754-019d-49f1-890a-6b6722797713.png)


## Learn More

- [Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#sensitivity-bar)
- [End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9)
- [Office Insiders Blog](https://insider.office.com/blog/sensitivity-bar-in-office-for-windows)
