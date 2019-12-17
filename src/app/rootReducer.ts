import { combineReducers } from "@reduxjs/toolkit";
import companiesReducer from "../features/companies/companiesSlice";

const rootReducer = combineReducers({ companies: companiesReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
