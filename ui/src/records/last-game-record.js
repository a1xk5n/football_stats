import { Record, List } from 'immutable';
import moment from 'moment';

const LastGame = Record({
    homeTeam: null,
    awayTeam: null,
    date: null,
    goalsAwayTeam: null,
    goalsHomeTeam: null,
});

export default class LastGameRecord extends LastGame {
    static parse(lastGame) {
        return new LastGameRecord({
            homeTeam: lastGame.homeTeamName,
            awayTeam: lastGame.awayTeamName,
            date: moment(lastGame.date).format('DD.MM.YYYY'),
            goalsAwayTeam: lastGame.result.extraTime
                ? lastGame.result.extraTime.goalsAwayTeam
                : lastGame.result.goalsAwayTeam,
            goalsHomeTeam: lastGame.result.extraTime
                ? lastGame.result.extraTime.goalsHomeTeam
                : lastGame.result.goalsHomeTeam,
        });
    }
}
