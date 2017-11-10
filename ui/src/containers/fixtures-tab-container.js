import { connect } from 'react-redux';

import FixturesTab from '../components/current-team/tabs/fixtures-tab';

import {
    changeFixturesDateFrom,
    changeFixturesDateTo,
    loadTeamFixtures,
    changeSelectedFixture,
} from '../actions/current-team-actions';

import { currentDateRangeSelector } from '../selectors/current-date-range-fixtures-selector';

const mapStateToProps = state => ({
    fixturesDateFrom: state.getIn(['CurrentTeamReducer', 'fixturesDateFrom']),
    fixturesDateTo: state.getIn(['CurrentTeamReducer', 'fixturesDateTo']),
    isTeamFixturesLoaded: state.getIn(['CurrentTeamReducer', 'isTeamFixturesLoaded']),
    fixtures: currentDateRangeSelector(state),
    selectedFixtureId: state.getIn(['CurrentTeamReducer', 'selectedFixtureId']),
});

const mapDispatchToProps = dispatch => ({
    onChangeFixturesDateFrom: (date) => {
        dispatch(changeFixturesDateFrom(date));
    },
    onChangeFixturesDateTo: (date) => {
        dispatch(changeFixturesDateTo(date));
    },
    loadTeamFixtures: (teamId, date) => {
        dispatch(loadTeamFixtures(teamId, date));
    },
    onChangeSelectedFixture: (fixtureId) => {
        dispatch(changeSelectedFixture(fixtureId));
    },
});

const FixturesTabContainer = connect(mapStateToProps, mapDispatchToProps)(FixturesTab);

export default FixturesTabContainer;
