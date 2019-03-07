import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class Navigation extends Component {
    componentDidMount () {
        let elems = document.querySelectorAll('.sidenav');
        // eslint-disable-next-line
        let instances = M.Sidenav.init(elems);

        // var elems2 = document.querySelectorAll('.pushpin');
        // // eslint-disable-next-line
        // var instances2 = M.Pushpin.init(elems2);

        // $('.pushpin-demo-nav').each(function() {
        //     var $this = $(this);
        //     var $target = $('#' + $(this).attr('data-target'));
        //     $this.pushpin({
        //       top: $target.offset().top,
        //       bottom: $target.offset().top + $target.outerHeight() - $this.height()
        //     });
        // });
    }
    render () {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/">Logo</a>
                        <a href="#!" data-target="mobile-menu" className="sidenav-trigger"><span className="mdi mdi-menu"></span></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/activities">Activities</Link></li>
                            <li><Link to="/pastoralTeam">Pastoral Team</Link></li>
                            <li><Link to="/pastoralTeam">Contact</Link></li>
                            <li><Link to="/pastoralTeam">Find Us</Link></li>
                        </ul>
                    </div>
                </nav>

                <ul id="mobile-menu" className="sidenav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                    <li><Link to="/pastoralTeam">Pastoral Team</Link></li>
                    <li><Link to="/pastoralTeam">Contact</Link></li>
                    <li><Link to="/pastoralTeam">Find Us</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;