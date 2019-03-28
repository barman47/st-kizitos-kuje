import React from 'react';

const Footer = () => (
    <div className="footer">
        <div className="fixed-action-btn">
            <a href="#page-top" className="btn-floating center">
                <span className="mdi mdi-arrow-up"></span>
            </a>
        </div>
        <p>&copy; Copyright {new Date().getFullYear()} - St. Kizito's Catholic Parish Kuje - Abuja</p>
        <p className="domstech"><a href="https://www.domstech.com" target="_blank" rel="noopener noreferrer">Powered by Domstech</a></p>
    </div>
);

export default Footer;