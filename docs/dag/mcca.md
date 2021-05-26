---
layout: dag
title: MCCA DAG
intro: Microsoft Compliance Configuration Analyzer (MCCA) DAG
---

*Last updated: 05/07/2021*

Where does one start today with regards to being compliant with various standards and assessments? There are often multiple steps you need to take to safeguard your compliance posture. Often, you want to know if there is a starting point or recommended best practices as you get started on your journey of managing compliance requirements. Questions you may ask yourself are: ‘How do I diagnose my compliance posture or ensure that I have the right configurations in place to protect my environment completely. These are largely manual processes which tend to be time consuming & allow for human error. Furthermore, with the evolving compliance landscape the risk of blind spots also increases along with compliance requirements needing to be changed or updated; the latest information will be included with MCCA tool without the need to update manually.

<figure>
    <img src="..\images\mcca-fig1.jpg"/>
    <figcaption>Figure 1: Actionable Status Report</figcaption>
</figure>

Microsoft Compliance Configuration Analyzer (MCCA) is a diagnostic tool (seen in Figure 1 above) which generates a report to help M365 customers understand their current consumption of E5 compliance offerings. It surfaces improvement areas in a tenant’s compliance configurations in achieving data protection guidelines and recommends best practices to follow. This tool can help you quickly see which improvement actions in Compliance Manger apply to your current Microsoft 365 environment.

It is a PowerShell-based utility that will fetch your tenant’s current configurations & validate these configurations against Microsoft 365 recommended best practices. These best practices are based on a set of controls that include key regulations and standards for data protection and general data governance.

MCCA was built with the goals of helping you extract maximum value out of compliance offerings part of your M365 E5 licenses by creating awareness to your consumption of M365 compliance offerings. 

Today, MCCA will provide you recommendations for 8 Compliance solutions. We will keep adding more solutions & richer recommendations in future versions of this tool.

* [Microsoft Information Protection](../mip-dlp/#microsoft-information-protection)
* [Data Loss Prevention](../mip-dlp/#data-loss-prevention)
* [Microsoft Information Governance](../mig-rm/#microsoft-information-governance)
* [Records Management](../mig-rm/#records-management)
* [Insider Risk Management](../ir-cc/#insider-risk-management)
* [Communication Compliance](../ir-cc/#communication-compliance)
* [Advanced Audit](../aed-audit/#advanced-audit)
* [Advanced eDiscovery](../aed-audit/#advanced-ediscovery)

Use the [GitHub](https://github.com/OfficeDev/MCCA) link to download the tool and follow instructions for how to install, run and configure the tool for the about eight solutions. Also, you can download and install the PowerShell module for MCCA from the [PowerShell Gallery](https://www.powershellgallery.com/packages/MCCAPreview/1.3).

With MCCA you can:

* Quickly and automatically fetch your tenant’s current configurations & validate these configurations against Microsoft 365 recommended best practices. 

* Quickly diagnose your compliance posture & ensure that they have the right configurations in place to protect their environment completely. 

* Reports allow you to focus efforts more on making the right configurations.

## Best Practices

* The reporting is based on the geolocations in your tenant as it accesses the SITs for each location to generate a report. We suggest running it for all geolocations and then using the correct input parameter to change location if need be.

* Our recommendation is to download via PowerShell Gallery because it has less steps and is hassle-free. Using the GitHub repo will need to be cloned & the module needs to load into PowerShell. We suggest this method for more advanced users and/or contributors who know have deeper experience with PowerShell.

## Considerations

* The MCCA report can be generated in its entirety by users with Global Admin or Global Reader privileges. Other roles within the organisation may not be able to run the tool or they may be able to run the tool with limited information in the final report.

## Helpful Resources

* Review the [FAQ section](https://github.com/OfficeDev/MCCA) for MCCA tool to answer a question you might have about making changes, reviewing reports, or what status indicates for each solution.

