// @flow

import type { Dispatch } from 'redux';

import { apiFetchWithAuth } from 'utils/api';

import type { ItemType } from 'types/item';

import {
    ITEMS_ADD_INIT,
    ITEMS_ADD,
    ITEMS_ADD_OK,
    ITEMS_ADD_ERROR,
} from '../constants';

export const initAdd = () => ({ type: ITEMS_ADD_INIT });

export const add = (values: ItemType) => async (dispatch: Dispatch<Object>) => {
    dispatch({ type: ITEMS_ADD });

    try {
        const response = await apiFetchWithAuth('items/', 'PUT', values);
        await response.json();
        dispatch({ type: ITEMS_ADD_OK });
    } catch (error) {
        dispatch({
            type: ITEMS_ADD_ERROR,
            payload: { message: 'Ошибка отправки данных' }
        });
    }
};
