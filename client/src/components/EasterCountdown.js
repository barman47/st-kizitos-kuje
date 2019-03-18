import React, { Component } from 'react';

class EasterCountdown extends Component {
    interval = null;
    constructor (props) {
        super(props);
        
        this.state = {
            time: {}
        }
    }


    componentDidMount () {
        const countDownDate = new Date("April 21, 2019 00:00:00").getTime();
        this.interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.interval);
                this.setState({
                    ...this.state,
                    time: {
                        days: '00',
                        hours: '00',
                        minutes: '00',
                        seconds: '00'
                    }
                });
            } else {
                this.setState({
                    ...this.state,
                    time: {
                        days,
                        hours, 
                        minutes,
                        seconds
                    }
                });
            }
        }, 1000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    render () {
        return (
            <section className="countdown">
                <div className="day">
                     <div className="card">
                        <div className="card-content">
                            <span className="date-text">21</span>
                        </div>
                        <div className="card-action">
                            <span className="date-month">April</span>
                        </div>
                    </div>
                    <div className="easter">
                        <h5>Easter Sunday</h5>
                        <p>The Resurrection of the Lord. <br />Feast of St. Anselm.</p>
                    </div>
                </div>
                <div className="timer">
                    <div id="timer-day" className="timer-text">
                        <h5>{this.state.time.days}</h5>
                        <h6>DAYS</h6>
                    </div>
                    <div className="timer-text">
                        <h5>{this.state.time.hours}</h5>
                        <h6>HOURS</h6>
                    </div>
                    <div className="timer-text">
                        <h5>{this.state.time.minutes}</h5>
                        <h6>MIN</h6>
                    </div>
                    <div className="timer-text">
                        <h5>{this.state.time.seconds}</h5>
                        <h6>SECS</h6>
                    </div>
                </div>
            </section>
        );
    }

}

export default EasterCountdown;