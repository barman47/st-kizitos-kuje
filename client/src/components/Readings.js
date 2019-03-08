import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMassReadings } from '../actions/readings';

class Readings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readings: {}
        }
    }
    componentDidMount() {
        // this.props.getMassReadings();
    }

    render () {
        return (
            <Fragment>
                <h1>Readings Component</h1>
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