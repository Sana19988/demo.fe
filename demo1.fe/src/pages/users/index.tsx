import Link from "next/link";
import {useEffect, useState} from "react";
import {usersRequest} from "../../data";
import {User} from "../../types";
import {useGetUsers} from "../../hooks/useGetUsers";

export default function UserPage() {
    const  users = useGetUsers();  // Da znamo da se radi o hook funkciji!
    //console.log(users);

    // const dataFatcher = async () => {
    //     //getCustom()
    //     const resp = await usersRequest.all();
    //     // const data = await resp.json();
    //     setUsers(resp);
    //     // console.log(resp);
    // }
    //
    // useEffect(() => {
    //     dataFatcher();
    // }, []);

    return (
        <>
            {users.data?.map((user: User)=> (
                <h1 key={user.id}>{user.email}</h1>
            ))}
            <h1>Users page</h1>
            <Link href={"/"}>Go to home page</Link>
        </>
    );
}