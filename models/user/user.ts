class User{
    username: string;
    password: string;
    email: string;
    fullName: string;
    isActive: boolean;
    isManager: boolean;
    teamName: string;

    constructor(fullName: string, email: string, username: string, isManager: boolean, isActive: boolean, teamName: string, password: string){
        this.fullName = fullName;
        this.email = email;
        this.username = username;
        this.isManager = isManager;
        this.isActive = isActive;
        this.teamName = teamName;
        this.password = password;
    }
}

class UserBuilder{
    username: string;
    email: string;
    password: string;
    fullName: string;
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

    withFullName(fullName: string){
        this.fullName = fullName;
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
        
        return new User(this.fullName,this.email, this.username, this.isManager, this.isActive, this.teamName, this.password)
    }
}

export {User, UserBuilder};

// test ki user properly ban rha h ya nhi...
// rename usermodel into user
