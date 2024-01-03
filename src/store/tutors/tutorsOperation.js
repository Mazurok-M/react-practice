import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTutors, postTutor } from 'components/Api/defaultApi';

export const fetchAllTutors = createAsyncThunk(
  'tutors/fetchAllTutors',
  async (_, thunkAPI) => {
    try {
      const { data } = await getTutors();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massege);
    }
  }
);

export const addTutorOperation = createAsyncThunk(
  'tutors/addTutor',
  async (data, thunkAPI) => {
    try {
      const res = await postTutor(data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massege);
    }
  }
);
