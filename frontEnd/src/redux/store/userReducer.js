import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
  },
});

export const { setFirstName } = userSlice.actions;
export default userSlice.reducer;
