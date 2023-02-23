import {TeamTable} from '../repository/tables/teamTable';

class TeamService {

  async getTeam(teamname: string) {
    const team = await TeamTable.getTeam(teamname);
    return team;
  }
}

export { TeamService };