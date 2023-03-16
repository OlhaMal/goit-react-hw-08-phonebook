import { useState } from 'react';
import css from './ContactForm.module.css';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { Stack, Typography, TextField, Box, Button } from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return toast.warn(`${name} is already in contacts.`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Stack>
      <Typography
        variant="h4"
        mt={7.5}
        component="h2"
        sx={{ textAlign: 'center' }}
      >
        Add Contact
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Box sx={{ width: '250px' }}>
          <TextField
            id="filled-hidden-label-normal"
            color="secondary"
            variant="filled"
            label="Name"
            type="text"
            name="name"
            required
            placeholder="Rosie Simpson"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="off"
            fullWidth
            size="small"
            sx={{
              backgroundColor: '#eceeef',
              border: '1px solid #8e989f',
              borderRadius: '10px',
              overflow: 'hidden',
              mt: 2,
            }}
          />
          <TextField
          id="filled-hidden-label-normal"
          color="secondary"
          variant="filled"
          label="Number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="888-888-888"
          autoComplete='off'
          fullWidth
          size="small"
          sx={{
            backgroundColor: '#eceeef',
            border: '1px solid #8e989f',
            borderRadius: '10px',
            overflow: 'hidden',
            mt: 2,
          }}
        />
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          size="medium"
          sx={{ border: '1px solid #8e989f', mt: 2 }}
          type="submit"
        >
          Add contact
        </Button>
      </form>
    </Stack>
  );
};
