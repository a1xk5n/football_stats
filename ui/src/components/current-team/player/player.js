import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PlayerRecord from '../../../records/player-record';

import './player.scss';

export default class Player extends PureComponent {
    static propTypes = {
        playerInfo: PropTypes.instanceOf(PlayerRecord).isRequired,
    };
    render() {
        const playerInfo = this.props.playerInfo;
        return (
            <div className='player clearfix'>
                <div className='player__content-container'>
                    <div className='player__full-name'>{`${playerInfo.get('number')}. ${playerInfo.get('name')}`}</div>
                    {playerInfo.get('dateOfBirth') && (
                        <h4 className='player__date-of-birth '>Date of birth: {playerInfo.get('dateOfBirth')}</h4>
                    )}
                    <p>Position: {playerInfo.get('position')}</p>
                    <p>Squad market value: {playerInfo.get('marketValue')}</p>
                </div>
            </div>
        );
    }
}
