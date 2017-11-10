import { Record } from 'immutable';
import moment from 'moment';
import { defaultFixturesUrl } from '../constants/main-constants';

const Fixture = Record({
    homeTeam: null,
    awayTeam: null,
    time: null,
    homeTeamGoals: null,
    awayTeamGoals: null,
    fixtureId: null,
});

export default class FixtureRecord extends Fixture {
    static parse(fixture) {
        return new FixtureRecord({
            homeTeam: fixture.homeTeamName,
            awayTeam: fixture.awayTeamName,
            time: moment(fixture.date),
            homeTeamGoals: fixture.result.goalsHomeTeam,
            awayTeamGoals: fixture.result.goalsAwayTeam,
            fixtureId: parseInt(fixture._links.self.href.replace(defaultFixturesUrl, ''), 10),
        });
    }
}
