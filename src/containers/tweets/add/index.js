// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import { initAdd, add } from 'actions/tweets/add/';
import Form from 'components/tweets/add';
import Loader from 'components/loader';

import type { StateType as ErrorType } from 'reducers/tweets/add/error';
import type { withRouterType } from 'types/withRouter';

type ownProps = {|
    isSubmitting: boolean,
    isSubmitted: boolean,
    error: ErrorType,
    actions: {
        initAdd: Function,
        add: Function,
    }
|};

type Props = ownProps & withRouterType;

export class TweetsAddContainer extends Component<Props> {
    componentDidMount() {
        this.props.actions.initAdd();
    }

    componentWillReceiveProps(nextProps:Props) {
        const { error, isSubmitted, history } = nextProps;

        if (!error && isSubmitted) {
            history.push('/');
        }
    }

    render() {
        const { isSubmitting, error, actions } = this.props;

        if (isSubmitting) {
            return <Loader />;
        }

        return <Form formError={error} actions={{ add: actions.add }} />;
    }
}

const mapStateToProps = state => ({ ...state.tweets.add });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ initAdd, add }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TweetsAddContainer));
