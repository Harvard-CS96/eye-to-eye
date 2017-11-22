import React from 'react';

import strings from '../json/strings.json';

class Badge extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false,
            extension: "-off.png"
        };
    }
    toggle = () => {
        if (this.state.selected){
            this.setState({selected: false, extension: "-off.png"});
        }
        else {
            this.setState({selected: true, extension: "-on.png"});
        }
    }
    render() {
        const { toggle } = this;
        var badgeId = this.props.badgeId;
        var fileExtension = this.state.extension;
        console.log(this.state.selected);     
        return <div id="Badge">
            <img src={require("../assets/badge-" + badgeId + fileExtension)} onClick={toggle} width="100" height="100"/>
        </div>
    }
}

export default Badge;