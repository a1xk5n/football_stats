import { Record } from 'immutable';

const League = Record({
    caption: '',
    id: null,
});

export default class LeagueRecord extends League {
    static parse(league) {
        return new LeagueRecord({
            caption: league.caption,
            id: league.id,
        });
    }
}
