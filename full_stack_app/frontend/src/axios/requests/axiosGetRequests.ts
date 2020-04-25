import { AxiosResponse } from "axios";
import { IUser } from "../../mobxmodels/user";
import { AxiosInstance } from "../axiosInstance";

export async function fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return await AxiosInstance.get("/api/person_example");
}