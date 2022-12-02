import axios from "axios";

export default axios.create({
    baseURL: "http://10.0.2.2:8000/api/",
    // baseURL: `http://n10client.test/api/`,
    headers: {
        'Content-Type': 'multipart/form-data '
    },
    timeout: 1000 * 100
});