import Link from "next/link";
import {User} from "../../types";
import {useGetUsers} from "../../hooks/useGetUsers";
import {useContext} from "react";
import {UserSettingsContext} from "../../components/contexts/UserSettingsContext";

export default function UserPage() {
    const  users = useGetUsers();  // Da znamo da se radi o hook funkciji!
    const context = useContext(UserSettingsContext);

    return (
        <>
            {/*{users.data?.map((user: User)=> (*/}
            {/*    <h1 key={user.id}>{user.email}</h1>*/}
            {/*))}*/}
            <h1>Users page</h1>
            {/*<Link href={"/"}>Go to home page</Link>*/}
            <h1>{context?.state.email}</h1>
        </>
    );
}