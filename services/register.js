import { buildResponse } from "../utils/utils";

async function register(user){
    const validationResult = validateRegister(user);

    if(validationResult.error){
        return validationResult.getErrorResponse();
    }
    return buildResponse(200, {message: "Register Successfull"})
}

export {register}