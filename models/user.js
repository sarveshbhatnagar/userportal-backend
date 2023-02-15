class UserModel{
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

class UserModelBuilder{
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
        if(!('username' in this)){
            throw new Error('username is missing');
        }

        return new User(this.name,this.email, this.username, this.isManager, this.isActive, this.managerHash, this.password)
    }
}

export {UserModel, UserModelBuilder};