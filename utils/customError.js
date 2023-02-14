import { buildResponse } from "./utils";

class CustomErrorBuilder{
    constructor(){
        throw new Error("ErrorBuilder is not meant to be instantiated");
    }

    static setMessage(message){
        this.message = message;
        return this;
    }

    static setStatus(status){
        this.status = status;
        return this;
    }

    static setField(field){
        this.field = field;
        return this;
    }

    static resetArgs(){
        this.message = null;
        this.status = null;
        this.field = null;
    }

    static build(){
        if(!this.message || !this.status){
            throw new Error("Missing required fields to build error object (message, status)");
        }
        let customError = new CustomError(this.message, this.status, this.field);
        this.resetArgs();
        return customError;
    }
    
}

class CustomError{
    constructor(message, status, field){
        this.message = message;
        this.field = field;
        this.status = status;
    }

    createResponse(){
        return buildResponse(this.status, {
            message: this.message,
            field: this.field
        });
    }
}

export {CustomErrorBuilder, CustomError};