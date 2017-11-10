import { List } from 'immutable';

import { ActionTypes } from '../constants/user-constants';

import { getUserFavoriteTeams, handleTeamsUpdating, removeFavoriteTeamHandle } from '../managers/user-manager';

const req = () => ({
    type: ActionTypes.USER_REQUEST,
});

const res = data => ({
    type: ActionTypes.USER_RESPONSE,
    payload: {
        data,
    },
});

const fail = err => ({
    type: ActionTypes.USER_FAIL,
    payload: {
        err,
    },
});

const updateTeams = teams => ({
    type: ActionTypes.USER_UPDATE_FAVORITE_TEAM,
    payload: {
        teams,
    },
});

export const updateFavoriteTeam = team => (dispatch, getState) => {
    const teams = getUserFavoriteTeams(getState());
    const newTeams = handleTeamsUpdating(teams, team);

    dispatch(updateTeams(newTeams));
};

export const removeFavoriteTeam = teamToRemove => (dispatch, getState) => {
    const teams = getUserFavoriteTeams(getState());
    const newTeams = removeFavoriteTeamHandle(teams, teamToRemove);

    dispatch(updateTeams(newTeams));
};

const getFavoriteTeamsStart = () => ({
    type: ActionTypes.USER_REQ_FAVORITE_TEAM,
});

const getFavoriteTeamsFinish = teams => ({
    type: ActionTypes.USER_RES_FAVORITE_TEAM,
    payload: {
        teams,
    },
});

const getTeams = () =>
    new Promise((res, rej) => {
        setTimeout(() => res([]), 3000);
    });

const getTeamsUpdated = async () => {
    const teams = await getTeams();

    return teams;
};

export const getFavoriteTeams = () => async (dispatch) => {
    dispatch(getFavoriteTeamsStart());
    try {
        const favoriteTeams = await getTeamsUpdated();
        dispatch(getFavoriteTeamsFinish(List(favoriteTeams)));
    } catch (err) {
        dispatch(fail(err));
    }
};
