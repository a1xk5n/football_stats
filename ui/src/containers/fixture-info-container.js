import { connect } from 'react-redux';

import FixtureInfo from '../components/current-team/fixture-info/fixture-info';

import { isFixtureInfoAvailableSelector, lastGamesSelector } from '../selectors/fixtures-selectors';
import { currentDateRangeSelector } from '../selectors/current-date-range-fixtures-selector';

const mapStateToProps = state => ({
    fixtureInfo: state.getIn(['CurrentTeamReducer', 'selectedFixtureInfo']),
    isFixtureInfoAvailable: isFixtureInfoAvailableSelector(state),
    lastGames: lastGamesSelector(state),
});

const mapDispatchToProps = dispatch => ({});

const FixtureInfoContainer = connect(mapStateToProps, mapDispatchToProps)(FixtureInfo);

export default FixtureInfoContainer;
