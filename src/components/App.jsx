import PropTypes from 'prop-types';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
// import { useEffect } from 'react';

export function App() {
  // useEffect(() => {
  //   const contactsList = localStorage.getItem('contactsList');
  //   if (contactsList) setContacts(JSON.parse(contactsList));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contactsList', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="app-wrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};
