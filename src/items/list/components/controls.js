// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import type { ItemType } from 'types/item';

type Props = {|
    item: ItemType,
    isRemoving: boolean,
    onRemove: Function
|}

export default (props:Props) => (
    <div>
        <Link to={`/edit/${props.item.id}`}>редактировать</Link>
        &nbsp;&nbsp;
        {
            props.isRemoving
                ? 'удаляется...'
                : (
                    <a
                        href={`/remove/${props.item.id}`}
                        onClick={
                            (e:SyntheticEvent<HTMLAnchorElement>) => {
                                e.preventDefault();
                                if (confirm('Вы действительно хотите удалить?')) {
                                    props.onRemove(props.item.id);
                                }
                            }
                        }
                    >удалить</a>
                )
        }
    </div>
);
