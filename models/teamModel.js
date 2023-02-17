class Team{
    constructor(team_name, owner, members, products, permissions){
        this.team_name = team_name;
        this.owner = owner;
        this.members = members;
        this.products = products;
        this.permissions = permissions;
    }
}


class TeamBuilder{
    constructor(){
        throw new Error("TeamBuilder is not meant to be instantiated");
    }

    static setTeamName(team_name){
        this.team_name = team_name;
        return this;
    }

    static setOwner(owner){
        this.owner = owner;
        return this;
    }

    static setMembers(members){
        this.members = members;
        return this;
    }

    static setProducts(products){
        this.products = products;
        return this;
    }

    static setPermissions(permissions){
        this.permissions = permissions;
        return this;
    }

    static resetArgs(){
        this.team_name = null;
        this.owner = null;
        this.members = null;
        this.products = null;
        this.permissions = null;
    }

    static build(){
        if(!this.team_name || !this.owner || !this.members){
            throw new Error("Missing required fields to build team object (team_name, owner, members)");
        }
        let team = new Team(this.team_name, this.owner, this.members, this.products, this.permissions);
        this.resetArgs();
        return team;
    }
    
}

export {TeamBuilder, Team};