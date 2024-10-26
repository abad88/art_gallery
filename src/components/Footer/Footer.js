import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/logo.jpg"
import { FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <div className="footerWrapper">
                <div className="content">
                    {/* <h2>24 CPS Art Gallery</h2> */}
                    <img src={Logo} alt="Logo" className='LogoFooter' />
                    <h4>We deliver your dream art work</h4>
                    {/* <p>
                        We are committed to our mission & goals and look forward to building
                        the best client-customer relationship.
                    </p> */}
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about-us"}>About Us</Link></li>
                        <li><Link to={"/contact-us"}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>Contact Us</h2>
                    <ul>
                        <li><a href='tel:212-588-8700'>212-588-8700</a></li>
                        <li>
                            <a href="https://www.instagram.com/24cpsartgallery/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="mailto:24cpsgallery@gmail.com">
                                <IoMail />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="bottomBar">
                <Link to={"/terms-and-conditions"}>Terms and Conditions</Link>
                <p>© 2021 24 CPS Art Gallery</p>
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </div>
        </>
    )
}

export default Footer