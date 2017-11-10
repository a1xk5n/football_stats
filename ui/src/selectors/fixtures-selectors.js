import moment from 'moment';
import { createSelector } from 'reselect';

import { currentDateRangeSelector } from '../selectors/current-date-range-fixtures-selector';

const selectedFixtureId = state => state.getIn(['CurrentTeamReducer', 'selectedFixtureId']);

const isFixtureInfoLoaded = state => state.getIn(['CurrentTeamReducer', 'isFixtureInfoLoaded']);

const availableFixtures = state => currentDateRangeSelector(state);

const getLastGames = state => state.getIn(['CurrentTeamReducer', 'selectedFixtureInfo', 'lastGames']);

export const isFixtureInfoAvailableSelector = createSelector(
    selectedFixtureId,
    availableFixtures,
    isFixtureInfoLoaded,
    (selectedFixtureId, availableFixtures, isFixtureInfoLoaded) =>
        !!availableFixtures.find(fixture => fixture.get('fixtureId') === selectedFixtureId) && isFixtureInfoLoaded,
);

export const lastGamesSelector = createSelector(getLastGames, lastGames => lastGames && lastGames.take(5));
