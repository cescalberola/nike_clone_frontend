import axios from "axios";

const API_URL = "http://localhost:8080/users";
// const API_URL = "https://nike-clone-backend-dev-sbrt.4.us-1.fl0.io/users";


const checkEmail = async (email) => {
    // console.log(email)
    const res = await axios.post(API_URL + "/check-email", { email: email });
    // console.log(res)
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

const authService = {
    checkEmail,
    register,
    login,
    // logout
};

export default authService;