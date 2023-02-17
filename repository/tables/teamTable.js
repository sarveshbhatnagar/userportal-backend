import { DATABASE } from "../utils/constants";
import { Tables } from "../utils/constants";

class TeamTable{

    static async getTeam(id){
        const params = {
            tableName: Tables.TEAMS,
            Key: {id}
        };

        const result = await DATABASE.get(params);

        return result.Item;
    }

    static async createTeam(team){
        const params = {
            tableName: Tables.TEAMS,
            Item: team
        };

        const result = await DATABASE.put(params);

        return result;
    }

}

export { TeamTable };