import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <div>
      <h1
        style={{
          fontSize: 'xx-large',
          textAlign: 'center',
          marginTop: '30px',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          textAlign: 'center',
          fontSize: 'x-large',
          marginTop: '5px',
        }}
      >
        Contacts
      </h2>
      <Filter />

      {isLoading ? (
        <b
          style={{ textAlign: 'center', display: 'block', fontSize: 'x-large' }}
        >
          Loading...
        </b>
      ) : (
        <ContactList />
      )}
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
    </div>
  );
};
