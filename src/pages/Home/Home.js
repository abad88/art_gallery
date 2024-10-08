import React from 'react'
import "./Home.css"
import contactBanner from "../../assets/images/arth.jpg"

const Home = () => {
    return (
        <div>
            <div>
                <div className="contactBanner">
                    <img src={contactBanner} alt="logo" />
                    <div className="heading">
                        <h1>24 CPS Art Gallery</h1>
                    </div>
                </div>
                <h1 className='text-center'>Fine Art Gallery in New York</h1>
            </div>
        </div>
    )
}

export default Home