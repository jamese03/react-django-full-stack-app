import { AxiosResponse } from "axios";
import { AxiosInstance } from "../axiosInstance";

export async function deleteUser(id: number): Promise<AxiosResponse> {
    return await AxiosInstance.delete(`/api/person_example/${id}`);
}