import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, 
});

const loginUser = (username, password, callback) => {
    api.post("/users/login", { username, password })
        .then((res) => callback(res.data))
        .catch((err) => callback({ err }));
};

const registerUser = (name, username, password, callback) => {
    api.post("/users", { name, username, password })
        .then((res) => callback(res.data))
        .catch((err) => callback({ err }));
};

export { loginUser, registerUser };