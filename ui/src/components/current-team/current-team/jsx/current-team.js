import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import LeagueTeam from '../../../../records/league-team';

import PageHeader from '../../../page-header/page-header';

import { CurrentTeamTabs } from '../../../../constants/current-team-constants';

import '../scss/current-team.scss';

class CurrentTeam extends PureComponent {
    static propTypes = {
        teamInfo: PropTypes.instanceOf(LeagueTeam),
        selectedTabId: PropTypes.number,
        onChangeTab: PropTypes.func,
        onResetSettings: PropTypes.func,
    };

    componentWillMount() {
        this.props.getCurrentTeamInfo(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.onResetSettings();
    }

    getTeamTabs = () =>
        CurrentTeamTabs.map((tab) => {
            const classes = classNames('current-team__tabs', {
                'current-team__tabs--active': this.props.selectedTabId === tab.id,
            });
            return (
                <div onClick={() => this.props.onChangeTab(tab.id)} className={classes} key={tab.id}>
                    {tab.title}
                </div>
            );
        });

    render() {
        if (!this.props.isTeamInfoLoaded) {
            return <ProgressBar className='main-progress-bar' mode='indeterminate' />;
        }
        const Constructor = CurrentTeamTabs.find(tab => tab.id === this.props.selectedTabId).constructor;

        return (
            <div className='current-team-page'>
                <PageHeader title={this.props.teamInfo.get('name')} />
                <div className='current-team__tabs-container'>{this.getTeamTabs()}</div>
                <Constructor teamId={this.props.match.params.id} />
            </div>
        );
    }
}

export default CurrentTeam;
