import React from 'react';
import { connect } from 'react-redux';

import App from 'src/components/view/app';

const mapStateToProps = (state, ownProps) =>({
    active: ownProps.filter === state.visibilityFilter,
    count: getTodosByFilter(state.todos, ownProps.filter).length
});

const ThemedApp = connect(
    mapStateToProps
)(App);