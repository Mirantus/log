// @flow

import type { Dispatch } from 'redux';

import {
    TWEET_REMOVE,
    TWEET_REMOVE_OK,
    TWEET_REMOVE_ERROR,
} from '../constants';

export const removeTweet = (id:number) => async (dispatch:Dispatch<Object>) => {
    dispatch({ type: TWEET_REMOVE });

    try {
        const response = await fetch(
            // $FlowFixMe
            `${APP_ENV.apiUrl}/tweets/${id}`,
            {
                method: 'DELETE'
            }
        );

        const payload = await response.json();

        dispatch({
            type: TWEET_REMOVE_OK,
            payload
        });
    } catch (error) {
        dispatch({
            type: TWEET_REMOVE_ERROR,
            payload: { message: 'Ошибка удаления' }
        });
    }
};
