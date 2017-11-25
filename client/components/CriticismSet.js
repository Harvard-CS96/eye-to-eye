import React from 'react';
import Criticism from '../containers/Criticism';
import strings from '../json/strings.json';

class CriticismSet extends React.Component {
    componentDidMount() {
        this.props.loadAllCriticisms();
    }
    getOnClickCriticism = criticismId => {
        return () => {
            this.props.toggleCriticism(criticismId);
        }
    }
    renderCriticism = (criticism, i) => {
        const { criticismId, enabled } = criticism;
        const onClick = this.getOnClickCriticism(criticismId)
        return <Criticism criticismId={criticismId} on={enabled===true} key={i} onClick={onClick} />
    }
    render() {
        const { selectedCriticisms } = this.props
        const { renderCriticism } = this;
        var renderedCriticisms = selectedCriticisms.map(renderCriticism);
        return <div id="CriticismSet">
            <h3>CriticismSet</h3>
            {renderedCriticisms}
        </div>
    }
    // render() {
    //     const { criticismsDisplayed } = this.props
    //     var rows = [];
    //     for (var i = 0; i < criticismsDisplayed.length; i++) {
    //         rows.push(<Criticism criticismId={criticismsDisplayed[i]}/>)
    //     }
    //     return <div id="CriticismSet">
    //         <h3>CriticismSet</h3>
    //         { rows.map((x, i) => ({...x, key: i})) }
    //     </div>
    // }
}

export default CriticismSet;