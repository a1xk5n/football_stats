import { connect } from 'react-redux';

import Teams from '../components/teams/teams/jsx/teams';

import { changeSelectedLeague } from '../actions/main-actions';
import { loadTeams } from '../actions/teams-actions';
import { updateFavoriteTeam, removeFavoriteTeam } from '../actions/user-actions';

const mapStateToProps = state => {
    return {
        leagues: state.getIn(['MainReducer', 'leagues']),
        selectedLeagueId: state.getIn(['MainReducer', 'selectedLeagueId']),
        isTeamsLoaded: state.getIn(['TeamsReducer', 'isTeamsLoaded']),
        leagueTeams: state.getIn(['TeamsReducer', 'leagueTeams']),
        userFavoriteTeams: state.getIn(['UserReducer', 'favoriteTeams']),
        isFavoriteTeamsLoaded: state.getIn(['UserReducer', 'isFavoriteTeamsLoaded']),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeSelectedLeague: id => {
            dispatch(changeSelectedLeague(id));
        },
        onLoadTeams: id => {
            dispatch(loadTeams(id));
        },
        onUpdateFavoriteTeam: team => {
            dispatch(updateFavoriteTeam(team));
        },
        onRemoveFavoriteTeam: team => {
            dispatch(removeFavoriteTeam(team));
        },
    };
};

const TeamsContainer = connect(mapStateToProps, mapDispatchToProps)(Teams);

export default TeamsContainer;
