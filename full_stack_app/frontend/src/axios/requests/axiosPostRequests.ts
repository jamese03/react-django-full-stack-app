import { IUserSnapshotOut, IUser } from "../../mobxmodels/user";
import { AxiosResponse } from "axios";
import { AxiosInstance } from "../axiosInstance";
import { USER_API } from "../../constants/constants";


export async function createUser(user: IUserSnapshotOut): Promise<AxiosResponse<IUser>> {
    return await AxiosInstance.post(USER_API, {...user});
}