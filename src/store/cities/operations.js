import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteCity,
  getCities,
  postCity,
  updateCity,
} from 'components/Api/defaultApi';

export const fetchAllCities = createAsyncThunk(
  'cities/fetchAllCities',
  async (_, thunkAPI) => {
    try {
      const { data } = await getCities();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massege);
    }
  }
);

export const deleteCityOperation = createAsyncThunk(
  'cities/deleteCity',
  async (cityId, thunkAPI) => {
    try {
      const { data } = await deleteCity(cityId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massege);
    }
  }
);

export const addCityOperation = createAsyncThunk(
  'cities/addCity',
  async (cityName, thunkAPI) => {
    try {
      const { data } = await postCity({ text: cityName });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massege);
    }
  }
);

export const editCityOperation = createAsyncThunk(
  'cities/editCity',
  async (data, thunkAPI) => {
    try {
      const { id, name } = data;
      const res = await updateCity(id, { id, text: name });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massege);
    }
  }
);
