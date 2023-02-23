import { buildResponse } from "./utils";

class CustomErrorBuilder{
    static message: string;
    static status: number;
    static field: string;
    constructor(){
        throw new Error("ErrorBuilder is not meant to be instantiated");
    }

    static setMessage(message: string){
        this.message = message;
        return this;
    }

    static setStatus(status: number){
        this.status = status;
        return this;
    }

    static setField(field: string){
        this.field = field;
        return this;
    }

    static resetArgs(){
        this.message = "";
        this.status = 999;
        this.field = "";
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
    message: any;
    field: any;
    status: any;
    constructor(message: string, status: number, field: string){
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