import React from 'react';
import PropTypes from 'prop-types'

const OrganizationHeadsPartial = ({
    icon,
    name,
    position
}) => (
    <div className="card">
        <div className="card-image">
            <span className={icon}></span> 
        </div>
        <div className="card-content">
            <p className="organization-heads__name">{name}</p>
        </div>
        <div className="card-action">
            <h6 className="organization-heads__position">{position}</h6>
        </div>
    </div>
);

OrganizationHeadsPartial.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string
};

OrganizationHeadsPartial.defaultProps = {
    icon: 'mdi mdi-account'
};

export default OrganizationHeadsPartial;