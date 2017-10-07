// @flow
import type { Dispatch } from 'redux';

import {
    TWEETS_FETCH,
    TWEETS_FETCH_OK,
    TWEETS_FETCH_ERROR,
} from 'constants/actions/tweets/list';

export const fetchTweets = () => async (dispatch:Dispatch<Object>) => {
    dispatch({
        type: TWEETS_FETCH
    });

    try {
        // $FlowFixMe
        const response = await fetch(`${APP_ENV.apiUrl}/tweets/`);
        const tweets = await response.json();

        dispatch({
            type: TWEETS_FETCH_OK,
            payload: tweets
        });
    } catch (error) {
        dispatch({
            type: TWEETS_FETCH_ERROR,
            payload: { message: 'Невозможно получить данные' }
        });
    }
};
