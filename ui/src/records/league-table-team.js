import { Record } from 'immutable';

import { defaultTeamUrl } from '../constants/main-constants';

const Team = Record({
    position: null,
    caption: '',
    teamId: null,
    games: null,
    wins: null,
    draws: null,
    losses: null,
    points: null,
    goals: null,
    goalsAgainst: null,
});

export default class LeagueTableTeam extends Team {
    static parse(team) {
        return new LeagueTableTeam({
            position: team.position,
            caption: team.teamName,
            teamId: team._links.team.href.replace(defaultTeamUrl, ''),
            games: team.playedGames || 0,
            wins: team.wins || 0,
            draws: team.draws || 0,
            losses: team.losses || 0,
            points: team.points || 0,
            goals: team.goals || 0,
            goalsAgainst: team.goalsAgainst || 0,
        });
    }
}
