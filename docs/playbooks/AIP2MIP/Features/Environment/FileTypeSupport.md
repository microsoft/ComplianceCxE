![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Labeling Environment` / `File Type Support`

Office apps that have built-in labeling for Word, Excel, and PowerPoint files support the Open XML format (such as .docx and .xlsx) but not the Microsoft Office 97-2003 format (such as .doc and .xls), Open Document Format (such as .odt and .ods), or other formats.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps)
| :---: | :---- | :---- | :---- | 
| 1 | **Office Open XML format (e.g. `.docx`, `.xlsx`, `.pptx`)** <br>Determines whether Office's modern file formats are supported for viewing and applying labels and encryption. | :material-shield-check:{ .success } `Supported`  |  :material-shield-check:{ .success } `Supported` | 
| 2 | **Microsoft Office 97-2003 format (e.g. `.doc`, `.xls`, `.ppt`)** <br>Determines whether Office's legacy file formats are supported for viewing and applying labels and encryption.  | :material-shield-check:{ .success } `Supported`  |  :material-shield-off-outline:{ .error } `Not Supported` | 
| 3 | **PDF** <br>Determines whether Office can label and encrypt PDFs and open them for viewing within an Office app.  | :material-shield-off-outline:{ .error } `Not Supported` <br>Requires AIP Classify and Protect or other component outside Office for applying labels. Requires AIP Viewer for viewing encrypted PDFs. |  :material-shield-check:{ .success } `Supported`<br>PDFs *created* in Word, Excel, PowerPoint retain their source file's label, markings, encryption. M365 Apps on PC cannot be used to view labeled or encrypted PDFs. | 
|  | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | 


### Change Management Notes

!!! note

    The Office Open XML format is the default file format in Office and is recommended for the best experience in Word, Excel, PowerPoint.
    This is the only file format that supports cross-platform and multi-user editing.

!!! tip

    When editing an unlabeled legacy Office file, use `File/Info/Convert` to convert the document into the modern file format. 
    This will enable sensitivity labeling.

## Learn More

- :material-help-circle: [File Types Supported with Built-In Labeling](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#office-file-types-supported)
- :material-help-circle: [File Types Supported with AIP Client](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-file-types)
- :material-help-circle: [Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#pdf-support)
- :material-help-circle: [Office Insiders Blog](https://insider.office.com/en-us/blog/apply-sensitivity-labels-to-pdfs-created-with-office-apps)
- :material-help-circle: [End-User Support](https://support.microsoft.com/en-gb/topic/create-protected-pdfs-from-office-files-aba7e367-e482-49e7-b746-a385e48d01e4)
