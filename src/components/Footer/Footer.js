import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footerWrapper">
                <div className="content">
                    <h2>24 CPS Art Gallery</h2>
                    <h4>We deliver your dream art work</h4>
                    <p>
                        We are committed to our mission & goals and look forward to building
                        the best client-customer relationship. Our greatest strength is our
                        communication and commitments to deliver what we pledge
                    </p>
                </div>
                <div className="menu">
                    <h2>Quick Menu</h2>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about-us"}>About Us</Link></li>
                        <li><Link to={"/contact-us"}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>Contact Us</h2>
                    <ul>
                        <li><a href='tel:0292120303'>(02) 9212 0303</a></li>
                        <li><a href='tel:0293809831'>(02) 9380 9831</a></li>
                        <li><a href='tel:020438418266'>(02) 0438 418 266</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottomBar">
                <p>© 2021 24 CPS Art Gallery</p>
            </div>
        </>
    )
}

export default Footer