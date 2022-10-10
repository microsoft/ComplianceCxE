# Step 3: Evaluate Information Protection Readiness

| ![image](https://user-images.githubusercontent.com/43501191/194918269-c93db69f-b2c8-4c8d-b8e7-594b42835b89.png)<br> [Get Started](GetStarted.md)| ![image](https://user-images.githubusercontent.com/43501191/194918799-365edddb-b0bc-4bdf-85d0-606820d09b01.png)<br>[Step 1: Assign Licenses to M365 Apps for Enterprise](AIP2MIPStep1.md) | ![image](https://user-images.githubusercontent.com/43501191/194919001-565bbd8e-0c9d-42c4-9692-c639ee3b6ead.png)<br>[Step 2: Deploy M365 Apps for Enterprise](AIP2MIPStep2.md) | ![image](https://user-images.githubusercontent.com/43501191/194919760-6eeb480d-a98d-44b4-9010-6a1aa152f1ca.png)<br>Step 3: Evaluate Information Protection Readiness | ![image](https://user-images.githubusercontent.com/43501191/194916992-0829518e-00f5-4114-a17b-765b56dfa3c0.png)<br>[Step 4: Prepare Organization for Change](AIP2MIPStep4.md) | ![image](https://user-images.githubusercontent.com/43501191/194917039-a7f0a7e9-521d-4b22-a05a-8ea9ec6be52a.png)<br>[Step 5: Switch to Built-In labeling](AIP2MIPStep5.md) | 
| :--: | :--: | :--: | :--: | :--: | :--: |

## Overview
The third step in preparing your migration is to evaluate the readiness of your information protection policies to transition to the built-in labeling solution in Office.

Many of the capabilities of the AIP Add-in are [already supported in the built-in labeling experience](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip?view=o365-worldwide#feature-parity-for-built-in-labeling-and-the-aip-add-in-for-office-apps) in M365 Apps for Enterprise. Over the new few months, we will continue to deliver improvements and new capabilities in the built-in client. 

> 💡 Tip: Tune-in to the [Office sensitivity labels newsletter](https://aka.ms/AIP2MIP/Newsletter) to stay up-to-date with what's new and coming soon for information protection in Office apps

> Note: By enabling the built-in labeling client in M365 Apps, you can continue to use the [AIP Scanner](https://learn.microsoft.com/en-us/azure/information-protection/deploy-aip-scanner), [AIP PowerShell](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-powershell), or [AIP Classify and Protect](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-classify-protect#use-the-file-explorer-to-classify-and-protect-files).

## Checklist
If your all the capabilities you use in the AIP Add-in are already supported, proceed to [Step 4](AIP2MIPStep4.md). Otherwise, follow the checklist below.

- [ ] [Evaluate support](CompareAIP2MIP.md) for your AIP-based information protection policies in built-in labeling. 
    - [ ] If all your policies are `✅ Supported` or `⬛ Not Needed`, **migrate to the built-in labeling today**. Got to [Step 5](AIP2MIPStep5.md) to learn how to enable the built-in labeling client. 
    - [ ] If any must-have capabilities are `⭐ In Preview` or `🔷 In Development`, start planning your migration now. Most of these capabilities will be available in [Current Channel](https://learn.microsoft.com/en-us/deployoffice/overview-update-channels#current-channel-overview) in an estimated **3-6 months time horizon**. Review each feature's roadmap for specific timelines. [Join a preview program](PreviewAIP2MIP.md) to start evaluating these capabilities.
    - [ ] If any must-have capabilities are `🟨 In Planning`, consider piloting supported features in a [preview program](PreviewAIP2MIP.md) while you prepare for remaining capabilities to be supported over a **6-12 months time horizon**.
    - [ ] If any must-have capabilities are `⚫ Not Planned`, evaluate the [AIP Scanner](https://learn.microsoft.com/en-us/azure/information-protection/deploy-aip-scanner), [AIP PowerShell](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-powershell), or [AIP Classify and Protect](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-classify-protect#use-the-file-explorer-to-classify-and-protect-files) to replace the functionality you were using the AIP Add-in.

When you're ready, proceed to [Step 4️⃣](AIP2MIPStep4.md).

## Additional Resources
- [Comparison of AIP Add-In capabilities in built-in labeling](CompareAIP2MIP.md)
- [M365 Apps previews for information protection](PreviewAIP2MIP.md)
