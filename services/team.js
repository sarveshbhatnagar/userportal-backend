class TeamService {
  constructor(teamTable) {
    this.teamTable = teamTable;
  }

  async getTeam(id) {
    const team = await this.teamTable.getTeam(id);
    return team;
  }
}