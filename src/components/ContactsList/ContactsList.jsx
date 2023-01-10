import css from './ContactsList.module.css';

import { useSelector } from 'react-redux';

import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ul className={css.contacts}>
      {contacts.map(
        ({ id, name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) && (
            <ContactListItem key={id} id={id} name={name} number={number} />
          )
      )}
    </ul>
  );
};
