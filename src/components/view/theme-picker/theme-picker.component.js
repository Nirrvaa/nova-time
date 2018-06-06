import React from 'react';
import injectSheet from 'react-jss';

import styles from './theme-picker.styles';

import Theme from '../theme';

const ThemePicker = ({ classes, currentTheme, allThemes, setTheme }) => (
    <ul className={classes.themePickerList}>
        {
            allThemes.map(themeName => (
                <li className={classes.themePickerList__item} key={themeName}>
                    <Theme setTheme={setTheme}>
                        {themeName}
                    </Theme>
                </li>
            ))
        }
    </ul>
);

export default injectSheet(styles)(ThemePicker);