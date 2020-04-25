import { ROOT_STORE, USER_STORE } from "../constants/constants";
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";
import { UserStore } from "./userStore";

export const RootStore = types
    .model(ROOT_STORE, {
        [USER_STORE]: types.optional(UserStore, {})
    });

export type IRootStore = Instance<typeof RootStore>;
export interface IRootStoreSnapshotOut extends SnapshotOut<typeof RootStore> {}
export interface IRootStoreSnapshotIn extends SnapshotIn<typeof RootStore> {}
