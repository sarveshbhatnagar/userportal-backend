class User{
    username: string;
    password: string;
    email: string;
    name: string;
    isActive: boolean;
    isManager: boolean;
    managerHash: string;

    constructor(name: string, email: string, username: string, isManager: boolean, isActive: boolean, managerHash: string, password: string){
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
        this.isActive = isActive;
        this.isManager = isManager;
        this.managerHash = managerHash;
    }
}

class UserBuilder{
    username: string;
    email: string;
    password: string;
    name: string;
    isManager: boolean;
    isActive: boolean;
    managerHash: string;
    constructor(username: string){
        this.username = username;
        return this;
    }

    setEmail(email: string){
        this.email = email;
        return this;
    }

    setPassword(password: string){
        this.password = password;
        return this;
    }

    setName(name: string){
        this.name = name;
        return this;
    }
 
    setIsManager(isManager: boolean){
        this.isManager = isManager;
        return this;
    }

    setIsActive(isActive: boolean){
        this.isActive = isActive;
        return this;
    }

    setManagerHash(managerHash: string){
        this.managerHash = managerHash;
        return this;
    }

    build(){
        if(!('username' in this ) || this.username === undefined){
            throw new Error('username is missing');
        }
        
        return new User(this.name,this.email, this.username, this.isManager, this.isActive, this.managerHash, this.password)
    }
}

export {User, UserBuilder};

// test ki user properly ban rha h ya nhi...
// rename usermodel into user
