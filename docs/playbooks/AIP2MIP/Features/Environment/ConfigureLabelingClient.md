![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Environment` / `Configure Labeling Clients for Office `

Office apps allow you to configure which which labeling client is used to view and apply sensitivity labels with Word, Excel, PowerPoint, and Outlook.


## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case  | Add-In<br>`🌎 Latest`| Built-In<br>`🌎 Current Channel` | Built-In<br>`⭐ In Preview` |
| :---: | :---- | :---- | :---- | :---- |
| 1 | **Disable Microsoft Information Protection** <br>Determines whether Office can disable sensitivity labels powered by Microsoft Purview. Recommended when using 3rd party labeling solutions.  | :material-shield-check:{ .success } `Supported`<br> Use [`UseOfficeForLabelling == false`](../../AIPException.md) and disable AIP Add-in to prevent labeling in Office |  `Supported`<br> Use [`UseOfficeForLabelling == false`](../../AIPException.md) | :material-calendar-star:{ .warning } `In Preview`<br>Use [`UseOfficeForLabelling == false`](../../AIPException.md) to fully disable sensitivity labels provided by a 1st party Microsoft solution.. |
| 2 | **Use built-in labeling by default** <br>Determines whether Office uses its built-in labeling client to view and apply sensitivity labels.  | :material-shield-check:{ .success } `Supported`<br> Use [`UseOfficeForLabelling == true`](../../AIPException.md)  |  :material-shield-check:{ .success } `Supported`<br>Deploy [`UseOfficeForLabelling == true`](../../AIPException.md) to explicitly enable built-in labeling. AIP Add-in will not load if installed.  | :material-alert:{ .error } `Major Change`<br>:material-calendar-star:{ .warning } `In Preview`<br>Starting in v2211 in Current Channel, Office will no long support the AIP add-in as the default labeling client. Built-in labeling is enabled by default unless [`UseOfficeForLabelling == false`](../../AIPException.md). |
| 3 | **Use AIP add-in labeling by default** <br>Determines whether Office uses AIP Add-in to view and apply sensitivity labels (if installed).  | :material-shield-check:{ .success } `Supported`<br>When AIP client is installed, the add-in is automatically set as the default labeling client for Office.  |  :material-shield-check:{ .success } `Supported`<br>When AIP client is installed, the add-in is automatically set as the default labeling client for Office. Admins can deploy [`UseOfficeForLabelling == false`](../../AIPException.md) to explicitly disable built-in labeling. | :material-alert:{ .error } `Major Change`<br>:material-calendar-star:{ .warning } `In Preview`<br>Starting in v2211 in Current Channel, Office will no long support the AIP add-in as the default labeling client. To allow the AIP add-in while using Office, admins must deploy [`AIPException == true`](../../AIPException.md). |
|  | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |

### Change Management Notes

!!! warning

    If you've previously configured `UseOfficeForLabelling==false` to enable the AIP add-in for Office, 
    users will be unable to view or apply labels after `Current Channel v2211`. 
    You must  deploy regkey [`AIPException==true`](../../AIPException.md) to continue using add-in.


## Learn More

:material-help-circle: [Disable sensitivity labeling from Microsoft Information Protection](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#office-file-types-supported)

:material-help-circle: [Choose between add-in or built-in labeling from Microsoft Information Protection](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip)

:material-help-circle: [Use Cloud Policy Service to easily deploy configuration policies](https://learn.microsoft.com/en-us/deployoffice/admincenter/overview-cloud-policy)
