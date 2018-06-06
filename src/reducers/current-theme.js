import { set_theme } from '../assets/actions';

const defaultTheme = 'light';

export default (state = defaultTheme, action) => {
    switch (action.type) {
        case set_theme:
            return action.newTheme;
        default:
            return state;
    }
};