import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstname: "",
    lastname: "",
    email: "",
    user_type: "",
  },
  reducers: {
    getFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    getlastname: (state, action) => {
      state.lastname = action.payload;
    },
    getemail: (state, action) => {
      state.email = action.payload;
    },
    getpassword: (state, action) => {
      state.passwordirstname = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getFirstname, getlastname, getemail, getpassword } =
  userSlice.actions;

export default userSlice.reducer;
