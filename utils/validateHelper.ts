import { CustomError } from "./customError";

class ValidateHelper{
    error: boolean;
    errorData: null|CustomError;

    constructor(){
        this.error = false;
        this.errorData = null;
    }

    setError(errorData: CustomError | null){
        this.error = true;
        this.errorData = errorData;
    }

    getError(){
        return this.error;
    }

    getErrorData(){
        return this.errorData;
    }

    getErrorResponse(){
        if(this.error){
            return this.errorData?.createResponse();
        }
        throw new Error("No error data to create response");
    }
}


export {ValidateHelper};