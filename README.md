# Online-Appointment-Scheduler

## Objective
This project is an online appointment scheduler that allows users to manage appointments dynamically and asynchronously. It includes functions to add new appointments, display upcoming appointments, and send reminders before the appointment time.

## Features
- **Add Appointment**: Adds a new appointment to the scheduler, ensuring valid `appointmentTime` and non-empty `clientName`.
- **Upcoming Appointments**: Displays appointments scheduled for the next hour using `Date` and `Math` objects.
- **Send Reminder**: Sends a reminder message before the scheduled appointment time using `setTimeout()`.
- **Modular Design**: All functions are exported in a module and imported into a separate script for testing.

## Technologies Used
- JavaScript (ES6 features)
- Node.js (for running the script, optional)

## Functions
1. **Add Appointment**
   - Adds a new appointment to the list.
   - Validates that `appointmentTime` is a `Date` object and `clientName` is non-empty.

2. **Upcoming Appointments**
   - Displays all appointments scheduled for the next hour.

3. **Send Reminder**
   - Sends a reminder message at the scheduled appointment time using `setTimeout()`.
