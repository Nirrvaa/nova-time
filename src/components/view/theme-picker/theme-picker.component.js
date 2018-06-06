import React from 'react';
import injectSheet from 'react-jss';

import styles from './theme-picker.styles';

import Theme from '../theme';

const ThemePicker = ({ classes, currentTheme, themes, setTheme }) => (
    <ul className={classes.themePickerList}>
        {
            themes.map(theme => (
                <li className={theme.isCurrent ? classes.themePickerList__item_picked: classes.themePickerList__item} key={theme.id}>
                    <Theme setTheme={setTheme} backgroundColor={theme.color}>
                        {theme.name}
                    </Theme>
                </li>
            ))
        }
    </ul>
);

export default injectSheet(styles)(ThemePicker);