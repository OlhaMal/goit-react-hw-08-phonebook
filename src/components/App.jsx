import { ToastContainer } from 'react-toastify';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
// import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'pages/Layout';
import { HomePage } from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
                <PublicRoute component={Register} redirectTo="/contacts" />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};
