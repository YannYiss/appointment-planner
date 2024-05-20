import React from "react";

export const ContactPicker = ({contacts, value, handleChange}) => {
  return (
    <div>
      <label htmlFor="contact">Contact:</label>
      <select id='contact' name='contact' onChange={handleChange} value={value} required>
        <option value={''} key={'default'}>
          No contact Selected
        </option>
        {contacts.map((contact) => {
          return (
            <option value={contact.title} key={contact.title}>{contact.title}</option> 
          );
        })}
      </select>
    </div>
  );
};
