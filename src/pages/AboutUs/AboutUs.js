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
            <h2>About Us</h2>
            <p className='aboutContent'>Welcome to 24 CPS Art Gallery, a distinctive fine art destination located at 24 Central Park South, New York City. With a legacy spanning over 30 years, our gallery is dedicated to showcasing a diverse collection of contemporary art from both emerging and well-established artists. We take pride in offering a selection that reflects the vibrancy and creativity of the modern art world, including original paintings, limited edition prints, and stunning sculptures.</p>
            <p className='aboutContent'>At 24 CPS Art Gallery, we believe that art should not only adorn a space but also evoke emotion and conversation. Our expertly curated collections provide art lovers with a wide array of styles and mediums, from abstract to realism, ensuring that every collector finds something unique.</p>
            <p className='aboutContent'>In addition to fine art, we offer a luxurious selection of home décor items, including crystal chandeliers, elegant rugs, and bronze and porcelain sculptures. Whether you are looking to enhance your personal art collection or elevate your home décor, our team is committed to providing personalized service to help you find the perfect pieces that reflect your taste and style.</p>
            <p className='aboutContent'>Our gallery is open to clients worldwide, offering convenient shipping and customer support around the clock. We invite you to visit us in person or browse our collections online to discover timeless works of art that will inspire and transform your space.</p>
        </div>
    )
}

export default AboutUs