import { USER_STORE } from "../constants/constants";
import { types, Instance, SnapshotOut, SnapshotIn, cast, getEnv, applySnapshot } from "mobx-state-tree";
import { User, IUser, IUserSnapshotIn } from "./user";
import { IStoreEnv } from ".";

export const UserStore = types
    .model(USER_STORE, {
        users: types.optional(types.array(User), [])
    }).actions((self) =>({
        addUser: (user: IUser) =>{
            self.users.push(user)
        },
        setUsers:(users: IUserSnapshotIn[]) =>{
            applySnapshot(self.users, users);
        }
    })).actions((self) => ({
        fetchUsers: async ()  => {
            const response = await getEnv<IStoreEnv>(self,).Axios.AxiosGetRequests.fetchUsers();
            console.log(JSON.stringify(response.data))
            self.setUsers(response.data)
        }
    }));

export type IUserStore = Instance<typeof UserStore>;
export interface IUserStoreSnapshotOut extends SnapshotOut<typeof UserStore> {}
export interface IUserStoreSnapshotIn extends SnapshotIn<typeof UserStore> {}