import React, { Fragment } from 'react';
import Navigation from './Navigation'

const Header = () => (
    <Fragment>
        <div className="header-top">
            <p>
                Catholic Archdiocese of Abuja. St. Kizito's Catholic Church, Kuje.
                <span className="number-right">
                    <span className="mdi mdi-phone"></span><span className="number">08012345678</span>
                </span>
            </p>
        </div>
        <Navigation />
    </Fragment>
);

export default Header;