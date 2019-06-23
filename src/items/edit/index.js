// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import Loader from 'components/loader/';
import Error from 'components/error/';

import type { ItemType } from 'types/item';
import type { withRouterType } from 'types/withRouter';

import { initEdit, fetchItem, editItem } from './actions';
import Form from './components/form.js';

import type { StateType as ErrorType } from './reducers/editError';

type ownProps = {|
    isFetching: boolean,
    data: ItemType,
    fetchError: ErrorType,
    isSubmitting: boolean,
    isSubmitted: boolean,
    editError: ErrorType,
    actions: {
        initEdit: Function,
        fetchItem: Function,
        editItem: Function,
    }
|};

type Props = ownProps & withRouterType;

export class ItemsEditContainer extends Component<Props> {
    componentDidMount() {
        const { match, actions } = this.props;

        actions.initEdit();
        actions.fetchItem(match.params.id);
    }

    componentWillReceiveProps(nextProps:Props) {
        const { editError, isSubmitted, history } = nextProps;

        if (!editError && isSubmitted) {
            history.push('/');
        }
    }

    render() {
        const { isFetching, data, fetchError, isSubmitting, editError, actions } = this.props;

        if (isFetching || isSubmitting) {
            return <Loader />;
        }

        if (fetchError) {
            return <Error {...fetchError} />;
        }

        if (!data) {
            return <Loader />;
        }

        return <Form formError={editError} onSubmit={actions.editItem} data={data} />;
    }
}

const mapStateToProps = state => ({ ...state.items.edit });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ initEdit, fetchItem, editItem }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemsEditContainer));
