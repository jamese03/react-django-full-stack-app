import { AxiosResponse } from "axios";
import { AxiosInstance } from "../axiosInstance";
import { USER_API } from "../../constants/constants";

export async function deleteUser(id: number): Promise<AxiosResponse> {
    return await AxiosInstance.delete(USER_API + id);
}