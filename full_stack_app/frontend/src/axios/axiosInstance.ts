import Axios from "axios";
export const AxiosInstance = Axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
