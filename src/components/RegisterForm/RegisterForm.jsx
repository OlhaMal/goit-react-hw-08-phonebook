import css from './RegisterForm.module.css'
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div style={{maxWidth: '400px', margin: '0 auto'}}>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField
          id="filled-hidden-label-normal"
          color="secondary"
          variant="filled"
          label="Name"
          type="name"
          name="name"
          required
          autoComplete="off"
          sx={{
            backgroundColor: '#eceeef',
            border: '1px solid #8e989f',
            borderRadius: '10px',
            overflow: 'hidden',
            mt: 6,
          }}
        />
        <TextField
          id="filled-hidden-label-normal"
          color="secondary"
          variant="filled"
          label="Email"
          type="email"
          name="email"
          required
          autoComplete="off"
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
          label="Password"
          type="password"
          name="password"
          required
          autoComplete="off"
          sx={{
            backgroundColor: '#eceeef',
            border: '1px solid #8e989f',
            borderRadius: '10px',
            overflow: 'hidden',
            mt: 2,
          }}
        />
        <Typography
          variant="p"
          component="p"
          sx={{ mt: 2, textAlign: 'center' }}
        >
          Already have an account? <Link to="/login" className={css.link}>Sign In</Link>
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          size="medium"
          sx={{ border: '1px solid #8e989f', mt: 2 }}
          type="submit"
        >Sign Up</Button>
      </form>
    </div>
  );
};
