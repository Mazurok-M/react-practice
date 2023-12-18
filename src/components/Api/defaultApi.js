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
//     return getData(`${URL.CITIES}/${id}`)
// }

export const getDepartments = () => {
  return getData(URL.DEPARTMENTS);
};
