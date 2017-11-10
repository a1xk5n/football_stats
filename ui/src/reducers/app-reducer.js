import { combineReducers } from 'redux-immutable';

import MainReducer from './main-reducer';
import LeagueTableReducer from './league-table-reducer';
import TeamsReducer from './teams-reducer';
import CurrentTeamReducer from './current-team-reducer';
import UserReducer from './user-reducer';

const AppReducer = combineReducers({ MainReducer, LeagueTableReducer, TeamsReducer, CurrentTeamReducer, UserReducer });

export default AppReducer;
