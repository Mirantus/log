// @flow

import Cookie from 'js-cookie';
import type { Dispatch } from 'redux';

import { apiFetch } from 'utils/api';

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
        const response = await apiFetch('login/', 'POST', values);

        if (response.status === 401) {
            dispatch({
                type: LOGIN_ERROR,
                payload: { message: 'Неверный логин или пароль' }
            });
            return;
        }

        const token = await response.json();
        Cookie.set('token', token, { expires: 30 });

        dispatch({ type: LOGIN_OK });
    } catch (error) {
        dispatch({
            type: LOGIN_ERROR,
            payload: { message: 'Ошибка отправки данных' }
        });
    }
};
