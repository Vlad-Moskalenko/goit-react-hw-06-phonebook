import { ContactListItem } from './ContactsListItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ol className="contacts-list">
      {contacts.length > 0 &&
        contacts.map(
          ({ name, number }) =>
            name.toLowerCase().includes(filter.status.toLowerCase()) && (
              <ContactListItem key={nanoid()} name={name} number={number} />
            )
        )}
    </ol>
  );
};
