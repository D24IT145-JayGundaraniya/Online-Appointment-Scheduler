import { appointments, addAppointment, upcomingAppointments, sendReminder } from './appointmentScheduler.js';

addAppointment('Smit Patel', new Date(Date.now() + 3 * 60 * 1000), 'Consultation'); // 30 minutes from now
addAppointment('Jay Patel', new Date(Date.now() + 9 * 60 * 1000), 'Follow-up');   // 90 minutes from now

console.log('Upcoming Appointments:', upcomingAppointments());

sendReminder();
