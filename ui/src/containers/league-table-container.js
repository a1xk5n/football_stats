import { connect } from 'react-redux';

import { changeSelectedLeague } from '../actions/main-actions';
import { loadLeagueTableTeams } from '../actions/league-table-actions';

import LeagueTable from '../components/leagueTable/leagueTable/jsx/league-table';

const mapStateToProps = state => ({
    leagues: state.get('MainReducer').get('leagues'),
    selectedLeagueId: state.get('MainReducer').get('selectedLeagueId'),
    isTableLoaded: state.get('LeagueTableReducer').get('isTableLoaded'),
    leagueTableTeams: state.get('LeagueTableReducer').get('leagueTableTeams'),
});

const mapDispatchToProps = dispatch => ({
    onChangeSelectedLeague: (id) => {
        dispatch(changeSelectedLeague(id));
    },
    onLoadLeagueTableTeams: (id) => {
        dispatch(loadLeagueTableTeams(id));
    },
});

const LeagueTableContainer = connect(mapStateToProps, mapDispatchToProps)(LeagueTable);

export default LeagueTableContainer;
