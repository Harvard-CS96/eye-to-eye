import { connect } from 'react-redux';
import _SubmitFeedbackButton from '../components/SubmitFeedbackButton';
import { operations as fOperations } from '../modules/feedback';

const { submitFeedback } = fOperations;

const mapStateToProps = (state, ownProps) => ({

})


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitFeedback: feedback => {
            console.log("Hit container")
            const { rating } = ownProps;
            console.log(rating);            
            dispatch(submitFeedback(rating))
        }
    }
} 

// const mapDispatchToProps = (dispatch, ownProps) => {
//     const { id } = ownProps;
//     return {
//         setAnswer: answer => {
//             console.log(id, answer)
//             dispatch(setAnswer(id, answer))
//         }
//     }
// } 

const SubmitFeedbackButton = connect(mapStateToProps, mapDispatchToProps)(_SubmitFeedbackButton);
export default SubmitFeedbackButton;