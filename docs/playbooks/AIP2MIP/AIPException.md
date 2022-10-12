![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)


<h1 align="center">How to use <code>AIPException</code> choose sensitivity labeling in for M365 Apps</h1>

<p align="center">
<a href="https://aka.ms/AIP2MIP/HowTo/GetStarted">Playbook Overview</a> > <a href="../GetStarted">Get Started</a> > <a href="../AIP2MIPStep1">Step 1</a> > <a href="../AIP2MIPStep2">Step 2</a>  > <a href="../AIP2MIPStep3">Step 3</a>  > <a href="../AIP2MIPStep4">Step 4</a> > <a href="../AIP2MIPStep5">Step 5</a> [<b>AIPException Setting</b>]
</p>

## Overview
To ensure as many customers as possible are using built-in labeling to avoid missing new information protection capabilities that are unavailable with the AIP Add-in, M365 Apps have a new policy configuration.

- Group Policy Setting `Use the Sensitivity feature in Office to apply and view sensitivity labels`, also known as regkey `UseOfficeForLabelling`, controls whether Office uses the built-in labeling client or none at all.
- **New in M365 Apps Starting in v2211** Group Policy Setting `Use the Azure Information Protection add-in for sensitivity labeling`, also known as regkey `AIPException`, controls whether Office allows the AIP Add-in to be enabled in cases where the prior setting is disabled.

Refer to the [support documentation](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip?view=o365-worldwide#how-to-configure-newer-versions-of-office-to-enable-the-aip-add-in) for further details.

> ⚠️ Warning: If you previous configured `UseOfficeForLabeling == 0` to disable built-in labeling, all sensitivility labeling clients provided by Microsoft will be disabled in M365 Apps by default starting in **version 2211**.

Starting in v2211, the following sensitivity labeling clients are supported:

- `🚫 None`: Disable viewing and applying sensitivity labels from any Microsoft tool when `UseOfficeForLabeling == 0`. Allows customers to deploy alternative labeling solutions and avoid interoperability issues.
- `⭐ Recommended`: Microsoft recommends using built-in labeling instead of AIP Add-in wherever possible. Review the the [migration guide](GetStarted.md) to transition as soon as possible.
- `⚠️ Legacy`: Use AIP Add-in instead during its support lifecycle.


## Configuring sensitivity labeling client in M365 Apps

Use the [support documentation](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip) as the primary resource for configuring the sensitivity labeling client in Office.

The guide below provides a detailed support matrix:

|   #   | Add-in Installed  | Config:<br>`UseOfficeForLabeling`   | Config:<br>`AIPException`   | Outcome<br>Before v2211   | Outcome<br>After v2211   | Change Management |
| :---: | :---             | :---                              | :---                       | :---                      | :---                  | :--- | 
| 1     | `⭕ no`<br><br><br>| `⭕ 0`<br><br><br>       | `⭕ 0`<br>`🟢 1`<br>`⚪ undefined`    | `🚫 None`<br><br><br>| `🚫 None`<br><br><br>| `🟢⚪⚪`<br>No change. Labeling from Microsoft is disabled (e.g., uses 3P labeling) |
| 2     | `⭕ no`<br><br><br>| `🟢 1`<br><br><br>       | `⭕ 0`<br>`🟢 1`<br>`⚪ undefined`    | `⭐ Recommended`<br><br><br> | `⭐ Recommended`<br><br><br> | `🟢⚪⚪`<br>No change. Admin explicitly chooses built-in labeling |
| 3     | `⭕ no`<br><br><br>| `⚪ undefined`<br><br><br>| `⭕ 0`<br>`🟢 1`<br>`⚪ undefined`   | `⭐ Recommended`<br><br><br> | `⭐ Recommended`<br><br><br> | `🟢⚪⚪`<br>No change. Admin chooses default labeling |
| 4     | `🟢 yes`<br><br><br>| `⭕ 0`<br><br><br>      | `⭕ 0`<br>`⚪ undefined`<br><br>      | `⚠️ Legacy`<br><br><br>| `🚫 None`<br><br><br>| `⚪⚠️⚪`<br>User loses all labeling experience from Microsoft. To keep AIP, must use #5.|
| 5     | `🟢 yes`<br><br><br>| `⭕ 0`<br><br><br>      | `🟢 1`<br><br><br>                    | `⚠️ Legacy`<br><br><br>| `⚠️ Legacy`<br><br><br>   | `⚪⚠️⚪`<br> Admin explicitly wants AIP and must set `AIPExcepion==1`. Otherwise, AIP disabled.|
| 6     | `🟢 yes`<br><br><br>| `🟢 1`<br><br><br>      | `⭕ 0`<br>`🟢 1`<br>`⚪ undefined`    | `⭐ Recommended`<br><br><br> | `⭐ Recommended`<br><br><br>   | `🟢⚪⚪`<br>No change. Admin explicitly chooses built-in labeling |
| 7     | `🟢 yes`<br><br><br>| `⚪ undefined`<br><br><br>| `⭕ 0`<br>`⚪ undefined`<br><br>    | `⚠️ Legacy`<br><br><br>| `⭐ Recommended`<br><br><br>   | `⚪⚠️⚪`<br>Admin chooses updated default using built-in labeling |
| 8     | `🟢 yes`<br><br><br>| `⚪ undefined`<br><br><br>| `🟢 1`<br><br><br>                  | `⚠️ Legacy`<br><br><br>| `⚠️ Legacy`<br><br><br>   | `⚪⚠️⚪`<br>Admin chooses to use AIP after v2211|
|  | ~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~ | ~~~~~~~~~~~~ | ~~~~~~~~~~~~ |  |

