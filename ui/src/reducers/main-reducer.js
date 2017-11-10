import { List, Record } from 'immutable';

import { ActionTypes } from '../constants/main-constants';

const initialState = Record({
    isReady: false,
    leagues: List(),
    selectedLeagueId: null,
});

const MainReducer = (state = new initialState(), action) => {
    switch (action.type) {
        case ActionTypes.REQUEST: {
            return state.set('isReady', false);
        }

        case ActionTypes.RESPONSE: {
            return state
                .set('isReady', true)
                .set('leagues', action.payload.data)
                .set('selectedLeagueId', action.payload.data.first().id);
        }
        case ActionTypes.CHANGE_SECELTED_LEAGUE: {
            return state.set('selectedLeagueId', action.payload.id);
        }
        default:
            return state;
    }
};

export default MainReducer;
