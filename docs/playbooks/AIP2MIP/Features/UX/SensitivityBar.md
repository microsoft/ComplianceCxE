# Sensitivity Bar `⭐ In Preview`

The sensitivity bar offers a second method of viewing or applying sensitivity labels and provides a more prominent experience that's easier for users to recognize and use.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case                 | Add-In| Built-In (Current) | Built-In (Coming Soon)|
| :----                       | :---- | :---- | :---- | :---- |
| 1 | **Placement**           | `🟨 Partial` Appears below ribbon. Only avaialble in editing view.  |  `🚫 Not Supported` | `🟢 Coming Soon` Appears in editing view near content's name in application title bar (files) or subject line (email), in application's file menu, Save New popup, and Rename File popup. |
| 2 | **Label Taxonomy**      | `✅ Supported` Displays labels and sublabels in menu hieararchy |  `🚫 Not Supported` | `🟢 Coming Soon` Displays parent label / sublabel combination (see note below) |
| 3 | **Label Description**   | `✅ Supported` Displays description on hover of label names |  `🚫 Not Supported` | `🟢 Coming Soon` Displays description on hover of label names |
| 4 | **Label Color**         | `✅ Supported` Displays color on hover of label names and alongside selected label |  `🚫 Not Supported` | `🟢 Coming Soon` isplays color on hover of label names and alongside selected label |
| 5 | **Label Encryption**    | `🚫 Not Supported` |  `🚫 Not Supported` | `🟢 Coming Soon` Displays "lock" indicator alongside each encrypted label |
| 6 | **Enforcement Prompt**  | `⚠️ Partial` Indicates "not set" when label is missing |  `🚫 Not Supported` | `🟢 Coming Soon` Sensitivity status prompts for missing labels when optional "no label" or required (with mandatory labeling) "select a label" |
| 7 | **Hide Bar (User)**     | `✅ Supported` Button to close sensitivity bar |  `🚫 Not Supported` | `🚫 Not Supported` |
| 8 | **Hide Bar (Admin)**    | `✅ Supported` Advanced setting `HideBarByDefault` controls default show/hide |  `🚫 Not Supported` | `🟡 Coming Soon` Advanced setting `HideBarByDefault` controls whether the full label is displayed or only its icon |



## Product Screenshots

### AIP Add-in
![image](https://user-images.githubusercontent.com/43501191/194782370-9140f44b-b7fc-45f2-8efb-141c0075dfc3.png)

### Built-In (Current)
`🚫 Not Supported`

### Built-In Sensitivity Bar (Coming Soon)
![image](https://user-images.githubusercontent.com/43501191/194782457-9b8e14b2-57e0-4f2b-bd36-b4e9fbcb3f79.png)

### Built-In Sensitivity Bar when Saving a New File (Coming Soon)
![image](https://user-images.githubusercontent.com/43501191/194783579-4ff04296-9207-4de1-80eb-cdf2baa877da.png)

### Built-In Sensitivity Bar when Renaming a File (Coming Soon)
![image](https://user-images.githubusercontent.com/43501191/194783625-9164f801-67ea-4c46-894d-46889b113a15.png)


## Migration Guidelines
When transitioning from the add-in to the built-in labeling solution for Office, consider the following migration guidelines.

- `IT ⚪🟡⚪ Minor Change`: Admins who configure `HideBarByDefault==true` should know that its effect with the new sensitivity bar has changed compared to the AIP Add-in. Whereas the add-in allows admins to hide the bar by default, the built-in labeling does not -- instead of hiding the bar, the sensitivity label collapsed to show only the icon.
- `IW ⚪⚪🔴 Major Change`: The sensitivity bar looks different and is placed in different locations compared to the AIP add-in. Customers should consider updates to their documentation and user comms to help IW adjust for this change. 

> Note: Although the new sensitivity bar for built-in labels uses less space than the add-in in editing view, it's available in more scenarios across the document lifecycle. Users with the new sensitivity bar can view and apply labels when saving a new document for the first time, renaming an existing file, or when using the File menu for additional document actions.

> Note: To help users stay focused on their content while ensuring that they recognize the sensitivity of their documents, the label in the sensitivity bar hides the sublabel after a short delay when opening the file or changing labels. The parent label, or labels without sublabels, are always shown with their respective label color and encryption status. The full label name is shown in a tooltip or when using the sensitivity bar to change labels.


## Learn More
Use these references to learn more about the end-user experience

- [Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#sensitivity-bar)
- [End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9)
- [Office Insiders Blog](https://insider.office.com/blog/sensitivity-bar-in-office-for-windows)
