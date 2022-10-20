
![image](https://user-images.githubusercontent.com/43501191/195164735-920ec45a-cd2c-41a1-9d22-6a557ca9ddc3.png)


<h1 align="center">Compare AIP Add-In with Built-In Labeling in M365 Apps</h1>

<p align="center">
<a href="https://aka.ms/AIP2MIP/HowTo/GetStarted">Playbook Overview</a> > <a href="../GetStarted">Get Started</a> > <a href="../AIP2MIPStep1">Step 1</a> > <a href="../AIP2MIPStep2">Step 2</a>  > <a href="../AIP2MIPStep3">Step 3</a> [<b>Compare Solutions</b>] > <a href="../AIP2MIPStep4">Step 4</a> > <a href="../AIP2MIPStep5">Step 5</a>
</p>


Many of the labeling features supported by the AIP add-in are now supported by built-in labeling. The table below is an adaptation of [Feature parity for built-in labeling and the AIP add-in for Office apps](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip#feature-parity-for-built-in-labeling-and-the-aip-add-in-for-office-apps) and offers additional information to help you prepare your transition from the AIP add-in. 

Together, the combination of feature roadmap and change-management effort can help you plan a schedule for your migration. The roadmap indicates how soon the feature would be generally available in the fastest release channel of Office; the effort gives you an estimate on how long it might take your organization to prepare and adopt the feature once it's available.

> 🗒️ Note: For a more detailed list of capabilities, minimum versions that might be needed, and configuration information, see [Manage sensitivity labels in Office apps](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide).

### Migration Readiness

The following categories help you identify the support status for Add-in functionality available in built-in labeling.

- :material-shield-check:{ .success } `Supported` : General availability in [Current Channel](https://learn.microsoft.com/en-us/deployoffice/overview-update-channels#current-channel-overview)
- :material-calendar-star:{ .preview } `In Preview`: Available in [Insider Beta Channel](https://learn.microsoft.com/en-us/DeployOffice/office-insider/compare-channels) to try now. Provides a 
:material-calendar-cursor: `M365 Roadmap` tracking item.
- :material-dev-to:{ .development  } `In Development`: Development is under way. Keep an eye out for product roadmap updates. General availability **3-6 months** time horizon. Provides a 
:material-calendar-cursor: `M365 Roadmap` tracking item.
- :material-calendar-edit:{ .planning } `In Planning` : In consideration for an upcoming development cycle, but not yet committed on product roadmap. General availability **6-12 months** time horizon.
- :material-shield-off-outline:{ .notplanned  } `Not Planned` : Items that are not in consideration for built-in labeling. Submit a Microsoft support ticket for a Design Change Request (DCR) if these are important for your organization.
- :material-shield-check:{ .success } `Not Needed` : Items that are only needed to workaround limitations of an add-in; not needed for built-in labeling.

### Change Management Insights

Use the ranking scheme below to help you assess how much effort you can expect to transition users to the replacement built-in feature. 

| Migration Effort |
| :----       |
| `⚪⚪⚪⚪⚪`<br>No change. AIP Add-in functionality is identical in built-in labeling. |
| `🟠⚪⚪⚪⚪`<br>Fully Supported. Minor differences may exist, but does not require configuration changes or proactive end-user education (aka "silent change"). Targeted testing is optional. |
| `🟠🟠⚪⚪⚪`<br>Supported with minor differences. No configuration changes required, but may need updates to training, support docs, or end-user comms. Targeted testing recommended. |
| `🟠🟠🟠⚪⚪`<br>Supported, but requires changes to policy configuration and/or broad testing. Likely needs updates to training, support docs, or end-user comms.|
| `🟠🟠🟠🟠⚪`<br>Supported with alternative solutions available from Microsoft (e.g. AIP Classify & Protect, SPO Auto Labeling). May require changes to policy configuration and/or broad testing. Likely needs updates to training, support docs, or end-user comms. |
| `🟠🟠🟠🟠🟠`<br>Not Supported. |

-----

## Azure Information Protection Add-in Scenarios

Review the list of scenarios and their availability in built-in labeling below. Where available, references to additional resources are provided.

| Scenario Reference | Migration Readiness | Migration Effort | 
|:-----|:-----|:-----|
| :material-security-network:  **Labeling Environment** | | |
| Choose a labeling client for Office                                             | :material-shield-check:{ .success } `Supported` | `🟠🟠🟠⚪⚪` | 
| Labeling for modern Office files in Open XML format (e.g. docx)                 | :material-shield-check:{ .success } `Supported` | `🟠⚪⚪⚪⚪` |  
| View and apply sensitivity labels in government cloud                           | :material-shield-check:{ .success } `Supported` | `⚪⚪⚪⚪⚪` |
| Admin can scope labels independently for files and emails                       | :material-dev-to:{ .development  } `In Development`<br>:material-calendar-cursor: [M365 Roadmap 99939][RMID99939] | `🟠🟠🟠⚪⚪` |  
| Labeling for legacy Office files in Microsoft Office 97-2003 format (e.g. doc)  | :material-shield-off-outline:{ .notplanned  } `Not Planned` | `🟠🟠🟠🟠⚪`| 
| Support for labeling using Office perpetual                                     | :material-shield-off-outline:{ .notplanned  } `Not Planned` | `🟠🟠🟠🟠🟠` | 
| | | |
| :fontawesome-solid-user-shield: **Labeling User Experience**  |||
| Sensitivity Status                          | :material-shield-check:{ .success } `Supported`                                                                 | `🟠⚪⚪⚪⚪` | 
| Sensitivity menu (ribbon)                   | :material-shield-check:{ .success } `Supported`                                                                 | `🟠⚪⚪⚪⚪` | 
| Multi-language label names and descriptions | :material-shield-check:{ .success } `Supported`                                                                 | `⚪⚪⚪⚪⚪` | 
| Sensitivity bar                             | :material-calendar-star:{ .preview } `In Preview`<br>:material-calendar-cursor: [M365 Roadmap 88517][RMID88517] | `🟠🟠⚪⚪⚪` | 
| Label Colors                                | :material-calendar-star:{ .preview } `In Preview`<br>:material-calendar-cursor: [M365 Roadmap 93217][RMID93217] | `⚪⚪⚪⚪⚪` | 
| | | |
| :material-shield-alert-outline: **Labeling Enforcement** |||
| Manual labeling                              | :material-shield-check:{ .success } `Supported`     | `🟠⚪⚪⚪⚪` | 
| Mandatory labeling: Enforce at file-save     | :material-shield-check:{ .success } `Supported`     | `🟠🟠⚪⚪⚪` | 
| Mandatory labeling: Files vs. Emails         | :material-shield-check:{ .success } `Supported`     | `🟠⚪⚪⚪⚪` | 
| Downgrade Justification                      | :material-shield-check:{ .success } `Supported`     | `🟠⚪⚪⚪⚪` | 
| Manual Labeling: Preselect default sublabel  | :material-calendar-edit:{ .planning } `In Planning`  | `🟠🟠⚪⚪⚪` | 
| Mandatory labeling: Enforcement at app close | :material-calendar-edit:{ .planning } `In Planning`  | `🟠⚪⚪⚪⚪` | 
| | | |
| :material-shield-star-outline: **Labeling Automation** |||
| Default Labeling: Files | :material-shield-check:{ .success } `Supported` | `🟠🟠⚪⚪⚪` | 
| Default Labeling: Emails | :material-shield-check:{ .success } `Supported` | `🟠🟠⚪⚪⚪` | 
| Automatic or recommended labeling of files and emails with sensitive information types | :material-shield-check:{ .success } `Supported` | `🟠🟠⚪⚪⚪` | 
| Automatic or recommended labeling of emails based on attachment labels | :material-dev-to:{ .development  } `In Development`<br>:material-calendar-cursor: [M365 Roadmap 100490][RMID100490] | `🟠🟠⚪⚪⚪` | 
| | | |
| :material-shield-lock-outline: **Encryption as an outcome for labeling** |||
| Admin-defined permissions | :material-shield-check:{ .success } `Supported` | `🟠🟠🟠⚪⚪` | 
| User-defined permissions: Files restricted to users and groups | :material-shield-check:{ .success } `Supported` | `🟠🟠🟠⚪⚪` | 
| User-defined permissions: Do Not Forward for emails | :material-shield-check:{ .success } `Supported` | `🟠🟠🟠⚪⚪`| 
| User-defined permissions: Files restricted to domain names | :material-calendar-star:{ .preview } `In Preview`<br>:material-calendar-cursor: [M365 Roadmap 98131][RMID98131] | `🟠⚪⚪⚪⚪` | 
| S/MIME for emails | :material-calendar-star:{ .preview } `In Preview`<br>:material-calendar-cursor: [M365 Roadmap 93199][RMID93199] | `🟠🟠⚪⚪⚪` | 
| Double Key Encryption | :material-calendar-edit:{ .planning } `In Planning` | `🟠🟠🟠⚪⚪` | 
| Document Tracking & Revocation for Compliance Admins | :material-calendar-edit:{ .planning } `In Planning` | `🟠🟠🟠⚪⚪` | 
| Document Revocation for End-Users | :material-calendar-edit:{ .planning } `In Planning` | `🟠🟠🟠⚪⚪` | 
| | | |
| :material-send-lock: **Collaboration with labeled content** |||
| Multi-user editing of files encrypted with admin-defined permissions | :material-shield-check:{ .success } `Supported` | `🟠🟠🟠⚪⚪` | 
| Multi-user editing of files encrypted with user-defined permissions | :material-shield-check:{ .success } `Supported` | `🟠🟠🟠⚪⚪` | 
| Block/warn/justify before sending emails | :material-dev-to:{ .development  } `In Development`<br>:material-calendar-cursor: [M365 Roadmap 100255][RMID100255] | `🟠🟠🟠⚪⚪` | 
| | | |
| :material-file-code: **Content Marking** |||
| Headers, footers, watermark | :material-shield-check:{ .success } `Supported` | `🟠🟠⚪⚪⚪` | 
| Dynamic markings | :material-shield-check:{ .success } `Supported` | `🟠🟠⚪⚪⚪` | 
| Per app visual marking | :material-shield-check:{ .success } `Supported` | `🟠🟠⚪⚪⚪` | 
| | | |
| :material-shield-search:  **Reporting and Analytics** ||| 
| Disable Auditing | :material-shield-check:{ .success } `Supported` | `🟠⚪⚪⚪⚪` | 
| Auditing labeling activities | :material-shield-check:{ .success } `Supported` | `🟠⚪⚪⚪⚪` | 
| Auditing Protection Properties  | :material-dev-to:{ .development  } `In Development`<br>:material-calendar-cursor: [M365 Roadmap 98135][RMID98135] | `🟠⚪⚪⚪⚪` | 
| | | |
| :material-shield-sync-outline:  **Migrate from alternative labeling clients** |||
| Label by custom properties | :material-shield-off-outline:{ .notplanned  } `Not Planned` | `🟠🟠🟠🟠⚪` |
| Remove external markings | :material-shield-off-outline:{ .notplanned  } `Not Planned` | `🟠🟠🟠🟠⚪` | 
|  | ~~~~~~~~~~~~~~~~~~~ | ~~~~~~~~~~~ | 

## Azure Information Protection Add-in Advanced Settings

The table below summarizes the advanced settings used by the AIP Add-in for M365 Apps. Review the support documents for [all of AIP's advanced settings](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations), including those not mentioned below that do not apply to the add-in. Each setting links its corresponding scenario's migration guide that explains if/how each setting is used within the context of the feature.

| Advanced Setting | Migration Readiness | Scenario Reference | 
|:-----|:-----|:-----|
|  | | |
| :fontawesome-solid-user-shield: **Labeling User Experience**  |||
| `ReportAnIssueLink` | :material-shield-check:{ .success } `Supported`  | - [Sensitivity Bar](Features/UX/SensitivityBar.md)<br>- [Sensitivity Menu](Features/UX/SensitivityMenu.md) | 
| `color`             | :material-calendar-star:{ .preview } `In Preview` | - [Label Colors](Features/UX/LabelColors.md) | 
| `HideBarByDefault`  | :material-calendar-star:{ .preview } `In Preview` | - [Sensitivity Bar](Features/UX/SensitivityBar.md) | 
| | | |
| :material-shield-alert-outline: **Labeling Enforcement** |||
| `DisableMandatoryInOutlook`    | :material-shield-check:{ .success } `Supported`      | - [Mandatory Labeling](Features/Enforcement/LabelColors.md) | 
| `DefaultSubLabelId`            | :material-calendar-edit:{ .planning } `In Planning`    | - [Mandatory Labeling](Features/Enforcement/ManualLabeling.md) | 
| `PostponeMandatoryBeforeSave`  | :material-calendar-edit:{ .planning } `In Planning`    | - [Mandatory Labeling](Features/Enforcement/LabelColors.md) | 
| `JustificationTextForUserText` | :material-shield-off-outline:{ .notplanned  } `Not Planned`    | - [Downgrade Justification](Features/Enforcement/DowngradeJustification.md) | 
| | |
| :material-shield-star-outline: **Labeling Automation** |||
| `OutlookRecommendationEnabled`     | :material-shield-check:{ .success } `Supported`      | - [Automatic Labeling](Features/Automation/AutomaticLabeling.md) | 
| `OutlookDefaultLabel`              | :material-shield-check:{ .success } `Supported`      | - [Default Labeling](Features/Automation/DefaultLabeling.md) | 
| `AttachmentAction`                 | :material-dev-to:{ .development  } `In Development` | - [Email Attachment Inheritance](Features/Automation/EmailInheritance.md) | 
| `AttachmentActionTip`              | :material-shield-off-outline:{ .notplanned  } `Not Planned`  | - [Email Attachment Inheritance](Features/Automation/EmailInheritance.md) | 
| `OfficeContentExtractionTimeout`   | :material-shield-check:{ .success } `Not Needed` | - [Automatic Labeling](Features/Automation/AutomaticLabeling.md) | 
| `RunPolicyInBackground`            | :material-shield-check:{ .success } `Not Needed` | - [Automatic Labeling](Features/Automation/AutomaticLabeling.md) | 
| | |
| :material-shield-lock-outline: **Encryption as an outcome for labeling** |||
| `EnableRevokeGuiSupport`<br>`EnableTrackAndRevoke` | :material-calendar-edit:{ .planning } `In Planning` | - [Tracking & Revocation](Features/Encryption/TrackRevoke.md) | 
| `OutlookSkipSmimeOnReadingPaneEnabled`             | :material-shield-check:{ .success } `Not Needed`  | - [S/MIME](Features/Encryption/SMIME.md) | 
| `SMimeEncrypt`<br>`SMimeSign`                      | :material-calendar-star:{ .preview } `In Preview`  | - [S/MIME](Features/Encryption/SMIME.md) | 
| | |
| :material-send-lock: **Collaboration with labeled content** |||
| `OutlookBlockTrustedDomains`<br> `OutlookBlockUntrustedCollaborationLabel`<br> `OutlookWarnTrustedDomains`<br> `OutlookWarnUntrustedCollaborationLabel`<br> `OutlookJustifyTrustedDomains`<br> `OutlookJustifyUntrustedCollaborationLabel`<br>`OutlookCollaborationRule` | :material-dev-to:{ .development  } `In Development` | - [Email Collaboration](Features/Collaboration/EmailCollaboration.md) | 
| `OutlookOverrideUnlabeledCollaborationExtensions`<br> `OutlookUnlabeledCollaborationActionOverrideMailBodyBehavior` | :material-dev-to:{ .development  } `In Development` | - [Email Collaboration](Features/Collaboration/EmailCollaboration.md) | 
| `OutlookGetEmailAddressesTimeOutMSProperty`<br>`EnableOutlookDistributionListExpansion` | TBD | xxx | 
| | |
| :material-shield-search: **Reporting and Analytics** |||
| `EnableAudit`<br>`LogMatchedContent` | :material-shield-check:{ .success } `Supported` | - [Auditing](Features/Audit/Auditing.md) | 
| | |
| :material-shield-sync-outline:  **Migrate from alternative labeling clients** |||
| `labelByCustomProperties`<br>`customPropertiesByLabel`<br> `EnableLabelBySharePointProperties`<br>`EnableLabelByMailHeader` | :material-shield-off-outline:{ .notplanned  } `Not Planned` | - [Migrate from 3P solution](Features/3P/Migrate3PLabeling.md) | 
| `PowerPointRemoveAllShapesByShapeName`<br>`PowerPointShapeNameToRemove`<br>`WordShapeNameToRemove`<br> `RemoveExternalContentMarkingInApp`<br> `RemoveExternalMarkingFromCustomLayouts` | :material-shield-off-outline:{ .notplanned  } `Not Planned` | - [Migrate from 3P solution](Features/3P/Migrate3PLabeling.md) | 
|  | ~~~~~~~~~~~~ | ~~~~~~~~~~~~~~~~~~~ | 




## Additional Resources

- [Microsoft 365 Roadmap](https://www.microsoft.com/en-us/microsoft-365/roadmap)
- [Built-in labeling support reference](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide)
- [AIP Add-in support reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide)


<!-- ************* RMIDs ************* -->

[RMID99939]:    https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=99939
[RMID93199]:    https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=93199
[RMID88517]:    https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=88517
[RMID93217]:    https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=93217
[RMID100490]:    https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100490
[RMID98131]:    https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=98131
[RMID100255]:    https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100255
[RMID98135]:    https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=98135


<!-- ************* RMIDs ************* -->




<!-- ************* MIP Feature Docs ************* -->

[FeatureMIPColors]:                https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#label-colors
[FeatureMIPSMIME]:                 https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#configure-a-label-to-apply-smime-protection-in-outlook
[SettingMIPOutlookSettings]:       https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#outlook-specific-options-for-default-label-and-mandatory-labeling
[FeatureMIPAudit]:                 https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#auditing-labeling-activities
[FeatureMIPAutolabeling]:          https://learn.microsoft.com/en-us/microsoft-365/compliance/apply-sensitivity-label-automatically
[FeatureMIPSensitivityBar]:        https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#sensitivity-bar


<!-- ************* ADVANCED MIP SETTINGS URLs ************* -->

[SettingMIPColors]:                https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#label-colors
[SettingMIPSMIME]:                 https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#configure-a-label-to-apply-smime-protection-in-outlook
[SettingMIPOutlookSettings]:       https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#outlook-specific-options-for-default-label-and-mandatory-labeling
[SettingMIPAudit]:                 https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#auditing-labeling-activities
[SettingMIPAutolabeling]:          https://learn.microsoft.com/en-us/microsoft-365/compliance/apply-sensitivity-label-automatically#how-to-configure-auto-labeling-for-office-apps
[SettingMIPHelpURL]:               https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels#what-label-policies-can-do
[SettingMIPSensitivityBar]:        https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#sensitivity-bar

<!-- ************* ADVANCED AIP SETTINGS URLs ************* -->

[SettingAIPColors]:                https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#specify-a-color-for-the-label


[SettingAIPDefaultSublabel]:       https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#specify-a-default-sublabel-for-a-parent-label 
[SettingAIPLabelMapping]:          https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#migrate-labels-from-secure-islands-and-other-labeling-solutions
[SettingAIPAttachments]:           https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#for-email-messages-with-attachments-apply-a-label-that-matches-the-highest-classification-of-those-attachments
[SettingAIPOversharing]:           https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent
[SettingAIPOversharingCustomText]: https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#customize-outlook-popup-messages
[SettingAIPSMIMEPerf]:             https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#prevent-outlook-performance-issues-with-smime-emails
[SettingAIPMarkingsRemoveAll]:     https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#remove-all-shapes-of-a-specific-shape-name
[SettingAIPMarkingsRemove]:        https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#avoid-removing-shapes-from-powerpoint-that-contain-specified-text-and-are-not-headers--footers
[SettingAIPMarkingsLayouts]:       https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#extend-external-marking-removal-to-custom-layouts
[SettingAIPExpandRecipients]:      https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#expand-outlook-distribution-lists-when-searching-for-email-recipients
[SettingAIPEnableUserTR]:          https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#turn-off-the-revoke-option-for-end-users-in-office-apps
[SettingAIPEnableUserTR]:          https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#turn-off-document-tracking-features
[SettingAIPMandatoryOnClose]:      https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#remove-not-now-for-documents-when-you-use-mandatory-labeling
[SettingAIPSensitivityBar]:        https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#display-the-information-protection-bar-in-office-apps
[SettingAIPJustification]:         https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#customize-justification-prompt-texts-for-modified-labels
[SettingMIPAutolabelingPerf]:      https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#turn-on-classification-to-run-continuously-in-the-background
[SettingMIPAutolabelingTimeout]:   https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#configure-the-autolabeling-timeout-on-office-files
