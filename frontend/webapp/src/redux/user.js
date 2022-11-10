import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

export const userSlice = createSlice({
  name: "user",
  initialState: {
    // firstname: "",
    // lastname: "",
    // email: "",
    // user_type: "",
    // password: "",
    // id: null,
    // token: null,
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
      state.password = action.payload;
    },
    gettoken: (state, action) => {
      state.token = action.payload.token;
    },
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.password = action.payload.password;
      state.id = action.payload.id;
      state.user_type = action.payload.user_type;
      state.token = action.payload.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getFirstname,
  getlastname,
  getemail,
  getpassword,
  setUser,
  gettoken,
} = userSlice.actions;

export default userSlice.reducer;
