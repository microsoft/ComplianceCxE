---
layout: dag
title: CM DAG
intro: Compliance Manager DAG
---

*Last updated: 05/07/2021*

Compliance Manger is an end to end information compliance management solution in the [Microsoft 365 compliance center](https://docs.microsoft.com/en-us/microsoft-365/compliance/microsoft-365-compliance-center?view=o365-worldwide) that helps you understand your organization's compliance posture. Compliance Manager uses the inventory of data protection risk allowing you to manage the complexities of controls, adhering to regulations and certifications long with reporting needed for auditors.

## Overview

Using Compliance Manager allows your organization to simplify compliance and start reducing the risk by completing the pre-built assessments targeting industries, standards, regulations or leveraging a custom assessment created by you. In addition to the assessments in the dashboard, this tool provides step-by-step guidance on open actions and by displaying a score for measuring compliance posture. The tool focuses on identifying gaps and controls needing updated and directs you how to improve these items drawing elements from NIST CSF (National Institute of Standards and Technology Cybersecurity Framework) and ISO (International Organization for Standardization), as well as from FedRAMP (Federal Risk and Authorization Management Program) and GDPR (General Data Protection Regulation of the European Union).

With Compliance Manager you can:

* You can get and run Pre-built assessments for common industry and regional standards and regulations, or custom assessments to meet your unique compliance needs.

* Compliance Manager provides you built in workflow capabilities to help you efficiently complete your risk assessments through a single tool.

* Issues flagged provide you detailed step-by-step guidance on suggested improvement actions to help you comply with the standards and regulations that are most relevant for your organization. 

* Compliance Manager Provides you an overall risk-based compliance score to help you understand your compliance posture by measuring your progress in completing improvement actions.

## Best Practices

* Updates to an action propagate tenant wide. Our recommendation is to accept the updates to have the latest guidance and improvement actions to meet a requirement.

* Global administrator will need to setup permission to use Compliance Manager. Roles are based on RBAC which grant the rights needed for different actions. Only users that are global admins or Compliance Manager Admins can create and modify an assessment. The person holding the global admin role for your organization can set user permissions in the Microsoft 365 compliance center, as well as in Azure Active Directory (Azure AD). Customers in US Government Community (GCC) High environments can only set user permissions and roles for Compliance Manager in Azure AD

* Using Compliance Manger is not a check mark or a guarantee if the recommendations are followed your organization is compliant. 

* Use correctly formatted Excel files when working with Compliance Manager to prevent errors with the import process.

* Export any existing assessment before deleting it in case you need to add it back through the import process again.

* If you reassign an action that has a pending update, the direct link to the action in the reassignment email will break if the update is accepted after reassignment. You can fix this by re-assigning the action to the user after the update is accepted.

## Considerations

* Compliance Manager leverages key elements in its management of activities. We recommend understanding of controls, risk assessments, grouping the controls into an assessment, deploying the built-in assessments or modify to create a custom assessment along with how to monitor the progress of the each. Use the Compliance Manager quickstart to follow guidance on what items to do first while directing through steps to use the tool to its fullest.

* Compliance Manager auto scans the environment to update technical action status with the dashboard updating every 24hours. If you implement a control for example, you see the update the following day.

## Helpful Resources

* When you open Compliance Manager for the first time you will see a baseline score for your organization. For further details on your score, review how your compliance score is calculated.

* Review the FAQ for Compliance Manager answer a question you might have about using Compliance Score in the past and how it is part of Compliance Manager solution.


