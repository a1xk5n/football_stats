import { connect } from 'react-redux';

import InfoTab from '../components/current-team/tabs/info-tab';

import { changePageNumber } from '../actions/current-team-actions';

import { currentPlayersSelector } from '../selectors/players-selector';

const mapStateToProps = state => ({
    selectedPage: state.getIn(['CurrentTeamReducer', 'selectedPage']),
    players: currentPlayersSelector(state),
    delaultPlayersCount: state.getIn(['CurrentTeamReducer', 'teamPlayers']).count(),
});

const mapDispatchToProps = dispatch => ({
    onChangeSelectedPage: (pageNumber) => {
        dispatch(changePageNumber(pageNumber));
    },
});

const InfoTabContainer = connect(mapStateToProps, mapDispatchToProps)(InfoTab);

export default InfoTabContainer;
