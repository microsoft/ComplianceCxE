# A Deep Dive into the Recoverable Items Folder

Exchange is frequently a common target for retention policies, eDiscovery holds, litigation holds, etc.  But how does a hold or retention affect the content within a mailbox?  This is what we hope to clarify with this article.

## Prerequisite Knowledge

Before we start, we do recommend that you review the following Microsoft Docs articles which discuss retention in Microsoft 365 prior to continuing:

* [Learn about retention policies and retention labels](https://docs.microsoft.com/en-us/microsoft-365/compliance/retention?view=o365-worldwide)

* [Learn about retention for Exchange](https://docs.microsoft.com/en-us/microsoft-365/compliance/retention-policies-exchange?view=o365-worldwide)

* [Create retention labels and apply them in apps](https://docs.microsoft.com/en-us/microsoft-365/compliance/create-apply-retention-labels?view=o365-worldwide)

* [Automatically apply a retention label to retain or delete content](https://docs.microsoft.com/en-us/microsoft-365/compliance/apply-retention-labels-automatically?view=o365-worldwide)

Additionally, it should be noted that Exchange has a feature commonly referred to as Retention policies, which are more accurately named [Messaging records management (MRM) policies](https://docs.microsoft.com/en-us/Exchange/policy-and-compliance/mrm/mrm?view=exchserver-2019#:~:text=MRM%20strategies%201%20Remove%20all%20messages%20after%20a,...%204%20Retain%20messages%20for%20eDiscovery%20purposes.%20).  This article does **not** discuss MRM policies – and MRM policies are **not** the same thing as M365 retention policies or labels.  

Finally, there are many different types of holds that can be placed on an object in Exchange – In-place/eDiscovery hold, Litigation hold and retention policy/label.  Each have their own benefits and use cases.  The purpose of this article is to discuss how Exchange handles deleted items when affected by retention or a hold, so will not discuss the difference between each of these types of holds.

!!! info
    We plan to release future articles describing the differences between MRM policies and M365 retention policies as well as the different types of holds that can affect an Exchange mailbox and when to use each.  We will update the links here once released.

Now that we’ve covered those prerequisites – let's deep dive into the Recoverable Items (RI) folder!

## Introduction

The Exchange mailbox can be a mysterious place.  Many people see only the face of their mailbox - that is what's available to them in an email client such as Outlook.  However there's a whole world of information and structure behind the scenes that only Exchange administrators typically get to witness. Join me as we peel away the layers of the mailbox to understand how it is affected by Microsoft 365 Information Governance and eDiscovery solutions.

## The Recoverable Items Folder

Within the mailbox, two logical containers exist.  The first, in which most of the user-interactive and visible data is stored, is called the ‘IPM Subtree’ (or Top of Information Store).  This is exactly as it sounds –it is – to the user - the top level folder of the information store within the mailbox and houses familiar user-visible folders such as ‘Inbox’, ‘Contacts’, ‘Calendar’, ‘Deleted Items’, etc.  

The second container is called the ‘non-IPM subtree’, and contains operational and configuration data related to the mailbox.  Within this non-IPM subtree, and thus virtually invisible to the user (as a folder), is a location called the **Recoverable Items (RI) folder** which houses it’s own set of subfolders used for various purposes including storing audit logs, calendar logging information and, of course, storing deleted items for recovery and/or retention.

## Deletions

When items are deleted from their original location, they are generally (unless deleted with SHIFT + DELETE) first sent to the ‘Deleted Items’ folder within the IPM Subtree.  This is a sort of visible safety net that provides users another chance to restore something if it was accidentally deleted.  However, if permanently deleted, or if deleted from the Deleted Items folder (otherwise known as a [soft delete](https://docs.microsoft.com/en-us/exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder#terminology)), it is then sent to the **Deletions** subfolder within the Recoverable Items folder, which is another less visible safety net.  Items in this folder [can be restored or purged by the user in Outlook or Outlook on the Web (OWA)](https://support.microsoft.com/en-us/office/recover-deleted-items-or-email-in-outlook-web-app-c3d8fc15-eeef-4f1c-81df-e27964b7edd4) for as long as the mailbox is [configured to keep deleted items for](https://docs.microsoft.com/en-us/exchange/recipients-in-exchange-online/manage-user-mailboxes/change-deleted-item-retention).  This configuration is referred to as the **RetainDeletedItemsFor** value which, in Exchange Online, is 14 days by default, expandable to up to 30 days. 

The following diagram gives a very high level view of the *user visible* deletion process:

<figure>
    <img src="../../img/ri-1.png"/> 
    <figcaption>Figure 1: Diagram of deleting mailbox content without any holds or retention applied.</figcaption>
</figure>

To put it simply, the deletions subfolder within the RI is a built-in feature to help ensure managing data in Exchange is somewhat accident-proof for the user.  However, as easy as it is to restore items from the RI, users can also purge (or [hard delete](https://docs.microsoft.com/en-us/exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder#terminology)) items.  So what happens in the case of malicious intent?  How can an organization be sure to retain items related to litigation, regulation or company policy?  That’s where holds and retention are necessary – but since the Deletions subfolder in the RI is visible to the user, we needed another place to store items affected by retention and holds.

## When Retention or Holds Apply

Believe it or not, the ability to retain Exchange items in the event of litigation – or for regulatory/other reasons, is not a concept created for Exchange Online in Microsoft 365.  Exchange 2010 first introduced a feature called [Litigation hold (lithold)](https://docs.microsoft.com/en-us/Exchange/policy-and-compliance/holds/litigation-holds?view=exchserver-2019), which, although now considered legacy, is still used today within Exchange Online.  Prior to Exchange 2010, if an item was soft deleted by a user, it was stored in what was called the "dumpster", which would then purge items as they reached the database's configured retention time.  The major limitation with the dumpster concept, however, was that if a mailbox was moved – all the items in the dumpster were lost.  This, of course, is bad news for items that need to be retained for litigation or regulatory reasons – especially as moving mailboxes becomes a much more common process between on-premises servers and up to the cloud.

With the introduction of lithold in Exchange 2010, we needed a way to ensure items could be retained even if the mailbox is moved to another database, and, of course, be searchable for eDiscovery purposes.  This is how the recoverable items folder was born – the dumpster was converted to a location within the mailbox, which has its own quota and stays with the mailbox wherever it is moved.  

Within the RI, other than the deletions folder, there are [several other subfolders](https://docs.microsoft.com/en-us/exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder#recoverable-items-folder) all with different purposes – many created to meet the needs of regulatory retention and litigation.  Unlike the deletions folder, however, the other folders are completely invisible to the end user (via a client).  Let’s walk through each of them.

!!! note
    For the purpose of this article, we are only going to discuss the subfolders that are used by M365 retention/hold features for Exchange mailboxes.

### Purges

The **Purges** folder should be considered the beginning of a deleted item's retention journey within a mailbox.  *All items hard deleted from the Deletions folder end up in the Purges folder*.  Depending on the type of hold - if there is a hold at all - the items may then move to other folders.  

#### Single Item Recovery

The first scenario we wanted to cover here was if there was no retention or holds applied to the mailbox.  But wait - didn't we discuss that above? Yes - however there's some extra *non user visible* things happening in the background.

Exchange Online has a feature called [single item recovery](https://docs.microsoft.com/en-us/exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder#single-item-recovery), which is enabled on every mailbox by default.  The purpose of this feature is to allow administrators a short amount of time to restore purged items without needing to rely on a backup of the mailbox. It will retain any items that have been hard deleted within the Purges folder for as long as the **RetainDeletedItemsFor** value is configured, *based on the last modified time of the item*.  

!!! note
    The last modified time of the item is updated **any time a modification is made** including moving from the Deletions folder to the Purges folder.

!!! example
    *A user does not have any retention policy or hold applied to their mailbox and the RetainDeletedItemsFor value is the default of 14 days.* 
    
    The user deletes an email message from the inbox then soft deletes it from the Deleted items folder.  7 days later, the user goes into the Deletions folder within Outlook or OWA and hard deletes the message.  At this point, single item recovery will move the message to the Purges folder, where it will remain for 14 days before finally being purged.

<figure>
    <img src="../../img/ri-2.png"/> 
    <figcaption>Figure 2: Diagram of deleting mailbox content with single item recovery enabled.</figcaption>
</figure>

#### Absolute hold vs Query-based hold

Now, before we move on to the other scenarios, it's important to distinguish that there are two concepts of holds within the mailbox:  **Query-based** and **Absolute**.  

##### Absolute hold

Absolute holds are basically defined as when litigation hold or [delay hold](https://docs.microsoft.com/en-us/microsoft-365/compliance/identify-a-hold-on-an-exchange-online-mailbox?view=o365-worldwide#managing-mailboxes-on-delay-hold) is enabled without a [LitigationHoldDuration](https://docs.microsoft.com/en-us/Exchange/policy-and-compliance/holds/litigation-holds?view=exchserver-2019#use-the-exchange-management-shell-to-place-a-mailbox-on-litigation-hold-and-preserve-items-for-a-specified-duration) defined.  This was our first type of hold with Exchange on-premises, whereas the entire mailbox was required to be kept forever.  Because there was no further evaluation needed of what to keep and what not to keep, items simply remained within the Purges folder until lithold was disabled.

!!! important
    Because they always apply to the entire mailbox, **absolute holds always take precedence over any other type of hold**.

<figure>
    <img src="../../img/ri-3.png"/> 
    <figcaption>Figure 3: Diagram of deleting mailbox content when litigation hold is enabled.</figcaption>
</figure>

##### Query-based hold

Eventually, however, simply applying a hold to the entire mailbox was not flexible enough. We needed to add the capability to allow conditions.  This includes:

* Litigation Hold with the LitigationHoldDuration parameter configured

* Microsoft 365 Retention Policies with any duration of retention

* Microsoft 365 Retention Labels with any duration of retention

* eDiscovery holds with any duration of retention

Because of the many possible conditions, we needed a way to evaluate content to identify if it met the conditions specified within the hold.  Since we already use the Purges folder for absolute holds, we needed to create a new subfolder - **DiscoveryHolds**.

### DiscoveryHolds

As mentioned above, the DiscoveryHolds folder is used to evaluate and then keep items that match a query-based hold.  However, as also mentioned above, the *purges folder is always used first*.

This is where the **RetainDeletedItemsFor** configuration is again important.  As the items reach their configured time within the Purges folder, if a query based hold is applied to the mailbox (with no absolute hold specified), the items will then be moved to the DiscoveryHolds folder.

!!! example
    *A user has an org-wide Microsoft 365 retention policy applied to their mailbox, Litigation hold is disabled and the RetainDeletedItemsFor value is the default of 14 days.*  
    
    The user deletes an email from their inbox, then soft deletes the message from the deleted items folder.  After 7 days, the user hard deletes the message from the Deletions folder.  The message is then stored within the Purges folder for 14 days before being moved to the DiscoveryHolds folder to remain until no longer subject to the applied retention policy.

<figure>
    <img src="../../img/ri-4.png"/> 
    <figcaption>Figure 4: Diagram of deleting mailbox content that has a Query-based hold applied.</figcaption>
</figure>

### Versions

Then finally – the **Versions** folder.  Consider that we've intentionally enabled some kind of retention policy or hold on a mailbox - meaning we need to make sure for either regulatory, legal or other reasons, that we don't delete anything affected by the hold.  

Now, consider - *what if an object is modified*?  We, of course, need to make sure that we keep all versions or instances of each item as it is modified.  That's what the Versions folder is for - to keep the original copy of the item as well as all versions *before* the modification is made.  This capability relies on an Exchange feature called [Copy-on-Write (COW) page protection](https://docs.microsoft.com/en-us/exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder#copy-on-write-page-protection-and-modified-items) which triggers a copy any time [certain properties](https://docs.microsoft.com/en-us/exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder#copy-on-write-page-protection-and-modified-items) of an Exchange object are modified.

!!! example
    *A user has an eDiscovery hold applied to their mailbox, Litigation hold is disabled and the RetainDeletedItemsFor value is the default of 14 days.*
    
    The user sends an email to their personal email address with an attachment. After sending, they go into their Sent items, and choose to remove the attachment.  Then they delete, soft delete and hard delete the sent message.

    When the user removes the attachment, Exchange will copy the original version of the message (with the attachment) to the Versions folder *before* removing the attachment.  When the user hard deletes the message, it will be retained in the Purges folder for 14 days, then moved to the DiscoveryHolds folder.  Both the original sent message and the deleted modified message will be discoverable via eDiscovery searches and both will be removed once the eDiscovery hold is removed.

<figure>
    <img src="../../img/ri-5.png"/> 
    <figcaption>Figure 5: Diagram modifying content that has a query-based hold enabled.</figcaption>
</figure>

## Quota

One of the benefits of the recoverable items folder is that it has a [quota separate from that of the user's mailbox](https://docs.microsoft.com/en-us/exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder#recoverable-items-mailbox-quotas).  *This is actually incredibly important*.  The recoverable items folder should be completely seamless to the user (in other words, they user should have no idea it exists) - if it shared the same quota as the mailbox, all kinds of potential issues could arise, such as preventing the user from sending/receiving email because they unintentionally deleted too many things that were subject to a hold.  

In Exchange Online, the following quota's exist:

| Location | Not on Hold | On Hold |
| --- | --- | --- |
| Mailbox | 100 GB  (E3/E5) | 100 GB (E3/E5) |
| Recoverable Items Folder | 30 GB | 100 GB| 

### Online Archive

While the recoverable items folder having a separate quota from the mailbox greatly reduces the chance of users being impacted by retention policies or holds, there is still a potential risk.  If, for some reason, the RI folder exceeds it's quota, users will no longer be able to delete items. To prevent this, it is highly recommended to use [Online Archiving](https://docs.microsoft.com/en-us/office365/servicedescriptions/exchange-online-archiving-service-description/exchange-online-archiving-service-description).

A [default MRM tag exists out of the box](https://docs.microsoft.com/en-us/microsoft-365/compliance/increase-the-recoverable-quota-for-mailboxes-on-hold?view=o365-worldwide) which, if Online Archiving is enabled, automatically moves items that are 14 days or older from the primary RI folder to the RI folder within the online archive.  This helps to ensure that the RI folder doesn't exceed it's quota as the online archive has it's [own RI folder](https://docs.microsoft.com/en-us/microsoft-365/compliance/increase-the-recoverable-quota-for-mailboxes-on-hold?view=o365-worldwide):

| Location | Not on Hold | On Hold |
| --- | --- | --- |
| Online Archive | 100 GB  (E3/E5) | 100 GB (E3/E5) |
| Recoverable Items Folder (Archive) | 30 GB | 100 GB | 

!!! note
    The [auto-expanding capabilities](https://docs.microsoft.com/en-us/microsoft-365/compliance/enable-unlimited-archiving?view=o365-worldwide) of the online archive [also apply to the recoverable items folder within the archive](https://techcommunity.microsoft.com/t5/exchange-team-blog/office-365-auto-expanding-archives-faq/ba-p/607784).

## Conclusion

We hope that you enjoyed this journey into the Exchange mailbox from a retention and hold perspective.  Please feel free to submit feedback or suggest edits using the links at the top of this article.

## Additional Resources

* [How to identify the type of hold placed on an Exchange Online mailbox](https://docs.microsoft.com/en-us/microsoft-365/compliance/identify-a-hold-on-an-exchange-online-mailbox?view=o365-worldwide)

* [How to clean up or delete items from the RI folder](https://docs.microsoft.com/en-us/exchange/security-and-compliance/recoverable-items-folder/clean-up-deleted-items)


---

**Brendon Lee** - *Compliance CxE*

*With contributions from:*

* *Randall Galloway*

* *Stefanie Bier*

* *David Santamaria*