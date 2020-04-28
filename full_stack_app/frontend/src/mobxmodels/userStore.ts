import { USER_STORE } from "../constants/constants";
import { types, Instance, SnapshotOut, SnapshotIn, cast, getEnv, applySnapshot, getSnapshot } from "mobx-state-tree";
import { User, IUser, IUserSnapshotIn } from "./user";
import { IStoreEnv } from ".";


export const UserStore = types
    .model(USER_STORE, {
        users: types.optional(types.array(User), []),
        newUser: types.optional(User, {})
    }).actions((self) =>({
        setUsers:(users: IUserSnapshotIn[]) =>{
            applySnapshot(self.users, users);
        },
        removeUser: (user: IUser) => {
            self.users.remove(user)
        },
        addUser: (user: IUser) => {
            self.users.push(user);
        },
        resetNewUser:() => {
            applySnapshot(self.newUser, {});
        }
    })).actions((self) => ({
        fetchUsers: async ()  => {
            const response = await getEnv<IStoreEnv>(self,).Axios.AxiosGetRequests.fetchUsers();
            console.log(JSON.stringify(response.data))
            self.setUsers(response.data)
        },
        createUser: async() =>{
            const response = await getEnv<IStoreEnv>(self,).Axios.AxiosPostRequests.createUser(getSnapshot(self.newUser));
            self.addUser(response.data);
            self.resetNewUser();
        },
    }));

export type IUserStore = Instance<typeof UserStore>;
export interface IUserStoreSnapshotOut extends SnapshotOut<typeof UserStore> {}
export interface IUserStoreSnapshotIn extends SnapshotIn<typeof UserStore> {}