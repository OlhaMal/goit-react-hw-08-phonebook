import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsOperations';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const contactList = visibleContacts.map(({ id, name, phone }) => (
    <li key={id} className={css.listItem}>
      {name}: {phone}
      <button
        type="button"
        className={css.listBtn}
        id={id}
        onClick={() => dispatch(removeContact(id))}
      >
        Delete
      </button>
    </li>
  ));

  return <ul className={css.contactList}>{contactList}</ul>;
};
