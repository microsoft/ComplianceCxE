*Last updated: 05/10/2021*

What is information governance and why should you worry about governing your data?  The technical definition that you can find on the web is usually one that a records manager or compliance risk officer may read and say sure, but for some of us we still leave wanting a level 100 explanation. At a basic level, the goal is to balance the risk holding onto information presents with the value the information provides to the organization. You also need to consider which decisions are within your control as a company and which are driven by regulatory or industry requirements. It is important to remember that this is a strategy across all your information.  That strategy should define who has the authority to make information related decisions. These individuals will be heavily involved in your retention policy, label taxonomy and file plan discussions.  It also needs to account for how you will handle change management for your policies governing information as well as communication of your plan and training your users.  Your information governance strategy should also establish the “what”, the requirements or how long, before actions need to be taken to retain or delete information, the “how”, by the technologies that will be used. In our case, the retention polices, and labels deployed through [Microsoft Information Governance](#microsoft-information-governance) and [Records Management](#records-management). 

## Your Deployment Plan

The objective is to create a deployment plan that follows the progression of crawl-walk-run methodology while highlighting the user and administrator experience at each stage. Your focus should be on the end user result and the security controls you achieve with each implemented stage. Solutions or tools covered in this guide for deployment consideration are:

* [Data Loss Prevention (DLP)](../mip-dlp/#data-loss-prevention)
* [Compliance Manager](../cm/)
* [Microsoft Compliance Configuration Analyzer (MCCA)](../mcca/)
* Azure Information Protection (AIP) Scanner
* Microsoft Cloud App Security (MCAS)
* [Microsoft Information Protection (MIP)](../mip-dlp/#microsoft-information-protection)
* [Microsoft Information Governance (MIG) and Records Management (RM)](#overview)
* [Communication Compliance](../ir-cc/#communication-compliance)
* [Insider Risk Management](../ir-cc/#insider-risk-management)
* [Advanced eDiscovery](../aed-audit/#advanced-ediscovery)
* [Advanced Audit](../aed-audit/#advanced-audit)

The DAG is not inclusive of all requirements or architectures needed for successful implementation of Microsoft 365 but rather a focus on security and compliance as it relates to solutions included as part of Microsoft information Protection & Compliance licenses.

See [Microsoft 365 productivity illustrations](https://docs.microsoft.com/en-us/microsoft-365/solutions/productivity-illustrations?view=o365-worldwide) for guidance on implementation of all M365 capabilities with focus on cross technologies.

**Crawl Stage** - The first stage is about starting to evaluate where your organization is today regarding the information security and compliance with your goal of defining a strategic direction for your organization. Using this strategy to foster adoption of a solution by gathering the requirements of supporting systems, impact on end users, and skillset needed for each role owner. The crawl phase describes steps you should do at the beginning of any deployment, whether your requirements are basic or advanced. It includes steps for product education, defining requirements, and evaluation or testing.

**Walk Stage** - The second stage builds the foundation for a successful, scalable, and sustainable deployment. In this phase, you plan the details of your implementation and to build the solution. You may also run a pilot or a proof of concept with a selected group of users or locations.

**Run Stage** - The last stage is about optimizing the solution for Microsoft 365. In this phase you will set up an automated scalable approach for each solution. 

Following the above approach will lead to successful adoption and deployment of each solution while governing your data by deciding what to keep, what to delete, what is a regulatory requirement, and using a workflow to manage the lifecycle.

## Microsoft Information Governance and Records Management

Microsoft Information Governance (MIG) provides capabilities to manage the lifecycle of your content and govern your data for compliance or regulatory requirements. Records management (RM) manages high-value content for legal, business, or regulatory obligations, and adds advanced capabilities such as disposition review and file plans. Some organizations may have simple retention and deletion requirements were applying broad policies using the MIG features will meet your needs. Other organizations may have strict recordkeeping requirements including a formal file plan, disposition, or retention trigged by events which can be accomplished using the RM features.

### Best Practices

The information governance needs from one organization to the next can differ greatly. While one organization has one simple retention policy that emails must be kept for 3 years, another can exist in a highly regulated industry and therefore have multiple requirements they need to meet based on different types of data. The approach below aims to provide guidance on how to approach deployment of the features available through information governance and records management, whether you have those basic needs or the more complex capabilities we offer.

Let’s establish some of the preparation that goes into being ready to start the execution of deploying retention policies, labels, and using your file plan to manage your records.

Make sure that you understand the functions available in MIG and RM and what your requirements are so they may be aligned to drive the configuration during deployment. That should drive the plan whether it is a formal File Plan to be used in RM or simply a retention schedule that will categorize your information into retention and deletion periods. That plan will drive the number of labels you may need and their settings as well as the retention and publishing policies. Below are some questions to drive the conversation during this planning period.

* Will the built-in role groups covered in the [considerations section](#considerations) align to your access governance or will you need to create custom role groups? If granular control is needed you can use the [Security and Compliance center](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/permissions-in-the-security-and-compliance-center#roles-in-the-security--compliance-center) to create your custom role groups.

* Do you need to apply retention and deletion to broad buckets, such as all Teams chats and conversations or all Exchange email mailboxes? This is a good use case for retention policies. 

* Do you store documents that may have different retention requirements in the same location such as a document library in SharePoint? This is a good use case for retention labels because they can be applied at the item level.

* Do you require a [disposition](https://docs.microsoft.com/en-us/microsoft-365/compliance/disposition?view=o365-worldwide) review process at the end of the retention period? There is an option to require disposition of content when creating a label from the File Plan in RM.

* Do you need to trigger retention or deletion based on an event, such as the end of a fiscal year or employment end date or the end of a contract? When creating a label from the File Plan in RM you can choose one of the built-in [event types](https://docs.microsoft.com/en-us/microsoft-365/compliance/event-driven-retention?view=o365-worldwide) or choose to create your own.

* If you need to manage content as formal records or have even stricter requirements for immutability, look at the information about [declaring records with retention labels](https://docs.microsoft.com/en-us/microsoft-365/compliance/declare-records?view=o365-worldwide).

* Develop a solid test plan that defines what your scenarios and successful test outcomes will be. We recommend testing in a lower environment first to validate outcomes with shorter time periods for both the basic and more advanced configurations.

* Determine how long it will take to test all your scenarios and what approvals are needed and the timing of those to work backwards to set a deployment timeline and what your milestones will be. Such as deploying a simple retention policy to all of Exchange or having your file plan ready for import into Records Management.

Now that we have touched on the preparation for deployment, below we outline the deployment and configurations when creating retention policies, creating and publishing retention labels, as well as creating labels through the file plan in records management to require stricter controls and reviews.

### Retention Policies

Retention policies are best suited when targeting a location or container of information. Those locations can be one of the following in the list below, however Teams and Yammer locations need their own policies and cannot be combined with the other locations.

* Exchange email
* SharePoint site
* OneDrive accounts
* Microsoft 365 groups
* Skype for Business
* Exchange public folders
* Teams channel messages
* Teams chats
* Yammer community messages
* Yammer private messages

Creation and management of policies will require that you log into the [compliance center](https://compliance.microsoft.com/) with an account that has the necessary Retention Management permissions which we discussed in the considerations section earlier.

It is a good idea to start with the basic scenarios before moving on to the more advanced ones to gain a comfort level with the process and ensure you get the desired outcomes. In each example there are 3 consistent steps of the policy creation outlined below. With the common steps established we will focus how each example differs during the creation of the policy.

* You will need to give your policy a name and description that is meaningful for your organization. Note this name cannot be changed.

* You will need to choose if you want to retain content, delete it, or both and whether that should be based on created or modified date.

* The last step is to review your settings and create the policy. Once your policy is created after service completes the mechanisms policy engine in the various environments (Exchange Online, SharePoint Online, OneDrive, Yammer, Teams, etc..) it will take affect without any additional steps. Our experience is this completes in 7 days or sooner.

#### Start Simple

Deployment of a basic policy that sets the same retention settings to apply to the entire location(s).
This approach is very straightforward.

* After the steps to name your policy and set retention settings above, you will choose the locations you want this policy to apply to. A basic policy will usually target an entire location and does not have inclusions or exclusions set. You will ensure that the location is toggle On and set to All. Remember that Teams and Yammer cannot be combined with the other locations.

#### Next Steps

Next, we cover deploying a policy that has inclusions or exclusions based on a need to apply different retention periods to content in the same location types such as different mailbox users, or SharePoint sites as an example.

* Choose the locations you want this policy to apply to. In this scenario you will ensure the status of the location is toggled On and then use the links to select specific recipients, sites, etc. to include or exclude in this policy. You will be required to know and enter the full path for SharePoint or OneDrive locations. Refer to the [considerations section](#considerations) for policy limitations in this scenario.

#### Advanced

An advanced retention policy configuration is more suited for those that have a need to apply it based on what is in the content to target specific documents, such as sensitive information. 

* Choose to Use Advanced Retention Settings. You can now either apply to content based on sensitive information present in the item using one of the built-in or custom sensitive information types (SITs), or you can apply to content that contains specific words or phrases.

* The choice to use the advanced settings above is going to limit the locations that you have as options to Exchange, SharePoint, and OneDrive. It will also default the Exchange location to include All. This cannot be changed.

#### Retention, Record, and Regulatory labels and policies

When you have a need to retain and delete content at the item level, use a retention label. Retention labels also provide some other capabilities that retention policies do not.

* Retention labels travel with the content as it moves within your tenant.
* They allow you to start the retention based on when the item is labeled.
* You can start the retention based on when an event occurs.
* An item can be automatically labeled based on a trainable classifier.
* An item can be labeled automatically if it matches a keyword query you create.
* You can set a default label on SharePoint lists and libraries.
* A disposition review can be required before something is permanently deleted.
* Labels allow you to mark content as a record or regulatory record.

As you can see retention labels provide greater flexibility for when the retention period starts, what happens when the retention period ends, how that label is applied, and what can be done with the content once it has been labeled. These options allow for both a basic deployment strategy and a more advanced one. Many of the more advanced options also require the use of the File Plan feature in RM to create the labels. We will start with the label and policy creation from within the MIG solution, and then move to those that require using RM and the File Plan feature to create the more advanced labels and policies.

### Information Governance

Creating labels and policies in Information Governance will require that you log into the compliance center with an account that has the necessary Retention Management permissions which we discussed in the considerations section earlier. 

In each example below we will be referring to the same steps to create a label that applies the retention period based on when an item is labeled.

Label creation steps:
* You will give your label a name based on your taxonomy and enter descriptions for both admins and your users that is meaningful for your organization. Remember this name cannot be changed.

* Toggle the Retention on and then choose whether you want to retain content, delete it, or both. In this example unique to labels, we will choose to take those actions based on When The Content Is Labeled. You are free to choose when created or modified as well.

* Review your settings and create the label. The label will now need a policy to publish the label to be manually applied by users, or to automatically apply it to content.

When creating a policy to publish or apply the label, you should start with a simple approach and then add complexity. All policy creation has common steps to name the policy and review your settings. Each example will differ based on the locations we publish the label to or how that label is applied to content.

Policy name and review steps:

* Give the policy a name and description that is meaningful. Remember, this name cannot be changed.

* Review your settings and either click publish labels or auto-apply to save your settings depending on the scenario.

* It can take up to 1 day for labels to appear and only for those mailboxes that have 10MB of data or more as noted above in the considerations.

#### Start Simple

In the basic example we will be publishing our label to all users and locations for them to apply manually.

* This publishing policy is very straightforward. Simply choose the default to publish this policy to all locations in the Choose Locations page within the Publish to users and groups step.

#### Next Steps

You may also have a need to create a label that needs to be published to a specific set of users or locations due to a department’s unique requirements. When we create the policy to publish the label, we will be specifying inclusions or exclusions.

* In this scenario instead of all in the Choose Locations page, you will choose specific locations by ensuring the Status of the location is toggled On and then use the links to select specific recipients, sites, etc. to include or exclude in the policy. Refer to the [considerations](#considerations) section for policy limitations in this scenario.

During preparation you identify that you have a need to proactively address content that may have sensitive information in it. To avoid relying on your users to consistently label this content with a publish policy, you can choose to Auto-apply A Label instead based on SITs which are contained in the same list of templates as when you create a data loss prevention (DLP) policy. 

* Make sure Apply Label To Content That Contains Sensitive Info is selected and pick one of the built-in templates or choose custom to either specify individual (SITs) or your own custom SIT.

* The SITs will have default instance count and match accuracy settings. If you would like to view them to confirm or modify, you will need to use the Edit button.

* You can also choose whether you want this policy to apply to All locations or specific locations. Using specific inclusions or exclusions here will also have the same policy limitation considerations mentioned above.

#### Advanced

If your organization has a mature information architecture in SharePoint online, you may want to leverage that data to use the condition Apply Label To Content That Contains Specific Words Or Phrases, Or Properties.

* The query-based auto-apply policies use the same search index as eDiscovery content search which means you can use any of the pre-defined SharePoint online managed properties as your criteria which are documented in the [helpful resources](#helpful-resources) section.

* You may want to start with out of the box properties first such as filetype or modified by before targeting your custom properties that have been mapped to a managed property.

* Once you have your criteria take care to enter it into the Keyword Query Editor correctly as it will not tell you if your query has bad syntax or is invalid. We also recommend always including the (AND, OR) operators to ensure that your query is interpreted correctly if you are combing more than one condition.

During your planning for deployment of not only the MIG or RM solutions, but also Microsoft Information Protection (MIP) and Communications Compliance (CC), you may have decided that our trainable classifiers capability adds a lot of value based on your data estate. If that is the case, then you can create a policy with the condition Apply Label To Content That Matches A Trainable Classifier.

* You can find more information on trainable classifiers in the [creating one compliance story](../dag-resources/#one-compliance-story) section.

* Even if you have not built your own custom trainable classifier you can choose a built-in one from the list such as Source Code or Resumes.

* Trainable classifiers can label new and modified items and existing items from the last six months.

### Records Management

Some may consider the concept of records management intimidating. The thought of having to categorize all your data and get agreement from the business on how long each category of information needs to be retained or how soon it needs to go can be daunting. We believe that both those already well down the path of the records management journey and those just getting started can take advantage of the features we offer in our solution. 

Unlike the information governance examples above where the progression of basic to advanced configurations usually involve how the label is applied, in records management the real power is in the information the label can have and what happens when the label is applied. This next section will touch on those configuration examples by starting with using File plan tool and the options we have when creating a label.

When following the guidance below make sure that you log into the compliance center with an account that has the necessary Records Management permissions which we discussed in the considerations section earlier. 

#### Start Simple (File Plan)

During planning you should determine if you have an existing retention schedule. Even if you do not have an existing retention schedule or a file plan, you can start to build one by creating your labels from within File Plan. The creation of the label using File Plan is similar to the steps from Information Governance. However, using File Plan provides the ability to add descriptors to your label.

* Start by adding your descriptors to provide additional information about each label, such as the business department the label is for, or the provision or citation that drives the configuration settings of the label. As you build your labels out you will be able to export this list to a .csv file which will contain the settings as well as those descriptors.

* You can pick from a list of values or create your own. If you create your own make sure the spelling and format is correct as you will not be able to modify or remove it once you save your changes.

#### Next Steps (File Plan)

You can also use the File Plan import option or the Export mentioned above to create your labels from the .csv file. This could be an empty template before any labels are created, or after some initial labels have been created to provide examples. 

* This file can be used for planning and execution. 

* We find this is extremely helpful for customers who prefer to fill the template out and then create their labels in bulk to save time.

* This method can also be used to bulk-modify existing labels.

#### Advanced (File Plan)

Your organization may already have retention schedule in place which includes a formal file plan. If so, the File Plan import can be used to download a blank template to import that plan and create your labels.

* You will need to map your current file plan to the fields available in the template. Each field can only have 64 characters.

* There is a validation during the import and if there are errors it will provide the line and row numbers that are causing issues.

* Keep in mind this import will create the labels only and those labels will have no impact until you create a policy to publish or automatically apply those labels.

When creating your labels from File Plan you will notice there are some differences in the experiences as you step through each of the screens. While the retention settings are the same as in Information governance, the way they are presented may differ. All the examples below drive what settings are chosen from the Define Retention Settings screen.

* For label creation instructions please follow the steps [here](https://docs.microsoft.com/en-us/microsoft-365/compliance/create-apply-retention-labels?view=o365-worldwide).

#### Start Simple (Label Deployment)

We mentioned above with records management, the power is in the label, one example of that is the option to require disposition when creating your label. You may identify certain information that may have a similar duration of retention as other material, but you need someone to formally review those items before they are removed. This is where disposition comes into play. We are covering this under records management because that solution contains the Disposition tab where the reviewers will go to evaluate the content that has reached its retention end date. Disposition can be required by selecting Trigger A Disposition Review under the At The End Of The Retention Period section.

* When choosing this option, you will need to select the users that you want to perform the review of the content. We recommend selecting more than one user. Mail-enabled security groups are supported. Microsoft 365 groups are not. Specifying a user here will not add them to the Disposition Management role, which is the minimum permissions needed.

* Content in Exchange, SharePoint, OneDrive, and Microsoft 365 groups is only deleted after a reviewer chooses to permanently delete the content. There is no undo button in the disposition workflow once that selection is made. Disposition for Exchange content requires that the target mailbox has at least 10MB of data.

* A reviewer can only use the link in the location column to view the content if they have permissions to that location and the content.

* If you have a need for the owners of the content to participate in the disposition process you can export the list of items needing review to a .csv file.

#### Next Steps (Label Deployment)

Disposition of content is a common requirement when declaring an item as a record. If your organization has identified certain types of information that are considered a record, you can apply the additional protections by choosing Mark Items As A Record during label creation.

* When this option is selected and the label is applied to emails, users will not be able to edit or delete those emails.

* Versioning is still possible by unlocking a record. The previous version is still considered a record and cannot be modified or deleted.

* When content labeled as a record in a SharePoint site or OneDrive is unlocked, a special *Records* folder is created in the Preservation Hold Library (PHL).

* Site Collection Administrators can still remove a record label from an item. Take that into consideration when evaluating who has those rights on your SharePoint site collections.

* The removal of a label as well as the lock and unlocking of a record are all activities that you can search for and view in the Audit solution.

* If an item was marked as a record and required disposition you will be able to provide a proof of records deletion.

#### Advanced (Label Deployment)

A common scenario we see is that organizations have a need to consider certain artifacts a record, but only after a certain event occurs such as the end of a customer engagement. Other organizations do not necessarily have the record requirement but have a need to keep certain information for a specific amount of time only after an event, like when an employee leaves the company. This can be accomplished by selecting one of the built-in event types or creating your own under the *Start The Retention Period Based On* option.

* Using this approach does take some planning. It requires that the items that have this label applied have the AssetID (SharePoint and OneDrive) populated by the user when they apply the label, or in the case of Exchange, have a consistent set of Keywords present in the email.

* Your organization may have other unique properties that you already apply to the documents related to your event type. For example, you may have an engagement number or contract number required for these documents.  This can be used in place of the ComplianceAssetID property as long as it is entered in property:value pair format in the AssetID area when you create an event. Content search can be used to find the content that meets these criteria to validate which items will have their retention triggered.

* Because the labels are associated with event types, and the events you create are what trigger the retention, it is important to understand that the keywords and Asset ID values specified are what uniquely identify which set of labeled items the system should trigger the retention period on.

* It is important to understand that if you do not specify an asset ID or keywords for an event, all content with a retention label of that event type will have its retention period triggered by the event.

* If you plan to use labels that will trigger based on events, we highly recommend you consider automating this process. For more information on event types and how to automate this process please read [Start retention when an event occurs](https://docs.microsoft.com/en-us/microsoft-365/compliance/event-driven-retention?view=o365-worldwide).

There are certain regulations that require strict immutability when it come to the content. While our existing Record capabilities satisfy most of our customer’s needs, we did heard feedback from our highly regulated customers that we need to provide even stricter controls. In response, we have recently introduced a new option under Define Retention Settings when creating a label in Records Management to Mark Items As A Regulatory Record. The restrictions put in place once applied block any modification to the content.

* Careful thought and consideration need to go into determining if this is truly needed. Once applied the only actions that are allowed are read, copy, and move within container. Reference this [table](https://docs.microsoft.com/en-us/microsoft-365/compliance/records-management?view=o365-worldwide#compare-restrictions-for-what-actions-are-allowed-or-blocked) for a full breakdown.

* Once a regulatory record is applied to content, not even a global administrator, can remove the label.

* Because of these restrictions and irreversible actions, the option to Mark Items as a regulatory record is not available by default. [You will first have to run the commands outline in Declare records by using retention labels](https://docs.microsoft.com/en-us/microsoft-365/compliance/declare-records?view=o365-worldwide). Once available you will also receive a warning when selecting this option.

* A label that marks content as a regulatory record cannot be applied automatically to content. We also recommend a strong education campaign for those users you publish these labels to.

While if you implement all the recommendations above you are set for a successful deployment of MIG and RM, the process to implement is equally important. We highly recommend a “Crawl-Walk-Run” approach, in which the technology is introduced in stages, focusing on things that cause minimal disruption initially. 

You can also introduce these changes in waves across your organization, focusing on limited sets of end users first and expanding to broader audiences. This will allow you to deploy quickly without causing disruption, and help you get a baseline of user behavior before introducing tight restrictions. It will also help you identify early potential conflicts or compatibility issues between different tools so you can address them before they have significant impact. 

Now that we have covered the different basic to advanced deployment scenarios and best practices, take a minute to make sure you read the rest of this guide to understand how retention and records management integrate with the other compliance solutions and how they complement each other. We also provide you with some important considerations to keep in mind when it comes to your environment and how they may affect your deployment. There are some helpful resources as well that will point you to other articles, blog posts, or videos that provide important context or supplement the documentation for MIG and RM. 

### Considerations

* To manage retention policies and labels, you will need to be added to the Compliance Administrator role group or for more targeted permissions, a new or existing role group can be assigned the Retention Management role. You can also grant read-only rights through the View-Only Retention Management role which can be added to a new or existing role group.

* Those responsible for records management in the organization should be added to the Records Management role group or for a read-only role, add the View-Only Record Management role to a new or existing role group.

* Important, when creating retention policies and labels, ensure that you are confident in your naming taxonomy.  Once you create a policy or label it cannot be renamed.

* [Only one retention label](https://docs.microsoft.com/en-us/microsoft-365/compliance/retention?view=o365-worldwide#only-one-retention-label-at-a-time) can be applied to content at any given time. If an item already has a label applied, automated labeling policies will not replace the existing label on the item.

* When creating a retention label or policy, be aware there is not a test mode or simulation mode as there is when creating a new MIP sensitivity label.

* Retention labels will only be available for users in Outlook client and Outlook web if their mailboxes have at least 10MB of data in them.

* Retention policies do not support list items, if you have a need to apply retention to items within lists you must use retention labels.

* Retention policies with specific inclusions or exclusions are subject to [limits](https://docs.microsoft.com/en-us/microsoft-365/compliance/create-retention-policies?view=o365-worldwide#a-policy-with-specific-inclusions-or-exclusions) which you should be aware of.

* If you configure a retention policy with specific includes and then remove the last one, the configuration reverts to All for the location. Make sure this is the configuration that you intend before you save the policy.

* When considering applying retention or deletion policies to Teams channel messages, it is important to remember that private channel conversations are not included. Reactions to Teams messages are also not included.

* To retain content associated with a Team created from a Microsoft 365 group that is stored in the respective SharePoint site, a separate policy must also be applied to the related Microsoft 365 Group location.

* To retain email messages for Yammer you will also need a retention policy that applies to the Microsoft 365 groups location. You will also need a policy that targets the related SharePoint site or users OneDrive locations to retain the files shared in Yammer messages.

* When using retention policies for SharePoint sites, the settings do not apply to organization structures, system lists, or other items used to manage the system.

* Yammer items are retained and deleted for community messages and private messages but not reaction emoticons.

* Data Connectors can allow for the archival of third-party data which is stored in a users’ Exchange Online mailbox and can have retention and records management applied to that data. (more here)

### Helpful Resources

* This [list of retention policy and retention label capabilities](https://docs.microsoft.com/en-us/microsoft-365/compliance/retention?view=o365-worldwide#compare-capabilities-for-retention-policies-and-retention-labels) can help you determine whether to use a retention policy or retention label to meet your requirements.

* It is important to understand the [content that can be stored in an Exchange Online mailbox](https://docs.microsoft.com/en-us/microsoft-365/compliance/what-is-stored-in-exo-mailbox?view=o365-worldwide) and the impact a retention policy applied to a mailbox may have on that data.  It is also important to note that not all data will be preserved when a policy is applied at the mailbox level, such as Teams or Skype data. Those require their own policy specific to that workload.

* When content in an Exchange Online (EXO) mailbox is modified in some way and there is a retention policy targeting that mailbox or a label applied to the email, the original item is stored in a special location called the Recoverable Items folder for the mailbox. Where it is goes depends on the action taken and that is why we encourage you to have a good understanding of how the [Recoverable items folder in Exchange Online](https://docs.microsoft.com/en-us/exchange/security-and-compliance/recoverable-items-folder/recoverable-items-folder) works.

* This list of [Third-party data connectors](https://docs.microsoft.com/en-us/microsoft-365/compliance/archiving-third-party-data?view=o365-worldwide#third-party-data-connectors) provides a table which indicates which third-party data can have retention and records management applied to it.

* SharePoint Online also has a special location to store items subject to retention called the Preservation Hold Library. There are also a 1st stage and 2nd stage recycle bin that come into play. To learn more about what happens to an item that someone deletes or reaches the end of its retention or deletion period, read [Lifecycle of an item in SharePoint: Where does it go](https://techcommunity.microsoft.com/t5/microsoft-security-and/lifecycle-of-an-item-in-sharepoint-where-does-it-go/ba-p/1751228)?

* In the scenario where more than one retention policy and label may be applied to content, it is important to understand the [principles of retention](https://docs.microsoft.com/en-us/microsoft-365/compliance/retention?view=o365-worldwide#the-principles-of-retention-or-what-takes-precedence) to gain insight into the outcome.

* Read U[se retention labels to manage document lifecycles](https://docs.microsoft.com/en-us/microsoft-365/compliance/auto-apply-retention-labels-scenario?view=o365-worldwide) to understand how to leverage SharePoint information architecture to automatically apply retention labels to content.

* When targeting SharePoint locations for auto-apply labels, only the pre-defined managed properties are supported in the KQL query. See the list of [crawled and managed properties in SharePoint server](https://docs.microsoft.com/en-us/SharePoint/technical-reference/crawled-and-managed-properties-overview).

* Now that you can [Use OneDrive for Business and SharePoint for Teams meeting recordings](https://docs.microsoft.com/en-us/MicrosoftTeams/tmr-meeting-recording-change) we have added support for you to use our automatic labeling capabilities to apply retention periods or immutability to those files. Read our [online documentation](https://docs.microsoft.com/en-us/microsoft-365/compliance/apply-retention-labels-automatically?view=o365-worldwide#microsoft-teams-meeting-recordings) for instructions regarding those recordings.

* You can use the steps for [import retention labels into your file plan](https://docs.microsoft.com/en-us/microsoft-365/compliance/file-plan-manager?view=o365-worldwide#import-retention-labels-into-your-file-plan) to guide you on how to map your existing retention schedule to the template to import into our Records Management solution.

* For a deeper understanding of the new Regulatory Record label for records management you can check out this [video](https://techcommunity.microsoft.com/t5/video-hub/manage-regulatory-records-in-a-defensible-and-immutable-way-with/m-p/1688007).

* While this guide focuses on the administrator activities for deployment, it is important to also train your end users to drive adoption. Use [End User Training for Retention Labels in M365](../../enduser/retention/) as a good starting point.

