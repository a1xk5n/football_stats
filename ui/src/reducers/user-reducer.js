import { List, Record } from 'immutable';

import { ActionTypes } from '../constants/user-constants';

const initialState = Record({
    favoriteTeams: List(),
    isFavoriteTeamsLoaded: false,
});

const UserReducer = (state = new initialState(), action) => {
    switch (action.type) {
        case ActionTypes.USER_UPDATE_FAVORITE_TEAM: {
            return state.set('favoriteTeams', action.payload.teams);
        }
        case ActionTypes.USER_REQ_FAVORITE_TEAM: {
            return state.set('isFavoriteTeamsLoaded', false);
        }
        case ActionTypes.USER_RES_FAVORITE_TEAM: {
            return state.set('isFavoriteTeamsLoaded', true).set('favoriteTeams', action.payload.teams);
        }
        default:
            return state;
    }
};

export default UserReducer;
