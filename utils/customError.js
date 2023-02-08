import { buildResponse } from "./utils";

class CustomErrorBuilder{
    constructor(){
        throw new Error("ErrorBuilder is not meant to be instantiated");
    }

    message(message){
        this.message = message;
        return this;
    }

    status(status){
        this.status = status;
        return this;
    }

    field(field){
        this.field = field;
        return this;
    }

    build(){
        if(!this.message || !this.status){
            throw new Error("Missing required fields to build error object (message, status)");
        }
        return new Error(this.message, this.status, this.field);
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