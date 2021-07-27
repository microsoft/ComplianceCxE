---
layout: home
title: Compliance in Education
intro: Example scenarios of Compliance in Education
---

!!! info
    Please contribute suggestions or additional scenarios.

## Overview
These notes from the field is designed to help our education customers understand some use case scenarios for using the Microsoft compliance products in their environment. This is not meant to be a full list of scenarios or designed to be a deep guidance on how to directly implement these. This is more of some common scenarios and examples we see at K-12 education customers to help give you our customers some ideas and insights of what is possible.

## Communication Compliance

### Overview
Communication compliance is a solution that helps minimize communication risks by helping you detect, capture, and act on inappropriate messages in your organization. Pre-defined and custom policies allow you to scan internal and external communications for policy matches so they can be examined by designated reviewers. Reviewers can investigate scanned email, Microsoft Teams, Yammer, or third-party communications in your organization and take appropriate actions to make sure they're compliant with your organization's message standards.

### Scenario
To see how a school might approach communication compliance, consider the following example:

A local high school has issued their students laptops for school use. To mitigate student harassment within the school’s network, the IT team created communication compliance policies. Since students communicate mainly via Teams, they created a policy to monitor Teams for any profanity or harassment. With the policy in place, teachers of specific classes and school admin will be notified when the system flags harmful messages. Teachers and admins can then investigate the issues and even have the capabilities to work with IT to remove messages to limit exposure. 

### Additional Resources
1.	Learn more about Communication Compliance by reading the [Compliance CxE Playbook](https://microsoft.github.io/ComplianceCxE/dag/ir-cc/) 
2.	Visit [Communication compliance in Microsoft 365 - Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/compliance/communication-compliance-solution-overview?view=o365-worldwide) to learn more about Communication Compliance configuration

## Information Barriers

### Overview
With information barriers, you can define policies that are designed to prevent certain segments of users from communicating with each other or allow specific segments to communicate only with certain other segments. Information barrier policies can help your organization maintain compliance with relevant industry standards and regulations and avoid potential conflicts of interest. 

### Scenario
To see how a school might approach defining segments and policies, consider the following example:

A local district has four elementary schools. To minimize distractions, students from different schools are not allowed to interact with each other on Teams. To enable this, the districts IT team will have to create a segment for each elementary school and assign students to their respective school. 

Then, IT will have to create a policy for each school designed to prevent communication between them. With the segments and policies defined, the IT team will then apply the policies and barriers will be in place to prevent communication between the elementary schools in the district.

### Additional Resources
1.	Learn more about Information Barriers by reading the [Compliance CxE Playbook](https://microsoft.github.io/ComplianceCxE/dag/ir-cc/) 
2.	Visit [Microsoft 365 Compliance Information Barriers - Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/compliance/information-barriers-policies?view=o365-worldwide#part-2-define-information-barrier-policies) to learn more about Information Barriers configuration

## Data Loss Prevention

### Overview
Data loss prevention is an important issue for an organization’s message systems because of the extensive use of communication channels that includes sensitive data. In order to enforce compliance requirements for such data, and manage its use in communication channels, without hindering the productivity of workers, Data Loss Prevention features make managing sensitive data easier than ever before.

### Scenario
To see how a school might approach Data Loss Prevention, consider the following example:

School districts rely on 3rd party organizations to help with classroom curriculum, improve student outcomes, and evaluate the effectiveness of the school programs. Student scores will be shared to help with the efforts but to ensure personal student information isn’t shared outside of the district, the school district’s IT department needs to create Data Loss Prevention policies for student information. 

The configured policies will protect student data from being shared outside of their respective schools. If there is an attempt to share information with anyone outside of the school, the rule will go into effect and interaction will be flagged. IT has the ability to block access to the records being shared and is some cases prevent the initial communication containing the personal records from being delivered.

### Additional Resources
1.	Learn more about Data Loss Prevention by reading the [Compliance CxE Playbook](https://microsoft.github.io/ComplianceCxE/dag/mip-dlp/#data-loss-prevention) 
2.	Visit [Data loss prevention - Microsoft Docs](https://docs.microsoft.com/en-us/exchange/security-and-compliance/data-loss-prevention/data-loss-prevention) to learn more about Data Loss Prevention configuration 

## Microsoft Information Protection

### Overview
Microsoft Information Protection helps organizations discover, classify, and protect sensitive data wherever it lives and travels. It provides the tools to understand your data, protect it, and prevent data loss.

### Scenario
To see how a school might approach Information Protection, consider the following example:

A local middle school wants to ensure that staff aren’t accessing sensitive school resources on devices that are not managed by the school (home machines). To ensure that the school’s data is protected, the IT department leverages Microsoft Information Protection to protect sensitive student information such as student records from being accessed on unmanaged devices. If a staff member tries logging onto their school account from a personal device and try accessing their records, access to the records will be denied because of the protection set up around the sensitive data. The IT department can set up similar protections for other applications and sensitive data from unmanaged devices. 

### Additional Resources
1.	Learn more about Information Protection by reading the [Compliance CxE Playbook](https://microsoft.github.io/ComplianceCxE/dag/mip-dlp/#data-loss-prevention) 
2.	Visit [Microsoft Information Protection - Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/compliance/information-protection?view=o365-worldwide) to learn more about data protection

## Advanced eDiscovery and Advanced Audit

### Overview
Advanced eDiscovery provides an end-to-end workflow to preserve, collect, analyze, review, and export content that's responsive to your organization's internal and external investigations. Advanced Audit helps organizations conduct forensic and compliance investigations by increasing audit log retention and providing access to events related to the investigation.

### Scenario
To see how a school might approach Advanced eDiscovery and Advanced Audit, consider the following example:

A local high school launched an investigation into a bullying incident. The communication compliance flagged communications for harassment between two 11th grade students. By leveraging Advanced eDiscovery, the IT department and admins were able to pull all of the communication interactions between the two students. Records showed that there were several harmful messages between the students. As the school launched an investigation, they used Advanced Audit to retain records of the interactions past the 90-day retention period in order aid the investigation until it’s completion.

### Additional Resources
1.	Learn more about Advanced eDiscovery and Advanced Audit by reading the [Compliance CxE Playbook](https://microsoft.github.io/ComplianceCxE/dag/aed-audit/) 
2.	Visit [Advanced eDiscovery solution in Microsoft 365 - Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/compliance/overview-ediscovery-20?view=o365-worldwide) to learn more about Advanced eDiscovery configuration
3.	Visit [Advanced Audit in Microsoft 365 - Microsoft Docs](https://docs.microsoft.com/en-us/microsoft-365/compliance/advanced-audit?view=o365-worldwide#send) to learn more about Advanced Audit configuration
