class EmploymentInfo{
    teamName: string;
    isManager: boolean;
    isActive: boolean;

    constructor(teamName: string, isManager: boolean, isActive: boolean){
        this.teamName = teamName;
        this.isManager = isManager;
        this.isActive = isActive;
    }
}


class EmploymentInfoBuilder{
    teamName: string;
    isManager: boolean;
    isActive: boolean;
    constructor(teamName: string){
        this.teamName = teamName;
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

    build(){
        return new EmploymentInfo(this.teamName, this.isManager, this.isActive);
    }
}
