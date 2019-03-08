import React, { Fragment } from 'react';
import Navigation from './Navigation'

const Header = () => (
    <Fragment>
        <div className="header-top">
            <span>
                <span className="church-name">St. Kizito's Catholic Parish Kuje</span><br /><span className="archdiocese">Catholic Archdiocese of Abuja.</span> 
            </span>
            <span className="number-right">
                <span className="mdi mdi-phone phone-icon"></span><span className="number">08012345678</span>
            </span>
        </div>
        <Navigation />
    </Fragment>
);

export default Header;