import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const contactsSlise = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        filter: '',
    },
    reducers: {
        addContact(state, action) {
            console.log(state)
            console.log(action)

            state.contacts.push({
                id: nanoid(),
                name: action.payload.name,
                number: action.payload.number,
            })
        },
        removeContact(state, action) { 
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
        },
        filterContact(state, action) {
            console.log(action)
            state.filter = action.payload
        }
    }
})


const persistConfig = {
    key: "phonebook",
    storage,
    blacklist: "filter",
}

export const persistPhonebookReducer = persistReducer(persistConfig, contactsSlise.reducer )


export const { addContact, removeContact, filterContact } = contactsSlise.actions


