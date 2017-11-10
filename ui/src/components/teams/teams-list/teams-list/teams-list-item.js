import React, { PureComponent } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { routeConstants, Pages } from '../../../../constants/main-constants';

import LeagueTeam from '../../../../records/league-team';
import CheckBox from '../../checkbox/checkbox';

export default class TeamsListItem extends PureComponent {
    static propTypes = {
        team: PropTypes.instanceOf(LeagueTeam),
        onUpdateFavoriteTeam: PropTypes.func,
    };

    render() {
        const team = this.props.team;
        const hashForCreateNewLink = routeConstants.find(page => page.page === Pages.CURRENT_TEAM).hashForCreateNewLink;
        const pathname = hashForCreateNewLink + team.get('id');
        return (
            <li className='teams-list__item clearfix' key={team.get('id')}>
                <div className='logo-container'>
                    <Link to={{ pathname }} className='logo'>
                        <img
                            alt=''
                            className='logo-image'
                            src={team.get('logo') || 'http://job.pharmaglobiz.com/images/default-logo.png'}
                        />
                    </Link>
                </div>
                <div className='teams-list__content-container'>
                    <Link to={{ pathname }} className='teams-list__full-name'>
                        {team.get('name')}
                    </Link>
                    {team.get('shortName') && (
                        <h4 className='teams-list__short-name'>short name : {team.get('shortName')}</h4>
                    )}
                    <p>Squad market value: {team.get('squadMarketValue')}</p>
                </div>
                <CheckBox
                    onChange={this.props.onUpdateFavoriteTeam}
                    item={team}
                    className='favorite-team-checkbox'
                    isSelected={this.props.isTeamFavorite}
                />
            </li>
        );
    }
}
