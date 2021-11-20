import {createActions, createReducer} from 'reduxsauce';

type INITIAL_STATE_PROPS = {
  name: string | undefined;
};

// Types & Creators

export const {Types, Creators} = createActions(
  {
    setName: ['name'],
  },
  {prefix: '@user/'},
);

// Reducer

const INITIAL_STATE: INITIAL_STATE_PROPS = {
  name: undefined,
};

// Handlers

export const setName = (state = INITIAL_STATE, action: {name: string}) => {
  return {...state, name: action.name};
};

export const HANDLERS = {
  [Types.SET_NAME]: setName,
};

export default createReducer(INITIAL_STATE, HANDLERS);
