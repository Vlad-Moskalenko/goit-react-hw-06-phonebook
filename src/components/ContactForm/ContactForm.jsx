import css from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { addContact } from 'redux/contactsSlice';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const onChangeInput = ({ target: { name, value } }) => {
    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const reset = () => {
    setContact(INITIAL_STATE);
  };

  const onSubmitForm = e => {
    e.preventDefault();

    dispatch(addContact(contact));

    reset();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label className={css.inputWrapper}>
        Name
        <input
          onChange={onChangeInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={contact.name}
          required
        />
      </label>
      <label className={css.inputWrapper}>
        Number
        <input
          onChange={onChangeInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={contact.number}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
