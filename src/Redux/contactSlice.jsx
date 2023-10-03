import { createSlice } from '@reduxjs/toolkit';

import { getInitialContacts } from './constants';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: getInitialContacts(),
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
