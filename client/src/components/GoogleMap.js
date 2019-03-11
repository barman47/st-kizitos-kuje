import React from 'react';

const GoogleMap = () => (
    <section>
        <h4 id="map-header">Need Directions?</h4>
        <iframe 
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.995690093068!2d7.232555114457714!3d8.879991493750794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e65b9ba7ae90b%3A0x360943c942afd6e4!2sSt.+Kizito+catholic+Church!5e0!3m2!1sen!2sng!4v1552138383528" 
            allowFullScreen
            title="St. Kizito's Parish Kuje"
        >
        </iframe>
    </section>
);

export default GoogleMap;