// @flow

import type { TweetType } from 'types/tweet';

import { TWEET_EDIT_OK } from 'tweets/edit/constants';
import { TWEET_REMOVE_OK } from 'tweets/remove/constants';

import type { EditOkActionType } from 'tweets/edit/actions/types';
import type { RemoveOkActionType } from 'tweets/remove/actions/types';

import { TWEETS_FETCH, TWEETS_FETCH_OK } from '../constants';

import type { ActionType as FetchActionType } from '../actions/types';

type ActionType =
    | FetchActionType
    | EditOkActionType
    | RemoveOkActionType

export type StateType = Array<TweetType>;
const initialState = [];

// $FlowFixMe
export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case TWEETS_FETCH:
            return initialState;
        case TWEETS_FETCH_OK:
            return [...action.payload];
        case TWEET_EDIT_OK:
            return state.map(
                tweet => (
                    action.payload && action.payload.id && tweet.id === action.payload.id
                        // $FlowFixMe
                        ? { ...action.payload }
                        : tweet
                )
            );
        case TWEET_REMOVE_OK:
            return state.filter(
                tweet => action.payload && action.payload.id && tweet.id !== action.payload.id
            );
        default:
            return state;
    }
};
