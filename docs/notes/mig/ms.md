---
layout: home
title: Notes from the field
---

!!! info
    Please contribute suggestions or additional scenarios.

## Overview    
With our previous disposition solution, when reached the end of a period of retention select individuals would receive an email notification to take an action. The 'Records Manager' or 'Disposition Reviewer' then would use the Disposition tab in Records Management to review the labels acting upon items to then dispose or permanently delete, extend the retention period or apply another label. 

For a detailed overview of the disposition process, refer to the Microsoft document [here](https://docs.microsoft.com/en-us/microsoft-365/compliance/disposition?view=o365-worldwide).

<figure>
    <img src="../../img/ms1.png"/> 
    <figcaption>Figure 1: Label creation with disposition trigger.</figcaption>
</figure>

*Figure 1* above depicts a label action triggering a disposition review. *Figure 2* below illustrates adding a single user or mail enabled group as disposition reviewer.

<figure>
    <img src="../../img/ms2.png"/> 
    <figcaption>Figure 2: Adding user or mail enabled security group.</figcaption>
</figure>


This process left a gap for large complex organizations needing to streamline the disposition process where all appropriate people would need to give approval before any action could be taken. One can imagine this could be a simple internal process or an extremely complex workflow. This flow led to the records manager or approver seeing all items needing disposition.

## Multi-Stage Features
We heard this feedback from our customers that people should only see the items that they are assigned to and that are ready for disposition but not all items needing disposition. With this in mind, we developed multi-stage disposition.

We are excited to share the new capabilities in Records Management:

*	Multiple stage and reviewers
*	Support for multi-geo
*	Email customization and templates
*	Reviewer experience (in line view, taking actions)
*	Adding reviewers to a stage
*	History and details tab

!!! tip
    For a detailed explanation or instructions for implementing the new features of multi-stage click this  [link](https://techcommunity.microsoft.com/t5/security-compliance-identity/end-user-training-for-retention-labels-in-m365-how-to-accelerate/ba-p/1750861).

We will discuss one such use case scenario here that leverages these new features.     

## Scenario 

!!! note
    The example below is more a general example that can be applied to all industries as regulations or company policy may not be the same in all parts of the world.

A global company that conducts business in Europe and is headquartered in California. The goal is to define a process of disposition to accommodate specific people or departments in Germany who are tasked with a review of exipired recrods complying with **BaFin**, **GDPR** and **CPRA** regulations. These records consist of contracts in the region of the world the company conducts business. 

The record manager of the company needs to create a process for taking actions for expired records and ensure the process is followed as defined by the company’s retention schedule. Some departments have a regional lead that oversees all the contract specialists in each country who might all have input into if record needs to be disposed. These subject matter experts for record types will need to approve items for disposition that are assigned to them and have the ability to view the context of the record. 

The company needs both the contract specialist or regional lead and records manager to approve all records requiring disposition review but only see the relevant items they are related to their job function. Contract specialists need email notifications daily with the correct instructions and approval guidance in multiple languages to accommodate global workforce. 

The records manager needs email notification instructions and business guidance that differ from the contract’s specialist or regional lead. The records manager needs a unified disposition process across all the locations of the world and reporting for proof that disposed items are not discoverable. Lastly, if business structure or change management dictate, they require the ability to update the disposition process while adhering to the company's defined retention schedule.

We will use the below workflow to map the business use case to the solution.

## Workflow

<figure>
    <img src="../../img/image1.PNG"/> 
    <figcaption>Image 1: Label workflow with multi-stage dispsotion</figcaption>
</figure>


Relating to the requirements above, there are three users in our tenant mapping to each role.

- **Randall Testuser** – Contract’s Specialist in Europe (Germany)

- **Joanna Hackett** – WW Lead for Contracts

- **MIG Admin** – Records Manager

As you can see from the *Figure 3* below both **Joanna Hackett** and **MIG Admin** are located in the United States (California). 

<figure>
    <img src="../../img/ms3.png" align="left"/> 
    <figcaption>Figure 3: User with PDL in Germany</figcaption>
</figure>

Randall works in Germany as shown in *Figure 4*.

<figure>
    <img src="../../img/ms4.png" align="left"/> 
    <figcaption>Figure 4: User with PDL in USA</figcaption>
</figure>

!!! note
    For an overview of M365 multi-geo and Preferred Data Location (PDL) visit [here](https://docs.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-multi-geo?view=o365-worldwide)


## Label Creation
We start by creating a new retention label with the record option enabled via the File Plan tab within the Records Management section of Microsoft 365 Compliance Center. The label is called *Multi-Stage Multi-Geo Label*, and has a 1 day retention setting, dispostion (deletion) after the retention period has expired, and requiring a disposition review.

The label below shows three stages and three reviewers: 

- Stage 1 called: <span style="color:blue">Germany SOW</span> 
- Stage 2 called: <span style="color:blue">Europe SOW Approval</span>  
- Stage 3 called: <span style="color:blue">Records Manager SOW Approval</span> 

<figure>
    <img src="../../img/ms5.png"/> 
    <figcaption>Figure 5: Settings of Multi-Stage Multi-Geo retention label.</figcaption>
</figure>

!!!note 
    The label shows a setting of 1 day but should be set to the requirement of your organization or regulation. The label name could be *Contracts* as an example here or any other nomenclature that resonates within your business.

## Label Policy
Our next step is to create a retention label policy called *Multi-Stage Multi-Geo Policy* publishing label *Multi-Stage Multi-Geo Label*. The published label covers one exchange mailbox, one SharePoint site and two user OneDrive locations.

<figure>
    <img src="../../img/ms6.png"/> 
    <figcaption>Figure 6: Auto-applied label settings.</figcaption>
</figure>

We configured the policy to apply to **Randall Testuser’s** email, a SharePoint site used by **Randall Testuser** in Germany for SOWs, and to include both **Randall Testuser’s** + **MIG Admin’s** OneDrive locations.

## Email Notifications

Next we move to configuring the email notifications once items are ready for disposal. In addition to the default message we are adding instructions for **Randall Testuser** on expiring SOW contracts in Germany along with instructions for California expiring SOW contracts.

Notice the first line is in German (**Please verify all SOWs conform to BaFIN regulations.**) and the second line is in English.

<figure>
    <img src="../../img/ms7.png"/> 
    <figcaption>Figure 7: Customize message for email notification.</figcaption>
</figure>

Once an item is up for disposition, the persons or security group added to the first stage are sent one mail per day per label similar to the email shown below. 

<figure>
    <img src="../../img/ms8.png"/> 
    <figcaption>Figure 8: Email notification from O365 Security & Compliance Center.</figcaption>
</figure>

## Stage 1 Disposition

Next, we navigate to the Microsoft 365 Compliance Center (MCC) to review items for disposition for **Randall Testuser** notified above in email. We see the items ready for disposition that are assigned to **Randall Testuser** as the approver or assigned *disposition reviewer* for the first stage named <span style="color:blue">Germany SOW</span>. The reviewer can now see items for all multi-geo locations for the respective label.

<figure>
    <img src="../../img/ms9-1.png"/> 
    <figcaption>Figure 9: Stage 1 disposition view.</figcaption>
</figure>

Compared to the view of record manager role, one can see that **Randall Testuser** has <span style="color:red">17</span> items under the *Multi-Stage Multi-Geo Label* (shown in Figure 9) and **MIG Admin** shows <span style="color:red">18</span> items including one item in the second stage called <span style="color:blue">Europe SOW Approval</span> (shown in Figure 10).

<figure>
    <img src="../../img/ms10-1.png"/> 
    <figcaption>Figure 10: Stage 1 and Stage 2 disposition view.</figcaption>
</figure>

**Randall Testuser** will follow guidance to **Approve** the disposition,  **Relabel**, **Extend** or **Add** additional Reviewers to each item. Once approving an item for disposition, it will flow the second stage.

<figure>
    <img src="../../img/ms11.png"/> 
    <figcaption>Figure 11: Item view actions avaialable.</figcaption>
</figure>

As **Randall Testuser** clicks on an item, he can quickly see the context to make an informed decision.

<figure>
    <img src="../../img/ms12.png"/> 
    <figcaption>Figure 12: Context view of item.</figcaption>
</figure>

## Stage 2 Disposition
Once clicking **Approve** the item then moves to stage 2 called <span style="color:blue">Europe SOW Approval</span> and **Joanna Hackett** is notified via email to then review items for disposition in the second stage.

<figure>
    <img src="../../img/ms13-1.png"/> 
    <figcaption>Figure 13: Stage 2 view of item.</figcaption>
</figure>

**Joanna Hackett** approves items and adds her comments for the disposition action as seen in *Figure 14* history pane.

<figure>
    <img src="../../img/ms14.png"/> 
    <figcaption>Figure 14: History of actions and comments.</figcaption>
</figure>

## Stage 3 Disposition
Lastly the item follows the flow to the final stage for **MIG Admin** our records administrator to approve the disposition. <span style="color:red">Before doing so, an email was sent out by legal stating all contracts from Germany need to be immutable with a 55 year retention hold</span> per new regulation guidance that came out in the last week. **MIG Admin** then adds **Nancy Liang** from legal to the review process.
### Adding additional reviewers
<figure>
    <img src="../../img/ms15.png"/> 
    <figcaption>Figure 15: Adding legal reviwer and comments.</figcaption>
</figure>

### Relabeling
**Nancy Liang** follows the same steps after receiving an email to review the item for disposition. She will then **Relabel** the item as a regulatory record *Multi-Stage Multi-Geo Regulatory Label* that has a retention record of 55 years.

<figure>
    <img src="../../img/ms16.png"/> 
    <figcaption>Figure 16: Regulatory label summary with retention duration</figcaption>
</figure>

*Figure 16* shows the settings of the regulatory label and *Figure 17* shows the relabeling with comments.

<figure>
    <img src="../../img/ms17.png"/> 
    <figcaption>Figure 17: Relabel action and comments</figcaption>
</figure>

On behalf of the MIG/RM PM team, we would like to recognize the contributions of the following persons to this post:

Joanne Klein - Microsoft MVP

Brendon Lee - Extended Compliance CXE