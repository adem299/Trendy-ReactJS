import axios from "axios";

const loginUser = (username, password, callback) => {
    axios
        .post("http://localhost:300/api/users/login", { username, password })
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback({ err });
        });
};

const registerUser = (name, username, password, callback) => {
    axios
        .post("http://localhost:300/api/users", { name, username, password })
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback({ err });
        });
};

export { loginUser, registerUser };