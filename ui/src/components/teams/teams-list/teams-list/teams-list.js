import React, { PureComponent } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { routeConstants, Pages } from '../../../../constants/main-constants';

import TeamsListItem from './teams-list-item';

import './teams-list.scss';

export default class TeamsList extends PureComponent {
    static propTypes = {
        leagueTeams: PropTypes.instanceOf(List),
        onUpdateFavoriteTeam: PropTypes.func,
    };

    render() {
        return (
            <div className='teams-list__container'>
                <ul className='teams-list'>
                    {this.props.leagueTeams.map((team) => {
                        const isSelected = !!this.props.userFavoriteTeams.find(
                            userFavoriteTeam => userFavoriteTeam.get('id') === team.get('id'),
                        );
                        return (
                            <TeamsListItem
                                team={team}
                                key={team.get('id')}
                                onUpdateFavoriteTeam={this.props.onUpdateFavoriteTeam}
                                isTeamFavorite={isSelected}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}
