import {useForm} from "react-hook-form";
import {CreateUserQuery, UserSettingsFunctions} from "../../types";
import {yupResolver} from "@hookform/resolvers/yup";
import {useContext} from "react";
import {UserSettingsContext} from "../../components/contexts/UserSettingsContext";
import {updateUserSettingsSchema} from "../../validators/users/updateUserSettingsValidator";

export default function UpdateUserSettingsPage() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<CreateUserQuery>({
        mode: 'onSubmit',
        resolver: yupResolver(updateUserSettingsSchema)
    });

    const context = useContext(UserSettingsContext);

    return (
        <>
            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder="First name"*/}
            {/*    {...register("firstName")}*/}
            {/*/>*/}
            {/*{errors.firstName && (*/}
            {/*    <div>{errors.firstName?.message as string}</div>*/}
            {/*)}*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder="Last name"*/}
            {/*    {...register("lastName")}*/}
            {/*/>*/}
            {/*{errors.lastName && (*/}
            {/*    <div>{errors.lastName?.message as string}</div>*/}
            {/*)}*/}
            {/*<br/>*/}
            {/*<br/>*/}
            <input
                type="text"
                placeholder="Enter email"
                {...register("email")}
            />
            {errors.email && (
                <div>{errors.email?.message as string}</div>
            )}
            <br/>
            <br/>
            <button
                onClick={() => {
                    handleSubmit((data) => {
                        context?.dispatch({type: UserSettingsFunctions.CHANGE_EMAIL, payload: {email: data.email}});
                    })();
                }}
            >
                Submit
            </button>
        </>
    );
}