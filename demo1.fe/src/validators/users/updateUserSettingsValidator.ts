import * as yup from  "yup";

export const updateUserSettingsSchema = yup.object().shape({
    firstName: yup.string().optional().label("First name"),
    lastName: yup.string().optional().label("Last name"),
    email: yup.string().email().required().label("Email")
}).required();