import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import LeagueTableTeam from '../../../records/league-table-team';

import { routeConstants, Pages } from '../../../constants/main-constants';

export default class TableRow extends PureComponent {
    static propTypes = {
        model: PropTypes.instanceOf(LeagueTableTeam),
    };

    render() {
        const model = this.props.model;
        const hashForCreateNewLink = routeConstants.find(page => page.page === Pages.CURRENT_TEAM).hashForCreateNewLink;
        const pathname = hashForCreateNewLink + model.get('teamId');

        return (
            <tr className='table__row'>
                <td className='table__row-item'>{model.get('position')}</td>
                <td className='table__row-item'>
                    <Link to={{ pathname }} className='table__link'>
                        {model.get('caption')}
                    </Link>
                </td>
                <td className='table__row-item'>{model.get('games')}</td>
                <td className='table__row-item'>{model.get('wins')}</td>
                <td className='table__row-item'>{model.get('draws')}</td>
                <td className='table__row-item'>{model.get('losses')}</td>
                <td className='table__row-item'>{model.get('goals')}</td>
                <td className='table__row-item'>{model.get('goalsAgainst')}</td>
                <td className='table__row-item'>{model.get('points')}</td>
            </tr>
        );
    }
}
