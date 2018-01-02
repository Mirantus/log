// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import type { TweetType } from 'types/tweet';

type Props = {|
    tweet: TweetType,
    isRemoving: boolean,
    onRemove: Function
|}

export default (props:Props) => (
    <div>
        <Link to={`/edit/${props.tweet.id}`}>редактировать</Link>
        &nbsp;&nbsp;
        {
            props.isRemoving
                ? 'удаляется...'
                : (
                    <a
                        href={`/remove/${props.tweet.id}`}
                        onClick={
                            (e:SyntheticEvent<HTMLAnchorElement>) => {
                                e.preventDefault();
                                if (confirm('Вы действительно хотите удалить?')) {
                                    props.onRemove(props.tweet.id);
                                }
                            }
                        }
                    >удалить</a>
                )
        }
    </div>
);
