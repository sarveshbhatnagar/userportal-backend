import { DATABASE } from "../../utils/constants";
import { Tables } from "../../utils/constants";
import {Team} from "../../models/team"

class TeamTable{

    static async getTeam(id: string){
        const params = {
            TableName: Tables.TEAMS,
            Key: {id}
        };

        const result = await DATABASE.get(params);

        return result?.Item;
    }

    static async createTeam(team: Team){
        const params = {
            TableName: Tables.TEAMS,
            Item: team
        };

        const result = await DATABASE.put(params);

        return result;
    }

}

export { TeamTable };