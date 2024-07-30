// import React, { Component } from 'react';
import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'features/operations';
import { selectError, selectIsLoading } from 'features/selectors';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
      </HelmetProvider>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchFilter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}
