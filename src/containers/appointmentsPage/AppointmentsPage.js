import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [appointmentInfo, setAppointmentInfo] = useState('');
  const [contact, setContact] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      title,
      details: {
        appointmentInfo,
        date,
        contact
      }
    };
    addAppointment(newAppointment);
    setAppointmentInfo('');
    setDate('');
    setTitle('');
    setContact('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleSubmit={handleSubmit} contacts={contacts} title={title} contact={contact} date={date} appointmentInfo={appointmentInfo} setContact={setContact} setTitle={setTitle} setDate={setDate} setAppointmentInfo={setAppointmentInfo}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointments}/>
      </section>
    </div>
  );
};