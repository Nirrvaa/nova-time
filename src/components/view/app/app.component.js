import React, { Fragment } from 'react';
import { ThemeProvider } from 'react-jss';

import Header from '../header';


const App = ({ theme }) => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <Header>
                pidor
            </Header>
        </Fragment>
    </ThemeProvider>
);

export default App;