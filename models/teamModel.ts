class Team{
    team_name: string | null;
    owner: string | null;
    members: Array<string>;
    products: Array<string>;
    permissions: Array<string>;

    constructor(team_name: string, owner: string, members: string[], products: string[], permissions: string[]){
        this.team_name = team_name;
        this.owner = owner;
        this.members = members;
        this.products = products;
        this.permissions = permissions;
    }
}


class TeamBuilder{
    static team_name: string;
    static owner: string;
    static members: Array<string>;
    static products: Array<string>;
    static permissions: Array<string>;
    constructor(){
        throw new Error("TeamBuilder is not meant to be instantiated");
    }

    static setTeamName(team_name: any){
        this.team_name = team_name;
        return this;
    }

    static setOwner(owner: any){
        this.owner = owner;
        return this;
    }

    static setMembers(members: any){
        this.members = members;
        return this;
    }

    static setProducts(products: any){
        this.products = products;
        return this;
    }

    static setPermissions(permissions: any){
        this.permissions = permissions;
        return this;
    }

    static resetArgs(){
        // this.team_name = null;
        // this.owner = null;
        // this.members = null;
        // this.products = null;
        // this.permissions = null;
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