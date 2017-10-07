// @flow

import React from 'react';

import type { ErrorType } from 'types/error';

type Props = ErrorType;

export default (props:Props) => <div>Ошибка: {props.message || 'нет данных'}</div>;
