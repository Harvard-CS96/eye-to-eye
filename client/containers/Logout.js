import { connect } from 'react-redux';
import _Logout from '../components/Logout';
import {
    selectors as userSelectors,
    operations as userOperations
} from '../modules/user';

const { getUserId } = userSelectors;
const { logout } = userOperations;

const mapStateToProps = (state, ownProps) => ({
    userId: getUserId(state)
})


const mapDispatchToProps = {
    logout
} 

const Logout = connect(mapStateToProps, mapDispatchToProps)(_Logout);
export default Logout;