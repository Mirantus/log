// @flow

import type { ErrorType } from 'types/error';
import type { TweetType } from 'types/tweet';

export type RemoveActionType = {|
    type: 'TWEET_REMOVE'
|}

export type RemoveOkActionType = {|
    type: 'TWEET_REMOVE_OK',
    payload: TweetType
|}

export type RemoveErrorActionType = {|
    type: 'TWEET_REMOVE_ERROR',
    payload: ErrorType
|}

export type ActionType =
    | RemoveActionType
    | RemoveOkActionType
    | RemoveErrorActionType
