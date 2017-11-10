import moment from 'moment';
import { createSelector } from 'reselect';

const fixturesSelector = state => state.getIn(['CurrentTeamReducer', 'teamFixtures']);

const minDateSelector = state => state.getIn(['CurrentTeamReducer', 'fixturesDateFrom']);

export const currentDateRangeSelector = createSelector(fixturesSelector, minDateSelector, (fixtures, minDate) =>
    fixtures.filter(fixture => fixture.get('time').isAfter(minDate, 'days')),
);
