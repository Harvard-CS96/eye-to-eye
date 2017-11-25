import React from 'react';
import cn from 'classnames';
import strings from '../json/strings.json';

class Criticism extends React.Component {
    render() {
        const { criticismId, on = true, onClick } = this.props;
        const className = on === true ?
            'buttonSelected' :
            'button';
        return <div id="Criticism"><div className={className} onClick={onClick} children={criticismId} /></div>
    }

    // constructor() {
    //     super();
    //     this.state = {
    //         selected: false,
    //         buttonClass: "button"
    //     };
    // }
    // toggleCriticism = () => {
    //     console.log('Toggle criticism appearance.');
    //     if (this.state.selected) {
    //         this.setState({selected: false, buttonClass: "buttonSelected"});
    //     }
    //     else {
    //         this.setState({selected: true, buttonClass: "button"});
    //     }
    //     this.forceUpdate();
    // }
    // render() {
    //     const { toggleCriticism } = this;
    //     var criticismId = this.props.criticismId;
    //     return <div id="Criticism">
    //         <div className={this.state.buttonClass} children={criticismId} onClick={toggleCriticism}/>
    //     </div>
    // }
}

export default Criticism;