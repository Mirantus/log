// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Error from 'components/error/';
import Loader from 'components/loader/';
import { removeItem } from 'items/remove/actions/';

import { fetchItems } from './actions/';
import ItemsList from './components/list';
import mapStateToProps from './selectors';

import type { StateType as ItemsType } from './reducers/data';
import type { StateType as ErrorType } from './reducers/error';

type Props = {|
    items: ItemsType,
    isLoaded: boolean,
    isFetching: boolean,
    isRemoving: boolean,
    isAuthorized: boolean,
    error: ErrorType,
    actions: {
        fetchItems: Function,
        removeItem: Function,
    }
|};

export class ItemsListContainer extends Component<Props> {
    componentDidMount() {
        const { actions, isLoaded } = this.props;

        if (!isLoaded) {
            actions.fetchItems();
        }
    }

    render() {
        const { actions, items, isFetching, isRemoving, error, isAuthorized } = this.props;

        if (isFetching) {
            return <Loader />;
        }

        if (error) {
            return <Error {...error} />;
        }

        return (
            <ItemsList
                items={items}
                isRemoving={isRemoving}
                onRemove={actions.removeItem}
                isAuthorized={isAuthorized}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchItems, removeItem }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListContainer);
