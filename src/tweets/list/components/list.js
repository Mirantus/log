// @flow

import React from 'react';
import pure from 'recompose/pure';
import { Link } from 'react-router-dom';

import Controls from './controls';

import type { StateType as TweetsListType } from '../reducers/data';

type Props = {|
    tweets: TweetsListType,
    isRemoving: boolean,
    isAuthorized: boolean,
    onRemove: Function
|}

const formatDate = (dateSql:string):string => {
    const dateObj = new Date(dateSql);
    const date = [];
    let month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    date.push(dateObj.getDate());

    month = month < 10 ? `0${month}` : month;
    date.push(month);

    if (year !== (new Date()).getFullYear()) {
        date.push(year);
    }

    return date.join('.');
};

const List = (props:Props) => {
    return (
        <div>
            {
                props.isAuthorized && (
                    <div>
                        <hr />
                        <Link to={'/add/'}>добавить</Link>
                    </div>
                )
            }
            {
                props.tweets.map(
                    tweet => (
                        <div key={tweet.id}>
                            <hr />
                            <b><small>{formatDate(tweet.date)}</small></b><br />
                            {tweet.text}<br />
                            {
                                props.isAuthorized && (
                                    <Controls
                                        tweet={tweet}
                                        isRemoving={props.isRemoving}
                                        onRemove={props.onRemove}
                                    />
                                )
                            }
                        </div>
                    )
                )
            }
            <hr />
        </div>
    );
};

export default pure(List);
