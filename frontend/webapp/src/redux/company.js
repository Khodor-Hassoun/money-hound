import { createSlice } from "@reduxjs/toolkit";
export const companySlice = createSlice({
  name: "company",
  initialState: {
    id: null,
    name: "",
    email: "",
    phone: "",
    capital: "",
    address: "",
    logo: "",
  },
  reducers: {
    setCompany: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.id = parseInt(action.payload.id);
      state.phone = parseInt(action.payload.phone);
      state.capital = parseInt(action.payload.capital);
      state.address = action.payload.address;
      state.logo = action.payload.logo;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCompany } = companySlice.actions;

export default companySlice.reducer;
