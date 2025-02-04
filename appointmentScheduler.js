export const appointments = [];

export function addAppointment(clientName, appointmentTime, serviceType) {
    if (!clientName || !(appointmentTime instanceof Date)) {
        console.error('Invalid appointment data');
        return;
    }
    appointments.push({ clientName, appointmentTime, serviceType });
}

export function upcomingAppointments() {
    const now = new Date();
    return appointments.filter(({ appointmentTime }) => 
        appointmentTime > now && appointmentTime <= new Date(now.getTime() + 60 * 60 * 1000)
    );
}

export function sendReminder() {
    appointments.forEach(({ clientName, appointmentTime, serviceType }) => {
        const timeUntilAppointment = appointmentTime - Date.now();
        if (timeUntilAppointment > 0) {
            setTimeout(() => {
                console.log(`Reminder: Your appointment for ${serviceType} with ${clientName} is scheduled at ${appointmentTime}`);
            }, timeUntilAppointment);
        }
    });
}