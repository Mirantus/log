// @flow

import React from 'react';
import pure from 'recompose/pure';

import type { StateType as TweetsListType } from 'reducers/tweets/list/data';

type Props = {|
    tweets: TweetsListType
|}

const List = (props:Props) => {
    return (
        <ul>
            {
                props.tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)
            }
        </ul>
    );
};

export default pure(List);
