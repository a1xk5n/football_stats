import keyMirror from 'keymirror';

import LeagueTablePage from '../containers/league-table-container';
import TeamsPage from '../containers/teams-container';
import CurrentTeamPage from '../containers/current-team-container';

export const Pages = keyMirror({
    LEAGUE_TABLE: null,
    TEAMS: null,
    CURRENT_TEAM: null,
});

export const defaultPage = Pages.LEAGUE_TABLE;
export const ActionTypes = keyMirror({
    REQUEST: null,
    RESPONSE: null,
    FAIL: null,
    CHANGE_SECELTED_LEAGUE: null,
});
export const defaultTeamUrl = 'http://api.football-data.org/v1/teams/';

export const defaultFixturesUrl = 'http://api.football-data.org/v1/fixtures/';

export const fixturesDateFormat = 'DD.MM.YYYY HH:mm';

export const routeConstants = [
    {
        defaultUrlHash: '/leagueTable',
        page: Pages.LEAGUE_TABLE,
        name: 'League Table',
        component: LeagueTablePage,
        isHeaderTab: true,
    },
    {
        defaultUrlHash: '/teams/:id',
        hashForCreateNewLink: '/teams/',
        page: Pages.CURRENT_TEAM,
        name: 'Current Team',
        component: CurrentTeamPage,
        isHeaderTab: false,
    },
    {
        defaultUrlHash: '/teams',
        page: Pages.TEAMS,
        name: 'Teams',
        component: TeamsPage,
        isHeaderTab: true,
    },
];
