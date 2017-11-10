import { Record, List } from 'immutable';
import moment from 'moment';

import { defaultFixturesUrl } from '../constants/main-constants';

import LastGameRecord from './last-game-record';

const FixtureInfo = Record({
    homeTeam: null,
    awayTeam: null,
    time: null,
    homeTeamWins: null,
    awayTeamWins: null,
    draws: null,
    count: null,
    fixtureId: null,
    lastGames: List(),
});

export default class FixtureInfoRecord extends FixtureInfo {
    static parse(fixtureInfo) {
        return new FixtureInfoRecord({
            homeTeam: fixtureInfo.fixture.homeTeamName,
            awayTeam: fixtureInfo.fixture.awayTeamName,
            time: moment(fixtureInfo.fixture.date).format('MMMM Do, YYYY HH:mm zz'),
            homeTeamWins: fixtureInfo.head2head.homeTeamWins || 0,
            awayTeamWins: fixtureInfo.head2head.awayTeamWins || 0,
            draws: fixtureInfo.head2head.draws || 0,
            count: fixtureInfo.head2head.count || 0,
            fixtureId: parseInt(fixtureInfo.fixture._links.self.href.replace(defaultFixturesUrl, ''), 10),
            lastGames: List(fixtureInfo.head2head.fixtures.map(lastGame => LastGameRecord.parse(lastGame))),
        });
    }
}
