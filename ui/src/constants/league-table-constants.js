import keyMirror from 'keymirror';

export const ActionTypes = keyMirror({
    LEAGUE_TABLE_REQUEST: null,
    LEAGUE_TABLE_RESPONSE: null,
    LEAGUE_TABLE_FAIL: null,
});

export const TableHeaders = ['Position', 'Team', 'G', 'W', 'D', 'L', 'GS', 'GC', 'P'];
