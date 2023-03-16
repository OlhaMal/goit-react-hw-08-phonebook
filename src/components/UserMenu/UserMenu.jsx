import css from './UserMenu.module.css';
import avatar from '../../images/avatar.png';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import { Stack, Avatar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="p" component="p"><NavLink to="/contacts" className={css.link}>Contacts</NavLink></Typography>
      <Avatar alt="Remy Sharp" src={avatar} />
      <Typography>Hello, {user.name}</Typography>
      <Button
        variant="outlined"
        color="secondary"
        size="medium"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Sign out
      </Button>
    </Stack>
  );
};
