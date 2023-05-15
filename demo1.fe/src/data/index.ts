import {getDemo, postDemo} from "./http-client";
import {CreateUserQuery, QueryOptions, User} from "../types";
import {API_ENDPOINTS} from "./endpoints";

export const usersRequest = {
    all: ({...query}: QueryOptions = {}) =>
        getDemo<User[]>(API_ENDPOINTS.USERS_GET_ALL, {
            ...query,
        }),
    create: ({...query}: CreateUserQuery) =>
        postDemo<User>(API_ENDPOINTS.USERS_CREATE, {
            ...query,
        })
};