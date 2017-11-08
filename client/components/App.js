import React from 'react';

import Login from '../containers/Login';
import Logout from '../containers/Logout';

class App extends React.Component {
    render() {
        const { children, isLoggedIn } = this.props;

        const content = isLoggedIn === true ?
            [
                children,
                <Logout />,
            ] :
            <Login />

        return <div id="App">
            <h1>App</h1>
            { content }
        </div>
    }
}

export default App;