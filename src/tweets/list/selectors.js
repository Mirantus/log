import { createSelector } from 'reselect';

export default createSelector(
    [
        state => state.tweets.list.data,
        state => state.tweets.list.isFetching,
        state => state.tweets.list.error,
        state => state.tweets.remove.isRemoving,
        state => state.auth.isAuthorized,
    ],
    (tweets, isFetching, error, isRemoving, isAuthorized) => ({
        tweets,
        isFetching,
        error,
        isLoaded: !!tweets.length,
        isRemoving,
        isAuthorized
    })
);
