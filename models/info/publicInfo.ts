import {checkIfEmpty} from "../../utils/utils";

class PublicInfo{
    firstName: string;
    lastName: string;
    username: string;
    fullName: string;

    constructor(firstName: string, lastName: string, username: string){
        this.firstName = firstName ? firstName : "";
        this.lastName = lastName ? lastName : "";
        this.username = username;
        this.fullName = this.createFullName(this.firstName, this.lastName);
    }

    createFullName(firstName: string|undefined, lastName: string|undefined){
        if(checkIfEmpty(firstName) && checkIfEmpty(lastName)){
            return "";
        }
        if(checkIfEmpty(firstName)){
            return `${lastName}`;
        }
        else if(checkIfEmpty(lastName)){
            return `${firstName}`;
        }
        else{
            return `${lastName} ${firstName}`;
        }
    }
}

class PublicInfoBuilder{
    firstName: string;
    lastName: string;
    username: string;
    constructor(username: string){
        this.username = username;
        return this;
    }
    
    withFirstName(firstName: string){
        this.firstName = firstName;
        return this;
    }

    withLastName(lastName: string){
        this.lastName = lastName;
        return this;
    }

    build(){
        return new PublicInfo(this.firstName, this.lastName, this.username);
    }
}

export {PublicInfo, PublicInfoBuilder};