import { connect } from 'react-redux';

import CurrentTeam from '../components/current-team/current-team/jsx/current-team';

import { getCurrentTeamInfo } from '../actions/current-team-actions';
import { changeTab, resetSettings } from '../actions/current-team-actions';

const mapStateToProps = state => ({
    teamInfo: state.getIn(['CurrentTeamReducer', 'teamInfo']),
    isTeamInfoLoaded: state.getIn(['CurrentTeamReducer', 'isTeamInfoLoaded']),
    selectedTabId: state.getIn(['CurrentTeamReducer', 'selectedTabId']),
});

const mapDispatchToProps = dispatch => ({
    getCurrentTeamInfo: (teamId) => {
        dispatch(getCurrentTeamInfo(teamId));
    },
    onChangeTab: (tabId) => {
        dispatch(changeTab(tabId));
    },
    onResetSettings: () => {
        dispatch(resetSettings());
    },
});

const TeamsContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentTeam);

export default TeamsContainer;
