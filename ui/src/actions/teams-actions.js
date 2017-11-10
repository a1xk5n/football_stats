import { List } from 'immutable';

import { ActionTypes } from '../constants/teams-constants';

import { getLeagueTeams } from '../managers/main-manager';

const req = () => ({
    type: ActionTypes.TEAMS_REQUEST,
});

const res = data => ({
    type: ActionTypes.TEAMS_RESPONSE,
    payload: {
        data,
    },
});

const fail = err => ({
    type: ActionTypes.TEAMS_FAIL,
    payload: {
        err,
    },
});

export const loadTeams = id => async (dispatch) => {
    dispatch(req());
    try {
        const leagueTeams = await getLeagueTeams(id);
        dispatch(res(List(leagueTeams)));
    } catch (err) {
        dispatch(fail(err));
    }
};
