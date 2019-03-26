import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Slider from './Slider';
import OurPriests from './OurPriests';
import Values from './Values';
import WorshipTime from './WorshipTime';
import EasterCountdown from './EasterCountdown';
import Parallax from './Parallax';
import GoogleMap from './GoogleMap';

const Home = () => (
    <Fragment>
        <Helmet>
           <title>Home | St. Kizito's Catholic Parish, Kuje - Abuja.</title>
        </Helmet>
        <main>
            <Slider />
            <div className="welcome-message">
                <h3 className="section-header">Welcome!</h3>
                <p>
                    St Kizito! One Big Family!! Welcome to St. Kizito website, dear friends. Welcome to the home of hope, promise and hospitality.    
                </p>
                <p>
                    Connecting families, connecting societies, groups and individuals, connecting the clergy and the religious.
                </p>
            </div>
            <Values />
            <OurPriests />
            <WorshipTime />
            <EasterCountdown />
            <Parallax />
            <GoogleMap />
        </main>
    </Fragment>
);

export default Home;