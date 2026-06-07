import axios from "axios";

const API_URL = "http://localhost:8080/auth";

export const login = async (loginData) => {
    const response = await axios.post(
        `${API_URL}/login`,
        loginData
    );

    return response.data;
};