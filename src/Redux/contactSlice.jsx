import { getInitialContacts } from './constants';

export const contactReducer = (state = getInitialContacts(), action) => {
  switch (action.type) {
    case 'contacts/addContact':
      console.log(state);
      return [...state, action.payload];

    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};

export const addContact = contact => {
  return {
    type: 'contacts/addContact',
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};
