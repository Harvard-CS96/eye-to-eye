import React from 'react';
import Badge from '../containers/Badge';
import strings from '../json/strings.json';

class FeedbackBadgeSet extends React.Component {
    componentDidMount() {
        this.props.loadAllBadges()
    }
    getOnClickBadge = badgeId => {
        return () => {
            this.props.toggleBadge(badgeId)
        }
    }
    renderBadge = (badge, i) => {
        const { badge: badgeId, enabled, count } = badge
        const onClick = this.getOnClickBadge(badgeId)
        return <Badge badgeId={badgeId} on={enabled === true} onClick={onClick} count={count} key={i} />
    }
    render() {
        const { badges } = this.props
        console.log(badges);
        const { renderBadge } = this;
        var renderedBadges = badges.map(renderBadge);
        console.log(renderedBadges);
        return <div id="FeedbackBadgeSet">
            <h3>FeedbackBadgeSet</h3>
            {renderedBadges}
        </div>
    }
}

export default FeedbackBadgeSet;