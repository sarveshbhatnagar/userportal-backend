class User{
    username: string;
    password: string;
    email: string;
    name: string;
    isActive: boolean;
    isManager: boolean;
    teamName: string;

    constructor(name: string, email: string, username: string, isManager: boolean, isActive: boolean, teamName: string, password: string){
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
        this.isActive = isActive;
        this.isManager = isManager;
        this.teamName = teamName;
    }
}

class UserBuilder{
    username: string;
    email: string;
    password: string;
    name: string;
    isManager: boolean;
    isActive: boolean;
    teamName: string;
    constructor(username: string){
        this.username = username;
        return this;
    }

    withEmail(email: string){
        this.email = email;
        return this;
    }

    withPassword(password: string){
        this.password = password;
        return this;
    }

    withName(name: string){
        this.name = name;
        return this;
    }
 
    withIsManager(isManager: boolean){
        this.isManager = isManager;
        return this;
    }

    withIsActive(isActive: boolean){
        this.isActive = isActive;
        return this;
    }

    withTeamName(teamName: string){
        this.teamName = teamName;
        return this;
    }

    build(){
        if(!('username' in this ) || this.username === undefined){
            throw new Error('username is missing');
        }
        
        return new User(this.name,this.email, this.username, this.isManager, this.isActive, this.teamName, this.password)
    }
}

export {User, UserBuilder};

// test ki user properly ban rha h ya nhi...
// rename usermodel into user
