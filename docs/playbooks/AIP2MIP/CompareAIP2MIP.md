# Compare AIP Add-In with Built-In Labeling in M365 Apps
Many of the labeling features supported by the AIP add-in are now supported by built-in labeling. The table below is an adaptation of [Feature parity for built-in labeling and the AIP add-in for Office apps](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip#feature-parity-for-built-in-labeling-and-the-aip-add-in-for-office-apps) and offers additional information to help you prepare your transition from the AIP add-in. 

> 🗒️ Note: For a more detailed list of capabilities, minimum versions that might be needed, and configuration information, see [Manage sensitivity labels in Office apps](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide).

#### Legend
The following categories help you identify the support status for Add-in functionality available in built-in labeling.

- `✅ Supported`: General availability in [Current Channel](https://learn.microsoft.com/en-us/deployoffice/overview-update-channels#current-channel-overview)
- `⭐ In Preview`: Available in [Insider Beta Channel](https://learn.microsoft.com/en-us/DeployOffice/office-insider/compare-channels) to try now
- `🔷 In Development`: Development is under way. Keep an eye out for product roadmap updates.
- `🟨 In Planning`: In consideration for an upcoming development cycle, but not yet commited on product roadmap.
- `🟣 AIP PowerShell`: Not Planned for built-in labeling; functionality available in PowerShell or other AIP client tools.
- `⚫ Not Planned`: Items that are not in consideration for built-in labeling. Submit a support ticket for a Design Change Request (DCR) if these are important for your organization.
- `⬛ Not Needed`: Items that are only needed to workaround limitations of an add-in; not needed for built-in labeling

## Azure Information Protection Add-in Scenarios
Review the list of scenarios and their availability in built-in labeling below. Where available, references to additional resources are provided.

### Labeling Environment

| AIP Add-in capability |Built-in labeling | Resources |
|:-----|:-----|:-----|
| Admin can disable labeling | ✅ Supported | [👮 Compliance admin support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#if-you-need-to-turn-off-built-in-labeling-in-office-apps-on-windows)|
| Labeling for modern Office files in Open XML format (e.g. docx) | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#office-file-types-supported) |
| View and apply sensitivity labels in government cloud | ✅ Supported | |
| Admin can scope labels independently for files and emails | 🔷 In Development | [📅 Microsoft 365 Roadmap 99939](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=99939) |
| Labeling for legacy Office files in Microsoft Office 97-2003 format (e.g. doc) | 🟣 AIP PowerShell | [➡️ Learn more](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#office-file-types-supported)  |
| Labeling for non-Office files from Office apps (e.g. csv)| 🟣 AIP PowerShell | [➡️ Learn more](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#office-file-types-supported)  |
| Support for labeling using Office perpetual | ⚫ Not Planned | [➡️ Learn more](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps#labeling-client-for-desktop-apps) |
| `______________________________________________________` | `_______________` | `___________________________` |

> ⚠️ Note: M365 Apps for Enterprise require a network connection with internet access so they can communicate with Microsoft 365 services. Permanently disconnected devices without the ability to access Microsoft 365 services can't use built-in sensitivity labels. If you have environments with such devices, work with your Microsoft account team to discuss options to integrate these devices into your information protection environment.

### Labeling User Experience

| AIP Add-in capability |Built-in labeling | Resources |
|:-----|:-----|:-----|
| Sensitivity menu (ribbon) | ✅ Supported | [🧑‍💻 End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9) |
| Multilanguage label names and descriptions | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/create-sensitivity-labels) |
| Sensitivity bar | ⭐ In Preview | [📅 Microsoft 365 Roadmap 88517](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=88517)<br>[📣 Office Insiders Blog](https://insider.office.com/en-us/blog/sensitivity-bar-in-office-for-windows) <br>[👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#sensitivity-bar)<br>[🧑‍💻 End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9) |
| Label Colors | ⭐ In Preview | [📅 Microsoft 365 Roadmap 93217](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=93217) |
| `______________________________________________________` | `_______________` | `___________________________` |

### Labeling Enforcement

| AIP Add-in capability |Built-in labeling | Resources |
|:-----|:-----|:-----|
| Manual labeling | ✅ Supported | [🧑‍💻 End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9) |
| Mandatory labeling:<br>- New and existing items | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide#what-label-policies-can-do) |
| Mandatory labeling:<br>- Separate setting for email | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#outlook-specific-options-for-default-label-and-mandatory-labeling) |
| Downgrade Justification | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide#what-label-policies-can-do)<br>[🧑‍💻 End-User Support](https://support.microsoft.com/en-us/office/apply-sensitivity-labels-to-your-files-and-email-in-office-2f96e7cd-d5a4-403b-8bd7-4cc636bae0f9) |
| Mandatory labeling:<br>- Postpone enforcement until save | 🟨 In Planning | [➡️ AIP Add-in Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#remove-not-now-for-documents-when-you-use-mandatory-labeling) |
| `______________________________________________________` | `_______________` | `___________________________` |


### Labeling Automation

| AIP Add-in capability |Built-in labeling | Resources |
|:-----|:-----|:-----|
| Default Labeling:<br>- New and edited items | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide#what-label-policies-can-do) |
| Default Labeling:<br>- Separate setting for email | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#outlook-specific-options-for-default-label-and-mandatory-labeling) |
| Automatic or recommended labeling:<br>- Label files and emails based on detecting sensitive information types | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/apply-sensitivity-label-automatically?view=o365-worldwide) |
| Automatic or recommended labeling:<br>- Label emails from the highest sensitivity of their attachment | 🔷 In Development | [➡️ AIP Add-in Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#for-email-messages-with-attachments-apply-a-label-that-matches-the-highest-classification-of-those-attachments) |
| Default Labeling:<br>- Apply default sublabel instead of parent | 🟨 In Planning | [➡️ AIP Add-in Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#specify-a-default-sublabel-for-a-parent-label) |
| `______________________________________________________` | `_______________` | `___________________________` |


### Encryption as an outcome for labeling

| AIP Add-in capability |Built-in labeling | Resources |
|:-----|:-----|:-----|
| Admin-defined permissions | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/encryption-sensitivity-labels?view=o365-worldwide#assign-permissions-now) |
| User-defined permissions:<br>- Restrict access to users and groups | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/encryption-sensitivity-labels?view=o365-worldwide#let-users-assign-permissions) |
| User-defined permissions:<br>- Do Not Forward for emails | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/azure/information-protection/configure-usage-rights#do-not-forward-option-for-emails) |
| User-defined permissions: Restrict access to domain names | ⭐ In Preview | [📅 Microsoft 365 Roadmap 98131](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=98131)<br>[👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/encryption-sensitivity-labels?view=o365-worldwide#support-for-organization-wide-custom-permissions) |
| S/MIME for emails | ⭐ In Preview | [📅 Microsoft 365 Roadmap 100062](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100062)<br>[👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#configure-a-label-to-apply-smime-protection-in-outlook) |
| Double Key Encryption | 🟨 In Planning | [➡️ AIP Add-In Reference](https://learn.microsoft.com/en-us/microsoft-365/compliance/double-key-encryption-overview?view=o365-worldwide#can-i-use-double-key-encryption-with-microsoft-office-built-in-sensitivity-labeling) |
| Document Tracking & Revocation for Compliance Admins | 🟨 In Planning | [➡️ AIP Add-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/track-and-revoke-admin) |
| Document Revocation for End-Users | 🟨 In Planning | [➡️ AIP Add-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/revoke-access-user#revoke-access-from-microsoft-office-apps) |
| `______________________________________________________` | `_______________` | `___________________________` |

### Collaboration with labeled content

| AIP Add-in capability |Built-in labeling | Resources |
|:-----|:-----|:-----|
| Multi-user editing of encrypted files | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-coauthoring) |
| Block/warn/justify before sending emails | 🔷 In Development | [➡️ AIP Add-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) |
| `______________________________________________________` | `_______________` | `___________________________` |

### Content Marking

| AIP Add-in capability |Built-in labeling | Resources |
|:-----|:-----|:-----|
| Headers, footers, watermark | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide#what-sensitivity-labels-can-do) |
| Dynamic markings | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#dynamic-markings-with-variables) |
| Per app visual marking | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#setting-different-visual-markings-for-word-excel-powerpoint-and-outlook) |
| `______________________________________________________` | `_______________` | `___________________________` |

### Reporting and Auditing

| AIP Add-in capability |Built-in labeling | Resources |
|:-----|:-----|:-----|
| Labeling actions (e.g. FileSensitivityLabelApplied) | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance?view=o365-worldwide#sensitivity-label-activities) |
| Policy matches  | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance?view=o365-worldwide#sensitivity-label-activities) |
| Protection properties (e.g. ProtectionOwner, ProtectionType) | 🔷 In Development | [📅 Microsoft 365 Roadmap 98135](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=98135) |
| `______________________________________________________` | `_______________` | `___________________________` |


### Integrations with other labeling solutions

| AIP Add-in capability |Built-in labeling | Resources |
|:-----|:-----|:-----|
| Label by custom properties | 🟣 AIP PowerShell | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#migrate-labels-from-secure-islands-and-other-labeling-solutions) |
| Remove external markings | 🟣 AIP PowerShell | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#remove-headers-and-footers-from-other-labeling-solutions) |
| `______________________________________________________` | `_______________` | `_____________________________` |

## Azure Information Protection Add-In Advanced Settings

### Label Advanced Settings

| AIP Add-in capability |Built-in labeling | Resources |
|:-----|:-----|:-----|
| `color`                     | ⭐ In Preview | [📅 Microsoft 365 Roadmap 93217](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=93217)<br>[👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#label-colors) |
| `SMimeEncrypt`              | ⭐ In Preview | [📅 Microsoft 365 Roadmap 100158](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100158)<br>[👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#configure-a-label-to-apply-smime-protection-in-outlook) |
| `SMimeSign`                 | ⭐ In Preview | [📅 Microsoft 365 Roadmap 100158](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100158)<br>[👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#configure-a-label-to-apply-smime-protection-in-outlook) |
| `DefaultSubLabelId`         | 🟨 In Planning | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#specify-a-default-sublabel-for-a-parent-label) |
| `labelByCustomProperties`   | 🟣 AIP PowerShell | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#migrate-labels-from-secure-islands-and-other-labeling-solutions) |
| `customPropertiesByLabel`  | 🟣 AIP PowerShell | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#apply-a-custom-property-when-a-label-is-applied) |
| `______________________________________________________` | `_______________` | `___________________________` |


### Label Policy Advanced Settings

| AIP Add-in capability |Built-in labeling | Resources |
|:-----|:-----|:-----|
| `DisableMandatoryInOutlook`                                     | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#outlook-specific-options-for-default-label-and-mandatory-labeling) |
| `EnableAudit`                                                   | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#auditing-labeling-activities) |
| `LogMatchedContent`                                             | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#auditing-labeling-activities) |
| `OutlookDefaultLabel`                                           | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#outlook-specific-options-for-default-label-and-mandatory-labeling) |
| `OutlookRecommendationEnabled`                                  | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/apply-sensitivity-label-automatically?view=o365-worldwide#how-to-configure-auto-labeling-for-office-apps) |
| `ReportAnIssueLink`                                             | ✅ Supported | [👮 Compliance Admin Support](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide#what-label-policies-can-do) |
| `AttachmentAction`                                              | 🔷 In Development | [📅 Microsoft 365 Roadmap 100158](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100158)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#for-email-messages-with-attachments-apply-a-label-that-matches-the-highest-classification-of-those-attachments) |
| `AttachmentActionTip`                                           | 🔷 In Development | [📅 Microsoft 365 Roadmap 100158](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100158)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#for-email-messages-with-attachments-apply-a-label-that-matches-the-highest-classification-of-those-attachments) |
| `OutlookBlockTrustedDomains`                                    | 🔷 In Development | [📅 Microsoft 365 Roadmap 100157](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100157)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) |
| `OutlookBlockUntrustedCollaborationLabel`                       | 🔷 In Development | [📅 Microsoft 365 Roadmap 100157](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100157)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) |
| `OutlookCollaborationRule`                                      | 🔷 In Development | [📅 Microsoft 365 Roadmap 100157](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100157)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#customize-outlook-popup-messages) |
| `OutlookGetEmailAddressesTimeOutMSProperty`                     | 🔷 In Development | [📅 Microsoft 365 Roadmap 100157](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100157)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#expand-outlook-distribution-lists-when-searching-for-email-recipients) |
| `OutlookJustifyTrustedDomains`                                  | 🔷 In Development | [📅 Microsoft 365 Roadmap 100157](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100157)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) |
| `OutlookJustifyUntrustedCollaborationLabel`                     | 🔷 In Development | [📅 Microsoft 365 Roadmap 100157](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100157)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) |
| `OutlookOverrideUnlabeledCollaborationExtensions`               | 🔷 In Development | [📅 Microsoft 365 Roadmap 100157](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100157)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) |
| `OutlookUnlabeledCollaborationActionOverrideMailBodyBehavior`   | 🔷 In Development | [📅 Microsoft 365 Roadmap 100157](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100157)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) |
| `OutlookWarnTrustedDomains`                                     | 🔷 In Development | [📅 Microsoft 365 Roadmap 100157](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100157)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) |
| `OutlookWarnUntrustedCollaborationLabel`                        | 🔷 In Development | [📅 Microsoft 365 Roadmap 100157](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=100157)<br>[➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#implement-pop-up-messages-in-outlook-that-warn-justify-or-block-emails-being-sent) |
| `EnableRevokeGuiSupport`                                        | 🟨 In Planning | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#turn-off-the-revoke-option-for-end-users-in-office-apps) |
| `EnableTrackAndRevoke`                                          | 🟨 In Planning | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#turn-off-document-tracking-features) |
| `PostponeMandatoryBeforeSave`                                   | 🟨 In Planning | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#remove-not-now-for-documents-when-you-use-mandatory-labeling) |
| `HideBarByDefault`                                              | ⬛ Not Needed[^1] | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#display-the-information-protection-bar-in-office-apps) |
| `JustificationTextForUserText`                                  | ⬛ Not Needed[^2] | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#customize-justification-prompt-texts-for-modified-labels) |
| `OfficeContentExtractionTimeout`                                | ⬛ Not Needed[^3] | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#configure-the-autolabeling-timeout-on-office-files) |
| `OutlookSkipSmimeOnReadingPaneEnabled`                          | ⬛ Not Needed[^3] | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#prevent-outlook-performance-issues-with-smime-emails) |
| `RunPolicyInBackground`                                         | ⬛ Not Needed[^3] | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#turn-on-classification-to-run-continuously-in-the-background) |
| `PowerPointRemoveAllShapesByShapeName`                          | 🟣 AIP PowerShell | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#remove-all-shapes-of-a-specific-shape-name) |
| `PowerPointShapeNameToRemove`                                   | 🟣 AIP PowerShell | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#avoid-removing-shapes-from-powerpoint-that-contain-specified-text-and-are-not-headers--footers) |
| `RemoveExternalContentMarkingInApp`                             | 🟣 AIP PowerShell | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#remove-headers-and-footers-from-other-labeling-solutions) |
| `RemoveExternalMarkingFromCustomLayouts`                        | 🟣 AIP PowerShell | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#extend-external-marking-removal-to-custom-layouts) |
| `EnableLabelByMailHeader`                                       | ⚫ Not Planned | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#migrate-labels-from-secure-islands-and-other-labeling-solutions) |
| `EnableLabelBySharePointProperties`                             | ⚫ Not Planned | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#migrate-labels-from-secure-islands-and-other-labeling-solutions) |
| `EnableOutlookDistributionListExpansion`                        | ⚫ Not Planned | [➡️ AIP Addin-In Reference](https://learn.microsoft.com/en-us/azure/information-protection/rms-client/clientv2-admin-guide-customizations#expand-outlook-distribution-lists-when-searching-for-email-recipients) |
| `______________________________________________________` | `_______________` | `___________________________` |


[^1]: `HideBarByDefault` is not needed with built-in labeling because the sensitivity bar is always visible without being obtrusive to end-users.
[^2]: `JustificationTextForUserText` is not needed as a standalone advanced setting. Built-in labeling provides all users with a warning about adding sensitive content when providing a justification for downgrading a label.
[^3]: `OfficeContentExtractionTimeout`, `OfficeContentExtractionTimeout`, `OutlookSkipSmimeOnReadingPaneEnabled`, and `RunPolicyInBackground` are all settings that are only needed for the AIP Add-in because of its performance limitations. The performance issues that these settings try to avoid do not affect Office apps when built-in labeling is enabled
