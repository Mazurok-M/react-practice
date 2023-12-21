import axios from "axios";

const BASE_URL = "https://657b0bbe394ca9e4af137bc7.mockapi.io/api/v1";

const URL = {
  DEPARTMENTS: `departments`,
  CITIES: `cities`,
  TUTORS: `tutors`,
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "aplication/json",
  },
});

const postData = async (url, data) => {
  try {
    return await axiosInstance.post(`/${url}`, JSON.stringify(data));
  } catch (error) {
    return { result: null, error: error };
  }
};

const getData = (url) => {
  try {
    return axiosInstance.get(`/${url}`);
  } catch (error) {
    return { result: null, error: error };
  }
};

const putData = async (url, data) => {
  try {
    return axiosInstance.put(`/${url}`, data);
  } catch (error) {
    return { result: null, error: error };
  }
};

const deleteData = async (url, data) => {
  try {
    return axiosInstance.delete(`/${url}`, data);
  } catch (error) {
    return { result: null, error: error };
  }
};

export const getTutors = () => {
  return getData(URL.TUTORS);
};

export const getCitites = () => {
  return getData(URL.CITIES);
};

// export const getCity = (id) => {
//   return getData(`${URL.CITIES}/${id}`);
// };

export const getDepartments = () => {
  return getData(URL.DEPARTMENTS);
};

export const postCity = (data) => {
  return postData(URL.CITIES, data);
};

export const postTutor = (data) => {
  return postData(URL.TUTORS, data);
};

export const deleteCity = (id) => {
  return deleteData(`${URL.CITIES}/${id}`);
};

export const updateCity = (id, data) => {
  return putData(`${URL.CITIES}/${id}`, data);
};
// -------------------------------------------------

const axiosInstanceDepartment = axios.create({
  baseURL: `https://657b164a394ca9e4af13a6a0.mockapi.io/api/v1/`,
  headers: {
    "Content-Type": "aplication/json",
  },
});

const deleteDataDepartment = async (url, data) => {
  try {
    return axiosInstanceDepartment.delete(`/${url}`, data);
  } catch (error) {
    return { result: null, error: error };
  }
};

const putDataDepartment = async (url, data) => {
  try {
    return axiosInstanceDepartment.put(`/${url}`, data);
  } catch (error) {
    return { result: null, error: error };
  }
};

export const deleteDepartment = (id) => {
  return deleteDataDepartment(`${URL.DEPARTMENTS}/${id}`);
};

export const updateDepartmen = (id, data) => {
  return putDataDepartment(`${URL.DEPARTMENTS}/${id}`, data);
};
