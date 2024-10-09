import React from 'react';
import "./Loader.css";

const Loader = () => {
    return (
        <div className="loader-container"> {/* New container for full-page coverage */}
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Loader;
