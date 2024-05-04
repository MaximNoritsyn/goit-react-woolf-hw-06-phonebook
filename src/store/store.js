import { configureStore } from "@reduxjs/toolkit";

import { reducerContacts } from "./contacts/slice";
import { filtersReducer } from "./filter/slice";

export const store = configureStore({
  reducer: {
    contacts: reducerContacts,
    filters: filtersReducer,
  },
});