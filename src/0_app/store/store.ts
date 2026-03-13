import {configureStore} from "@reduxjs/toolkit";
import {characterApi} from "@entities/character/model/character-api.ts";
import {setupListeners} from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        [characterApi.reducerPath]: characterApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(characterApi.middleware),

})

setupListeners(store.dispatch)