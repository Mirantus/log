import { createSelector } from 'reselect';

export default createSelector(
    [
        state => state.tweets.list.data,
        state => state.tweets.list.isFetching,
        state => state.tweets.list.error,
    ],
    (tweets, isFetching, error) => ({
        tweets,
        isFetching,
        error,
        isLoaded: !!tweets.length
    })
);
