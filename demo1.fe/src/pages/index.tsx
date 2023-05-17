import Link from "next/link";
import {ReactElement, useState} from "react";
import UserPage from "./users";
import CreateUserPage from "./users/create";
import {UserSettingsProviders} from "../components/providers/UserSettingsProviders";
import UpdateUserSettingsPage from "./users/update-user-settings";
import Layout from "../components/layouts/layout";

export default function HomePage() {

    return (
        <UserSettingsProviders>
            <UserPage/>
            <br/>
            <hr/>
            <UpdateUserSettingsPage/>
        </UserSettingsProviders>
    );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}