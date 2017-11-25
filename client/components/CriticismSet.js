import React from 'react';
import Criticism from '../containers/Criticism';
import strings from '../json/strings.json';

class CriticismSet extends React.Component {
    
    getOnClickCriticism = criticismId => {
        return () => {
            console.log("here?");
            console.log(criticismId);
            this.props.toggleCriticism(criticismId);
        }
    }
    renderCriticism = (criticism, i) => {
        var criticismId = criticism;
        const onClick = this.getOnClickCriticism(criticismId)        
        return <Criticism criticismId={criticismId} on={false} key={i} onClick={onClick} />
        // const { badge: badgeId, enabled, count } = badge
        // const onClick = this.getOnClickBadge(badgeId)
        // return <Badge badgeId={badgeId} on={enabled === true} onClick={onClick} count={count} key={i} />
    }
    render() {
        const { criticismsDisplayed } = this.props
        const { renderCriticism } = this;
        var renderedCriticisms = criticismsDisplayed.map(renderCriticism);
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