import { connect } from 'react-redux';
import _App from '../components/App';
import { selectors as userSelectors } from '../modules/user';

const { isLoggedIn } = userSelectors;

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: isLoggedIn(state)
})


const mapDispatchToProps = {
    
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App);
export default App;