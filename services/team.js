import {TeamTable} from '../repository/tables/teamTable';

class TeamService {
  constructor(teamTable) {
    this.teamTable = teamTable;
  }

  async getTeam(teamname) {
    const team = await this.teamTable.getTeam(teamname);
    return team;
  }
}