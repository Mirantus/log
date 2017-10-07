// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTweets } from 'actions/tweets/list';
import TweetsList from 'components/tweets/list';
import Error from 'components/error';
import Loader from 'components/loader';

import type { StateType as TweetsType } from 'reducers/tweets/list/data';
import type { StateType as ErrorType } from 'reducers/tweets/list/error';

import mapStateToProps from './selectors';

type Props = {|
    tweets: TweetsType,
    isLoaded: boolean,
    isFetching: boolean,
    error: ErrorType,
    actions: {
        fetchTweets: Function
    }
|};

export class TweetsListContainer extends Component<Props> {
    componentDidMount() {
        const { actions, isLoaded } = this.props;

        if (!isLoaded) {
            actions.fetchTweets();
        }
    }

    render() {
        const { tweets, isFetching, error } = this.props;

        if (isFetching) {
            return <Loader />;
        }

        if (error) {
            return <Error {...error} />;
        }

        return <TweetsList tweets={tweets} />;
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchTweets }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TweetsListContainer);
