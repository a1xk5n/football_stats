import { List } from 'immutable';

import { getLastFixtureDate } from '../managers/current-team-manager';
import { getTeamInfo, getTeamPlayers, getTeamFixtures, getFixtureInfo, getTeamTwits } from '../managers/main-manager';

import { createMomentDate, getDateDifferenceWithCurrentDate } from '../tools/date-tools';

import { ActionTypes } from '../constants/current-team-constants';

const req = () => ({
    type: ActionTypes.CURRENT_TEAM_REQUEST,
});

const res = (teamInfo, teamPlayers, twits) => ({
    type: ActionTypes.CURRENT_TEAM_RESPONSE,
    payload: {
        teamInfo,
        teamPlayers,
        twits,
    },
});

const fail = err => ({
    type: ActionTypes.CURRENT_TEAM_FAIL,
    payload: {
        err,
    },
});

export const getCurrentTeamInfo = id => async (dispatch, getState) => {
    dispatch(req());
    try {
        const date = getLastFixtureDate(getState());
        const [teamInfo, teamPlayers] = await Promise.all([getTeamInfo(id), getTeamPlayers(id)]);
        const twits = await getTeamTwits(teamInfo);

        dispatch(loadTeamFixtures(id, date));

        dispatch(res(teamInfo, List(teamPlayers), twits));
    } catch (err) {
        dispatch(fail(err));
    }
};

export const changeTab = tabId => ({
    type: ActionTypes.CURRENT_TEAM_CHANGE_TAB,
    payload: {
        tabId,
    },
});

export const changePageNumber = pageNumber => ({
    type: ActionTypes.CURRENT_TEAM_CHANGE_SELECTED_PAGE,
    payload: {
        pageNumber,
    },
});

export const resetSettings = () => ({
    type: ActionTypes.CURRENT_TEAM_RESET,
});

export const changeFixturesDateFrom = date => ({
    type: ActionTypes.CURRENT_TEAM_CHANGE_FIXTURES_DATE_FROM,
    payload: {
        date: createMomentDate(date),
    },
});
export const changeFixturesDateTo = date => ({
    type: ActionTypes.CURRENT_TEAM_CHANGE_FIXTURES_DATE_TO,
    payload: {
        date: createMomentDate(date),
    },
});

const reqLoadTeamFixtures = () => ({
    type: ActionTypes.CURRENT_TEAM_REQUEST_LOAD_TEAM_FIXTURES,
});

const resLoadTeamFixtures = teamFixtures => ({
    type: ActionTypes.CURRENT_TEAM_RESPONSE_LOAD_TEAM_FIXTURES,
    payload: {
        teamFixtures,
    },
});

const failLoadTeamFixtures = err => ({
    type: ActionTypes.CURRENT_TEAM_FAIL_LOAD_TEAM_FIXTURES,
    payload: {
        err,
    },
});

export const loadTeamFixtures = (teamId, date) => async (dispatch) => {
    dispatch(reqLoadTeamFixtures());

    try {
        const daysDifference = getDateDifferenceWithCurrentDate(date);
        const teamFixtures = await getTeamFixtures(teamId, daysDifference);

        dispatch(resLoadTeamFixtures(List(teamFixtures)));
    } catch (e) {
        dispatch(failLoadTeamFixtures(e));
    }
};

const changeSelectedFixtureId = fixtureId => ({
    type: ActionTypes.CURRENT_TEAM_CHAGE_SELECTED_FIXTURE,
    payload: {
        fixtureId,
    },
});

const reqLoadFixtureInfo = () => ({
    type: ActionTypes.CURRENT_TEAM_REQUEST_LOAD_FIXTURE_INFO,
});

const resLoadFixtureInfo = selectedFixtureInfo => ({
    type: ActionTypes.CURRENT_TEAM_RESPONSE_LOAD_FIXTURE_INFO,
    payload: {
        selectedFixtureInfo,
    },
});

const failLoadFixtureInfo = err => ({
    type: ActionTypes.CURRENT_TEAM_FAIL_LOAD_FIXTURE_INFO,
    payload: {
        err,
    },
});

const loadFixtureInfo = fixtureId => async (dispatch) => {
    dispatch(reqLoadFixtureInfo());

    try {
        const selectedFixtureInfo = await getFixtureInfo(fixtureId);

        dispatch(resLoadFixtureInfo(selectedFixtureInfo));
    } catch (e) {
        dispatch(failLoadFixtureInfo(e));
    }
};

export const changeSelectedFixture = fixtureId => (dispatch) => {
    dispatch(changeSelectedFixtureId(fixtureId));

    dispatch(loadFixtureInfo(fixtureId));
};
