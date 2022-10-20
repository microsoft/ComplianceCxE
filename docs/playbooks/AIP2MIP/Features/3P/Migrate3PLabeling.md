![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Interoperability` / `Migrate from 3P solution`

Use the following product capabilities to help you migrate from alternative labeling solutions.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

|  | Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history) | :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) | 
| :---: | :---- | :---- | :---- |
| 1 | **Migrate labels from Secure Islands and other labeling solutions** <br>For Office documents that are labeled by Secure Islands, you can relabel these documents with a sensitivity label by using a mapping that you define. You also use this method to reuse labels from other solutions when their labels are on Office documents.  | :material-shield-check:{ .success } `Supported`<br>Uses advanced settings `labelByCustomProperties`, `customPropertiesByLabel`, `EnableLabelBySharePointProperties`, `EnableLabelByMailHeader`  |  :material-shield-off-outline:{ .na } `Not Planned`<br>*See [Note below](#change-management-notes)* | 
| 2 | **Remove headers and footers from other labeling solutions** <br>Determines how to remove content marks from other labeling solutions.  | :material-shield-check:{ .success } `Supported`<br>Uses advanced settings `PowerPointRemoveAllShapesByShapeName`, `PowerPointShapeNameToRemove`, `WordShapeNameToRemove`,  `RemoveExternalContentMarkingInApp`, `RemoveExternalMarkingFromCustomLayouts` |  :material-shield-off-outline:{ .na } `Not Planned`<br>*See [Note below](#change-management-notes)*  | 
|  | ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ |

### Change Management Notes

!!! note

    Use AIP's other tools, such as Scanner, PowerShell, or Classify & Protect to help you migrate labeling 
    from alternative solutions. 


## Learn More

:material-help-circle: [Migrate labels from Secure Islands and other labeling solutions](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#migrate-labels-from-secure-islands-and-other-labeling-solutions)

:material-help-circle: [Use the RemoveExternalContentMarkingInApp-advanced-property](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#use-the-removeexternalcontentmarkinginapp-advanced-property)
