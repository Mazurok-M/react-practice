import { createSlice } from '@reduxjs/toolkit';
import {
  addCityOperation,
  deleteCityOperation,
  editCityOperation,
  fetchAllCities,
} from './operations';

const initialState = {
  citiesItems: [],
  togleModal: false,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCities.fulfilled, (state, { payload }) => {
        state.citiesItems = payload.map((city) => ({
          ...city,
          relation: 'cities',
        }));
      })
      .addCase(deleteCityOperation.fulfilled, (state, { payload }) => {
        const cityId = payload.id;
        state.citiesItems = state.citiesItems.filter(
          (city) => city.id !== cityId
        );
      })
      .addCase(addCityOperation.fulfilled, (state, { payload }) => {
        state.citiesItems.push({ ...payload, relation: 'cities' });
      })
      .addCase(editCityOperation.fulfilled, (state, { payload }) => {
        state.citiesItems = state.citiesItems.map((city) =>
          city.id === payload.id ? { ...payload, relation: 'cities' } : city
        );
      });
  },
});

export const citiesReduser = citiesSlice.reducer;

export const allCities = (state) => state.cities.citiesItems;
