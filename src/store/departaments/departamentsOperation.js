import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteDepartment,
  getDepartments,
  postDepartment,
  updateDepartmen,
} from 'components/Api/defaultApi';

export const fetchAllDepartaments = createAsyncThunk(
  'departaments/fetchAllDepartaments',
  async (_, thunkAPI) => {
    try {
      const { data } = await getDepartments();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massege);
    }
  }
);

export const deleteDepartamentOperation = createAsyncThunk(
  'departaments/deleteDepartament',
  async (departmentId, thunkAPI) => {
    try {
      const { data } = await deleteDepartment(departmentId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massege);
    }
  }
);

export const addDepartamentOperation = createAsyncThunk(
  'departaments/addDepartament',
  async (name, thunkAPI) => {
    try {
      const { data } = await postDepartment({ name });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massege);
    }
  }
);

export const editDepartamentOperation = createAsyncThunk(
  'departaments/editDepartament',
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const { id, name } = data;
      const res = await updateDepartmen(id, { id, name });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massege);
    }
  }
);
