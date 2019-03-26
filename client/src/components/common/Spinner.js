import React from 'react';
import spinner from './spinner.gif';

export default () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <img 
                src={spinner} 
                alt="Loading..."
                style={{ width: '200px', margin: 'auto', display: 'block' }}
            />
        </div>
    )
}