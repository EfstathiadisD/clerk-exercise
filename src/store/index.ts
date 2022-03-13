import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { BACKGROUND_ACTIONS, BASE_URL_FN, STORES, USER_ACTIONS } from "../config/constants";

import { Users } from "../types";

export type BackgroundStore = {
  background: string;
};

export const INITIA_BACKGROUND_STORE: BackgroundStore = {
  background: "",
};

export const useBackgroundStore = create<BackgroundStore>(
  devtools(
    persist(() => INITIA_BACKGROUND_STORE, {
      name: "clerk",
      getStorage: () => sessionStorage,
      partialize: (state) => ({ background: state.background }),
    }),
    { anonymousActionType: STORES.BACKGROUND },
  ),
);

export const setBackground = (background: string) => {
  return useBackgroundStore.setState(
    { background },
    false /* @ts-ignore */,
    BACKGROUND_ACTIONS.SET_BACKGROUND,
  );
};

/* USERS */

export type UsersStore = {
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  data: Users | undefined;
  error: string | undefined;
};

export const INITIAL_USERS_STORE: UsersStore = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  data: undefined,
  error: undefined,
};

export const useUsersStore = create<UsersStore>(
  devtools(() => INITIAL_USERS_STORE, { anonymousActionType: STORES.USERS }),
);

export const setFetchUsers = async (pageSize: number) => {
  try {
    useUsersStore.setState(
      (state) => ({
        ...state,
        isLoading: true,
      }),
      true /* @ts-ignore */,
      USER_ACTIONS.ON_LOAD,
    );
    const response = await (await fetch(BASE_URL_FN(pageSize))).json();

    useUsersStore.setState(
      (state) => ({
        ...state,
        isLoading: false,
        isSuccess: true,
        data: response,
      }),
      true /* @ts-ignore */,
      USER_ACTIONS.ON_SUCCESS,
    );
  } catch (error) {
    useUsersStore.setState(
      (state) => ({
        ...state,
        isLoading: false,
        isError: true,
        error,
      }),
      true /* @ts-ignore */,
      USER_ACTIONS.ON_ERROR,
    );
  }
};
