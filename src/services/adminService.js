import axios from "axios";

const API_URL = "http://localhost:8080/admin";

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getDashboard = async () => {
  return axios.get(
    `${API_URL}/dashboard`,
    getHeaders()
  );
};

export const createEmployee = async (employee) => {
  return axios.post(
    `${API_URL}/create-employee`,
    employee,
    getHeaders()
  );
};

export const getEmployees = async () => {
  return axios.get(
    `${API_URL}/employees`,
    getHeaders()
  );
};

export const deleteEmployee = async (id) => {
  return axios.delete(
    `${API_URL}/employee/${id}`,
    getHeaders()
  );
};