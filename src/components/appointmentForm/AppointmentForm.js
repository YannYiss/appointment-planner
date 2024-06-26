import React from "react";
import {ContactPicker} from '../../components/contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  time,
  setDate,
  appointmentInfo,
  setAppointmentInfo,
  setTime,
  handleSubmit
}) => {

  const handleChange = ({target}) => {
    setContact(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id='title' value={title} onChange={({target}) => setTitle(target.value)} placeholder="Appointment Title" name='title' required/>
      <ContactPicker contacts={contacts} value={contact} handleChange={handleChange}/>
      <label htmlFor='date'>Date:</label>
      <input type='date' name='date' id='date' value={date} onChange={({target}) => setDate(target.value)} min={getTodayString()} required/>
      <label htmlFor="time">Time of appointment:</label>
      <input type='time' name='time' id='time' value={time} onChange={({target}) => setTime(target.value)} required/>
      <label htmlFor="appointmentInfo">Appointment info:</label>
      <input type="text" placeholder='Type any detail on your appointment' name='appointmentInfo' id="appointmentInfo" value={appointmentInfo} onChange={({target}) => setAppointmentInfo(target.value)}/>
      <input type="submit" value='Add appointment'/>
    </form>
  );
};
