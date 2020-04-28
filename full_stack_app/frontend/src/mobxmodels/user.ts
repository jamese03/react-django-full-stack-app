import { USER } from "../constants/constants";
import { types, Instance, SnapshotOut, SnapshotIn, getEnv, getParent } from "mobx-state-tree";
import { IStoreEnv } from ".";
import { IUserStore } from "./userStore";

export const User = types
    .model(USER, {
        id: types.optional(types.number, -1),
        name: types.optional(types.string, ""),
        email: types.optional(types.string, ""),
        about_me: types.optional(types.string, ""),
        created_at: types.optional(types.string, "")
    }).volatile((self)=>({
        nameHasBeenEdited: false,
        emailHasBeenEdited: false,
    })).views((self)=>({
        get isNameValid () {
            return self.name !== "" && self.name.length < 100;
        },
        get isAbout_meValid() {
            return self.about_me.length < 100; 
        },
        get isEmailValid () {
            const validEmail = (self.email !== "" && self.email.length < 100 && self.email.indexOf("@") > 0);
            return validEmail;
        }
    })).views((self)=>({
        get isValidForSave () {
            return self.isNameValid && self.isAbout_meValid && self.isEmailValid
        }, 
    }))
    .actions((self) => ({
        setName: (name: string) => {
            self.name = name;
        },
        setEmail: (email: string) => {
            self.email = email;
        },
        setAbout_me: (about_me: string) => {
            self.about_me = about_me;
        },
        setNameHasBeenEdited: () => {
            self.nameHasBeenEdited = true;
        },
        setEmailHasBeenEdited: () => {
            self.emailHasBeenEdited = true;
        }
    })).actions((self) =>({
        deleteUser: async () => {
            const userStore = getParent(self, 2) as IUserStore;
            try {
                await getEnv<IStoreEnv>(self,).Axios.AxiosDeleteRequests.deleteUser(self.id);
                userStore.removeUser(self as IUser)
            } catch (e) {
                alert("failed to delete user");
            }
        }
    }));

export type IUser = Instance<typeof User>;
export interface IUserSnapshotOut extends SnapshotOut<typeof User> {}
export interface IUserSnapshotIn extends SnapshotIn<typeof User> {}
