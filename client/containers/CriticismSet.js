import { connect } from 'react-redux';
import _CriticismSet from '../components/CriticismSet';
import { selectors as fSelectors, operations as fOperations } from '../modules/feedback';

const { getCriticisms } = fSelectors;
const { toggleCriticism } = fOperations;

const mapStateToProps = (state, ownProps) => ({
    selectedCriticisms: getCriticisms(state)
})


const mapDispatchToProps = {
    toggleCriticism
}

const CriticismSet = connect(mapStateToProps, mapDispatchToProps)(_CriticismSet);
export default CriticismSet;


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