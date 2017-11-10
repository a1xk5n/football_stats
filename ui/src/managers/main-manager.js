import LeagueRecord from '../records/league-record';
import LeagueTableTeam from '../records/league-table-team';
import LeagueTeam from '../records/league-team';
import PlayerRecord from '../records/player-record';
import FixtureRecord from '../records/fixture-record';
import FixtureInfoRecord from '../records/fixture-info-record';
import { send } from '../tools/request-tools';

const footballApiOptions = {
    method: 'GET',
    headers: {
        'X-Auth-Token': 'bfd683e88b534ddebb373eb7daab0069',
    },
    mode: 'cors',
    cache: 'default',
};

export const getLeagues = () =>
    fetch('http://api.football-data.org/v1/competitions/?season=2017', footballApiOptions)
        .then(response => response.json())
        .then(data => data.map(league => LeagueRecord.parse(league)));

export const getLeagueTableTeams = id =>
    fetch(`http://api.football-data.org/v1/competitions/${id}/leagueTable`, footballApiOptions)
        .then(response => response.json())
        .then(data => data.standing.map(leagueTeam => LeagueTableTeam.parse(leagueTeam)));

export const getLeagueTeams = id =>
    fetch(`http://api.football-data.org/v1/competitions/${id}/teams`, footballApiOptions)
        .then(response => response.json())
        .then(data => data.teams.map(leagueTeam => LeagueTeam.parse(leagueTeam)));

export const getTeamInfo = id =>
    fetch(`http://api.football-data.org/v1/teams/${id}`, footballApiOptions)
        .then(response => response.json())
        .then(data => LeagueTeam.parse(data));

export const getTeamPlayers = id =>
    fetch(`http://api.football-data.org/v1/teams/${id}/players`, footballApiOptions)
        .then(response => response.json())
        .then(data =>
            data.players
                .map(player => PlayerRecord.parse(player))
                .sort((first, second) => first.get('number') - second.get('number')),
        );

export const getTeamFixtures = (id, dateDifference) =>
    fetch(`http://api.football-data.org/v1/teams/${id}/fixtures?timeFrame=n${dateDifference}`, footballApiOptions)
        .then(response => response.json())
        .then(data => data.fixtures.map(fixture => FixtureRecord.parse(fixture)));

export const getFixtureInfo = fixtureId =>
    fetch(`http://api.football-data.org/v1/fixtures/${fixtureId}`, footballApiOptions)
        .then(response => response.json())
        .then(data => FixtureInfoRecord.parse(data));

export const getUserTeams = () => fetch('/api/userTeams').then(data => data);

export const getTeamTwits = info =>
    send('/api/twits', { query: info.get('shortName') })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
