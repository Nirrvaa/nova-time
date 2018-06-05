import { connect } from 'react-redux';
import App from '../../view/app';
import { getTheme } from './selectors'; 

const mapStateToProps = state => {
    return { 
        theme: getTheme(state) 
    }
}

export default connect(
    mapStateToProps
)(App);

