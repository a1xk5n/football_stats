import { Record } from 'immutable';
import moment from 'moment';

import { defaultTeamUrl } from '../constants/main-constants';

const dateFormat = 'DD.MM.YYYY';

const Player = Record({
    number: null,
    name: null,
    dateOfBirth: null,
    position: null,
    marketValue: null,
});

export default class PlayerRecord extends Player {
    static parse(player) {
        return new PlayerRecord({
            number: player.jerseyNumber || 0,
            name: player.name,
            dateOfBirth: moment(player.dateOfBirth).format(dateFormat),
            position: player.position,
            marketValue: player.marketValue ? `${player.marketValue}€` : 'no info',
        });
    }
}
