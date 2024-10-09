import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { ImCross } from 'react-icons/im'

const Navbar = ({ setOpenNav }) => {

    return (
        <div className="navbarWrapper">
            <ImCross className="crossIcon" />
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about-us"}>About Us</Link></li>
                <li><Link to={"/contact-us"}>Contact Us</Link></li>
            </ul>
        </div>
    )
}

export default Navbar