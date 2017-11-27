import { connect } from 'react-redux';
import _SystemCheck from '../components/SystemCheck';
import { passedSystemCheck } from '../modules/user/selectors';
import { checkStatus, updateStatus } from '../modules/user/operations';

const mapStateToProps = (state, ownProps) => ({
    passedSystemCheck: passedSystemCheck(state)    
})


const mapDispatchToProps = {
    checkStatus,
    updateStatus
} 

const SystemCheck = connect(mapStateToProps, mapDispatchToProps)(_SystemCheck);
export default SystemCheck;