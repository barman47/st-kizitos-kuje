import React, { Component } from 'react';
import M from 'materialize-css';
import slide1 from '../img/bread.jpg';
import slide2 from '../img/rosary.jpg';
import slide3 from '../img/pray.jpg';
import slide4 from '../img/cross.jpg';
import slide5 from '../img/our-lady.jpg';

class Slider  extends Component {

    componentDidMount () {
        let elems = document.querySelector('.slider');
        // eslint-disable-next-line
        let instances = M.Slider.init(elems, {
            indicators: true
        });
    }

    render () {
        return (
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src={slide1} alt="Slide 1" />
                        <div className="caption center-align">
                            <h3>This is our big Tagline</h3>
                            <h5 className="light grey-text text-lighten-3">Here's a Subtitle</h5>
                        </div>
                    </li>
                    <li>
                        <img src={slide2} alt="Slide 2" />
                        <div className="caption center-align">
                            <h3>This is our big Tagline</h3>
                            <h5 className="light grey-text text-lighten-3">Here's a Subtitle</h5>
                        </div>
                    </li>
                    <li>
                        <img src={slide3} alt="Slide 3" />
                        <div className="caption center-align">
                            <h3 className="slide3-caption">Love God, Serve God; Everything is in that</h3>
                            {/* <h5 className="light grey-text text-lighten-3">Here's a Subtitle</h5>*/}
                        </div>
                    </li>
                    <li>
                        <img src={slide4} alt="Slide 4" />
                        <div className="caption center-align">
                            <h3>This is our big Tagline</h3>
                            <h5 className="light grey-text text-lighten-3">Here's a Subtitle</h5>
                        </div>
                    </li>
                    <li>
                        <img src={slide5} alt="Slide 5" />
                        <div className="caption center-align">
                            <h3>This is our big Tagline</h3>
                            <h5 className="light grey-text text-lighten-3">Here's a Subtitle</h5>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Slider;