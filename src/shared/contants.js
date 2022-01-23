import * as Yup from 'yup';
export const baseurl = 'http://192.168.0.105:3000/api/';
export const currencySymbol = "$ ";
export const AppName = "Food Trail";




const LoginFormScheme = {
    email: Yup.string()
        .label('Email')
        .email('Please enter a valid email')
        .required('Please enter a registered email'),
    password: Yup.string()
        .required('Please provided your password')
        .min(8, 'Password is too short - should be 8 chars minimum.')
    // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
};

const RegisterFormSchema = {
    email: Yup.string()
        .label('Email')
        .email('Please enter a valid email')
        .required('Email address is required'),
    name: Yup.string()
        .label('First Name')
        .required("This field is required"),
    password: Yup.string()
        .required('Please provided your password')
        .min(8, 'Password is too short - should be 8 chars minimum.')
}

const ForgotPasswordScheme = {
    email: Yup.string()
        .label('Email')
        .email('Please enter a valid email')
        .required('Email address is required')
}

const ResetPasswordScheme = {
    password: Yup.string()
        .required('Please create a new password')
        .min(8, 'Password is too short - should be 8 chars minimum.')
}

export const LoginFormValidtion = Yup.object().shape(LoginFormScheme);
export const RegisterFormValidation = Yup.object().shape(RegisterFormSchema)
export const ForgotPasswordValidation = Yup.object().shape(ForgotPasswordScheme)
export const ResetPasswordValidation = Yup.object().shape(ResetPasswordScheme)
