import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input id='name' type='text' onChange={({target}) => setName(target.value)} value={name}/>
      <label htmlFor='phone'>Phone</label>
      <input id='phone' type='number' minLength='10' onChange={({target}) => setPhone(target.value)} value={phone}/>
      <label htmlFor='email'>Email</label>
      <input id='email' type='text' onChange={({target}) => setEmail(target.value)} value={email}/>
      <button type="submit">Submit</button>
    </form>
  );
};

