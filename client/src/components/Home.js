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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis esse ea! Officiis quas ex ab praesentium molestiae repellat voluptas in, sapiente eligendi quidem esse dolorem nostrum, dolor, quisquam asperiores eveniet voluptatem cumque nemo. Veritatis cum voluptates eaque autem! Hic fugiat aliquam ducimus atque nobis ipsam est iste reiciendis laudantium!
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