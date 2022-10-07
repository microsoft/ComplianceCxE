# Disabling the AIP add-in for Office to enable the use of buuilt-in sensitivity labels in Office

In versions of Office for Windows earlier than 16.0.15716.0, the AIP plugin will be loaded if installed unless special configurations are deployed to change this behavior. Starting with Office version 16.0.15716.0, in the absence of special configurations, Office will use the built-in sensitivity labeling UI even if the AIP plugin is installed. If the AIP client is not installed on a device, the built-in sensitivity labeling UI will be shown unless explicitly disabled by policy.

There are three configuration elements that control whether the AIP plugin is loaded and shown in Office applications if installed, or the built-in sensitivity label user interface is displayed and used. These three configurations are:

- The value "UseOfficeForLabelling" (dword) under the [HKEY\_CURRENT\_USER\Software\Microsoft\Office\16.0\Common\Security\Labels] registry key in computers running Office for Windows versions lower than 16.0.15716.0. Setting this value to 1 disables the plugin in all Office applications and enables built-in labeling. Setting it to 0 disables built-in labeling and loads the plugin if installed. This setting has no effect on versions of Office 16.0.15716.0 or greater.
- The value "AIPException" (dword) under [HKEY\_CURRENT\_USER\Software\Microsoft\Office\16.0\Common\Security\Labels] registry key in computers running Office for Windows versions 16.0.15716.0 or greater. Setting this value to 1 forces load of the AIP plugin while disabling the built-in labeling UI if the plugin is installed. Setting it to 0 or not configuring it disables built-in labeling and loads the plugin if installed. This setting has no effect on versions of Office lower than 16.0.15716.0.
- The add-in load controls in the Windows registry for the plugin corresponding to each Office application. The Office add-in load controls are documented [here](https://learn.microsoft.com/en-US/microsoft-365/troubleshoot/group-policy/office-add-in-not-loaded). Identifiers for each of the addins to use as per the guidance in the document linked above are as follows:

 | **Application** | **ProgID** |
 | --- | --- |
 | Word | MSIP.WordAddin |
 | Excel | MSIP.ExcelAddin |
 | PowerPoint | MSIP.PowerPointAddin |
 | Outlook | MSIP.OutlookAddin |

Please note that all the settings above can be deployed via GPO.

The following table summarizes how these settings interact to define the label UI that's active in Office applications when the AIP plugin is installed.

<table cellspacing="0" class="Table" style="border-collapse:collapse; width:612px">
	<tbody>
		<tr>
			<td style="background-color:#000000; border-bottom:#f2f2f2; border-left:white; border-right:#d2d2d2; border-top:white; height:20px; width:68px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:white">AIP plugin installed</span></span></span></strong><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:white">​</span></span></span></strong></span></span></p>
			</td>
			<td colspan="2" style="background-color:#000000; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:1px solid white; height:20px; width:208px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:white">Settings​ (as described above)</span></span></span></strong></span></span></p>
			</td>
			<td colspan="2" style="background-color:#000000; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:1px solid white; height:38px; width:131px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:white">Label Experience</span></span></span></strong><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:white">​</span></span></span></strong></span></span></p>
			</td>
			<td style="background-color:#000000; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid white; border-top:1px solid white; height:38px; width:205px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:white">Explanation of behavior</span></span></span></strong></span></span></p>
			</td>
		</tr>
		<tr>
			<td style="border-bottom:1px solid #f2f2f2; border-left:1px solid white; border-right:1px solid #d2d2d2; border-top:none; height:28px; vertical-align:top; width:68px">
			<p style="text-align:center">&nbsp;</p>
			</td>
			<td style="border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid black; border-top:none; height:28px; vertical-align:top; width:128px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">UseOfficeforLabelling​</span></span></span></span></span></p>
			</td>
			<td style="border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:28px; vertical-align:top; width:80px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">AIPException​</span></span></span></span></span></p>
			</td>
			<td style="border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid white; border-top:none; height:28px; vertical-align:top; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Office Version &lt; ​16.0.15716</span></span></span></span></span></p>
			</td>
			<td style="border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:28px; vertical-align:top; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Office version 16.0.15716 or greater​</span></span></span></span></span></p>
			</td>
			<td style="border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid white; border-top:none; height:28px; vertical-align:top; width:205px">&nbsp;</td>
		</tr>
		<tr>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:1px solid white; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:68px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">No, or add-in loading is disabled</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:128px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">0​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:80px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Any</span></span></span></span></span></p>
			</td>
			<td style="background-color:#f2f2f2; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">No labeling UI​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">No labeling UI​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:205px">
			<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#0078d4">No change in behavior</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">. No sensitivity labeling experience</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:1px solid white; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:68px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">No, or add-in loading is disabled</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:128px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">1​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:80px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Any</span></span></span></span></span></p>
			</td>
			<td style="background-color:#f2f2f2; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Built-in labeling​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Built-in labeling​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:205px">
			<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#0078d4">No change in behavior</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">. Built-in labeling is&nbsp;<em>explicitly</em>&nbsp;enabled and behavior doesn&rsquo;t change.</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:1px solid white; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:68px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">No, or add-in loading is disabled</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:128px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Not set​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:80px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Any</span></span></span></span></span></p>
			</td>
			<td style="background-color:#f2f2f2; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Built-in labeling​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Built-in labeling​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:205px">
			<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#0078d4">No change in behavior</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">. Built-in labeling is&nbsp;<em>implicitly</em>&nbsp;enabled in the absence of any setting or the AIP plugin.</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:1px solid white; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:68px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">Yes</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:128px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">0</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:80px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">0 or not set</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:#f2f2f2; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">AIP​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">No labeling UI​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:205px">
			<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">New behavior. User loses all labeling experience after update to version 16.0.15716. To keep AIP UI you must configure the AIPException setting.</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:1px solid white; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:68px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">Yes</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:128px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">0</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:80px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">1</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:#f2f2f2; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">AIP​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">AIP​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:205px">
			<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">New behavior. AIP is&nbsp;<em>explicitly</em>&nbsp;configured to load by the AIPException setting.</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:1px solid white; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:68px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">Yes</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:128px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">1​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:80px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Any</span></span></span></span></span></p>
			</td>
			<td style="background-color:#f2f2f2; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Built-in labeling​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Built-in labeling​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:4px solid #0078d4; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:205px">
			<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#0078d4">No change in behavior</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">. Built-in labels are </span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​enabled in all versions of Office.</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:1px solid white; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:68px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">Yes</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:128px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">Not set</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:80px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">0 or not set</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:#f2f2f2; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">AIP​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">Built-in labeling​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:205px">
			<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">New behavior. In the absence of overriding settings, versions of Office earlier than 16.0.15716 load the AIP client if installed, and later versions ignore the plugin and show the built-in labeling UI</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">. ​</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:1px solid white; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:68px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">Yes</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:128px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">Null</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:80px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">1</span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
			<td style="background-color:#f2f2f2; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">AIP​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #d2d2d2; border-top:none; height:.5in; width:65px">
			<p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">AIP​</span></span></span></span></span></p>
			</td>
			<td style="background-color:white; border-bottom:1px solid #f2f2f2; border-left:none; border-right:1px solid #f2f2f2; border-top:none; height:.5in; width:205px">
			<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:#d83b01">New behavior. AIP client is forced to load in newer Office clients by configuring the AIPException setting. </span></span></span><span style="font-size:10.0pt"><span style="font-family:&quot;Segoe UI&quot;,sans-serif"><span style="color:black">​</span></span></span></span></span></p>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>


For additional information on disabling the AIP Plugin for Office and enabling built-in sensitivity labeling see [How to disable the AIP add-in to use built-in labeling for Office apps](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip?view=o365-worldwide#how-to-disable-the-aip-add-in-to-use-built-in-labeling-for-office-apps) in the public documentation for sensitivity labels.
