---
layout: dag
title: AeD/Audit DAG
intro: Discover and Respond
---

*Last updated: 05/11/2021*

How can [Advanced eDiscovery](#aed-intro) and [Advanced Audit](#audit-intro) support your organization in responding to legal, regulatory, and compliance obligations? It starts with discovering the data that is relevant without the need to export this data out of Microsoft 365. The ability to natively search for data in Teams, Yammer, SharePoint Online, OneDrive for Business, Exchange Online leveraging conversations reconstruction, along with support other file types using 3rd party connectors, enhances your collection prowess.

[Advanced eDiscovery](#aed-intro) allows you to manage the workflows in solution reducing the amount of data intelligently through the use of ML mapping unique and share data resources of custodians, and reporting or using analytics prior to data collection before your review. 

[Advanced Audit](#audit-intro) supports your organizations requirements in assessing the scope of compromise during a data breach or to give you an efficient way to go back to historical data without holding large volumes of data. Using forensic investigations and responding to legal requests leverages the audit logs to define the scope of a data breach and determine the length of an investigation.

## Topics in this DAG:
* [Your Deployment Plan](#your-deployment-plan)

### Advanced eDiscovery
* [Advanced eDiscovery](#aed-intro)
* [Best Practices](#aed-bp)
* [Workflows](#workflows)
    - [Basic Workflow](#basic-workflow)
    - [Advanced Workflow](#advanced-workflow)
    - [Next Steps Workflow](#next-steps-workflow)
* [Case Management](#case-management)
* [Source Location Management](#source-location-management)
* [Processing](#processing)
* [Preservation](#preservation)
    - [Hold Notifications](#hold-notifications)
* [Collection](#collection)
* [Analysis](#analysis)
    - [Analyze](#analyze)
    - [Themes](#themes)
    - [Attorney-Client Privledge](#attorney-client-privledge)
    - [Relevance](#relavance)
* [Review](#review)
    - [Review set](#review-set)
    - [Custodian Audit Activity](#custodian-audit-activity)
* [Production](#production)
* [Advanced eDiscovery Considerations](#advanced-ediscovery-considerations)
* [Advanced eDiscovery Helpful Resources](#advanced-ediscovery-helpful-resources)
* [One compliance story with Microsoft 365 Advanced eDiscovery](#one-compliance-story-with-microsoft-365-advanced-ediscovery)

### Advanced Audit
* [Advanced Audit](#audit-intro)
* [Best Practices](#audit-bp)
* [Considerations](#audit-considerations)
* [Helpful Resources](#audit-hr)

### Appendix
* [Appendix - Additional Resources](#aed-audit-appendix)
    - [Advanced eDiscovery License Requirements](#advanced-ediscovery-license-requirements)
    - [Advanced Audit License Requirements](#advanced-ediscovery-license-requirements)

## Your Deployment Plan

The objective is to create a deployment plan that follows the progression of crawl-walk-run methodology while highlighting the user and administrator experience at each stage. Your focus should be on the end user result and the security controls you achieve with each implemented stage. Solutions or tools covered in this guide for deployment consideration are:

* [Compliance Manager](cm)

* [Microsoft Compliance Configuration Analyzer (MCCA)](mcca)

* [Advanced eDiscovery](#aed-intro)

* [Advanced Audit](#audit-intro)

The DAG is not inclusive of all requirements or architectures needed for successful implementation of Microsoft 365’ but rather a focus on security and compliance as it relates to solutions included as part of Microsoft information Protection & Compliance licenses.

See [Microsoft 365 productivity illustrations](https://docs.microsoft.com/en-us/microsoft-365/solutions/productivity-illustrations?view=o365-worldwide) for guidance on implementation of all M365 capabilities with focus on cross technologies.

**Crawl Stage** - The first stage is about starting to evaluate where your organization is today regarding the information security and compliance with your goal of defining a strategic direction for your organization. Using this strategy to foster adoption of a solution by gathering the requirements of supporting systems, impact on end users, and skillset needed for each role owner. The crawl phase describes steps you should do at the beginning of any deployment, whether your requirements are basic or advanced. It includes steps for product education, defining requirements, and evaluation or testing.

**Walk Stage** - The second stage builds the foundation for a successful, scalable, and sustainable deployment. In this phase, you plan the details of your implementation and to build the solution. You may also run a pilot or a proof of concept with a selected group of users or locations.

**Run Stage** - The last stage is about optimizing the solution for Microsoft 365. In this phase you will set up an automated scalable approach for each solution. 
Following the above approach will lead to successful adoption and deployment of each solution while providing workflows that respond to needs of investigations in an efficient, repeatable, and defensible manner.

# Advanced eDiscovery {#aed-intro}

The Advanced eDiscovery solution provides customers with the ability to identify, preserve, collect, process, analyze, review and product content that's responsive to your organization's internal and external investigations. Discovering and managing data is challenging. To help solve these challenges, we provide customers with tools that enable them to do more in-place eDiscovery in Microsoft 365, thereby reducing risks associated with either creating multiple copies or exporting content outside of your security and compliance boundaries. Using Advanced eDiscovery, you can reduce the content in-place and only export matter relevant content. 

## Best Practices {#aed-bp}

To help frame the Advanced eDiscovery solution, it is important to note that our capabilities align with the eDiscovery Reference Model (EDRM) workflow as shown in figure 1.

![Figure 1: Microsoft eDiscovery solutions aligned with eDiscovery Reference Model (EDRM)](images\aed-fig1.png)

Within Advanced eDiscovery, we have enhanced identification, preservation, and collection from core eDiscovery with things like custodian management and advanced indexing. On top of this, to further cull and reduce data intelligently, in Advanced eDiscovery, provides capabilities to process, review and analyze your data so that what you export is minimized. See figure 2 below for a suggested linear workflow.

### Workflows

![Figure 2: Linear Advanced eDiscovery Workflow](images\aed-fig2.png)

In the suggested workflows below you have the ability to hit the ground running in implementing Advanced eDiscovery in your tenant.

### Basic Workflow

* [Create a case](#case-management) in Advanced eDiscovery.
* Identify your custodial and non-custodial source locations and [add to case](#source-location-management) for advanced indexing. 
* [Create a search](#collection) on identified source locations
* Add your results to a Review Set 
* Further [reduce content](#review) in your review set using the Analytics to find near duplicates and thread messages
* [Export](#production) out of AeD 

### Advanced Workflow

* [Create a case](#case-management) in Advanced eDiscovery.
* Identify your custodial and non-custodial source locations and [add to case](#source-location-management) for advanced indexing. 
* [Remediate](#processing) any processing errors
* [Create and send legal hold notifications](#hold-notifications) to custodians
* [Create and run a search](#collection) on identified source locations
* Add your results to a review set. Select the [options](#collection) to include modern attachments as well as contextual conversation review. 
* Further reduce using [Analyze](#analyze) to group together near duplicates and email threads, and identify content that is [potentially privileged](#attorney-client-privledge). 
* [Review](#review-set) the content within your review set for responsiveness using tags. 
* Annotate and Redact documents
* [Export](#production) out only case relevant content 

### Next Steps Workflow

* Set up [attorney-client privilege](#attorney-client-privledge)	
* [Custodian Audit Activity](#custodian-audit-activity)
* [Themes](#themes)

## Case Management

When navigating to the compliance center, you will see an overview of all cases in Advanced eDiscovery. Think of a case as the container for your legal matter. The case will include all searches, holds, hold notifications, reviews, and exports. Note that the name of your case cannot be changed later, careful thought should be used in creating a naming convention that allows all in your organization to follow and understand. If connecting to a matter management tool, please ensure that you use the same naming convention. 

When creating a new case, you have the opportunity to adjust your analytics settings, enable OCR, adjust your settings for Themes, configure Ignore text, and add any additional members to the case. 

* As mentioned below in considerations, the similarity threshold is set to 65% by default. This means that when running the analytics job, the application will group together items that are within 65% similar to another document. You can enhance it if you need.

* The Themes functionality analyzes documents with text in a review set to parse out common clusters or themes that appear across all the documents in the review set. Consider selecting Adjust Maximum Number Of Themes Dynamically to ensure that you can still take advantage of the feature even if there are not enough documents to create the desired number of themes. 

* There are situations where certain text will diminish the quality of analytics, such as lengthy disclaimers that get added to email messages regardless of the content of the email. If you know of text that should be ignored, you can exclude it from analytics by specifying the text string and the analytics functionality (Near-duplicates, Email threading, Themes, and Relevance) that the text should be excluded for. Using regular expressions (RegEx) as ignored text is also supported.

* OCR processing will be run on image files when sources are added to a case during the advanced indexing job. This means that text in image files that matches the search criteria will be returned in a collection search.

## Source Location Management

A user is so much more than their mailbox and their OneDrive site. They are able to collaborate in Teams, Yammer and Sharepoint. They use [third party](https://docs.microsoft.com/en-us/microsoft-365/compliance/archiving-third-party-data?view=o365-worldwide) tools like Bloomberg, Facebook and more. When using Advanced eDiscovery, you can associate other data locations to a custodian beyond their mailbox and OneDrive site alone. 

Once your legal team has identified a custodian, you can use the Data Sources tab in Advanced eDiscovery to manage the following:

* User mailbox

* User OneDrive site

* Any Teams that they are currently a member of

* Any Yammer networks (in native mode)

* Sharepoint sites a custodian may have accessed or contributed to 

Custodians and source locations can be added on-by-one in the user interface using the picker or they can be added in bulk using the Import Custodian feature. If your legal team has given you a list of custodians, consider using the [custodian template](https://scc.azureedge.net/ediscovery/static/resources/ImportCustodian.csv) to import your custodial locations. For tips on how to populate the .csv, please follow our guidance found [here](https://docs.microsoft.com/en-us/microsoft-365/compliance/bulk-add-custodians?view=o365-worldwide#custodian-csv-file). 

The Data Sources tab within an Advanced eDiscovery case contains a list of all custodians that have been added to the case. After you add custodians to a case, details about each custodian are automatically collected from Azure Active Directory and are viewable in Advanced eDiscovery.

You may have additional data locations located within Microsoft 365 that do not need to be associated with a custodian. These locations are typically group mailboxes or SharePoint sites. You can still [add these non-custodial data sources](https://docs.microsoft.com/en-us/microsoft-365/compliance/non-custodial-data-sources?view=o365-worldwide) to your case in order to take advantage of the advanced indexing, search, preservation, analytics and review. 

Not all documents that you need to analyze in Advanced eDiscovery are located within Microsoft 365. You can also upload items that are not located in Microsoft 365 later in the workflow directly into a review set. This would be content like on-premises exchange data or local files. Keep in mind that custodians must be added to the case before you can upload and associate non-Microsoft 365 data to them. Non-Microsoft 365 data must be a file type that is supported by Advanced eDiscovery. For more information, see [Supported file types in Advanced eDiscovery](https://docs.microsoft.com/en-us/microsoft-365/compliance/supported-filetypes-ediscovery20?view=o365-worldwide).

## Processing

Once a source location has been added to a case, any content that is partially indexed will be processed. Content can be partially indexed for a number of reasons including the existence of images, unsupported file types or when indexing file size limits are encountered. All items (including the content and metadata) are reindexed so that all data in the review set is fully searchable during the review of the case data. Reindexing the data results in thorough and fast searches when you search the data in the review set during the case investigation.

After the indexing job is complete, you can see a report of the effectiveness of the job. The graph will give you the number of items that were added to the hybrid index where Advanced eDiscovery stores the reprocessed content. You will also have the opportunity to [remediate any errors](https://docs.microsoft.com/en-us/microsoft-365/compliance/processing-data-for-case?view=o365-worldwide) including decryption of content that was encrypted using third party encryption tools. 

## Preservation

Using the Advanced eDiscovery hold capabilities, you can place a hold on custodial data including their collaborative data sources. When you place content locations on hold, content is held until you release the custodian, remove a specific data location, or delete the hold policy entirely.

Custodian hold policies are managed when adding locations as a source in your case. When adding a custodial data source, you will have the opportunity to decide whether you would like the locations placed on hold. 

As mentioned in the Helpful Resources section below, Channel conversations that are part of a Microsoft Teams channel are stored in the mailbox that is associated with the Team. Similarly, files that team members share in a channel are stored on the team's SharePoint site. Therefore, you have to place the Microsoft Team mailbox and SharePoint site on hold to retain conversations and files in a channel. Conversations that are part of the Chat list in Microsoft Teams are stored in the mailbox of the users who participate in the chat. Files that a user shares in Chat conversations are stored in the OneDrive for Business site of the user who shares the file. Therefore, you have to place the individual user mailboxes and OneDrive for Business sites on hold to retain conversations and files in the Chat list.

If you the need to place a Microsoft 365 Group or Microsoft Team on hold for a specific custodian, consider mapping the group site and group mailbox to the custodian. If the Microsoft 365 Group or Microsoft Team is not attributable to a single custodian, consider adding the source to a non-custodial hold. 

### Hold Notifications

Once a custodian is added to a case in Advanced eDiscovery, your legal team can create and customize their legal hold notification workflow. The custodian communications tool lets legal teams configure the following notices and workflows:

* Issuance notice: A legal hold notice is issued (or initiated) by a notification from the legal department to custodians who may have relevant information about the case matter. This notice instructs the custodians to preserve any information that may be needed for discovery.

* Re-Issuance notice: During a case, custodians may be required to preserve additional content (or less content) than was previously requested. For this scenario, you can update the existing hold notice and re-issue it to custodians.

* Release notice: Once a matter is resolved and the custodian is no longer subject to a preservation requirement, the custodian can be released from the case. Additionally, you can notify the custodian that they are no longer required to preserve content and provide instructions about how to resume their normal work activity with regard to their data.

* Reminders and escalations: In some instances, just issuing a notice is not enough to satisfy legal discovery requirements. With each notification, legal teams can schedule a set of reminder and escalation workflows to automatically follow up with unresponsive custodians.
    
    - Reminders: After a legal hold notice has been issued or re-issued to a set of custodians, an organization can set up reminders to alert unresponsive custodians.
    
    - Escalations: In some cases, if a custodian remains unresponsive even after a set of reminders over a period of time, the legal team can set up an escalation workflow to notify unresponsive custodians and their manager.

After you've defined the contents of the hold notice, you can set up the workflows around [sending and managing the notification process](https://docs.microsoft.com/en-us/microsoft-365/compliance/create-hold-notification?view=o365-worldwide). Notifications are email messages that are sent to notify and follow up with custodians. Every custodian added to the communication will receive the same notification. To set up and send a hold notice, you must include Issuance, Re-Issuance, and Release notifications.

## Collection

Using Searches in Advanced eDiscovery, you can collect case data from your Microsoft 365 data source locations. This includes the source content that was previously processed in the above step or any additional content source locations. When creating a search, you will define the source location as well as your query. Consider reducing the amount of data you collect by using the [available query conditions](https://docs.microsoft.com/en-us/microsoft-365/compliance/keyword-queries-and-search-conditions?view=o365-worldwide). 

Once your search is complete, you will need to add the results to a review set. This job copies the data from its source location to a static Azure Blob storage container so that you can review the content from within your data boundaries. Upon initiating this job, you will need to name your review set and decide which additional settings are required for this specific review:

* Include All Document Versions From SharePoint: This setting will ingest all versions of the item from SharePoint or OneDrive. Only select this if there is a specific requirement to review all versions of a specific item. 

* [Contextual conversation review](https://docs.microsoft.com/en-us/microsoft-365/compliance/conversation-review-sets?view=o365-worldwide): Teams chats and conversations are stored as individual messages in the associated user or group mailbox. When selecting the option to include contextual conversation review, the Advanced eDiscovery solution will thread the messages together into a conversation format to provide full context. 

* Enable Retrieval For Modern Attachments: With modern attachments, you can check a box to auto collect all cloud attachments to your users Teams, Yammer and Exchange conversations. This is familiar to your current process for reviewing regular attachments as families or email sets. If there are downstream processes that rely on these relationships, we ensure that we are able to preserve these relationships in the load file

## Analysis

Using the analytics and machine learning capabilities in Advanced eDiscovery, you can reduce the amount of data to review. 

### Analyze

The first step you will take after your search results are added to your review set will be to run the [analytics job](https://docs.microsoft.com/en-us/microsoft-365/compliance/analyzing-data-in-review-set?view=o365-worldwide#analytics-report).  Analyze allows for the identification and grouping of exact and near-duplicate files. It also identifies and organizes emails into hierarchically structured groups of [email Threads](https://docs.microsoft.com/en-us/microsoft-365/compliance/email-threading-in-advanced-ediscovery?view=o365-worldwide), based on the progressive inclusiveness of the emails. Sets of [near duplicates (ND)](https://docs.microsoft.com/en-us/microsoft-365/compliance/near-duplicate-detection-in-advanced-ediscovery?view=o365-worldwide) documents are grouped together in an ND Set. For a document to join an ND Set, there must be at least one document in the ND Set with a level of resemblance exceeding the similarity. 

### Themes

Themes is a content-analytics application that identifies themes and thematic relationships across file collections. The application to identify interdependencies between themes allows users to browse associatively across the collection, navigating intuitively from theme to related theme. By generating meaningful labels for each thematic group, Themes provides an immediate snapshot of a file collection. In early case assessment and investigations, Themes enables litigators and analysts to intuitively acquire an informed and rapid overview of the data set. 

Keep in mind that increasing the “Number of themes” can affect the ability of a theme to generalize. The higher the number of themes, the more granular they are. For example, if a set of 50 themes produces themes such as “Basketball, Spurs, Clippers, Lakers”, a set of 300 themes may include separate themes such as “Spurs”, “Clippers”, “Lakers”. If the user had no awareness of the theme “Basketball” and uses this feature for Early Case Assessment (ECA), seeing the theme “Basketball” could be useful. If the clustering is too granular (too many themes), the user may never see the word “Basketball” and may not know that Spurs and Clippers are good Basketball themes to review rather than items that go on boots and are used for hair. 

### Attorney-Client Privledge

When [attorney-client privilege detection](https://docs.microsoft.com/en-us/microsoft-365/compliance/attorney-privilege-detection?view=o365-worldwide) is enabled, all documents in a review set will be processed by the attorney-client privilege detection model when you analyze the data in the review set. The model uses machine learning to determine the likelihood that a document contains content that is legal in nature. When setting up attorney-client privilege detection, you will need to submit a list of attorneys for your organization. The model will compare the participants of the document with the attorney list to determine if any attorneys are participants.

### Relevance

The relevance module identifies and ranks files by relevance, which assists with early case assessment, document culling and review. Once the trained sample of files are reviewed and tagged by a human expert as Relevant or Not Relevant, the model will rank the relevance of all files in your case. There will be more information on the Relevance module in next version of this document. 

## Review

The review portion of the eDiscovery process can be the most time consuming and costly step. Using Advanced eDiscovery, you can cull the data in order to only produce the relevant data. A review set is simply a static set of documents that you can analyze, query, tag, and export. 

### Review set

Advanced eDiscovery allows you to further query and filter data within a review set so that you can focus on a subset of documents. You can build a query by using a combination of keywords, properties, and conditions in the Keywords condition. You can also group conditions as a block (called a condition group) to build a more complex query. For a list and description of metadata properties that you can search, see [Document metadata fields in Advanced eDiscovery](https://docs.microsoft.com/en-us/microsoft-365/compliance/document-metadata-fields-in-advanced-ediscovery?view=o365-worldwide).

Once you are ready to review the case data, Advanced eDiscovery displays content via several viewers each with different purposes. The various viewers can be used by clicking on any document within a review set. Above the content viewing pane, you will be able to view metadata for each document within your review set. 

* The Native viewer displays the richest view of a document. It supports hundreds of file types and is meant to display the truest to native experience possible. 

* The Text viewer provides a view of the extracted text of a file. It ignores any embedded images and formatting but is very effective if you are trying to understand the content quickly. 

* The Annotate view provides features that allow users to apply markup on a document. When reviewing documents, you can annotate and redact documents to hide confidential information. You can preserve these markings during the export process.

During review, you may want to further [tag documents](https://docs.microsoft.com/en-us/microsoft-365/compliance/tagging-documents?view=o365-worldwide) based on criteria like responsive vs non-responsive. Tags are customizable to meet the needs of your review process. You can also use the annotation tool to annotate and redact content in documents. Content with redactions and annotations will be exported in PDF form. 

### Custodian Audit Activity

Need to find if a user viewed a specific document or purged an item from their mailbox? Advanced eDiscovery is now integrated with the existing audit log search tool in the M365 compliance center. Using this embedded experience, you can use the Advanced eDiscovery custodian management tool to facilitate your investigation by easily accessing and searching the activity for custodians within your case.

Audit has access to a broad and rich set of information around user activities across 30 Microsoft services send user and admin activity to Audit.

This can help answer questions during a legal investigation like:

* What SharePoint files did this custodian view or share? 

* Did the custodian read this message? 

While we cover Advanced Audit in more depth below, there is great benefit in understanding how a custodian interacts with data in the context of a legal investigation. 

## Production

Once your review is complete, you can export content from your Advanced eDiscovery case. You will need to consider where the data goes after exported out of Microsoft 365 to determine the export options that fit your needs. 

Currently, you can export files out in two formats:

* Loose files and PSTs (email is added to PSTs when possible) - Files are exported in a format that resembles the original directory structure seen by users in their native applications. For more information, see the [Loose files and PST export structure](https://docs.microsoft.com/en-us/microsoft-365/compliance/export-documents-from-review-set?view=o365-worldwide#loose-files-and-pst-export-structure) section.

* Native files within the condensed directory structure - Files are exported in their native format along with a load file containing mapping and metadata for each file.

Consider whether you require conversations to be exported as Conversation Files. These messages will be threaded together and exported in PDF format. 

Once export is complete, you will need to use AzCopy to download the results. 

While if you implement all the recommendations above you are set for a successful deployment of AeD, the process to implement is equally important. We highly recommend a “Crawl-Walk-Run” approach, in which the technology is introduced in stages, focusing on steps that allow you to learn the end-to-end process with minimal disruptions. It will also help you identify early potential conflicts or compatibility issues between different tools so you can address them before they have significant impact. 

## Advanced eDiscovery Considerations

* The M365 compliance center provides two out-of-box role groups, eDiscovery Manager and eDiscovery Administrator, that include the required roles to complete eDiscovery tasks. An eDiscovery Manager will only have access to cases that they create or are assigned to. An eDiscovery Administrator can access all eDiscovery cases. You can create and define custom role groups in order to manage a subset of eDiscovery tasks. [Assign eDiscovery permissions in the Security & Compliance Center - Microsoft 365 Compliance](https://docs.microsoft.com/en-us/microsoft-365/compliance/assign-ediscovery-permissions?view=o365-worldwide)

* Consider using [Compliance Boundaries](https://docs.microsoft.com/en-us/microsoft-365/compliance/set-up-compliance-boundaries?view=o365-worldwide) to control the content locations (such as mailboxes, OneDrive locations or SharePoint sites) that your eDiscovery Manager is able to search. They can also be used to control access to eDiscovery cases used to manage the legal, HR or other investigations within your organization. The need for compliance boundaries is often necessary for multi-national corporations that have to respect geographical boarders and regulations and for governments, which are often divided into different agencies. 

* The analytics similarity threshold is set to 65% by default. When creating your case, discuss the expected similarity threshold with your legal team to ensure the value is correct. This setting cannot be changed once Analytics are run on the case data.

* When applying a hold to a custodian, an in-place hold is placed on their mailbox. This differs from a Litigation Hold in that it can be query based. There is also no limit to the number of in-place holds that can be applied to a mailbox or site. The holds within Advanced eDiscovery should be used for legal preservation and **not for overall governance in your organization**. If you require additional governance policies, please use the Microsoft 365 Retention policies. 

* When attorney-client privilege detection is enabled, all documents in a review set will be processed by the attorney-client privilege detection model when you analyze the data in the review set. The model uses machine leaning to determine the likelihood that the content is legal in nature. It will also compare the participants of the document against the pre-submitted list of attorneys for your organization. 

* To leverage the export option to produce the redacted PDFs instead of files in their native format, you must first use the action to convert all redacted files to PDF within your review set

* When uploading non-Microsoft 365 data into your review set, all custodians that you will be associating the data with still require the appropriate license. 

* Microsoft 365 eDiscovery tools now incorporate decryption of encrypted files that are attached to email messages and sent in Exchange Online. Additionally, encrypted documents stored in SharePoint Online and OneDrive for Business are decrypted in Advanced eDiscovery. You can review and query the decrypted file in the review set. For more information, see [Decryption in Microsoft 365 eDiscovery tools](https://docs.microsoft.com/en-us/microsoft-365/compliance/ediscovery-decryption?view=o365-worldwide).

* Advanced eDiscovery supports double-byte character set languages (these include Simplified Chinese, Traditional Chinese, Japanese, and Korean, which are collectively known as CJK languages) when querying the data within a review set, tagging the data within a review set and when analyzing the data. At the current time, we do not support OCR of CJK characters from image files. Query based holds and the relevance module do not support CJK languages.

* The goal of the APIs is to reduce some of the risk with repetitive processes that can be error prone. At the current time, four out of the eight eDiscovery APIs are available in Beta. The APIs are set up to deliver on 2 scenarios. Automating common processes and task by taking jobs that are repeatable and creating an application. Consider things like kicking off an email once the review set creation job is complete or automatically searching all Teams that a custodian is currently a member of. Integration with existing systems, whether they be custom or a common industry tool. 

## Advanced eDiscovery Helpful Resources

* Understanding how and what types of content is stored in a mailbox is key to a successful eDiscovery posture. An exchange mailbox stores so much more than just email messages. Your calendar items, tasks, Skype messages, Teams messages, Voicemails, Forms, Sway, To-Do, Yammer conversations and so much more are stored in either user or group mailboxes. 

* An understanding of where content is stored in Sharepoint based on the type of hold can be key during an investigation. Consider reading this [blog](https://techcommunity.microsoft.com/t5/microsoft-security-and/lifecycle-of-an-item-in-sharepoint-where-does-it-go/ba-p/1751228) that covers the lifecycle of an item in Sharepoint. 

* Teams 1:1 and 1:N chats are stored in the user mailbox. Teams conversations are stored in the Team Group mailbox. 

* Items that are uploaded to chats are stored in the user OneDrive location. Items that are uploaded to conversations are stored in the Team Sharepoint site. 

* eDiscovery of messages and files in [private channels](https://docs.microsoft.com/en-us/microsoftteams/private-channels) works differently than in standard channels. To learn more, see [eDiscovery of private channels](https://docs.microsoft.com/en-us/microsoftteams/ediscovery-investigation#ediscovery-of-private-channels).

* Teams chat content that is associated with a guest user is stored in a cloud-based storage location and can be searched for using eDiscovery. This includes searching for content in 1:1 and 1:N chat conversations in which a guest user is a participant with other users in your organization. You can also search for private channel messages in which a guest user is a participant and search for content in guest:guest chat conversations where the only participants are guest users.

* You can add inactive mailboxes, Microsoft Teams, Yammer Groups, Office 365 Groups, and distribution groups to the list of mailboxes to search. Dynamic distribution groups are not supported. If you add Microsoft Teams, Yammer Groups, or Office 365 Groups, the group or team mailbox is searched; the mailboxes of the group members are not searched.

* Cloud links or modern attachments are items attached to messages in either Teams or Exchange. Cloud links differ from legacy attachments in that a copy of the item is not stored along with the message. Cloud attachments are a pointer to the location (in either OneDrive or Sharepoint) that the item is stored. 

* Contextual conversation review enables you to review a single message that matches your query within the context of the conversation. 

* At the current time, 4/8 of the [eDiscovery APIs in Microsoft Graph](https://docs.microsoft.com/en-us/graph/api/resources/ediscoveryapioverview?view=graph-rest-beta) are available in beta. The APIs can be used to automate or customize your workflow to reduce redundant tasks. For instance, you can create a PowerBI Dashboard that will give you real time case statistics or custodian reports. 

## One compliance story with Microsoft 365 Advanced eDiscovery

* [Insider risk management](ir) is a compliance solution in Microsoft 365 that helps minimize internal risks by enabling you to detect, investigate, and act on malicious and inadvertent activities in your organization. Insider risk policies allow you to define the types of risks to identify and detect in your organization, including acting on cases and escalating cases to Microsoft Advanced eDiscovery if needed. The content identified for escalation from IRM is automatically added to a review set in a case within Advanced eDiscovery. For the IRM or CC admin to have visibility to the case in Advanced eDiscovery, it is essential for them to be a member of the eDiscovery Manager role group in the Security and Compliance center. 

* [Communication compliance](cc) is an insider risk solution in Microsoft 365 that helps minimize communication risks by helping you detect, capture, and act on inappropriate messages in your organization. Should you need to further investigate messages identified by your communication compliance policy, you can use the Escalate for Investigation control to create a new Advanced eDiscovery case. You will provide a name and notes for the new case, and user who sent the message matching the policy is automatically assigned as the case custodian. The content identified for escalation from CC is automatically added to a review set within a case in Advanced eDiscovery. For CC admin to have visibility to the case in Advanced eDiscovery, it is essential for them to be a member of the eDiscovery Manager role group in the Security and Compliance center. 

* Having a strong [information governance](mig) and [records management](rm) posture ensures that content that needs to be retained is retained in-place and content that does not need to be retained is deleted. The downstream effects of a strong information governance and records management posture should be considered for your eDiscovery strategy. Less data means less risk and lower litigation costs. 

* Microsoft eDiscovery tools support items encrypted with Microsoft encryption technologies. These technologies include Office Message Encryption, Azure Rights Management, and [Microsoft Information Protection](mig) (specifically sensitivity labels). If a file that is encrypted with a Microsoft encryption technology is attached to an email message or located on a SharePoint or OneDrive account, those encrypted items are decrypted when the search results are prepared for preview, added to a review set in Advanced eDiscovery, and exported. This allows eDiscovery managers to view the content of encrypted email attachments and site documents when previewing search results, and review them after they have been added to a review set in Advanced eDiscovery.

# Advanced Audit {#audit-intro}

Advanced Audit aims to expand on the capabilities of the Microsoft 365 unified auditing capabilities by offering additional features.

* The retention of audit logs for Exchange, SharePoint, and Azure Active Directory activities for each licensed user can be extended from 90 days to 1 year, by default. 

* You can now create custom audit log retention policies for the services mentioned, allowing you to target records generated in the other services that are not covered by the default retention policy for periods up to 1 year.   

* There are additional Exchange Online and SharePoint Online events captured which are crucial for conducting forensic and compliance investigations. These new events help investigators understand if mail items were accessed through the mail sync and mail bind operation. This is extremely helpful to organizations with regulatory obligations that require breach notifications because now they have the ability to scope mail items that may have been compromised to reduce fines and penalties.

* Customers will receive additional bandwidth when accessing audit data through the Office 365 Management Activity API based on the new tenant-level bandwidth quota.

When you are conducting an investigation, it is not just about the content. You may need to investigate an individual user’s behavior and activity more deeply. These activities can be reviewed through the unified audit log. 

## Best Practices {#audit-bp}

While the advanced audit features are going to be key for many of our customers to address their compliance requirements, it is also important for all customers to start with a basic understanding of the unified audit log.

* Many organizations consider the information contained in the audit logs to be sensitive in nature. As such, formulate a plan and execute how you will manage access to view those logs. 

* That access is granted through the View-Only Audit Logs or Audit Logs roles in Exchange Online. These roles are managed in the Exchange admin center (EAC) and not in the M365 compliance center.

* Before you start, please check that the audit log is enabled by navigating to the Audit solution in the M365 compliance center. If you see a banner stating that auditing needs to be turned on, see [link](https://docs.microsoft.com/en-us/microsoft-365/compliance/turn-audit-log-search-on-or-off?view=o365-worldwide).

* Make sure your staff knows how to search and export the audit logs using the UI. There are reference links in the appendix to point them to resources that can help guide them.

* Follow the steps in the Helpful Resources section below to enable mailbox audit logging for all users.

Once you have the basics down, it is time to plan how you will implement the advanced audit features.

* If your organization has decided not to license all your users with one of the E5 licenses that enable the advanced features, you will need to identify the population that warrants the additional oversight and longer-term retention of their activities to assign them E5 licenses.

* Decide if the default advanced retention policy works for you. By default, the audit records for Exchange, SharePoint, and Azure Active Directory are kept for one year. You may require that those records be kept for a shorter or longer period of time.

* Decide on the length of your audit retention for the activities in the other services not covered by the default policy mentioned above. Create a retention policy to retain your data for the appropriate amount of time. You can use an audit log retention policy to modify the default retention policy, or keep other data for longer than 90 days, up to 1 year. Additionally, an Audit add-on license for 10-year retention can allow records to be stored for long-term retention.

* Conduct forensic and compliance investigations by providing access to crucial events such as when mail items were accessed, when mail items were replied to and forwarded, and when and what a user searched for in Exchange Online and SharePoint Online.

* If you have a need to export data or integrate with a Security Information Event Management (SIEM) solution, you will need staff that are familiar with APIs or work with a partner.

* If you have a need to automate some of your audit search activities or need to perform very large searches, we recommend having resources that are comfortable using PowerShell cmdlets in Exchange Online and M365 compliance center.

## Considerations {#audit-considerations}

* To manage audit log retention policies, you will need to be assigned the Organization Configuration role in the M365 compliance center.

* You can have a maximum of 50 audit log retention policies in your organization.

* To benefit from user-level Advanced Audit capabilities, a user needs to be assigned an E5 license.

* The higher bandwidth access to the API does not change the standard documented latencies for activities.

* When performing a search in the Audit solution that spans a timeframe longer than 90 days, you will receive a warning indicating that only users that have the proper licensing applied will return activities beyond the 90 day window.

* While not directly related to Advanced Audit, it is important to note that audit logging for Power BI isn't enabled by default. To search for Power BI activities in the audit log, you must enable auditing in the Power BI admin portal.

## Helpful Resources {#audit-hr}

* A list of the additional events included with Advanced Audit as well as an explanation of each can be found [here](https://docs.microsoft.com/en-us/microsoft-365/compliance/advanced-audit?view=o365-worldwide#access-to-crucial-events-for-investigations).

* For details on creating and managing your audit retention policies, please use this [link](https://docs.microsoft.com/en-us/microsoft-365/compliance/audit-log-retention-policies?view=o365-worldwide).

* For more information on the high-bandwidth access to the Office 365 Management Activity API you can read about it [here](https://docs.microsoft.com/en-us/microsoft-365/compliance/advanced-audit?view=o365-worldwide#high-bandwidth-access-to-the-office-365-management-activity-api).

* For instructions on how to enable Power BI logs see the "Audit logs" section in [Power BI admin portal](https://docs.microsoft.com/en-us/power-bi/service-admin-portal#audit-logs).

* This [article](https://docs.microsoft.com/en-us/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance?view=o365-worldwide#requirements-to-search-the-audit-log) includes a table indicating the time it takes for corresponding records to be returned for the different services in Office 365.

* Follow the steps outlined [here](https://docs.microsoft.com/en-us/microsoft-365/compliance/enable-mailbox-auditing?view=o365-worldwide#more-information) to enable mailbox audit logging for user without an E5 licenses.

# Appendix - Additional Resources {#aed-audit-appendix}

This section contains links to the information regarding license requirements and provides additional links to additional information related to Advanced eDiscovery.

## Advanced eDiscovery License Requirements

Before you get started with Advanced eDiscovery, you should confirm your Microsoft 365 subscriptions and any add-ons. To access and use Advanced eDiscovery, your organization must have one of the following subscriptions or add-ons:

* Microsoft 365 E5 subscription 
* Microsoft 365 E3 subscription + the Microsoft 365 E5 Compliance add-on
* Microsoft 365 E3 subscription + the Microsoft 365 E5 eDiscovery & Audit add-on
* Microsoft 365 A5 subscription 
* Microsoft 365 A3 subscription + the Microsoft 365 A5 Compliance add-on
* Microsoft 365 A3 subscription + the Microsoft 365 A5 Discovery & Audit add-on
* Microsoft 365 G5 subscription 
* Microsoft 365 G5 subscription + the Microsoft 365 G5 Compliance add-on
* Microsoft 365 G5 subscription + the Microsoft 365 G5 Discovery & Audit add-on
* Office 365 Enterprise E5 subscription 
* Office 365 Enterprise E3 subscription + the Office 365 Advanced Compliance add-on (no longer available for new subscriptions)

## Advanced Audit License Requirements

Before you get started with Advanced Audit, you should confirm your Microsoft 365 subscription and any add-ons. To access and use Advanced Audit, your organization must have one of the following subscriptions or add-ons:

* Microsoft 365 E5 subscription 
* Microsoft 365 E3 subscription + the Microsoft 365 E5 Compliance add-on
* Microsoft 365 E3 subscription + the Microsoft 365 E5 eDiscovery & Audit add-on
* Microsoft 365 A5 subscription 
* Microsoft 365 A3 subscription + the Microsoft 365 A5 Compliance add-on
* Microsoft 365 A3 subscription + the Microsoft 365 A5 Discovery & Audit add-on
* Microsoft 365 G5 subscription 
* Microsoft 365 G5 subscription + the Microsoft 365 G5 Compliance add-on
* Microsoft 365 G5 subscription + the Microsoft 365 G5 Discovery & Audit add-on
* Office 365 Enterprise E5 subscription 
* Office 365 Enterprise E3 subscription + the Office 365 Advanced Compliance add-on (no longer available for new subscriptions)
* 
