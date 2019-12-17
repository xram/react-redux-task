import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanyData, getCompaniesData } from "../../api/companies";
import { AppThunk } from "../../app/store";

interface CompaniesState {
  error: null | string;
  isLoading: boolean;
  items: CompanyData[];
}

const initialState: CompaniesState = {
  error: null,
  isLoading: false,
  items: []
};

const companies = createSlice({
  initialState,
  name: "companies",
  reducers: {
    getCompaniesFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
      state.items = [];
    },
    getCompaniesRequest(state) {
      state.error = null;
      state.isLoading = true;
      state.items = [];
    },
    getCompaniesSuccess(state, action: PayloadAction<CompanyData[]>) {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    }
  }
});

export const {
  getCompaniesFailure,
  getCompaniesRequest,
  getCompaniesSuccess
} = companies.actions;

export default companies.reducer;

export const fetchCompanies = (): AppThunk => {
  return async dispatch => {
    try {
      dispatch(getCompaniesRequest());

      const companiesData = await getCompaniesData();

      dispatch(getCompaniesSuccess(companiesData));
    } catch (error) {
      dispatch(getCompaniesFailure(error.toString()));
    }
  };
};
