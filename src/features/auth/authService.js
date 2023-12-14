import axios from "axios";

const API_URL = "http://localhost:8080/users";
// const API_URL = "https://nike-clone-backend-dev-sbrt.4.us-1.fl0.io/users";


const checkEmail = async (email) => {
    const res = await axios.post(API_URL + "/check-email", { email: email });
    return res.data;
};
const register = async (data) => {
    const res = await axios.post(API_URL + "/register", data);
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
const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/logout", {
        headers: {
            Authorization: token,
        },
    });
    if (res.data) {
        localStorage.clear();
    }
    return res.data
};

const authService = {
    checkEmail,
    register,
    login,
    logout,
};

export default authService;