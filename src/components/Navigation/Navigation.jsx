import React from 'react';
import { NavLink } from 'react-router-dom';
// import css from './Navigation.module.css';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  <nav>
    {isLoggedIn && (
      <NavLink to="/contacts">
        Contacts
      </NavLink>
    )}
  </nav>
};
