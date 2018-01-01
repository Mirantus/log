// @flow

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Error from 'components/error/';

import type { StateType as ErrorType } from '../reducers/error';

type Props = {|
    formError: ErrorType,
    handleSubmit: Function,
    actions: {
        login: Function,
    }
|};

export const form = (props:Props) => {
    return (
        <form onSubmit={props.handleSubmit(props.actions.login)}>
            Логин: <Field id="login" name="login" component="input" type="text" required className="u-full-width" />
            Пароль: <Field id="password" name="password" component="input" type="password" required className="u-full-width" />
            <button type="submit" className="button-primary">Войти</button>
            { props.formError && <Error {...props.formError} /> }
        </form>
    );
};

export default reduxForm({
    form: 'add'
})(form);
