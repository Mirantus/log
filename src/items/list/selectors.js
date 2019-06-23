import { createSelector } from 'reselect';

export default createSelector(
    [
        state => state.items.list.data,
        state => state.items.list.isFetching,
        state => state.items.list.error,
        state => state.items.remove.isRemoving,
        state => state.auth.isAuthorized,
    ],
    (items, isFetching, error, isRemoving, isAuthorized) => ({
        items,
        isFetching,
        error,
        isLoaded: !!items.length,
        isRemoving,
        isAuthorized
    })
);
