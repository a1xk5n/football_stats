import React from 'react';

import './last-game.scss';

const LastGame = props => (
    <div className='last-game'>
        <div className='last-game__info'>
            <div className='last-game__participants'>
                {`${props.gameInfo.get('homeTeam')}-${props.gameInfo.get('awayTeam')}`}
            </div>
            <div className='last-game__date'>{props.gameInfo.get('date')}</div>
        </div>
        <div className='last-game__score'>{`${props.gameInfo.get('goalsHomeTeam')}-${props.gameInfo.get(
            'goalsAwayTeam',
        )}`}</div>
    </div>
);

LastGame.propTypes = {};

export default LastGame;
