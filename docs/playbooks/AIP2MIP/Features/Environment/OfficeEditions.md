![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Environment` / `Supported Office Editions`

Built-in sensitivity labels are [only available with M365 Apps for Enterprise](/docs/playbooks/AIP2MIP//AIP2MIPStep2.md). 

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

| Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps)
| :---- | :---- | :---- | 
| **Subscription editions of Office** <br> aka M365 Apps | :material-shield-check:{ .success } `Supported`  |  :material-shield-check:{ .success } `Supported` | 
| **Standalone editions of Office**  <br>aka Office Perpetual, Office 2016/2019/..., Office on-prem, ... | :material-shield-check:{ .success } `Supported`  |  :material-shield-off-outline:{ .error } `Not Supported`<br>To use sensitivity labels that are built into Office desktop apps for Windows and Mac, you must use a subscription edition of Office, aka M365 Apps for Enterprise. The built-in labeling client doesn't support standalone editions like Office 2016, sometimes called "Office Perpetual". | 
| **Support for disconnected computers**<br>Determines whether Office can sync labeling policy from an offline copy instead of connect to the internet to download the labels and label policy settings from the Microsoft Purview compliance portal  | :material-shield-check:{ .success } `Supported`  |  :material-shield-off-outline:{ .notsupported } `Not Supported`<br>M365 Apps for Enterprise require a network connection with internet access so they can communicate with Microsoft 365 services. Permanently disconnected devices without the ability to access Microsoft 365 services can't use built-in sensitivity labels. | 
| ~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | 

### Change Management Notes

!!! note

    If your organization uses standalone editions of Office, consult [Migration Playbook Step 2](/docs/playbooks/AIP2MIP//AIP2MIPStep2.md) 
    for recommendations and next steps.

## Learn More

:material-help-circle: [Labeling client for desktop apps](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#labeling-client-for-desktop-apps)

:material-help-circle: Learn more about how to deploy versions of Office that support built-in labeling in the [Playbook's Step 2](../../AIP2MIPStep2.md)
[Support for disconnected computers](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#support-for-disconnected-computers)

:material-help-circle: [Editions of Office Perpetual Supported by AIP Add-In](https://learn.microsoft.com/en-us/azure/information-protection/requirements#applications)
