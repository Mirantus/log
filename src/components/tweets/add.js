// @flow

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Error from 'components/error';

import type { StateType as ErrorType } from 'reducers/tweets/add/error';

type Props = {|
    formError: ErrorType,
    handleSubmit: Function,
    actions: {
        add: Function,
    }
|};

export const form = (props:Props) => {
    return (
        <form onSubmit={props.handleSubmit(props.actions.add)}>
            <Field id="text" name="text" component="textarea" required className="u-full-width" />
            <button type="submit" className="button-primary">Добавить</button>
            { props.formError && <Error {...props.formError} /> }
        </form>
    );
};

export default reduxForm({
    form: 'add'
})(form);
