import { createSlice} from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        deleteContact: (state, {payload}) => {
            return state.filter(el => el.id !== payload)
        },
        addContact: (state, { payload }) => {
            state.push(payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const reducerContacts = contactsSlice.reducer;