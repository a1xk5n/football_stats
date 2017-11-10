import { List, Record } from 'immutable';
import moment from 'moment';

import { ActionTypes } from '../constants/current-team-constants';

import LeagueTeam from '../records/league-team';

const initialState = Record({
    isTeamInfoLoaded: false,
    isTeamFixturesLoaded: true,
    isFixtureInfoLoaded: false,
    teamInfo: new LeagueTeam(),
    selectedTabId: 0,
    selectedPage: 1,
    fixturesDateFrom: moment(),
    fixturesDateTo: moment().add('14', 'days'),
    teamPlayers: List(),
    teamFixtures: List(),
    teamTwits: List(),
    selectedFixtureInfo: null,
    selectedFixtureId: null,
});

const TeamsReducer = (state = new initialState(), action) => {
    switch (action.type) {
        case ActionTypes.CURRENT_TEAM_REQUEST: {
            return state.set('isTeamInfoLoaded', false);
        }

        case ActionTypes.CURRENT_TEAM_RESPONSE: {
            return state
                .set('isTeamInfoLoaded', true)
                .set('teamInfo', action.payload.teamInfo)
                .set('teamPlayers', action.payload.teamPlayers)
                .set('teamTwits', action.payload.twits);
        }

        case ActionTypes.CURRENT_TEAM_CHANGE_TAB: {
            return state.set('selectedTabId', action.payload.tabId);
        }

        case ActionTypes.CURRENT_TEAM_CHANGE_SELECTED_PAGE: {
            return state.set('selectedPage', action.payload.pageNumber);
        }

        case ActionTypes.CURRENT_TEAM_CHANGE_FIXTURES_DATE_FROM: {
            return state.set('fixturesDateFrom', action.payload.date);
        }

        case ActionTypes.CURRENT_TEAM_CHANGE_FIXTURES_DATE_TO: {
            return state.set('fixturesDateTo', action.payload.date);
        }

        case ActionTypes.CURRENT_TEAM_RESET: {
            return new initialState();
        }

        case ActionTypes.CURRENT_TEAM_REQUEST_LOAD_TEAM_FIXTURES: {
            return state.set('isTeamFixturesLoaded', false);
        }

        case ActionTypes.CURRENT_TEAM_RESPONSE_LOAD_TEAM_FIXTURES: {
            return state.set('isTeamFixturesLoaded', true).set('teamFixtures', action.payload.teamFixtures);
        }

        case ActionTypes.CURRENT_TEAM_CHAGE_SELECTED_FIXTURE: {
            return state.set('selectedFixtureId', action.payload.fixtureId);
        }

        case ActionTypes.CURRENT_TEAM_REQUEST_LOAD_FIXTURE_INFO: {
            return state.set('isFixtureInfoLoaded', false);
        }

        case ActionTypes.CURRENT_TEAM_RESPONSE_LOAD_FIXTURE_INFO: {
            return state
                .set('selectedFixtureInfo', action.payload.selectedFixtureInfo)
                .set('isFixtureInfoLoaded', true);
        }

        default:
            return state;
    }
};

export default TeamsReducer;
