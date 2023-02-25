class PersonalInfo{
    address: string;
    city: string;
    state: string;
    mobile: string;
    email: string;

    constructor(address: string, city: string, state: string, mobile: string, email: string){
        this.address = address;
        this.city = city;
        this.state = state;
        this.mobile = mobile;
        this.email = email;
    }
}

class PersonalInfoBuilder{
    address: string;
    city: string;
    state: string;
    mobile: string;
    email: string;

    constructor(){
        return this;
    }

    withEmail(email: string){
        this.email = email;
        return this;
    }

    withAddress(address: string){
        this.address = address;
        return this;
    }

    withCity(city: string){
        this.city = city;
        return this;
    }

    withState(state: string){
        this.state = state;
        return this;
    }

    withMobile(mobile: string){
        this.mobile = mobile;
        return this;
    }

    build(){
        return new PersonalInfo(this.address, this.city, this.state, this.mobile, this.email);
    }
}

export { PersonalInfo, PersonalInfoBuilder };