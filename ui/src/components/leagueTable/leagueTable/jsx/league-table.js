import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import Dropdown from 'react-toolbox/lib/dropdown';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import PageHeader from '../../../page-header/page-header';
import Table from '../../table/table';

export default class LeagueTable extends PureComponent {
    static propTypes = {
        onChangeSelectedLeague: PropTypes.func,
        isTableLoaded: PropTypes.bool,
        leagueTableTeams: PropTypes.instanceOf(List),
        leagues: PropTypes.instanceOf(List),
        onLoadLeagueTableTeams: PropTypes.func,
        selectedLeagueId: PropTypes.number,
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
        this.props.onLoadLeagueTableTeams(id);
    };

    getTableMarkup = () => (
        <div className='table-container'>
            <Table teams={this.props.leagueTableTeams} />
        </div>
    );
    getLeaguesForDropdown = () => this.props.leagues.map(league => ({
        value: league.get('id'),
        label: league.get('caption'),
    }));

    handleDropdownChange = id => this.props.onChangeSelectedLeague(id);

    render() {
        const content = this.props.isTableLoaded ? (
            this.getTableMarkup()
        ) : (
            <ProgressBar className='main-progress-bar' mode='indeterminate' />
        );
        const leagues = this.getLeaguesForDropdown().toJS();
        const selectedLeague = this.props.leagues.find(league => league.get('id') === this.props.selectedLeagueId);

        return (
            <div>
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
            </div>
        );
    }
}
