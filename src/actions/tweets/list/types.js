// @flow

import type { TweetType } from 'types/tweets/tweet';
import type { ErrorType } from 'types/error';

export type FetchActionType = {|
    type: 'TWEETS_FETCH'
|}

export type OkActionType = {|
    type: 'TWEETS_FETCH_OK',
    payload: Array<TweetType>
|}

export type ErrorActionType = {|
    type: 'TWEETS_FETCH_ERROR',
    payload: ErrorType
|}

export type ActionType =
    | FetchActionType
    | OkActionType
    | ErrorActionType
