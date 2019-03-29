import React, { Component } from 'react';
import M from 'materialize-css';
import slide1 from '../img/church-building.JPG';
import slide2 from '../img/altar.JPG';
import slide3 from '../img/pray.jpg';
import slide4 from '../img/church-interior.JPG';
import slide5 from '../img/grotto.JPG';

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
                            <h3>St. Kizito</h3>
                            <h5>One Big Family...</h5>
                        </div>
                    </li>
                    <li>
                        <img src={slide2} alt="Slide 2" />
                        <div className="caption center-align">
                            <h4 className="slide2-caption">Let them construct a sanctuary for me, that I may dwell in them</h4>
                        </div>
                    </li>
                    <li>
                        <img src={slide3} alt="Slide 3" />
                        <div className="caption center-align">
                            <h3 className="slide3-caption">Love God, Serve God; Everything is in that</h3>
                        </div>
                    </li>
                    <li>
                        <img src={slide4} alt="Slide 4" />
                        <div className="caption center-align">
                            <h5 className="slide4-caption">God abides in us and his love is perfected in us.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={slide5} alt="Slide 5" />
                        <div className="caption center-align">
                            <h3 className="slide4-caption">Shrine of the Blessed Virgin Mary</h3>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Slider;