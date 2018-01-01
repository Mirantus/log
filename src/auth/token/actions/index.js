// @flow

import Cookie from 'js-cookie';
import type { Dispatch } from 'redux';

import { apiFetch } from 'utils/api';

import {
    TOKEN_CHECK,
    TOKEN_CHECK_OK,
    TOKEN_CHECK_ERROR,
} from '../constants';

export const checkToken = () => async (dispatch:Dispatch<Object>) => {
    dispatch({ type: TOKEN_CHECK });

    try {
        let token = Cookie.get('token');
        const response = await apiFetch('token/', 'GET', { token });

        token = await response.json();
        Cookie.set('token', token, { expires: 30 });

        dispatch({ type: TOKEN_CHECK_OK });
    } catch (error) {
        dispatch({
            type: TOKEN_CHECK_ERROR,
        });
    }
};
