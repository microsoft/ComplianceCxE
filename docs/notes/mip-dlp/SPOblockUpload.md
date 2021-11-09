# Alerting/blocking for mismatched sensitive docs to SPO site 

## Business objective: Protect against the risk of documents labeled for higher sensitivity purposes being added to SharePoint sites labeled with a lower sensitivity

This can be achieved by using an API to read sensitivity labels on documents and on sites, and then using it from Power Automate that will look at the document sensitivity and will either warn or move that document to another folder until the issue is resolved. 
<br></br>
<b>Note:</b>  The main limitation with this approach is that you can’t configure Power Automate to monitor all sites, so you would have to explicitly add an entry point for each site you want to monitor. 


<p align = "center">
<img src = "https://microsoft.github.io/ComplianceCxE/notes/img/SPOdmeo.jpg">
</p>
<p align = "center"><b> <i>
Figure 1: Power Automate flow
  </i></b></p>

<br></br>

You can also choose to move the uploaded file to a different (secured) folder

<p align = "center">
<img src = "https://microsoft.github.io/ComplianceCxE/notes/img/FlowRename.jpg">
</p>
<p align = "center"><b> <i>
Figure 2: moving the file to a different folder
  </i></b></p>
  
  <br></br>
 [Click here to see a short video that demos the process](https://microsoft.github.io/ComplianceCxE/notes/img/FlowDemo.mp4)


<br></br>
Thank you!
