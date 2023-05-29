// import {useSession} from "next-auth/react";
// import {postDemo} from "../data/http-client";
// import {headers} from "next/headers";
//
// export const useRefreshToken = () => {
//     const {data: session} = useSession();
//
//     const refreshToken = () => {
//         const resp = await postDemo(`${NEXT_PUBLIC_REST_API_ENDPOINT}/api/v1/auth/refresh_token`, {}, {headers});
//     }  // nije postdemo nego postrefreshtoken koji treba da dodas
//
// }