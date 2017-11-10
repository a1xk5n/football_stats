import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FixtureRecord from '../../../records/fixture-record';

import './fixtures-list-item.scss';

export default class FixtureListItem extends PureComponent {
    static propTypes = {
        fixture: PropTypes.instanceOf(FixtureRecord).isRequired,
        isSelected: PropTypes.bool.isRequired,
        onChangeFixture: PropTypes.func.isRequired,
    };

    onChangeFixture = () => {
        this.props.onChangeFixture(this.props.fixture.get('fixtureId'));
    };

    render() {
        const fixture = this.props.fixture;

        const classes = classnames('fixtures-list-item', 'clearfix', {
            'fixtures-list-item_selected': this.props.isSelected,
        });
        return (
            <div className={classes} onClick={this.onChangeFixture}>
                <div className='fixtures-list-item__content-container'>
                    <div className='fixtures-list-item__title'>{`${fixture.get('homeTeam')} - ${fixture.get(
                        'awayTeam',
                    )}`}</div>
                    <p>{fixture.get('time').format('DD.MM.YYYY HH:mm')}</p>
                </div>
            </div>
        );
    }
}
