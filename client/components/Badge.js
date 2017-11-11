import React from 'react';

import strings from '../json/strings.json';

class Badge extends React.Component {
    render() {
        var badgeId = this.props.badgeId;     
        return <div id="Badge">
<<<<<<< 5dd7885c9862d5a40170b09a0a86635c816426c4
            <img src={require("../assets/badge-" + badgeId + "-on.png")} width="100" height="100"/>
=======
            <img src={require("../assets/badge-" + badgeId + "-off.png")}/>
>>>>>>> Fixed badge image display
        </div>
    }
}

export default Badge;