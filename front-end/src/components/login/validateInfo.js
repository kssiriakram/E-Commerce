export default function validateInfo(values) {
    let errors = {};
    if(!values.last_name.trim()){
        errors.last_name = "last name required";
    }
    if(!values.first_name.trim()){
        errors.first_name = "first name required";
    }
    if(!values.email){
        errors.email="Email required";

    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email="invalid email";
    }
    if(!values.password){
        errors.password = 'password is required';

    }
    else if(values.password.length <6 )
    {
        errors.password="password needs to be 6 characters or more";

    }
    if (!values.password2){
        errors.password2 = "password is required";
    }
    else if(values.password2!==values.password){
        errors.password2 = "password doesn't match";
    }
    return errors;
}