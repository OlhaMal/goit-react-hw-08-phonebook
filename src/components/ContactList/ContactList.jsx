import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { nanoid } from 'nanoid';
// import css from './ContactList.module.css';
import { Typography, Button } from '@mui/material';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
    <ul>
      {filterContacts.map(contact => {
        return (
          <li
            key={nanoid()}
            style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px'}}
          >
            <Typography variant="h6" component="p">
              {contact.name}: {contact.number}
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="medium"
              sx={{ border: '1px solid #8e989f'}}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
