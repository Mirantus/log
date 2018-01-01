// @flow

import type { Dispatch } from 'redux';

import { apiFetchWithAuth } from 'utils/api';

import type { TweetType } from 'types/tweet';

import {
TWEETS_ADD_INIT,
TWEETS_ADD,
TWEETS_ADD_OK,
TWEETS_ADD_ERROR,
} from '../constants';

export const initAdd = () => ({ type: TWEETS_ADD_INIT });

export const add = (values:TweetType) => async (dispatch:Dispatch<Object>) => {
    dispatch({ type: TWEETS_ADD });

    try {
        const response = await apiFetchWithAuth('tweets/', 'PUT', values);
        await response.json();
        dispatch({ type: TWEETS_ADD_OK });
    } catch (error) {
        dispatch({
            type: TWEETS_ADD_ERROR,
            payload: { message: 'Ошибка отправки данных' }
        });
    }
};
