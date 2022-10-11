![image](https://user-images.githubusercontent.com/43501191/195106327-46a0d337-43f9-4c7c-b2b9-d4031936c9bc.png)


<h1 align="center">Step 5: Disable AIP Add-In and enable built-in sensitivity labels</h1>

<p align="center">
<a href="../GetStarted">Get Started</a> > <a href="../AIP2MIPStep1">Step 1</a> > <a href="../AIP2MIPStep2">Step 2</a>  > <a href="../AIP2MIPStep3">Step 3</a>  > <a href="../AIP2MIPStep4">Step 4</a> > <b>Step 5</b>
</p>

## Overview
Once you're ready for the sensitivity labeling experience that's built into Office apps, it's time for the last step -- disable the AIP add-in and enable built-in labeling. 🎉

> ⚠️ Warning: Up until recently, built-in labeling was turned off by default in Office for Windows apps when the AIP client was installed. This default will no longer be the case for newer versions of Office. If you previously set `UseOfficeForLabelling==0`, viewing and applying labels will be disabled even with the AIP Add-in. Learn more about the [change of default labeling client and how to configure your preferred labeling client](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip).


## Checklist
To enable built-in labeling in Office, you use either of the following options:
- Remove configuration settings you've previously used, such as `UseOfficeForLabelling==0` or `AIPException==1`. This ensures users get the Microsoft-recommended default experience for sensitivity labels starting in versio v2211.
- Set the Office configuration `UseOfficeForLabelling==true` and ensure `AIPException` is not set.

## Additional Resources

- Use [Office configuration service](https://config.office.com/) to configure the settings for enabling/disabling AIP Add-in
- [Support documentation for Admins](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip)
- [How to use the new `AIPException` config for M365 Apps](AIPException.md)
