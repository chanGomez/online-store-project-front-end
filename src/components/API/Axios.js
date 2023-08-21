import axios from "axios";

const AxiosInstance = axios.create({
    baseURL:
    process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "DEPLOY URL",
    timeout: 50000,
})

export default AxiosInstance;