import React from 'react';
import { Route } from 'react-router-dom';

import App from './containers/App';
import HelloWorld from './containers/HelloWorld';
import About from './containers/About';
import Profile from './containers/Profile';
import Feedback from './containers/Feedback';

export default [
    <Route exact path="/" component={HelloWorld} />,
    <Route path="/about" component={About} />,
    <Route path="/profile" component={Profile} />,
    <Route path="/feedback" component={Feedback} />
]