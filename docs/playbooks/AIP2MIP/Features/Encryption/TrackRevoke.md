![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)<br>
[`➡️ Get Started`](../../GetStarted.md) > [`➡️ Step 1`](../../AIP2MIPStep1.md) > [`➡️ Step 2`](../../AIP2MIPStep2.md) > [`➡️ Step 3`](../../AIP2MIPStep3.md) > [`➡️ Step 4`](../../AIP2MIPStep4.md)[***`Change Guide`***](../../CompareAIP2MIP.md) > [`➡️ Step 5`](../../AIP2MIPStep5.md)


# `Encryption` / `Document Tracking & Revocation`

Document tracking and revocation is a collection of tools to help users and admins track encrypted documents and revoke access.

## Product Capabilities
The table below lists the main characteristics of this feature and its comparison across the AIP Add-in vs. the built-in labeling solution. These are mapped to product screenshots in the next section. 

| Use Case  | :simple-microsoftazure: Add-In<br>:material-download: [`Latest`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/unifiedlabelingclient-version-release-history)| :material-microsoft-office: Built-In<br>:material-cloud-download: [`Current Channel`](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#support-for-sensitivity-label-capabilities-in-apps) | :material-microsoft-office: Built-In<br>:material-calendar-clock: `Coming Soon` |
| :---- | :---- | :---- | :---- | 
| :material-numeric-1-circle:{ .num  } **Admin: Track Documents** <br>Determines whether documents that are registered via the Office client can be tracked by compliance admins.  | :material-shield-check:{ .success } `Supported`<br>Requires advanced setting [`EnableTrackAndRevoke == true`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#turn-off-document-tracking-features)  |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-calendar-edit:{ .warning } `In Planning` |
| :material-numeric-2-circle:{ .num  } **Admin: Revoke Documents** <br>Determines whether tracked documents can be revoked by compliance admins.  | :material-shield-check:{ .success } `Supported`  |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-calendar-edit:{ .warning } `In Planning` |
| :material-numeric3-circle:{ .num  } **End-Users: Track Documents** <br>Determines whether documents that are registered via the Office client can be tracked by end-users.  | :material-shield-off-outline:{ .notsupported } `Not Supported`<br>End-users cannot track documents they've encrypted with AIP Add-in  |  :material-shield-off-outline:{ .notplanned  } `Not Planned` ||
| :material-numeric-4-circle:{ .num  } **End-Users: Revoke Documents** <br>Determines whether tracked documents can be revoked by end-users.  | :material-shield-check:{ .success } `Supported`<br>Requires advanced setting [`EnableRevokeGuiSupport == true`](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#turn-off-the-revoke-option-for-end-users-in-office-apps) |  :material-shield-off-outline:{ .notsupported } `Not Supported` | :material-calendar-edit:{ .warning } `In Planning` |
| ~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~ | ~~~~~~~~~~~~~~ |  ~~~~~~~~~~~~~~ | 

### Change Management Notes

!!! warning

    Admin tracking and revocation is not yet supported for files encrypted from devices that use built-in labeling.

!!! warning

    Tracking and Revocation using the [AIP Add-in has various limitations](https://learn.microsoft.com/en-us/azure/information-protection/known-issues#known-issues-for-track-and-revoke-features) you should be aware of before relying on it.
    If this feature is required for organizations to transition to the built-in labeling solution, 
    consider these limitations to understand the extent to which your users are blocked during migration.

## Learn More

:material-help-circle: [AIP Administrator Guide: Track and revoke document access with Azure Information Protection](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/track-and-revoke-admin)

:material-help-circle: [AIP User Guide: Revoke document access with Azure Information Protection](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/revoke-access-user)

:material-help-circle: [Known issues for track and revoke features](https://learn.microsoft.com/en-us/azure/information-protection/known-issues#known-issues-for-track-and-revoke-features)
