// @flow

import { TOKEN_CHECK, TOKEN_CHECK_OK, TOKEN_CHECK_ERROR } from '../constants';

import type { ActionType } from '../actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TOKEN_CHECK:
            return true;
        case TOKEN_CHECK_OK:
        case TOKEN_CHECK_ERROR:
            return initialState;
        default:
            return state;
    }
};
