import { set_theme } from '../assets/actions.json';
import { getTheme } from '../assets/themes';

export default newTheme => {
    return dispatch => {
        getTheme(newTheme)
            .then(theme => {
                dispatch({
                    type: set_theme,
                    theme
                });
            });
    };
};