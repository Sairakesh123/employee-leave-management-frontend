import axios from "axios";

const API_URL = "http://localhost:8080/manager";

const getToken = () =>
    localStorage.getItem("token");

export const getPendingLeaves = async () => {

    return axios.get(
        `${API_URL}/pending-leaves`,
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );
};

export const approveLeave = async (id) => {

    return axios.put(
        `${API_URL}/approve/${id}`,
        {},
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );
};

export const rejectLeave = async (id) => {

    return axios.put(
        `${API_URL}/reject/${id}`,
        {},
        {
            headers: {
                Authorization:
                    `Bearer ${getToken()}`
            }
        }
    );
};