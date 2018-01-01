// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loader from 'components/loader/';
import { checkToken } from 'auth/token/actions/';
import PrivateRoute from 'components/privateRoute';
import Home from 'pages/home';
import Add from 'pages/add';
import Edit from 'pages/edit';
import Login from 'pages/login';


type Props = {|
    isTokenFetching: boolean,
    isTokenFetched: boolean,
    actions: {
        checkToken: Function,
    }
|};

export class Application extends Component<Props> {
    componentDidMount() {
        this.props.actions.checkToken();
    }

    render() {
        const { isTokenFetching, isTokenFetched } = this.props;

        if (isTokenFetching || !isTokenFetched) {
            return <Loader />;
        }

        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/add" component={Add} />
                        <PrivateRoute path="/edit/:id(\d+)" component={Edit} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    isTokenFetching: state.auth.token.isFetching,
    isTokenFetched: state.auth.token.isFetched
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ checkToken }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
