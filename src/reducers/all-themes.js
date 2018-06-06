import { all_themes } from '../assets/actions';

const allThemes = {};

export default (state = allThemes, action) => {
    switch (action.type) {
        case all_themes:
            return action.allThemes;
        default:
            return state;
    }
};