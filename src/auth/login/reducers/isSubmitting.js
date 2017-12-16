// @flow

import { LOGIN, LOGIN_OK, LOGIN_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case LOGIN:
            return true;
        case LOGIN_OK:
        case LOGIN_ERROR:
            return initialState;
        default:
            return state;
    }
};
