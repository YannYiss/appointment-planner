import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === '' || phone === '' || email === '') {
      return alert('Plase complete all the form fields')
    }
    const newContact = {
      title: name,
      details: {
        phone,
        email
      }
    };
    if(contacts.some(contact => contact.title == newContact.title)) {
      return alert('Cotnact already exist')
    }
    addContact(newContact);
    setName('');
    setPhone('');
    setEmail('');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {contacts.length > 0 ? 
        <TileList array={contacts} />
        : <p>Add a new contact</p>}
      </section>
    </div>
  );
};
