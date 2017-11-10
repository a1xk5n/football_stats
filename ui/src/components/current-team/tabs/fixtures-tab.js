import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import DatePicker from 'react-toolbox/lib/date_picker';

import CustomPropTypes from '../../../tools/custom-prop-types';

import FixturesListItem from '../fixtures-list-item/fixtures-list-item';
import FixtureInfoContainer from '../../../containers/fixture-info-container';

import FixtureRecord from '../../../records/fixture-record';

import './fixtures-tab.scss';

class FixturesTab extends PureComponent {
    static propTypes = {
        teamId: PropTypes.string.isRequired,
        fixtures: CustomPropTypes.immutableListOf(PropTypes.instanceOf(FixtureRecord)).isRequired,
        isTeamFixturesLoaded: PropTypes.bool.isRequired,
        fixturesDateFrom: PropTypes.instanceOf(moment).isRequired,
        fixturesDateTo: PropTypes.instanceOf(moment).isRequired,
        loadTeamFixtures: PropTypes.func.isRequired,
        onChangeFixturesDateFrom: PropTypes.func.isRequired,
        onChangeFixturesDateTo: PropTypes.func.isRequired,
        onChangeSelectedFixture: PropTypes.func.isRequired,
        selectedFixtureId: PropTypes.number,
    };

    static defaultProps = {
        selectedFixtureId: null,
    };

    componentWillReceiveProps(nextProps) {
        if (!this.props.fixturesDateTo.isSame(nextProps.fixturesDateTo)) {
            nextProps.loadTeamFixtures(nextProps.teamId, nextProps.fixturesDateTo);
        }
    }

    getContent = () => {
        if (!this.props.isTeamFixturesLoaded) {
            return <ProgressBar className='main-progress-bar' mode='indeterminate' />;
        }
        return (
            <div>
                <div className='fixtures-list'>
                    {this.props.fixtures.map((fixture) => {
                        const isSelected = fixture.get('fixtureId') === this.props.selectedFixtureId;

                        return (
                            <FixturesListItem
                                key={fixture.get('fixtureId')}
                                fixture={fixture}
                                isSelected={isSelected}
                                onChangeFixture={this.props.onChangeSelectedFixture}
                            />
                        );
                    })}
                </div>
                <FixtureInfoContainer />
            </div>
        );
    };

    render() {
        const content = this.getContent();
        return (
            <div className='fixtures-tab'>
                <div className='date-picker__container'>
                    <div className='date-picker'>
                        <DatePicker
                            label='From'
                            autoOk
                            minDate={moment()
                                .subtract('1', 'days')
                                .toDate()}
                            maxDate={this.props.fixturesDateTo.toDate()}
                            value={this.props.fixturesDateFrom.toDate()}
                            onChange={this.props.onChangeFixturesDateFrom}
                        />
                    </div>
                    <div className='date-picker'>
                        <DatePicker
                            label='To'
                            autoOk
                            minDate={this.props.fixturesDateFrom.toDate()}
                            value={this.props.fixturesDateTo.toDate()}
                            onChange={this.props.onChangeFixturesDateTo}
                        />
                    </div>
                </div>
                {content}
            </div>
        );
    }
}

export default FixturesTab;
