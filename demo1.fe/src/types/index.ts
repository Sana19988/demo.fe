export interface User {
    id: number,
    firstName: string,
    lasttName: string,
    email: string
}

export interface QueryOptions {
    pageIndex?: number,
    rowNumber?: number
}

export interface CreateUserQuery {
    firstName: string;
    lastName: string;
    email: string;
}