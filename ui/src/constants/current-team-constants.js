import keyMirror from 'keymirror';

import InfoTabContainer from '../containers/info-tab-container';
import FixturesTabContainer from '../containers/fixtures-tab-container';

export const ActionTypes = keyMirror({
    CURRENT_TEAM_REQUEST: null,
    CURRENT_TEAM_RESPONSE: null,
    CURRENT_TEAM_FAIL: null,
    CURRENT_TEAM_CHANGE_TAB: null,
    CURRENT_TEAM_CHANGE_SELECTED_PAGE: null,
    CURRENT_TEAM_RESET: null,
    CURRENT_TEAM_CHANGE_FIXTURES_DATE_FROM: null,
    CURRENT_TEAM_CHANGE_FIXTURES_DATE_TO: null,
    CURRENT_TEAM_REQUEST_PLAYERS: null,
    CURRENT_TEAM_RESPONSE_PLAYERS: null,
    CURRENT_TEAM_FAIL_PLAYERS: null,
    CURRENT_TEAM_REQUEST_LOAD_TEAM_FIXTURES: null,
    CURRENT_TEAM_RESPONSE_LOAD_TEAM_FIXTURES: null,
    CURRENT_TEAM_FAIL_LOAD_TEAM_FIXTURES: null,
    CURRENT_TEAM_CHAGE_SELECTED_FIXTURE: null,

    CURRENT_TEAM_REQUEST_LOAD_FIXTURE_INFO: null,
    CURRENT_TEAM_RESPONSE_LOAD_FIXTURE_INFO: null,
    CURRENT_TEAM_FAIL_LOAD_FIXTURE_INFO: null,
});

export const CurrentTeamTabs = [
    {
        id: 0,
        title: 'Info',
        constructor: InfoTabContainer,
    },
    {
        id: 1,
        title: 'Fixtures',
        constructor: FixturesTabContainer,
    },
];

export const ItemsPerPage = 3;
export const PageRangeDisplayed = 5;
