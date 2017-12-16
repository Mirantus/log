// @flow

import type { ErrorType } from 'types/error';

import { LOGIN, LOGIN_ERROR } from '../constants.js';

import type { ActionType } from '../actions/types';

export type StateType = ?ErrorType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case LOGIN:
            return initialState;
        case LOGIN_ERROR:
            return { ...action.payload };
        default:
            return state;
    }
};
