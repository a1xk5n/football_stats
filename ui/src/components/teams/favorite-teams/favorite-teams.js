import React, { PureComponent } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FavoriteTeamsList from './favorite-teams-list';
import Spinner from '../../spinner';

import './favorite-teams.scss';

export default class FavoriteTeams extends PureComponent {
    static propTypes = {
        userFavoriteTeams: PropTypes.instanceOf(List),
        removeTeam: PropTypes.func,
        isFavoriteTeamsLoaded: PropTypes.bool,
    };

    render() {
        return (
            <div className='favorite-teams-container'>
                <div className='favorite-teams__header'>My favorite teams</div>
                {this.props.isFavoriteTeamsLoaded ? (
                    <FavoriteTeamsList
                        userFavoriteTeams={this.props.userFavoriteTeams}
                        removeTeam={this.props.removeTeam}
                    />
                ) : (
                    <Spinner className='favorite-teams__spinner' />
                )}
            </div>
        );
    }
}
