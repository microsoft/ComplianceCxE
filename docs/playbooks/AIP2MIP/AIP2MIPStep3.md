
![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)

<h1 align="center">Step 3: Evaluate Information Protection Readiness</h1>

<p align="center">
<a href="https://aka.ms/AIP2MIP/HowTo/GetStarted">Playbook Overview</a> > <a href="../GetStarted">Get Started</a> > <a href="../AIP2MIPStep1">Step 1</a> > <a href="../AIP2MIPStep2">Step 2</a>  > <b>Step 3</b>  > <a href="../AIP2MIPStep4">Step 4</a> > <a href="../AIP2MIPStep5">Step 5</a>
</p>



## Overview
The third step in preparing your migration is to evaluate the readiness of your information protection policies to transition to the built-in labeling solution in Office.

Many of the capabilities of the AIP Add-in are [already supported in the built-in labeling experience](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip?view=o365-worldwide#feature-parity-for-built-in-labeling-and-the-aip-add-in-for-office-apps) in M365 Apps for Enterprise. Over the next few months, we will continue to deliver improvements and new capabilities in the built-in client. 

> 💡 Tip: Tune-in to the quarterly [Office sensitivity labels newsletter](https://aka.ms/AIP2MIP/Newsletter) to stay up-to-date with what's new and coming soon for information protection in Office apps.

> 💡 Tip: By enabling the built-in labeling client in M365 Apps, you can continue to use the [AIP Scanner](https://learn.microsoft.com/en-us/azure/information-protection/deploy-aip-scanner), [AIP PowerShell](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-powershell), or [AIP Classify and Protect](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-classify-protect#use-the-file-explorer-to-classify-and-protect-files).

## Checklist

- Use [Comparison Guide](CompareAIP2MIP.md) to evaluate the roadmap status of all your AIP Add-in scenarios. The guide provides per-feature status, links to committed roadmaps, and change-management guidelines to help you evaluate each feature's transition.
- Use the generalized recommendations below to help you anticipate your adoption timelines based on a feature's roadmap. Refer to the [Comparison Guide](CompareAIP2MIP.md) for each feature's roadmap.

| Scenario Roadmap | Migration Recommendations |
| :--- | :--- |
| All scenarios are `✅ Supported` or `⬛ Not Needed` | **Time Horizon: Now**<br>1. Start your migration today. Got to [Step 5](AIP2MIPStep5.md) to learn how to enable the built-in labeling client. |
| At least one must-have scenario `⭐ In Preview` or `🔷 In Development` | **Time Horizon: 3-6 months**<br>1. Start planning your migration now. Most of these capabilities will be available in [Current Channel](https://learn.microsoft.com/en-us/deployoffice/overview-update-channels#current-channel-overview) in the next 3-6 months. Review each feature's roadmap for specific timelines.<br>2. [Join a preview program](PreviewAIP2MIP.md) to start evaluating these capabilities.<br>3. Consider whether you will require the [`⚙️ AIPException` policy](AIPException.md) to avoid disabling the AIP Addin. |
| At least one must-have scenario `🟨 In Planning`| **Time Horizon: 6-12 months**<br>1. Consider piloting supported features in a [preview program](PreviewAIP2MIP.md) while you prepare for remaining capabilities.<br>2. Consider whether all your users require `🟨 In Planning` features and opportunity to deploy built-in labeling sooner for small population.<br>3. Plan to use the [`⚙️ AIPException` policy](AIPException.md) to avoid having the AIP Addin disabled by default. |
| At least one must-have scenario `⚫ Not Planned` | **Time Horizon: Now**<br>1. Evaluate the [AIP Scanner](https://learn.microsoft.com/en-us/azure/information-protection/deploy-aip-scanner), [AIP PowerShell](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-powershell), or [AIP Classify and Protect](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-classify-protect#use-the-file-explorer-to-classify-and-protect-files) to replace the functionality you were using the AIP Add-in. <br> 2. If you are unable to use built-in labeling for any users because At least one must-have scenario `⚫ Not Planned`, contact your Microsoft support team to request a Design Change Request. The product team will evaluate this according to typical backlog triage. |

When you're ready, proceed to [Step 4️⃣](AIP2MIPStep4.md).

## Additional Resources
- [Comparison of AIP Add-In capabilities in built-in labeling](CompareAIP2MIP.md)
- [M365 Apps previews for information protection](PreviewAIP2MIP.md)
