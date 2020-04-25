import { USER } from "../constants/constants";
import { types, Instance, SnapshotOut, SnapshotIn } from "mobx-state-tree";

export const User = types
    .model(USER, {
        id: types.optional(types.number, -1),
        name: types.optional(types.string, ""),
        email: types.optional(types.string, ""),
        about_me: types.optional(types.string, ""),
        created_at: types.optional(types.string, "")
    })
    .actions((self) => ({
        setName: (name: string) => {
            self.name = name;
        },
        setEmail: (email: string) => {
            self.email = email;
        },
        setaAbout_me: (about_me: string) => {
            self.about_me = about_me;
        },
    }));

export type IUser = Instance<typeof User>;
export interface IUserSnapshotOut extends SnapshotOut<typeof User> {}
export interface IUserSnapshotIn extends SnapshotIn<typeof User> {}
