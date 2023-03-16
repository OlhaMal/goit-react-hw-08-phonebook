// import css from './AppBars.module.css';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Typography, AppBar, Toolbar, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AppBars = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" sx={{maxWidth: '1200px', margin: '0 auto', backgroundColor: '#8e989f'}}>
      <Toolbar disableGutters>
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <NavLink to="/">
            <Typography
              variant="h6"
              noWrap
              component="h6"
              sx={{
                ml: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textTransform: 'uppercase',

              }}
            >
              Phonebook
            </Typography>
          </NavLink>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </Toolbar>
    </AppBar>
  );
};
