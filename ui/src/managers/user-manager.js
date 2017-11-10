export const getUserFavoriteTeams = state => state.getIn(['UserReducer', 'favoriteTeams']);

export const handleTeamsUpdating = (currentTeams, newTeam) => {
    let teams = currentTeams;
    if (!teams.contains(newTeam)) {
        teams = teams.push(newTeam);
    } else {
        const teamIndex = teams.indexOf(newTeam);
        teams = teams.remove(teamIndex);
    }
    return teams;
};

export const removeFavoriteTeamHandle = (teams, teamToRemove) =>
    teams.filter(team => team.get('id') !== teamToRemove.get('id'));
