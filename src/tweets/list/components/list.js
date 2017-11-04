// @flow

import React from 'react';
import pure from 'recompose/pure';
import { Link } from 'react-router-dom';

import type { StateType as TweetsListType } from '../reducers/data';

type Props = {|
    tweets: TweetsListType,
    isRemoving: boolean,
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
                props.tweets.map(
                    tweet => (
                        <div key={tweet.id}>
                            <hr />
                            <b><small>{formatDate(tweet.date)}</small></b><br />
                            {tweet.text}<br />
                            <Link to={`/edit/${tweet.id}`}>редактировать</Link>
                            &nbsp;
                            {
                                props.isRemoving
                                    ? 'удаляется...'
                                    : (
                                        <a
                                            href={`/remove/${tweet.id}`}
                                            onClick={
                                                (e:SyntheticEvent<HTMLAnchorElement>) => {
                                                    e.preventDefault();
                                                    if (confirm('Вы действительно хотите удалить?')) {
                                                        props.onRemove(tweet.id);
                                                    }
                                                }
                                            }
                                        >удалить</a>
                                    )
                            }
                            <br />
                        </div>
                    )
                )
            }
            <hr />
        </div>
    );
};

export default pure(List);
