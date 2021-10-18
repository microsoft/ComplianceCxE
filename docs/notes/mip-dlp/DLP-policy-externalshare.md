# Preventing and educating users from sharing sensitive documents externally

## Overview    
This short note is to help organizations build a policy to help educate their information workers to apply the right label when sharing files externally.

This is done by building a DLP policy to block sharing of files with Internal label and notify the user that they need to change the label before they can share this. This could be combined and scoped to only sites that allow for external sharing. 

The DLP Policy would be scoped to SharePoint and OneDrive workloads. Note this screen capture is scoped to all but you could narrow this if needed. 

<p align = "center">
<img src = "https://microsoft.github.io/ComplianceCxE/notes/img/DLPpolicy1.png">
</p>
<p align = "center"><b> <i>
Figure 1: DLP policy locations picker
  </i></b></p>

<br></br>
<br></br>

The condition would be to look for a sensitivity label example Internal and shared externally:

<p align = "center">
<img src = "https://microsoft.github.io/ComplianceCxE/notes/img/DLPpolicy2.png">
</p>
<p align = "center"><b> <i>
Figure 2: DLP policy conditions
  </i></b></p>


<br></br>
<br></br>
The action you would take is block this: 

<p align = "center">
<img src = "https://microsoft.github.io/ComplianceCxE/notes/img/DLPpolicy3.png">
</p>
<p align = "center"><b> <i>
Figure 3: DLP policy conditions
  </i></b></p>

<br></br>
<br></br>
Then, the best practice is to notify the end user with a custom message to let them know to change the label. 

<p align = "center">
<img src = "https://microsoft.github.io/ComplianceCxE/notes/img/DLPpolicy4.png">
</p>
<p align = "center"><b> <i>
Figure 4: DLP policy conditions
  </i></b></p>


<br></br>
<br></br>


We hope you found this helpful 😊

Thank you!
