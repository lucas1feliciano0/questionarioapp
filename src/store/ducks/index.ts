import {combineReducers} from 'redux';
import {resettableReducer} from 'reduxsauce';

import user from './user';
import quiz from './quiz';

const resettable = resettableReducer('RESET');

const rootReducer = combineReducers({
  user: resettable(user),
  quiz: resettable(quiz),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
