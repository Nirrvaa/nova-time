import React, { Fragment, PureComponent } from 'react';
import { ThemeProvider } from 'react-jss';
import Header from '../header';

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Fragment>
                    <Header>
                        pidor
                    </Header>
                </Fragment>
            </ThemeProvider>
        );
    }
}

export default App;