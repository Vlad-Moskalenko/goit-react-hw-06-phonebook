import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      {name}: {number}
      <button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </button>
    </li>
  );
};
