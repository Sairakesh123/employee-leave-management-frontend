import axios from "axios";

const API_URL = "http://localhost:8080/leave";

export const applyLeave = async (leaveData) => {

    const token = localStorage.getItem("token");

    return axios.post(
        `${API_URL}/apply`,
        leaveData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};

export const getMyLeaves = async () => {

    const token = localStorage.getItem("token");

    return axios.get(
        `${API_URL}/my-leaves`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};