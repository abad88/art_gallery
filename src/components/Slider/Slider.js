import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'; // Icons for navigation buttons
import './Slider.css'; // Optional for styling
import image1 from "../../assets/images/eka/img1/converted/main1.jpg"
import image3 from "../../assets/images/eka/img3/converted/main1.jpg"
import image4 from "../../assets/images/Lee/main1.jpg"
import image5 from "../../assets/images/alexandria/img1/main1.jpg"
import image6 from "../../assets/images/alexandria/img2/main1.jpg"
import image8 from "../../assets/images/Cenacolo/main1.jpg"

// ImageData.js
const slides = [
    {
        image: image1
    },
    {
        image: image3
    },
    {
        image: image4
    },
    {
        image: image5
    },
    {
        image: image6
    },
    {
        image: image8
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    // Automatically change slide every 3 seconds
    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrent((current) => (current === length - 1 ? 0 : current + 1));
        }, 6000); // Change every 3 seconds

        return () => clearInterval(autoSlide); // Cleanup the interval on component unmount
    }, [current, length]);

    // Handle next slide
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    // Handle previous slide
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // Prevent slider from rendering if there are no slides
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {slides.map((slide, index) => (
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === current && (
                        <img src={slide.image} alt="travel" className="image" />
                    )}
                </div>
            ))}
        </section>
    );
};

export default Slider;
