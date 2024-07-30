import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectStatusFilter = state => state.filter.filterValue;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectStatusFilter],
    (contacts, filter) => {
        if (!filter) {
            
            return contacts;
          }
          const lowerCaseFilter = filter.toLowerCase();
          return contacts.filter(contact =>
            contact.name.toLowerCase().includes(lowerCaseFilter)
          );
    // return contacts.filter(
    //   contact =>
    //     contact.name.toLowerCase().includes(filter.toLowerCase()) ||
    //     contact.phone.includes(filter)
    // );
  }
);
