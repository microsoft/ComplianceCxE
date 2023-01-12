
       
## What is Migration Assistant for Microsoft DLP?

The Migration Assistant for Microsoft DLP tool is a Windows based desktop application that will migrate your DLP policies from other DLP platforms to our Unified DLP platform. 
Our tool takes you through a simple five-step migration process. It accepts Symantec DLP policy XML exports, performs mapping, and creates equivalent Unified DLP policies through PowerShell scripts.
You can safely use the tool to create DLP policies in test mode, which does not affect your live data or interact with current environment. 

## Migration tasks that Migration Assistant for Microsoft DLP performs are :

This takes over many of the difficult or tedious tasks involved in a DLP migration project:

* In traditional migration scenario, you need to perform feasibility analysis between source & target DLP platforms, map features, migrate policies manually, and test and tweak DLP policies. Your migrated DLP policies can be up and running within minutes of starting the M365 DMA process.

* With this, you can scale up your migration project quickly from moving a single policy manually to multiple policies at the same time.

* This automatically identifies Sensitive Information Types (SITs) or Data Identifiers in source policies and creates Custom SITs in your Microsoft tenant moving over all your custom regular expressions and keywords in a few clicks.

* This detects which conditions, exclusions & actions are currently being used in source policies and automatically creates new rules with the same conditions, exclusions & actions.

* This provides you with a detailed migration report with policy wise migration status and recommendations.

* This ensures that your DLP policy migration project is completely private and takes place within the boundaries of your organization.

* This supports policy migration from Symantec Data Loss Prevention 15.7 or earlier.

### How does this works?

![image](https://user-images.githubusercontent.com/52564314/138813155-645a8179-ec31-4f7c-ba71-81f921715642.png)

During a given instance of migration, the M365 DLP Migration Assistant works in **five** phases:

1. **Input**: This ingests one or more Symantec DLP policy XML files.

1. **Analyze**: This interprets the files & identifies Symantec DLP policy constructs.

1. **Rationalize**: This maps the identified Symantec DLP policy constructs to Unified DLP capabilities. It performs validations for Unified DLP platform limitations.

1. **Migrate**: This executes PowerShell scripts for the DLP scenarios identified & supported by the UDLP platform.

1. **Reporting**: This provides the user with a detailed migration report about which policies were migrated successfully, partially and/or not migrated. It also provides recommendations to improve the migration fidelity further.

## Download Process & Documentation (Public Preview)

Use the [GitHub](https://aka.ms/DLPMigrationAssistant) to download the tool and follow instructions for how to install, run and configure the tool.
The [documentation](https://aka.ms/DLPMigrationAssistantDocs) is here.
The [blog](https://aka.ms/DLPMigrationAssistantBlog) is here.

## Provide Feedback & Report Bugs

Please report errors, share feedback & any feature requests with us by opening a new issue in this [Github repository](https://github.com/OfficeDev/MAMD/issues).
