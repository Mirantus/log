// @flow

import React from 'react';
import pure from 'recompose/pure';

import type { StateType as TweetsListType } from 'reducers/tweets/list/data';

type Props = {|
    tweets: TweetsListType
|}

const List = (props:Props) => {
    return (
        <div>
            {
                props.tweets.map(tweet => <div key={tweet.id}>{tweet.text}</div>)
            }
        </div>
    );
};

export default pure(List);
