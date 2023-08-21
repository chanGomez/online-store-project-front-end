import axios from "axios";

const AxiosInstance = axios.create({
    baseURL:
    process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://main--euphonious-entremet-b35e7a.netlify.app/",
    timeout: 50000,
})

export default AxiosInstance;