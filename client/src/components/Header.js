import React, { Component, Fragment } from 'react';
import M from 'materialize-css';
import Navigation from './Navigation';
import stKizito from '../img/logo.jpg';

class Header extends Component {
    componentDidMount () {
        var elems = document.querySelectorAll('.scrollspy');
        // eslint-disable-next-line
        var instances = M.ScrollSpy.init(elems);
    }

    render () {
        return (
            <Fragment>
                <div id="page-top" className="scrollspy header-top">
                    <img src={stKizito} alt="St. Kizito" />
                    <p>
                        <span className="church-name">St. Kizito's Catholic Parish Kuje</span><br /><span className="archdiocese">Catholic Archdiocese of Abuja.</span>
                    </p>
                </div>
                <Navigation />
            </Fragment>
        );
    }
}

export default Header;