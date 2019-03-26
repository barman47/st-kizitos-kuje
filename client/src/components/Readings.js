import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMassReadings } from '../actions/readings';

import Spinner from './common/Spinner';

class Readings extends Component {
    componentDidMount() {
        this.props.getMassReadings();
    }

    render () {
        const { massReadings } = this.props.readings;
        const loading = this.props.readings.loading;

        let readingsSection;
        
        if (massReadings === undefined || loading === true) {
            readingsSection = <Spinner />;
        } else {
            readingsSection = (
                <section className="readings container">
                    <div className="readings-header">
                        <h3 className="date">Readings For {massReadings.date}</h3>
                        <h5 className="catholic-day">{massReadings.day}</h5>
                    </div>
                    {massReadings.Mass_R1 && (
                        <div>
                            <h4>First Reading</h4>  
                            <h6 className="source">{massReadings.Mass_R1.source}</h6>
                            <h6 className="heading">{massReadings.Mass_R1.heading}</h6>
                            <p className="text">{massReadings.Mass_R1.text}</p>
                        </div>
                    )}
                    {massReadings.Mass_Ps && (
                        <div>
                            <h4>Responsorial Psalm</h4>  
                            <h6 className="source">{massReadings.Mass_Ps.source}</h6>
                            <p className="text">{massReadings.Mass_Ps.text}</p>
                        </div>
                    )}
                    {massReadings.Mass_R2 && (
                        <div>
                            <h4>Second Reading</h4>  
                            <h6 className="source">{massReadings.Mass_R2.source}</h6>
                            <h6 className="heading">{massReadings.Mass_R2.heading}</h6>
                            <p className="text">{massReadings.Mass_R2.text}</p>
                        </div>
                    )}
                    {massReadings.Mass_G && (
                        <div>
                            <h4>Gospel</h4>  
                            <h6 className="source">{massReadings.Mass_G.source}</h6>
                            <h6 className="heading">{massReadings.Mass_G.heading}</h6>
                            <p className="text">{massReadings.Mass_G.text}</p>
                        </div>
                    )}
                </section>
            );
        }
        return (
            <Fragment>
                <Helmet>
                    <title>Today's Mass Readings | St. Kizito's Catholic Parish, Kuje - Abuja.</title>
                </Helmet>
                {readingsSection}
            </Fragment>
        );
    }
}

Readings.propTypes = {
    getMassReadings: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    readings: state.readings
});

export default connect(mapStateToProps, { getMassReadings })(Readings);