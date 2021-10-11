# Best practices for creating MIP and DLP policies - or "Better together"

## TL;DR
You should **not** design the DLP policy and the labeling policy **independently** and at different times. There are many significant advantages to doing both in concert. 

## Introduction
When you start your MIP and DLP journey, you often think it would be best to start with either and then, when policy is in place, plan the other. 
Here is where you got it all wrong! 
By planning both policies together, you can achieve more. 

## Reason 1
Designing a labeling taxonomy with DLP in mind increases the granularity of the protection you can get from labels. We heard of customers that are fearful of having data exposed by default, so they want to use a label with protection (encryption) as their default label, user experience be dammed. Since the alternative for the default label is to use one without protection, they see no good alternative. Including DLP in the design means you can set a label without encryption but still with “protection”. E.g., you can have Confidential and HC labels using encryption, and public/personal without encryption, but the default label can be “Internal” enforced to stay that way by DLP, preventing accidental sharing and forwarding unless the user explicitly selects another label (e.g., External). This provides the user experience benefits of a label without encryption while providing effective protection against the most common mistakes. 

## Reason 2
Incorporating your labels in the design of DLP rules allows you for much better handling of exceptions. Let’s say you have a rule that blocks sharing of PII with the outside world. One team tries to share such content with their partners and is blocked. After some escalation they convince you to grant them an exception, which now must be encoded in the DLP rule. With each such exception the DLP rule becomes more complicated and less legible, increasing risk of mistakes. And then one day one of these users accidentally forwards an email full of PII to a random person and all your DLP work was for nothing. With labels added to DLP rules you can have a “PII Special Sharing Exception” label, which is exempted from the DLP rule up to a certain amount of PII. In the same situation instead of complicating the DLP rules with each exception you add *one* exception to the policy for that label, and then you add the group in question to the scope of the label. This is easier to manage and more scalable, and it also means that accidents like the one above won’t happen since the user has to select the label explicitly and proactively when they need to share such content with such partners. If this is not enough, you can also add encryption to the label with only specific domains allowed as recipients. 

## Reason 3
Aligning auto labeling with DLP policies gives you visibility into the sensitive data affected by those DLP policies before users even think of sharing it, and better visibility to the user of what they are dealing with and the controls in place for that data. Essentially, DLP will give IT and the users that information when it’s being shared, labeling will do the same the minute the data is created. And of course, if the auto labeling rule applies encryption it will also provide controls while the data is inside the org, limiting oversharing and ensuring that even after the data is shared (by exception or through some loophole) it is still protected from unintended access. 

## Reason 4
Defense in depth: errors happen, either by users or admins. Duplicating your DLP rules as auto labeling rules means that problems with DLP enforcement (specific to one rule or general), the data was protected from the time of creation, so the risk is strongly mitigated. And of course, the reverse is also true: if labeling is not functional when the data is being created or edited, DLP will still protect the content at time of sharing, so either way you are covered. 

## Conclusion
To summarize, plan both policies together, make sure they complement each other. That will help you protect your organization’s data and reduce risks. 


