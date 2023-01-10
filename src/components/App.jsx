import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <main className="app-wrapper">
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <p>There are no contacts yet...</p>
        )}
      </Section>
    </main>
  );
};
