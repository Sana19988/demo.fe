import {Dispatch, ReactElement, ReactNode} from "react";
import {bool, boolean} from "yup";
import {AppProps} from "next/app";
import {NextPage} from "next";

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

export interface QueryOptions {
    pageIndex?: number,
    rowNumber?: number
    headers?: {
        authorization?: string;
    }
}

export interface CreateUserQuery {
    firstName: string;
    lastName: string;
    email: string;
}

export interface UserSettingsContextProps {
    state: User;
    dispatch: Dispatch<UserSettingsAction>
}

export interface UserSettingsAction {
    type: UserSettingsFunctions;
    payload: {
        email?: string;
        firstName?: string;
        lastName?: string;
    }
}

export enum UserSettingsFunctions {
    CHANGE_EMAIL = 'CHANGE_EMAIL',
    CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME',
    CHANGE_LAST_NAME = 'CHANGE_LAST_NAME'
}

export type NextPageWithLayout<P = {}> = NextPage<P> &{
    authorization?: boolean;
    getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
}