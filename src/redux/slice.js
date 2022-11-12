import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const isUniqueContact = state.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase())
        if(isUniqueContact) {
          return alert(`${action.payload.name} is already exist`);
        }
        state.push(action.payload)
    },
    prepare(obj) {
      return {
        payload: {
          ...obj,
        }
      }
    },
  },
    deleteContact(state, action) {
      return state.filter(({ name }) => name !== action.payload)
    }
  }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


