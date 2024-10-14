import React from 'react'
import "./Jewelery.css"
import contactBanner from "../../assets/images/jwel.jpg"

const Jewelery = () => {
    return (
        <>
            <div className="contactBanner">
                <img src={contactBanner} alt="logo" />
                <div className="heading">
                    <h1>Jewelry</h1>
                </div>
            </div>
        </>
    )
}

export default Jewelery