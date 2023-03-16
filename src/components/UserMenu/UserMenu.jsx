// import css from './UserMenu.module.css';
import avatar from '../../images/avatar.png';
import { useDispatch} from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import {Stack, Avatar, Typography, Button} from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const {user} = useAuth()

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar alt="Remy Sharp" src={avatar} />
      <Typography>Hello, {user.name}</Typography>
      <Button variant='outlined' color='secondary' size="medium" type="button" onClick={() => dispatch(logOut())}>
        Sign out
      </Button>
    </Stack>
  );
};
