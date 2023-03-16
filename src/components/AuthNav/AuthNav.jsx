import { Stack, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';



const getClassName = ({ isActive }) => {
  const clasName = isActive ? `${css.link} ${css.active}` : css.link;
  return clasName;
};

export const AuthNav = () => {
  return (
    <Stack direction="row"
    justifyContent="flex-end"
  alignItems="center"
    spacing={3}>
      <Button variant='outlined' color='secondary' size="medium" sx={{border: '1px solid #8e989f'}}> <NavLink to="/login" className={getClassName}>
        Sign in
      </NavLink></Button>
      <Button variant='outlined' color='secondary' size="medium" sx={{border: '1px solid #8e989f'}}>
      <NavLink to="/register" className={getClassName}>
        Sign up
      </NavLink>
      </Button>
    </Stack>
  );
};
