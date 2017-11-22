import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Strings from '../json/strings.json';

class About extends React.Component {
    render() {
        return <div id="About">
            {Strings.About.body}
            <br />
            <Link to="/">{Strings.About.link}</Link>
            <br />
        </div>            
    }
}

export default About