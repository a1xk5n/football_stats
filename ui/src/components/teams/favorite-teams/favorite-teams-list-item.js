import React, { PureComponent } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { routeConstants, Pages } from '../../../constants/main-constants';

export default class FavoriteTeamsListItem extends PureComponent {
    static propTypes = {
        userFavoriteTeams: PropTypes.instanceOf(List),
        removeTeam: PropTypes.func,
    };

    render() {
        const team = this.props.team;
        const hashForCreateNewLink = routeConstants.find(page => page.page === Pages.CURRENT_TEAM).hashForCreateNewLink;
        const pathname = hashForCreateNewLink + team.get('id');
        return (
            <li className='favorite-teams-list__item clearfix' key={team.get('id')}>
                <Link to={{ pathname }} className='favorite-teams-list__title' title={team.get('name')}>
                    {team.get('name')}
                </Link>
                <div className='favorite-teams-list__button' onClick={() => this.props.removeTeam(team)}>
                    <i className='fa fa-trash-o' />
                </div>
            </li>
        );
    }
}
