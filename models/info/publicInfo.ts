class PublicInfo{
    firstName: string;
    lastName: string;
    username: string;

    constructor(firstName: string, lastName: string, username: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
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