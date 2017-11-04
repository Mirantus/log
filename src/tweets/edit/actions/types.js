// @flow

import type { TweetType } from 'types/tweet';
import type { ErrorType } from 'types/error';

export type FetchActionType = {|
    type: 'TWEET_FETCH',
    payload: Number
|}

export type FetchOkActionType = {|
    type: 'TWEET_FETCH_OK',
    payload: TweetType
|}

export type FetchErrorActionType = {|
    type: 'TWEET_FETCH_ERROR',
    payload: ErrorType
|}

export type EditActionType = {|
    type: 'TWEET_EDIT'
|}

export type EditOkActionType = {|
    type: 'TWEET_EDIT_OK'
|}

export type EditErrorActionType = {|
    type: 'TWEET_EDIT_ERROR',
    payload: ErrorType
|}

export type ActionType =
    | FetchActionType
    | FetchOkActionType
    | FetchErrorActionType
    | EditActionType
    | EditOkActionType
    | EditErrorActionType
