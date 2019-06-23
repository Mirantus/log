// @flow

import type { Dispatch } from 'redux';

import { apiFetch, apiFetchWithAuth } from 'utils/api';

import type { ItemType } from 'types/item';

import {
    ITEM_EDIT_INIT,
    ITEM_FETCH,
    ITEM_FETCH_OK,
    ITEM_FETCH_ERROR,
    ITEM_EDIT,
    ITEM_EDIT_OK,
    ITEM_EDIT_ERROR,
} from '../constants';

export const initEdit = () => ({ type: ITEM_EDIT_INIT });

export const fetchItem = (id:Number) => async (dispatch:Dispatch<Object>) => {
    dispatch({
        type: ITEM_FETCH,
        payload: id
    });

    try {
        const response = await apiFetch(`items/${id.toString()}`);
        const item = await response.json();

        dispatch({
            type: ITEM_FETCH_OK,
            payload: item
        });
    } catch (error) {
        dispatch({
            type: ITEM_FETCH_ERROR,
            payload: { message: 'Невозможно получить данные' }
        });
    }
};

export const editItem = (id:Number, values:ItemType) => async (dispatch:Dispatch<Object>) => {
    dispatch({ type: ITEM_EDIT });

    try {
        const response = await apiFetchWithAuth(`items/${id.toString()}`, 'POST', values);
        const item = await response.json();
        dispatch({
            type: ITEM_EDIT_OK,
            payload: item
        });
    } catch (error) {
        dispatch({
            type: ITEM_EDIT_ERROR,
            payload: { message: 'Ошибка отправки данных' }
        });
    }
};
