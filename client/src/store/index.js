import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import mastersSlice from "./mastersSlice";
import servicesSlice from "./servicesSlice";

const store = configureStore({
    reducer: {
        admin: adminSlice,
        masters: mastersSlice,
        services: servicesSlice
    }
})

export default store;
