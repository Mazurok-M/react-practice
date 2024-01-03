import { combineReducers } from 'redux';
import { citiesReduser } from './cities/citiesSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { departmentsReduser } from './departaments/departamentsSlice';
import { tutorsReduser } from './tutors/tutorsSlice';

const tutorsConfig = {
  key: 'tutors',
  storage,
};

const citiesConfig = {
  key: 'cities',
  storage,
};

const departmentsConfig = {
  key: 'departments',
  storage,
};

export default combineReducers({
  // tutors: persistReducer(tutorsConfig, tutorsSlice.reducer),
  tutors: persistReducer(tutorsConfig, tutorsReduser),
  cities: persistReducer(citiesConfig, citiesReduser),
  departments: persistReducer(departmentsConfig, departmentsReduser),
});
