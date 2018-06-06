import { combineReducers } from 'redux';

import currentTheme from './current-theme';
import allThemes from './all-themes';

export default combineReducers({
    currentTheme,
    allThemes
});