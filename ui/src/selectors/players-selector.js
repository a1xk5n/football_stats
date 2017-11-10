import moment from 'moment';
import { createSelector } from 'reselect';

import { ItemsPerPage, PageRangeDisplayed } from '../constants/current-team-constants';

const playersSelector = state => state.getIn(['CurrentTeamReducer', 'teamPlayers']);

const selectedPageSelector = state => state.getIn(['CurrentTeamReducer', 'selectedPage']);

export const currentPlayersSelector = createSelector(playersSelector, selectedPageSelector, (players, selectedPage) => {
    const playersCount = players.count();

    const startPlayerIndex = (selectedPage - 1) * ItemsPerPage;
    const endPlayerIndex = startPlayerIndex + PageRangeDisplayed;
    
    return players.slice(startPlayerIndex, endPlayerIndex);
});
