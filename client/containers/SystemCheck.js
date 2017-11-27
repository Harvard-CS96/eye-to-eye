import { connect } from 'react-redux';
import _SystemCheck from '../components/SystemCheck';
import { passedSystemCheck } from '../modules/user/selectors';
import { checkStatus } from '../modules/user/operations';

const mapStateToProps = (state, ownProps) => ({
    passedSystemCheck: passedSystemCheck(state)    
})


const mapDispatchToProps = {
    checkStatus
} 

const SystemCheck = connect(mapStateToProps, mapDispatchToProps)(_SystemCheck);
export default SystemCheck;

// import { connect } from 'react-redux';
// import _FeedbackBadgeSet from '../components/FeedbackBadgeSet';
// import { selectors as fSelectors, operations as fOperations } from '../modules/feedback';

// const { getBadges } = fSelectors;
// const { toggleBadge, loadAllBadges } = fOperations;

// const mapStateToProps = (state, ownProps) => ({
//     badges: getBadges(state)
// })


// const mapDispatchToProps = {
//     toggleBadge,
//     loadAllBadges
// } 

// const FeedbackBadgeSet = connect(mapStateToProps, mapDispatchToProps)(_FeedbackBadgeSet);
// export default FeedbackBadgeSet;