// @flow

import type { Dispatch } from 'redux';

import type { TweetType } from 'types/tweet';

import {
    TWEET_EDIT_INIT,
    TWEET_FETCH,
    TWEET_FETCH_OK,
    TWEET_FETCH_ERROR,
    TWEET_EDIT,
    TWEET_EDIT_OK,
    TWEET_EDIT_ERROR,
} from '../constants';

export const initEdit = () => ({ type: TWEET_EDIT_INIT });

export const fetchTweet = (id:Number) => async (dispatch:Dispatch<Object>) => {
    dispatch({
        type: TWEET_FETCH,
        payload: id
    });

    try {
        // $FlowFixMe
        const response = await fetch(`${APP_ENV.apiUrl}/tweets/${id}`);
        const tweet = await response.json();

        dispatch({
            type: TWEET_FETCH_OK,
            payload: tweet
        });
    } catch (error) {
        dispatch({
            type: TWEET_FETCH_ERROR,
            payload: { message: 'Невозможно получить данные' }
        });
    }
};

export const editTweet = (id:Number, values:TweetType) => async (dispatch:Dispatch<Object>) => {
    dispatch({ type: TWEET_EDIT });

    try {
        const response = await fetch(
            // $FlowFixMe
            `${APP_ENV.apiUrl}/tweets/${id}`,
            {
                method: 'POST',
                body: JSON.stringify(values)
            }
        );
        await response.json();
        dispatch({ type: TWEET_EDIT_OK });
    } catch (error) {
        dispatch({
            type: TWEET_EDIT_ERROR,
            payload: { message: 'Ошибка отправки данных' }
        });
    }
};
