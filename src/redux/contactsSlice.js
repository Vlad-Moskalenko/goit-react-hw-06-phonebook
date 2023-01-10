import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: []
  },
  reducers: {
    addContact: {
      reducer({contacts}, { payload }){
        const isUniqueContact = contacts.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())
        if(isUniqueContact) {
          return alert(`${payload.name} is already exist`);
        }
        contacts.push(payload);
    },
      prepare({name, number}){
        return {
          payload: {
            id: nanoid(),
            name,
            number
          }
        }
      }
    },

    deleteContact({contacts}, { payload }){
      const index = contacts.findIndex(contact => contact.id === payload)
      contacts.splice(index, 1)
    }
}
})

const persistConfig = {
  key: 'contacts',
  storage,
}

export const {addContact, deleteContact} = contactsSlice.actions
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)
export const getContacts = state => state.contacts.contacts;
