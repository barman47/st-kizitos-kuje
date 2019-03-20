import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

class Navigation extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    handleScroll = () => {
        this.setState({ scroll: window.scrollY });
    }

    componentDidMount () {
        var elems = document.querySelectorAll('.sidenav');
        // eslint-disable-next-line
        var instances = M.Sidenav.init(elems);

        const navbar = document.querySelector('#push');
        this.setState({ top: navbar.offsetTop, height: navbar.offsetHeight });

        window.addEventListener('scroll', this.handleScroll);
    }

    // componentDidUpdate () {
    //     this.state.scroll > this.state.top ? document.body.style.paddingTop = `${this.state.height}px` : document.body.style.paddingTop = 0;
    // }

    render () {
        return (
            <Fragment>
                <nav id="push" className={this.state.scroll > this.state.top ? "sticky" : ""}>
                    <div className="nav-wrapper">
                        <a href="/">Logo</a>
                        <a href="#!" data-target="mobile-menu" className="sidenav-trigger"><span className="mdi mdi-menu menu-icon"></span></a>
                        <ul className="right hide-on-med-and-down links">
                            {/*<li className="link"><NavLink activeClassName="active-page" to="/">Home</NavLink></li>*/}
                            <li className="link"><NavLink to="/">Home<span className="prefix mdi mdi-church home-icon left"></span></NavLink></li>
                            <li className="link"><NavLink to="/readings">Today's Readings</NavLink></li>
                            <li className="link"><NavLink to="/about">About</NavLink></li>
                            <li className="link"><NavLink to="/gallery">Gallery</NavLink></li>
                            <li className="link"><NavLink to="/parishProgrammes">Activities</NavLink></li>
                            <li className="link"><NavLink to="/pastoralTeam">Pastoral Team</NavLink></li>
                            <li className="link"><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </nav>

                <ul id="mobile-menu" className="sidenav">
                    <li className="mobile-link"><NavLink activeClassName="active-page" to="/">Home</NavLink></li>
                    <li className="mobile-link"><NavLink to="/readings">Today's Readings</NavLink></li>
                    <li className="mobile-link"><NavLink to="/about">About</NavLink></li>
                    <li className="mobile-link"><NavLink to="/gallery">Gallery</NavLink></li>
                    <li className="mobile-link"><NavLink to="/parishProgrammes">Activities</NavLink></li>
                    <li className="mobile-link"><NavLink to="/pastoralTeam">Pastoral Team</NavLink></li>
                    <li className="mobile-link"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </Fragment>
        );
    }
}

export default Navigation;