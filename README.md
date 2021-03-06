# Work Day Scheduler

## Your Task
Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The starter code uses the Moment.js (Links to an external site.) library to work with date and time, but feel free to use a different JavaScript solution to handle this functionality since Moment.js is considered a "legacy" project. Learn more about some alternative solutions in the Moment.js project status page. (Links to an external site.)

Before you start, clone the starter code (Links to an external site.).

## User Story
```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
![Screen Capture of Working "Work Day Scheduler"](assets/images/workDaySchedulerCapture.PNG)
Deployed @ https://cboensch6505.github.io/workDayScheduler/

*** NOTE ***
Screen Capture was taken after 5PM so all of the time blocks are "grey" because they are in the past.

Upon opening the planner the current day is displayed. Below there are time blocks for the standard 9-5 job schedule. The blocks are then color-coded according to the current time by past, present, and future. Upon clicking on a time block you can enter a text event and save it to local storage via the save button on the right of the block. upon refreshing the page the saved event will still be there. I want to go a little futher than what was requested and write a function when after a specified time a clear local storage would run and set up the claendar for the next day withoput having to manually re-write the events according to the new schedule. I also went through the provided CSS code and changed it as it did not accuratly reflect the mock-up.

### Challenge 5 - Work Day Scheduler
Completed By: Corey Boensch
 
