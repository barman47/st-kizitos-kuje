import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import logo from '../img/vincentian-logo.png';

class Navigation extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }

    handleScroll = () => {
        this.setState({ scroll: window.scrollY });
    }

    showMenu = (e) => {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = () => {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });   
    }

    componentDidMount () {
        var elems = document.querySelectorAll('.sidenav');
        const options = { edge: 'right' };
        // eslint-disable-next-line
        var instances = M.Sidenav.init(elems, options);

        const navbar = document.querySelector('#push');
        this.setState({ top: navbar.offsetTop, height: navbar.offsetHeight });

        window.addEventListener('scroll', this.handleScroll);
    }

    render () {
        return (
            <div>
                <nav id="push" className={this.state.scroll > this.state.top ? "sticky" : ""}>
                    <div className="nav-wrapper">
                        <div className="logo-container">
                            <a href="/">
                                <img 
                                    className="vincentian-logo" 
                                    src={logo} title="The Vincentian Logo" 
                                    alt="Vincentian Logo"
                                />
                                <span className="logo-text">Served by the Vincentian Community</span>
                            </a>
                        </div>
                        <a href="#!" data-target="mobile-menu" className="sidenav-trigger"><span className="mdi mdi-menu menu-icon"></span></a>
                        <ul className="right hide-on-med-and-down links">
                            <li className="link"><NavLink to="/">Home<span className="prefix mdi mdi-church home-icon left"></span></NavLink></li>
                            <li className="link"><NavLink to="/readings">Today's Readings</NavLink></li>
                            <li className="link"><NavLink to="/pastoralTeam">Pastoral Team</NavLink></li>
                            <li className="link"><NavLink to="/contact">Contact</NavLink></li>
                            <li className="link">
                                <a href="#!" onClick={this.showMenu}><span className="mdi mdi-menu-down right prefix"></span>More</a>
                                {
                                    this.state.showMenu
                                    ?
                                    (
                                        <ul className="dropdown">
                                            <li className="link"><NavLink to="/about">About</NavLink></li>
                                            <li className="divider"></li>    
                                            <li className="link"><NavLink to="/parishProgrammes">Activities</NavLink></li>
                                            <li className="divider"></li>    
                                            <li className="link"><NavLink to="/headsOfOrganizations">Heads of Oranizations</NavLink></li>
                                            <li className="divider"></li>    
                                            <li className="link"><NavLink to="/announcements">Announcements</NavLink></li>    
                                        </ul>
                                    )
                                    : (null)
                                }
                            </li>
                        </ul>
                    </div>
                </nav>

                <ul id="mobile-menu" className="sidenav">
                    <li className="mobile-link"><span className="mdi mdi-close close-button sidenav-close"></span></li>
                    <li className="divider"></li>
                    <li className="mobile-link"><NavLink to="/">Home<span className="prefix mdi mdi-church home-icon left"></span></NavLink></li>
                    <li className="divider"></li>    
                    <li className="mobile-link"><NavLink to="/readings">Today's Readings</NavLink></li>
                    <li className="divider"></li>    
                    <li className="mobile-link"><NavLink to="/pastoralTeam">Pastoral Team</NavLink></li>
                    <li className="divider"></li>    
                    <li className="mobile-link"><NavLink to="/contact">Contact</NavLink></li>
                    <li className="divider"></li>
                    <li className="mobile-link">
                        <a onClick={this.showMenu} href="#!"><span className="mdi mdi-menu-down mobile-menu-down right"></span>More</a>
                            {
                                this.state.showMenu
                                ?
                            (
                                <ul className="mobile-dropdown">
                                    <li className="link"><NavLink to="/about">About</NavLink></li>
                                    <li className="divider"></li>    
                                    <li className="link"><NavLink to="/parishProgrammes">Activities</NavLink></li>
                                    <li className="divider"></li>    
                                    <li className="link"><NavLink to="/headsOfOrganizations">Heads of Oranizations</NavLink></li>
                                    <li className="divider"></li>    
                                    <li className="link"><NavLink to="/announcements">Announcements</NavLink></li>    
                                </ul>
                            )
                            : (null)
                        }
                    </li>
                    <li className="divider"></li>    
                </ul>
            </div>
        );
    }
}

export default Navigation;