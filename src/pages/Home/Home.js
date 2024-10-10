import React from 'react'
import "./Home.css"
import contactBanner from "../../assets/images/arth.jpg"
import Slider from '../../components/Slider/Slider'
import Logo from "../../assets/images/logo.jpg"
import Card from '../../components/Card/Card'
import Cimg1 from "../../assets/images/arte.png"

const Home = () => {
    return (
        <div>
            <div>
                <div className="contactBanner">
                    <img src={contactBanner} alt="logo" />
                    <div className="heading">
                        <img src={Logo} alt="logo" className='logo' />
                    </div>
                </div>
                <div className='contentHome'>
                    <h2>Some of our Art pieces from our collection</h2>
                </div>
                <Slider />
                <h2>Explore Section</h2>
                <div className='CardContainer'>
                    <Card img={Cimg1} />
                    <Card img={Cimg1} />
                    <Card img={Cimg1} />
                    <Card img={Cimg1} />
                    <Card img={Cimg1} />
                    <Card img={Cimg1} />
                    <Card img={Cimg1} />
                </div>
            </div>
        </div>
    )
}

export default Home