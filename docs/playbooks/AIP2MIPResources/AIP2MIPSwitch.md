# Disabling the AIP add-in for Office to enable the use of buuilt-in sensitivity labels in Office

In versions of Office for Windows earlier than 16.0.15716.0, the AIP plugin will be loaded if installed unless special configurations are deployed to change this behavior. Starting with Office version 16.0.15716.0, in the absence of special configurations, Office will use the built-in sensitivity labeling UI even if the AIP plugin is installed. If the AIP client is not installed on a device, the built-in sensitivity labeling UI will be shown unless explicitly disabled by policy.

There are three configuration elements that control whether the AIP plugin is loaded and shown in Office applications if installed, or the built-in sensitivity label user interface is displayed and used. These three configurations are:

- The add-in load controls in the Windows registry for the plugin corresponding to each Office application. The Office add-in load controls are documented [here](https://learn.microsoft.com/en-US/microsoft-365/troubleshoot/group-policy/office-add-in-not-loaded). The identifiers for each of the addins to use as per the guidance in the document linked above are as follows:

 | **Application** | **ProgID** |
 | --- | --- |
 | Word | MSIP.WordAddin |
 | Excel | MSIP.ExcelAddin |
 | PowerPoint | MSIP.PowerPointAddin |
 | Outlook | MSIP.OutlookAddin |

- The value "UseOfficeForLabelling" (dword) under the [HKEY\_CURRENT\_USER\Software\Microsoft\Office\16.0\Common\Security\Labels] registry key in computers running Office for Windows versions lower than 16.0.15716.0. Setting this value to 1 disables the plugin in all Office applications and enables built-in labeling. Setting it to 0 disables built-in labeling and loads the plugin if installed. This setting has no effect on versions of Office 16.0.15716.0 or greater.
- The value "AIPException" (dword) under [HKEY\_CURRENT\_USER\Software\Microsoft\Office\16.0\Common\Security\Labels] registry key in computers running Office for Windows versions 16.0.15716.0 or greater. Setting this value to 1 forces load of the AIP plugin while disabling the built-in labeling UI if the plugin is installed. Setting it to 0 or not configuring it disables built-in labeling and loads the plugin if installed. This setting has no effect on versions of Office lower than 16.0.15716.0.

Please note that all the settings above can be deployed via GPO.

The following table summarizes how these settings interact to define the label UI that's active in Office applications when the AIP plugin is installed.

| **AIP plugin installed​** | **Settings​ (as described above)** | **Label Experience​** | **Explanation of behavior** |
| --- | --- | --- | --- |
 | UseOfficeforLabelling​ | AIPException​ | Office Version \< ​16.0.15716 | Office version 16.0.15716 or greater​ |
 |
| No, or add-in loading is disabled | 0​ | Any | No labeling UI​ | No labeling UI​ | No change in behavior. No sensitivity labeling experience |
| No, or add-in loading is disabled | 1​ | Any | Built-in labeling​ | Built-in labeling​ | No change in behavior. Built-in labeling is _explicitly_ enabled and behavior doesn't change. |
| No, or add-in loading is disabled | Not set​ | Any | Built-in labeling​ | Built-in labeling​ | No change in behavior. Built-in labeling is _implicitly_ enabled in the absence of any setting or the AIP plugin. |
|
| |
|
| |
| Yes​ | 0​ | 0 or not set​ | AIP​ | No labeling UI​ | New behavior. User loses all labeling experience after update to version 16.0.15716. To keep AIP UI you must configure the AIPException setting.​ |
| Yes​ | 0​ | 1​ | AIP​ | AIP​ | New behavior. AIP is _explicitly_ configured to load by the AIPException setting.​ |
|
| |
|
| |
| Yes​ | 1​ | Any | Built-in labeling​ | Built-in labeling​ | No change in behavior. Built-in labels are ​enabled in all versions of Office. |
|
| |
|
| |
| Yes​ | Not set​ | 0 or not set​ | AIP​ | Built-in labeling​ | New behavior. In the absence of overriding settings, versions of Office earlier than 16.0.15716 load the AIP client if installed, and later versions ignore the plugin and show the built-in labeling UI. ​ |
| Yes​ | Null​ | 1​ | AIP​ | AIP​ | New behavior. AIP client is forced to load in newer Office clients by configuring the AIPException setting. ​ |

For additional information on disabling the AIP Plugin for Office and enabling built-in sensitivity labeling see [How to disable the AIP add-in to use built-in labeling for Office apps](https://learn.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-aip?view=o365-worldwide#how-to-disable-the-aip-add-in-to-use-built-in-labeling-for-office-apps) in the public documentation for sensitivity labels.
