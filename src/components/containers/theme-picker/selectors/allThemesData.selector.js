import { createSelector } from 'reselect';
import nanoid from 'nanoid';

const allThemes = state => state.allThemes;
const currentTheme = state => state.currentTheme;

const getAllThemeNames = (allThemes, currentTheme) => {
    const result = [];

    for (let name in allThemes) {
        const item = allThemes[name];
        const color = item.backgroundContrast;
        const isCurrent = name === currentTheme;
        const id = nanoid();

        result.push({
            name,
            color,
            isCurrent,
            id
        });
    }

    return result;
};

export default createSelector(
    [allThemes, currentTheme],
    getAllThemeNames
);