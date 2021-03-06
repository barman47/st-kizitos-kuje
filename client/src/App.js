import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Readings from './components/Readings';
import About from './components/About';
import Contact from './components/Contact';
import PastoralTeam from './components/PastoralTeam';
import ParishProgrammes from './components/ParishProgrammes';
import OrganizationHeads from './components/OrganizationHeads';
import Announcements from './components/Announcements';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Fragment>
						<Header />
						<Route path="/" component={Home} exact={true} />
						<Route path="/readings" component={Readings} exact={true} />
						<Route path="/about" component={About} exact={true} />
						<Route path="/parishProgrammes" component={ParishProgrammes} exact={true} />
						<Route path="/pastoralTeam" component={PastoralTeam} exact={true} />
						<Route path="/contact" component={Contact} exact={true} />
						<Route path="/headsOfOrganizations" component={OrganizationHeads} exact={true} />
						<Route path="/announcements" component={Announcements} exact={true} />
						<Footer />
					</Fragment>
				</Router>
			</Provider>
		);
	}
}

(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();

export default App;