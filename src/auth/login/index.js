// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import Loader from 'components/loader/';

import type { withRouterType } from 'types/withRouter';

import { initLogin, login } from './actions';
import Form from './components/form.js';

import type { StateType as ErrorType } from './reducers/error';

type ownProps = {|
    isAuthorized: boolean,
    isSubmitting: boolean,
    isSubmitted: boolean,
    error: ErrorType,
    actions: {
        initLogin: Function,
        login: Function,
    }
|};

type Props = ownProps & withRouterType;

export class LoginContainer extends Component<Props> {
    componentDidMount() {
        this.props.actions.initLogin();
    }

    componentWillReceiveProps(nextProps:Props) {
        if (nextProps.isAuthorized) {
            nextProps.history.replace(nextProps.location.state.from.pathname);
        }
    }

    render() {
        const { isSubmitting, error, actions } = this.props;

        if (isSubmitting) {
            return <Loader />;
        }

        return <Form formError={error} actions={{ login: actions.login }} />;
    }
}

const mapStateToProps = ({ auth }) => ({ isAuthorized: auth.isAuthorized, ...auth.login });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ initLogin, login }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));
