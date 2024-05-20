import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [appointmentInfo, setAppointmentInfo] = useState('');
  const [contact, setContact] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      title,
      details: {
        appointmentInfo,
        contact: `with ${contact}`,
        date,
        time
      }
    };
    addAppointment(newAppointment);
    setAppointmentInfo('');
    setDate('');
    setTitle('');
    setContact('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleSubmit={handleSubmit} contacts={contacts} title={title} contact={contact} date={date} appointmentInfo={appointmentInfo} time={time} setContact={setContact} setTitle={setTitle} setDate={setDate} setAppointmentInfo={setAppointmentInfo} setTime={setTime}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointments}/>
      </section>
    </div>
  );
};