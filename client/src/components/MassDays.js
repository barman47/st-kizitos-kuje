import React from 'react';

const MassDays = () => (
    <div class="row">
        <div className="col s12 m6 l6">
            <h4>Worship Time</h4>
            <div class="mass-days">
                <h6>Sunday Mass</h6>
                <p>06:00AM - 08:00AM</p>
                <p>08:00AM - 10:00AM</p>
                <p>10:00AM - 12:00PM</p>
                <p>8:30AM(Children Mass)</p>
            </div>
            <div class="mass-days">
                <h6>Weekday Mass</h6>
                <p>Monday - 06:00PM</p>
                <p>Tuesday - Friday 05:45AM &amp; 06:00PM</p>
                <p>Saturday - 06:30AM</p>
            </div>
            <div class="mass-days">
                <h6>Adoration</h6>
                <p>Every Thursday 6-9PM</p>
            </div>
        </div>
    </div>
);

export default MassDays;