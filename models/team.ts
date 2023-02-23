class Team{
    teamName: string | null;
    owner: string | null;
    members: Array<string>;
    products: Array<string>;
    permissions: Array<string>;

    constructor(teamName: string, owner: string, members: string[], products: string[], permissions: string[]){
        this.teamName = teamName;
        this.owner = owner;
        this.members = members;
        this.products = products;
        this.permissions = permissions;
    }
}


class TeamBuilder{
    static teamName: string;
    static owner: string;
    static members: Array<string>;
    static products: Array<string>;
    static permissions: Array<string>;
    constructor(){
        throw new Error("TeamBuilder is not meant to be instantiated");
    }

    static setTeamName(teamName: any){
        this.teamName = teamName;
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
        this.teamName = "";
        this.owner = "";
        this.members = [];
        this.products = [];
        this.permissions = [];
    }

    static build(){
        if(!this.teamName || !this.owner || !this.members){
            throw new Error("Missing required fields to build team object (teamName, owner, members)");
        }
        let team = new Team(this.teamName, this.owner, this.members, this.products, this.permissions);
        this.resetArgs();
        return team;
    }
    
}

export {TeamBuilder, Team};