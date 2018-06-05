import React from 'react';
import injectSheet from 'react-jss';

import styles from './header.styles';

const Header = ({ classes, children }) => (
    <header className={classes.header}>
        <h1 className='header__logo'>
            <span className="header__caption">N</span>
        </h1>

        <button className='header__button'>
            {children}
        </button>
    </header>
);

export default injectSheet(styles)(Header);