// @flow

import Cookie from 'js-cookie';
import type { Dispatch } from 'redux';

import type { LoginType } from 'types/login';

import {
    LOGIN_INIT,
    LOGIN,
    LOGIN_OK,
    LOGIN_ERROR,
} from '../constants';

export const initLogin = () => ({ type: LOGIN_INIT });

export const login = (values:LoginType) => async (dispatch:Dispatch<Object>) => {
    dispatch({ type: LOGIN });

    try {
        const response = await fetch(
            // $FlowFixMe
            `${APP_ENV.apiUrl}/login/`,
            {
                method: 'POST',
                body: JSON.stringify(values)
            }
        );

        if (response.status === 401) {
            dispatch({
                type: LOGIN_ERROR,
                payload: { message: 'Неверный логин или пароль' }
            });
            return;
        }

        const token = await response.json();
        Cookie.set('token', token);

        dispatch({ type: LOGIN_OK });
    } catch (error) {
        dispatch({
            type: LOGIN_ERROR,
            payload: { message: 'Ошибка отправки данных' }
        });
    }
};
