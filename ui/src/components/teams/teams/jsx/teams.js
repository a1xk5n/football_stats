import React, { PureComponent } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Dropdown from 'react-toolbox/lib/dropdown';

import PageHeader from '../../../page-header/page-header';
import TeamsList from '../../teams-list/teams-list/teams-list';
import FavoriteTeams from '../../favorite-teams/favorite-teams';

import { routeConstants, Pages } from '../../../../constants/main-constants';

export default class Teams extends PureComponent {
    static propTypes = {
        onChangeSelectedLeague: PropTypes.func,
        isTeamsLoaded: PropTypes.bool,
        leagues: PropTypes.instanceOf(List),
        leagueTeams: PropTypes.instanceOf(List),
        onLoadTeams: PropTypes.func,
        selectedLeagueId: PropTypes.number,
        onUpdateFavoriteTeam: PropTypes.func,
        userFavoriteTeams: PropTypes.instanceOf(List),
        isFavoriteTeamsLoaded: PropTypes.bool,
        onRemoveFavoriteTeam: PropTypes.func,
    };

    componentWillMount() {
        this.updateLeagueTable(this.props.selectedLeagueId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedLeagueId !== nextProps.selectedLeagueId) {
            this.updateLeagueTable(nextProps.selectedLeagueId);
        }
    }

    updateLeagueTable = (id) => {
        this.props.onLoadTeams(id);
    };

    onUpdateFavoriteTeam = (team) => {
        if (this.props.isFavoriteTeamsLoaded) {
            this.props.onUpdateFavoriteTeam(team);
        }
    };

    getLeaguesForDropdown = () =>
        this.props.leagues.map(league => ({
            value: league.get('id'),
            label: league.get('caption'),
        }));

    handleDropdownChange = id => this.props.onChangeSelectedLeague(id);

    render() {
        const content = this.props.isTeamsLoaded ? (
            <TeamsList
                leagueTeams={this.props.leagueTeams}
                onUpdateFavoriteTeam={this.onUpdateFavoriteTeam}
                userFavoriteTeams={this.props.userFavoriteTeams}
            />
        ) : (
            <ProgressBar className='main-progress-bar' mode='indeterminate' />
        );
        const leagues = this.getLeaguesForDropdown().toJS();
        const selectedLeague = this.props.leagues.find(league => league.get('id') === this.props.selectedLeagueId);

        return (
            <div className='teams-page'>
                <PageHeader title={`${selectedLeague.get('caption')} table`}>
                    <div className='page-header__leagues-dropdown-container'>
                        <Dropdown
                            className='page-header__leagues-dropdown'
                            source={leagues}
                            value={this.props.selectedLeagueId}
                            onChange={this.handleDropdownChange}
                        />
                    </div>
                </PageHeader>

                {content}

                <FavoriteTeams
                    userFavoriteTeams={this.props.userFavoriteTeams}
                    removeTeam={this.props.onRemoveFavoriteTeam}
                    isFavoriteTeamsLoaded={this.props.isFavoriteTeamsLoaded}
                />
            </div>
        );
    }
}
