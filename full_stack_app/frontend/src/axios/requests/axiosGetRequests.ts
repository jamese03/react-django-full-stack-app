import { AxiosResponse } from "axios";
import { IUser } from "../../mobxmodels/user";
import { AxiosInstance } from "../axiosInstance";
import { USER_API } from "../../constants/constants";

export async function fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return await AxiosInstance.get(USER_API);
}