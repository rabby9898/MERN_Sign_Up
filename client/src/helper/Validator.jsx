
import toast from "react-hot-toast";

// Username validator for Login Page
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors;
}
// password validator for password Page
export async function passwordValidate(values){
    const errors = passwordVerify({}, values)

    return errors;
}

// Reset validator

export async function resetPassword(values) {
    const errors = resetPassword({}, values);
    if(values.password !== values.confirm_pass){
        errors.exist = toast.error("Password Not Matched", {duration: 1000});

        return errors;
    }
}

// username validate
const usernameVerify = (error = {}, values) => {
    if(!values.username){
        error.username = toast.error("Username required!", { duration: 1000 })
    } else if(values.username.includes(' ')){
        error.username = toast.error("Invalid username!", { duration: 1000 })
    }
    return error;
}

// password validate

const passwordVerify = (error ={}, values) => {

    const length = /(?=.{7,40}$)/
    // eslint-disable-next-line no-useless-escape
    const special = /[ -\/:-@\[-\`{-~]/
    const capital = /(?=.*[A-Z])/
    const digit = /(?=.*[0-9])/

    if (!values.password){
        error.password = toast.error("Password Required!", { duration: 1000 })
    } else if (values.password.includes(" ")){0
        error.password = toast.error("Invalid password!", { duration: 1000 })
    } else if (!length.test(values.password)){
        error.length = toast.error("Password should have 7 to 13 character", { duration: 1000 })
    }else if (!special.test(values.password)){
        error.special = toast.error("Password should have a special character", { duration: 1000 })
    }
    else if (!capital.test(values.password)){
        error.capital = toast.error("Password should contains a Capital letter", { duration: 1000 })
    } else if (!digit.test(values.password)){
        error.digit = toast.error("Password should contains should contain a digit", { duration: 1000 })
    }

    return error;
}