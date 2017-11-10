import React, { PureComponent } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';

import { TableHeaders } from '../../../constants/league-table-constants';

import TableRow from '../table/table-row';

import './table.scss';

export default class Table extends PureComponent {
    static propTypes = {
        teams: PropTypes.instanceOf(List),
    };

    getTableHeader() {
        return (
            <thead>
                <tr>
                    {TableHeaders.map((header, index) => (
                        <th className='table__header-item' key={index}>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }

    getTableBody() {
        return <tbody>{this.props.teams.map((team, index) => <TableRow model={team} key={index} />)}</tbody>;
    }

    render() {
        return (
            <table className='table'>
                {this.getTableHeader()}
                {this.getTableBody()}
            </table>
        );
    }
}
