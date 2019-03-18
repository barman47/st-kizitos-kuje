import React, { Fragment } from 'react';
import Navigation from './Navigation';
import stKizito from '../img/logo.jpg';

const Header = () => (
    <Fragment>
        <div className="header-top">
            <img src={stKizito} alt="St. Kizito"/>
            <p>
                <span className="church-name">St. Kizito's Catholic Parish Kuje</span><br /><span className="archdiocese">Catholic Archdiocese of Abuja.</span>
            </p>
        </div>
        <Navigation />
    </Fragment>
);

export default Header;