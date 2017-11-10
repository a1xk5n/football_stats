import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CustomPropTypes from '../../../tools/custom-prop-types';

import LastGame from './last-game/last-game';
import FixtureInfoRecord from '../../../records/fixture-info-record';
import LastGameRecord from '../../../records/last-game-record';

import './fixture-info.scss';

export default class FixtureInfo extends PureComponent {
    static propTypes = {
        isFixtureInfoAvailable: PropTypes.bool.isRequired,
        isTeamFixturesLoaded: PropTypes.bool,
        lastGames: CustomPropTypes.immutableListOf(PropTypes.instanceOf(LastGameRecord)),
        fixtureInfo: PropTypes.instanceOf(FixtureInfoRecord),
    };

    static defaultProps = {
        lastGames: null,
        isTeamFixturesLoaded: false,
        fixtureInfo: null,
    };

    render() {
        const { fixtureInfo, isFixtureInfoAvailable, lastGames, isTeamFixturesLoaded } = this.props;

        if (!isFixtureInfoAvailable) {
            return <div />;
        }

        const lastGamesCount = lastGames.count();
        const lastGamesTitle = lastGamesCount > 1 ? `${lastGamesCount} games` : 'game';

        return (
            <div className='fixture-info-container'>
                <div className='fixture-info__title'>{`${fixtureInfo.get('homeTeam')} - ${fixtureInfo.get(
                    'awayTeam',
                )}`}</div>
                <div className='fixture-info__other-info'>
                    <div className='fixture-info__date'>{`${fixtureInfo.get('time')}`}</div>
                    <div className='fixture-info__count'>{`Head to head: ${fixtureInfo.get('count')}`}</div>
                    <div className='fixture-info__home-wins'>{`${fixtureInfo.get('homeTeam')} wins: ${fixtureInfo.get(
                        'homeTeamWins',
                    )}`}</div>
                    <div className='fixture-info__home-wins'>{`Draws: ${fixtureInfo.get('draws')}`}</div>
                    <div className='fixture-info__home-wins'>{`${fixtureInfo.get('awayTeam')} wins: ${fixtureInfo.get(
                        'awayTeamWins',
                    )}`}</div>
                    {lastGamesCount !== 0 && (
                        <div className='fixture-info__last-games-container'>
                            <div className='fixture-info__last-games-count'>{`Last ${lastGamesTitle}:`}</div>
                            <div className='fixture-info__last-games'>
                                {lastGames.map((lastGame, index) => <LastGame key={index} gameInfo={lastGame} />)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
