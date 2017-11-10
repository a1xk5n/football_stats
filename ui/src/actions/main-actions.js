import { List } from 'immutable';

import { ActionTypes, tasksArray } from '../constants/main-constants';

import { getLeagues } from '../managers/main-manager';
import { getFavoriteTeams } from '../actions/user-actions';

const req = () => ({
    type: ActionTypes.REQUEST,
});

const res = data => ({
    type: ActionTypes.RESPONSE,
    payload: {
        data,
    },
});

const fail = err => ({
    type: ActionTypes.FAIL,
    payload: {
        err,
    },
});

export const onStartApp = () => async (dispatch) => {
    dispatch(req());
    try {
        const leagues = await getLeagues();
        dispatch(res(List(leagues)));
        dispatch(getFavoriteTeams());
    } catch (err) {
        dispatch(fail(err));
    }
};

export const changeSelectedLeague = id => ({
    type: ActionTypes.CHANGE_SECELTED_LEAGUE,
    payload: {
        id,
    },
});
