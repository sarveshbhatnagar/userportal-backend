class User{
    constructor(name, email, username, isManager, isActive, managerHash, password){
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
    constructor(username){
        this.username = username;
        return this;
    }

    setEmail(email){
        this.email = email;
        return this;
    }

    setPassword(password){
        this.password = password;
        return this;
    }

    setName(name){
        this.name = name;
        return this;
    }
 
    setIsManager(isManager){
        this.isManager = isManager;
        return this;
    }

    setIsActive(isActive){
        this.isActive = isActive;
        return this;
    }

    setManagerHash(managerHash){
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
