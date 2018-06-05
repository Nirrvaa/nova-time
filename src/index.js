import React from 'react';
import { render } from 'react-dom';

import lightTheme from './assets/themes/light-theme';
import App from './components/view/app';

render(
    <App theme={lightTheme} />,
    document.getElementById('root')
);