![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)


<h1 align="center">Step 5: Disable AIP Add-In and enable built-in sensitivity labels</h1>

<p align="center">
<a href="https://aka.ms/AIP2MIP/HowTo/GetStarted">Playbook Overview</a> > <a href="../GetStarted">Get Started</a> > <a href="../AIP2MIPStep1">Step 1</a> > <a href="../AIP2MIPStep2">Step 2</a>  > <a href="../AIP2MIPStep3">Step 3</a>  > <a href="../AIP2MIPStep4">Step 4</a> > <b>Step 5</b>
</p>

## Overview
Once you're ready for the sensitivity labeling experience that's built into Office apps, it's time for the last step -- disable the AIP add-in and enable built-in labeling. 🎉

!!! warning

    Up until recently, built-in labeling was turned off by default in Office for Windows apps when the AIP client was installed. 
    This default will no longer be the case for newer versions of Office. 
    If you previously set `Use the Sensitivity feature in Office to apply and view sensitivity labels` to 0, 
    viewing and applying labels will be disabled even with the AIP Add-in. Otherwise, the add-in will be automatically replaced with built-in labeling.
    Learn more about the [change of default labeling client and how to configure your preferred labeling client](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip?view=o365-worldwide#how-to-disable-the-aip-add-in-to-use-built-in-labeling-for-office-apps).


## Checklist

!!! note

    Minimum required version of Office was updated on January 17, 2023. Instead of v2212, the minimum version is 2302.

To enable built-in labeling in Office, review this checklist:

- Review the [configuration matrix](AIPException.md) to assess the impact to your organization's devices
- Remove prior configurations of "Use the Sensitivity feature in Office to apply and view sensitivity labels" or reset it to its default

## Additional Resources

- Use [Office configuration service](https://config.office.com/) to configure the settings for enabling/disabling AIP Add-in
- [Support documentation for Admins](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip)
- [How to use the new `AIPException` config for M365 Apps](AIPException.md)
