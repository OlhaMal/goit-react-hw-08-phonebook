import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Stack, Typography } from '@mui/material';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-around"
      sx={{ maxWidth: '1200px', margin: '0 auto' }}
    >
      <ContactForm />
      <div style={{minWidth: '400px'}}>
        <Typography
          variant="h5"
          mt={4}
          component="h2"
          sx={{ textAlign: 'center' }}
        >
          Contacts
        </Typography>
        <Filter />
        <ContactList />
      </div>
    </Stack>
  );
};
