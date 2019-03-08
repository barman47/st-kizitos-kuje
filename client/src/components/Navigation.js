import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

class Navigation extends Component {
    componentDidMount () {
        let elems = document.querySelectorAll('.sidenav');
        // eslint-disable-next-line
        let instances = M.Sidenav.init(elems);

        // var elems2 = document.querySelectorAll('.pushpin');
        // // eslint-disable-next-line
        // var instances2 = M.Pushpin.init(elems2);
    }
    render () {
        return (
            <div id="navigation">
                <nav className="pushpin">
                    <div className="nav-wrapper">
                        <a href="/">Logo</a>
                        <a href="#!" data-target="mobile-menu" className="sidenav-trigger"><span className="mdi mdi-menu"></span></a>
                        <ul className="right hide-on-med-and-down links">
                            {/*<li className="link"><NavLink activeClassName="active-page" to="/">Home</NavLink></li>*/}
                            <li className="link"><NavLink activeClassName="active-page" to="/"><span className="mdi mdi-church"></span></NavLink></li>
                            <li className="link"><NavLink activeClassName="active-page" to="/about">About</NavLink></li>
                            <li className="link"><NavLink activeClassName="active-page" to="/gallery">Gallery</NavLink></li>
                            <li className="link"><NavLink activeClassName="active-page" to="/activities">Activities</NavLink></li>
                            <li className="link"><NavLink activeClassName="active-page" to="/pastoralTeam">Pastoral Team</NavLink></li>
                            <li className="link"><NavLink activeClassName="active-page" to="/pastoralTeam">Contact</NavLink></li>
                            <li className="link"><NavLink activeClassName="active-page" to="/pastoralTeam">Find Us</NavLink></li>
                        </ul>
                    </div>
                </nav>

                <ul id="mobile-menu" className="sidenav">
                    <li className="mobile-link"><NavLink activeClassName="active-page" to="/">Home</NavLink></li>
                    <li className="mobile-link"><NavLink activeClassName="active-page" to="/about">About</NavLink></li>
                    <li className="mobile-link"><NavLink activeClassName="active-page" to="/gallery">Gallery</NavLink></li>
                    <li className="mobile-link"><NavLink activeClassName="active-page" to="/activities">Activities</NavLink></li>
                    <li className="mobile-link"><NavLink activeClassName="active-page" to="/pastoralTeam">Pastoral Team</NavLink></li>
                    <li className="mobile-link"><NavLink activeClassName="active-page" to="/pastoralTeam">Contact</NavLink></li>
                    <li className="mobile-link"><NavLink activeClassName="active-page" to="/pastoralTeam">Find Us</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;