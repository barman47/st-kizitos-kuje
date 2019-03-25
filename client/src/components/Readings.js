import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMassReadings } from '../actions/readings';

import Spinner from './common/Spinner';

class Readings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readings: null,
            loading: false
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.readings.massReadings) {
            this.setState({ 
                readings: nextProps.readings.massReadings,
                loading: nextProps.readings.loading
            });
        }
    }
    
    componentDidMount() {
        this.props.getMassReadings();
    }

    render () {
        const readings = this.state.readings;
        const loading = this.state.loading;
        let readingsSection;
        if (readings === null || loading === true) {
            readingsSection = <Spinner />;
        } else {
            readingsSection = (
                <section className="readings container">
                    <div className="readings-header">
                        <h3 className="date">Readings For {readings.date}</h3>
                        <h5 className="catholic-day">{readings.day}</h5>
                    </div>
                    <div>
                        <h4>First Reading</h4>  
                        <h6 className="source">{readings.Mass_R1.source}</h6>
                        <h6 className="heading">{readings.Mass_R1.heading}</h6>
                        <p className="text">{readings.Mass_R1.text}</p>
                    </div>
                    <div>
                        <h4>Responsorial Psalm</h4>  
                        <h6 className="source">{readings.Mass_Ps.source}</h6>
                        <p className="text">{readings.Mass_Ps.text}</p>
                    </div>
                    <div>
                        <h4>Second Reading</h4>  
                        <h6 className="source">{readings.Mass_R2.source}</h6>
                        <h6 className="heading">{readings.Mass_R2.heading}</h6>
                        <p className="text">{readings.Mass_R2.text}</p>
                    </div>
                    <div>
                        <h4>Gospel</h4>  
                        <h6 className="source">{readings.Mass_G.source}</h6>
                        <h6 className="heading">{readings.Mass_G.heading}</h6>
                        <p className="text">{readings.Mass_G.text}</p>
                    </div>
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