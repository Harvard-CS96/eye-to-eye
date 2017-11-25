import { connect } from 'react-redux';
import _CriticismSet from '../components/CriticismSet';
import { getCriticisms } from '../modules/feedback/selectors';
import { toggleCriticism } from '../modules/feedback/operations';


const mapStateToProps = (state, ownProps) => ({
    selectedCriticisms: getCriticisms(state)
})


const mapDispatchToProps = {
    toggleCriticism
} 

const CriticismSet = connect(mapStateToProps, mapDispatchToProps)(_CriticismSet);
export default CriticismSet;