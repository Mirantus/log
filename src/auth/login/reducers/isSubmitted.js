// @flow

import { LOGIN_INIT, LOGIN, LOGIN_OK, LOGIN_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case LOGIN_INIT:
        case LOGIN:
            return false;
        case LOGIN_OK:
        case LOGIN_ERROR:
            return true;
        default:
            return state;
    }
};
