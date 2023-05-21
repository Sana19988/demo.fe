import {getDemo} from "./http-client";
import {QueryOptions, User} from "../types";
import {API_ENDPOINTS} from "./endpoints";

export const usersRequest = {
    all: ({...query}: QueryOptions = {}) =>
        getDemo<User[]>(API_ENDPOINTS.USERS_GET_ALL, {
            ...query,
        })
};