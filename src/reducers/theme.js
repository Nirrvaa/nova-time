import { set_theme } from '../assets/actions';

const defaultTheme = 'light';

export default (state = defaultTheme, action) => {
    switch (action.type) {
        case set_theme:
            return action.theme || defaultTheme;
        default:
            return state;
    }
};