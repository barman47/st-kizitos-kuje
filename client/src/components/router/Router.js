import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Gallery from '../Gallery';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/gallery" component={Gallery} exact />
        </Switch>
    </Router>
);

export default Routes;