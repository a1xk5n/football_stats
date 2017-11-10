import { List, Record } from 'immutable';

import { ActionTypes } from '../constants/league-table-constants';

const initialState = Record({
    isTableLoaded: false,
    leagueTableTeams: List(),
});

const LeagueTableReducer = (state = new initialState(), action) => {
    switch (action.type) {
        case ActionTypes.LEAGUE_TABLE_REQUEST: {
            return state.set('isTableLoaded', false);
        }

        case ActionTypes.LEAGUE_TABLE_RESPONSE: {
            return state.set('leagueTableTeams', action.payload.data).set('isTableLoaded', true);
        }

        default:
            return state;
    }
};

export default LeagueTableReducer;
