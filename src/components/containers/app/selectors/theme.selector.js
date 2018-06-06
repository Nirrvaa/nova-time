import { createSelector } from 'reselect';

const currentTheme = state => state.currentTheme;
const allThemes = state => state.allThemes;

const getCurrentThemeStyles = (currentTheme, allThemes) => allThemes[currentTheme];

export default createSelector(
    [currentTheme, allThemes],
    getCurrentThemeStyles
);