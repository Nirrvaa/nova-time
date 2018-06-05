const themes = {
    light: './light-theme',
    dark: './dark-theme'
};

const getTheme = async theme => await import(themes[theme]);

export {
    getThere
}