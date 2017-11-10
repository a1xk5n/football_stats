import React, { PureComponent } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FavoriteTeamsListItem from './favorite-teams-list-item';

import './favorite-teams-list.scss';

export default class FavoriteTeamsList extends PureComponent {
    static propTypes = {
        userFavoriteTeams: PropTypes.instanceOf(List),
        removeTeam: PropTypes.func,
    };

    getNoTeams = () => (
        <div className='favorite-teams-list__no-teams-item favorite-teams-list__item'>
                There is no favorite teams now :(
        </div>
    );

    getUserTeams = () => (
        <ul className='favorite-teams-list'>
            {this.props.userFavoriteTeams.map(team => (
                <FavoriteTeamsListItem team={team} removeTeam={this.props.removeTeam} key={team.get('id')} />
            ))}
        </ul>
    );

    render() {
        const content = this.props.userFavoriteTeams.size ? this.getUserTeams() : this.getNoTeams();
        return <div className='favorite-teams-list__container'>{content}</div>;
    }
}
