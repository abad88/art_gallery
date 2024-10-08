import React from 'react'
import "./ContactUs.css"
import contactBanner from "../../assets/images/artcc.jpg"

const ContactUs = () => {
    return (
        <div>
            <div className="contactBanner">
                <img src={contactBanner} alt="logo" />
                <div className="heading">
                    <h1>Contact Us</h1>
                </div>
            </div>
            <h1 className='text-center'>Fine Art Gallery in New York</h1>
            <h3>24 Central Park South, New York, New York 10019, United States</h3>
            <h3>Tel: 212-588-8700</h3>
            <h3>Phone/Whatsapp/Wechat: 917-470-5061</h3>
            <h3>Email: 24cpsgallery@gmail.com</h3>
            <h3>Opening Hours: Monday-Sunday 10:00AM - 07:00PM</h3>
        </div>
    )
}

export default ContactUs
