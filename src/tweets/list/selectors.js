import { createSelector } from 'reselect';

export default createSelector(
    [
        state => state.tweets.list.data,
        state => state.tweets.list.isFetching,
        state => state.tweets.list.error,
        state => state.tweets.remove.isRemoving,
    ],
    (tweets, isFetching, error, isRemoving) => ({
        tweets,
        isFetching,
        error,
        isLoaded: !!tweets.length,
        isRemoving
    })
);
