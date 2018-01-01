// @flow

import { LOGIN_OK } from '../login/constants';
import { TOKEN_CHECK_OK } from '../token/constants';
import { LOGOUT } from '../constants';

import type { LoginOkActionType } from '../login/actions/types';
import type { TokenCheckOkActionType } from '../token/actions/types';

type ActionType =
    | LoginOkActionType
    | TokenCheckOkActionType

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case LOGIN_OK:
        case TOKEN_CHECK_OK:
            return true;
        case LOGOUT:
            return false;
        default:
            return state;
    }
};
