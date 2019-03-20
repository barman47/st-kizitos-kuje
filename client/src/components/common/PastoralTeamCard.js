import React from 'react';
import PropTypes from 'prop-types';

const PastoralTeamCard =  ({
    src,
    alt,
    name,
    position
}) => {
    return (
        <div className="card small hoverable">
            <div className="card-image">
                <img className="materialboxed responsive-img" src={src} alt={alt} />
            </div>
            <div className="card-content">
                <p className="materialboxed name">{name}</p>
            </div>
            <div className="card-action">
                <p className="title">{position}</p>
            </div>
        </div>
    );
}

PastoralTeamCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
};

export default PastoralTeamCard;