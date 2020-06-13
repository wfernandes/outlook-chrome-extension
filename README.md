# Outlook Chrome Extension

A chrome extension plugin that does some specific actions for the outlook web
client.


## Current functionality

### Open Calendar Sidebar
It opens the calendar sidebar in `https://outlook.office.com/mail/*`.
![outlook calendar sidebar](./docs/images/calendar-sidebar.png)

### Toggle Request Response in Calendar

*NOTE* This feature only works when creating a calendar in an external chrome
window.

Currently there is no way in the outlook settings to turn off `Request
response`.

In order to NOT force meeting attendees to turn off `Email
Organizier` when responding to a calendar invite, this feature allows the
creator of the calendar invite to automatically turn that setting off.
![outlook calendar request
response](./docs/images/calendar-request-response.png)
