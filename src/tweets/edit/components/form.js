// @flow

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import type { FormProps } from 'redux-form';

import Error from 'components/error/';

import type { TweetType } from 'types/tweet';

import type { StateType as ErrorType } from '../reducers/editError';

type ownProps = {|
    formError: ErrorType,
    data: TweetType,
    onSubmit: Function
|};

type Props = ownProps & FormProps;

export const form = (props:Props) => {
    const onSubmit = (values) => {
        props.onSubmit(props.data.id, values);
    };

    return (
        <form onSubmit={props.handleSubmit(onSubmit)}>
            <Field id="text" name="text" component="textarea" required className="u-full-width" />
            <button type="submit" className="button-primary">Сохранить</button>
            { props.formError && <Error {...props.formError} /> }
        </form>
    );
};

export default (props:Props) => {
    const ConnectedForm = reduxForm({
        form: 'editTweet',
        initialValues: {
            text: props.data.text
        }
    })(form);

    return <ConnectedForm {...props} />;
};
