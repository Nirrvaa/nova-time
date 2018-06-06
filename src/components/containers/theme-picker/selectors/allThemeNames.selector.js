import { createSelector } from 'reselect';

const allThemes = state => state.allThemes;
const getAllThemeNames = (allThemes) => Object.keys(allThemes);

export default createSelector(
    [allThemes],
    getAllThemeNames
);