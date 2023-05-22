import userSettingsReducer from "../reducers/UserSettingsReducer";
import {UserSettingsContext} from "../contexts/UserSettingsContext";
import {useReducer} from "react";
import {User} from "../../types";

export const UserSettingsProviders = ({ children } : any) => {
    const initialUserSettings: User = {
        firstName: "Aleksandra",
        lastName: "Tesic",
        email: "atesic@gmail.com",
        id: 1
    }
    const [state, dispatch] = useReducer(userSettingsReducer, initialUserSettings);

    return (
        <UserSettingsContext.Provider value={{ state, dispatch }}>
            {children}
        </UserSettingsContext.Provider>
    );
};