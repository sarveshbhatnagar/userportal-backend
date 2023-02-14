
import { CustomErrorBuilder } from "../utils/customError";
import { ValidateHelper } from "../utils/validateHelper";
// TODO Refactor Code
const validateLoginPassword = (password) => {
    if (!password) {
        return false;
    }
    return true;
}

const validateLoginUsername = (username) => {
    if (!username) {
        return false;
    }
    return true;
}

function validateLogin(user){
    let validateHelper = new ValidateHelper();
    if(!user){
        validateHelper.setError(CustomErrorBuilder
                    .setMessage("No user provided")
                    .setStatus(400)
                    .build());

        return validateHelper;

    }

    const username = user.username;
    const password = user.password;


    // Reasoning behind creating this method is to allow maintainability
    // and readability. If we were to make changes, or reuse, we can do so.
    if(!validateLoginUsername(username)){
        validateHelper.setError(CustomErrorBuilder
            .setMessage("Missing username")
            .setField("username")
            .setStatus(400).build());
        return validateHelper;
    }
    
    if(!validateLoginPassword(password)){
        validateHelper.setError(CustomErrorBuilder
            .setMessage("Missing password")
            .setField("password")
            .setStatus(400).build());
        return validateHelper;
    }

    return validateHelper;

}

export {validateLogin};