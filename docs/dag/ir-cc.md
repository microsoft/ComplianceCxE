---
layout: dag
title: IR/CC DAG
intro: Managing Insider Risk
---

*Last updated: 05/10/2021*

In today’s climate one of the top concerns for security and compliance are the data leakage from insider risks. Studies point to insider risk from specific user events and activities; protecting your organization may seem impossible if one does not have insight or a way to identify the risk but worse if you cannot mitigate the risk you do not know about. With this in mind, let’s get started with Microsoft 365 [Insider Risk Management (IRM)](#insider-risk-management) and [Communication Compliance (CC)](#communication-compliance) solutions.

## Your Deployment Plan

The objective is to create a deployment plan that follows the progression of crawl-walk-run methodology while highlighting the user and administrator experience at each stage. Your focus should be on the end user result and the security controls you achieve with each implemented stage. Solutions or tools covered in this guide for deployment consideration are:

•	[Compliance Manager](../cm/)

•	[Microsoft Compliance Configuration Analyzer (MCCA)](../mcca/)

•	[Communication Compliance](#communication-compliance)

•	[Insider Risk Management](#insider-risk-management)

The DAG is not inclusive of all requirements or architectures needed for successful implementation of Microsoft 365’ but rather a focus on security and compliance as it relates to solutions included as part of Microsoft information Protection & Compliance licenses.

See Microsoft 365 productivity illustrations for guidance on implementation of all M365 capabilities with focus on cross technologies.

**Crawl Stage** - The first stage is about starting to evaluate where your organization is today regarding the information security and compliance with your goal of defining a strategic direction for your organization. Using this strategy to foster adoption of a solution by gathering the requirements of supporting systems, impact on end users, and skillset needed for each role owner. The crawl phase describes steps you should do at the beginning of any deployment, whether your requirements are basic or advanced. It includes steps for product education, defining requirements, and evaluation or testing.

**Walk Stage** - The second stage builds the foundation for a successful, scalable, and sustainable deployment. In this phase, you plan the details of your implementation and to build the solution. You may also run a pilot or a proof of concept with a selected group of users or locations.

**Run Stage** - The last stage is about optimizing the solution for Microsoft 365. In this phase you will set up an automated scalable approach for each solution. 

Following the above approach will lead to successful adoption and deployment of each solution while protecting your intellectual property, stopping fraud or insider trading, plugging the sensitive data leaks, along with making the workplace safe.

## Communication Compliance

Communication compliance is part of the new insider risk solution in Microsoft 365 that helps minimize communication risks by helping you detect, capture, and take remediation actions for inappropriate messages in your organization. Pre-defined and custom policies allow you to scan internal and external communications for policy matches so they can be examined by designated reviewers.

Reviewers can investigate communications in your organization that do not meet your standards, as identified through configurable rules, and take appropriate remediation actions to make sure that they are compliant with your organization's message standards. Communication compliance supports several company communications channels including those part of the Microsoft 365 solution such as Exchange email, Microsoft Teams, Yammer or Skype for Business, as well as a large number of third-party communication platforms integrated through available connectors such as Twitter, Facebook, and Bloomberg instant messages. More details on third-party connectors can be found [here](https://docs.microsoft.com/en-us/microsoft-365/compliance/archiving-third-party-data?view=o365-worldwide).

Communication compliance policies in Microsoft 365 help you overcome many modern challenges associated with compliance and internal and external communications, including:

* Scanning increasing numbers of communication channels

* The increasing communication volumes

* Regulatory enforcement & the risk of fines

### Best Practices

Let’s establish some of the preparation that goes into start of execution of using communication compliance to help plan your deployment.

#### Policy Definition

While the usage of communication compliance is distinct to each organization and their business and regulatory requirements and the policies you define will need to be designed accordingly, the following criteria can be used to guide the initial creation of policies at most organizations.

* Decide whether your organization’s use cases for the solution revolve around regulatory compliance, enforcing a code of conduct, preventing self-harm or harm to others, or monitoring external communications by specific employees (or more than one of these or other scenarios), and define policies based on this decision according to the following rules. 

* For code of conduct policies: 
    
    - It is generally advised that you create policies that cover all employees. While code of conduct violations by employees in some roles may be more problematic than in other roles, a minimum set of rules must be met by all employees, so start with a single policy that is scoped to all employees. 
    
    - Code of conduct policies typically utilize the built-in classifiers for offensive language. Create a policy utilizing the classifiers for profanity, harassment, targeted harassment, adult images, gory images, and racy images (it is alternatively possible to create separate policies for some of these if you think they should be monitored by different auditors or the response time needed for different types of offenses may vary significantly). While it is possible to create your own trainable classifiers for handling specific offensive or non-compliant terms, it is generally easier to start with the built-in classifiers and only train or retrain your own classifiers if needed. 
    
    - In some organizations, it may not be necessary to detect all offenses, and configuring the policy to only create alerts to a given percentage of offensive language use may be effective enough, since if employees know their communications are being regularly monitoring that may be enough incentive for them to follow the rules. In other organizations where no exceptions can be allowed a 100% review percentage may be needed. 
    
    - It is possible to create overlapping rules for specific roles such as executives, people working with customers or people in special, external-facing roles, or policies targeting specific communication channels that can have higher exposure such as social media. Such roles can be more aggressive in their rules and have higher review percentages than rules for the general population. 
    
    - In most cases, for code of conduct policies you will want to monitor both internal and outbound communications. Monitoring inbound communications can also be useful for detecting potential sources of stress to your employees.

* For policies related to monitoring self-harm or threats to others, similar practices to the ones for offensive language apply, but it is generally advised to create a policy that is separate from offensive language, since this type of policy usually requires a quicker reaction time in order to avoid actual harm and you may want to monitor such alerts more diligently. You will also likely want to configure a 100% review for such policies. 

* For meeting regulatory compliance requirements, you will typically create a custom policy with rules that are dictated by your regulatory requirements. 
    
    - Typically, you will create a policy starting with the regulatory compliance policy template and configure it with rules that utilize “message (or attachment) contains any of these words” and provide words or phrases frequently used in language that represents the type of risks you want to identify. For example, for detecting situations such as improper gifts you can define phrases like “complimentary”, “gift”, “at no cost to you” and “our treat”. 
    
    - For more complex requirements, you can create custom [Sensitive Information Types](https://docs.microsoft.com/en-us/microsoft-365/compliance/create-a-custom-sensitive-information-type?view=o365-worldwide) (SIT) and use them in your policies. A custom SIT can use large dictionaries that are easier to maintain, combinations of different lists of words, complex conditions including operators (and/or/not) and near relationships between terms and more.
        
        - Go to Data Classification page in M365 SCC, navigate to Sensitive Info Types tab. Click Create Info Type and use your dictionary to create a custom SIT. For more details, check this [How to setup a keyword dictionary](https://docs.microsoft.com/en-us/microsoft-365/compliance/communication-compliance-feature-reference?view=o365-worldwide#custom-keyword-dictionaries)
        
        - Go to Policies tab in Communication Compliance admin portal and click Create Policy. Choose Custom Policy from the drop-down menu and use custom create SIT in the Conditions And Percentages page of the New Policy Wizard along with other details as required.
        
        - This method can require more effort to implement than a simple keyword list or a trainable classifier, so it is recommended that you start with the simpler option and assess your accuracy before committing to more complex policies based on sensitive info types.
    
    - In most cases, regulatory compliance policies can be scoped to specific communications, in particular including only external communications or communications to/from specific organizations can significantly reduce the volume of alerts to review while keeping the relevant messages in scope. 

* Communication compliance can also be used for monitoring communications through official channels (such as official communications by executives and PR people such as on Twitter feeds). While it is rare that an employee would intentionally commit policy violations in such channels, it is not as rare that an employee mixes up their personal account with the official one and send improper messages that way. Using Communication compliance to monitor such media can help rapidly detect potential offenses and delete the offending messages. In most cases you may want to utilize the built-in classifiers for offensive language, harassment, and the classifiers for gory, racy and adult images for these policies. 

* If your organization is multi-national or have employees that communicate in multiple languages, contact Microsoft for access to the Offensive Language classifiers in different languages, currently in preview. If you do so, unless you know that all your auditors are fluent in all the languages in question, it is often recommended that you create separate policies for each of these languages, so you can assign in each policy reviewers that can read the language in question and properly assess the offenses. 
    
    - Since Communication compliance will attempt to detect the language in which a message is written and will use the right classifiers accordingly, it is generally not required to assign policies in specific languages to known speakers of those languages. Still, doing so can reduce false positives due to the fact that certain non-offensive words in some languages can be identical to offensive words in other languages, so if you have large known populations that communicate in specific languages (such as to people in specific countries where that language is the primary language in use) you can target such language-specific policies to those populations to make the solution more accurate. 

* At this moment, Communication compliance gathers and analyzes messages on a 24-hour cycle, which starts at the moment a policy is enabled for the first time. You may want to plan the creation of policies that relate to time-sensitive matters (such as threats) so it completes at the same time when you expect your analysts to check daily for alerts, in order to minimize the delay in reviewing messages. For other types of policies some organizations prefer to align their creation with the end of the productive day for most employees so policies can be reviewed before the next day. 

* While compliance alerts are often monitored by individuals specifically assigned to the role, assessment of noncompliance often requires escalation to other roles in the organization. It is recommended that before putting your policies in production you identify the appropriate stakeholders and personas in your organization to collaborate for remediation actions and alerts triaging in communication compliance. Some recommended personas to include in the end-to-end investigation workflow are human resources, compliance/privacy and legal. You may also want to involve people that are fluent in specific languages or that are familiar with the culture of specific regions since there may be local nuances that change the meaning of some phrases. It is often useful to create groups in Office 365 or channels in Teams including these persons to make obtaining feedback about these types of situations more efficient (though for obvious reasons assessment of offensive language or images is typically better handled 1:1). Also, in order to allow these persons to have direct access to the Communication compliance console, assign the required role groups to these groups or individuals.

* Before enabling the solution broadly in your production environment, you may consider testing the policies with a small set of production users or in a test environment while waiting for the necessary privacy and legal reviews in your organization. Bear in mind that evaluating it in a test environment will require that you generate simulated user content to create alerts that can be triaged and processed, so testing with a small group of users in a production environment is usually preferred.

* Use the anonymization feature in settings to pseudonymize display names for risky users to maintain privacy and prevent bias when reviewing alerts and taking appropriate actions within the tool. 

* After creating a new policy, expect alerts to start arriving in 24 hours, though there may be additional delay in some cases. 

#### Investigating Alerts

The first step to investigate issues detected by your policies is to review generated alerts in the Microsoft 365 compliance center. There are several areas in the compliance center to help you to quickly investigate alerts, depending on how you prefer to view alert grouping:

* [Communication compliance home page](https://compliance.microsoft.com/): Here you will see: 

    - Alerts needing review listed from high to low severity. Select an alert to launch the alert details page and to start remediation actions.
    
    - Recent policy matches listed by policy name.
    
    - Resolved items listed by policy name.
    
    - Escalations listed by policy name.
    
    - Users with the most policy matches, listed from the most to the least number of matches.

* Alerts tab: Display alerts grouped by matched communication compliance policy. This view allows you to quickly see which communication compliance policies are generating the most alerts ordered by severity.

* Policies tab: Each policy listed includes the count of alerts that need review. Selecting a policy displays all the pending alerts for matches to the policy, select a specific alert to launch the policy details page and to start remediation actions.

### Considerations

* To make communication compliance available as a menu option in Microsoft 365 compliance center, you must be assigned the Supervisory Review Administrator role. You must create a new role group for reviewers with the Supervisory Review Administrator, Case Management, Compliance Administrator, and Review roles to investigate and remediate messages with policy matches.

* For communication compliance to be able to monitor user activity, you have to [enable the Audit log in Office 365](https://docs.microsoft.com/en-us/microsoft-365/compliance/communication-compliance-configure?view=o365-worldwide).

### Helpful Resources

* For step-by-step instructions to begin setup of communication compliance, please follow guidance: [Get started with communication compliance](https://docs.microsoft.com/en-us/microsoft-365/compliance/communication-compliance-configure?view=o365-worldwide)

* Stay up to date with the new announcements and features in communication compliance by following our latest blog posts: 
    
    - [Foster a culture of inclusion and safety with Microsoft Teams and Communication Compliance](https://techcommunity.microsoft.com/t5/microsoft-security-and/foster-a-culture-of-inclusion-and-safety-with-microsoft-teams/ba-p/1530254)
    
    - [Manage a broad range of communication risks efficiently](https://techcommunity.microsoft.com/t5/microsoft-security-and/manage-a-broad-range-of-communication-risks-efficiently/ba-p/1675601)

## Insider Risk Management

Internal risks are often what keeps business leaders up at night – regardless of whether negligent or malicious, identifying and being able to take action on internal risks are critical. The ability to quickly identify and manage risks from insiders (employees or contractors with corporate access) and minimize the negative impact on corporate compliance, competitive business position and brand reputation is a priority for organizations worldwide.

Insider risk management is a solution in Microsoft 365 that helps minimize internal risks by enabling you to detect, investigate, and take action on risky activities in your organization using signals from user activity, human resources (HR) systems and other sources that can provide rich context to enable accurate identification of potential threats. Custom policies allow you to detect and act on malicious and inadvertent risk activities in your organization, including escalating cases to Microsoft Advanced eDiscovery if needed. Risk analysts in your organization can quickly take appropriate actions to make sure users are compliant with your organization's compliance standards.

### Best Practices

Let’s establish some of the preparation that goes into start of execution of using insider risk to help plan your deployment.

#### Prior to Deployment Plan

* Identify the appropriate stakeholders and personas in your organization to collaborate for remediation actions on insider risks. Some recommended personas to include in the end-to-end investigation workflow are compliance/privacy, security, HR, and legal. 

* Insider risk management has role-based access control. You must be added or add users within your organization to the Insider Risk Management role group.

* Insider risk management uses audit logs for user insights and activities, it is a prerequisite to enable the Audit Log in Office 365.

#### Deployment Test Plan

* Before enabling the solution broadly in your production environment, you may consider testing the policies with a small set of production users or in a test environment while waiting for the necessary privacy and legal reviews in your organization. Bear in mind that evaluating in a test environment will require that you generate simulated user actions and other signals in order to create alerts that can be triaged and processed, so testing with a small group of users in a production environment is usually preferred.

* When you set up a policy in insider risk management, the type of the policy defines the type of action that will act as a trigger to put a user under observation. For example, in the Departing Employee Data Theft policy, the trigger that causes the system to start analyzing the user’s behavior is a record indicating the departure date of an employee coming into the system through the HR connector, while for a Data Leak policy the analysis is triggered by a data loss prevention (DLP) alert being raised for the high severity DLP policy you designated during configuration.

* While you are testing the solution, you can monitor its progress in the evaluation of user activity by looking at the Users tab. When a user performs an action that matches the trigger conditions for a policy (e.g., announces their departure which is informed to the system through the HR connector) you will see the name of the user and the policy being triggered in the Users list. When you click on the user, you will see on the User Activity tab the list of all detected actions for the user along with their risk score. This will give you a view on what activity was detected and how it was quantified. 

* There are multiple insider risk management policy templates available. For the Departing Employee Data Theft policy, you must setup the HR connector to leverage HR notice and termination dates as a signal to alert you of any user activity related to data theft among departing employees. Step-by-step instructions to setup the HR connector can be found here.

* The Data Leak policy will leverage a DLP policy configured for High severity alerts to alert you of any user activity related to a data leak of sensitive information.

#### Production Deployment

* Use the anonymization feature in settings to pseudonymize display names for risky users to maintain privacy and prevent bias when reviewing alerts and taking appropriate actions within the tool. 

* Select dedicated Insider Risk analysts to monitor and review the alerts on a regular cadence in the Microsoft 365 compliance center.

* After creating a new policy, do not expect to see alerts coming up immediately. Insider risk is not a solution where you should see a lot of activity. In fact, most organizations see alerts being generated at a rate of a few per week or less, since the alerts should be highly relevant and represent in most cases actual instances of malicious behavior or an employee putting the organization at risk. 

* Once the event that triggers analysis occurs, the user’s activities are put under observation while the user’s past and future activities are evaluated to determine if the user’s behavior represents a risk, and if so, an alert is raised. Upon seeing an alert being raised, our recommendation is that there are dedicated analysts reviewing the alerts and can make decisions based on the information provided (e, g. if it needs to be turned into a case for investigation, escalated, or whether actions need to be taken.)

While if you implement all the recommendations above you are set for a successful deployment of IRM, the process to implement is equally important. We highly recommend a “Crawl-Walk-Run” approach, in which the technology is introduced in stages, focusing on things that cause minimal disruption. You can also introduce these changes in waves across your organization, focusing on limited sets of end users first and expanding to broader audiences. This will allow you to deploy quickly without causing disruption, and help you get a baseline of user behavior before introducing tight restrictions. It will also help you identify early potential conflicts or compatibility issues between different tools so you can address them before they have significant impact. 

### Considerations

* Insider risk management focuses on the user instead of the individual actions and will raise alerts for users that its analysis indicates represent a risk to the organization. The risks are analyzed based on well-known patterns of behavior that are frequently observed in many organizations, such as employees taking sensitive data with them when they leave the company. This enables the solution to detect most instances of the risks being monitored while producing little or no noise.

* You may need to consider the regional privacy laws to monitor insider risk activities within your organization. We recommend privacy reviews with privacy and/or legal stakeholders to ensure you are complying with company policies and privacy standards.

### Helpful Resources

* To get started with insider risk management, please follow the step-by-step instructions [here](https://docs.microsoft.com/en-us/microsoft-365/compliance/insider-risk-management-configure?view=o365-worldwide).

* You may find this [Insider Risk Management evaluation guide](https://microsoft-my.sharepoint-df.com/:w:/p/esaggese/EbuYee8t8uxKgygpQJGmgQ8Bg39J5PrcyYPjqwjPPqxpoQ?CID=6BECB3A9-8A18-40EE-AED1-7EC35197875C&wdLOR=cA514894F-96DB-4EB1-9CC5-59663EC7F665) useful for setting up and troubleshooting guidance.

* Stay up to date with the new announcements and features in Insider Risk Management by following our latest blog posts:
    
    - [Effectively managing insider risks with integrated collaboration solutions including Microsoft Teams](https://techcommunity.microsoft.com/t5/microsoft-security-and/effectively-managing-insider-risks-with-integrated-collaboration/ba-p/1675867)
    
    - [Protecting against insider risks in an uncertain environment](https://techcommunity.microsoft.com/t5/microsoft-security-and/protecting-against-insider-risks-in-an-uncertain-environment/ba-p/1528055)

## Appendix

This section contains links to the information regarding license requirements and provides additional links to additional information related to Microsoft Information Protection & Compliance.

### License Requirements

Below contains the necessary licenses for specific solutions outlined in the Deployment Acceleration Guide. While this information is current as of the writing of this document, refer to [Microsoft 365 Licensing Guidance for Security & Compliance](https://docs.microsoft.com/en-us/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-365-security-compliance-licensing-guidance#office-365-data-loss-prevention-for-exchange-online-sharepoint-online-and-onedrive-for-business) for the latest information as it may change.

#### Communication Compliance (CC)

Before you get started with communication compliance, you should confirm your [Microsoft 365 subscription](https://www.microsoft.com/microsoft-365/compare-all-microsoft-365-plans) and any add-ons. To access and use communication compliance, your organization must have one of the following subscriptions or add-ons:

* Microsoft 365 E5 subscription 
* Microsoft 365 E3 subscription + the Microsoft 365 E5 Compliance add-on
* Microsoft 365 E3 subscription + the Microsoft 365 E5 Insider risk management add-on
* Microsoft 365 A5 subscription 
* Microsoft 365 A3 subscription + the Microsoft 365 A5 Compliance add-on
* Microsoft 365 A3 subscription + the Microsoft 365 A5 Insider risk management add-on
* Microsoft 365 G5 subscription 
* Microsoft 365 G5 subscription + the Microsoft 365 G5 Compliance add-on
* Microsoft 365 G5 subscription + the Microsoft 365 G5 Insider risk management add-on
* Office 365 Enterprise E5 subscription 
* Office 365 Enterprise E3 subscription + the Office 365 Advanced Compliance add-on (no longer available for new subscriptions)

#### Insider Risk Management (IRM)

Before you get started with insider risk management policies, you should confirm your [Microsoft 365 subscription](https://www.microsoft.com/microsoft-365/compare-all-microsoft-365-plans) and any add-ons. To access and use insider risk management policies, your organization must have one of the following subscriptions or add-ons:

* Microsoft 365 E5 subscription 
* Microsoft 365 E3 subscription + the Microsoft 365 E5 Compliance add-on
* Microsoft 365 E3 subscription + the Microsoft 365 E5 Insider risk management add-on
* Microsoft 365 A5 subscription 
* Microsoft 365 A3 subscription + the Microsoft 365 A5 Compliance add-on
* Microsoft 365 A3 subscription + the Microsoft 365 A5 Insider risk management add-on
* Microsoft 365 G5 subscription 
* Microsoft 365 G5 subscription + the Microsoft 365 G5 Compliance add-on
* Microsoft 365 G5 subscription + the Microsoft 365 G5 Insider risk management add-on
* Office 365 Enterprise E5 subscription 
* Office 365 Enterprise E3 subscription + the Office 365 Advanced Compliance add-on (no longer available for new subscriptions)
