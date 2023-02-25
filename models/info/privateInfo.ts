class PrivateInfo{
    password: string;

    constructor(password: string){
        this.password = password;
    }
}

class PrivateInfoBuilder{
    password: string;
    constructor(){
    }

    withPassword(password: string){
        this.password = password;
        return this;
    }

    build(){
        return new PrivateInfo(this.password);
    }
}

export {PrivateInfo, PrivateInfoBuilder};