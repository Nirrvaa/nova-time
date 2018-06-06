import { connect } from 'react-redux';
import { setTheme } from '../../../actions';
import { allThemesData } from './selectors'; 

import ThemePicker from '../../view/theme-picker';

const mapStateToProps = state => ({
    currentTheme: state.currentTheme,
    themes: allThemesData(state)
});

const mapDispatchToProps = dispatch => {
    return { 
        setTheme(newTheme) {
            dispatch(setTheme(newTheme));
        } 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThemePicker);

