import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Login from '../containers/Login';
import Logout from '../containers/Logout';

class App extends React.Component {
    render() {
        const { children, isAuthenticated } = this.props;
        const content = isAuthenticated === true ?
            [
                children,
                <Logout />
            ] :
            [
                <Carousel showThumbs = {false} showStatus = {false} infiniteLoop = {true} emulateTouch={true}>
                    <div>
                        <img src={require("../assets/preview1.png")} />
                        <p className="legend">Share your views on trending topics and issues.</p>
                    </div>
                    <div>
                        <img src={require("../assets/preview2.png")} />
                        <p className="legend">Have a discussion with someone with different views.</p>
                    </div>
                    <div>
                        <img src={require("../assets/preview3.png")} />
                        <p className="legend">Rate your partner and earn badges for having great conversations.</p>
                    </div>
                </Carousel>,
                <Login />
            ]

        return <div id="App">
            {/* TODO: BETTER NAME */}
            <h1>b nice</h1>
            {content.map((x, i) => ({ ...x, key: i }))}
        </div>
    }
}

export default App;