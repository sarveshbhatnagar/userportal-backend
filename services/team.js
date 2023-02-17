class TeamService {
  constructor({ teamRepository }) {
    this.teamRepository = teamRepository;
  }

  async getTeam(id) {
    const team = await this.teamRepository.getTeam(id);
    return team;
  }
}