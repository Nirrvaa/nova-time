import 'reset-css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import ThemedApp from './components/containers/app';

render(
    <Provider store={store}>
        <ThemedApp />
    </Provider>,
    document.getElementById('root')
);