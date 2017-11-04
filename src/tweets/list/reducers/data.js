// @flow

import type { TweetType } from 'types/tweet';

import { TWEET_REMOVE_OK } from 'tweets/remove/constants';

import type { RemoveOkActionType } from 'tweets/remove/actions/types';

import { TWEETS_FETCH, TWEETS_FETCH_OK } from '../constants';

import type { ActionType as FetchActionType } from '../actions/types';

type ActionType =
    | FetchActionType
    | RemoveOkActionType

export type StateType = Array<TweetType>;
const initialState = [];

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEETS_FETCH:
            return initialState;
        case TWEETS_FETCH_OK:
            return [...action.payload];
        case TWEET_REMOVE_OK:
            return state.filter(
                tweet => action.payload && action.payload.id && tweet.id !== action.payload.id
            );
        default:
            return state;
    }
};
