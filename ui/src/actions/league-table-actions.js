import { List } from 'immutable';

import { ActionTypes } from '../constants/league-table-constants';
import { getLeagueTableTeams } from '../managers/main-manager';

const req = () => ({
    type: ActionTypes.LEAGUE_TABLE_REQUEST,
});

const res = data => ({
    type: ActionTypes.LEAGUE_TABLE_RESPONSE,
    payload: {
        data,
    },
});

const fail = err => ({
    type: ActionTypes.LEAGUE_TABLE_FAIL,
    payload: {
        err,
    },
});

export const loadLeagueTableTeams = id => async (dispatch) => {
    dispatch(req());
    try {
        const leagueTableTeams = await getLeagueTableTeams(id);
        dispatch(res(List(leagueTableTeams)));
    } catch (err) {
        dispatch(fail(err));
    }
};
