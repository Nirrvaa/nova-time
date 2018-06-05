import light from './light-theme';
import dark from './dark-theme';

const themes = {
    light,
    dark
};

const getTheme = theme => themes[theme];

export {
    getTheme
};