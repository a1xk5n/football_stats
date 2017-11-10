import { Record } from 'immutable';

import { defaultTeamUrl } from '../constants/main-constants';

const Team = Record({
    logo: null,
    name: null,
    shortName: null,
    id: null,
    squadMarketValue: null,
});

export default class LeagueTeam extends Team {
    static parse(team) {
        return new LeagueTeam({
            logo: team.crestUrl,
            name: team.name,
            shortName: team.shortName || '',
            id: team._links.self.href.replace(defaultTeamUrl, ''),
            squadMarketValue: team.squadMarketValue ? `${team.squadMarketValue}€` : 'no info',
        });
    }
}
