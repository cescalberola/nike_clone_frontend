import axios from "axios";

const API_URL = "http://localhost:8080/users";

const register = async (userData) => {
    const res = await axios.post(API_URL + "/register", userData);
    return res.data;
};
const login = async (userData) => {
    const res = await axios.post(API_URL + "/login", userData);
    if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
    }
    return res.data;
};

const authService = {
    register,
    login,
    // logout
};

export default authService;