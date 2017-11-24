import { connect } from 'react-redux';
import _ReportAbuse from '../components/ReportAbuse';
import { operations as fOperations } from '../modules/report';

const { submitReport } = fOperations;


const mapStateToProps = (state, ownProps) => ({
})


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitReport: data => {
            console.log("Hit dis container");
            console.log(data);            
            dispatch(submitReport(data))
        }
    }
} 

const ReportAbuse = connect(mapStateToProps, mapDispatchToProps)(_ReportAbuse);
export default ReportAbuse;