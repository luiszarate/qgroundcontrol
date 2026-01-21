# QGroundControl User Guide

**Versión**: 2026-01-21

---

## Tabla de Contenidos

- QGroundControl Guide (Daily Builds)
- QGroundControl Quick Start
- Download and Install
- Support
- Fly View
- Fly View Toolbar
- Fly Tools
- Instrument Panel
- Fly View
- Camera Tools
- Video
- Video Overlay
- Replay Flight Data
- Custom Mavlink Action
- 3D View
- Plan View
- Plan View - GeoFence
- Plan View - Rally Points
- Pattern
- Survey (Plan Pattern)
- Structure Scan (Plan Pattern)
- Corridor Scan (Plan Pattern)
- Fixed Wing Landing Pattern (Plan Pattern)
- Plan View - Pattern Presets
- Setup View
- Loading Firmware
- Airframe Setup
- Airframe Setup (ArduPilot)
- Airframe Setup (PX4)
- Radio Setup
- Sensors
- Sensor Setup (ArduPilot)
- Sensor Setup (PX4)
- Flight Modes Setup
- ArduPilot Flight Mode Setup
- PX4 Flight Modes Setup
- Power Setup
- Motor Setup
- Motors Setup (ArduSub)
- Safety Setup
- Safety Setup (ArduPilot)
- Tuning Setup
- Tuning (ArduPilot)
- ArduCopter Tuning
- ArduSub Tuning
- Tuning (PX4)
- Camera Setup
- Joystick Setup
- Parameters
- Settings View
- General Settings (Settings View)
- CSV Logging
- Offline Maps
- MAVLink Settings
- Console Logging
- Virtual Joystick
- Analyze View
- Log Download (Analyze View)
- GeoTag Images (Analyze View)
- MAVLink Console (Analyze View)
- MAVLink Inspector
- Releases
- Release Notes
- QGC v4 Release Notes
- QGC v3 Release Notes
- Daily Builds
- Daily Build Major Changes
- Privacy Policy
- index
- Troubleshooting QGC Setup
- Troubleshooting QGC Usage
- Vehicle Connection Problems
- Parameter Download failures
- Mission Upload/Download failures
- Resume Mission Failures

---



<div style="page-break-after: always;"></div>

# QGroundControl Guide (Daily Builds)

[![Discuss](https://img.shields.io/badge/discuss-px4-ff69b4.svg)](http://discuss.px4.io/c/qgroundcontrol/qgroundcontrol-usage)
[![Discuss](https://img.shields.io/badge/discuss-ardupilot-ff69b4.svg)](http://discuss.ardupilot.org/c/ground-control-software/qgroundcontrol)

_QGroundControl_ provides full flight control and vehicle setup for PX4 or ArduPilot powered vehicles.
It provides easy and straightforward usage for beginners, while still delivering high end feature support for experienced users.

**Key Features:**

- Full setup/configuration of ArduPilot and PX4 Pro powered vehicles.
- Flight support for vehicles running PX4 and ArduPilot (or any other autopilot that communicates using the MAVLink protocol).
- Mission planning for autonomous flight.
- Flight map display showing vehicle position, flight track, waypoints and vehicle instruments.
- 3D viewer visualizing the 3D map of the environment (.osm file), the 3D model of the vehicle (only multi-rotors for the moment), and the mission 3D trajectory (including the waypoints).
- Video streaming with instrument display overlays.
- Support for managing multiple vehicles.
- QGC runs on Windows, OS X, Linux platforms, iOS and Android devices.

![](file:///home/user/qgroundcontrol/docs/assets/quickstart/connected_vehicle.jpg)

::: info
This guide is an active work in progress.
The information provided should be correct, but you may find missing information or incomplete pages.
:::

::: tip
Information about _QGroundControl_ development, architecture, contributing, and translating can be found in the [Developer Guide](../qgc-dev-guide/index.md) section.
:::



<div style="page-break-after: always;"></div>

# QGroundControl Quick Start

Getting _QGroundControl_ up and running is quick and easy:

1. [Download and install (Daily 5.0)](../releases/daily_builds.md) the application.
1. Start _QGroundControl_.
1. Attach your vehicle to the ground station device via USB, through a telemetry radio, or over WiFi. _QGroundControl_ should detect your vehicle and connect to it automatically.

That's it! If the vehicle is ready to fly, _QGroundControl_ should display [Fly View](../fly_view/fly_view.md) as shown below (otherwise it will open [Setup View](../setup_view/setup_view.md)).

![](file:///home/user/qgroundcontrol/docs/assets/quickstart/fly_view_connected_vehicle.jpg)

A good way to become familiar with _QGroundControl_ is to start experimenting:

- Use the View Selector to switch between main views:
  - Plan Flight
  - Analyze Tools
  - Vehicle Configuration
  - Application Settings
- Click the _Status Indicators_ on the toolbar to find out the status of the connected vehicle.

While the UI is fairly intuitive, this documentation can also be referenced to find out more.

::: info
Make sure QGC has an internet connection when you connect a new vehicle in order to display map content.
:::



<div style="page-break-after: always;"></div>

# Download and Install

The sections below can be used to download the [current stable release](../releases/release_notes.md) of _QGroundControl_ for each platform.

:::tip
See [Troubleshooting QGC Setup](../troubleshooting/qgc_setup.md) if _QGroundControl_ doesn't start and run properly after installation!
:::

## System Requirements

QGC should run well on any modern computer or mobile device. Performance will depend on the system environment, 3rd party applications, and available system resources.
More capable hardware will provide a better experience.
A computer with at least 8Gb RAM, an SSD, Nvidia or AMD graphics and an i5 or better CPU will be suitable for most applications.

For the best experience and compatibility, we recommend you the newest version of your operating system.

## Windows {#windows}

Supported versions: Windows 10 (1809 or later), Windows 11:

1. Download [QGroundControl-installer.exe](https://d176tv9ibo4jno.cloudfront.net/latest/QGroundControl-installer.exe).
1. Double click the executable to launch the installer.

::: info
The Windows installer creates 3 shortcuts: **QGroundControl**, **GPU Compatibility Mode**, **GPU Safe Mode**.
Use the first shortcut unless you experience startup or video rendering issues.
For more information see [Troubleshooting QGC Setup > Windows: UI Rendering/Video Driver Issues](../troubleshooting/qgc_setup.md#opengl_troubleshooting).
:::

## Mac OS {#macOS}

Supported versions: macOS 12 (Monterey) or later:

<!-- match version using https://docs.qgroundcontrol.com/master/en/qgc-dev-guide/getting_started/#native-builds -->
<!-- usually based on Qt macOS dependency -->

1. Download [QGroundControl.dmg](https://d176tv9ibo4jno.cloudfront.net/latest/QGroundControl.dmg).
1. Double-click the .dmg file to mount it, then drag the _QGroundControl_ application to your _Application_ folder.

::: info
QGroundControl continues to not be signed. You will not to allow permission for it to install based on your macOS version.
:::

## Ubuntu Linux {#ubuntu}

Supported versions: Ubuntu 22.04, 24.04:

Ubuntu comes with a serial modem manager that interferes with any robotics related use of a serial port (or USB serial).
Before installing _QGroundControl_ you should remove the modem manager and grant yourself permissions to access the serial port.
You also need to install _GStreamer_ in order to support video streaming.

**Before installing _QGroundControl_ for the first time:**

1. Enable serial-port access
Add your user to the dialout group so you can talk to USB devices without root:

```
sudo usermod -aG dialout "$(id -un)"
```

::: info
At login, your shell takes a snapshot of your user and group memberships. Because you just changed groups, you need a fresh login shell to pick up “dialout” access. Logging out and back in reloads that snapshot, so you get the new permissions.
:::

1. (Optional) Disable ModemManager
On some Ubuntu-based systems, ModemManager can claim serial ports that QGC needs. If you don't use it elsewhere, mask or remove it.
```
# preferred: stop and mask the service
sudo systemctl mask --now ModemManager.service

# or, if you’d rather remove the package
sudo apt remove --purge modemmanager
```

1. On the command prompt, enter:
```sh
sudo apt install gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-gl -y
sudo apt install libfuse2 -y
sudo apt install libxcb-xinerama0 libxkbcommon-x11-0 libxcb-cursor-dev -y
```

**To install _QGroundControl_:**

1. Download [QGroundControl-x86_64.AppImage](https://d176tv9ibo4jno.cloudfront.net/latest/QGroundControl-x86_64.AppImage).

1. Make the AppImage executable
```
chmod +x QGroundControl-<arch>.AppImage
```

1. Run QGroundControl
Either double-click the AppImage in your file manager or launch it from a terminal:

```
./QGroundControl-<arch>.AppImage
```

## Android {#android}

Supported versions: Android 9 to 15 (arm 32/64):

- [Android 32/64 bit APK](https://qgroundcontrol.s3-us-west-2.amazonaws.com/latest/QGroundControl.apk)

## Old Stable Releases

Old stable releases can be found on <a href="https://github.com/mavlink/qgroundcontrol/releases/" target="_blank">GitHub</a>.

## Daily Builds

Daily builds can be [downloaded from here](../releases/daily_builds.md).



<div style="page-break-after: always;"></div>

# Support

This user guide is meant to be the main provider of support for _QGroundControl_.
If you find incorrect or missing information please report an [Issue](https://github.com/mavlink/qgc-user-guide/issues).

_Questions_ about how to use _QGroundControl_ should be raised in the discussion forum for the associated flight stack:

- [PX4 Pro Flight Stack](http://discuss.px4.io/c/qgroundcontrol/qgroundcontrol-usage) (discuss.px4.io).
- [ArduPilot Flight Stack](http://discuss.ardupilot.org/c/ground-control-software/qgroundcontrol) (discuss.ardupilot.org).

These forums are also mainly self-help from other QGC community members. The QGC devs themselves monitor them on a very limited basis.

### Developer Chat {#developer_chat}

_QGroundControl_ developers (and many regular/deeply-involved users) can be found on the [#QGroundControl channel on the Dronecode Discord](https://discord.gg/dronecode).

## GitHub Issues

Issues are used to track bugs against _QGroundControl_ as well as feature requests for later versions. The current list of issues can be found on [GitHub here](https://github.com/mavlink/qgroundcontrol/issues).

::: info
Please contact our developers using the support forums **before** creating GitHub issues for either bugs or feature requests.
:::

### Reporting Bugs

If you are directed to create an issue, please use the "Bug report" template and provide all information specified in the template.

##### Reporting Crashes from Windows Builds

When QGC crashes a crash dump file will be place in the Users LocalAppData directory. To navigate to that directory use the Start/Run command. You can bring this up window WinKey+R. Type into that `%localappdata%` for Open and click Ok. Crash dumps will be in a `QGCCrashDumps` folder in that directory. You should find a new **.dmp** file there. Add a link to that file in a GitHub Issue when reporting you problem.

##### Reporting Hangs from Windows Builds

If Windows is telling you the _QGroundControl program is unresponsive_ use the following steps to report the hang:

1. Open _Task Manager_ (right-click TaskBar, select **Task Manager**)
2. Switch to the Processes tab and local **qgroundcontrol.exe**
3. Right-click on **groundcontrol.exe** and select **Create Dump File**
4. Place the dump file in a public location
5. Add a link to the **.dmp** file and above details in the GitHub issue.

### Feature Requests

If you are directed to create a feature request after discussion on support forums please use the "Feature request" template which has some helpful information on required details.

## Troubleshooting

Troubleshooting information is linked from [here](../troubleshooting/index.md).

### Console Logging

_Console Logs_ can be helpful when diagnosing _QGroundControl_ problems. For more information see: [Console Logging](../settings_view/console_logging.md).

## Help Improve these Docs!

Just like _QGroundControl_ itself, the user guide is an open source, user created and supported GitBook. We welcome [Pull Requests](https://github.com/mavlink/qgc-user-guide/pulls) against the guide for fixes and/or updates.



<div style="page-break-after: always;"></div>

# Fly View

The Fly View is used to command and monitor the vehicle.

## Overview

![Fly View](file:///home/user/qgroundcontrol/docs/assets/fly/fly_view_overview.jpg)

- **[Toolbar](fly_view_toolbar.md):** The toolbar is at the top of the screen. It provides controls to select views, show flight status and mode as well as the status of the main components of the vehicle.
- **[Vehicle Actions](fly_tools.md):** Allows you command the vehicle to take a specific action.
- **[Instrument Panel](instrument_panel.md):** A widget that displays vehicle telemetry.
- **[Attitude/Compass](hud.md):** A widget that provides virtual horizon and heading information.
- **[Camera Tools](camera_tools.md)**: A widget for switching between still and video modes, starting/stopping capture, and controlling camera settings.
- **[Video](video.md):** Display the video from the vehicle. Allows you to toggle between video or map as the main display.
- **Map:** Displays the positions of all connected vehicles and the mission for the current vehicle.
  - You can drag the map to move it around (the map automatically re-centres on the vehicle after a certain amount of time).
  - You can zoom the map in and out using the zoom buttons, mouse wheel, track pad or pinch on a tablet.
  - Once flying, you can click on the map to set a [Go to](#goto) or [Orbit at](#orbit) location.

There are a number of other elements that are not displayed by default and are only displayed in certain conditions or for certain vehicle types.

## Actions/Tasks

The following sections describe how to perform common operations/tasks in the Fly View.

::: info
Many of the available options depend on both the vehicle type and its current state.
:::

### Actions associated with a map position (#map_actions)

There are a number of actions which can be taken which are associated with a specific position on the map. To use these actions:

1. Click on the map at a specific position
2. A popup will display showing you the list of available actions
3. Select the action you want
4. Confirm the action

Examples of map position actions are Go To Location, Orbit and so forth.

### Pause

You can pause most operations, including taking off, landing, RTL, mission execution, orbit at location. The vehicle behaviour when paused depends on the vehicle type; typically a multicopter will hover, and a fixed wing vehicle will circle.

::: info
You cannot pause a _Goto location_ operation.
:::

To pause:

1. Press the **Pause** button in the _Fly Tools_.
1. Optionally set a new altitude using the right-side vertical slider.
1. Confirm the pause using the slider.

### Missions

#### Start Mission {#start_mission}

You can start a mission when the vehicle is landed (the start mission confirmation slider is often displayed by default).

To start a mission from landed:

1. Press the **Action** button on the _Fly Tools_
1. Select the _Start Mission_ action from the dialog.

   ![Start mission action](file:///home/user/qgroundcontrol/docs/assets/fly/start_mission_action.jpg)

   (to display the confirmation slider)

1. When the confirmation slider appears, drag it to start the mission.

   ![Start mission](file:///home/user/qgroundcontrol/docs/assets/fly/start_mission.jpg)

#### Continue Mission {#continue_mission}

You can _continue_ mission from the _next_ waypoint when you're flying (the _Continue Mission_ confirmation slider is often displayed by default after you takeoff).

::: info
Continue and [Resume mission](#resume_mission) are different!
Continue is used to restart a mission that has been paused, or where you have taken off, so you've already missed a takeoff mission command.
Resume mission is used when you've used a RTL or landed midway through a mission (e.g. for a battery change) and then wish to continue the next mission item (i.e. it takes you to where you were up to in the mission, rather than continuing from your place in the mission).
:::

You can continue the current mission while (unless already in a mission!):

1. Press the **Action** button on the _Fly Tools_
1. Select the _Continue Mission_ action from the dialog.

   ![Continue Mission/Change Altitude action](file:///home/user/qgroundcontrol/docs/assets/fly/continue_mission_change_altitude_action.jpg)

1. Drag the confirmation slider to continue the mission.

   ![Continue Mission](file:///home/user/qgroundcontrol/docs/assets/fly/continue_mission.jpg)

#### Resume Mission {#resume_mission}

_Resume Mission_ is used to resume a mission after performing an [RTL/Return](#rtl) or [Land](#land) from within a mission (in order, for example, to perform a battery change).

::: info
If you are performing a battery change, **do not** disconnect QGC from the vehicle after disconnecting the battery.
After you insert the new battery _QGroundControl_ will detect the vehicle again and automatically restore the connection.
:::

After landing you will be prompted with a _Flight Plan complete_ dialog, which gives you the option to remove the plan from the vehicle, leave it on the vehicle, or to resume the mission from the last waypoint that was traveled through.

![Resume Mission](file:///home/user/qgroundcontrol/docs/assets/fly/resume_mission.jpg)

If you select to resume the mission, then _QGroundControl_ will rebuild the mission and upload it to the vehicle.
Then use the _Start Mission_ slider to continue the mission.

The image below shows the mission that was rebuilt after the Return shown above.

![Resume Rebuilt Mission](file:///home/user/qgroundcontrol/docs/assets/fly/resume_mission_rebuilt.jpg)

::: info
A mission cannot simply resume from the last mission item that the vehicle executed, because there may be multiple items at the last waypoint that affect the next stage of the mission (e.g. speed commands or camera control commands).
Instead _QGroundControl_ rebuilds the mission, starting from the last mission item flown, and automatically prepending any relevant commands to the front of the mission.
:::

#### Remove Mission Prompt After Landing {#resume_mission_prompt}

You will be prompted to remove the mission from the vehicle after the mission completes and the vehicle lands and disarms.
This is meant to prevent issues where stale missions are unknowingly left on a vehicle, potentially resulting in unexpected behavior.

### Display Video {#video_switcher}

When video streaming is enabled, _QGroundControl_ will display the video stream for the currently selected vehicle in the "video switcher window" at the bottom left of the map.
You can press the switcher anywhere to toggle _Video_ and _Map_ to foreground (in the image below, the video is shown in the foreground).

![Video Stream Record](file:///home/user/qgroundcontrol/docs/assets/fly/video_record.jpg)

::: info
Video streaming is configured/enabled in [Application Settings > General tab > Video](../settings_view/general.md#video).
:::

You can further configure video display using controls on the switcher:

![Video Pop](file:///home/user/qgroundcontrol/docs/assets/fly/video_pop.jpg)

- Resize the switcher by dragging the icon in the top right corner.
- Hide the switcher by pressing the toggle icon in the lower left.
- Detach the video switcher window by pressing on the icon in its top left corner
  (once detached, you can move and resize the window just like any other in your OS).
  If you close the detached window the switcher will re-lock to the QGC Fly view.

### Record Video

If supported by the camera and vehicle, _QGroundControl_ can start and stop video recording on the camera itself. _QGroundControl_ can also record the video stream and save it locally.

:::tip
Video stored on the camera may be of much higher quality, but it is likely that your ground station will have a much larger recording capacity.
:::

#### Record Video Stream (on GCS)

Video stream recording is controlled on the [video stream instrument page](#video_instrument_page).
Press the red circle to start recording a new video (a new video file is created each time the circle is pressed); the circle will change into a red square while recording is in progress.

![Video Stream Record](file:///home/user/qgroundcontrol/docs/assets/fly/video_record.jpg)

Video stream recording is configured in the [Application Settings > General tab](../settings_view/general.md):

- [Video Recording](../settings_view/general.md#video-recording) - specifies the recording file format and storage limits.

  ::: info
  Videos are saved in Matroska format (.mkv) by default.
  This format is relatively robust against corruption in case of errors.
  :::

- [Miscellaneous](../settings_view/general.md#miscellaneous) - Streamed video is saved under the **Application Load/Save Path**.

::: tip
The stored video includes just the video stream itself.
To record video with QGroundControl application elements displayed, you should use separate screen recording software.
:::

#### Record Video on Camera

Start/stop video recording _on the camera itself_ using the [camera instrument page](#camera_instrument_page).
First toggle to video mode, then select the red button to start recording.

![Instrument Page - Camera MAVLink Settings](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_page_camera_mavlink.jpg)



<div style="page-break-after: always;"></div>

# Fly View Toolbar

![Fly View](file:///home/user/qgroundcontrol/docs/assets/fly/toolbar/fly_view_toolbar.jpg)

## Views

The "Q" icon on the left of the toolbar allows you to select between additional top level views:

- **[Plan Flight](../plan_view/plan_view.md):** Used to create missions, geo-fences and rally points
- **Analyze Tools:** A set of tools for things like log download, geo-tagging images, or viewing telemetry.
- **Vehicle Configuration:** The various options for the initial configuration of a new vehicle.
- **Application Settings:** Settings for the QGroundControl application itself.

## Toolbar Indicators

Next are a multiple toolbar indicators for vehicle status. The dropdowns for each toolbar indicator provide additional detail on status. You can also expand the indicators to show additional application and vehicle settings associated with the indicator. Press the ">" button to expand.

![Toolbar Indicator - expand button](file:///home/user/qgroundcontrol/docs/assets/fly/toolbar_indicator_expand.png)

### Flight Status

The Flight Status indicator shows you whether the vehicle is ready to fly or not. It can be in one of the following states:

- **Ready To Fly** (_green background_) - Vehicle is ready to fly
- **Ready To Fly** (_yellow background_) - Vehicle is ready to fly in the current flight mode. But there are warnings which may cause problems.
- **Not Ready** - Vehicle is not ready to fly and will not takeoff.
- **Armed** - Vehicle is armed and ready to Takeoff.
- **Flying** - Vehicle is in the air and flying.
- **Landing** - Vehicle is in the process of landing.
- **Communication Lost** - QGroundControl has lost communication with the vehicle.

The Flight Status Indicator dropdown also gives you acess to:

- **Arm** - Arming a vehicle starts the motors in preparation for takeoff. You will only be able to arm the vehicle if it is safe and ready to fly. Generally you do not need to manually arm the vehicle. You can simply takeoff or start a mission and the vehicle will arm itself.
- **Disarm** - Disarming a vehicle is only availble when the vehicle is on the ground. It will stop the motors. Generally you do not need to explicitly disarm as vehicles will disarm automatically after landing, or shortly after arming if you do not take off.
- **Emergency Stop** - Emergency stop is used to disarm the vehicle while it is flying. For emergency use only, your vehicle will crash!

In the cases of warnings or not ready state you can click the indicator to display the dropdown which will show the reason(s) why. The toggle on the right expands each error with additional information and possible solutions.

![UI To check arming warnings](file:///home/user/qgroundcontrol/docs/assets/fly/vehicle_states/arming_preflight_check_ui.png)

Once each issue is resolved it will disappear from the UI. When all issues blocking arming have been removed you should now be ready to fly.

## Flight Mode

The Flight Mode indicator shows you the current flight mode. The dropdown allows you to switch between flight modes. The expanded page allows you to:

- Configure vehicle land settings
- Set global geo-fence settings
- Add/Remove flight modes from the displayed list

## Vehicle Messages

The Vehicle Messages indicator dropdown shows you messages which come from the vehicle. The indicator will turn red if there are important messages available.

## GPS

The GPS indicator shows you the satellite count and the HDOP in the toolbar icon. The dropdown shows you additional GPS status. The expanded page give you access to RTK settings.

## Battery

The Battery indicator shows you a configurable colored battery icon for remaining charge. It can also be configured to show percent remaining, voltage or both. The expanded page allows you to:

- Set what value(s) you want displayed in the battery icon
- Configure the icon coloring
- Set up the low battery failsafe

## Remote ID

## Other Indicators

There are other indicators which only show in certain situations:

* Telemetry RSSI
* RC RSSI
* Gimbal - Only displayed if the vehicle supports the [Mavlink Gimbal Protocol](https://mavlink.io/en/services/gimbal_v2.html)
* VTOL transitions
* Select from multiple connected vehicles



<div style="page-break-after: always;"></div>

# Fly Tools

## Pre Flight Checklist {#preflight_checklist}

An automated preflight checklist can be used to run through standard checks that the vehicle is configured correctly and it is safe to fly.

To view the checklist, first enable the tool by navigating to [Application Settings > General > Fly View](../settings_view/general.md) and selecting the **Use preflight checklist** checkbox.
The tool will then be added to the _Flight Tools_.
Press it to open the checklist:

![Pre Flight Checklist](file:///home/user/qgroundcontrol/docs/assets/fly/pre_flight_checklist.jpg)

Once you have performed each test, select it on the UI to mark it as complete.

## Takeoff {#takeoff}

:::tip
If you are starting a mission for a multicopter, _QGroundControl_ will automatically perform the takeoff step.
:::

To takeoff (when landed):

1. Press the **Takeoff** button in the _Fly Tools_ (this will toggle to a **Land** button after taking off).
1. Optionally set the takeoff altitude in the right-side vertical slider.
  - You can slide up/down to change the altitude
  - You can also click on the specified altitude (10 ft in example) and then type in a specific altitude.
1. Confirm takeoff using the slider.

![takeoff](file:///home/user/qgroundcontrol/docs/assets/fly/takeoff.png)

## Land {#land}

You can land at the current position at any time while flying:

1. Press the **Land** button in the _Fly Tools_ (this will toggle to a **Takeoff** button when landed).
1. Confirm landing using the slider.

## RTL/Return

Return to a "safe point" at any time while flying:

1. Press the **RTL** button in the _Fly Tools_.
1. Confirm RTL using the slider.

::: info
Vehicles commonly return to the "home" (takeoff) location and land.
This behaviour depends on the vehicle type and configuration.
For example, rally points or mission landings may be used as alternative return targets.
:::

## Change Altitude {#change_altitude}

You can change altitude while flying, except when in a mission:

1. Press the **Actions** button on the _Fly Tools_
1. Select the _Change Altitude_ button
2. Select the new altitude from the vertical slider
3. Confirm the action



<div style="page-break-after: always;"></div>

# Instrument Panel

The instrument panel displays telemetry information about the current vehicle.

![Instrument Panel - for values/telemetry](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_panel/instrument_panel_default_values.png)

The default values include altitude (relative to the home location), horizontal and vertical speed, total flight time, and distance between vehicle and ground station.

You can configure where the information is displayed by:

* Tablets: Press and hold over control
* Desktop: Right click control
* Click to Lock icon to close and save changes

![Instrument Panel - edit tools](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_panel/instrument_panel_tools_edit.png)

You configure what information is display by selecting the edit/pencil icon.
The grid will then display "+" and "-" icons that you can use to add or remove rows and columns (and the pencil icon is replaced by a "lock" icon that you can use to save the settings).

Select a value to launch its "Value Display" editor.
This allows you to change the icon, text, size, units and so on of the current telemetry value.

![Instrument Panel - edit a value](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_panel/instrument_panel_tools_edit_value.png)

The selection list on the top left is used to change the source of the telemetry.
By default this is the vehicle, but you can use the selector to choose a particular sensor type.

![Instrument Panel - value type](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_panel/instrument_panel_edit_value_type.png)

The selection list on the top right is used to select a particular telemetry value for the vehicle or sensor.

![Instrument Panel - value options](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_panel/instrument_panel_edit_value_options.png)



<div style="page-break-after: always;"></div>

# Fly View

The Fly View is used to command and monitor the vehicle when flying.

You can use it to:

- Run an automated [pre-flight checklist](#preflight_checklist).
- Arm the vehicle (or check why it won't arm).
- Control missions: [start](#start_mission), [continue](#continue_mission), [pause](#pause), and [resume](#resume_mission).
- Guide the vehicle to [arm](#arm)/[disarm](#disarm)/[emergency stop](#emergency_stop), [takeoff](#takeoff)/[land](#land), [change altitude](#change_altitude), [go to](#map_actions) or [orbit](#map_actions) a particular location, and [return/RTL](#rtl).
- Switch between a map view and a video view (if available)
- Display video, mission, telemetry, and other information for the current vehicle, and also switch between connected vehicles.

![Fly View](file:///home/user/qgroundcontrol/docs/assets/fly/fly_view_overview.jpg)

## UI Overview

The screenshot above shows the main elements of the fly view:

- **[Fly Toolbar](fly_view_toolbar.md):** Key status information for vehicle components (GPS, battery, RC control), and vehicle state (Flight mode, Armed/Disarmed status).
  - Select the [toolbar indicator](#toolbar_indicator) to view more detail.
  - Press the _Flight mode_ text (e.g. "Hold") to select a new mode.
    Not every mode may be available.
  - The text next to the **Q** icon indicates the flight readiness using text: "Not Ready", "Ready to Fly", "Flying", and status using colour: "green" (all good!), amber (a warning), red (serious problem). You can also select the text to reach a button to arm/disarm/emergency-stop the vehicle.
- **[Fly tools](fly_tools.md):** You can use these to:
  - Select the [preflight checklist](#preflight_checklist) (tool option disabled by default).
  - Toggle between takeoff/land.
  - Pause/restart the current operation (e.g. landing, or the mission).
  - Safety return (also known as RTL or Return).
  - The _Actions_ button offers other appropriate options for the current state. Actions include changing the altitude or continuing a mission.
- **Map:** Displays the positions of all connected vehicles and the mission for the current vehicle.
  - You can drag the map to move it around (the map automatically re-centres on the vehicle after a certain amount of time).
  - You can zoom the map in and out using the zoom buttons, mouse wheel, track pad or pinch on a tablet.
  - Once flying, you can click on the map to set a [Go to](#goto) or [Orbit at](#orbit) location.
- **[Instrument Panel](instrument_panel.md):** A widget that displays vehicle telemetry.
- **[Attitude/Compass](hud.md):** A widget that provides virtual horizon and heading information.
- **Camera Tools**: A widget for switching between still and video modes, starting/stopping capture, and controlling camera settings.
- **[Video/Switcher](#video_switcher):** Toggle between video or map in a window.
  - Press the element to switch _Video_ and _Map_ to foreground.
  - _QGroundControl_ supports RTP and RTSP video streaming over your vehicles UDP connection.
    It also supports directly connected UVC devices.
    QGC video support is further discussed in the [Video README](https://github.com/mavlink/qgroundcontrol/blob/master/src/VideoManager/VideoReceiver/GStreamer/README.md).
  - A [Telemetry Overlay](../fly_view/video_overlay.md) is automatically generated as a subtitle file
- **Confirmation Slider:** Context sensitive slider to confirm requested actions. Slide to confirm operation. You can also hold the spacebar to confirm. Press **X** to cancel.

There are a number of other elements that are not displayed by default/are only displayed in certain conditions.
For example, the multi-vehicle selector is only displayed if you have multiple vehicles, and the preflight checklist tool button is only displayed if the appropriate setting is enabled.

## Fly Toolbar {#toolbar}

### View Selector

The "Q" icon on the left of the toolbar allows you to select between additional top level views:

- **[Plan Flight](../plan_view/plan_view.md):** Used to create missions, geo-fences and rally points
- **Analyze Tools:** A set of tools for things like log download, geo-tagging images, or viewing telemetry.
- **Vehicle Configuration:** The various options for the initial configuration of a new vehicle.
- **Application Settings:** Settings for the QGroundControl application itself.

### Toolbar Indicators {#toolbar_indicators}

Next are a toolbar indicators for vehicle status. The dropdowns for each toolbar indicator provide additional detail on status. You can also expand the indicators to show additional application and vehicle settings associated with the indicator. Press the ">" button to expand.

![Toolbar Indicator - expand button](file:///home/user/qgroundcontrol/docs/assets/fly/toolbar_indicator_expand.png)

Here is an example expanded toolbar indicator for flight modes on a vehicle running PX4 firmware. The settings in this indicator provide access to things which may be relevant to change from flight to flight.

![Toolbar Indicator - expanded](file:///home/user/qgroundcontrol/docs/assets/fly/toolbar_indicator_expanded.png)

They also provide access to the Vehicle Configuration associated with the indicator. In this example: _Flight Modes_ - _Configure_.

### Ready/Not Ready Indicator

![Vehicle state - ready to fly green/ready background](file:///home/user/qgroundcontrol/docs/assets/fly/vehicle_states/ready_to_fly_ok.png)

Next in the toolbar is the indicator which shows you whether the vehicle is ready to fly or not.

It can be in one of the following states:

- **Ready To Fly** (_green background_) - Vehicle is ready to fly
- **Ready To Fly** (_yellow background_) - Vehicle is ready to fly in the current flight mode. But there are warnings which may cause problems.
- **Not Ready** - Vehicle is not ready to fly and will not takeoff.
- **Armed** - Vehicle is armed and ready to Takeoff.
- **Flying** - Vehicle is in the air and flying.
- **Landing** - Vehicle is in the process of landing.
- **Communication Lost** - QGroundControl has lost communication with the vehicle.

The Ready Indicator dropdown also gives you acess to:

- **Arming** - Arming a vehicle starts the motors in preparation for takeoff. You will only be able to arm the vehicle if it is safe and ready to fly. Generally you do not need to manually arm the vehicle. You can simply takeoff or start a mission and the vehicle will arm itself.
- **Disarm** - Disarming a vehicle is only availble when the vehicle is on the ground. It will stop the motors. Generally you do not need to explicitly disarm as vehicles will disarm automatically after landing, or shortly after arming if you do not take off.
- **Emergency Stop** - Emergency stop is effectively the same as disarming the vehicle while it is flying. For emergency use only, your vehicle will crash!

In the cases of warnings or not ready state you can click the indicator to display the dropdown which will show the reason(s) why. The toggle on the right expands each error with additional information and possible solutions.

![UI To check arming warnings](file:///home/user/qgroundcontrol/docs/assets/fly/vehicle_states/arming_preflight_check_ui.png)

Once each issue is resolved it will disappear from the UI.
When all issues blocking arming have been removed you should now be ready to fly.

### Flight Mode Indicator

![Vehicle state - ready to fly green/ready background](file:///home/user/qgroundcontrol/docs/assets/fly/toolbar/flight_modes_indicator.png)

The Flight Mode Indicator dropdown allows you to switch between flight modes. The expanded page allows you to:

- Configure vehicle land settings
- Set global geo-fence settings
- Add/Remove flight modes from the displayed list

### Vehicle Messages Indicator

![Vehicle state - ready to fly green/ready background](file:///home/user/qgroundcontrol/docs/assets/fly/toolbar/messages_indicator.png)

The Vehicle Messages Indicator dropdown shows you messages which come from the vehicle. The indicator will turn red if there are important messages available.

### GPS Indicator

![Vehicle state - ready to fly green/ready background](file:///home/user/qgroundcontrol/docs/assets/fly/toolbar/gps_indicator.png)

The GPS Indicator shows you the satellite count and the HDOP in the toolbar icon. The dropdown shows you additional GPS status. The expanded page give you access to RTK settings.
### Battery Indicator

![Vehicle state - ready to fly green/ready background](file:///home/user/qgroundcontrol/docs/assets/fly/toolbar/battery_indicator.png)

The Battery Indicator shows you a configurable colored battery icon for remaining charge. It can also be configured to show percent remaining, voltage or both. The expanded page allows you to:

- Set what value(s) you want displayed in the battery icon
- Configure the icon coloring
- Set up the low battery failsafe

## Fly Tools {#fly_tools}

### Pre Flight Checklist {#preflight_checklist}

An automated preflight checklist can be used to run through standard checks that the vehicle is configured correctly and it is safe to fly.

To view the checklist, first enable the tool by navigating to [Application Settings > General > Fly View](../settings_view/general.md) and selecting the **Use preflight checklist** checkbox.
The tool will then be added to the _Flight Tools_.
Press it to open the checklist:

![Pre Flight Checklist](file:///home/user/qgroundcontrol/docs/assets/fly/pre_flight_checklist.jpg)

Once you have performed each test, select it on the UI to mark it as complete.

### Takeoff {#takeoff}

:::tip
If you are starting a mission for a multicopter, _QGroundControl_ will automatically perform the takeoff step.
:::

To takeoff (when landed):

1. Press the **Takeoff** button in the _Fly Tools_ (this will toggle to a **Land** button after taking off).
1. Optionally set the takeoff altitude in the right-side vertical slider.
  - You can slide up/down to change the altitude
  - You can also click on the specified altitude (10 ft in example) and then type in a specific altitude.
1. Confirm takeoff using the slider.

![takeoff](file:///home/user/qgroundcontrol/docs/assets/fly/takeoff.png)

### Land {#land}

You can land at the current position at any time while flying:

1. Press the **Land** button in the _Fly Tools_ (this will toggle to a **Takeoff** button when landed).
1. Confirm landing using the slider.

### RTL/Return

Return to a "safe point" at any time while flying:

1. Press the **RTL** button in the _Fly Tools_.
1. Confirm RTL using the slider.

::: info
Vehicles commonly return to the "home" (takeoff) location and land.
This behaviour depends on the vehicle type and configuration.
For example, rally points or mission landings may be used as alternative return targets.
:::

### Change Altitude {#change_altitude}

You can change altitude while flying, except when in a mission:

1. Press the **Actions** button on the _Fly Tools_
1. Select the _Change Altitude_ button
2. Select the new altitude from the vertical slider
3. Confirm the action

## Instrument Panel (Telemetry) {#instrument_panel}

The instrument panel displays telemetry information about the current vehicle.

![Instrument Panel - for values/telemetry](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_panel/instrument_panel_default_values.png)

The default values include altitude (relative to the home location), horizontal and vertical speed, total flight time, and distance between vehicle and ground station.

You can configure where the information is displayed by:

* Tablets: Press and hold over control
* Desktop: Right click control
* Click to Lock icon to close and save changes

![Instrument Panel - edit tools](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_panel/instrument_panel_tools_edit.png)

You configure what information is display by selecting the edit/pencil icon.
The grid will then display "+" and "-" icons that you can use to add or remove rows and columns (and the pencil icon is replaced by a "lock" icon that you can use to save the settings).

Select a value to launch its "Value Display" editor.
This allows you to change the icon, text, size, units and so on of the current telemetry value.

![Instrument Panel - edit a value](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_panel/instrument_panel_tools_edit_value.png)

The selection list on the top left is used to change the source of the telemetry.
By default this is the vehicle, but you can use the selector to choose a particular sensor type.

![Instrument Panel - value type](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_panel/instrument_panel_edit_value_type.png)

The selection list on the top right is used to select a particular telemetry value for the vehicle or sensor.

![Instrument Panel - value options](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_panel/instrument_panel_edit_value_options.png)

## Attitude /Compass {#hud}

You can select from multiple types of instruments by:

* Tablets: Press and hold over control
* Desktop: Right click over control
* Click the Lock icon to close and save changes

![Instrument Panel - hover for move/edit tools](file:///home/user/qgroundcontrol/docs/assets/fly/hud_select_variant.png)

### Camera {#camera_instrument_page}

The camera panel is used to capture still images and video, and to configure the camera.

![Camera Panel](file:///home/user/qgroundcontrol/docs/assets/fly/camera_panel/camera_mavlink.png)

The camera capture and configuration options depend on the connected camera.
The configuration options are selected using the panel gear icon.
The configuration for a simple autopilot-connected camera are shown below.

![Camera Panel - minimal settings](file:///home/user/qgroundcontrol/docs/assets/fly/camera_panel/camera_settings_minimal.png)

When connected to camera that supports the [MAVLink Camera Protocol](https://mavlink.io/en/services/camera.html) you can additionally configure and use other camera services that it makes available.
For example, if your camera supports video mode you will be able to switch between still image capture and video mode, and start/stop recording.

![Camera Panel - MAVLink settings](file:///home/user/qgroundcontrol/docs/assets/fly/camera_panel/camera_settings_mavlink.png)

::: info
Most of the settings that are displayed depend on the camera (they are defined in its [MAVLink Camera Definition File](https://mavlink.io/en/services/camera_def.html)).

> A few common settings at the end are hard-coded: Photo Mode (Single/Time Lapse), Photo Interval (if Time Lapse), Reset Camera Defaults (sends a reset command to the camera), Format (storage)
> :::

### Video Stream {#video_instrument_page}

The video page is used to enable/disable video streaming.
When enabled, you can start/stop the video stream, enable a grid overlay, change how the image fits the screen, and record the video locally with QGC.

![Instrument Page - Video Stream](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_page_video_stream.jpg)

## Actions/Tasks

The following sections describe how to perform common operations/tasks in the Fly View.

::: info
Many of the available options depend on both the vehicle type and its current state.
:::

### Actions associated with a map position (#map_actions)

There are a number of actions which can be taken which are associated with a specific position on the map. To use these actions:

1. Click on the map at a specific position
2. A popup will display showing you the list of available actions
3. Select the action you want
4. Confirm the action

Examples of map position actions are Go To Location, Orbit and so forth.

### Pause

You can pause most operations, including taking off, landing, RTL, mission execution, orbit at location. The vehicle behaviour when paused depends on the vehicle type; typically a multicopter will hover, and a fixed wing vehicle will circle.

::: info
You cannot pause a _Goto location_ operation.
:::

To pause:

1. Press the **Pause** button in the _Fly Tools_.
1. Optionally set a new altitude using the right-side vertical slider.
1. Confirm the pause using the slider.

### Missions

#### Start Mission {#start_mission}

You can start a mission when the vehicle is landed (the start mission confirmation slider is often displayed by default).

To start a mission from landed:

1. Press the **Action** button on the _Fly Tools_
1. Select the _Start Mission_ action from the dialog.

   ![Start mission action](file:///home/user/qgroundcontrol/docs/assets/fly/start_mission_action.jpg)

   (to display the confirmation slider)

1. When the confirmation slider appears, drag it to start the mission.

   ![Start mission](file:///home/user/qgroundcontrol/docs/assets/fly/start_mission.jpg)

#### Continue Mission {#continue_mission}

You can _continue_ mission from the _next_ waypoint when you're flying (the _Continue Mission_ confirmation slider is often displayed by default after you takeoff).

::: info
Continue and [Resume mission](#resume_mission) are different!
Continue is used to restart a mission that has been paused, or where you have taken off, so you've already missed a takeoff mission command.
Resume mission is used when you've used a RTL or landed midway through a mission (e.g. for a battery change) and then wish to continue the next mission item (i.e. it takes you to where you were up to in the mission, rather than continuing from your place in the mission).
:::

You can continue the current mission while (unless already in a mission!):

1. Press the **Action** button on the _Fly Tools_
1. Select the _Continue Mission_ action from the dialog.

   ![Continue Mission/Change Altitude action](file:///home/user/qgroundcontrol/docs/assets/fly/continue_mission_change_altitude_action.jpg)

1. Drag the confirmation slider to continue the mission.

   ![Continue Mission](file:///home/user/qgroundcontrol/docs/assets/fly/continue_mission.jpg)

#### Resume Mission {#resume_mission}

_Resume Mission_ is used to resume a mission after performing an [RTL/Return](#rtl) or [Land](#land) from within a mission (in order, for example, to perform a battery change).

::: info
If you are performing a battery change, **do not** disconnect QGC from the vehicle after disconnecting the battery.
After you insert the new battery _QGroundControl_ will detect the vehicle again and automatically restore the connection.
:::

After landing you will be prompted with a _Flight Plan complete_ dialog, which gives you the option to remove the plan from the vehicle, leave it on the vehicle, or to resume the mission from the last waypoint that was traveled through.

![Resume Mission](file:///home/user/qgroundcontrol/docs/assets/fly/resume_mission.jpg)

If you select to resume the mission, then _QGroundControl_ will rebuild the mission and upload it to the vehicle.
Then use the _Start Mission_ slider to continue the mission.

The image below shows the mission that was rebuilt after the Return shown above.

![Resume Rebuilt Mission](file:///home/user/qgroundcontrol/docs/assets/fly/resume_mission_rebuilt.jpg)

::: info
A mission cannot simply resume from the last mission item that the vehicle executed, because there may be multiple items at the last waypoint that affect the next stage of the mission (e.g. speed commands or camera control commands).
Instead _QGroundControl_ rebuilds the mission, starting from the last mission item flown, and automatically prepending any relevant commands to the front of the mission.
:::

#### Remove Mission Prompt After Landing {#resume_mission_prompt}

You will be prompted to remove the mission from the vehicle after the mission completes and the vehicle lands and disarms.
This is meant to prevent issues where stale missions are unknowingly left on a vehicle, potentially resulting in unexpected behavior.

### Display Video {#video_switcher}

When video streaming is enabled, _QGroundControl_ will display the video stream for the currently selected vehicle in the "video switcher window" at the bottom left of the map.
You can press the switcher anywhere to toggle _Video_ and _Map_ to foreground (in the image below, the video is shown in the foreground).

![Video Stream Record](file:///home/user/qgroundcontrol/docs/assets/fly/video_record.jpg)

::: info
Video streaming is configured/enabled in [Application Settings > General tab > Video](../settings_view/general.md#video).
:::

You can further configure video display using controls on the switcher:

![Video Pop](file:///home/user/qgroundcontrol/docs/assets/fly/video_pop.jpg)

- Resize the switcher by dragging the icon in the top right corner.
- Hide the switcher by pressing the toggle icon in the lower left.
- Detach the video switcher window by pressing on the icon in its top left corner
  (once detached, you can move and resize the window just like any other in your OS).
  If you close the detached window the switcher will re-lock to the QGC Fly view.

### Record Video

If supported by the camera and vehicle, _QGroundControl_ can start and stop video recording on the camera itself. _QGroundControl_ can also record the video stream and save it locally.

:::tip
Video stored on the camera may be of much higher quality, but it is likely that your ground station will have a much larger recording capacity.
:::

#### Record Video Stream (on GCS)

Video stream recording is controlled on the [video stream instrument page](#video_instrument_page).
Press the red circle to start recording a new video (a new video file is created each time the circle is pressed); the circle will change into a red square while recording is in progress.

![Video Stream Record](file:///home/user/qgroundcontrol/docs/assets/fly/video_record.jpg)

Video stream recording is configured in the [Application Settings > General tab](../settings_view/general.md):

- [Video Recording](../settings_view/general.md#video-recording) - specifies the recording file format and storage limits.

  ::: info
  Videos are saved in Matroska format (.mkv) by default.
  This format is relatively robust against corruption in case of errors.
  :::

- [Miscellaneous](../settings_view/general.md#miscellaneous) - Streamed video is saved under the **Application Load/Save Path**.

::: tip
The stored video includes just the video stream itself.
To record video with QGroundControl application elements displayed, you should use separate screen recording software.
:::

#### Record Video on Camera

Start/stop video recording _on the camera itself_ using the [camera instrument page](#camera_instrument_page).
First toggle to video mode, then select the red button to start recording.

![Instrument Page - Camera MAVLink Settings](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_page_camera_mavlink.jpg)



<div style="page-break-after: always;"></div>

# Camera Tools

The camera tools are used to capture still images and video, and to configure the camera.

![Camera Panel](file:///home/user/qgroundcontrol/docs/assets/fly/camera_panel/camera_mavlink.png)

The camera capture and configuration options depend on the connected camera.
The configuration options are selected using the panel gear icon.
The configuration for a simple autopilot-connected camera are shown below.

![Camera Panel - minimal settings](file:///home/user/qgroundcontrol/docs/assets/fly/camera_panel/camera_settings_minimal.png)

When connected to camera that supports the [MAVLink Camera Protocol](https://mavlink.io/en/services/camera.html) you can additionally configure and use other camera services that it makes available.
For example, if your camera supports video mode you will be able to switch between still image capture and video mode, and start/stop recording.

![Camera Panel - MAVLink settings](file:///home/user/qgroundcontrol/docs/assets/fly/camera_panel/camera_settings_mavlink.png)

::: info
Most of the settings that are displayed depend on the camera (they are defined in its [MAVLink Camera Definition File](https://mavlink.io/en/services/camera_def.html)).

> A few common settings at the end are hard-coded: Photo Mode (Single/Time Lapse), Photo Interval (if Time Lapse), Reset Camera Defaults (sends a reset command to the camera), Format (storage)
> :::

### Video Stream {#video_instrument_page}

The video page is used to enable/disable video streaming.
When enabled, you can start/stop the video stream, enable a grid overlay, change how the image fits the screen, and record the video locally with QGC.

![Instrument Page - Video Stream](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_page_video_stream.jpg)



<div style="page-break-after: always;"></div>

# Video

When video streaming is enabled (Application Settings - Video), _QGroundControl_ will display the video stream for the currently selected vehicle in the "video switcher window" at the bottom left of the map.
You can press the switcher anywhere to toggle _Video_ and _Map_ to foreground (in the image below, the video is shown in the foreground).

![Video Stream Record](file:///home/user/qgroundcontrol/docs/assets/fly/video_record.jpg)

::: info
Video streaming is configured/enabled in [Application Settings > General tab > Video](../settings_view/general.md#video).
:::

You can further configure video display using controls on the switcher:

![Video Pop](file:///home/user/qgroundcontrol/docs/assets/fly/video_pop.jpg)

- Resize the switcher by dragging the icon in the top right corner.
- Hide the switcher by pressing the toggle icon in the lower left.
- Detach the video switcher window by pressing on the icon in its top left corner
  (once detached, you can move and resize the window just like any other in your OS).
  If you close the detached window the switcher will re-lock to the QGC Fly view.

### Record Video

If supported by the camera and vehicle, _QGroundControl_ can start and stop video recording on the camera itself. _QGroundControl_ can also record the video stream and save it locally.

:::tip
Video stored on the camera may be of much higher quality, but it is likely that your ground station will have a much larger recording capacity.
:::

#### Record Video Stream (on GCS)

Video stream recording is controlled on the [video stream instrument page](#video_instrument_page).
Press the red circle to start recording a new video (a new video file is created each time the circle is pressed); the circle will change into a red square while recording is in progress.

![Video Stream Record](file:///home/user/qgroundcontrol/docs/assets/fly/video_record.jpg)

Video stream recording is configured in the [Application Settings > General tab](../settings_view/general.md):

- [Video Recording](../settings_view/general.md#video-recording) - specifies the recording file format and storage limits.

  ::: info
  Videos are saved in Matroska format (.mkv) by default.
  This format is relatively robust against corruption in case of errors.
  :::

- [Miscellaneous](../settings_view/general.md#miscellaneous) - Streamed video is saved under the **Application Load/Save Path**.

::: tip
The stored video includes just the video stream itself.
To record video with QGroundControl application elements displayed, you should use separate screen recording software.
:::

#### Record Video on Camera

Start/stop video recording _on the camera itself_ using the [camera instrument page](#camera_instrument_page).
First toggle to video mode, then select the red button to start recording.

![Instrument Page - Camera MAVLink Settings](file:///home/user/qgroundcontrol/docs/assets/fly/instrument_page_camera_mavlink.jpg)



<div style="page-break-after: always;"></div>

# Video Overlay

When QGroundControl is recording a video stream to a file, it will also export a subtitle file with telemetry data that can be used to overlay the telemetry on the video during playback. Whichever telemetry values are selected for display in the telemetry [values widget](fly_view.md#values-telemetry) will also be exported to the overlay. The overlay values are updated at 1Hz.

![Values Widget](file:///home/user/qgroundcontrol/docs/assets/fly/overlay_widget.png)

The selected values are laid out in three columns to optimize the screen utilization.
![Overlay in action](file:///home/user/qgroundcontrol/docs/assets/fly/overlay_capture.png)

## Playing

The overlay can be used with any player that [supports the SubStation Alpha](https://en.wikipedia.org/wiki/SubStation_Alpha#Players_and_renderers) subtitle format.
Most players will open both files together when you try to play the video. They need to be in the same folder and with the same name, which is how they are created by QGC.

## Permanent Video Subtitles using Handbrake

Subtitles can be permanently added to a video file using [HandBrake](https://handbrake.fr/).
This will make the subtitles permanently visible on any video player.

Open **HandBrake**, you should see its main interface.
Click **Open** and select the video file.

![Handbrake UI showing how to open video file](file:///home/user/qgroundcontrol/docs/assets/fly/video_overlay/1-open.png)

With the video file loaded, switch to the subtitles tab.
Click **Add** to load the subtitle file.

![Handbrake UI screenshot showing how to add subtitles](file:///home/user/qgroundcontrol/docs/assets/fly/video_overlay/2-subtitles.png)

Choose **import SSA** ([ASS](https://en.wikipedia.org/wiki/SubStation_Alpha#Advanced_SubStation_Alpha) is an extension of SSA).

![Import SSA file](file:///home/user/qgroundcontrol/docs/assets/fly/video_overlay/3-ssa.png)

Load the **.ass** file corresponding to your video and tick the **Burn into video** checkbox.

![burn](file:///home/user/qgroundcontrol/docs/assets/fly/video_overlay/4-openandburn.png)

Choose where you want to save the new file and click **Start**.

![Start burning new file](file:///home/user/qgroundcontrol/docs/assets/fly/video_overlay/5-start.png)

This will start burning the subtitle and video to a new file.



<div style="page-break-after: always;"></div>

# Replay Flight Data

::: warning
This feature is intended primarily for **autopilot developers**/**vehicle creators**.
It is only supported on desktop builds (Windows, Linux, Mac OS).
:::

The _Replay Flight Data_ feature allows users to replay a telemetry log, enabling review of past or problematic flights.
The flight can be started, paused, stopped, restarted etc.

::: info
_QGroundControl_ treats flight replay like an active connection.
When you pause/stop playing, the ground station will report "Communication Lost" and wait for disconnection or for more messages.
:::

To replay a flight:

1. Disconnect any active connections.
1. Select **Application Settings > General > Fly View**
1. Check **Show Telemetry Log Replay Status Bar** to toggle the flight replay bar at the bottom of the screen.

   ![Toggle Flight Replay](file:///home/user/qgroundcontrol/docs/assets/fly/flight_replay/flight_replay_toggle.jpg)

1. Select the **Load Telemetry Log** button in the bar to display a _file selection_ dialog.
   - Choose a log file to replay from the available telemetry logs.
   - _QGroundControl_ will immediately start playing the log.
1. When a log is loaded you can use the:
   - **Pause/Play** button to pause and restart playing.
   - _Slider_ to drag to a new position in the log.
   - _Rate_ selector to choose the playback speed.
1. To stop replay (i.e. to load a new file to replay), first pause the flight, and then select **Disconnect** (when it appears).
   After disconnecting, the **Load Telemetry Log** button will be displayed.

:::tip
You can inspect the running replay in more detail using the [MAVLink Inspector](../analyze_view/mavlink_inspector.md).
:::



<div style="page-break-after: always;"></div>

# Custom Mavlink Action

Both the Fly View and Joysticks support the ability execute arbitrary mavlink commands to the active vehicle. In the Fly View these will show up in the Toolstrip Action list. With Joysticks you can assign then to button presses.

## Mavlink Actions File

The actions available are defined in a JSON file. The format of that file is as follows:

```
{
    "version":    1,
    "fileType":   "MavlinkActions",
    "actions": [
        {
            "label":        "First Mavlink Command",
            "description":  "This is the first command",
            "mavCmd":       10,
            "compId":       100,
            "param1":       1,
            "param2":       2,
            ...
        },
        {
            "label":        "Second Mavlink Command",
            "description":  "This is the second command",
            "mavCmd":       20,
            ...
        }
    ]
}
```

Fields:

* actions (required) - An array of json objects, one for each command
* label (required) - The user visible short description for the command. This is used as the button text for the Fly View - Actions command list. For Joysticks, this is the command you select from the dropdown. For Joysticks, make sure your name doesn't conflict with the built in names.
* description (required) - This is a longer description of the command used in the Fly View - Action list. This is not used by joysticks.
* mavCmd (required) - The command id of the mavlink command you want to send.
* compId (options) - The component id for where you want to send the command to. If not specified `MAV_COMP_ID_AUTOPILOT1` is used.
* param1 thru param7 (optional) - The parameters for the command. Parameters which are not specified will default to 0.0

Mavlink action files should be located in the MavlinkActions directory of the QGC save location. For example on Linux that would be `~/Documents/QGroundControl/MavlinkActions` or `~/Documents/QGroundControl Daily/MavlinkActions`. The Fly View and Joysticks can each have there own custom actions file.

When you start up QGC it will load these files if they exist and make the commands available for use.



<div style="page-break-after: always;"></div>

# 3D View

The 3D View is used to visualize and monitor the vehicle, the environment, and the planned mission in 3D. Most of the capabilities available in the [Fly View](../fly_view/fly_view.md)  is also available in the 3D View.

You can use it to:
- To import and display the 3D map for any region of interest downloaded from the OpenStreetMap website (.osm file).
- Display the vehicle along with its mission in 3D.
- And most of the capabilities of the [Fly View](../fly_view/fly_view.md), including:
    - Run an automated [pre-flight checklist](#preflight_checklist).
    - Arm the vehicle (or check why it won't arm).
    - Control missions: [start](#start_mission), [continue](#continue_mission), [pause](#pause), and [resume](#resume_mission).
    - Guide the vehicle to [arm](#arm)/[disarm](#disarm)/[emergency stop](#emergency_stop), [takeoff](#takeoff)/[land](#land), [change altitude](#change_altitude), and [return/RTL](#rtl).
    - Switch between a map view and a video view (if available)
    - Display video, mission, telemetry, and other information for the current vehicle, and also switch between connected vehicles.

![3D View](file:///home/user/qgroundcontrol/docs/assets/viewer_3d/viewer_3d_overview.jpg)

# UI Overview
The screenshot above shows the main elements of the 3D View.

<font color="red">**Enabling the 3D View:** </font>The 3D View is disabled by default. To enable it, go to **Application Settings** ->**Fly View** tab, and under the **3D View** settings group, toggle the **Enabled** switch as shown below:

![3D View](file:///home/user/qgroundcontrol/docs/assets/viewer_3d/enable_3d_view.jpg)

To open the 3D View, when you are in the [Fly View](../fly_view/fly_view.md), from the toolbar on the left, select the 3D View icon as illustrated below:

![3D View](file:///home/user/qgroundcontrol/docs/assets/viewer_3d/open_3d_viewer.jpg)

Once the 3D View is opened, you can navigate through the 3D environment by using either a mouse or a touchscreen as follows:
- **Mouse:**
    - **To move horizontally and vertically**: Press and hold the mouse left-click, then move the cursor.
    - **To rotate**: Press and hold the mouse right-click, then move the cursor.
    - **To zoom**: Use the mouse wheel\middle button.

- **Touchscreen:**
    - **To move horizontally and vertically**: Use a single finger, then tap and move your finger.
    - **To rotate**: Use two fingers, then tap and move your fingers while keeping them together.
    - **To zoom**: Use a pinch with two fingers and move them together or apart to zoom in or out.

To visualize the 3D map of a particular area in the 3D viewer, you have to download the .osm file of that area from the [OpenStreetMap](https://www.openstreetmap.org/#map=16/47.3964/8.5498) website and then import it through the **3D View** settings. More details on the **3D View** settings can be found in the next section.
# Settings
You can change the settings of the 3D View from **Application Settings** ->**Fly View** tab under the **3D View** settings group.
The following properties can be modified in the 3D View settings group:

- **Enabled**: To enable or disable the 3D View.
- **3D Map File**: The path to the .osm file of a region of interest to be visualized in the QGC. The .osm file can be uploaded by clicking on the **Select File** button. To clear the 3D View from the previously loaded .osm file, you can click on the **Clear** button.
- **Average Building Level Height**: This parameter determines the height of each storey of the buildings, as in .osm file sometimes the height of the buildings is specified in terms of the level/storey.
- **Vehicle Altitude Bias**: This refers to the bias in the altitude of vehicles and their missions with respect to the ground level. It is helpful in cases where the estimated altitude of the vehicle by its flight control is biased, as the relative altitude is currently used in the 3D View.



<div style="page-break-after: always;"></div>

# Plan View

The _Plan View_ is used to plan _autonomous missions_ for your vehicle, and upload them to the vehicle. Once the mission is [planned](#plan_mission) and sent to the vehicle, you switch to the [Fly View](../fly_view/fly_view.md) to fly the mission.

It is also use to configure the [GeoFence](plan_geofence.md) and [Rally Points](plan_rally_points.md) if these are supported by the firmware.

<span id="plan_screenshot"></span>
![Plan View](file:///home/user/qgroundcontrol/docs/assets/plan/plan_view_overview.jpg)

## UI Overview {#ui_overview}

The [screenshot above](#plan_screenshot) shows a simple mission plan that starts with a takeoff at the [Planned Home](#planned_home) position (H),
flies through three waypoints, and then lands on the last waypoint (i.e. waypoint 3).

The main elements of the UI are:

- **Map:** Displays the numbered indicators for the current mission, including the [Planned Home](#planned_home).
  Click on the indicators to select them (for editing) or drag them around to reposition them.
- **Plan Toolbar:** Status information for the currently selected waypoint relative to the previous waypoint, as well as statistics for the entire mission (e.g. horizontal distance and time for mission).
  - `Max telem dist` is the distance between the [Planned Home](#planned_home) and the furthest waypoint.
  - When connected to a vehicle it also shows an **Upload** button, can be used to upload the plan to the vehicle.
- **[Plan Tools](#plan_tools):** Used to create and manage missions.
- **[Mission Command List/Overlay](#mission_command_list):** Displays the current list of mission items (select items to [edit](#mission_command_editors)).
- **Terrain Altitude Overlay:** Shows the relative altitude of each mission command.

It shows you information related to the currently selected waypoint as well as statistics for the entire mission.

## Planning a Mission {#plan_mission}

At very high level, the steps to create a mission are:

1. Change to _Plan View_.
2. Add waypoints or commands to the mission and edit as needed.
3. Upload the mission to the vehicle.
4. Change to _Fly View_ and fly the mission.

The following sections explain some of the details in the view.

## Planned Home Position {#planned_home}

The _Planned Home_ shown in _Plan View_ is used to set the approximate start point when planning a mission (i.e. when a vehicle may not even be connected to QGC).
It is used by QGC to estimate mission times and to draw waypoint lines.

![Planned Home Position](file:///home/user/qgroundcontrol/docs/assets/plan/mission/mission_settings_planned_home.jpg)

You should move/drag the planned home position to roughly the location where you plan to takeoff.
The altitude for the planned home position is set in the [Mission Settings](#mission_settings) panel.

<img src="../../../assets/plan/mission/mission_settings_planned_home_position_section.jpg" style="width: 200px;"/>

:::tip
The Fly View displays the _actual_ home position set by the vehicle firmware when it arms (this is where the vehicle will return in Return/RTL mode).
:::

## Plan Tools {#plan_tools}

The plan tools are used for adding individual waypoints, easing mission creation for complicated geometries, uploading/downloading/saving/restoring missions, and for navigating the map. The main tools are described below.

::: info
**Center map**, **Zoom In**, **Zoom Out** tools help users better view and navigate the _Plan view_ map (they don't affect the mission commands sent to the vehicle).
:::

### Add Waypoints

Click on the **Add Waypoint** tool to activate it. While active, clicking on the map will add new mission waypoint at the clicked location.
The tool will stay active until you select it again.
Once you have added a waypoint, you can select it and drag it around to change its position.

### File (Sync) {#file}

The _File tools_ are used to move missions between the ground station and vehicle, and to save/restore them from files.
The tool displays an `!` to indicate that there are mission changes that you have not sent to the vehicle.

::: info
Before you fly a mission you must upload it to the vehicle.
:::

The _File tools_ provide the following functionality:

- Upload (Send to vehicle)
- Download (Load from vehicle)
- Save/Save as to File, including as KML file.
- Load from File
- Remove All (removes all mission waypoints from _Plan view_ and from vehicle)

### Pattern

The [Pattern](pattern.md) tool simplifies the creation of missions for flying complex geometries, including [surveys](../plan_view/pattern_survey.md) and [structure scans](../plan_view/pattern_structure_scan_v2.md).

## Mission Command List {#mission_command_list}

Mission commands for the current mission are listed on the right side of the view.
At the top are a set of options to switch between editing the mission, GeoFence and rally points.
Within the list you can select individual mission items to edit their values.

![Mission Command List](file:///home/user/qgroundcontrol/docs/assets/plan/mission/mission_command_list.jpg)

### Mission Command Editors {#mission_command_editors}

Click on a mission command in the list to display its editor (in which you can set/change the command attributes).

You can change the **type** of the command by clicking on the command name (for example: _Waypoint_).
This will display the _Select Mission Command_ dialog shown below.
By default this just displays the "Basic Commands", but you can use the **Category** drop down menu to display more (e.g. choose **All commands** to see all the options).

<img src="../../../assets/plan/mission/mission_commands.jpg" style="width: 200px;"/>

To the right of each command name is a menu that you can click to access to additional options such as _Insert_ and _Delete_.

::: info
The list of available commands will depend on firmware and vehicle type.
Examples may include: Waypoint, Start image capture, Jump to item (to repeat mission) and other commands.
:::

### Mission Settings {#mission_settings}

The _Mission Start_ panel is the first item that appears in the [mission command list](#mission_command_list).
It may be used to specify a number default settings that may affect the start or end of the mission.

![Mission Command List - showing mission settings](file:///home/user/qgroundcontrol/docs/assets/plan/mission_start.png)

![Mission settings](file:///home/user/qgroundcontrol/docs/assets/plan/mission/mission_settings.png)

#### Mission Defaults

##### Waypoint alt

Set the default altitude for the first mission item added to a plan (subsequent items take an initial altitude from the previous item).
This can also be used to change the altitude of all items in a plan to the same value; you will be prompted if you change the value when there are items in a plan.

##### Flight speed

Set a flight speed for the mission that is different than the default mission speed.

#### Mission End

##### Return to Launch after mission end

Check this if you want your vehicle to Return/RTL after the final mission item.

#### Planned Home Position

The [Planned Home Position](#planned_home) section allows you to simulate the vehicle's home position while planning a mission.
This allows you to view the waypoint trajectory for your vehicle from takeoff to mission completion.

![MissionSettings Planned Home Position Section](file:///home/user/qgroundcontrol/docs/assets/plan/mission/mission_settings_planned_home_position_section.jpg)

::: info
This is only the _planned_ home position and you should place it where you plan to start the vehicle from.
It has no actual impact on flying the mission.
The actual home position of a vehicle is set by the vehicle itself when arming.
:::

This section allows you to set the **Altitude** and **Set Home to Map Centre**
(you can move it to another position by dragging it on the map).

#### Camera

The camera section allows you to specify a camera action to take, control the gimbal and set your camera into photo or video mode.

![MissionSettings Camera Section](file:///home/user/qgroundcontrol/docs/assets/plan/mission/mission_settings_camera_section.jpg)

The available camera actions are:

- No change (continue current action)
- Take photos (time)
- Take photos (distance)
- Stop taking photos
- Start recording video
- Stop recording video

#### Vehicle Info

The appropriate mission commands for the vehicle depend on the firmware and vehicle type.

If you are planning a mission while you are _connected to a vehicle_ the firmware and vehicle type will be determined from the vehicle.
This section allows you to specify the vehicle firmware/type when not connected to a vehicle.

![MissionSettings VehicleInfoSection](file:///home/user/qgroundcontrol/docs/assets/plan/mission/mission_settings_vehicle_info_section.jpg)

The additional value that can be specified when planning a mission is the vehicle flight speed.
By specifying this value, total mission or survey times can be approximated even when not connected to a vehicle.

## Troubleshooting

### Mission (Plan) Upload/Download Failures {#plan_transfer_fail}

Plan uploading and downloading can fail over a noisy communication link (affecting missions, GeoFence, and rally points).
If a failure occurs you should see a status message in the QGC UI similar to:

> Mission transfer failed. Retry transfer. Error: Mission write mission count failed, maximum retries exceeded.

The loss rate for your link can be viewed in [Settings View > MAVLink](../settings_view/mavlink.md).
The loss rate should be in the low single digits (i.e. maximum of 2 or 3):

- A loss rate in the high single digits can lead to intermittent failures.
- Higher loss rates often lead to 100% failure.

There is a much smaller possibility that issues are caused by bugs in either flight stack or QGC.
To analyse this possibility you can turn on [Console Logging](../settings_view/console_logging.md) for Plan upload/download and review the protocol message traffic.

## Further Info

- New Plan View features for [QGC release v3.2](../releases/release_note_stable_v3.md#plan_view)
- New Plan View features for [QGC release v3.3](../releases/release_note_stable_v3.md#plan-view-1)



<div style="page-break-after: always;"></div>

# Plan View - GeoFence

GeoFences allow you to create virtual regions within which the vehicle can fly, or in which it is _not allowed_ to fly.
You can also configure the action taken if you fly outside permitted areas.

![Geofence overview](file:///home/user/qgroundcontrol/docs/assets/plan/geofence/geofence_overview.jpg)

::: info
**ArduPilot users:** GeoFence support is only supported by Rover 3.6 and Copter 3.7 or higher. It also requires usage of a Daily build or Stable 3.6 (once available).
_QGroundControl_ will not display the GeoFence options if they are not supported by the connected vehicle.
:::

## Create a Geofence

To create a GeoFence:

1. Navigate to the Plan View
1. Select the _Geofence_ radio button above the Mission Command List

   ![Select geofence radio button](file:///home/user/qgroundcontrol/docs/assets/plan/geofence/geofence_select.jpg)

1. Insert a circular or polygon region by pressing the **Circular Fence** or **Polygon Fence** button, respectively.
   A new region will be added to the map and to the associated list of fences below the buttons.

:::tip
You can create multiple regions by pressing the buttons multiple times, allowing complex geofence definitions to be created.
:::

- Circular region:

  ![Circular Geofence](file:///home/user/qgroundcontrol/docs/assets/plan/geofence/geofence_circular.jpg)

  - Move the region by dragging the central dot on the map
  - Resize the circle by dragging the dot on the edge of the circle (or you can change the radius value in the fence panel).

- Polygon region:

  ![Polygon Geofence](file:///home/user/qgroundcontrol/docs/assets/plan/geofence/geofence_polygon.jpg)

  - Move the vertices by dragging the filled dots
  - Create new vertices by clicking the "unfilled" dots on the lines between the filled vertices.

1. By default new regions are created as _inclusion_ zones (vehicles must stay within the region).
   Change them to exclusion zones (where the vehicle can't travel) by unchecking the associated _Inclusion_ checkbox in the fence panel.

## Edit/Delete a GeoFence

You can select a geofence region to edit by selecting its _Edit_ radio button in the GeoFence panel.
You can then edit the region on the map as described in the previous section.

Regions can be deleted by pressing the associated **Del** button.

## Upload a GeoFence

The GeoFence is uploaded in the same way as a mission, using **File** in the [Plan tools](../plan_view/plan_view.md).

## Remaining tools

The rest of the tools work exactly as they do while editing a Mission.



<div style="page-break-after: always;"></div>

# Plan View - Rally Points

Rally Points are alternative landing or loiter locations.
They are typically used to provide a safer or more convenient (e.g. closer) destination than the home position in Return/RTL mode.

::: info
Rally Points are only supported by ArduPilot on Rover 3.6 and Copter 3.7 (or higher).
PX4 support is planned in PX4 v1.10 timeframes.
It also requires usage of a Daily build or Stable 3.6 (once available).
_QGroundControl_ will not display the Rally Point options if they are not supported by the connected vehicle.
:::

![Rally Points](file:///home/user/qgroundcontrol/docs/assets/plan/rally/rally_points_overview.jpg)

## Rally Point Usage

To create Rally Points:

1. Navigate to the Plan View
1. Select the _Rally_ radio button above the Mission Command List
1. Click the map wherever you want rally points.
   - An **R** marker is added for each
   - the currently active marker has a different colour (green) and can be edited using the _Rally Point_ panel.
1. Make any rally point active by selecting it on the map:
   - Move the active rally point by either dragging it on the map or editing the position in the panel.
   - Delete the active rally point by selecting the menu option on the _Rally Point_ panel
     ![Delete Rally Point](file:///home/user/qgroundcontrol/docs/assets/plan/rally/rally_points_delete.jpg)

## Upload Rally Points

Rally points are uploaded in the same way as a mission, using **File** in the [Plan tools](../plan_view/plan_view.md).

## Remaining tools

The rest of the tools work exactly as they do while editing a Mission.



<div style="page-break-after: always;"></div>

# Pattern

The _Pattern tools_ (in the [PlanView](../plan_view/plan_view.md) _Plan Tools_) allow you to specify complex flight patterns using a simple graphical UI.
The available pattern tools depend on the vehicle (and support for the vehicle-type in the flight stack).

![Pattern Tool (Plan Tools)](file:///home/user/qgroundcontrol/docs/assets/plan/pattern/pattern_tool.jpg)

| Pattern                                                         | Description                                                                                                                                                                                        | Vehicles          |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [Survey](../plan_view/pattern_survey.md)                         | Create a grid flight pattern over a polygonal area. <br />You can specify the polygon as well as the specifications for the grid and camera settings appropriate for creating geotagged images.    | All               |
| [Structure Scan](../plan_view/pattern_structure_scan_v2.md)      | Create a grid flight pattern that captures images over vertical surfaces (polygonal or circular). <br />These are typically used for the visual inspection or creation of 3D models of structures. | MultiCopter, VTOL |
| [Corridor Scan](../plan_view/pattern_corridor_scan.md)           | Create a flight pattern which follows a poly-line (for example, to survey a road).                                                                                                                 | All               |
| [Fixed Wing Landing](../plan_view/pattern_fixed_wing_landing.md) | Add a landing pattern for fixed wing vehicles to a mission.                                                                                                                                        | Fixed Wing        |



<div style="page-break-after: always;"></div>

# Survey (Plan Pattern)

A survey allows you to create a grid flight pattern over a polygonal area.
You can specify an arbitrary polygon, the angle and other properties of the grid, and camera settings appropriate for creating geotagged images.

::: warning
If the survey area has significant elevation variation then consider enabling [Terrain Following](#terrain).

When planning a Survey using camera specifications, the ground under the survey area are assumed to be flat - i.e. at the same altitude as the launch/home location.
If the ground elevation under the survey is either higher or lower than the home location the effective overlap in images will be less or more (respectively) than calculated.
If ground elevation under the survey area is _significantly_ higher than the home location you could inadvertently plan a mission path that causes the vehicle to fly into ground-level obstacles.

Using terrain following ensures that the survey more closely matches the desired altitude above terrain, and reduces the likelihood of planning a mission that is too close to ground level.
:::

![Survey](file:///home/user/qgroundcontrol/docs/assets/plan/survey/survey.jpg)

## Creating a Survey

To create a survey:

1. Open [PlanView](../plan_view/plan_view.md) _Plan Tools_.
1. Choose the _Pattern Tool_ from the _Plan Tools_ and then select _Survey_.

   ![Survey Menu](file:///home/user/qgroundcontrol/docs/assets/plan/survey/survey_menu.jpg)

   This will add a survey grid to the map, and a _Survey_ item to the mission list (on the right).

1. On the map drag the vertices to change the shape of the polygon.
1. Click the `(+)` symbol between existing vertices to create a new vertix.
   The new vertix can then be dragged into a new position.

The survey settings are covered in the next section.

## Settings

The survey can be further configured in the associated mission item (in the mission item list on the right hand side of the _Plan View_).

### Camera

Camera triggering behaviour depends on the camera/camera settings.
You can select an existing camera, custom camera, or manually enter the settings.
The list of available cameras (QGC 3.4) is given below.

![Survey - Camera Select](file:///home/user/qgroundcontrol/docs/assets/plan/survey/survey_camera_select.jpg)

#### Known Camera {#known_camera}

Selecting a known camera from the option dropdown generates a grid pattern based on the camera capabilities.

![Survey - Camera Sony](file:///home/user/qgroundcontrol/docs/assets/plan/survey/survey_camera_sony.jpg)

The default settings can be tuned for your survey using the configuration options:

- **Landscape/Portrait** - Camera orientation relative to the "normal" orientation of the vehicle.
- **Overlap** - Overlap between each image capture.
  This can be configured separately for when flying along grid lines or across them.
- Select one of:
  - **Altitude** - Survey altitude (ground resolution will be calculated/displayed for this altitude).
  - **Ground resolution** - Ground resolution for each image (altitude required to achieve this resolution calculated and shown).

#### Custom Camera {#custom_camera}

Selecting the custom camera option allows you to specify the settings for a new camera in a similar way to a known camera.

![Survey - Custom Camera](file:///home/user/qgroundcontrol/docs/assets/plan/survey/survey_camera_custom.jpg)

The camera-specific settings are:

- **Sensor width/height** - The size of the image sensor of the camera.
- **Image width/height** - The resolution of the image captured by the camera.
- **Focal Length** - The focal length of the camera lens.

The remaining settings are the same as for a [known camera](#known_camera).

#### Manual Camera

The manual camera option allows you to specify desired survey height, trigger interval and appropriate grid spacing for your camera.

![Survey - Manual Camera Settings](file:///home/user/qgroundcontrol/docs/assets/plan/survey/survey_camera_manual.jpg)

The configurable options are:

- **Altitude** - Survey altitude to fly the whole grid.
- **Trigger Distance** - The distance over ground between each camera shot.
- **Spacing** - Distance between adjacent grid (flight path) lines across the corridor.

### Transects

The _Transects_ section is used for grid settings that are independent of the camera used.

![Survey - Transects](file:///home/user/qgroundcontrol/docs/assets/plan/survey/survey_transects.jpg)

The configurable options are:

- **Angle** - The angle of the grid lines, relative to North.
  ![Survey - Angle](file:///home/user/qgroundcontrol/docs/assets/plan/survey/survey_transects_angle.jpg)
- **Turnaround dist** - Amount of additional distance to add outside the survey area for vehicle turn around.
- **Rotate Entry Point** - Press button to swap the start and end point of the survey.
- **Hover and capture image** - Hover to capture images (multicopter only).
- **Refly at 90 degree offset** - Check to refly the whole mission at a 90 degree offset.
  ![Survey - Fly Offset](file:///home/user/qgroundcontrol/docs/assets/plan/survey/survey_transects_offset.jpg)
- **Images in turnarounds** - Check to take images when turning
- **Relative altitude** - Check to make specified altitudes relative to home (if unchecked they are AMSL).

### Terrain

By default, a flying vehicle will follow the survey path at a fixed altitude.
Enabling _Terrain Following_ makes the vehicle maintain a constant height relative to ground.

![Survey - Terrain Following Settings](file:///home/user/qgroundcontrol/docs/assets/plan/survey/survey_terrain.jpg)

::: info
Terrain following uses terrain heights queried from _AirMap_ servers.
:::

The configurable options are:

- **Vehicle follows terrain** - Check to enable terrain following (and display the following options).
  - **Tolerance** - The accepted deviation in altitude from the target altitude.
  - **Max Climb Rate** - Maximum climb rate when following terrain.
  - **Max Descent Rate** - Maximum descent rate when following terrain.

### Statistics

The _Statistics_ section shows the calculated survey area, photo interval, photo spacing and planned photo count.

![Survey - Statistics](file:///home/user/qgroundcontrol/docs/assets/plan/survey/survey_statistics.jpg)



<div style="page-break-after: always;"></div>

# Structure Scan (Plan Pattern)

A _Structure Scan_ allows you to create a grid flight pattern that captures images over _vertical surfaces_ (e.g. walls) around a structure with an arbitrary polygonal (or circular) ground footprint.
Structure Scans are typically used for the visual inspection or creating 3D models of structures.

_Structure Scans_ may be inserted into a mission using the Plan view **Pattern > Structure Scan** tool.

::: info
The new version of _Structure Scan_ can't read older _Structure Scan_ plans. They will need to be recreated.
:::

::: warning
This feature is not yet supported by ArduPilot firmware.
It is supported in PX4.
:::

## Overview

The image below shows a screenshot of structure scan.
The green polygon is used to mark out the ground footprint of the structure, while the white line around it indicates the vehicle flight path.
The green numbered circle on the flight path is the scan entry/exit point (where the scan starts).

![Structure Scan](file:///home/user/qgroundcontrol/docs/assets/plan/structure_scan_v2/structure_scan.jpg)

The scan divides the structure evenly into layers; the vehicle flies all the way around the structure at a particular altitude and _scan distance_ from the structure, then repeats the process at each layer until the whole surface has been scanned.

![Layer JPG](file:///home/user/qgroundcontrol/docs/assets/plan/structure_scan_v2/layers.jpg)

Users can set the _scan bottom altitude_ to avoid obstacles at the bottom of the structure, and the _extrance/exit altitude_ to avoid obstacles as the vehicle travels to/from the scan.

## Creating a Scan

To create a scan:

1. In the **Plan View** select **Pattern tool > Structure Scan**.

![Create Scan JPG](file:///home/user/qgroundcontrol/docs/assets/plan/structure_scan_v2/create_scan.jpg)

1. This will create a simple square structure scan on the map.

   ![Initial Polygon](file:///home/user/qgroundcontrol/docs/assets/plan/structure_scan_v2/initial_polygon_scan.jpg)

   The region shown in green must be modified so that it surrounds the structure.

   - Drag the opaque vertices on the map to the edge of the structure (example circled in mauve above).
   - If the structure footprint is more than a simple square you can click the semi-transparent circles between the vertices to create a new vertix.

1. You can also change to a circular footprint by clicking on the central "vertix" (marked in red) and selecting _Circle_ in the popup menu.

   ![Circle Scan](file:///home/user/qgroundcontrol/docs/assets/plan/structure_scan_v2/circle_scan.jpg).

   - From the popup menu you can switch back to a polygon footprint and change the radius and/or position of the scan.
   - Drag the central vertix to position the centre of the circle.

1. The rest of the configuration is handled using the _Structure Scan_ editor on the right hand side of the view.
   First select whether you want to perform a manual scan, a scan using a particular camera, or a scan using a custom camera definition.

   ::: info
   The main difference between the modes is that predefined cameras are already set up to correctly calculate an effective layer height and trigger distance.
   :::

   Options for the different modes are shown below.

   ![Structure Scan editor](file:///home/user/qgroundcontrol/docs/assets/plan/structure_scan_v2/editor_options.jpg)

The user can always configure the following settings:

- **Start scan from top/bottom:** The direction in which layers are scanned.
- **Structure height:** The height of the object being scanned.
- **Scan distance:** Distance from the structure to the flight path.
- **Entrance/Exit Alt:** Use this setting to avoid obstacles between the last/next waypoint and the structure to be scanned.
  - The vehicle will fly to the _Entrance/Exit_ point at this altitude and then descend to the initial layer to start the scan.
  - The vehicle will ascend to this altitude after completing the scan and then move to the next waypoint.
- **Scan Bottom Alt:** Use this setting to avoid obstacles around the base of the structure.
  This adjust the bottom of the structure to be above the ground, and hence the altitude of the first scan
  (the height of the lowest layer flight path is shown in the scan statistics as _Bottom Layer Alt_.
- **Rotate Entry Point:** Move the start/finish point to the next vertix/position on the flight path.

The remaining settings depend on the _camera mode_:

- _Manual Mode_ allows you to specify:
  - **Layer height:** The height of each layer.
  - **Trigger Distance:** The distance between each camera trigger.
    The camera is only triggered while flying the layer path.
    It does not trigger images while transitioning from one layer to the next.
  - **Gimbal Pitch** - Gimbal pitch you want to use for the scan.
- _Known/pre-defined cameras_ automatically calculates layer heights and image triggering from required image overlap, and allows you to trade off scan distance and require image resolution.
  It also ensures that the camera is pointed directly at the surface when it is capturing images (i.e. at a right angle rather than some tangent).
  The settings are:

  - **Camera Orientation:** Portrait or Landscape
  - _Overlap_:
    - **Front Lap:** Image overlap from top to bottom (increasing shrinks layer height and increases layer count).
    - **Side Lap:** Image overlap at sides (increasing takes more images in each lap/layer scan).
  - **Scan distance:** Distance from the structure to the flight path.
  - **Ground Res:** Required image resolution/sample quality of surface.

- _Custom camera_ selection allows you to enter your own camera characteristics, but otherwise behaves the same as a predefined camera.



<div style="page-break-after: always;"></div>

# Corridor Scan (Plan Pattern)

A corridor scan allows you to create a flight pattern that follows a poly-line. This can be used to, for example, survey a road. It is supported on all autopilots and vehicle types.

> **Important** When planning a Corridor Scan using camera specifications the ground elevations under your survey area are assumed to be at the same altitude as your launch/home location. If the ground elevation under your survey area is either higher or lower than your launch/home location the effective overlap in your images will be less or more (respectively) than calculated. If ground elevation under your survey area is significantly higher than your launch/home location you could inadvertently plan a mission which causes the vehicle to fly into trees, obstacles, or the ground. Use Terrain Follow to create a survey that more closely maintains the desired altitude above terrain that has significant elevation differences from your launch/home altitude.

![Corridor Scan](file:///home/user/qgroundcontrol/docs/assets/plan/corridor_scan.jpg)

You can specify the path, the width of the corridor, and camera settings appropriate for creating geotagged images.

## Creating a Scan

To create a corridor scan:

1. Open [PlanView](../plan_view/plan_view.md) _Plan Tools_.
1. Choose the _Pattern Tool_ from the _Plan Tools_ and then select _Corridor Scan_.

   ![Corridor Scan](file:///home/user/qgroundcontrol/docs/assets/plan/corridor_scan_menu.jpg)

   This will add a corridor to the map, and a _Corridor Scan_ item to the mission list (on the right).

1. On the map drag the ends of the corridor to the start and end positions of the scan, respectively.
1. Click the `(+)` symbol at the centre of a line to create a new vertix.
   The new vertix can then be dragged into position to follow the path of the desired corridor.

The corridor scan settings are covered in the next section.

## Settings

The corridor scan can be further configured in the associated mission item (in the mission item list on the right hand side of the Plan View).

### Camera

Camera triggering behaviour depends on the camera/camera settings.
You can select an existing camera or manually enter the settings.
The list of available cameras (QGC 3.4) is given below.

![Corridor Scan - Select Camera](file:///home/user/qgroundcontrol/docs/assets/plan/corridor_scan_settings_camera_select.jpg)

#### Known Camera

Selecting a known camera from the option dropdown allows you to generate a grid pattern based on the camera's specifications.

![Corridor Scan - Camera Settings Canon SX260](file:///home/user/qgroundcontrol/docs/assets/plan/corridor_scan_settings_camera_canon_sx260.jpg)

The configurable options are:

- **Landscape/Portrait** - Camera orientation relative to the "normal" orientation of the vehicle.
- **Image Overlap** - Overlap between each image.
- Select one of:
  - **Altitude** - Survey altitude (ground resolution will be calculated/displayed for this altitude).
  - **Ground resolution** - Ground resolution for each image (altitude required to achieve this resolution calculated and shown).

#### Manual Camera

The manual camera option allows you to specify desired survey height, trigger interval and appropriate grid spacing for your camera.

![Corridor Scan - Manual Camera Settings](file:///home/user/qgroundcontrol/docs/assets/plan/corridor_scan_settings_camera_manual.jpg)

The configurable options are:

- **Altitude** - Survey altitude.
- **Trigger Distance** - The distance over ground between each camera shot.
- **Spacing** - Distance between adjacent grid (flight path) lines across the corridor.

### Corridor

![Corridor Scan - Corridor Settings](file:///home/user/qgroundcontrol/docs/assets/plan/corridor_scan_settings_corridor.jpg)

The configurable options are:

- **Width** - Set the width of the scan around the polyline that defines the path.
- **Turnaround dist** - Amount of additional distance to add outside the survey area for vehicle turn around.
- **Take images in turnarounds** - Check to enable image capture a turnaround points.
- **Relative altitude** - Check to specify a relative altitude. This is only supported for manual grids that are not using [terrain following](#terrain_following).
- **Rotate entry point** - Press button to swap the start and end point of the corridor scan.

### Terrain Following {#terrain_following}

By default a flying vehicle will follow the corridor path at a fixed altitude.
Enabling _Terrain Following_ makes the vehicle maintain a constant height relative to ground.

![Corridor Scan - Terrain Following Settings](file:///home/user/qgroundcontrol/docs/assets/plan/corridor_scan_settings_terrain.jpg)

::: info
Terrain following uses terrain heights queried from _AirMap_ servers.
:::

The configurable options are:

- **Vehicle follows terrain** - Check to enable terrain following (and display the following options).
  - **Tolerance** - The accepted deviation in altitude from the target altitude.
  - **Max Climb Rate** - Maximum climb rate when following terrain.
  - **Max Descent Rate** - Maximum descent rate when following terrain.

### Statistics

The _Statistics_ section shows the calculated survey area, photo interval, photo spacing and planned photo count.

![Corridor Scan - Statistics](file:///home/user/qgroundcontrol/docs/assets/plan/corridor_scan_settings_statistics.jpg)



<div style="page-break-after: always;"></div>

# Fixed Wing Landing Pattern (Plan Pattern)

The _Fixed Wing Landing Pattern_ tool allows you to add a fixed wing landing pattern to a mission.
It is supported on both ArduPilot and PX4.

![Fixed Wing Landing Pattern](file:///home/user/qgroundcontrol/docs/assets/plan/pattern/fixed_wing_landing_pattern.jpg)

The first point of the pattern is a loiter point with a specific altitude and the second is a landing point.
The vehicle will loiter at the first point until it reaches the target altitude, and then begin the landing sequence to fly down to the specified landing spot.

Both the loiter and land points can be dragged to new positions, and a number of other settings can be configured in the associated mission item.

## Creating a Landing Pattern

To create a landing pattern:

1. Open [PlanView](../plan_view/plan_view.md) _Plan Tools_.
1. Choose the _Pattern Tool_ from the _Plan Tools_ and then select _Fixed Wing Landing Pattern_.

   ![Fixed Wing Landing Pattern](file:///home/user/qgroundcontrol/docs/assets/plan/pattern/fixed_wing_landing_pattern_menu.jpg)

   This will add a _Landing Pattern_ item to the mission list (on the right).

   ![Fixed Wing Landing Pattern](file:///home/user/qgroundcontrol/docs/assets/plan/pattern/fixed_wing_landing_pattern_mission_item_initial.jpg)

1. Click on the map to create both the loiter point and the landing point.
   These can be moved on the map.

Additional settings are covered in the next section.

## Settings

The landing pattern can be further configured in the associated mission item (in the mission item list on the right hand side of the Plan View).

### Loiter Point

The _Loiter Point_ settings are used to configure the loiter altitude, radius and direction.

![Landing Pattern - Loiter Point](file:///home/user/qgroundcontrol/docs/assets/plan/pattern/fixed_wing_landing_pattern_settings_loiter.jpg)

The configurable options are:

- **Altitude** - Loiter altitude.
- **Radius** - Loiter radius.
- **Loiter clockwise** - Check to loiter in a clockwise direction (anti-clockwise is the default).

### Landing Point

The _Landing Point_ settings are used to configure the landing position and path.

![Landing Pattern - Landing Point](file:///home/user/qgroundcontrol/docs/assets/plan/pattern/fixed_wing_landing_pattern_settings_landing.jpg)

The configurable options are:

- **Heading** - Heading from loiter point to land point.
- **Altitude** - Altitude for landing point (nominally zero).
- _Radio Buttons_
  - **Landing Dist** - Distance between loiter point and landing point.
  - **Glide Slope** - Glide slope between loiter point and landing point.
- **Altitudes relative to home** - Check to set all altitudes in mission item to be relative to home (default is AMSL).

## Implementation

This pattern creates three mission items:

- `DO_LAND_START` - If you abort a landing it sends `DO_GO_AROUND` to the vehicle, which then causes the mission to return to this point and try to land again.
- `NAV_LOITER_TO_ALT` - Start point for landing
- `NAV_LAND` - End point for landing

The vehicle flares to landing using a flight path generated by the firmware between the `NAV_LOITER_TO_ALT` point and the `NAV_LAND` point.

If those two locations violate the vehicle's flare constraints (e.g. descent angle is too steep) an error will be raised after you upload the invalid mission to the vehicle.

::: info
On PX4, violating the flare constraints sends an error message to the ground station at upload time, and the autopilot will refuse to start the mission (since it fails integrity checks).
:::



<div style="page-break-after: always;"></div>

# Plan View - Pattern Presets

Allows you to save commonly used settings as a named preset.

::: info
Currently only supported by Survey. Support for other Patterns is in development.
:::

## Managing Presets

![Preset Combo](file:///home/user/qgroundcontrol/docs/assets/plan/pattern/pattern_preset_combo.jpg)

Pattern items have a new selection at the top which allows you to manage presets:

- **Custom (specify all settings)** This allows you to _not_ use a preset and specify all settings manually.
- **Save Settings As Preset** Saves the current settings as a named preset.
- **Delete Current Preset** Deletes the currently selected preset.
- **Presets:** Below this item will be listed the available presets for this pattern.

## Creating/Updating A Preset

![Preset Save](file:///home/user/qgroundcontrol/docs/assets/plan/pattern/pattern_preset_save.jpg)

When you select **Save Settings As Preset** you will be prompted for the preset name. To save new settings for an existing preset select **Save Settings As Preset** while a preset is currently selected.

You can also specify whether you want to save the currently selected camera in the preset. If you choose not to save the camera with the preset then the current camera will be used when loading the preset. You will also be able to change to a different camera when using the preset. Unless you fly your vehicle with different cameras at different times with the same preset you should select to save the camera in the preset.

## Viewing Preset Settings

If you want to view what the exact settings are for a Preset switch back to **Custom (specify all settings)** which will show you all the settings. Then you can switch back to using the named preset when done.

## Presets In A Plan File

The currently selected Preset is also saved in the Plan file such that when you load the Plan back the preset will once again be selected. Keep in mind that presets are specific to your version of QGroundControl. If you share a Plan file with a preset with another user, incorrect behavior may occur if that other user also has a preset of the same name but different settings.



<div style="page-break-after: always;"></div>

# Setup View

The Setup View is used to configure a new vehicle prior to first flight and/or tune a configured vehicle.

![](file:///home/user/qgroundcontrol/docs/assets/setup/setup_view.jpg)

## Setup Options

To the left of the screen are the set of available setup options. A setup button is marked with a red icon if there are still settings needed to be adjusted/specified. You should not fly if any of these are red. In the above image the Radio setup is not yet complete.

::: info
The set of options shown and the contents of each option may differ based on whether the vehicle is running PX4 Pro or ArduPilot firmware. The image above is from a vehicle which is running PX4 Pro firmware.
:::

**Summary**
<br>An overview of all the important setup options for your vehicle. Similar to the individual setup buttons, the summary blocks show a red indicator when those settings are not fully configured.

**[Firmware](firmware.md)**
<br>Flash new firmware onto your vehicle.

**[Airframe](airframe.md)**
<br>Specify the airframe type for the vehicle.

**[Radio](radio.md)**
<br>Calibrate your Radio Control Transmitter.

**[Sensors](sensors.md)**
<br>Calibrate the sensors on the vehicle.

**[Flight Modes](flight_modes.md)**
<br>Used to assign flight modes to your RC Transmitter switches.

**[Power](power.md)**
<br>Battery settings and additional power options such as ESC calibration.

**[Motors](motors.md)**
<br>Motors testing and setup.

**[Safety](safety.md)**
<br>Specify settings for options related to Safety such as Return to Home or Failsafes.

**[Tuning](tuning.md)**
<br>Tune flight characteristics of the vehicle.

**[Camera](camera.md)**
<br>Configure settings for camera and gimbal.

**[Parameters](parameters.md)**
<br>Allows you to modify all parameters associated with your vehicle.
<br>
<br>



<div style="page-break-after: always;"></div>

# Loading Firmware

_QGroundControl_ **desktop** versions can install [PX4 Pro](http://px4.io/) or [ArduPilot](http://ardupilot.com) firmware onto Pixhawk-family flight-controller boards. By default QGC will install the current stable version of the selected autopilot, but you can also choose to install beta builds, daily builds, or custom firmware files.

_QGroundControl_ can also install the firmware for SiK Radios and PX4 Flow devices.

> **Caution** Loading Firmware is currently not available on tablet or phone versions of _QGroundControl_.

## Connect Device for Firmware Update

> **Caution** **Before you start installing Firmware** all USB connections to your vehicle must be _disconnected_ (both direct or through a telemetry radio). The vehicle must _not be_ powered by a battery.

1. First select the **Gear** icon (_Vehicle Setup_) in the top toolbar and then **Firmware** in the sidebar.

![Firmware disconnected](file:///home/user/qgroundcontrol/docs/assets/setup/firmware/firmware_disconnected.jpg)

1. Connect your device (Pixhawk, SiK Radio, PX4 Flow) directly to your computer via USB.

   ::: info
   Connect directly to a powered USB port on your machine (do not connect through a USB hub).
   :::

## Select Firmware to Load

Once the device is connected you can choose which firmware to load (_QGroundControl_ presents sensible options based on the connected hardware).

1. For a Pixhawk-compatible board choose either **PX4 Flight Stack vX.X.X Stable Release** or **ArduPilot Flight Stack** radio buttons to download the _current stable release_.

   ![Select PX4](file:///home/user/qgroundcontrol/docs/assets/setup/firmware/firmware_select_default_px4.jpg)

   If you select _ArduPilot_ you will also have to choose the specific firmware and the type of vehicle (as shown below).

   ![Select ArduPilot](file:///home/user/qgroundcontrol/docs/assets/setup/firmware/firmware_selection_ardupilot.jpg)

1. Check **Advanced settings** to select specific developer releases or install firmware from your local file system.

   ![ArduPilot - Advanced Settings](file:///home/user/qgroundcontrol/docs/assets/setup/firmware/firmware_selection_advanced_settings.jpg)

## Update the firmware

1. Click the **OK** button to start the update.

   The firmware will then proceed through a number of upgrade steps (downloading new firmware, erasing old firmware etc.).
   Each step is printed to the screen and overall progress is displayed on a progress bar.

   ![Firmware Upgrade Complete](file:///home/user/qgroundcontrol/docs/assets/setup/firmware/firmware_upgrade_complete.jpg)

Once the firmware has finished loading the device/vehicle will reboot and reconnect.
Next you will need to configure the [airframe](../setup_view/airframe.md) (and then sensors, radio, etc.)



<div style="page-break-after: always;"></div>

# Airframe Setup

This page allows you to configure the main airframe selection associated with your vehicle.
The view/process differs slightly based on the flight controller firmware used.

- [Airframe (ArduPilot)](../setup_view/airframe_ardupilot.md)
- [Airframe (PX4)](../setup_view/airframe_px4.md)



<div style="page-break-after: always;"></div>

# Airframe Setup (ArduPilot)

Airframe Setup is used to select the frame class and type that matches your vehicle

::: info
Airframe Setup is only available on _ArduCopter_ and _ArduSub_ vehicles (it is not shown for _ArduPilot_ Rover or Plane vehicles).
:::

## ArduCopter Airframe Setup

To select the airframe in Copter:

1. First select the **Gear** icon (Vehicle Setup) in the top toolbar and then **Airframe** in the sidebar.

   ![Airframe config](file:///home/user/qgroundcontrol/docs/assets/setup/airframe/arducopter.jpg)

1. Select the broad _Frame Class_ for your vehicle:

   ![Airframe type](file:///home/user/qgroundcontrol/docs/assets/setup/airframe/arducopter_class.jpg)

   ::: info
   You will need to reboot the vehicle for class changes to take effect.
   :::

1. Select the specific _Frame Type_ for your vehicle:

   ![Airframe type](file:///home/user/qgroundcontrol/docs/assets/setup/airframe/arducopter_type.jpg)

## ArduSub Frame Setup {#ardusub}

To select the frame type for Sub:

1. First select the **Gear** icon (Vehicle Setup) in the top toolbar and then **Frame** in the sidebar.
1. Select the frame type that matches your vehicle (selecting a frame applies the selection).
1. Make sure that all **green** thrusters have **clockwise** propellers and all **blue** thrusters have **counter-clockwise** propellers (or vice-versa).

   ![Select airframe type](file:///home/user/qgroundcontrol/docs/assets/setup/airframe_ardusub.jpg)

   - You can also click **Load Vehicle Default Parameters** to load default parameter set for ArduSub.

     ![Load vehicle params](file:///home/user/qgroundcontrol/docs/assets/setup/airframe_ardusub_parameters.jpg)



<div style="page-break-after: always;"></div>

# Airframe Setup (PX4)

To select the airframe in PX4:

1. Start _QGroundControl_ and connect the vehicle.
1. Select **QGroundControl icon > Vehicle Setup > Airframe** (sidebar) to open _Airframe Setup_.
1. Select the broad vehicle group/type that matches your airframe and then use the dropdown within the group to choose the airframe that best matches your vehicle.

   ![Airframe options](file:///home/user/qgroundcontrol/docs/assets/setup/airframe_px4/airframe_px4.jpg)

   The example above shows _Generic Hexarotor X geometry_ selected from the _Hexarotor X_ group.

1. Click the **Apply and Restart** button on the top right of the screen.
1. Click **Apply** in the following prompt to save the settings and restart the vehicle.

   <img src="../../../assets/setup/airframe_px4/airframe_px4_apply_prompt.jpg" width="200px" title="Apply airframe selection prompt" />



<div style="page-break-after: always;"></div>

# Radio Setup

Radio Setup is used to configure the mapping of your main transmitter attitude control sticks (roll, pitch, yaw, throttle) to channels, and to calibrate the minimum, maximum, trim and reverse settings for all other transmitter controls/RC channels.

The main calibration process is identical for PX4 and ArduPilot (a number of additional flight-controller specific settings/tools are [detailed below](#additional-radio-setup)).

::: info
Before you can calibrate the radio system the receiver and transmitter must be connected/bound. The process for binding a transmitter and receiver pair is hardware specific (see your manual for instructions).
:::

## Performing the Calibration

The calibration process is straightforward - you will be asked to move the sticks in a specific pattern that is shown on the transmitter diagram on the top right of the screen. Simply follow the instructions to complete calibration.

To calibrate the radio:

1. Select the **Gear** icon (Vehicle Setup) in the top toolbar and then **Radio** in the sidebar.
1. Turn on your RC transmitter.
1. Press **OK** to start the calibration.

   ![Radio setup - before starting](file:///home/user/qgroundcontrol/docs/assets/setup/radio_start_setup.jpg)

   ::: info
   The image above is for PX4 Pro. Calibration/top section is the same for both firmware, but the _Additional Radio setup_ section will differ.
   :::

1. Set the _transmitter mode_ radio button that matches your transmitter configuration (this ensures that _QGroundControl_ displays the correct stick positions for you to follow during calibration).

   ![Radio setup - move sticks](file:///home/user/qgroundcontrol/docs/assets/setup/radio_sticks_throttle.jpg)

1. Move the sticks to the positions indicated in the text (and on the transmitter image). Press **Next** when the sticks are in position. Repeat for all positions.
1. When prompted, move all other switches and dials through their full range (you will be able to observe them moving on the _Channel Monitor_).

1. Press **Next** to save the settings.

Radio calibration is demonstrated in the [PX4 setup video here](https://youtu.be/91VGmdSlbo4?t=4m30s) (youtube).

## Additional Radio Setup

At the lower part of the _Radio Setup_ screen is firmware-specific _Additional Radio setup_ section. The options for each autopilot are shown below.

| PX4                                                                                                                                  | ArduPilot                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="../../../assets/setup/radio_additional_radio_setup_px4.jpg" title="Radio setup - PX4 additional settings" width="300px" /> | <img src="../../../assets/setup/radio_additional_radio_setup_ardupilot.jpg" title="Radio setup - ArduPilot additional settings" width="300px" /> |

### Spectrum Bind (ArduPilot/PX4)

Before you can calibrate the radio system the receiver and transmitter must be connected/bound. If you have a _Spektrum_ receiver you can put it in _bind mode_ using _QGroundControl_ as shown below (this can be particularly useful if you don't have easy physical access to the receiver on your vehicle).

To bind a Spektrum transmitter/receiver:

1. Select the **Spektrum Bind** button
1. Select the radio button for your receiver
1. Press **OK**

   ![Spektrum Bind](file:///home/user/qgroundcontrol/docs/assets/setup/radio_additional_setup_spectrum_bind_select_channels.jpg)

1. Power on your Spektrum transmitter while holding down the bind button.

### Copy Trims (PX4)

This setting is used to copy the manual trim settings from your radio transmitter so that they can be applied automatically within the autopilot. After this is done you will need to remove the manually set trims.

To copy the trims:

1. Select **Copy Trims**.
1. Center your sticks and move throttle all the way down.
1. Press **Ok**.

   ![Copy Trims](file:///home/user/qgroundcontrol/docs/assets/setup/radio_additional_radio_setup_copy_trims_px4.jpg)

1. Reset the trims on your transmitter back to zero.

### AUX Passthrough Channels (PX4)

AUX passthrough channels allow you to control arbitrary optional hardware from your transmitter (for example, a gripper).

To use the AUX passthrough channels:

1. Map up to 2 transmitter controls to separate channels.
1. Specify these channels to map to the AUX1 and AUX2 ports respectively, as shown below. Values are saved to the vehicle as soon as they are set.

   ![AUX1 and AUX2 RC passthrough channels](file:///home/user/qgroundcontrol/docs/assets/setup/radio_additional_setup_aux_passthrough_channels_px4.jpg)

The flight controller will pass through the unmodified values from the specified channels out of AUX1/AUX2 to the connected servos/relays that drive your hardware.

### Param Tuning Channels (PX4)

Tuning channels allow you to map a transmitter tuning knob to a parameter (so that you can dynamically modify a parameter from your transmitter).

::: tip
This feature is provided to enable manual in-flight tuning.
:::

The channels used for parameter tuning are assigned in the _Radio_ setup (here!), while the mapping from each tuning channel to its associated parameter is defined in the _Parameter editor_.

To set up tuning channels:

1. Map up to 3 transmitter controls (dials or sliders) to separate channels.
1. Select the mapping of _PARAM Tuning Id_ to radio channels, using the selection lists. Values are saved to the vehicle as soon as they are set.

   ![Map radio channels to tuning channels](file:///home/user/qgroundcontrol/docs/assets/setup/radio_additional_radio_setup_param_tuning_px4.jpg)

To map a PARAM tuning channel to a parameter:

1. Open the **Parameters** sidebar.
1. Select the parameter to map to your transmitter (this will open the _Parameter Editor_).
1. Check the **Advanced Settings** checkbox.
1. Click the **Set RC to Param...** button (this will pop-up the foreground dialog displayed below)

   ![Map tuning channels to parameters](file:///home/user/qgroundcontrol/docs/assets/setup/parameters_radio_channel_mapping_px4.jpg)

1. Select the tuning channel to map (1, 2 or 3) from the _Parameter Tuning ID_ selection list.
1. Press **OK** to close the dialog.
1. Press **Save** to save all changes and close the _Parameter Editor_.

::: tip
You can clear all parameter/tuning channel mappings by selecting menu **Tools > Clear RC to Param** at the top right of the _Parameters_ screen.
:::



<div style="page-break-after: always;"></div>

# Sensors

The _Sensor Setup_ section allows you to configure and calibrate the vehicle's compass, gyroscope, accelerometer and any other sensors
(the available sensors will depend on the autopilot firmware and vehicle type).

Available sensors are displayed as a list of buttons beside the sidebar.
Sensors marked with green are already calibrated, while sensors marked with red require calibration prior to flight.
Sensors with no light are simple settings with default values that you may choose not to calibrate.

Click on the button for each sensor to start its calibration sequence.

Flight stack specific instructions are provided in the following topics:

- [Sensors (ArduPilot)](../setup_view/sensors_ardupilot.md)
- [Sensors (PX4)](../setup_view/sensors_px4.md)



<div style="page-break-after: always;"></div>

# Sensor Setup (ArduPilot)

The _Sensor Setup_ section allows you to configure and calibrate the vehicle's compass, gyroscope, accelerometer and any other sensors
(the available sensors will depend on the vehicle type).

Available sensors are displayed as a list of buttons beside the sidebar.
Sensors marked with green are already calibrated, while sensors marked with red require calibration prior to flight.
Sensors with no light are simple settings with default values that you may choose not to calibrate.

Click on the button for each sensor to start its calibration sequence.

![Sensors Setup screen Copter](file:///home/user/qgroundcontrol/docs/assets/setup/sensor/sensor_setup_overview_ardupilot.jpg)

## Accelerometer {#accelerometer}

To calibrate the flight controller accelerometers you will be asked to place and hold your vehicle a number of orientations (you will be prompted when to move between positions).

The calibration steps are:

1. Click the **Accelerometer** sensor button.
   ![Accelerometer calibration](file:///home/user/qgroundcontrol/docs/assets/setup/sensor/accelerometer_ardupilot.jpg)

   ::: info
   You should already have set the [Flight Controller Orientation](#flight_controller_orientation) above.
   If not, you can also set it here.
   :::

1. Click **OK** to start the calibration.
1. Position the vehicle based on text instructions in the center display.
   Click the **Next** button to capture each position.
   ![Accelerometer calibration](file:///home/user/qgroundcontrol/docs/assets/setup/sensor/accelerometer_positions_ardupilot.jpg)

## Compass {#compass}

ArduPilot uses onboard calibration support that allows for more accurate calibration.

::: info
Older ArduPilot firmware can be calibrated using the [same process as PX4](../setup_view/sensors_px4.md#compass).
:::

You need to rotate the vehicle randomly around all axes until the progress bar fills all the way to the right and the calibration completes. When the calibration completes you will get the following results:

![ArduPilot Compass Calibration Onboard Result](file:///home/user/qgroundcontrol/docs/assets/setup/sensor_compass_ardupilot_onboard_calibration_result.jpg)

This shows you the quality of the calibration for each compass. Using these values you can determine whether you may want to turn off usage of poorly performing compasses.

## Level Horizon {#level_horizon}

If the horizon (as shown in the HUD) is not level after completing accelerometer calibration you can calibrate the level horizon for your vehicle.
You will be asked to place the vehicle in a level orientation while it captures the information.

1. Click the **Level Horizon** sensor button.
   ![Level Horizon calibration](file:///home/user/qgroundcontrol/docs/assets/setup/sensor_level_horizon.jpg)

   ::: info
   You should already have set the [Flight Controller Orientation](#flight_controller_orientation) above.
   If not, you can also set it here.
   :::

1. Place the vehicle in its level flight orientation on a level surface:

- For planes this is the position during level flight (planes tend to have their wings slightly pitched up!)
- For copters this is the hover position.

1. Click **OK** to start the calibration.

## Pressure/Barometer {#pressure}

This calibration set's the altitude to zero at the current pressure.

To perform **Pressure** calibration:

1. Click the **Calibrate Pressure** button and then **Ok**.

   ![Calibrate Pressure](file:///home/user/qgroundcontrol/docs/assets/setup/sensor/calibrate_pressure_ardupilot.jpg)

   The calibration result is immediately displayed:

   ![Calibrate Pressure Result](file:///home/user/qgroundcontrol/docs/assets/setup/sensor/calibrate_pressure_result_ardupilot.jpg)

## CompassMot (Optional)

CompassMot calibration is optional! It is recommended for vehicles that only have an internal compass and when there is significant interference on the compass from the motors, power wires, etc.
CompassMot only works well if you have a battery current monitor because the magnetic interference is linear with current drawn.

To perform **CompassMot** calibration:

1. Click the **CompassMot** sensor button.

   <img src="../../../assets/setup/sensor_compass_mot_menu.jpg" style="width: 250px;"/>

1. Follow the onscreen prompts.

   ![CompassMot calibration](file:///home/user/qgroundcontrol/docs/assets/setup/sensor_compass_mot.jpg)

## Sensor Settings {#sensor_settings}

The _Sensor Settings_ section allows you to specify the compass orientation and which compasses are enabled.

::: tip
You can skip this section if the flight controller and compass are mounted upright on the vehicle and facing the front (this is the default orientation - `ROTATION_NONE`).
:::

If the autopilot/compass are mounted in any other way you will need to specify their orientations as YAW, PITCH and/or ROLL offsets relative to the forward-facing-upright orientation (clock-wise rotation around the Z, Y and X axis, respectively).

![Flight Controller Orientation](file:///home/user/qgroundcontrol/docs/assets/setup/flight_controller_orientation.png)

For example, the image below are at orientations: `ROTATION_NONE`, `ROTATION_YAW_90`,`ROTATION_YAW_180`,`ROTATION_YAW_270`.

![Flight controller yaw rotation](file:///home/user/qgroundcontrol/docs/assets/setup/flight_controller_yaw_rotation.png)

To set the orientation(s) and compasses used:

1. Select the **Sensor Settings** button.

   ![Sensor Settings](file:///home/user/qgroundcontrol/docs/assets/setup/sensor/sensor_settings_ardupilot.jpg)

1. Select the **AutoPilot Orientation**.
1. Select the _orientation_ from **Compass 1 (primary/external) > Orientation** (or check **Compass2 (secondary, external) > Use Compass** to instead use the internal compass).
1. Press **OK**.



<div style="page-break-after: always;"></div>

# Sensor Setup (PX4)

The _Sensor Setup_ section allows you to configure and calibrate the vehicle's compass, gyroscope, accelerometer and any other sensors
(the available sensors will depend on the vehicle type).

Available sensors are displayed as a list of buttons beside the sidebar.
Sensors marked with green are already calibrated, while sensors marked with red require calibration prior to flight.
Sensors with no light are simple settings with default values that you may choose not to calibrate.

Click on the button for each sensor to start its calibration sequence.

![Sensors Setup screen for VTOL vehicle](file:///home/user/qgroundcontrol/docs/assets/setup/sensors_px4_vtol.jpg)

::: info
The image shown is from a VTOL vehicle running PX4 firmware.
Other autopilot firmware and vehicles will offer slightly different options.
:::

## Compass {#compass}

The process guides you to position the vehicle in a number of set orientations and rotate the vehicle about the specified axis.

The calibration steps are:

1. Click the **Compass** sensor button
   ![Select Compass calibration PX4](file:///home/user/qgroundcontrol/docs/assets/setup/sensor_compass_select_px4.jpg)

   ::: info
   The default flight controller orientation is `ROTATION_NONE` (flight controller and compass mounted upright on the vehicle and facing the front).
   You can set a different value here or in [Set Orientations](#flight_controller_orientation).
   :::

1. Click **OK** to start the calibration.
1. Place the vehicle in any of the orientations shown in red (incomplete) and hold it still.
   Once prompted (the orientation-image turns yellow) rotate the vehicle around the specified axis in either/both directions.
   Once the calibration is complete in that orientation the associated image on the screen will turn green.
   ![Compass calibration steps on PX4](file:///home/user/qgroundcontrol/docs/assets/setup/sensor_compass_calibrate_px4.jpg)
1. Repeat the calibration process for all vehicle orientations.

Once you've rotated the vehicle in all the positions _QGroundControl_ will display _Calibration complete_ (all orientation images will be displayed in green and the progress bar will fill completely)
You can then proceed to the next sensor.

## Gyroscope {#gyroscope}

You will be guided to place the vehicle on a flat surface and keep it still.

The calibration steps are:

1. Click the **Gyroscope** sensor button
   ![Select Gyroscope calibration PX4](file:///home/user/qgroundcontrol/docs/assets/setup/sensor/gyroscope_calibrate_px4.jpg)
1. Place the vehicle on a surface and leave it still.
1. Click **Ok** to start the calibration.

   The bar at the top shows the progress:

   ![Gyro calibration in progress on PX4](file:///home/user/qgroundcontrol/docs/assets/setup/sensor/gyroscope_calibrate_progress_px4.jpg)

1. When finished, _QGroundControl_ will display _Calibration complete_ and the progress bar will fill completely.
   ![Gyro calibration complete on PX4](file:///home/user/qgroundcontrol/docs/assets/setup/sensor/gyroscope_calibrate_complete_px4.jpg)

::: info
If you move the vehicle during calibration, _QGroundControl_ will automatically restart the calibration.
:::

You can then proceed to the next sensor.

## Accelerometer {#accelerometer}

To calibrate the flight controller accelerometers you will be asked to place and hold your vehicle a number of orientations (you will be prompted when to move between positions).

The calibration steps are:

1. Click the **Accelerometer** sensor button.
   ![Accelerometer calibration](file:///home/user/qgroundcontrol/docs/assets/setup/sensor/accelerometer_px4.jpg)

   ::: info
   You should already have set the [Flight Controller Orientation](#flight_controller_orientation) above.
   If not, you can also set it here.
   :::

1. Click **OK** to start the calibration.
1. Position the vehicle as guided by the _images_ on the screen. This is very similar to compass calibration.
   ![Accelerometer calibration](file:///home/user/qgroundcontrol/docs/assets/setup/sensor/accelerometer_positions_px4.jpg)
1. Repeat the calibration process for all vehicle orientations.

Once you've rotated the vehicle in all the positions _QGroundControl_ will display _Calibration complete_.

You can then proceed to the next sensor.

## Level Horizon

If the horizon (as shown in the HUD) is not level after completing accelerometer calibration you can calibrate the level horizon for your vehicle.
You will be asked to place the vehicle in a level orientation while it captures the information.

1. Click the **Level Horizon** sensor button.
   ![Level Horizon calibration](file:///home/user/qgroundcontrol/docs/assets/setup/sensor_level_horizon.jpg)

   ::: info
   You should already have set the [Flight Controller Orientation](#flight_controller_orientation) above.
   If not, you can also set it here.
   :::

1. Place the vehicle in its level flight orientation on a level surface:

- For planes this is the position during level flight (planes tend to have their wings slightly pitched up!)
- For copters this is the hover position.

1. Click **OK** to start the calibration.

## Airspeed {#airspeed}

The airspeed calibration needs to read a stable baseline with 0 airspeed in order to determine an offset.
Cup your hands over the pitot to block any wind (if calibrating the sensor indoors this is not needed) and then blow into the tube using your mouth (to signal completion of the calibration).

To calibrate the airspeed sensor:

1. Click the **Airspeed** sensor button

   ![Airspeed calibration](file:///home/user/qgroundcontrol/docs/assets/setup/sensors_airspeed.jpg)

1. Cover the sensor (i.e. with your hand)

   ::: warning
   Do not touch the sensor (obstruct any holes) during calibration.
   :::

1. Click **OK** to start the calibration.
1. Blow into the sensor.
1. Wait for 2-3 seconds before removing the covering (calibration completes silently after several seconds)

## Set Orientations {#flight_controller_orientation}

::: tip
You can skip this section if the flight controller and compass are mounted upright on the vehicle and facing the front (this is the default orientation - `ROTATION_NONE`).
:::

If the autopilot/compass are mounted in any other way you will need to specify their orientations as YAW, PITCH and/or ROLL offsets relative to the forward-facing-upright orientation (clock-wise rotation around the Z, Y and X axis, respectively).

<img src="../../../assets/setup/flight_controller_orientation.png" style="width: 600px;"/>

For example, the image below are at orientations: `ROTATION_NONE`, `ROTATION_YAW_90`,`ROTATION_YAW_180`,`ROTATION_YAW_270`.

<img src="../../../assets/setup/flight_controller_yaw_rotation.png" style="width: 600px;"/>

To set the orientation(s) on PX4:

1. Select the **Set Orientations** button.

   <img src="../../../assets/setup/sensor_orientation_set_orientations.jpg" style="width: 600px;"/>

1. Select the **AutoPilot Orientation**.
1. Select the **External Compass Orientation** (this option will only be displayed if there is an external compass).
1. Press **OK**.



<div style="page-break-after: always;"></div>

# Flight Modes Setup

The _Flight Modes_ section allows you to map flight modes to radio channel(s), and hence to the switches on your radio control transmitter.
Both flight mode setup and the available flight modes are different in PX4 and ArduPilot (and there are some differences between ArduCopter and ArduPlane).

::: info
In order to set up flight modes you must already have already [configured your radio](../setup_view/radio.md), and [setup the transmitter](#transmitter-setup) (as shown below).
:::

To access this section, select the **Gear** icon (Vehicle Setup) in the top toolbar and then **Flight Modes** in the sidebar.

For more flight stack specific setup see:

- [ArduPilot Flight Modes Setup](../setup_view/flight_modes_ardupilot.md)
- [PX4 Flight Modes Setup](../setup_view/flight_modes_px4.md)

## Transmitter Setup

In order setup flight modes you will first need to configure your _transmitter_ to encode the physical positions of your mode switch(es) into a single channel.

On both PX4 and ArduPilot you can assign up to 6 different flight modes to a single channel of your transmitter
It is common to use the positions of a 2- and a 3-position switch on the transmitter to represent the 6 flight modes.
Each combination of switches is then encoded as a particular PWM value that will be sent on a single channel.

::: info
The single channel is selectable on PX4 and ArduPlane, but is fixed to channel 5 on Copter.
:::

The process for this varies depending on the transmitter.
A number of setup examples are provided below.

### Taranis

These examples show several configurations for the _FrSky Taranis_ transmitter.

#### Map 3-way Switch to a Single Channel

If you only need to support selecting between two or three modes then you can map the modes to the positions just one 3-way switch.
Below we show how to map the Taranis 3-way "SD" switch to channel 5.

Open the Taranis UI **MIXER** page and scroll down to **CH5**, as shown below:

![Taranis - Map channel to switch](file:///home/user/qgroundcontrol/docs/assets/setup/flight_modes/taranis_single_channel_mode_selection_1.png)

Press **ENT(ER)** to edit the **CH5** configuration then change the **Source** to be the _SD_ button.

![Taranis - Configure channel](file:///home/user/qgroundcontrol/docs/assets/setup/flight_modes/taranis_single_channel_mode_selection_2.png)

That's it!
Channel 5 will now output 3 different PWM values for the three different **SD** switch positions.

#### Map Multiple Switches to a Single Channel

Most transmitters do not have 6-way switches, so if you need to be able to support more modes than the number of switch positions available (up to 6) then you will have to represent them using multiple switches.
Commonly this is done by encoding the positions of a 2- and a 3-position switch into a single channel, so that each switch position combination results in a different PWM value.

On the FrSky Taranis this process involves assigning a "logical switch" to each combination of positions of the two real switches.
Each logical switch is then assigned to a different PWM value on the same channel.

This video shows how this is done with the _FrSky Taranis_ transmitter: https://youtu.be/TFEjEQZqdVA

<!-- @[youtube](https://youtu.be/BNzeVGD8IZI?t=427) - video showing how to set the QGC side - at about 7mins and 3 secs -->



<div style="page-break-after: always;"></div>

# ArduPilot Flight Mode Setup

The _Flight Modes_ section allows you to configure which flight modes and other actions are triggered by particular switches/switch positions on your RC transmitter.

::: info
In order to set up flight modes you must already have

> - [Configured your radio](../setup_view/radio.md) in order to set flight modes.
> - [Setup the RC transmitter](flight_modes.md#transmitter-setup) (Flight Modes > Transmitter Setup)
>   :::

To access this section, select the **Gear** icon (Vehicle Setup) in the top toolbar and then **Flight Modes** in the sidebar.

![Flight modes setup - ArduCopter](file:///home/user/qgroundcontrol/docs/assets/setup/flight_modes/ardupilot_copter.jpg)

## Flight Mode Settings

On ArduPilot you can assign up to 6 different flight modes to a single channel of your transmitter (the channel is selectable on Plane, but fixed to channel 5 on Copter).
ArduCopter also allows you to specify additional _Channel Options_ for channels 7-12.
These allow you to assign functions to these switches (for example, to turn on a camera, or return to launch).

To set the flight modes:

1. Turn on your RC transmitter.
1. Select the **Gear** icon (Vehicle Setup) in the top toolbar and then **Flight Modes** in the sidebar.

   ![Flight modes setup - ArduCopter](file:///home/user/qgroundcontrol/docs/assets/setup/flight_modes/ardupilot_copter.jpg)

   ::: info
   The above image is a screenshot of the flight mode setup for ArduCopter.
   :::

1. Select up to 6 flight modes in the drop downs.
1. **ArduCopter only:** Select additional _Channel Options_ for channels 7-12.
1. **ArduPlane only:** Select the mode channel from the dropdown.

   ![Flight modes setup - ArduPlane](file:///home/user/qgroundcontrol/docs/assets/setup/flight_modes/ardupilot_plane.jpg)

1. Test that the modes are mapped to the right transmitter switches by selecting each mode switch on your transmitter in turn, and check that the desired flight mode is activated (the text turns yellow on _QGroundControl_ for the active mode).

All values are automatically saved as they are changed.

::: info
The ArduCopter screenshot above shows a typical setup for a three position flight mode switch with an additional option of RTL being on a channel 7 switch.
You can also setup 6 flight modes using two switches plus mixing on your transmitter. Scroll down to the center section of this [page](http://ardupilot.org/copter/docs/common-rc-transmitter-flight-mode-configuration.html#common-rc-transmitter-flight-mode-configuration) for tutorials on how to do that.
:::

## See Also

- [ArduCopter Flight Modes](http://ardupilot.org/copter/docs/flight-modes.html)
- [ArduPlane Flight Modes](http://ardupilot.org/plane/docs/flight-modes.html)
- [ArduCopter > Auxiliary Function Switches](https://ardupilot.org/copter/docs/channel-7-and-8-options.html#channel-7-and-8-options) - additional information about channel configuration.



<div style="page-break-after: always;"></div>

# PX4 Flight Modes Setup

The _Flight Modes_ section allows you to configure which [flight modes](http://docs.px4.io/main/en/getting_started/flight_modes.html) and other actions are triggered by particular switches/switch positions on your RC transmitter.

::: info
In order to set up flight modes you must already have

- [Configured your radio](../setup_view/radio.md) in order to set flight modes.
- [Setup the RC transmitter](flight_modes.md#transmitter-setup) (Flight Modes > Transmitter Setup)
  :::

To access this section, select the **Gear** icon (Vehicle Setup) in the top toolbar and then **Flight Modes** in the sidebar.

![Flight modes single-channel](file:///home/user/qgroundcontrol/docs/assets/setup/flight_modes/px4_single_channel.jpg)

## Flight Mode Settings

The screen allows you to specify a "mode" channel and select up to 6 flight modes that will be activated based on the value sent on the channel.
You can also assign a small number of channels to trigger particular actions, such as deploying landing gear, or emergency shutdown (kill switch).

The steps are:

1. Turn on your RC transmitter.
1. Select the **Gear** icon (Vehicle Setup) in the top toolbar and then **Flight Modes** in the sidebar.

   ![Flight modes single-channel](file:///home/user/qgroundcontrol/docs/assets/setup/flight_modes/px4_single_channel.jpg)

1. Specify _Flight Mode Settings_:

   - Select the transmitter **Mode channel** (shown as Channel 5 above).
   - Select up to six **Flight Modes** for switch positions encoded in the channel.

     ::: info
     Position mode, return mode and mission mode [are recommended](https://docs.px4.io/main/en/config/flight_mode.html#what-flight-modes-and-switches-should-i-set).
     :::

1. Specify _Switch Settings_:

   - Select the channels that you want to map to specific actions - _Kill switch_, landing gear, etc. (if you have spare switches and channels on your transmitter).

1. Test that the modes are mapped to the right transmitter switches:
   - Check the _Channel Monitor_ to confirm that each switch moves the expected channel.
   - Select each mode switch on your transmitter in turn, and check that the desired flight mode is activated (the text turns yellow on _QGroundControl_ for the active mode).

All values are automatically saved as they are changed.

## See Also

- [PX4 Flight Modes](https://docs.px4.io/en/flight_modes/)



<div style="page-break-after: always;"></div>

# Power Setup

The _Power Setup_ screen is used to configure battery parameters and also provide advanced settings for propellers.

![Battery Calibration](file:///home/user/qgroundcontrol/docs/assets/setup/px4_power.jpg)

## Battery Voltage/Current Calibration

Enter data for your battery/power module from its data sheet: number of cells, full voltage per cell, empty voltage per cell. If provided, also enter voltage divider and amps-per-volt information.

_QGroundControl_ can be used to calculate appropriate voltage divider and amps-per-volt values from measurements:

1. Measure the voltage from the battery using a multimeter.
1. Click **Calculate** next to the _Voltage divider_ field. On the prompt that appears:
1. Enter the measured voltage.
1. Click **Calculate** to generate a new voltage-divider value.
1. Click **Close** to save the value into the main form.
1. Measure the current from the battery.
1. Click **Calculate** next to the _Amps per volt_ field. On the prompt that appears:
1. Enter the measured current.
1. Click **Calculate** to generate a new _amps per volt_ value.
1. Click **Close** to save the value into the main form.

## Advanced Power Settings

Click the **Show Advanced Settings** checkbox to specify advanced power settings.

### Voltage Drop on Full Load

Batteries show less voltage at high throttle. Enter the difference in Volts between idle throttle and full throttle, divided by the number of battery cells. The default value should be used if unsure!

::: warning
If the value is too high the battery may be deep-discharged and damaged.
:::

## ESC PWM Minimum and Maximum Calibration

To calibrate the ESC max/min PWM values:

1. Remove the propellers.
1. Connect the vehicle to QGC via USB (only).
1. Click the **Calibrate** button.

::: warning
Never attempt ESC calibration with props on.

Motors should not spin during ESC calibration.
However if an ESC doesn't properly support/detect the calibration sequence then it will respond to the PWM input by running the motor at maximum speed.
:::

## Other Settings

Select the **Show UAVCAN Settings** checkbox to access additional settings for UAVCAN Bus Configuration and motor index and direction assignment.



<div style="page-break-after: always;"></div>

# Motor Setup

Motor Setup is used to test individual motors/servos (for example, to verify that motors spin in the correct direction).

::: tip
These instructions apply to PX4 and to most vehicle types on ArduPilot.
Vehicle-specific instructions are provided as sub-topics (e.g. [Motors Setup (ArduSub)](../setup_view/motors_ardusub.md)).
:::

![Motors Test](file:///home/user/qgroundcontrol/docs/assets/setup/Motors.png)

## Test Steps

To test the motors:

1. Remove all propellers.

   ::: warning
   You must remove props before activating the motors!
   :::

2. (_PX4-only_) Enable safety switch - if used.

3. Slide the switch to enable motor slider and buttons (labeled: _Propellers are removed - Enable slider and motors_).

4. Adjust the slider to select the power for the motors.

5. Press the button corresponding to the motor and confirm it spin in the correct direction.

   ::: info
   The motors will automatically stop spinning after 3 seconds.
   You can also stop the motor by pressing the 'Stop' button.
   If no motors turn, raise the “Throttle %” and try again.
   :::

## Additional Information

- [Basic Configuration > Motor Setup](http://docs.px4.io/main/en/config/motors.html) (_PX4 User Guide_) - This contains additional PX4-specific information.
- [ESCS and Motors](https://ardupilot.org/copter/docs/connect-escs-and-motors.html#motor-order-diagrams) - This is the Motor order diagrams for all frames



<div style="page-break-after: always;"></div>

# Motors Setup (ArduSub)

In order for ArduSub to function properly, the motors must be correctly set up.

If you just assembled your ROV, first make sure that the thrusters are connected to the correct outputs in the **Manual Test** section.
Drag each slider and make sure that the _correct motor_ spins accordingly to the frame displayed.

Once you know that the thrusters are connected to the proper outputs you can check for _correct direction_ (forward/reverse) using either [automatic direction detection](#automatic) (recommended from ArduSub 4.0) or the [manual test](#manual).

:::info
[Manual Test](#manual) is supported by ArduSub up to 3.5, while ArduSub 4.0 supports both [Manual Test](#manual) and [automatic direction detection](#automatic).
:::

## Manual Test {#manual}

The ArduSub motor setup allows you to test individual motors.
The sliders allow spinning each motor in forward or reverse mode, and the checkboxes under the sliders allow reversing the operation of individual thrusters.

The image at the right shows the frame currently in use, along with the location and orientation of each thruster.
If the frame selection does not match your vehicle, first select the correct frame in the [Frame](../setup_view/airframe_ardupilot.md#ardusub) tab.

To manually set up and test the motors, read and follow the instructions on the page.

::: warning
Make sure the motors and propellers are clear from obstructions before sliding the switch to arm the vehicle and enable the test!
:::

![Ardusub Motors Test](file:///home/user/qgroundcontrol/docs/assets/setup/motors-sub.jpg)

## Automatic Direction Detection {#automatic}

Ardusub 4.0 and newer support automatic detection of the motor directions.
This works by applying pulses to each motor, checking if the frame reacts as expected, and reversing the motor if necessary.
The process takes around one minute.

To perform the automatic motor direction detection, navigate to **Vehicle Setup->Motors** tab, click the **Auto-Detect Directions** button and wait.
Additional output about the process will be shown next to the button as it runs.

::: warning
This procedure still requires that the motors are connected to the _correct outputs_ as shown in the frame view!
:::

![Ardusub Motors Auto-Setup](file:///home/user/qgroundcontrol/docs/assets/setup/motors-sub-auto.jpg)



<div style="page-break-after: always;"></div>

# Safety Setup

The _Safety Setup_ page allows you to configure the most important failsafe settings (other failsafe settings can be set via the [parameters](../setup_view/parameters.md) described in the failsafe documentation for each vehicle type).

For ArduPilot safety page information see: [Safety (ArduPilot)](../setup_view/safety_ardupilot.md)

The PX4 page is shown below.

![Safety Setup - PX4](file:///home/user/qgroundcontrol/docs/assets/setup/px4_safety.jpg)

::: info
For additional PX4 safety settings and information see: [Safety Configuration](https://docs.px4.io/en/config/safety.html).
:::



<div style="page-break-after: always;"></div>

# Safety Setup (ArduPilot)

The _Safety Setup_ page allows you to configure (vehicle specific) failsafe settings.

::: tip
The setup page covers the most important safety options; other failsafe settings can be set via the [parameters](../setup_view/parameters.md) described in the failsafe documentation for each vehicle type.
:::

::: tip
_QGroundControl_ does not support polygon fences or rally points on ArduPilot.
:::

## Copter

The Copter safety page is shown below.

![Safety Setup - Copter (Ardupilot)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_arducopter.jpg)

::: info
For additional safety settings and information see: [Failsafe](http://ardupilot.org/copter/docs/failsafe-landing-page.html).
:::

### Battery Failsafe {#battery_failsafe_copter}

This panel sets the [Battery Failsafe](http://ardupilot.org/copter/docs/failsafe-battery.html) parameters.
You can set low and critical thresholds for voltage and/or remaining capacity and define the action if the failsafe value is breached.
The thresholds can be disabled by setting them to zero.

::: tip
If there is a second battery (enabled in the [Power Setup](../setup_view/power.md)) a second panel will be displayed with the same settings.
:::

![Safety Setup - Battery1 Failsafe Triggers (Copter)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_arducopter_battery1_failsafe_triggers.jpg)

The configuration options are:

- **Low action** ([BATT_FS_LOW_ACT](http://ardupilot.org/copter/docs/parameters.html#batt-fs-low-act-low-battery-failsafe-action)) - Select one of: None, Land, RTL, SmartRTL, SmartRTL or Land, Terminate.
- **Critical action** ([BATT_FS_CRT_ACT](http://ardupilot.org/copter/docs/parameters.html#batt-fs-crt-act-critical-battery-failsafe-action)) - Select one of: None, Land, RTL, SmartRTL, SmartRTL or Land, Terminate.
- **Low voltage threshold** ([BATT_LOW_VOLT](http://ardupilot.org/copter/docs/parameters.html#batt-low-volt-low-battery-voltage)) - Battery voltage that triggers the _low action_.
- **Critical voltage threshold** ([BATT_CRT_VOLT](http://ardupilot.org/copter/docs/parameters.html#batt-crt-volt-critical-battery-voltage))- Battery voltage that triggers the _critical action_.
- **Low mAh threshold** ([BATT_LOW_MAH](http://ardupilot.org/copter/docs/parameters.html#batt-low-mah-low-battery-capacity)) - Battery capacity that triggers the _low action_.
- **Critical mAh threshold** ([BATT_CRT_MAH](http://ardupilot.org/copter/docs/parameters.html#batt-crt-mah-battery-critical-capacity)) - Battery capacity that triggers the _critical action_.

### General Failsafe Triggers {#failsafe_triggers_copter}

This panel enables the [GCS Failsafe](http://ardupilot.org/copter/docs/gcs-failsafe.html)
and enables/configures the throttle failsafe.

![Safety Setup - General Failsafe Triggers (Copter)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_arducopter_general_failsafe_triggers.jpg)

The configuration options are:

- **Ground Station failsafe** - Disabled, Enabled always RTL, Enabled Continue with Mission in Auto Mode, Enabled Always SmartRTL or RTL, Enabled Always SmartRTL or Land.
- **Throttle failsafe** - Disabled, Always RTL, Continue with Mission in Auto Mode, Always land.
- **PWM Threshold** ([FS_THR_VALUE](http://ardupilot.org/copter/docs/parameters.html#fs-thr-value-throttle-failsafe-value)) - PWM value below which throttle failsafe triggers.

### Geofence {#geofence_copter}

This panel sets the parameters for the cylindrical [Simple Geofence](http://ardupilot.org/copter/docs/ac2_simple_geofence.html).
You can set whether the fence radius or height are enabled, the maximum values for causing a breach, and the action in the event of a breach.

![Safety Setup - Geofence (Copter)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_arducopter_geofence.jpg)

The configuration options are:

- **Circle GeoFence enabled** ([FENCE_TYPE](http://ardupilot.org/copter/docs/parameters.html#fence-type-fence-type), [FENCE_ENABLE](http://ardupilot.org/copter/docs/parameters.html#fence-enable-fence-enable-disable)) - Enable the circular geofence.
- **Altitude GeoFence enabled** ([FENCE_TYPE](http://ardupilot.org/copter/docs/parameters.html#fence-type-fence-type), [FENCE_ENABLE](http://ardupilot.org/copter/docs/parameters.html#fence-enable-fence-enable-disable)) - Enable altitude geofence.
- Fence action ([FENCE_ACTION](http://ardupilot.org/copter/docs/parameters.html#fence-action-fence-action)) One of:
  - **Report only** - Report fence breach.
  - **RTL or Land** - RTL or land on fence breach.
- **Max radius** ([FENCE_RADIUS](http://ardupilot.org/copter/docs/parameters.html#fence-radius-circular-fence-radius)) - Circular fence radius that when broken causes RTL.
- **Max altitude** ([FENCE_ALT_MAX](http://ardupilot.org/copter/docs/parameters.html#fence-alt-max-fence-maximum-altitude))- Fence maximum altitude to trigger altitude geofence.

### Return to Launch {#rtl_copter}

This panel sets the [RTL Mode](http://ardupilot.org/copter/docs/rtl-mode.html) behaviour.

![Safety Setup - RTL (Copter)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_arducopter_return_to_launch.jpg)

The configuration options are:

- Select RTL return altitude ([RTL_ALT](http://ardupilot.org/copter/docs/parameters.html#rtl-alt-rtl-altitude)):
  - **Return at current altitude** - Return at current altitude.
  - **Return at specified altitude** - Ascend to specified altitude to return if below current altitude.
- **Loiter above home for** ([RTL_LOIT_TIME](http://ardupilot.org/copter/docs/parameters.html#rtl-loit-time-rtl-loiter-time)) - Check to set a loiter time before landing.
- One of
  - **Land with descent speed** ([LAND_SPEED](http://ardupilot.org/copter/docs/parameters.html#land-speed-land-speed)) - Select final descent speed.
  - **Final loiter altitude** ([RTL_ALT_FINAL](http://ardupilot.org/copter/docs/parameters.html#rtl-alt-final-rtl-final-altitude)) - Select and set final altitude for landing after RTL or mission (set to 0 to land).

### Arming Checks {#arming_checks_copter}

This panel sets which [Pre-ARM Safety Checks](http://ardupilot.org/copter/docs/prearm_safety_check.html) are enabled.

![Safety Setup - Arming Checks (Copter)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_arducopter_arming_checks.jpg)

The configuration options are:

- **Arming Checks to perform** ([ARMING_CHECK](http://ardupilot.org/copter/docs/parameters.html#arming-check-arm-checks-to-peform-bitmask)) - Check all appropriate: Barometer, Compass, GPS lock, INS, Parameters, RC Channels, Board voltage, Battery Level, Airspeed, Logging Available, Hardware safety switch, GPS Configuration, System.

## Plane

The Plane safety page is shown below.

![Safety Setup - Plane (Ardupilot)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_arduplane.jpg)

::: info
For additional safety settings and information see: [Plane Failsafe Function](http://ardupilot.org/plane/docs/apms-failsafe-function.html) and [Advanced Failsafe Configuration](http://ardupilot.org/plane/docs/advanced-failsafe-configuration.html).
:::

### Battery Failsafe {#battery_failsafe_plane}

The plane battery failsafe is the same as for copter except there are different options for the [Low](http://ardupilot.org/plane/docs/parameters.html#batt-fs-low-act-low-battery-failsafe-action) and [Critical](http://ardupilot.org/plane/docs/parameters.html#batt-fs-crt-act-critical-battery-failsafe-action) actions: None, RTL, Land, Terminate.

For more information see: [battery failsafe](#battery_failsafe_copter) (copter).

### Failsafe Triggers {#failsafe_triggers_plane}

This panel enables the [GCS Failsafe](http://ardupilot.org/plane/docs/advanced-failsafe-configuration.html#ground-station-communications-loss) and enables/configures the throttle failsafe.

![Safety Setup - Failsafe Triggers (Plane)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_arduplane_failsafe_triggers.jpg)

The configuration options are:

- **Throttle PWM threshold** ([THR_FS_VALUE](http://ardupilot.org/plane/docs/parameters.html#thr-fs-value-throttle-failsafe-value)) - PWM value below which throttle failsafe triggers.
- **GCS failsafe** ([FS_GCS_ENABL](http://ardupilot.org/plane/docs/parameters.html#fs-gcs-enabl-gcs-failsafe-enable)) - Check to enable GCS failsafe.

### Return to Launch {#rtl_plane}

This panel sets the [RTL Mode](http://ardupilot.org/copter/docs/rtl-mode.html) behaviour.

![Safety Setup - RTL (Plane)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_arduplane_return_to_launch.jpg)

The configuration options are:

- Select RTL return altitude ([RTL_ALT](http://ardupilot.org/copter/docs/parameters.html#rtl-alt-rtl-altitude)):
  - **Return at current altitude** - Return at current altitude.
  - **Return at specified altitude** - Ascend to specified altitude to return if below current altitude.

### Arming Checks {#arming_checks_plane}

[Arming Checks](#arming_checks_copter) are the same as for copter.

## Rover

The Rover safety page is shown below.

![Safety Setup - Rover (Ardupilot)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_ardurover.jpg)

::: info
For additional safety settings and information see: [Failsafes](http://ardupilot.org/rover/docs/rover-failsafes.html).
:::

### Battery Failsafe {#battery_failsafe_rover}

The rover battery failsafe is the same as for [copter](#battery_failsafe_copter).

### Failsafe Triggers {#failsafe_triggers_rover}

This panel enables the rover [Failsafes](http://ardupilot.org/rover/docs/rover-failsafes.html).

![Safety Setup - Failsafe Triggers (Rover)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_ardurover_failsafe_triggers.jpg)

The configuration options are:

- **Ground Station failsafe** ([FS_GCS_ENABL](http://ardupilot.org/rover/docs/parameters.html#fs-gcs-enable-gcs-failsafe-enable)) - Check to enable GCS failsafe.
- **Throttle failsafe** ([FS_THR_ENABLE](http://ardupilot.org/rover/docs/parameters.html#fs-thr-enable-throttle-failsafe-enable)) - Enable/disable throttle failsafe (value is _PWM threshold_ below).
- **PWM threshold** ([FS_THR_VALUE](http://ardupilot.org/rover/docs/parameters.html#fs-thr-value-throttle-failsafe-value)) - PWM value below which throttle failsafe triggers.
- **Failsafe Crash Check** ([FS_CRASH_CHECK](http://ardupilot.org/rover/docs/parameters.html#fs-crash-check-crash-check-action)) - What to do in the event of a crash: Disabled, Hold, HoldAndDisarm

### Arming Checks {#arming_checks_rover}

[Arming Checks](#arming_checks_copter) are the same as for copter.

## Sub

The Sub safety page is shown below.

![Safety Setup - Sub (Ardupilot)](file:///home/user/qgroundcontrol/docs/assets/setup/safety/safety_ardusub.jpg)

::: info
For additional safety settings and information see: [Failsafes](https://www.ardusub.com/operators-manual/failsafes.html).
:::

### Failsafe Actions {#failsafe_actions_sub}

The configuration options are:

- **GCS Heartbeat** - Select one of: Disabled, Warn only, Disarm, Enter depth hold mode, Enter surface mode.
- **Leak** - Select one of: Disabled, Warn only, Enter surface mode.
  - **Detector Pin** - Select one of: Disabled, Pixhawk Aux (1-6), Pixhawk 3.3ADC(1-2), Pixhawk 6.6ADC.
  - **Logic when Dry** - Select one of: Low, High.
- **Battery** - ?.
- **EKF** - Select one of: Disabled, Warn only, Disarm.
- **Pilot Input** - Select one of: Disabled, Warn only, Disarm.
- **Internal Temperature** - Select one of: Disabled, Warn only.
- **Internal Pressure** - Select one of: Disabled, Warn only.

### Arming Checks {#arming_checks_sub}

[Arming Checks](#arming_checks_copter) are the same as for copter.



<div style="page-break-after: always;"></div>

# Tuning Setup

The Tuning page allows you to configure settings on your vehicle which control basic flight characteristics.
The details differ depending on flight stack:

- [Tuning (ArduPilot)](../setup_view/tuning_ardupilot.md)
- [Tuning (PX4)](../setup_view/tuning_px4.md)



<div style="page-break-after: always;"></div>

# Tuning (ArduPilot)

- [Tuning (ArduCopter)](../setup_view/tuning_arducopter.md)
- [Tuning (ArduSub)](../setup_view/tuning_ardusub.md)



<div style="page-break-after: always;"></div>

# ArduCopter Tuning

![ArduCopter Tuning Page](file:///home/user/qgroundcontrol/docs/assets/setup/tuning/arducopter.png)

## Basic Tuning

Adjust the flight characteristics by moving the desired slider to the left or right.

## AutoTune

AutoTune is used to automatically tune the rate parameters in order to provide the highest response without significant overshoot.

Performing an AutoTune:

- Select which axes you would like to tune.

  ::: tip
  Tuning all axes at once can take a significant amount of time, which may cause you to run out of battery.
  To prevent this choose to tune only one axis at a time.
  :::

- Assign AutoTune to one of your transmitter switches.
  Ensure that switch is in low position before taking off.
- Take off and put the copter into AltHold.
- Turn on AutoTune with your transmitter switch.
- The copter will twitch around the specified axes for a few minutes.
- When AutoTune completes the copter will change back to the original settings.
- Move the AutoTune switch back to low position and then back to high to test the new settings.
- Move the AutoTune switch to low to test previous settings.
- To save new settings, land and disarm while AutoTune switch is in high position.

Note:

- Since AutoTune is done in AltHold your copter must already have a tuning which is minimally flyable in AltHold.
  You can cancel AutoTune at any time by moving the AutoTune switch back to low position.
- You can reposition the copter using your transmitter at any time during AutoTune.

### In-Flight Tuning

This is an advanced option which allows you to tune a flight control parameter using one of your transmitter dial channels.
Select the control option from the dropdown and specify the min/max for the values to assign to the dial.



<div style="page-break-after: always;"></div>

# ArduSub Tuning

![ArduSub Tuning Page](file:///home/user/qgroundcontrol/docs/assets/setup/tuning/ardusub.jpg)

## Basic Tuning

This page allows changing the PID controller gains to better suit your vehicle and application. Changing these may help you get a snappier response for more precise movements, or a smoother response for recording cinematic footages. Adjust a parameter by moving the desired slider, or by clicking the increase/decrease buttons. There are three controllers that can be adjusted here:

- [**Attitude Controller Parameters**](https://www.ardusub.com/operators-manual/full-parameter-list.html#atc-parameters) are the parameters for the controller responsible for keeping the vehicle oriented as you want it, assuming your vehicle has ability (enough motors/DOF) to do so.

- **Position Controller Parameters** are the parameters for the controller responsible for positioning the vehicle at a point in 3D space. The **Z** parameters control how the depth control works (eg in [_Depth Hold_](https://www.ardusub.com/operators-manual/flight-modes.html#depth-hold) mode). The **XY** parameters affect how the vehicle controls the horizontal position in [_Position Enabled_](https://www.ardusub.com/operators-manual/flight-modes.html#position-enabled-modes) modes.

- **Waypoint Navigation Parameters** are the parameters for the controller responsible for following waypoints in **Auto** and **Guided** mode.

  ::: warning
  **Guided** and **Auto** modes are currently unsupported and some features are disabled in QGC.
  :::



<div style="page-break-after: always;"></div>

# Tuning (PX4)

Tuning only needs to be done once, and is recommended unless you're using vehicle that has already been tuned by the manufacturer (and not modified since).

[Auto-tuning](#autotune) should generally be used for frame types and controllers that support it (multicopter, fixed wing, and hybrid VTOL fixed wing vehicles).
The tuning UI also supports manual tuning of all controllers.

![Tuning Setup > Autotune](file:///home/user/qgroundcontrol/docs/assets/setup/tuning/px4_autotune_hero.png)

::: info
During [Airframe Setup](airframe.md) you should have selected the frame that most closely matches your vehicle.
This will usually be tuned well enough to fly, and it _may_ also be sufficiently well tuned to run autotuning.
:::

## Autotune

Auto-tuning automates the process of tuning the PX4 rate and attitude controllers, which are the most important controllers for stable and responsive flight (other tuning is more "optional").

::: info
This guide shows the default usage of this feature.
Additional information and configuration can be found in the [PX4 Autotuning Guide](http://docs.px4.io/main/en/config/autotune.html) (PX4 User Guide).
:::

### Pre-Autotuning Test

Auto-tuning is performed while flying.
The vehicle must be able to fly and adequately stabilize itself before running auto-tune.
This test ensures that the vehicle can fly safely in position controlled modes.

To make sure the vehicle is stable enough for auto-tuning:

1. Perform a normal preflight safety checklist to ensure the flight zone is clear and has enough space.
1. Takeoff and prepare for the test
   - **Multicopters:** Take off and hover at 1m above ground in **Altitude mode** or Stabilized mode.
   - **Fixed-wing mode:** Take off and fly at cruise speed in **Position mode** or **Altitude mode**.
1. Use the RC transmitter roll stick to perform the following maneuver, tilting the vehicle just a few degrees: _roll left > roll right > center_ (The whole maneuver should take about 3 seconds).
   The vehicle should stabilise itself within 2 oscillations.
1. Repeat the maneuver, tilting with larger amplitudes at each attempt.
   If the vehicle can stabilise itself within 2 oscillations at ~20 degrees move to the next step.
1. Repeat the same maneuvers but on the pitch axis.
   As above, start with small angles and confirm that the vehicle can itself within 2 oscillations before increasing the tilt.

If the drone can stabilize itself within 2 oscillations it is ready for the auto-tuning procedure.

If not, see the [PX4 User Guide > Autotuning > Troubleshooting](http://docs.px4.io/main/en/config/autotune.html#troubleshooting).

### Auto-tuning procedure

The auto-tuning sequence must be performed in a **safe flight zone, with enough space**.
It takes about 40 seconds (between 19 and 68 seconds).
For best results, we recommend running the test in calm weather conditions.

::: info
Be ready to abort the autotuning process by moving the RC controller sticks.
:::

The test steps are:

1. Perform the [pre-tuning test](#pre-tuning-test) above.
1. Takeoff using RC control and prepare for test:
   - **Multicopters:** Takeoff using the remote controller in **Altitude mode**.
     Hover the vehicle at a safe distance and at a few meters above ground (between 4 and 20m).
   - **VTOL in Fixed-wing mode:** Once flying at cruise speed, activate **Hold Mode**.
     This will guide the plane to fly in circle at constant altitude and speed.
1. In QGroundControl, open the menu: **Vehicle setup > PID Tuning**

   ![Tuning Setup > Autotune Enabled](file:///home/user/qgroundcontrol/docs/assets/setup/tuning/px4_autotune.png)

1. Select either the _Rate Controller_ or _Attitude Controller_ tabs.
   Ensure that the **Autotune enabled** button is enabled (this will display the **Autotune** button and remove the manual tuning selectors).
1. Stop moving the joysticks and click on the **Autotune** button.
   Read the warning popup and click on **OK** to start tuning.
1. The drone will first start to perform quick roll motions followed by pitch and yaw motions.
   The progress is shown in the progress bar, next to the _Autotune_ button.
1. Apply the tuning:
   - **Fixed Wing:** The tuning will be immediately/automatically be applied and tested in flight (by default).
     PX4 will then run a 4 second test and revert the new tuning if a problem is detected.
   - **Multicopters:** Manually land and disarm to apply the new tuning parameters.
     Takeoff carefully and manually test that the vehicle is stable.
1. If any strong oscillations occur, land immediately and follow the instructions in [PX4 User Guide > Autotuning > Troubleshooting](http://docs.px4.io/main/en/config/autotune.html#troubleshooting).

<br/>

<!--
A video of the process is shown below:

{% youtube %}https://youtu.be/5xswOhhqrIQ{% endyoutube %} -->

A video of the process is shown below:

<iframe width="750" height="425" src="https://www.youtube.com/embed/5xswOhhqrIQ?si=UZQ-M8A8Dt0JfL81" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Manual Tuning

Manual tuning is done in-flight, so your vehicle must already be tuned well enough to fly with (this is normally the case if you have selected an appropriate default airframe).

The instructions below explain how you can use the manual tuning UI.
It is designed to be read/used in conjustion with the [PX4 Manual PID Tuning Guides](http://docs.px4.io/main/en/config/autotune.html#see-also), which provide more detailed hints on the kinds of step sizes to use when changing PID values.

In overview:

1. Takeoff using RC control and prepare for test:
   - **Multicopters:** Takeoff using the remote controller in **Altitude mode**.
     Hover the vehicle at a safe distance and at a few meters above ground (between 4 and 20m).
   - **Fixed-wing:** Once flying at cruise speed, activate **Hold Mode**.
     This will guide the plane to fly in circle at constant altitude and speed.
1. In QGroundControl, open the menu: **Vehicle setup > PID Tuning**
1. Select the _Rate Controller_ tab.
   Ensure that the **Autotune enabled** button is is turned off.

   ![PX4 Tuning - Manual - Rate controller](file:///home/user/qgroundcontrol/docs/assets/setup/tuning/px4_copter_manual_rate.png)

1. Select the _Tuning axis_ to tune: **Roll**, **Pitch** or **Yaw** (each axis is tuned separately).
1. Fly the vehicle, observing the tracking on the chart.
   - Adjust the _Tuning Values_ (parameters) to improve the tracking shown on the graph using the slider.
   - The values are automatically saved, but you may wish to use the **Save to Clipboard** and **Restore from Clipboard** buttons to store the last known good configuration.
   - You can also **Clear**/**Stop** the chart using the buttons provided.
1. Tune the other axes.
1. Switch to the other controllers and repeat the process.
   Screenshots of the tuning pages are shown below.

   ![PX4 Tuning - Manual - Attitude controller](file:///home/user/qgroundcontrol/docs/assets/setup/tuning/px4_copter_manual_attitude.png)
   ![PX4 Tuning - Manual - Velocity controller](file:///home/user/qgroundcontrol/docs/assets/setup/tuning/px4_copter_manual_velocity.png)
   ![PX4 Tuning - Manual - Position controller](file:///home/user/qgroundcontrol/docs/assets/setup/tuning/px4_copter_manual_velocity.png)



<div style="page-break-after: always;"></div>

# Camera Setup

The details of the page differ if you are using PX4 firmware or ArduPilot firmware.

## ArduPilot Camera Setup

![](file:///home/user/qgroundcontrol/docs/assets/setup/ardupilot_camera.jpg)

## PX4 Camera Setup

![PX4 Camera setup](file:///home/user/qgroundcontrol/docs/assets/setup/px4_camera.jpg)

For more information see [Camera](http://docs.px4.io/main/en/peripherals/camera.html) (PX4 User Guide).

::: info
The camera settings section is not available by default for FMUv2-based flight controllers (e.g. 3DR Pixhawk) because the camera module is not automatically included in firmware.
For more information see [this topic](http://docs.px4.io/main/en/advanced_config/parameters.html#parameter-not-in-firmware).
:::



<div style="page-break-after: always;"></div>

# Joystick Setup

_QGroundControl_ allows you to control a vehicle using a joystick or gamepad instead of an RC Transmitter.

::: info
Flying with a Joystick (or [virtual thumb-sticks](../settings_view/virtual_joystick.md)) requires a reliable high bandwidth telemetry channel to ensure that the vehicle is responsive to joystick movements (because joystick information is sent over MAVLink).
:::

::: info
Joystick and Gamepad support is enabled using the cross-platform [SDL2](http://www.libsdl.org/index.php) library.
Compatibility with a particular controller depends on SDL (all buttons that are exposed by that API are displayed through the _QGroundControl_ UI).
A [number of common joysticks and gamepads](#supported-joysticks) are known to work.
:::

::: info
The joystick is _enabled_ as the last step of the calibration process.
:::

## Enabling PX4 Joystick Support

To enable Joystick support in PX4 you need to set the parameter [`COM_RC_IN_MODE`](https://docs.px4.io/en/main/advanced_config/parameter_reference.html#COM_RC_IN_MODE) to `1` - _Joystick_.
If this parameter is `0` then _Joystick_ will not be offered as a setup option.

This is enabled by default for PX4 SITL builds (see the [Parameters](../setup_view/parameters.md) topic for information on how to find and set a particular parameter).

## Ardupilot Joystick Support

All ArduPilot vehicles are supported. No parameter configuration is necessary.

## Configuring the Joystick {#configure}

To configure a joystick:

1. Start _QGroundControl_ and connect to a vehicle.
1. Connect the Joystick or Gamepad to a USB port.
1. Select the **Gear** icon (Vehicle Setup) in the top toolbar and then **Joystick** in the sidebar.
   The screen below will appear.

   ![Joystick setup - PlayStation](file:///home/user/qgroundcontrol/docs/assets/setup/joystick_sony_playstation.jpg)

1. Make sure your joystick is selected in the **Active joystick** dropdown.
1. Go to the **Calibrate** Tab, press the **Start** button and then follow the on-screen instructions to calibrate/move the sticks.

   ![Joystick setup - Calibration](file:///home/user/qgroundcontrol/docs/assets/setup/joystick_calibration.jpg)

   The joystick is _enabled_ as the last step of the calibration process.

    ::: warning
    On some controllers the calibration process does not work because of incorrect channel mappings. You can follow [supported joysticks section](#supported-joysticks) for more information.
    :::

1. Test the buttons and sticks work as intended by pressing them, and viewing the result in the Axis/Button monitor in the **General** tab.
1. Select the flight modes/vehicle functions activated by each joystick button.
   ![Joystick setup - Buttons](file:///home/user/qgroundcontrol/docs/assets/setup/joystick_buttons.jpg)

## Advanced Options

Some additional Options are available at the **Advanced** tab.
These options may be useful for specific, unsual setups, for increasing sensibility, and for handling noisy joysticks.

### Throttle Options

![Joystick setup - Throttle Modes](file:///home/user/qgroundcontrol/docs/assets/setup/joystick_throttle_modes.jpg)

- **Center stick is zero throttle**: Centered or lowered stick sends 0 in [MANUAL_CONTROL **z**](https://mavlink.io/en/messages/common.html#MANUAL_CONTROL), raised stick sends 1000.
  - **Spring loaded throttle smoothing**: In this mode you control not the throttle itself, but the rate at which it increases/decreases.
    This is useful for setups where the throttle stick is spring loaded, as the user can hold the desired throttle while releasing the stick.
- **Full down stick is zero throttle**: In this mode, lowered stick sends 0 in [MANUAL_CONTROL **z**](https://mavlink.io/en/messages/common.html#MANUAL_CONTROL), centered stick 500, and raised 1000.
- **Allow negative thrust**: When in **Center stick is zero throttle** mode, this allows the user to send negative values by lowering the stick.
  So that lowered stick sends -1000 in [MANUAL_CONTROL **z**](https://mavlink.io/en/messages/common.html#MANUAL_CONTROL), centered sends zero, and raised stick sends 1000.
  This mode is only enabled for vehicles that support negative thrust, such as [Rover](http://ardupilot.org/rover/index.html).

### Expo

The expo slider allows you to make the sticks less sensitive in the center, allowing finer control in this zone.

![Joystick setup - Expo](file:///home/user/qgroundcontrol/docs/assets/setup/joystick_throttle_expo.jpg)

The slider adjusts the curvature of the exponential curve.

![Joystick setup - Expo Curve](file:///home/user/qgroundcontrol/docs/assets/setup/joystick_throttle_expo_curve.jpg)

The higher the Expo value, the flatter the curve is at the center, and steeper it is at the edges.

### Advanced Settings

The advanced settings are not recommended for everyday users.
They can cause unpredicted results if used incorrectly.

![Joystick setup - Advanced Settings](file:///home/user/qgroundcontrol/docs/assets/setup/joystick_advanced.jpg)

The following settings are available:

- **Enable Gimbal Control**: Enabled two additional channels for controlling a gimbal.

- **Joystick Mode**: Changes what the joystick actually controls, and the MAVLink messages sent to the vehicle.

  - **Normal**: User controls as if using a regular RC radio, MAVLink [MANUAL_CONTROL](https://mavlink.io/en/messages/common.html#MANUAL_CONTROL) messages are used.
  - **Attitude**: User controls the vehicle attitude, MAVLink [SET_ATTITUDE_TARGET](https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET) messages are used.
  - **Position**: User controls the vehicle position, MAVLink [SET_POSITION_TARGET_LOCAL_NED](https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED) messages with bitmask for **position** only are used.
  - **Force**: User controls the forces applied to the vehicle, MAVLink [SET_POSITION_TARGET_LOCAL_NED](https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED) messages with bitmask for **force** only are used.
  - **Velocity**: User controls the forces applied to the vehicle, MAVLink [SET_POSITION_TARGET_LOCAL_NED](https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED) messages with bitmask for **velocity** only are used.

- **Axis Frequency**: When the joystick is idle (inputs are not changing), the joystick commands are sent to the vehicle at 5Hz. When the joystick is in use (input values are changing), the joystick commands are sent to the vehicle at the (higher) frequency configured by this setting. The default is 25Hz.

- **Button Frequency**: Controls the frequency at which repeated button actions are sent.

- **Enable Circle Correction**: RC controllers sticks describe a square, while joysticks usually describe a circle.
  When this option is enabled a square is inscribed inside the joystick movement area to make it more like an RC controller (so it is possible to reach all four corners). The cost is decreased resolution, as the effective stick travel is reduced.

  - **Disabled:** When this is **disabled** the joystick position is sent to the vehicle unchanged (the way that it is read from the joystick device).
    On some joysticks, the (roll, pitch) values are confined to the space of a circle inscribed inside of a square.
    In this figure, point B would command full pitch forward and full roll right, but the joystick is not able to reach point B because the retainer is circular.
    This means that you will not be able to achieve full roll and pitch deflection simultaneously.

    ![](file:///home/user/qgroundcontrol/docs/assets/setup/joystick_circle_correction.jpg)

  - **Enabled:** The joystick values are adjusted in software to ensure full range of commands.
    The usable area of travel and resolution is decreased, however, because the area highlighted grey in the figure is no longer used.

    ![Circle correction enabled](file:///home/user/qgroundcontrol/docs/assets/setup/joystick_circle_correction2.jpg)

- **Deadbands:** Deadbands allow input changes to be ignored when the sticks are near their neutral positions.
  This helps to avoid noise or small oscillations on sensitive sticks which may be interpreted as commands, or small offsets when sticks do not re-center well.
  They can be adjusted during the first step of the [calibration](#configure), or by dragging vertically on the corresponding axis monitor.

## Supported Joysticks

The following joysticks/controllers have been shown to work with relatively recent _QGroundControl_ builds.

### Sony Playstation 3/4 Controllers

Both these joysticks are highly recommended.
They work well "out of the box" and have many buttons that you can map to flight modes.

#### Sony PS4 - DualShock 4 Controller V2 (Wireless setup)

This controller supports both USB and Bluetooth wireless connection.
Wired USB connection usually works out of the box.
The wireless connection needs some setup.

##### Linux Ubuntu setup

To make the controller work wirelessly under Linux the [jstest-gtk](https://jstest-gtk.gitlab.io/) and [ds4drv](https://github.com/chrippa/ds4drv) utilities are needed.

The steps are:

1. Install _jstest-gtk_:
   ```
   sudo apt install jstest-gtk
   ```
1. Install _ds4drv_:
   ```
   sudo pip install ds4drv
   ```
1. Run ds4drv
   ```
   sudo ds4drv
   ```
1. Hold **Share** button and then **PS** button until controller LED starts blinking rapidly.
   The _ds4drv_ should then detect a new device.
1. Last of all, you should check the controller setup by running the _jstest-gtk_ utility.

### FrSky Taranis XD9 plus

The _FrSky Taranis XD9 plus_ remote control can also be connected as a joystick.
You will need to connect it via the USB port on the back.

The Taranis does not allow you to use button options (to be precise, you can set the options, but toggling the buttons on your transmitter does not cause them to be pressed).

::: info
The Taranis is an open system that is openly being worked on.
It is possible that at time of writing there is a firmware or configuration that allows it to work effectively as a joystick.
:::

### TBS Tango 2

The TBS Tango 2 can also be used as a joystick controlled via QGroundControl. In order to make it work, you need to remap the channels by using the following commands:

```bash
export SDL_GAMECONTROLLERCONFIG="03002de7d80400001057000011010000,Team-BlackSheep TBS Joystick,a:b0,b:b1,x:b3,y:b4,back:b10,guide:b12,start:b11,leftstick:b13,rightstick:b14,leftshoulder:b6,rightshoulder:b7,leftx:a0,lefty:a1,rightx:a2,righty:a3,lefttrigger:a4,righttrigger:a5,crc:e72d,platform:Linux"
./QGroundControl-x86_64.AppImage
```

For another radio, the first command above can be found by using the [jstest software tool](http://github.com/meleu/jstest-sdl) and run:

```bash
jstest-sdl -l
```

**Take care of the channels remapping you need to do between a2, a3 and other if needed**

### Logitech Gamepad F310

The Logitech Gamepad F310 has been tested via USB on MacOSX "Sierra".

### Logitech Extreme 3D Pro

The [Logitech Extreme 3D Pro](http://gaming.logitech.com/en-ch/product/extreme-3d-pro-joystick) Joystick has been tested on all platforms (Linux, Windows, Mac OSX).
This is a single stick controller that can also be twisted. The main stick axes are used for pitch and roll, while the twist action is used for yaw. The throttle is mapped onto a separate wheel.

### Logitech F710 Gamepad

<!-- This is from http://qgroundcontrol.org/users/joystick -->

This gamepad is great for flying a multirotor manually via QGroundControl. It works on Windows, Linux and Mac OS.

#### Mac OS Leopard / Lion Setup

The F710 is detected under Leopard / Lion but is not automatically configured as an input device.
In order to get a working configuration, the F710 has to be recognised as _Rumblepad2_.

First check how it is recognised: **Apple > About this Mac > Additional Information > System Report > USB**.
It is detected as "Logitech Cordless RumblePad 2" then nothing further needs to be done.

If it is detected as a "Logitech Wireless 710", perform these steps:

1. Unplug the USB receiver of the gamepad
1. Prepare to quickly plug it into a USB port
1. Hit the Logitech button (its silver with the Logitech Logo on it in the center of the pad)
1. Quickly connect the USB receiver to your Mac
1. The pad should now be detected in the system report as "Logitech Cordless RumblePad 2". If not, retry the above steps.



<div style="page-break-after: always;"></div>

# Parameters

The _Parameters_ screen allows you to find and modify any of the parameters associated with the vehicle.

![Parameters Screen](file:///home/user/qgroundcontrol/docs/assets/setup/parameters_px4.jpg)

::: info
PX4 Pro and ArduPilot use different parameter sets, but they are both managed as described in this section.
:::

## Finding a Parameter

The parameters are organized in groups. Select a group of parameters to view by clicking on the buttons to the left (in the image above the _Battery Calibration_ group is selected).

You can also _search_ for a parameter by entering a term in the _Search_ field. This will show you a list of all parameter names and descriptions that contain the entered substring (press **Clear** to reset the search).

![Parameters Search](file:///home/user/qgroundcontrol/docs/assets/setup/parameters_search.jpg)

## Changing a Parameter

To change the value of a parameter click on the parameter row in a group or search list. This will open a side dialog in which you can update the value (this dialog also provides additional detailed information about the parameter - including whether a reboot is required for the change to take effect).

![Changing a parameter value](file:///home/user/qgroundcontrol/docs/assets/setup/parameters_changing.png)

::: info
When you click **Save** the parameter is automatically and silently uploaded to the connected vehicle. Depending on the parameter, you may then need to reboot the flight controller for the change to take effect.
:::

## Tools

You can select additional options from the **Tools** menu on the top right hand side of the screen.

![Tools menu](file:///home/user/qgroundcontrol/docs/assets/setup/parameters_tools_menu.png)

**Refresh**
<br>Refresh the parameter values by re-requesting all of them from the vehicle.

**Reset all to defaults**
<br>Reset all parameters to their original default values.

**Load from file / Save to file**
<br>Load parameters from an existing file or save your current parameter settings to a file.

**Clear RC to Param**
<br>This clears all associations between RC transmitter controls and parameters. For more information see: [Radio Setup > Param Tuning Channels](../setup_view/radio.md#param-tuning-channels-px4).

**Reboot Vehicle**
<br>Reboot the vehicle (required after changing some parameters).



<div style="page-break-after: always;"></div>

# Settings View

The _Settings View_ is used to configure the settings for the _QGroundControl_ application (rather than a specific vehicle). You do not have to have a vehicle connected to change these values.

You can switch between the various settings options by clicking the buttons in the left-sidebar.

![](file:///home/user/qgroundcontrol/docs/assets/settings/settings_view.jpg)

## Settings Options

**[General](general.md)**
<br>The main application configuration settings. These are used to specify: display units, autoconnection devices, video display and storage, RTK GPS, etc.

**Comm Links**
<br>Allows you to manually create communication links and connect to them. _Keep in mind that normally this is not needed since QGroundControl will automatically connect to the most common devices._

**[Offline Maps](offline_maps.md)**
<br>Allows you to cache maps for use while you have no Internet connection.

**[MAVLink](mavlink.md)**
<br>Settings associated with the MAVLink connection to a vehicle.

**[Console](console_logging.md)**
<br>Used to capture application logs for help with diagnosing application problems.



<div style="page-break-after: always;"></div>

# General Settings (Settings View)

The general settings (**SettingsView > General Settings**) are the main place for application-level configuration.
Settable values include: display units, autoconnection devices, video display and storage, RTK GPS, brand image, and other miscellaneous settings.

::: info
Values are settable even if no vehicle is connected. Settings that require a vehicle restart are indicated in the UI.
:::

![SettingsView - Full General Tab](file:///home/user/qgroundcontrol/docs/assets/settings/general/overview.jpg)

## Units

This section defines the display units used in the application.

![Units settings](file:///home/user/qgroundcontrol/docs/assets/settings/general/units.jpg)

The settings are:

- **Distance**: Meters | Feet
- **Area**: SquareMetres | SquareFeet | SquareKilometers | Hectares | Acres | SquareMiles
- **Speed**: Metres/second | Feet/second | Miles/hour | Kilometres/hour | Knots
- **Temperature**: Celsius | Fahrenheit

## Miscellaneous

This section defines a number of miscellaneous settings, related to (non exhaustively): font sizes, colour schemes, map providers, map types, telemetry logging, audio output, low battery announcement levels, default mission altitude, [virtual joysticks](../settings_view/virtual_joystick.md), mission autoloading, default application file load/save path etc.

![Miscellaneous settings](file:///home/user/qgroundcontrol/docs/assets/settings/general/miscellaneous.jpg)

The settings are:

- <span id="language"></span>**Language**: System (System Language) | Bulgarian, Chinese, ...

  ![Display languages](file:///home/user/qgroundcontrol/docs/assets/settings/general/languages.jpg)

  Translations are generally built into the application and selected automatically based on the system language.

  Metadata downloaded from the vehicle (such as parameter descriptions) might have translations as well.
  These are downloaded from the internet upon vehicle connection. The translations are then cached locally.
  This means an internet connection during vehicle connection is required at least once.

- <span id="colour_scheme"></span>**Color Scheme**: Indoor (Dark) | Outdoor (Light)
- **Map Provider**: Google | Mapbox | Bing | Airmap | VWorld | Eniro | Statkart
- **Map Type**: Road | Hybrid | Satellite
- **Stream GCS Position**: Never | Always | When in Follow Me Flight Mode.
- **UI Scaling**: UI scale percentage (affects fonts, icons, button sizes, layout etc.)
- **Mute all audio output**: Turns off all audio output.
- **Check for Internet Connection**: Uncheck to allow maps to be used in China/places where map tile downloads are likely to fail (stops the map-tile engine continually rechecking for an Internet connection).
- <span id="autoload_missions"></span> **Autoload Missions**: If enabled, automatically upload a plan to the vehicle on connection.
  - The plan file must be named **AutoLoad#.plan**, where the `#` is replaced with the vehicle id.
  - The plan file must be located in the [Application Load/Save Path](#load_save_path).
- **Clear all settings on next start**: Resets all settings to the default (including this one) when _QGroundControl_ restarts.
- **Announce battery lower than**: Battery level at which _QGroundControl_ will start low battery announcements.
- <span id="load_save_path"></span>**Application Load/Save Path**: Default location for loading/saving application files, including: parameters, telemetry logs, and mission plans.

## Data Persistence {#data_persistence}

![Data Persistence Settings](file:///home/user/qgroundcontrol/docs/assets/settings/general/data_persistence.jpg)

The settings are:

- **Disable all data persistence**: Check to prevent any data being saved or cached: logs, map tiles etc.
  This setting disables the [telemetry logs section](#telemetry_logs).

## Telemetry Logs from Vehicle {#telemetry_logs}

![Telemetry Logs from Vehicle Settings](file:///home/user/qgroundcontrol/docs/assets/settings/general/telemetry_logs.jpg)

The settings are:

- <span id="autosave_log"></span>**Save log after each flight**: Telemetry logs (`.tlog`) automatically saved to the _Application Load/Save Path_ ([above](#load_save_path)) after flight.
- **Save logs even if vehicle was not armed**: Logs when a vehicle connects to _QGroundControl_.
  Stops logging when the last vehicle disconnects.
- [**CSV Logging**](csv.md): Log subset of telemetry data to a CSV file.

## Fly View {#fly_view}

![Fly View Settings](file:///home/user/qgroundcontrol/docs/assets/settings/general/fly_view.jpg)

The settings are:

- **Use Preflight Checklist**: Enable pre-flight checklist in Fly toolbar.
- **Enforce Preflight Checklist**: Checklist completion is a pre-condition for arming.
- **Keep Map Centered on Vehicle**: Forces map to center on the currently selected vehicle.
- **Show Telemetry Log Replay Status Bar**: Display status bar for [Replaying Flight Data](../fly_view/replay_flight_data.md).
- **Virtual Joystick**: Enable [virtual joysticks](../settings_view/virtual_joystick.md) (PX4 only)
- **Use Vertical Instrument Panel**: Align instrument panel vertically rather than horizontally (default).
- **Show additional heading indicators on Compass**: Adds additional indicators to the compass rose:
- _Blue arrow_: course over ground.
- _White house_: direction back to home.
- _Green line_: Direction to next waypoint.

- **Lock Compass Nose-Up**: Check to rotate the compass rose (default is to rotate the vehicle inside the compass indicateor).
- **Guided Minimum Altitude**: Minimum value for guided actions altitude slider.
- **Guided Maximum Altitude**: Minimum value for guided actions altitude slider.
- **Go To Location Max Distance**: The maximum distance that a Go To location can be set from the current vehicle location (in guided mode).

## Plan View {#plan_view}

![Plan View Settings](file:///home/user/qgroundcontrol/docs/assets/settings/general/plan_view.jpg)

The settings are:

- **Default Mission Altitude**: The default altitude used for the Mission Start Panel, and hence for the first waypoint.

## AutoConnect to the following devices {#auto_connect}

This section defines the set of devices to which _QGroundControl_ will auto-connect.

![Device autoconnect settings](file:///home/user/qgroundcontrol/docs/assets/settings/general/autoconnect_devices.jpg)

Settings include:

- **Pixhawk:** Autoconnect to Pixhawk-series device
- **SiK Radio:** Autoconnect to SiK (Telemetry) radio
- **PX4 Flow:** Autoconnect to PX4Flow device
- **LibrePilot:** Autoconnect to Libre Pilot autopilot
- **UDP:** Autoconnect to UDP
- **RTK GPS:** Autoconnect to RTK GPS device
- **NMEA GPS Device:** Autoconnect to an external GPS device to get ground station position ([see below](#nmea_gps))

### Ground Station Location (NMEA GPS Device) {#nmea_gps}

_QGroundControl_ will automatically use an internal GPS to display its own location on the map with a purple `Q` icon (if the GPS provides a heading, this will be also indicated by the icon).
It may also use the GPS as a location source for _Follow Me Mode_ - currently supported on [PX4 Multicopters only](https://docs.px4.io/en/flight_modes/follow_me.html).

You can also configure QGC to connect to an external GPS device via a serial or UDP port.
The GPS device must support the ASCII NMEA format - this is normally the case.

::: tip
A higher quality external GPS system may be useful even if the ground station has internal GPS support.
:::

Use the _NMEA GPS Device_ drop-down selector to manually select the GPS device and other options:

- USB connection:

  ![NMEA GPS Device - Serial](file:///home/user/qgroundcontrol/docs/assets/settings/general/nmea_gps_serial.jpg)

  - **NMEA GPS Device:** _Serial_
  - **NMEA GPS Baudrate**: The baudrate for the serial port

  :::tip
  To troubleshoot serial GPS problems: Disable RTK GPS [auto connection](#auto_connect), close _QGroundControl_, reconnect your GPS, and open QGC.
  :::

- Network connection:

  ![NMEA GPS Device - UDP](file:///home/user/qgroundcontrol/docs/assets/settings/general/nmea_gps_udp.jpg)

  - **NMEA GPS Device:** _UDP Port_.
  - **NMEA Stream UDP Port**: The UDP port on which QGC will listen for NMEA data (QGC binds the port as a server)

## RTK GPS {#rtk_gps}

This section allows you to specify the RTK GPS "Survey-in" settings, to save and reuse the result of a Survey-In operation, or to directly enter any other known position for the base station.

![RTK GPS Settings](file:///home/user/qgroundcontrol/docs/assets/settings/general/rtk_gps.jpg)

::: info
The _Survey-In_ process is a startup procedure required by RTK GPS systems to get an accurate estimate of the base station position.
The process takes measurements over time, leading to increasing position accuracy.
Both of the setting conditions must met for the Survey-in process to complete.
For more information see [RTK GPS](https://docs.px4.io/en/advanced_features/rtk-gps.html) (PX4 docs) and [GPS- How it works](http://ardupilot.org/copter/docs/common-gps-how-it-works.html#rtk-corrections) (ArduPilot docs).
:::

::: tip
In order to save and reuse a base position (because Survey-In is time consuming!) perform Survey-In once, select _Use Specified Base Position_ and press **Save Current Base Position** to copy in the values for the last survey.
The values will then persist across QGC reboots until they are changed.
:::

The settings are:

- Perform Survey-In
  - **Survey-in accuracy (U-blox only):** The minimum position accuracy for the RTK Survey-In process to complete.
  - **Minimum observation duration:** The minimum time that will be taken for the RTK Survey-in process.
- Use Specified Base Position
  - **Base Position Latitude:** Latitude of fixed RTK base station.
  - **Base Position Longitude:** Longitude of fixed RTK base station.
  - **Base Position Alt (WGS84):** Altitude of fixed RTK base station.
  - **Base Position Accuracy:** Accuracy of base station position information.
  - **Save Current Base Position** (button): Press to copy settings from the last Survey-In operation to the _Use Specified Base Position_ fields above.

## ADSB Server {#adsb_server}

![ADSB_Server Settings](file:///home/user/qgroundcontrol/docs/assets/settings/general/adbs_server.jpg)

The settings are:

- **Connect to ADSB SBS server**: Check to connect to ADSB server on startup.
- **Host address**: Host address of ADSB server
- **Server port**: Port of ADSB server

QGC can consume ADSB messages in SBS format from a remote or local server (at the specified IP address/port) and display detected vehicles on the Fly View map.

::: tip
One way to get ADSB information from nearby vehicles is to use [dump1090](https://github.com/antirez/dump1090) to serve the data from a connected RTL-SDR dongle to QGC.

The steps are:

1. Get an RTL-SDR dongle (and antenna) and attach it to your ground station computer (you may need to find compatible drivers for your OS).
1. Install _dump1090_ on your OS (either pre-built or build from source).
1. Run `dump1090 --net` to start broadcasting messages for detected vehicles on TCP localhost port 30003 (127.0.0.1:30003).
1. Enter the server (`127.0.0.1`) and port (`30003`) address in the QGC settings above.
1. Restart QGC to start seeing local vehicles on the map.

:::

## Video {#video}

The _Video_ section is used to define the source and connection settings for video that will be displayed in _Fly View_.

![Video settings](file:///home/user/qgroundcontrol/docs/assets/settings/general/video_udp.jpg)

The settings are:

- **Video Source**: Video Stream Disabled | RTSP Video Stream | UDP h.264 Video Stream | UDP h.265 Video Stream | TCP-MPEG2 Video Stream | MPEG-TS Video Stream | Integrated Camera

  ::: info
  If no video source is specified then no other video or _video recording_ settings will be displayed (above we see the settings when UDP source is selected).
  :::

- **URL/Port**: Connection type-specific stream address (may be port or URL).
- **Aspect Ratio**: Aspect ratio for scaling video in video widget (set to 0.0 to ignore scaling)
- **Disabled When Disarmed**: Disable video feed when vehicle is disarmed.
- **Low Latency Mode**: Enabling low latency mode reduces the video stream latency, but may cause frame loss and choppy video (especially with a poor network connection). <!-- disables the internal jitter buffer -->

## Video Recording

The _Video Recording_ section is used to specify the file format and maximum allocated file storage for storing video.
Videos are saved to a sub-directory ("Video") of the [Application Load/Save Path](#load_save_path).

![Video - without auto deletion](file:///home/user/qgroundcontrol/docs/assets/settings/general/video_recording.jpg)

![Video - auto deletion](file:///home/user/qgroundcontrol/docs/assets/settings/general/video_recording_auto_delete.jpg)

The settings are:

- **Auto-Delete Files**: If checked, files are auto deleted when the specified amount of storage is used.
- **Max Storage Usage**: Maximum video file storage before video files are auto deleted.
- **Video File Format**: File format for the saved video recording: mkv, mov, mp4.

## Brand Image

This setting specifies the _brand image_ used for indoor/outdoor colour schemes.

The brand image is displayed in place of the icon for the connected autopilot in the top right corner of the toolbar.
It is provided so that users can easily create screen/video captures that include a company logo/branding.

![Brand Image](file:///home/user/qgroundcontrol/docs/assets/settings/general/brand_image.jpg)

The settings are:

- **Indoor Image**: Brand image used in [indoor color scheme](#colour_scheme)
- **Outdoor Image**: Brand image used in [outdoor color scheme](#colour_scheme)
- **Reset Default Brand Image**: Reset the brand image back to default.



<div style="page-break-after: always;"></div>

# CSV Logging

![Csv checkbox](file:///home/user/qgroundcontrol/docs/assets/settings/general/csv.jpg)

When checked, a CSV (comma-separated value) telemetry file will be created along with the usual **.tlog** telemetry file.
The file is only created if **Save log after each flight** is enabled, and is recorded for the same duration.

This CSV file contains the most relevant vehicle telemetry data available for quick analysis such as GPS position, attitude, battery status, and others.
It is populated at 1 Hz and while it is not as detailed as the telemetry log, it is a lot easier to work with and quicker to extract data out of.

The file can be opened by common spreadsheet software, including: Microsoft Excel, Google Sheets, LibreOffice Calc or OpenOffice Calc.



<div style="page-break-after: always;"></div>

# Offline Maps

![](file:///home/user/qgroundcontrol/docs/assets/settings/offline_maps.jpg)

Offline Maps allows you to cache map tiles for use when not connected to the Internet. You can create multiple offline sets, each for a different location.

## Add new set

To create a new offline map set, click "Add new set". Which will take you to this page:
![](file:///home/user/qgroundcontrol/docs/assets/settings/offline_maps_add.jpg)

From here you can name your set as well as specify the zoom levels you want to cache. Move the map to the position you want to cache and then set the zoom levels and click Download to cache the tiles.

To the left you can see previews of the min and max zoom levels you have chosen.



<div style="page-break-after: always;"></div>

# MAVLink Settings

The MAVLink settings (**SettingsView > MAVLink**) allow you to configure options and view information specific to MAVLink communications.
This includes setting the MAVLink system ID for _QGroundControl_ and viewing link quality.

The screen also allows you to manage [MAVLink 2 Log Streaming](#logging) (PX4 only), including _automating log upload to Flight Review_!

![MAVLink settings screen](file:///home/user/qgroundcontrol/docs/assets/settings/mavlink/overview.png)

## Ground Station {#ground_station}

This section sets the MAVLink properties and behaviour of _QGroundControl_.

![Ground Station](file:///home/user/qgroundcontrol/docs/assets/settings/mavlink/ground_station.png)

- **MAVLink System ID:** System ID of _QGroundControl_ on the MAVLink network (Default: 255).
  Vehicles are typically allocated IDs from 1.
  You may have to specify another ID if there are multiple ground stations or MAVLink applications on the network.
- **Emit heartbeat:** Disable emission of regular MAVLink HEARTBEAT message (Default: True).
  Generally speaking, you should not turn this off.
- **Only accept MAVs with the same protocol version:** Set true to only connect to MAVLink 1 or to MAVLink 2 vehicles (Default: True).
- **Enable MAVLink forwarding:** Enable _QGroundControl_ to forward MAVLink messages from connected vehicles to another UDP endpoint (Default: False).
  Note that this forwarding is one-way: from QGC to the specified host.
  Any MAVLink messages that are received from the specified host will be ignored.

## Link Status {#link_status}

This shows the status of MAVLink message transfer over the communications link.
A high **Loss rate** may lead to protocol errors for things like parameter download or mission upload/download.

![Link Status](file:///home/user/qgroundcontrol/docs/assets/settings/mavlink/link_status.jpg)

## MAVLink 2 Logging (PX4 only) {#logging}

The _MAVLink 2 Logging_ settings (PX4 only) configure real-time log streaming from PX4 to _QGroundControl_ and upload of logs to [Flight Review](https://logs.px4.io).

::: warning
MAVLink 2 Logging cannot be used on "basic" setups because it requires a constant high-rate MAVLink connection to the vehicle (it _may_ work over WiFI but will _not_ work over a Telemetry link).
:::

::: tip
In theory log streaming allows real time analysis of data.
At time of writing real-time analysis has not yet been implemented.
:::

The log format is the same as for SD Card logs (downloaded using [Analyze View > Log Download](../analyze_view/log_download.md)), but actual data logged may be slightly different because log start/stop time is controlled by _QGroundControl_ and because some dropouts may occur when streaming over a lossy channel.

The _MAVLink 2 Logging_ section allows you to manually start and stop logging, and to enable automatic capture of logs.

![MAVLink 2 Logging](file:///home/user/qgroundcontrol/docs/assets/settings/mavlink/mavlink2_logging.jpg)

The _MAVLink 2 Log Uploads_ section allows you configure uploading of MAVLink logs to [Flight Review](https://logs.px4.io).
You can specify all the fields that you would otherwise have to directly enter in the site, and also choose whether logs are automatically or manually uploaded.

![MAVLink 2 Log Uploads](file:///home/user/qgroundcontrol/docs/assets/settings/mavlink/mavlink2_log_uploads.jpg)

The fields are:

- **Email address for Log Uploads:** _Flight Review_ will email you a link to the upload at this address.
  This is important as otherwise you will have no way to access a non-public log after upload.
- **Default Description:** Description/name of flight used for log.
- **Default Upload URL:** URL for upload of the log/log metadata.
  This is set by default to the _Flight Review_ URL.
- **Video URL:** (Optional) URL for video of flight associated with log.
  This may be included on the Flight Review page to ease analysis.
- **Wind Speed:** Used to aid debugging and filtering (from multiple flights). Allowed values: _Calm_ | _Breeze_ | _Gale_ | _Storm_.
- **Flight Rating:** Used to aid debugging and filtering (from multiple flights). Allowed values: _Crashed (Pilot Error)_ | _Crashed (Software or Hardware Issue)_ | _Unsatisfactory_ | _Good_ | _Great_.
- **Additional Feedback:** (Optional). Enter a more detailed description of the flight or behaviour.
- **Make this log publically available:** If set, the log will be visible and searchable on _Flight Review_.
  If not set, it will only be available via the link emailed on upload.
- **Enable automatic log uploads:** If set, the log will automatically be uploaded on completion.
- **Delete log file after uploading:** If set, the log will automatically deleted after upload.

The _Saved Log Files_ section is used to manually manage log uploads.
Use the checkboxes and buttons to select logs, and either delete or upload them.

::: tip
You can change the parameters in _MAVLink 2 Log Uploads_ above to specify separate descriptions for uploaded logs.
:::

![Saved log files](file:///home/user/qgroundcontrol/docs/assets/settings/mavlink/saved_log_files.jpg)



<div style="page-break-after: always;"></div>

# Console Logging

The _Console_ can be helpful tool for diagnosing _QGroundControl_ problems. It can be found in **SettingsView > Console**.

![Console logging](file:///home/user/qgroundcontrol/docs/assets/support/console.jpg)

Click the **Set Logging** button to enable/disable logging information displayed by _QGroundControl_.

## Common Logging Options

The most commmonly used logging options are listed below.

| Option(s)                                                                           | Description                                                                                    |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `LinkManagerLog`, `MultiVehicleManagerLog`                                          | Debug connection problems.                                                                     |
| `LinkManagerVerboseLog`                                                             | Debug serial ports not being detected. Very noisy continuous output of available serial ports. |
| `FirmwareUpgradeLog`                                                                | Debug firmware flash issues.                                                                   |
| `ParameterManagerLog`                                                               | Debug parameter load problems.                                                                 |
| `ParameterManagerDebugCacheFailureLog`                                              | Debug parameter cache crc misses.                                                              |
| `PlanManagerLog`, `MissionManagerLog`, `GeoFenceManagerLog`, `RallyPointManagerLog` | Debug Plan upload/download issues.                                                             |
| `RadioComponentControllerLog`                                                       | Debug Radio calibration issues.                                                                |

## Logging from the Command Line

An alternate mechanism for logging is using the `--logging` command line option. This is handy if you are trying to get logs from a situation where _QGroundControl_ crashes.

How you do this and where the traces are output vary by OS:

- Windows

  - You must open a command prompt, change directory to the **qgroundcontrol.exe** location, and run it from there:

    ```sh
    cd "\Program Files (x86)\qgroundcontrol"
    qgroundcontrol --logging:full
    ```

  - When _QGroundControl_ starts you should see a separate console window open which will have the log output

- OSX

  - You must run _QGroundControl_ from Terminal. The Terminal app is located in Applications/Utilities. Once Terminal is open paste the following into it:

    ```sh
    cd /Applications/qgroundcontrol.app/Contents/MacOS/
    ./qgroundcontrol --logging:full
    ```

  - Log traces will output to the Terminal window.

- Linux

  ```sh
  ./qgroundcontrol-start.sh --logging:full
  ```

  - Log traces will output to the shell you are running from.



<div style="page-break-after: always;"></div>

# Virtual Joystick

_QGroundControl_ allows you to control a vehicle with on-screen virtual thumbsticks. These are displayed as shown below in the flight view.

![QGroundControl Preferences > Enable Virtual Joystick](file:///home/user/qgroundcontrol/docs/assets/settings/joystick_virtual_joystick_displayed.jpg)

::: info
Thumbstick control is not as responsive as using an RC Transmitter (because the information is sent over MAVLink). Another alternative is to use a [USB Joystick/Gamepad](../setup_view/joystick.md).
:::

## Enable the thumbsticks

To enable the virtual joysticks:

1. Select the **Q** icon from the top toolbar
1. Open the **Application Settings**
1. Make sure you're on the **General** tab
1. Check the **Virtual joystick** box

   ![QGroundControl Application Settings > Enable Virtual joystick](file:///home/user/qgroundcontrol/docs/assets/settings/joystick_virtual_joystick_enable.png)



<div style="page-break-after: always;"></div>

# Analyze View

The _Analyze View_ is accessed by selecting the _QGroundControl_ application menu ("Q" icon in the top left corner) and then selecting the **Analyze Tools** button (from the _Select Tool_ popup).

![Analyze ](file:///home/user/qgroundcontrol/docs/assets/analyze/menu_analyze_tool.png)

The view provides tools to:

- [Download Logs](../analyze_view/log_download.md) — List, download and clear logs on the vehicle.
- [GeoTag Images (PX4)](../analyze_view/geotag_images.md) — Geotag survey mission images using the flight log (on a computer).
- [MAVLink Console (PX4)](../analyze_view/mavlink_console.md) — Access the the nsh shell running on the vehicle.
- [MAVLink Inspector](../analyze_view/mavlink_inspector.md) — Display and chart received MAVLink messages/values.



<div style="page-break-after: always;"></div>

# Log Download (Analyze View)

The _Log Download_ screen (**Analyze > Log Download**) is used to list (_Refresh_),
_Download_ and _Erase All_ log files from the connected vehicle.

![Analyze View Log Download](file:///home/user/qgroundcontrol/docs/assets/analyze/log_download.jpg)



<div style="page-break-after: always;"></div>

# GeoTag Images (Analyze View)

The _GeoTag Images_ screen (**Analyze > GeoTag Images**) allows you to geotag images from a survey mission using information in the flight log.

::: info
This feature only works with _PX4_ flight stack logs.
ArduPilot is not supported.
:::

![Analyze View GeoTag Images](file:///home/user/qgroundcontrol/docs/assets/analyze/geotag_images.jpg)

Select the log file, image directory and (optionally) output directory for geotagged images using the buttons provided.
Click **Start Tagging** to generate the geotagged images.



<div style="page-break-after: always;"></div>

# MAVLink Console (Analyze View)

The MAVLink Console (**Analyze > Mavlink Console**) allows you to connect to the PX4 [System Console](https://docs.px4.io/main/en/debug/system_console.html) and send commands.

::: info
The console only works when connected to _hardware_ running the _PX4_ flight stack.
PX4 SITL and ArduPilot are not supported.
:::

::: tip
This is a very useful feature for developers as it allows deep access to the system. In particular, if you are connected via Wifi, you can have this same level of access while the vehicle is flying.
:::

![Analyze View MAVLink Console](file:///home/user/qgroundcontrol/docs/assets/analyze/mavlink_console.jpg)

The view does not display any output except in response to commands.
Once the vehicle is connected, you can enter commands in the bar provided (for a full list of available commands enter: `?`).

Command output is displayed in the view above the command bar.
Click **Show Latest** to jump to the bottom of the command output.



<div style="page-break-after: always;"></div>

# MAVLink Inspector

The _MAVLink Inspector_ provides real-time information and charting of MAVLink traffic received by _QGroundControl_.

::: warning
This feature is intended primarily for **autopilot developers**/**vehicle creators**.
It is only supported on desktop builds (Windows, Linux, Mac OS).
:::

![MAVLink inspector](file:///home/user/qgroundcontrol/docs/assets/analyze/mavlink_inspector/mavlink_inspector.jpg)

The inspector lists all received messages for the current vehicle, along with their source component id and update frequency.
You can drill down into individual messages to get the message id, source component id, and the values of all the individual fields.
You can also chart field values in real time, selecting multiple fields from multiple messages to display on one of two charts.

To use the _MAVLink Inspector_:

1. Open _Analyze View_ by selecting the _QGroundControl_ application menu ("Q" icon in top left corner) and then choosing the **Analyze Tools** button (from the _Select Tool_ popup).
   ![Analyze ](file:///home/user/qgroundcontrol/docs/assets/analyze/menu_analyze_tool.png)
1. Select the **MAVLink Inspector** from the sidebar.

   ![MAVLink inspector menu](file:///home/user/qgroundcontrol/docs/assets/analyze/mavlink_inspector/mavlink_inspector_menu.jpg)

   The view will start populating with messages as they are received.

1. Select a message to see its fields and their (dynamically updating) value:

   ![MAVLink inspector: message detail](file:///home/user/qgroundcontrol/docs/assets/analyze/mavlink_inspector/mavlink_inspector_message_details.jpg)

1. Add fields to charts by enabling the adjacent checkboxes (plot 1 is displayed below plot 2).

   ![MAVLink inspector: chart fields detail](file:///home/user/qgroundcontrol/docs/assets/analyze/mavlink_inspector/mavlink_inspector_plot1.jpg)

   - Fields can be added to only one chart.
   - A chart can have multiple fields, and fields from multiple messages (these are listed above each chart).
     Messages containing fields that are being charted are highlighted with an asterisk.

     ![MAVLink inspector: chart fields detail](file:///home/user/qgroundcontrol/docs/assets/analyze/mavlink_inspector/mavlink_inspector_charted_messages.jpg)

   - The _Scale_ and _Range_ are set to sensible values, but can be modified if needed.



<div style="page-break-after: always;"></div>

# Releases

This section contains information about releases and daily builds.



<div style="page-break-after: always;"></div>

# Release Notes

Releases and their associated release notes can be found in the [Github releases page](https://github.com/mavlink/qgroundcontrol/releases).

::: info
Release information about QGC v4.0.0 and earlier can be found in the sub pages.
:::



<div style="page-break-after: always;"></div>

# QGC v4 Release Notes

::: warning
Release notes are now tracked in the [Github release page](https://github.com/mavlink/qgroundcontrol/releases).
See that page for information about changes after v4.0.0.
:::

## Stable Version 4.0

::: info
The format for Settings in QGC had to change in this release. Which means all QGC settings will be reset to defaults.
:::

- Settings
  - Language: Allow selection of language
  - Optional [CSV Logging](../settings_view/csv.md) of telemetry data for improved accessibility.
  - ArduPilot
    - Support configurable mavlink stream rates. Available from Settings/Mavlink page.
      ![Stream Rates JPG](file:///home/user/qgroundcontrol/docs/assets/daily_build_changes/arducopter_stream_rates.jpg)
    - Improved support for flashing ChibiOS firmware
    - Improved support for connecting to ChibiOS bootloader boards
- Setup
  - Joystick
    - New joystick setup ui
    - Ability to configure held button to single or repeated action
  - ArduPilot
    - Motor Test
    - ArduSub
      - Automatic motor direction detection
    - ArduCopter
      - PID Tuning support ![PID Tuning JPG](file:///home/user/qgroundcontrol/docs/assets/daily_build_changes/arducopter_pid_tuning.jpg)
      - Additional Basic Tuning options ![Basic Tuning JPG](file:///home/user/qgroundcontrol/docs/assets/daily_build_changes/arducopter_basic_tuning.jpg)
      - Copter/Rover - Frame setup ui ![Setup Frame Copter JPG](file:///home/user/qgroundcontrol/docs/assets/daily_build_changes/arducopter_setup_frame.jpg)
- Plan
  - Create Plan from template with wizard like progression for completing full Plan.
  - Survey: Save commonly used settings as a Preset
  - Polygon editing
    - New editing tools ui
    - Support for tracing a polygon from map locations
  - ArduPilot
    - Support for GeoFence and Rally Points using latest firmwares and mavlink v2
  - [Pattern Presets](../plan_view/pattern_presets.md)
    - Allows you to save settings for a Pattern item (Survey, Corridor Scan, ...) into a named preset. You can then use this preset over and over again as you create new Pattern.
- Fly
  - Click to ROI support
  - Added support for connecting to ADSB SBS server. Adds support for ADSB data from USB SDR Dongle running 'dump1090 --net' for example.
  - Ability to turn on Heading to home, COG and Next Waypoint heading indicators in Compass.
  - Video
    - Add support for h.265 video streams
    - Automatically add a [Video Overlay](../fly_view/video_overlay.md) with flight data as a subtitle for locally-recorded videos
  - Vehicle type specific pre-flight checklists. Turn on from Settings.
- Analyze
  - New Mavlink Inspector which includes charting support. Supported on all builds including Android and iOS.
- General
  - Released Windows build are now 64 bit only
  - Log Replay: Ability to specify replay speed
  - ArduPilot
    - Improved support for chibios firmwares and ArduPilot bootloader with respect to flashing and auto-connect.



<div style="page-break-after: always;"></div>

# QGC v3 Release Notes

This topic contains the cumulative release notes for _QGroundControl v3.x_.


## Stable Version 3.5

This section contains a high level and _non-exhaustive_ list of new features added to _QGroundControl_ in version 3.5.

- **Overall**
  - Added Airmap integration to QGC. OSX build only.
  - Bumped settings version (now 8).
    This will cause all settings to be reset to defaults.
  - Added Chinese and Turkish localization and partial German localization.
  - Added support for the Taisync 2.4GHz ViUlinx digital HD wireless link.
  - Fix loading of parameters from multiple components.
    This especially affected WiFi connections.
  - **ArduPilot** Support for ChibiOS firmware connect and flash.
- **Settings**
  - **RTK** Add support for specifying fixed RTK based station location in Settings/General.
  - **GCS Location**
    - Added UDP Port option for NMEA GPS Device.
    - GCS heading shown if available
- **Plan**
  - **Polygons** Support loading polygons from SHP files.
  - **Fixed Wing Landing Pattern** Add stop photo/video support.
    Defaults to on such that doing an RTL will stop camera.
  - **Edit Position dialog** Available on polygon vertices.
- **Fly**
  - **Camera Page** Updated support for new MAVLInk camera messages.
    Camera select, camera mode, start/stop photo/video, storage mangement...
  - **Orbit** Support for changing rotation direction.
  - **Instrument Panel**
    - Added ESTIMATOR_STATUS values to new estimatorStatus Vehicle FactGroup.
      These are now available to display in instrument panel.
    - Make Distance to GCS available for display from instrument panel.
    - Make Heading to Home available for display from instrument panel.

## Stable Version 3.4

This section contains a high level and _non-exhaustive_ list of new features added to _QGroundControl_ in version 3.4. Not to mention the large number of bug fixes in each stable release.

- **Settings**
  - **Offline Maps**
    - Center Tool allows you to specify a map location in lat/lon or UTM coordinates. Making it easier to get to the location you want to create an offline map for.
    - Ability to pre-download terrain heights for offline use.
  - **Help** Provides links to QGC user guide and forums.
- **Setup**
  - **Firmware** Ability to flash either PX4 or ArduPilot Flow firmware.
  - PX4 Pro Firmware
    - **Flight Modes** Specify channels for all available transmitter switches.
    - **Tuning: Advanced** Initial implementation of vehicle PID tuning support. Note that this is a work in progress that will improve in 3.5 daily builds.
  - ArduPilot Firmware
    - **Power/Safety** Support for new multi-battery setup.
    - **Trad Heli** New setup page.
- **Plan**

  - **File Load/Save** New model for Plan file loading which matches a standard File Load/Save/Save As user model.
  - **Load KML** Ability to load a KML file directly from the Sync menu. You will be prompted for what type of Pattern you want to create from the KML if needed.
  - **Survey** Better support for irregular shaped polygons.
  - **[Corridor Scan](../plan_view/pattern_corridor_scan.md)** - Create a flight pattern which follows a poly-line. For example can be used to survey a road.
  - **[Fixed Wing Landing Pattern](../plan_view/pattern_fixed_wing_landing.md)**
    - Landing area visually represented in Plan.
    - Landing position/heading can be copied from Vehicle position/heading.
  - **Terrain**

    - Height of mission items can be specified as height above terrain.
    - Survey and Corridor Scan can generate flight plans which follow terrain.

      ::: info
      This feature does not support [ArduPilot terrain following](http://ardupilot.org/copter/docs/common-terrain-following.html).
      :::

  - **Edit Position** Set item position from vehicle position.

- **Fly**
  - **Pre-Flight Checklist** You can turn this on from Settings. It provides a generic checklist to follow prior to flight. Expect more feature to appear for this in 3.5 daily builds.
  - **Instrument Panel**
    - Many new values available for display.
    - New Camera page which provides full camera control. Requires a camera which support new MavLink camera specification.
  - **ArduPlane** Much better support for guided commands including QuadPlane support.
  - **High Latency Links** Support for high latency links such as satellite connections.
    Limits the traffic from QGC up to Vehicle on these links to reduce cost.
    Supports HIGH_LATENCY MavLink message.
    Supports failover back/forth from high latency to normal link with dual link setup.

## Stable Version 3.3 (Summary)

:::tip
More detailed release notes for version 3.3 can be found in the next section.
:::

This section contains a high level and _non-exhaustive_ list of new features added to _QGroundControl_ in version 3.3. Not to mention the large number of bug fixes of this release.

- **Settings**
  - Local NMEA GPS device support.
  - Video Recording save settings.
- **Setup**
  - **Parameter Editor** - Searching updates as you type characters for near immediate response to searches.
  - **Joystick** - Android joystick support.
- **Plan**
  - **NEW - Structure Scan Pattern** - Create a multi-layered flight pattern that captures images over vertical surfaces (polygonal or circular). Used for 3d model generation or vertical surface inspection.
  - **Fixed Wing Landing Pattern** - You can now adjust the distance from the loiter to land point by either distance or glide slope fall rate.
  - PX4 GeoFence and Rally Point support.
  - Terrain height display in lower Mission Item altitude display
- **Fly**
  - Start/Stop video recording.
  - Better display of vehicle icons when connected to multiple vehicles.
  - Multi-Vehicle View supports commands which apply to all vehicles.
  - Displays vehicles reported from ADS-B sensor.
- **Analyze**
  - **Mavlink console** - New support for communicating with Mavlink console.
  - **Log Download** - Moved from Menu to Analyze view.


## Stable Version 3.3 (Detailed)

### Settings View

#### NMEA GPS Device support

![NMEA GPS Device support](file:///home/user/qgroundcontrol/docs/assets/settings/general/NMEADevice.jpg)

You can specify a connection to one of these devices on the General page.
The GPS information will then be used for ground station location and in turn follow me support.

For more information see [Settings > General (AutoConnect to the following devices)](../settings_view/general.md#auto_connect).

#### Video Recording

![Video Recording](file:///home/user/qgroundcontrol/docs/assets/settings/video_recording.jpg)

Videos will be saved to the Video directory of your QGC file save path.
You can also specify the maximum amount of space you want video files to consume.
After that size if exceeded the oldest video files will be removed.
Video Recording is turned on/off from the Video widget in the Fly View.

For more information see [Settings > General (Video / Video Recording)](../settings_view/general.md#video).

### Plan View

#### Structure Scan

A Structure Scan allows you to create a grid flight pattern that captures images over vertical surfaces (polygonal or circular).
These are typically used for the visual inspection or creation of 3d models of structures.

Details [here](../plan_view/pattern_structure_scan_v2.md).

#### New MAVLink GeoFence, Rally Point support

![](file:///home/user/qgroundcontrol/docs/assets/plan/geofence_rally.jpg)

QGC supports the new MAVLink GeoFence and Rally Point specification/protocol. This new system supports multiple polygonal and/or circular fences which can be specified as an exclusion or an inclusion fence.

The fence which is currently selected by the "Edit" radio button will show the on screen editing controls such as the drag points for polygon editing.

**Note** Only PX4 Pro firmware supports the new specification. ArduPilot does not yet support the new spec. Support for GeoFence/Rally is temporarily disabled in QGC until QGC ArduPilot code is reworked to the new architecture.

#### Edit Position Dialog

![](file:///home/user/qgroundcontrol/docs/assets/plan/edit_position_dialog.jpg)

The Edit Position Dialog allows you to specify a detailed position for an item in either Geographic or UTM coordinate systems. It is available from the Polygon Tools menu as well as the hamburger menu of any mission item which specifies a coordinate:

![](file:///home/user/qgroundcontrol/docs/assets/plan/mission_item_editor_hamburger.jpg)

#### Polygon Tools

![](file:///home/user/qgroundcontrol/docs/assets/plan/polygon_tools.jpg)

You can now also click on the polygon center drag handle to bring up a set of polygon manipulation tools. The tools are available anywhere polygon editing is supported: Survey, Structure Scan, GeoFence, ...

- Circle - Converts the polygon to a circular polygon.
- Polygon - Changes a circular polygon back to a rectangular polygon.
- Set radius - Set radius for circular polygons.
- Edit position - Displays the edit position dialog to specify a detailed position for the circular center.
- Load KML - Set polygon to polygon loaded from KML file.

Circular polygon example:

<img src="../../../assets/plan/circular_polygon.jpg" height="200" />

### Fly View

#### Start/Stop Video Recording

This is now a video record button in the video window. Settings for saved videos are available from General Page of Setup view.

#### Multi-Vehicle vehicle indicators

When you are connected to multiple vehicles the vehicle id will be shown below the vehicle icon. The active vehicle will be opaque and the inactive vehicles will be semi-transparent.

![](file:///home/user/qgroundcontrol/docs/assets/fly/multi_vehicle_indicators.jpg)

#### Multi-Vehicle View supports batch commands

The multi-vehicle list now supports commands which apply to all vehicles.

![](file:///home/user/qgroundcontrol/docs/assets/fly/multi_vehicle_list.jpg)

The current list of available commands are Pause and Start Mission but that will be exapanded upon with further development.

#### ADS-B sensor vehicle display

Vehicle reported by ADS-B sensor on vehicle are shown on map as smaller blue icons with altitude and callsign below the icon.

![](file:///home/user/qgroundcontrol/docs/assets/fly/adsb_vehicle.jpg)

## Stable Version 3.2 (Summary)

:::tip
More detailed release notes for version 3.2 can be found in the next section.
:::

This section contains a high level and _non-exhaustive_ list of new features added to _QGroundControl_ in version 3.2.

- **Settings**

  - **File Save path** - Specify a save path for all files used by QGC.
  - **Telemetry log auto-save** - Telemetry logs are now automatically saved without prompting.
  - **AutoLoad Plans** - Used to automatically load a Plan onto a vehicle when it first connects.
  - **RTK GPS** - Specify the Survey in accuracy and Minimum observation duration.

- **Setup**

  - ArduPilot only
    - **Pre-Flight Barometer and Airspeed calibration** - Now supported
    - **Copy RC Trims** - Now supported

- **Plan View**

  - **Plan files** - Missions are now saved as .plan files which include the mission, geo-fence and rally points.
  - **Plan Toolbar** - New toolbar which shows you mission statistics and Upload button.
  - **Mission Start** - Allows you to specify values such as flight speed and camera settings to start the mission with.
  - **New Waypoint features** - Adjust heading and flight speed for each waypoint as well as camera settings.
  - **Visual Gimbal direction** - Gimbal direction is shown on waypoint indicators.
  - **Pattern tool** - Allows you to add complex patterns to a mission.
    - Fixed Wing Landing (new)
    - Survey (many new features)
  - **Fixed Wing Landing Pattern** - Adds a landing pattern for fixed wings to your mission.
  - **Survey** - New features
    - **Take Images in Turnarounds** - Specify whether to take images through entire survey or just within each transect segment.
    - **Hover and Capture** - Stop vehicle at each image location and take photo.
    - **Refly at 90 degree offset** - Add additional pattern at 90 degree offset to original so get better image coverage.
    - **Entry location** - Specify entry point for survey.
    - **Polygon editing** - Simple on screen mechanism to drag, resize, add/remove points. Much better touch support.

- **Fly View**

  - **Arm/Disarm** - Available from toolbar.
  - **Guided Actions** - New action toolbar on the left. Supports:
    - Takeoff
    - Land
    - RTL
    - Pause
    - Start Mission
    - Resume Mission - after battery change
    - Change Altitude
    - Land Abort
    - Set Waypoint
    - Goto Location
  - **Remove mission after vehicle lands** - Prompt to remove mission from vehicle after landing.
  - **Flight Time** - Flight time is shown in instrument panel.
  - **Multi-Vehicle View** - Better control of multiple vehicles.

- **Analyze View** - New

  - **Log Download** - Moved to Analyze view from menu
  - **Mavlink Console** - NSH shell access

- **Support for third-party customized QGroundControl**
  - Standard QGC supports multiple firmware types and multiple vehicle types. There is now support in QGC which allows a third-party to create their own custom version of QGC which is targeted specifically to their custom vehicle. They can then release their own version of QGC with their vehicle.

## Stable Version 3.2 (Detailed)

This is a more detailed high level (but still _non-exhaustive_) list of new features added to _QGroundControl_ in version 3.2.

### Settings

#### Telemetry log auto-save

If you have _Save telemetry log after each flight_ turned on you will no longer be prompted as to where to save the log each time the vehicle disarms.
Logs will automatically be saved to the [Application Load/Save Path](../settings_view/general.md#load_save_path)

For more information see [Settings > General (Miscellaneous)](../settings_view/general.md#autosave_log).

#### AutoLoad plans

If this setting is turned on, _QGroundControl_ will automatically upload a plan to the vehicle when it connects.
The plan file must be named **AutoLoad#.plan** where the `#` is replaced with the vehicle id.
The plan file must be located in the [Application Load/Save Path](../settings_view/general.md#load_save_path).

For more information see [Settings > General (Miscellaneous)](../settings_view/general.md#autoload_missions).

#### Application Load/Save Path

You can now specify a save path which QGC will use as the default location to save files such as Parameters, Telemetry or Mission Plans.

For more information see [Settings > General (Miscellaneous)](../settings_view/general.md#load_save_path).

#### RTK GPS

You can now specify the _Survey in accuracy_ and _Minimum observation duration_ for use with a connected RTK GPS.

For more information see [Settings > General (RTK GPS)](../settings_view/general.md#rtk_gps).

### Setup

#### ArduPilot - Pre-Flight Barometer and Airspeed calibration

This is now supported from the Sensors page.

#### ArduPilot - Copy RC Trims

This is now supported from the Copy Trims button on the Radio setup page.

### Plan View

#### Plan Files

Previous version of _QGroundControl_ saved missions, geo-fences and rally points in separate files (**.mission**, **.fence**, **.rally**). QGC now save all information related to a flight plan into a single file called a _Plan File_ with a file extension of **.plan**.

Information about the format can be found in [Plan File Format](../../qgc-dev-guide/file_formats/plan.md) (QGC Developer Guide).

#### Plan Toolbar

![Plan Toolbar](file:///home/user/qgroundcontrol/docs/assets/plan/plan_toolbar.jpg)

The new _Plan Toolbar_ is displayed at the top of the [PlanView](../plan_view/plan_view.md).
It shows you information related to the currently selected waypoint as well as statistics for the entire mission.

When connected to a vehicle it also shows an **Upload** button, which can be used to upload the plan to the vehicle.

#### Mission Settings

The [Mission Settings](../plan_view/plan_view.md#mission_settings) panel allows you to specify values which apply to the entire mission, or settings you want to control right at the beginning of a mission.
This is the first item in the mission list on the right of the screen.

<img src="../../../assets/plan/mission/mission_settings.png" style="width: 150px;"/>

##### Mission Defaults

###### Waypoint alt

This specifies the default altitude for newly added mission items.
If you update this value while you have a mission loaded it will prompt you to update all the the waypoints to this new altitude.

###### Flight speed

This allows you to set the flight speed for the mission to be different than the default mission speed.

###### RTL after mission end

Check this if you want your vehicle to RTL after the final mission item.

##### Camera section

<img src="../../../assets/plan/mission/mission_settings_camera_section.jpg" style="width: 150px;"/>

The camera section allows you to specify a camera action to take, control the gimbal and set your camera into photo or video mode.

The camera actions available are:

- Continue current action
- Take photos (time)
- Take photos (distance)
- Stop taking photos
- Start recording video
- Stop recording video

##### Vehicle Info section

<img src="../../../assets/plan/mission/mission_settings_vehicle_info_section.jpg" style="width: 150px;"/>

When planning a mission the firmware being run on the vehicle as well as the vehicle type must be known in order for QGroundControl to show you the mission commands which are appropriate for your vehicle.

If you are planning a mission while you are connected to your vehicle the Firmware and Vehicle Type will be determined from the vehicle. If you are planning a mission while not connected to a vehicle you will need to specify this information yourself.

The additional value that can be specified when planning a mission is the vehicle flight speed. By specifying this value, total mission or survey times can be approximated even when not connected to a vehicle.

##### Planned Home Position

<img src="../../../assets/plan/mission/mission_settings_planned_home.jpg" style="width: 150px;"/>

The planned home position allows you to simulate the vehicle's home position while planning a mission. This way you see the waypoint trajectory for your vehicle from takeoff to mission completion. Keep in mind that this is only the "planned" home position and you should place it where you plan to start the vehicle from. It has no actual impact on flying the mission. The actual home position of a vehicle is set by the vehicle itself when arming.

#### New Waypoint features

<img src="../../../assets/plan/waypoint.jpg" style="width: 150px;"/>

- You can now adjust heading and flight speed for each waypoint.
- There is a camera section available for camera changes on each waypoint. Explanation of Camera Section can be read under Mission Settings above.

#### Visual Gimbal direction

<img src="../../../assets/plan/gimbal_direction.jpg" style="width: 300px;"/>

If you specify gimbal yaw changes on waypoints, both the plan and fly views will show you a visual representation of the gimbal direction.

#### Pattern tool

There is a new _Pattern tool_. The following patterns are supported:

- Fixed Wing Landing (new)
- Survey (with new features)

##### Fixed Wing Landing Pattern

![Fixed Wing Landing Pattern](file:///home/user/qgroundcontrol/docs/assets/plan/pattern/fixed_wing_landing_pattern.jpg)

This adds a landing pattern for fixed wings to your mission.
The first point of the pattern is the loiter point which commands to vehicle to loiter to a specific altitude.
Once that altitude is reached, the vehicle will begin the landing sequence and fly down to the specified landing spot.

Both the loiter and land points can be dragged to adjust.
Also all the various values associated with the pattern can be adjusted.

For more information see [Fixed Wing Landing Pattern](../plan_view/pattern_fixed_wing_landing.md).

##### Survey (new features)

- Images are not automatically taken in the turnaround zone outside of the polygonal survey area.
- There is a new _Hover and Capture_ option which can be used to capture the highest quality image at each image location. The vehicle will stop at each image location prior to taking the image such that the vehicle is stable while the image is taken.
- There is a new option to re-fly the survey grid at a 90 degree angle to the previous pass. This allows you to generate much denser coverage for the images.

![](file:///home/user/qgroundcontrol/docs/assets/plan/polygon_edit.jpg)

Manipulating the survey area polygon is now easier to use on tablets with touch screens:

- You can drag the entire polygon to a new location by dragging the center point handle.
- Each polygon vertex can be dragged to a new location.
- To remove a polygon vertex, simple click on the drag handle for it.
- Click on the **+** handles to add a new vertex between two existing vertices.

### Fly View

#### RTK GPS

RTK status is now shown in the toolbar.

#### Arm/Disarm

There is an armed/disarmed indicator in the toolbar. You can click it to arm/disarm your vehicle. If you click Disarm in the toolbar while your vehicle is flying you will provided the option to Emergency Stop your vehicle.

#### Guided Actions

- Takeoff
- Land
- RTL
- Pause
- Actions
  - Start Mission
  - Resume Mission
  - Change Altitude
  - Land Abort
- Direct interaction with map
  - Set Waypoint
  - Goto Location

##### Resume Mission

The Resume Mission guided action is used to resume a mission after performing an RTL from within the mission to perform a battery change.
After the vehicle lands from RTL and you have disconnected the battery **do not** disconnect QGC from the Vehicle.
Put in your new battery and QGC will detect the vehicle again and automatically restore the connection.
Once this happens you will be prompted with a Resume Mission confirmation slider.
If you want to resume the mission, confirm this and the mission will be rebuilt from your last waypoint traveled through.
Once the mission is rebuilt you will be presented with another Resume Mission slide which allows you to review the rebuilt mission before starting it again.
Confirm this Resume Mission slider to continue on with the mission.

####### How resume mission rebuilding works

In order to resume a mission you cannot simply continue it from the last mission item the vehicle ran.
The reason is is that may skip over important change speed commands or camera control commands which are prior to that item in the mission.
If you skipped over those the remainder of the mission will not run correctly.
In order to make resume mission work correctly QGC rebuilds the mission looking backwards from the last mission item flown and automatically appends relevant commands to the front of the mission.
By doing this the state of the mission prior to the resume point is restore.
The following mission commands are the ones scanned for:

- `MAV_CMD_DO_CONTROL_VIDEO`
- `MAV_CMD_DO_SET_ROI`
- `MAV_CMD_DO_DIGICAM_CONFIGURE`
- `MAV_CMD_DO_DIGICAM_CONTROL`
- `MAV_CMD_DO_MOUNT_CONFIGURE`
- `MAV_CMD_DO_MOUNT_CONTROL`
- `MAV_CMD_DO_SET_CAM_TRIGG_DIST`
- `MAV_CMD_DO_FENCE_ENABLE`
- `MAV_CMD_IMAGE_START_CAPTURE`
- `MAV_CMD_IMAGE_STOP_CAPTURE`
- `MAV_CMD_VIDEO_START_CAPTURE`
- `MAV_CMD_VIDEO_STOP_CAPTURE`
- `MAV_CMD_DO_CHANGE_SPEED`
- `MAV_CMD_NAV_TAKEOFF`

#### Remove mission after vehicle lands

You will be prompted to remove the mission from the vehicle after the mission completes and the vehicle lands and disarms.
This is meant to prevent issues where stale missions are unknowingly left on a vehicle cause unexpected behavior.

#### Instrument panel

##### Camera trigger

##### Flight Time

Flight time is now available for display in the instrument panel.
For new users, flight time will be shown by default.
For existing users who have already modified their instrument panel values you will have to add it yourself if you want to use it.

### [Analyze View](../analyze_view/index.md)

- [Log Download](../analyze_view/log_download.md) moved to _Analyze View_ from menu.
- New [GeoTag Images](../analyze_view/geotag_images.md) support for PX4 Pro firmware
- New [MAVLink Console](../analyze_view/mavlink_console.md) which provides access the the _nsh shell_ running on the vehicle.

### Multi-Vehicle View

There is a new view available when you have multiple vehicles connected to QGC. It will only show up when more than one vehicle is connected. When that happens you will see an additional set of radio button at the top right of the Plan view.

<img src="../../../assets/daily_build_changes/multi_vehicle_radios.jpg" style="width: 150px;"/>

Click the **Multi-Vehicle** radio button to replace the instrument panel with the multi-vehicle list:

<img src="../../../assets/daily_build_changes/multi_vehicle_list.jpg" style="width: 150px;"/>

The example above shows three vehicles. The numbers are the vehicle id. In the large font is the current flight mode. You can click the flight mode name to change to a different flight mode. To the right are small version of the instruments for each vehicle. You can command the vehicle to do the following actions from the control panel:

- Arm/Disarm
- Start/Stop a mission
- Return to Launch
- Take Control back of the vehicle by returning to manual control from a mission.

#### Multi-Vehicle Gotchas - Unique vehicle ids

Each vehicle connected to QGC must have a unique id. Otherwise QGC will think the vehicles are actually the same vehicle. The symptom of this is the Plan view jerking around as it tries to position itself to one vehicle and then the next. For PX4 Pro firmwares this is the `MAV_SYS_ID` parameter. For ArduPilot firmwares it is the `SYSID_THISMAV` parameter.

### Support for third-party customized QGroundControl

Standard QGC supports multiple firmware types and multiple vehicle types. There is now support in QGC which allows a third-party to create their own custom version of QGC which is targeted specifically to their custom vehicle. They can then release their own version of QGC with their vehicle.

## Stable Version 3.1

New Features

- [Survey](../plan_view/pattern_survey.md) mission support
- [GeoFence](../plan_view/plan_geofence.md) support in Plan View
- [Rally Point](../plan_view/plan_rally_points.md) support in Plan View (ArduPilot only)
- ArduPilot onboard compass calibration
- Parameter editor search will now search as you type for quicker access
- Parameter display now supports unit conversion
- GeoTag images from log files (PX4 only)
- System health in instrument panel
- MAVLink 2.0 support (no signing yet)

Major Bug Fixes

- Fixed crash after disconnect from Vehicle
- Fixed android crash when using SiK Radios
- Many multi-vehicle fixes
- Bluetooth fixes



<div style="page-break-after: always;"></div>

# Daily Builds

Daily Builds of _QGroundControl_ have the absolute latest set of [new features](../releases/daily_build_new_features.md).

::: warning
Daily Builds are less tested than stable builds.
Use at your own risk.
:::

These can be downloaded from the links below (install as described in [Download and Install](../getting_started/download_and_install.md)):

- Windows
	- [x86_64](https://d176tv9ibo4jno.cloudfront.net/builds/master/QGroundControl-installer-AMD64.exe)
	- [Arm_64](https://d176tv9ibo4jno.cloudfront.net/builds/master/QGroundControl-installer-ARM64.exe)
- [OS X](https://d176tv9ibo4jno.cloudfront.net/builds/master/QGroundControl.dmg)
- Linux - (See installation instructions below)
  - [Linux x86_64](https://d176tv9ibo4jno.cloudfront.net/builds/master/QGroundControl-x86_64.AppImage)
  - [Linux aarch64](https://d176tv9ibo4jno.cloudfront.net/builds/master/QGroundControl-aarch64.AppImage)
- [Android](https://d176tv9ibo4jno.cloudfront.net/builds/master/QGroundControl.apk)
- iOS is currently unavailable

## Linux Installation Instructions

1. Make the AppImage executable
```
chmod +x QGroundControl-<arch>.AppImage
```

2. Enable serial-port access
Add your user to the dialout group so you can talk to USB devices without root:

```
sudo usermod -aG dialout "$(id -un)"
```

::: info
At login, your shell takes a snapshot of your user and group memberships. Because you just changed groups, you need a fresh login shell to pick up “dialout” access. Logging out and back in reloads that snapshot, so you get the new permissions.
:::


3. (Optional) Disable ModemManager
On some Ubuntu-based systems, ModemManager can claim serial ports that QGC needs. If you don't use it elsewhere, mask or remove it.
```
# preferred: stop and mask the service
sudo systemctl mask --now ModemManager.service

# or, if you’d rather remove the package
sudo apt remove --purge modemmanager
```

4. Run QGroundControl
Either double-click the AppImage in your file manager or launch it from a terminal:

```
./QGroundControl-<arch>.AppImage
```



<div style="page-break-after: always;"></div>

# Daily Build Major Changes

This topic contains a high level and _non-exhaustive_ list of new features added to _QGroundControl_ since the last [stable release](../releases/release_notes.md).
These features are available in [daily builds](../releases/daily_builds.md).
There is also a [Change Log](https://github.com/mavlink/qgroundcontrol/blob/master/CHANGELOG.md) available for viewing.

* Fly View
  * Toolbar
    * Individual dropdowns can now be expanded
      * The expanded pages contain app/vehicle settings which are useful after initial vehicle configuration
      * Goal is not have to dive back into more complex Vehicle Configuration or Application Settings pages from flight to flight
    * Flight Modes: Configurable list allows you to remove unused flight modes
    * Battery: Dynamic bars with configurable thresholds (100%, Config 1, Config 2, Low, Critical)
  * Instrument Selection: Right-click on desktop or long‑press on mobile to switch between different instrument clusters
  * 3D View allows you to load an OSM file as the 3D map
  * Better support for Guided GoTo Location, Orbit, Fixed Wing Loiter
  * Multi-vehicle support
    * Configurable telemetry display
    * Better support for applying actions to all vehicles
* Plan View
  * Multiple fixed wing landing sequences can now be planned for landings at different locations
* Vehicle Configuration
  * Renamed from Vehicle Setup
  * Now should be mainly used for initial vehicle design/config, not changes flight to flight
* Application Settings
  * Application settings categories have been restructed/redesigned for easier access
  * Fly View
    * New/Updated MAVLink Actions support
    * Virtual Joystick support for left handed moded
  * Telemetry
    * Added support for MAVLink 2 signing
    * Configurable stream rate support for ArduPilot vehicles
* Overall
  * Focused UI updates for smaller touch screens
    * Used by integrated controllers such as a Herelink
    * New sliders controls for value entry
    * Better touch support for various controls
  * Many, many bugs fixed
* Developer changes
  * Build system fully converted to cmake
    * qmake no longer supported
  * Source updated to use Qt 6.10.1
  * GStreamer support updated to 1.22



<div style="page-break-after: always;"></div>

# Privacy Policy

Dronecode Project, Inc. built the QGroundControl (org.mavlink.qgroundcontrol) app as an Open Source app. This SERVICE is provided by Dronecode Project, Inc. at no cost and is intended for use as is.

This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.

If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.

The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at QGroundControl (org.mavlink.qgroundcontrol) unless otherwise defined in this Privacy Policy.

**Information Collection and Use**

For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to device data. The information that we request will be retained by us and used as described in this privacy policy.

_QGroundControl_ may require access to personal and/or sensitive user data. None of this data is used outside of _QGroundControl_.

The list below explains how some of the data is used:

- Camera sensor: This is used to overlay the video with flight telemetry data.
- Location: This is used for tracking the current user position on the map.

The app does use third-party services that may collect information used to identify you.

Link to the privacy policy of third-party service providers used by the app

*   [Google Play Services](https://www.google.com/policies/privacy/)

**Log Data**

We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.

**Cookies**

Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.

This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.

**Service Providers**

We may employ third-party companies and individuals due to the following reasons:

*   To facilitate our Service;
*   To provide the Service on our behalf;
*   To perform Service-related services; or
*   To assist us in analyzing how our Service is used.

We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.

**Security**

We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.

**Links to Other Sites**

This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.

**Children’s Privacy**

These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.

**Changes to This Privacy Policy**

We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.

This policy is effective as of 2024-03-12

**Contact Us**

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@dronecode.org.



<div style="page-break-after: always;"></div>

## Troubleshooting

Troubleshooting information is provided in two sections:

- [QGC Setup](../troubleshooting/qgc_setup.md) - Troubleshooting _QGroundControl_ installation and setup.
- [QGC Usage](../troubleshooting/qgc_usage.md) - Troubleshooting problems when **using** _QGroundControl_ to interact with a vehicle.

If your questions are still unresolved, please check the [Support](../support/support.md) page for more information on getting help.



<div style="page-break-after: always;"></div>

# Troubleshooting QGC Setup

This topic lists troubleshooting information related to _QGroundControl_ setup and installation on the host computer.

::: tip
Problems when **using** _QGroundControl_ to interact with a vehicle are covered in: [QGC Vehicle Interaction Problems](../troubleshooting/qgc_usage.md).
:::

## 64-bit Windows: Audio in Unexpected Language

On Windows 64-bit machines _QGroundControl_ may sometimes play audio/messages in a language that does not match the _Text-to-speech_ setting in **Control Panel > Speech** (e.g. audio spoken in German on an English machine).

This can occur because 64-bit Windows only displays 64-bit voices, while _QGroundControl_ is a 32-bit application (on Windows) and hence can only run 32-bit voices.

The solution is to set the desired _32-bit voice_ for your system:

1. Run the control panel application: **C:\Windows\SysWOW64\Speech\SpeechUX\sapi.cpl**.
2. Make your desired _Voice selection_ and then click **OK** at the bottom of the dialog.
   ![Windows 32-bit Text-To-Speech Control Panel](file:///home/user/qgroundcontrol/docs/assets/support/windows_text_to_speech.png)

::: info
Additional information about the Windows speech APIs can be found [here](https://www.webbie.org.uk/blog/microsoft-speech/).
:::

## Windows: UI Rendering/Video Driver Issues {#opengl_troubleshooting}

If you experience UI rendering issues or video driver crashes on Windows, this may be caused by "flaky" OpenGL drivers. _QGroundControl_ provides 3 shortcuts that you can use to start _QGroundControl_ in "safer" video modes (try these in order):

- **QGroundControl:** QGC uses OpenGL graphics drivers directly.
- **GPU Compatibility Mode:** QGC uses ANGLE drivers, which implement OpenGL on top of DirectX.
- **GPU Safe Mode:** QGC uses a software rasterizer for the UI (this is very slow).

## Windows: Doesn't connect to Vehicle over WiFi {#waiting_for_connection}

If _QGroundControl_ sits forever (for example, _Waiting For Vehicle Connection_) when trying to connect to the vehicle over Wifi, a possible cause is that IP traffic is being blocked by firewall software (e.g. Windows Defender, Norton, etc.).

![Waiting for connection](file:///home/user/qgroundcontrol/docs/assets/support/waiting_for_connection.jpg)

The solution is to allow the _QGroundControl_ app through the firewall.

::: info
It is possible to simply switch the network profile from Public to Private to allow connections, but this exposes your PC to the Network, so be careful
:::

If using _Windows Defender_:

- In the **Start** bar, enter/select: _Firewall & Network Protection_ (System Settings).
- Scroll to and select the option: _Allow an app through firewall_.
- Select _QGroundControl_ and change the _Access_ selector to **Allow**.

  ::: tip
  Programs are listed in alphabetical order by description (not filename).
  You'll find QGC under **O**: _Open source ground control app provided by QGroundControl dev team_
  :::

## Ubuntu: Video Streaming Fails (Missing Gstreamer) {#missing_gstreamer}

On Ubuntu you must install _Gstreamer_ components in order to see video streams.
If these are not installed _QGroundControl_ is unable to create the gstreamer nodes and fails with:

```sh
VideoReceiver::start() failed. Error with gst_element_factory_make(‘avdec_h264’)
```

The [download/install instructions for Ubuntu](../getting_started/download_and_install.md#ubuntu) include _GStreamer_ setup information.

## Ubuntu 18.04: Video Streaming Fails on Dual Video Adapter Systems {#dual_vga}

![Video on Ubuntu 18.04](file:///home/user/qgroundcontrol/docs/assets/support/troubleshooting_dual_vga_driver.jpg)

The version of GSteamer in Ubuntu 18.04 has a bug that prevents video displaying when using a VA API based decoder (i.e. vaapih264dec etc.) on systems that have both Intel and NVidia video display adapters.

::: info
More generally, while the problem is known to occur on Ubuntu 18.04 with Intel and NVidia VGAs, it might occur on any linux system and other types of (dual) VGAs.
:::

The easiest way to get _QGroundControl_ to work in this case is to start it using the following command line:

```
LIBVA_DRIVER_NAME=fakedriver ./QGroundControl)  will this make the
```

Other alternatives are to disable one of the VGAs, uninstall VA API components, or upgrade to GStreamer 1.16 (there is no easy way to do this on Ubuntu 18.04 - please contribute a recipe if you find one!)



<div style="page-break-after: always;"></div>

# Troubleshooting QGC Usage

This section covers a number of common problems related to **using** _QGroundControl_ to interact with a vehicle:

- [Connection problems](../troubleshooting/vehicle_connection.md)
- [Parameter Download failures](../troubleshooting/parameter_download.md)
- [Plan Upload/Download failures](../troubleshooting/plan_upload_download.md)
- [Resume Mission failures](../troubleshooting/resume_mission.md)

::: tip
Problems with **installing/running** _QGroundControl_ on the host computer are covered in [Troubleshooting QGC Setup](../troubleshooting/qgc_setup.md).
:::



<div style="page-break-after: always;"></div>

# Vehicle Connection Problems

## Vehicle does not show up in UI

QGC will automatically connect to a vehicle as soon as a communication link is created (using USB, or WiFi, etc.)
If you establish that link and you don't see your vehicle show up in the QGC UI you can use [console logging](../settings_view/console_logging.md) to help debug the problem.

Use the following steps to debug the issue:

- Start with the hardware vehicle link not connected.
  Don't plug in the USB connection and/or establish the WiFi link in your OS for example.
- Turn on `LinkManagerLog` [console logging](../settings_view/console_logging.md) in QGC.
  This will log output about the link which QGC sees and connects to.
- Establish the hardware vehicle communication link.
- The console log output should display something like this:

  ```
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:563 - "Waiting for bootloader to finish "/dev/cu.usbmodem01""
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:563 - "Waiting for bootloader to finish "/dev/cu.usbmodem01""
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:563 - "Waiting for bootloader to finish "/dev/cu.usbmodem01""
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:563 - "Waiting for bootloader to finish "/dev/cu.usbmodem01""
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:572 - "Waiting for next autoconnect pass "/dev/cu.usbmodem4201""
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:613 - "New auto-connect port added:  "ArduPilot ChibiOS on cu.usbmodem4201 (AutoConnect)" "/dev/cu.usbmodem4201""
  ```

- The first few lines indicate QGC has established a hardware link and finally the auto-connect.

If you don't see any of this then QGC is not recognizing the hardware link.
To see if your hardware is being recognized at the OS level do this:

- Start with the hardware vehicle link not connected.
  Don't plug in the USB connection and/or establish the WiFi link in your OS for example.
- Turn on `LinkManagerVerboseLog` [console logging](../settings_view/console_logging.md) in QGC.
  This will log output for all serial hardware connections that QGC recognizes.
- You will see continuous output of the serial ports on your device.
- Plug in your USB comm device.
- You should see a new device show in in the console output. Example:
  ```
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:520 - "-----------------------------------------------------"
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:521 - "portName:           "cu.usbmodem4201""
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:522 - "systemLocation:     "/dev/cu.usbmodem4201""
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:523 - "description:        "Pixhawk1""
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:524 - "manufacturer:       "ArduPilot""
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:525 - "serialNumber:       "1B0034000847323433353231""
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:526 - "vendorIdentifier:   1155"
  [D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:527 - "productIdentifier:  22336"
  ```
- After that it should continue to log a connection to that device as shown in the first example.

If you don't see a new serial port should up in the console output when you plug it in then something is likely wrong with your hardware at the OS level.

## Error: Vehicle is not responding

This indicates that although QGC was able to connect to the hardware link to your vehicle there is no telemetry going back and forth on the link.
This can unfortunately indicate a number of problems:

- Hardware communication setup problems
- Firmware problems

Lastly it can happen if QGC attempts to automatically connect to a device which is connected to your computer which isn't a vehicle.
You can identify this case using the steps above and noting the device information which QGC is attempting to connect to.
In order to make auto-connect work the filter it uses on devices it attempts to auto-connect to is somewhat broad and can be incorrect.
If you find this happening you will need to turn off auto-connect from General Settings and create a manual connection to the comm link for your vehicle.
You can also remove the device causing the problem from your computer but that may not always be possible.



<div style="page-break-after: always;"></div>

# Parameter Download failures

The majority of parameter download failures are caused by a communication link which is noisy and has a high loss rate.
Although the parameter protocol has retry logic for such a case it will eventually give up.
At which point you will get an error stating that QGC was unable to retrieve the full set or parameters.

Although you can still fly the vehicle in this state it is not recommended.
Also the vehicle setup pages will not be available.

You can see the loss rate for your link from the [Settings View > MAVLink](../settings_view/mavlink.md) page.
Even a loss rate in the high single digits can lead to intermittent failures of the plan protocols.
Higher loss rates could leads to 100% failure.

There is also the more remote possibility of either firmware or QGC bugs.
To see the details of the back and forth message traffic of the protocol you can turn on [Console Logging](../settings_view/console_logging.md) for the Parameter Protocol.



<div style="page-break-after: always;"></div>

# Mission Upload/Download failures

Although the protocol for uploading and download Plans (Mission, GeoFence, Rally Points) to a vehicle includes retry logic it can still fail over a communication link which is running at a high loss rate.

For more information see: [Plan View > Mission (Plan) Upload/Download Failures](../plan_view/plan_view.md#plan_transfer_fail)



<div style="page-break-after: always;"></div>

# Resume Mission Failures

The process of resuming a mission after a battery swap is a fairly complex process within QGC.

The two main areas that are most problematic are:

- The _Resume Mission_ dialog doesn't display when it should and you are just left with a Start Mission slider.
- The new mission generated from _Resume Mission_ is not quite correct with respect to recreation of waypoints and/or camera commands.

::: warning
In order for the _QGroundControl_ development team to debug these issues the following information **must be supplied** in any github issue entered against _Resume Mission_.
:::

## Common Steps for Resume Mission Dialog/Generation {#common_steps}

The following steps are required for debugging both types of problems:

1. Restart QGC
1. Turn on [console logging](../settings_view/console_logging.md) with the log option: `GuidedActionsControllerLog`.
1. Enable [telemetry logging](../settings_view/general.md#miscellaneous) (**Settings > General**).
1. Start the mission.
1. Fly till you need a battery swap.

   ::: tip
   Alternatively you can attempt to reproduce the problem by manually RTL from the middle of the middle of the mission (though this may not always reproduce the problem).
   :::

1. Once the vehicle lands and disarms you should get the _Resume Mission_ dialog.

   ::: info
   If not there is a possible bug in QGC.
   :::

### Resume Mission Dialog Problems

For _Resume Mission Dialog_ problems follow the [common steps above](#common_steps), and then:

7. Save the _Console Log_ to a file.
1. Place the _Console Log_, _Telemetry Log_ and _Plan File_ someplace which you can link to in the issue.
1. Create the issue with details and links to all three files.

## Resume Mission Generation Problems

For _Resume Mission Generation_ problems follow the [common steps above](#common_steps), and then:

7. Click **Resume Mission**.
1. The new mission should be generated.
1. Go to [Plan View](../plan_view/plan_view.md).
1. Select **Download** from the _File/Sync_ menu.
1. Save the _Modified Plan_ to a file.
1. Save the _Console Log_ to a file.
1. Place the _Console Log_, _Telemetry Log_, _Original Plan_ file and _Modified Plan_ file someplace which you can link to in the issue.
1. Create the issue with details and links to all four files.

