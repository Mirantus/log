// @flow

import type { Dispatch } from 'redux';

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
        const response = await fetch(
            // $FlowFixMe
            `${APP_ENV.apiUrl}/tweets/`,
            {
                method: 'POST',
                body: JSON.stringify(values)
            }
        );
        await response.json();
        dispatch({ type: TWEETS_ADD_OK });
    } catch (error) {
        dispatch({
            type: TWEETS_ADD_ERROR,
            payload: { message: 'Ошибка отправки данных' }
        });
    }
};
