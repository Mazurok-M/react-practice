import { createSlice } from '@reduxjs/toolkit';
import {
  addDepartamentOperation,
  deleteDepartamentOperation,
  editDepartamentOperation,
  fetchAllDepartaments,
} from './departamentsOperation';

const initialState = {
  items: [],
  togleModal: false,
};

const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDepartaments.fulfilled, (state, { payload }) => {
        state.items = payload.map((item) => ({
          id: item.id,
          text: item.name,
          relation: 'departments',
          //   return {relation: 'departments',
          //   text: item.name,}
        }));
      })
      .addCase(deleteDepartamentOperation.fulfilled, (state, { payload }) => {
        const departamentId = payload.id;
        state.items = state.items.filter((item) => item.id !== departamentId);
      })
      .addCase(addDepartamentOperation.fulfilled, (state, { payload }) => {
        // перевірка не ефективна, в бекенд передається
        if (
          !state.items.some(
            (el) => el.text.toLowerCase() === payload.name.toLowerCase()
          )
        ) {
          state.items.push({
            id: payload.id,
            text: payload.name,
            relation: 'departments',
          });
        } else {
          alert(`${payload.name} is in departments`);
        }
      })
      .addCase(editDepartamentOperation.fulfilled, (state, { payload }) => {
        state.items = state.items.map((item) =>
          item.id === payload.id
            ? { id: payload.id, text: payload.name, relation: 'departments' }
            : item
        );
      });
  },
});

export const departmentsReduser = departmentsSlice.reducer;

export const allDepatmentsSelector = (state) => state.departments.items;
