export const BASE_URL_FN = (pageSize: number) => {
  return `https://randomuser.me/api/?page=1&results=${pageSize}`;
};

export const STORES = {
  BACKGROUND: "@@CLERK/BACKGROUND_STORE",
  USERS: "@@CLERK/USERS_STORE",
} as const;

export const BACKGROUND_ACTIONS = {
  SET_BACKGROUND: `${STORES.BACKGROUND}/SET_BACKGROUND`,
} as const;

export const USER_ACTIONS = {
  ON_LOAD: `${STORES.USERS}/ON_LOAD`,
  ON_ERROR: `${STORES.USERS}/ON_ERROR`,
  ON_SUCCESS: `${STORES.USERS}/ON_SUCCESS`,
} as const;
