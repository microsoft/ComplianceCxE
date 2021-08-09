---
layout: home
title: Microsoft Communication Compliance - Playbook for Financial Services Industry

---

!!! Note "How to use this guide"
    Please use this guide as a starting point for monitoring and protecting your communication in Microsoft Communication Compliance. All links and references should be up to date, however, if you have a question about the correctness of any information in this document, please reach out to our [yammer group]( aka.ms/askmipteam ).

    All screenshots in this guide contain the proper configuration settings according to the best practices at the time of publication. Please ensure that your configurations mirror those used in this guide. Please refer to the Microsoft documentation online at docs for the latest updates

    Though the name of this document is shown as a play book, it can be equally considered a deployment guide. This document will be updated as and when new features are introduced to Microsoft Communication Compliance. 

    This document covers in detail various use cases that can be achieved using Communication Compliance.

## Introduction

Microsoft's Communication Compliance Playbook for the Financial Services Industry is intended to help Compliance Officers, and Auditors better understand their ability to manage current regulatory requirements regarding communication supervision and the controls needed to manage the risks associated thereof. This understanding can, in turn, help identify potential strategies and solutions designed to protect you, your firm, your personnel, and your clients. The Playbook can be used as a set of guiding principles and best practice use cases for Microsoft Communication Compliance. Additionally, this guide focuses on the regulatory drivers, i.e., the SEC 17A-4, and what internal and external auditors in the Financial Services Industry can use as auditable evidence in substantiating communication supervision controls. This Playbook will be updated when new features are introduced to Microsoft Communication Compliance or when additional FSI regulatory controls and processes are required. 

Please note: this document focuses on and covers various use cases that can be achieved using **Communication Compliance for the Financial Services Industries**. This is only a guide and should not be interpreted as a guarantee of compliance. It is up to you to evaluate and validate the effectiveness of customer controls per your regulatory environment. 

### Objective

This document provides specific details of how customers can deploy and manage Microsoft Communication Compliance and provide guidance on satisfying internal and external compliance and auditor's requirements for communication supervision controls. 

In summary, this Playbook will help to:

* Understand the typical Communication Compliance use cases for the Financial Services Industry.
* Develop a strategy for ensuring Communication Compliance can meet internal and external auditor requirements and regulatory mandates.
* Define the compliance controls and validate communication supervision controls.
* Focus on enforcement and examinations,  including an emphasis on cybersecurity, communication/collaboration insights, and risk mitigants.

### Scope

This Playbook helps plan for a successful deployment and use of Communication Compliance and serves as a user guide to mitigating the risk of exchanging crucial data while communicating over chat, email or other collaboration solutions. 

Digital Communication Governance and Controls. Compliance professionals face an increased focus by regulators on governance and accountability for communication supervision processes and controls. Organizations should continually monitor their reporting, identification, and escalation processes, as well as internal audit and risk management controls. 

### Geopolitical Uncertainty

Companies, especially those with global footprints and regulatory demands, face increased geopolitical risks. Regulators worldwide have implemented communication supervision regulations, including 17A-4, GDPR, and MiFID II, and are taking other steps that may focus on future communication supervision regulatory requirements. Organizations should map their regulatory rules to their  controls, evaluate ongoing regulatory changes, and formalize risk analysis and issue management processes to address these added risks. Organizations who are using Microsoft 365 can also look at utilizing Compliance Manager to stay on top of all the different compliance regulations impacting your industry and/or location and use these as a guide to help you stay complaant with this ever changing environment. More on Compliance [Manager Microsoft Compliance Manager - Microsoft 365 Compliance | Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/compliance/compliance-manager?view=o365-worldwide#:~:text=%20Compliance%20Manager%20helps%20simplify%20compliance%20and%20reduce,suggested%20improvement%20actions%20to%20help%20you...%20More%20)

### Intended Audience

Compliance officers, IT administrator staff, partners, and auditors.

## Overview

**Communication Compliance **is a risk management solution in Microsoft 365 that helps minimize communication risks by helping you detect, capture, and act on inappropriate messages in your organization. Pre-defined and custom policies allow you to scan internal and external communications for policy matches so designated reviewers can examine them. Reviewers can investigate scanned email, Microsoft Teams, Yammer, or third-party communications in your organization and take appropriate actions to make sure they're compliant with your organization's message standards.

### Financial Service Industry Regulations on Electronic Communications Supervision

The Securities Exchange Act requires broker-dealers to create certain records, retain them for various lengths of time, and keep them in specified formats. **FINRA Rules 3110 and 3120** govern supervisory systems and supervisory procedures as they relate to, among other things, electronic communications. These rules require the documentation and ongoing review, testing, and validation of these systems and procedures. In analyzing the enforcement associated with electronic communications, three top trends emerge for which firms should implement best practices:

1.	Written supervisory procedures
2.	Relevant lexicons (Keywords)
3.	Testing supervisory controls

### Using Relevant Lexicons (Custom Dictionaries)

Compliance-driven organizations can use a lexicon-based (Keyword) approach to electronic communication supervision by ensuring or evaluating those lexicons that are being used are relevant to the business. As a result, and through this approach, specific risks associated with communication and other collaboration solutions are identified, investigated, and mitigated through Communication Compliance policies. By utilizing Microsoft's Communication Compliance solution, control processes can be put in place to periodically review lexicons and update them based on new regulations or specific risks to the organization.  Whether an organization develops their own Lexicons, uses Machine-learning (Trainable Classifiers) or uses those developed by third-party vendors, it is extremely important to address the regulatory activity and internal risks specific to the firm and regulatory mandates. 

A best-practice approach includes ensuring the lexicons being used have context around them rather than using standalone words, such as guarantee, cash, or complain. This will ensure they are targeted and focused on the risk activity trying to be detected.  Having context around lexicons will also help minimize false positives and unnecessary reviews, which place a considerable burden on time and resources. Lastly, organizations should develop a plan to revisit lexicons, at a minimum, annually to ensure they are current and specific to the business's risk activity.

### Testing Communication Supervision Controls

Regular testing of the digital communication supervision process should be conducted to ensure appropriate controls are operationally effective. Testing supervisory controls must include, but are not limited to the following:

1.	Investigating or handling policy matches and regulatory violations 
2.	Proactively detecting whether their overall process and controls are effective.
3.	Create formal testing plans and perform regularly scheduled testing of the policies to ensure processes are being followed and gaps are quickly identified and addressed.
4.	Sample randomly flagged messages to ensure:

    - Lexicons accuracy.
    - Detect messages that did not flag but should have flagged for review.

The application of specific business risk lexicons and a well-thought-out testing strategy ensures the ability to enforce policies associated with electronic communication supervision.

### Communication Compliance Policies 

Communication Compliance policies must be clear, enforceable, and updated as necessary to address regulatory requirements. Compliance officers and auditors should have "quick and easy" access to the policies and alerts, and there should be very specific guidance regarding what are (and are not) permissible "electronic communication mechanisms." 
 
Policies should provide specific language explaining to employees using communication and collaboration tools, such as Microsoft Teams, the potential consequences of non-compliance, and appropriate training (on a regular and "as-needed" basis).

### Types of Electronic Communications Requiring Supervision Policies

**External Communications.** From a compliance perspective, organizations must establish communication supervision policies regarding the forms of electronic communications that they permit employees to use when conducting business with the public and take reasonable steps to monitor compliance with such policies and regulatory requirements. More specifically, FINRA expects communication supervision policies to prohibit communications with the public for business purposes from employees' own electronic communications devices (including, for example, home computers) unless the orginaztion is capable of properly supervising, receiving, and retaining such communications. 

**Internal Communications**. Financial Services firms may use "risk-based principles" to decide the extent to which internal communications will be reviewed. In connection with reaching a risk-based assessment, the guidance suggests areas that firms should consider, including assessing information barriers' effectiveness.  In addition, firms may view "various relevant existing processes," such as steps taken to reduce, manage, or eliminate potential conflicts of interest; and reviews of internal electronic communications that occur in connection with internal and/or regulatory examinations, transaction reviews, internal disciplinary reviews, and reviews relating to customer complaints or arbitration.

### Method of Review for Communications

As a general matter, regardless of what review method is used, organizations should alert their reviewers about the issues to be raised and material to be examined, including acceptable content. (Note: Certain SRO rules, such as NASD Rule 2210, prescribe content standards for specified types of communications.) Firms should also develop communication compliance policies for other key and relevant areas of concern, such as the use of confidential, proprietary, and insider trading information, anti-money laundering issues; gifts and gratuities; private securities transactions; customer complaints; conflicts of interest, front-running; and rumor spreading.

In addition, where financial services firms permit the use and receipt of encrypted electronic communications, they must monitor and supervise those communications in a controlled and compliant manner. Firms must also be able to review electronic correspondence in all languages to conduct business with the public. Moreover, under certain circumstances (e.g., when a specific problem has been identified), organizations should have their legal and/or compliance departments operate as a reviewer of communication compliance policies and pending alerts. 

This playbook focuses on two methods of review - "lexicon-based" reviews (those based on sensitive words or phrases) and "random" reviews (which employ a reasonable percentage sampling technique, whereby some percentage of the electronic communications generated by the firm is reviewed), and identifies areas of consideration with each method.
Organizations in highly regulated industries are encouraged to consider "complementary review techniques," which would entail the use of some combination of lexicon-based and random reviews. Moreover, "to best assure the effectiveness over time of any system, firms should incorporate ongoing evaluation procedures to identify and address any 'loopholes' or other issues that may arise, as the means of transmitting sensitive information 'under the regulatory radar' becomes more sophisticated and difficult to capture."

### Frequency of the Review of Communications' Compliance Controls

This playbook considers the frequency of communications review may vary depending on the nature of the firm's business and should be related to factors as the regulatory requirements, types of business conducted, the type of customers involved, the scope of the activities, the geographical location of the activities, the disciplinary record of covered persons, and the volume of the communications subject to review. With those considerations in mind, firms should prescribe reasonable timeframes within which supervisors are expected to complete their reviews and the tools, i.e., Microsoft Communication Compliance, used.

### Documentation of the Review of Communications and Collecting Evidence

Compliance-driven organizations must audit their reviews and reasonably demonstrate reviews were conducted, ensure data and artifacts have the greatest level of auditor-reliance while being compliant with the regulatory requirements. This would entail, at a minimum, developed policies, lexicon-based datasets, alerting and disposition strategies, clear identification of the reviewer, the communication that was reviewed, the date of review, and the steps taken as a result of any significant regulatory issues identified during the examination. FINRA adds that "merely opening the communication will not be deemed a sufficient review and will not satisfy auditable evidence requirements." In the event the evidence of the required documentation cannot be achieved, trainable classifiers can be used for organizational communication policy requirements, but depending on your compliance requirements, they may not provide enough evidence of due diligence If this is the case, you should use dictionary-based policies.

## COMMUNICATION COMPLIANCE USE CASES

### Policy Configuration and Management

Organizations can use communication compliance policies to monitor, enforce, and take action on user communications.  Users must comply with acceptable use, ethical standards, and other policies in all their business-related communications. Organizations can develop their communication compliance policies to detect and investigate abusive language, insider trading risks, conflicts of interest, unauthorized sharing of sensitive information, and corrective actions to help respond and recover from incidents. Other examples include reviewing broker-dealer communications within the firm to safeguard against potential collusion or bribery activities.

17A-4 requires financial services firms to implement a supervisory or oversight process for communication that is appropriate. The FINRA Rule 3110 is an example of a requirement for organizations to have supervisory procedures to scan user communications and the types of businesses it engages. Microsoft Communication Compliance policies can help organizations meet these requirements by providing a process to both scan and report on corporate communications.  

### Acceptable Digital Communication Channels

FINRA [emphasizes that the digital communications of regulated firms meet the record-keeping requirements of Exchange Act rules 17a-3 and 17a-4, as well as FINRA Rule Series 4510](https://www.finra.org/rules-guidance/key-topics/books-records). 

Financial Services Firms are responsible for conducting due diligence to comply with FINRA rules, securities laws and follow up on potential violations of those rules related to employee communication and collaboration applications.

Effective practices recommended include the following:

* Establish a comprehensive governance program for digital communication channels. Manage the organization's decisions about which digital communication channels are permitted and define each digital channel's compliance processes. Firms are also required to monitor the rapidly changing landscape of digital communication channels and keep compliance processes up to date.

* Clearly define and control permissible digital channels. Define both approved and prohibited digital channels. Block or restrict the use of prohibited digital channels or prohibited features within digital channels that limit the firm's ability to comply with records management and supervisory requirements.

* Provide training for digital communications. Implement mandatory training programs before granting access to approved digital channels. Training helps clarify an organization's expectations for business and personal digital communications, and it guides users through using permitted features of each channel in a compliant manner.

### Risk Management

* Using communication compliance policies helps identify and manage potential legal exposure and reduces the risk of damaging corporate reputation. For example, organizations can scan messages for unauthorized communications and conflicts of interest about confidential projects such as upcoming acquisitions, mergers, earnings disclosures, reorganizations, or leadership team changes.

### Fulfilling Supervisory Requirements

Using the built-in remediation workflows, companies can quickly identify and act on messages with policy matches. The following features increase efficiency for investigation and remediation activities:

* Pausing Communication Compliance Policies (Preview): Pausing a policy will enable an administrator to suspend evaluations of communications manually.
* Copying Communication Compliance Policies (Preview): Copying a policy will allow an administrator to make an exact copy of a policy to duplicate an existing working  policy to scope to different individuals, groups or applications.
* Investigating and Remediation: The ability to un-resolve a message and highlighting messages that have been tagged.
* Monitor and Manage Teams Attachments: [(Coming Soon)](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=In%20development&searchterms=82084) Analyze the content of documents shared in chat for potential policy match.
* Monitor and manage Teams Conversations:  Analyze teams conversation and even remove inappropriate messages.
* Team Conversation Context: Get 5 messages before and 5 message after the flagged conversation to be able to quickly see context. 
* Flexible remediation workflow: New remediation workflow helps you quickly act on policy matches, including new options to escalate messages to other reviewers and to send email notifications to users with policy matches.
* Conversation threading: Messages are now visually grouped by original message and all associated reply messages, giving you better context during investigation and remediation actions.
* Keyword highlighting: Terms matching policy conditions are highlighted in the message text view to help reviewers quickly locate and remediate policy alerts.
* Exact and near-duplicate detection: In addition to scanning for exact terms matching communication compliance policies, near-duplicate detection groups textually similar terms and messages together to help speed up your review process.
* Optical character recognition (OCR): Scan, detect and investigate printed and handwritten text within images embedded or attached to an email or Microsoft Teams chat messages.
* New Filters: Investigate and remediate policy alerts faster with message filters for several fields, including sender, recipient, date, domains, and many more.
* Improved message views: Investigation and remediation actions are now quicker with new message source, text, and annotation views. Message attachments are now viewable to provide full context when taking remediation actions.
* User history view: Historical view of all user message remediation activities, such as past notifications and escalations for policy matches, now provides reviewers with more context during the remediation workflow process. First-time or repeat instances of policy matches for users are now archived and easily viewable.
* Pattern detected notification: Many harassing and bullying actions occur over time and involve reoccurring instances of the same user behavior. The new pattern detected notification to display in alert details helps raise attention to these alerts and behavior types.
* Show Translate view: Quickly investigate message details by automatically converting alert message text to the language configured in the displayed language setting in the Microsoft 365 subscription for each reviewer. This supports more then 90 languages provided by [Microsoft Translator Languages](https://www.microsoft.com/translator/business/languages/).

## LEXICONS AND CUSTOM DICTIONARIES

Organizations can configure custom keyword dictionaries (or lexicons) to provide simple management of keywords specific to your organization or industry. Keyword dictionaries support up to 1 MB of terms (post-compression) in the dictionary and support any language. The tenant limit is also 1 MB after compression. 1 MB of post compression limit means that all dictionaries combined across a tenant can have close to 1 million characters. If needed, you can apply multiple custom keyword dictionaries to a single policy or have a single keyword dictionary per policy. These dictionaries are assigned to a communication compliance policy and can be sourced from a file (such as a .csv or .txt list) or a list you can [Import in the Compliance Center](https://docs.microsoft.com/en-us/microsoft-365/compliance/create-a-keyword-dictionary?view=o365-worldwide). Use custom dictionaries when you need to support terms or languages specific to your organization and policies.

### Create Your Lexicon or Custom Dictionary

[How to create a custom Sensitive Informaiton type using a keyword dictionary](https://docs.microsoft.com/en-us/microsoft-365/compliance/communication-compliance-feature-reference?view=o365-worldwide#custom-keyword-dictionaries)

In the Microsoft Compliance Center at compliance.microsoft.com click on the Data Classification Workload, and then click on Sensitive Info Types (SIT) to create the SIT.  

<figure>
    <img src="../../playbooks/img/fsi/picture1.png" align="left"/> 
    <figcaption>Figure 1: Mirosoft Sensitive Info Types</figcaption>
</figure>

From here, you want to name your SIT and provide a description.  These are mandatory fields.

<figure>
    <img src="../../playbooks/img/fsi/picture2.png" align="left"/> 
    <figcaption>Figure 2: Name your sensitive info type</figcaption>
</figure>

Every sensitive information type entity is defined by these fields:

- **Name:** how the sensitive information type is referred to
- **Description:** describes what the sensitive information type is looking for
- **Pattern:** a pattern defines what a sensitive information type detects. It consists of the following components
- **Primary element** – the main element that the sensitive information type is looking for. It can be a regular expression with or without a checksum validation, a keyword list, a keyword dictionary, or a function.
    - **Supporting element** – elements that act as supporting evidence that help in increasing the confidence of the match. For example, keyword “SSN” in proximity of an SSN number. It can be a regular expression with or without a checksum validation, keyword list, keyword dictionary function or a group of elements. Using these can help you get very precise when building a custom sensitive information type. 
    - **Confidence Level** - confidence levels (high, medium, low) reflect how much supporting evidence was detected along with the primary element. The more supporting evidence an item contains, the higher the confidence that a matched item contains the sensitive info you're looking for.
    - **Proximity** – When the primary element is matched, any supporting elements will match only when found within this proximity to the primary element. The closer the primary and supporting elements are to each other, the more likely the detected content is going to be what you're looking for. You also have an option to find the supporting elements anywhere in the document. 

Next, define the pattern for your SIT, as shown below.

<figure>
    <img src="../../playbooks/img/fsi/picture3.png" align="left"/> 
    <figcaption>Figure 3: New SIT pattern</figcaption>
</figure>

Note, the following mandatory fields must be completed:

- Confidence Level (Low, Medium, High)
- Primary Element (Regular Expression, Keyword List, Keyword Dictionary, Functions)

The following fields are Optional but can help cut down on false positives by providing additional supporting evidence when looking at a your primary elements.

- Set your character proximity or keep the default value
- Add any additional supporting elements
- Add any additional checks

**Useful Links:**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Learn about sensitive information types](https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitive-information-type-learn-about?view=o365-worldwide)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Get Started with Custom Sensitive Information Types](https://docs.microsoft.com/en-us/microsoft-365/compliance/create-a-custom-sensitive-information-type?view=o365-worldwide)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Create a Keyword Dictonary](https://docs.microsoft.com/en-us/microsoft-365/compliance/create-a-keyword-dictionary?view=o365-worldwide)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Functions](https://docs.microsoft.com/en-us/microsoft-365/compliance/what-the-dlp-functions-look-for?view=o365-worldwide)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Regular Expresions](https://www.boost.org/doc/libs/1_68_0/libs/regex/doc/html/) - M365 sensitive information types uses the Boost.RegEx 5.1.3 engine.

In this case we have a large list of terms so we care going to use a Custom Keyword Dictionary (Lexicon) by uploading the CSV or TXT file. Note you have other options when creating your elements based on your needs.

We will select Keyword dictionary:

<figure>
    <img src="../../playbooks/img/fsi/picture4.png" align="left"/> 
    <figcaption>Figure 4: Select Keyword Dictonary</figcaption>
</figure>

This will open a new window which we are required to uploade our csv or txt file and name our dictonary.

<figure>
    <img src="../../playbooks/img/fsi/picture5.png" align="left"/> 
    <figcaption>Figure 5: Upload Keyword Dictonary file</figcaption>
</figure>

<figure>
    <img src="../../playbooks/img/fsi/picture6.png" align="left"/> 
    <figcaption>Figure 6: Select csv or txt file</figcaption>
</figure>

The following keyword or phrases will be added to the UI as illustrated:

<figure>
    <img src="../../playbooks/img/fsi/picture7.png" align="left"/> 
    <figcaption>Figure 7: Add Keyword dictionary</figcaption>
</figure>

Provide a name for the Lexicon/keyword dictonary and click done.

!!! Note "This is the minumun requirements for a custom SIT but as mentioned above you might want to provide other supporting elements and conditions to cut down on the false positives." 

<figure>
    <img src="../../playbooks/img/fsi/picture8.png" align="left"/> 
    <figcaption>Figure 8: New pattern with custom dictonary</figcaption>
</figure>

Once you are complete with your pattern click Create. If you like you can add additional patterns to this SIT for example you might have a Low, Medium and High pattern in the same SIT. Your low might be just find a keywork while a High is finding a keyword with supporting elements. 

Once you are done with the patterns click on Next. 

<figure>
    <img src="../../playbooks/img/fsi/picture9.png" align="left"/> 
    <figcaption>Figure 9: Define patterns for this sensitive info type</figcaption>
</figure>

Choose the recommend confidence level for the policy. If you only have one then you should match this. 

!!! Notes "To leabr more about confidence levels check out this video- [Confidence Level Video](https://www.microsoft.com/en-us/videoplayer/embed/RE4Hx60)"

In our case we choose High so we will choose high here.

<figure>
    <img src="../../playbooks/img/fsi/picture10.png" align="left"/> 
    <figcaption>Figure 10: Choose the recommended confidence level</figcaption>
</figure>

Review your settings and continue.

<figure>
    <img src="../../playbooks/img/fsi/picture11.png" align="left"/> 
    <figcaption>Figure 11: Review settings</figcaption>
</figure>

### Create your Communication Compliance Policy

Now that we have created our custom keywork dictionary we will switch over to the Communication Compliance solution to create a new Policy. 

Once in the Communication Compliance soltuons click on Create policy and select Custom Policy.

<figure>
    <img src="../../playbooks/img/fsi/picture12.png" align="left"/> 
    <figcaption>Figure 12: Customer Communication Compliance Policy</figcaption>
</figure>

You need to provide a Name for your Communication Compliance policy (required field) and add a description if you like to your Custom Policy.

<figure>
    <img src="../../playbooks/img/fsi/picture13.png" align="left"/> 
    <figcaption>Figure 13: Name and describe your policy</figcaption>
</figure>

Define what users and/or groups you want to supervise and who the reviews should be for this policy. 

<figure>
    <img src="../../playbooks/img/fsi/picture14.png" align="left"/> 
    <figcaption>Figure 14: Choose supervised users and reviewers</figcaption>
</figure>

Choose locations to Monitor Communications. Click Next.

!!! Note "If you have any data connectors to 3rd paty sources you will also see these here."

<figure>
    <img src="../../playbooks/img/fsi/picture15.png" align="left"/> 
    <figcaption>Figure 15: Choose locations to monitor communications</figcaption>
</figure>


Choose Conditions and Review Percentage

Choose the direction you want to monitor communication 

-	Inbound Detects communications sent to supervised users from external and internal senders, including other supervised users in this policy.

-	Outbound Detects communications sent from supervised users to external and internal recipients, including other supervised users in this policy.

-	Internal Detects communications between the supervised users or groups in this policy.

Choose your conditions. In our case we are going to be selecting the custom keyword dictionary that we created earlier using Content contains any of the sensitive info types. There are several options to pick from and you can find more details here - [Communication compliance feature reference - Microsoft 365 Compliance | Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/compliance/communication-compliance-feature-reference?view=o365-worldwide&source=docs#policy-settings)

<figure>
    <img src="../../playbooks/img/fsi/picture16.png" align="left"/> 
    <figcaption>Figure 16: Choose content contains any of these sensitive info types</figcaption>
</figure>

<figure>
    <img src="../../playbooks/img/fsi/picture17.png" align="left"/> 
    <figcaption>Figure 17: Select the custom keyword dictonary</figcaption>
</figure>

Click Add. If you wish to add any additional conditions or exceptions to your policy you can do that now. In our case we are just looking for the words in our custom keyword dictonary. 

You have additional option such as if you want to capture Optical Character recognition where we will search for these words on images or hard written notes. 

You also want to make sure you specify what precent of matches you want to capture. This can be anywhere from 1-100%. You can use this to capture all messages or a sample of the message based on your organization requirements. 

<figure>
    <img src="../../playbooks/img/fsi/picture18.png" align="left"/> 
    <figcaption>Figure 18: Optical Character Recognition</figcaption>
</figure>

When you are done click Next to go to the review settings screen.

<figure>
    <img src="../../playbooks/img/fsi/picture19.png" align="left"/> 
    <figcaption>Figure 19: Review and finish the policy</figcaption>
</figure>

If everything looks correct then click create policy to create the new policy. 

<figure>
    <img src="../../playbooks/img/fsi/picture20.png" align="left"/> 
    <figcaption>Figure 20: Policy Created</figcaption>
</figure>

Once this is complete you will have a Communication Compliance policy using a customer Lexicon set of keywords.  

!!! Notes "Please take the following note:"
    If simple dictionary matches are not enough for a particular scenario an organization needs to detect, multiple keyword lists can be combined via more complex logic (e.g. one word from list A near a word from list B but without the presence of a word from list C) by [creating a custom Sensitive Information Type in the Compliance Center](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fmicrosoft-365%2Fcompliance%2Fcreate-a-custom-sensitive-information-type%3Fview%3Do365-worldwide&data=04%7C01%7Cv-jasayl%40microsoft.com%7C7ab6a33f6b53467802a408d8fa3ffaf4%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637534500071852224%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=r7DjiJ6GWhwErBQ8hAZWvB1FNunsMSD50fg2ugSh%2BaI%3D&reserved=0) or [via PowerShell using a custom XML file](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fmicrosoft-365%2Fcompliance%2Fcreate-a-custom-sensitive-information-type-in-scc-powershell%3Fview%3Do365-worldwide&data=04%7C01%7Cv-jasayl%40microsoft.com%7C7ab6a33f6b53467802a408d8fa3ffaf4%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637534500071852224%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=bGEV2FEH5mj%2F2gqALPkesII1Q%2BG4hfKuT%2BmsRBfglFg%3D&reserved=0).


## Implementation Strategy

See [Microsoft 365 productivity illustrations](https://docs.microsoft.com/en-us/microsoft-365/solutions/productivity-illustrations?view=o365-worldwide) for guidance on implementing all M365 capabilities with a focus on cross technologies.

Based on experience, a solid Implementation strategy follows these three phases

**Crawl** -The first stage is about starting to evaluate your organization's security and compliance with your goal of defining a strategic direction for your company. For example, you can create test policies with basic dictionaries that include the words directly associated with the scenarios one wants to detect (e.g. for bribes words like award, payment, reward, bonus, “on us”, complimentary, etc.) and monitor communications using these, especially to detect false positives. For each false positive, take note of the words in those messages that you could use to identify the topics where the target words alone would cause a false positive. In the walk phase, you can implement more complex rules that use the learnings from the first phase to more precisely target the right messages. 

**Walk** -The second stage builds the foundation for a successful, scale, and sustainable deployment. In this phase, you plan the details of your implementation and build the solution. You may also run a pilot or proof of concept with a select group of users or locations.

**Run** -The last stage is about optimizing the solution for Microsoft 365. In this phase, you will set up an automated, scalable approach for each solution.  In the run phase you could include enable OCR in the policies, adding foreign terms (if appropriate for a multinational company) and enable automatic translation, create Power Automate flows, etc. 

## References

[Learn about communication compliance - Microsoft 365 Compliance | Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/compliance/communication-compliance?view=o365-worldwide)
[Communication compliance with Microsoft Teams - Microsoft Teams | Microsoft Docs](https://docs.microsoft.com/en-us/microsoftteams/communication-compliance)
[Sensitive information type entity definitions - Microsoft 365 Compliance | Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitive-information-type-entity-definitions?view=o365-worldwide)
[Get started with trainable classifiers - Microsoft 365 Compliance | Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/compliance/classifier-get-started-with?view=o365-worldwide)
[Trainable classifier auto-labeling with sensitivity labels webinar - Microsoft Tech Community](https://techcommunity.microsoft.com/t5/microsoft-security-and/trainable-classifier-auto-labeling-with-sensitivity-labels/ba-p/1247424)

