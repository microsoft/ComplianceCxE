![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)


<h1 align="center">How to use <code>AIPException</code> to choose add-in vs. built-in</h1>

<p align="center">
<a href="https://aka.ms/AIP2MIP/HowTo/GetStarted">Playbook Overview</a> > <a href="../GetStarted">Get Started</a> > <a href="../AIP2MIPStep1">Step 1</a> > <a href="../AIP2MIPStep2">Step 2</a>  > <a href="../AIP2MIPStep3">Step 3</a>  > <a href="../AIP2MIPStep4">Step 4</a> > <a href="../AIP2MIPStep5">Step 5</a> [<b>AIPException Setting</b>]
</p>

## Overview
M365 Apps for Enterprise have a new configuration to streamline how and when organizations transition to using the built-in experience for sensitivity labeling. 

!!! note

    Minimum required version of Office was updated on January 17, 2023. Instead of v2212, the minimum version is 2302.
    
Starting in **October 2022**, there are two configuration settings available to enable built-in labeling in your organization:

- Setting `Use the Sensitivity feature in Office to apply and view sensitivity labels`, also known as regkey `UseOfficeForLabelling`, controls whether Office uses the built-in labeling client or none at all. This setting has been available since built-in labeling was first introduced.
- Setting `Use the Azure Information Protection add-in for sensitivity labeling`, also known as regkey `AIPException`, controls whether Office allows the AIP Add-in to be enabled in cases where the prior setting is disabled. This is a new setting available in Group Policy or Cloud Policy starting in October 2022.

Starting in **version 2302**, M365 Apps for Enterprise will use the new configuration setting when loading the labeling client for Office apps. In this new version, users will either lose labeling entirely or be automatically transitioned to built-in labeling. The use configuration matrix below to determine the impact on your organization.

## Configuring sensitivity labeling client in M365 Apps

Use the [support documentation](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip) as the primary resource for configuring the sensitivity labeling client in Office. The guide below provides a detailed support matrix, including the effect of the two policy settings with or without the AIP Add-in installed. 


Starting in v2302, the following sensitivity labeling clients are supported:

- `⛔ None`: Disable viewing and applying sensitivity labels from any Microsoft tool when `UseOfficeForLabelling == 0`. Allows customers to deploy alternative labeling solutions and avoid interoperability issues.
- `✅ Built-In`: Microsoft recommends using built-in labeling instead of AIP Add-in wherever possible. Review the the [migration guide](GetStarted.md) to transition as soon as possible.
- `⚠️ Add-In`: Use AIP Add-in instead during its support lifecycle.

*To simplify matrix, we refer to the settings via their registry key names rather than the full configuration name.*

|   #   | Add-in Installed  | Office Policy Configuration | Outcome | Notes |
| :---: | :---: | :--- | :--- | :--- |
| 1 | `false` | - `UseOfficeForLabelling = {0}`<br>- `AIPException = {0, 1, undefined}`     | - `Prior v2302: ⛔ None`<br>- `After v2302: ⛔ None`          | *No change*. Labeling from Microsoft is fully disabled because `UseOfficeForLabelling=0`. |
| 2 | `false` | - `UseOfficeForLabelling = {1}`<br>- `AIPException = {0, 1, undefined}`     | - `Prior v2302: ✅ Built-In`<br>- `After v2302: ✅ Built-In`  | *No change*. Built-in labeling is explicitly enabled with `UseOfficeForLabelling=1`.  |
| 3 | `false` | - `UseOfficeForLabelling = {undefined}`<br>- `AIPException = {0, 1, undefined}`  | - `Prior v2302: ✅ Built-In`<br>- `After v2302: ✅ Built-In`  | *No change*. Built-in labeling is implicitly enabled because `UseOfficeForLabelling=undefined`. |
|||||| 
| 4 | **`true`** | - `UseOfficeForLabelling = {1}`<br>- `AIPException = {0, 1, undefined}`  | - `Prior v2302: ✅ Built-In`<br>- `After v2302: ✅ Built-In`  | *No change*. Built-in labeling is explicitly enabled with `UseOfficeForLabelling=1`. |
| 5 | **`true`** | - `UseOfficeForLabelling = {0}`<br>- `AIPException = {0, undefined}`     | - `Prior v2302: ⚠️ Add-In`<br>- `After v2302: ⛔ None`        | **NEW**. Labeling from Microsoft is fully disabled because `UseOfficeForLabelling=0`. To enable AIP Add-in, must set `AIPException=1`. |
| 6 | **`true`** | - `UseOfficeForLabelling = {0}`<br>- `AIPException = {1}`           | - `Prior v2302: ⚠️ Add-In`<br>- `After v2302: ⚠️ Add-In`      | **NEW**. Built-in labeling is explicitly disabled with `UseOfficeForLabelling=0` and add-in is explicitly enabled with `AIPException=1`. |
| 7 | **`true`** | - `UseOfficeForLabelling = {undefined}`<br>- `AIPException = {0, undefined}` | - `Prior v2302: ⚠️ Add-In`<br>- `After v2302: ✅ Built-In`    | **NEW**. Built-in labeling overrides add-in as the default unless `AIPException=1`. |
| 7 | **`true`** | - `UseOfficeForLabelling = {undefined}`<br>- `AIPException = {1}`       | - `Prior v2302: ⚠️ Add-In`<br>- `After v2302: ⚠️ Add-In`      | **NEW**. Add-in labeling is explicitly enabled with `AIPException=1`. |
| ~   |  ~~   | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~	| 


