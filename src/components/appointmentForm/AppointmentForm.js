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
  setDate,
  appointmentInfo,
  setAppointmentInfo,
  handleSubmit
}) => {

  const handleChange = ({target}) => {
    setContact(target.value)
    console.log(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Title">Title:</label>
      <input type="text" id='Title' value={title} onChange={({target}) => setTitle(target.value)} required/>
      <labe htmlFor='date'>Date:</labe>
      <input type='date' id='date' value={date} onChange={({target}) => setDate(target.value)} min={getTodayString()} required/>
      <label htmlFor="appointmentInfo">Appointment info:</label>
      <input type="text" id="appointmentInfo" value={appointmentInfo} onChange={({target}) => setAppointmentInfo(target.value)}/>
      <ContactPicker contacts={contacts} value={contact} handleChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
};
