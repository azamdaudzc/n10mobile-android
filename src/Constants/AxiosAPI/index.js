import axios from "axios";

export default axios.create({
    baseURL: "https://n10client.demowiz.art/api/",
    // baseURL: `http://n10client.test/api/`,
    //n10client.demowiz.art
    headers: {
        'Content-Type': 'multipart/form-data '
    },
    timeout: 1000 * 100
});