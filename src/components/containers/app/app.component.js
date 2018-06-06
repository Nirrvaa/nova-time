import { connect } from 'react-redux';
import App from '../../view/app';
import { getCurrentThemeStyles } from './selectors'; 

const mapStateToProps = state => {
    return { 
        theme: getCurrentThemeStyles(state)
    }
}

export default connect(
    mapStateToProps
)(App);

