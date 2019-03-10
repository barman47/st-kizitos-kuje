import React from 'react';

const MassDays = () => (
    <div className="worship-time row">
        <div className="col s12 m6 l6">
            <h4>Worship Time</h4>
            <div className="worship-days">
                <h6>Sunday Mass</h6>
                <p>06:00AM - 08:00AM</p>
                <p>08:00AM - 10:00AM</p>
                <p>10:00AM - 12:00PM</p>
                <p>08:30AM (Children Mass)<span className="mdi mdi-chevron-right"></span></p>
            </div>
            <div className="worship-days">
                <h6>Weekday Mass</h6>
                <p>Monday - 06:00PM</p>
                <p>Tuesday - Friday (05:45AM &amp; 06:00PM)</p>
                <p>Saturday - 06:30AM<span className="mdi mdi-chevron-right"></span></p>
            </div>
            <div className="worship-days">
                <h6>Adoration</h6>
                <p>Every Thursday 6-9PM<span className="mdi mdi-chevron-right"></span></p>
            </div>
            
            <div className="worship-days">
                <h6>Benediction</h6>
                <p>Every Sunday 05:45PM<span className="mdi mdi-chevron-right"></span></p>
            </div>
        </div>

        <div className="col s12 m6 l6">
            <h4>Lenten Retreat</h4>
            <div className="row upcoming-events">
                <div className="col s12 m6 l6">
                    <h5>For Men</h5>
                    <div className="card small hoverable">
                        <div className="card-content">
                            <span className="mdi mdi-human-male human-icon"></span>
                        </div>
                        <div className="card-action">
                            <p>
                                <span className="mdi mdi-calendar-text left calendar-icon"></span>
                                10th to 16th March. <br />For Males aged 18 - 75 years.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l6">
                    <h5>For Women</h5>
                    <div className="card small hoverable">
                        <div className="card-content">
                            <span className="mdi mdi-human-female human-icon"></span>
                        </div>
                        <div className="card-action">
                            <p>
                                <span className="mdi mdi-calendar-text left calendar-icon"></span>
                                17th to 23rd March. <br />For females aged 18 - 75 years.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default MassDays;