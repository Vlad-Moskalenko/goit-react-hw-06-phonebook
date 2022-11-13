import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = e => {
    dispatch(deleteContact(e.target.closest('li').id));
  };

  return (
    <li id={name}>
      {name}: {number}
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};
