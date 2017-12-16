// @flow

import { LOGIN_OK } from '../login/constants';

import type { LoginOkActionType } from '../login/actions/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:LoginOkActionType):StateType => {
    switch (action.type) {
        case LOGIN_OK:
            return true;
        default:
            return state;
    }
};
