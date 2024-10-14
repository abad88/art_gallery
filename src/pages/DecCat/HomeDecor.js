import React from 'react'
import "./HomeDecor.css"
import contactBanner from "../../assets/images/decor.jpg"

const HomeDecor = () => {
    return (
        <>
            <div className="contactBanner">
                <img src={contactBanner} alt="logo" />
                <div className="heading">
                    <h1>Home Decoration</h1>
                </div>
            </div>
        </>
    )
}

export default HomeDecor