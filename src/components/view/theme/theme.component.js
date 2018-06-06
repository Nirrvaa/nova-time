import React from 'react';
import injectSheet from 'react-jss';

import styles from './theme.styles';

const Theme = ({ classes, children, setTheme }) => (
    <button className={classes.themeButton} onClick={() => setTheme(children)}>
        {children}
    </button>
);

export default injectSheet(styles)(Theme);