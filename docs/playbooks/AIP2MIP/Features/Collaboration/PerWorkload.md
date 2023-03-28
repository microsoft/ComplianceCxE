
# Label scoping to files only to hide all labels in Outlook Playbook

## Introduction

Some customers may only uses sensitivity labels for files and don't want labels for emails.  Admins can update all the existing labels and remove the email scope to achieve the same behavior as disabling the AIP UL add-in.  The benefits of scoping labels is that it works consistently across all platforms of Office apps (Win32, Web, Mac, iOS, and Android).  Scoping labels still work in conjunction with other features such as default labels, autolabeling, etc.  See the [admin guide](https://learn.microsoft.com/microsoft-365/compliance/sensitivity-labels-office-apps?view=o365-worldwide#scope-labels-to-just-files-or-emails)) for details.

## Admin configuration

If you are currently using the AIP UL add-in only for Word, Excel, PowerPoint, and not for Outlook, you can achieve the same results by scoping all your labels to file-only. The scoped labels are compatible between AIP UL add-in and Office built-in labeling allowing your organization to migrate seamlessly.

Converting all existing file & email labels into file-only labels would have the following effects:
•	Outlook on Windows will not display any labels in the app, including the sensitivity dropdown, or apply labels (manual / default / auto-labeling) because the Sensitivity dropdown will only show labels which have been scoped to “Emails” [== no labels].
•	Outlook on Windows will not inherit file only label from attachment to email
•	Word, Excel, and PowerPoint (WXP) will have no behavioral change because the Sensitivity dropdown will show labels which have been scoped to “Files” [== all labels].
•	Autolabeling in Office apps can apply file-only label in WXP
•	An email-only label cannot be applied in WXP
•	An auto-labeling policy with SharePoint/OneDrive location can apply labels with the “File” scope.


  **REMINDER: If you are testing this in a production environment, we highly recommend you perform this change doing non-business hours to minimize any disruption or impact to your business function.**


 	Changing the scope of an existing file+email label to a file-only or email-only label will not impact any existing labeled documents or mails. The label already applied to the file or email will be shown. 


The general instruction is to do the following:
1)	Update auto-labeling policies to remove any Exchange location.
2)	Explicitly set every label policy with no email default label.
3)	Uncheck the email scope of every parent and child label in the compliance center.
4)	Disable the AIP UL add-in to view Office built-in labels

### Compliance Center

#### Update auto-labeling policies

If you have any auto-labeling policy, remove the whole policy or the Exchange location.
1)	Login to the Microsoft Purview compliance portal.
2)	Go to the Information Protection page in the navigation panel.
3)	Go to Auto-labeling tab and click on a policy to edit or delete
![image](https://user-images.githubusercontent.com/49501412/228140070-be1eae02-a277-4249-93e4-0342012aae34.png)
4)	To delete a policy, click on confirm, or go to step 5 to edit policy
5)	To edit a policy, go remove the Exchange location, and then save the policy
![image](https://user-images.githubusercontent.com/49501412/228140195-e2c97cd3-51d6-4fc0-8c99-3caabdc5dfa2.png)

#### Update default email labels in label policies
Modify a label policy to remove or set the default label for email to *None*, do the following:
1)	Login to the Microsoft Purview compliance portal.
2)	Go to the Information Protection page in the navigation panel.
3)	Go to Label policies sub-page and click on a policy to edit
![image](https://user-images.githubusercontent.com/49501412/228141162-ebb591e4-b05e-460a-a5cd-8626c6feed5f.png)
4)	Go to Default settings for emails page, change the default label to “None” *and* uncheck “Require users to apply a label to their email”.
Then save policy.
![image](https://user-images.githubusercontent.com/49501412/228144561-dfb2e252-42cc-4278-adb9-3ea6d06058f8.png)
5)	Repeat step 1) and 2) for every policy in your organization 

#### Update label scope to files-only
Remove the email scope of every parent and child labels in the compliance center.
1)	Login to the Microsoft Purview compliance portal.
2)	Go to the Information Protection page in the navigation panel.
3)	Go to Labels sub-page and click on a label to edit a label scope
![image](https://user-images.githubusercontent.com/49501412/228144420-a2c180d4-95d4-4909-bb52-436c53877e89.png)
4)	Go to the “Define the scope for this label” page, and uncheck the Emails checkbox
![image](https://user-images.githubusercontent.com/49501412/228145076-4f18ce27-0e9d-403f-8d14-463247022088.png)
5)	Keep clicking next until you save the label to make the change to the label scope permanent. Note that you do not need to make any changes to auto-labeling for Office apps. Auto-labeling still works for Word, Excel, and PowerPoint even after you have removed the email scope in a label.
6)	Repeat step 1) to 3) for every label in your organization.
7)	To make the label available to a user, go to Label policy to create or update a policy to publish these updated labels to users. There is no change with the existing flow to publish labels.

#### Disable the AIP UL add-in to view Office built-in labels
To disable the AIP add-in, follow the instructions in the public docs here: [How to disable the AIP add-in to use built-in labeling for Office apps](https://learn.microsoft.com/microsoft-365/compliance/sensitivity-labels-aip?view=o365-worldwide#how-to-disable-the-aip-add-in-to-use-built-in-labeling-for-office-apps).

**NOTE: the document has guidance on how to enable the AIP add-in. To disable the AIP add-in, the value of the setting "Use the Azure Information Protection add-in for sensitivity labeling" should be set to 0.**

### PowerShell instructions (Advanced)

**REMINDER: You should not use the below PowerShell commands directly if you have any labels scoped with meeting, Groups & Sites, or Purview Assets. You need to modify the script appropriately.**

You can also create or update the label scope using the New-Label or Set-Label cmdlet in PowerShell using the “ContentType” parameter.
For updating an existing label, you can use
   ```powershell
     Set-Label -Identity <label ID/name> -ContentType "Email"
   ```
   
Scoping a workload to file-only or email-only will not impact the other scopes defined – like Schematized data assets or Groups & Sites. However, you might want to pay special attention to the interplay between file-only labels and label inheritance capabilities of SharePoint Sites.


PowerShell is also great for updating label policies at scale.  Here's some scripts to update all label policies with no default or mandatory labels for email.

First, you need to ensure label policies do not have any labels for default email or mandatory email label.

   ```powershell
    foreach ($policy in Get-LabelPolicy) { Set-LabelPolicy -Identity $policy.guid -AdvancedSettings @{OutlookDefaultLabel="None";DisableMandatoryInOutlook="True"} }
   ```

Then, assuming all the labels are file+email, the following will update every label to be file only.

   ```powershell
    foreach ($label in Get-Label) { Set-Label $label.guid -ContentType "File" }
   ```

If you encounter any issues with the above script, it’s likely that a label is in used by an auto-labeling policy in Exchange, SharePoint, and/or OneDrive.  You will need to remove all instances of the Exchange location in the policies.

## Testing
Once you have configured all your file-only labels, try the following:
1)	Open Outlook, see if any labels show up in the sensitivity drop down.
2)	Open up WXP,
-	see if all the file only label show ups and apply the label to a document.
-	see that any existing default label is applied to a unlabeled document.
-	Create a document so that a file only label is applied by an existing auto-labeling policy in the application, or [setup automatic labeling in Office apps](https://learn.microsoft.com/microsoft-365/compliance/apply-sensitivity-label-automatically?view=o365-worldwide#how-to-configure-auto-labeling-for-office-apps).
3)	In SharePoint, add a document so that a file only label is applied by an existing auto-labeling policy in SharePoint or OneDrive for Business, or [setup automatic labeling in Exchange and SharePoint](https://learn.microsoft.com/microsoft-365/compliance/apply-sensitivity-label-automatically?view=o365-worldwide#creating-an-auto-labeling-policy).
4)	Repeat step 2) if you use application such has PowerBI,
5)	Repeat step 3) if you use services such has MDCA.


