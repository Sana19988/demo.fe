import {SWR_KEYS} from "../data/swrKeys";
import useSWR from "swr";
import {usersRequest} from "../data";

export const useGetUsers = () => {
    const {data, error} = useSWR(
        () => {
            return SWR_KEYS.USERS_GET_ALL
        }, () => {
            return usersRequest.all()
        },
        {
            refreshInterval: 90000,
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOn: false,
            revalidateOnReconnect: false
        });

    return {data, error};
}