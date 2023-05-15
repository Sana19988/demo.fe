import {useForm} from "react-hook-form";
import {usersRequest} from "../../data";
import {CreateUserQuery} from "../../types";
import {yupResolver} from '@hookform/resolvers/yup';
import {createUserSchema} from "../../validators/users/createUserValidator";


export default function CreateUserPage() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<CreateUserQuery>({
        mode: 'onSubmit',
        resolver: yupResolver(createUserSchema)
    });

    return (
        <>
            <input
                type="text"
                placeholder="First name"
                {...register("firstName")}
            />
            {errors.firstName && (
                <div>{errors.firstName?.message as string}</div>
            )}
            <br/>
            <br/>
            <input
                type="text"
                placeholder="Last name"
                {...register("lastName")}
            />
            {errors.lastName && (
                <div>{errors.lastName?.message as string}</div>
            )}
            <br/>
            <br/>
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
                        usersRequest.create(data);
                    })();
                }}
            >
                Submit
            </button>
        </>
    );
}

// export default function CreateUserPage() {
//     return <h1>Create user page</h1>
// }