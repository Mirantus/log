// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Error from 'components/error/';
import Loader from 'components/loader/';
import { removeTweet } from 'tweets/remove/actions/';

import { fetchTweets } from './actions/';
import TweetsList from './components/list';
import mapStateToProps from './selectors';

import type { StateType as TweetsType } from './reducers/data';
import type { StateType as ErrorType } from './reducers/error';

type Props = {|
    tweets: TweetsType,
    isLoaded: boolean,
    isFetching: boolean,
    isRemoving: boolean,
    error: ErrorType,
    actions: {
        fetchTweets: Function,
        removeTweet: Function,
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
        const { actions, tweets, isFetching, isRemoving, error } = this.props;

        if (isFetching) {
            return <Loader />;
        }

        if (error) {
            return <Error {...error} />;
        }

        return (
            <TweetsList tweets={tweets} isRemoving={isRemoving} onRemove={actions.removeTweet} />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchTweets, removeTweet }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TweetsListContainer);
