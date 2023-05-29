import useSWR from "swr";
import {usersRequest} from "../data";
import {useSession} from "next-auth/react";
import {API_ENDPOINTS} from "../data/endpoints";

export const useGetUsers = () => {
    const {data: session} = useSession();

    const headers = {
        // @ts-ignore
        Authorization: `Bearer ${session?.user?.accessToken}`,
    };

    const {data, error} = useSWR(
        () => {
            return API_ENDPOINTS.USERS_GET_ALL
        }, () => {
            return usersRequest.all({}, {headers});
        },
        {
            refreshInterval: 9000,
            revalidateIfStale: true,
            revalidateOnFocus: true,
            revalidateOn: true,
            revalidateOnReconnect: true
        });

    return {data, error};
}