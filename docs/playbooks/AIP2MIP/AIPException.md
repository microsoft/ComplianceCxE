![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)


<h1 align="center">How to use <code>AIPException</code> to choose add-in vs. built-in</h1>

<p align="center">
<a href="https://aka.ms/AIP2MIP/HowTo/GetStarted">Playbook Overview</a> > <a href="../GetStarted">Get Started</a> > <a href="../AIP2MIPStep1">Step 1</a> > <a href="../AIP2MIPStep2">Step 2</a>  > <a href="../AIP2MIPStep3">Step 3</a>  > <a href="../AIP2MIPStep4">Step 4</a> > <a href="../AIP2MIPStep5">Step 5</a> [<b>AIPException Setting</b>]
</p>

## Overview
To ensure as many customers as possible are using built-in labeling to avoid missing new information protection capabilities that are unavailable with the AIP Add-in, M365 Apps have a new policy configuration.

- Group Policy Setting `Use the Sensitivity feature in Office to apply and view sensitivity labels`, also known as regkey `UseOfficeForLabelling`, controls whether Office uses the built-in labeling client or none at all.
- **New in M365 Apps Starting in v2211** Group Policy Setting `Use the Azure Information Protection add-in for sensitivity labeling`, also known as regkey `AIPException`, controls whether Office allows the AIP Add-in to be enabled in cases where the prior setting is disabled.

Refer to the [support documentation](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip?view=o365-worldwide#how-to-configure-newer-versions-of-office-to-enable-the-aip-add-in) for further details.

> ⚠️ Warning: If you previously configured `UseOfficeForLabelling == 0` to disable built-in labeling, all sensitivility labeling clients provided by Microsoft will be disabled in M365 Apps by default starting in **version 2211**.



## Configuring sensitivity labeling client in M365 Apps

Use the [support documentation](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip) as the primary resource for configuring the sensitivity labeling client in Office. The guide below provides a detailed support matrix, including the effect of the two policy settings with or without the AIP Add-in installed. 


Starting in v2211, the following sensitivity labeling clients are supported:

- `⛔ None`: Disable viewing and applying sensitivity labels from any Microsoft tool when `UseOfficeForLabelling == 0`. Allows customers to deploy alternative labeling solutions and avoid interoperability issues.
- `✅ Built-In`: Microsoft recommends using built-in labeling instead of AIP Add-in wherever possible. Review the the [migration guide](GetStarted.md) to transition as soon as possible.
- `⚠️ Add-In`: Use AIP Add-in instead during its support lifecycle.


|   #   | Add-in Installed  | Office Policy Configuration                                                         | Outcome                                                       | Notes |
| :---: | :---:              | :---                                                                  | :---                                                          | :---                  |
| 1     | `false`           | - `UseOfficeForLabelling = {0}`<br>- `AIPException = {0, 1, undefined}`     | - `Prior v2211: ⛔ None`<br>- `After v2211: ⛔ None`          | *No change*. Labeling from Microsoft is fully disabled because `UseOfficeForLabelling=0`. |
| 2     | `false`           | - `UseOfficeForLabelling = {1}`<br>- `AIPException = {0, 1, undefined}`     | - `Prior v2211: ✅ Built-In`<br>- `After v2211: ✅ Built-In`  | *No change*. Built-in labeling is explicitly enabled with `UseOfficeForLabelling=1`.  |
| 3     | `false`           | - `UseOfficeForLabelling = {undefined}`<br>- `AIPException = {0, 1, undefined}`  | - `Prior v2211: ✅ Built-In`<br>- `After v2211: ✅ Built-In`  | *No change*. Built-in labeling is implicitly enabled because `UseOfficeForLabelling=undefined`. |
|||||| 
| 4     | **`true`**           | - `UseOfficeForLabelling = {1}`<br>- `AIPException = {0, 1, undefined}`  | - `Prior v2211: ✅ Built-In`<br>- `After v2211: ✅ Built-In`  | *No change*. Built-in labeling is explicitly enabled with `UseOfficeForLabelling=1`. |
| 5     | **`true`**           | - `UseOfficeForLabelling = {0}`<br>- `AIPException = {0, undefined}`     | - `Prior v2211: ⚠️ Add-In`<br>- `After v2211: ⛔ None`        | **NEW**. Labeling from Microsoft is fully disabled because `UseOfficeForLabelling=0`. To enable AIP Add-in, must set `AIPException=1`. |
| 6     | **`true`**           | - `UseOfficeForLabelling = {0}`<br>- `AIPException = {1}`           | - `Prior v2211: ⚠️ Add-In`<br>- `After v2211: ⚠️ Add-In`      | **NEW**. Built-in labeling is explicitly disabled with `UseOfficeForLabelling=0` and add-in is explicitly enabled with `AIPException=1`. |
| 7     | **`true`**            | - `UseOfficeForLabelling = {undefined}`<br>- `AIPException = {0, undefined}` | - `Prior v2211: ⚠️ Add-In`<br>- `After v2211: ✅ Built-In`    | **NEW**. Built-in labeling overrides add-in as the default unless `AIPException=1`. |
| 8     | **`true`**            | - `UseOfficeForLabelling = {undefined}`<br>- `AIPException = {1}`       | - `Prior v2211: ⚠️ Add-In`<br>- `After v2211: ⚠️ Add-In`      | **NEW**. Add-in labeling is explicitly enabled with `AIPException=1`. |
|       |     | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                           | ~~~~~~~~~~~~~~~~~~~~                                        |                                                                          | 


