import React from 'react'
import "./AboutUs.css"
import contactBanner from "../../assets/images/artab.jpg"

const AboutUs = () => {
    return (
        <div>
            <div className="contactBanner">
                <img src={contactBanner} alt="logo" />
                <div className="heading">
                    <h1>About Us</h1>
                </div>
            </div>
            <h1 className='text-center'>Fine Art Gallery in New York</h1>
        </div>
    )
}

export default AboutUs