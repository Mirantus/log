// @flow

import type { Dispatch } from 'redux';

import { apiFetchWithAuth } from 'utils/api';

import {
    ITEM_REMOVE,
    ITEM_REMOVE_OK,
    ITEM_REMOVE_ERROR,
} from '../constants';

export const removeItem = (id:number) => async (dispatch:Dispatch<Object>) => {
    dispatch({ type: ITEM_REMOVE });

    try {
        const response = await apiFetchWithAuth(`items/${id}`, 'DELETE');
        const payload = await response.json();

        dispatch({
            type: ITEM_REMOVE_OK,
            payload
        });
    } catch (error) {
        dispatch({
            type: ITEM_REMOVE_ERROR,
            payload: { message: 'Ошибка удаления' }
        });
    }
};
