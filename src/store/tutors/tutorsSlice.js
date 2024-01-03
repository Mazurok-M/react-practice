import { createSlice } from '@reduxjs/toolkit';
import { addTutorOperation, fetchAllTutors } from './tutorsOperation';

const initialState = {
  items: [],
};

const tutorsSlice = createSlice({
  name: 'tutors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTutors.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addTutorOperation.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      });
  },
});

export const tutorsReduser = tutorsSlice.reducer;

export const allTutors = (state) => state.tutors.items;
