import { List, Record } from 'immutable';

import { ActionTypes } from '../constants/teams-constants';

const initialState = Record({
    isTeamsLoaded: false,
    leagueTeams: List(),
});

const TeamsReducer = (state = new initialState(), action) => {
    switch (action.type) {
        case ActionTypes.TEAMS_REQUEST: {
            return state.set('isTeamsLoaded', false);
        }

        case ActionTypes.TEAMS_RESPONSE: {
            return state.set('leagueTeams', action.payload.data).set('isTeamsLoaded', true);
        }

        default:
            return state;
    }
};

export default TeamsReducer;
