import React from 'react';

import Login from '../containers/Login';
import Logout from '../containers/Logout';

class App extends React.Component {
    render() {
        const { children, isAuthenticated } = this.props;

        const content = isAuthenticated === true ?
            [
                <Logout />,
                children
            ] :
            <Login />

        return <div id="App">
            {/* TODO: BETTER NAME */}
            <h1>VideoRoulette</h1>
            { content }
        </div>
    }
}

export default App;