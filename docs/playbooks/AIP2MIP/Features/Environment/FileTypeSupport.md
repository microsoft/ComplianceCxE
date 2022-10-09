# File Types Supported for Labeling or Encryption `⚠️ Partial`

Built-In sensitivity labels can only be applied to modern Office files or PDF documents.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case             | Add-In| Built-In (Current) | Built-In (Coming Soon)|
| :----                   | :---- | :---- | :---- | :---- |
| 1 | **Modern Office Files in Open XML format (e.g. docx)**   | `✅ Supported`  | `✅ Supported` No change | `✅ Supported` No change  |
| 2 | **Legacy Office Files in Microsoft Office 97-2003 (e.g. doc)**   | `✅ Supported` |  `🚫 Not Supported` Use AIP Classify & Protect instead | `🚫 Not Supported` Use AIP Classify & Protect instead |
| 3 | **Non-Office Files: PDF**             | `🚫 Not Supported` |  `🚫 Not Supported` | `✅ Supported` PDFs created from modern Office files retain the label, markings, and encryption |
| 4 | **Non-Office Files: Other (e.g. csv)** | `✅ Supported` Admins provide a HEX color value in PowerShell |  `🚫 Not Supported` | `🚫 Not Supported` |

## Migration Guidance
For the use cases that aren't supported, review the following guidance for next steps:
- File types that aren't supported with built-in labeling can still be classified and protected using the other AIP clients, such as Scanner, PowerShell, or Classify and Protect.

## Learn More
- [File Types Supported with Built-In Labeling](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#office-file-types-supported)
- [File Types Supported with AIP Client](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-file-types)
- [Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#pdf-support)
- [Office Insiders Blog](https://insider.office.com/en-us/blog/apply-sensitivity-labels-to-pdfs-created-with-office-apps)
- [End-User Support](https://support.microsoft.com/en-gb/topic/create-protected-pdfs-from-office-files-aba7e367-e482-49e7-b746-a385e48d01e4)
