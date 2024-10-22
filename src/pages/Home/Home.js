import React, { useState } from 'react'
import "./Home.css"
import contactBanner from "../../assets/images/arth.jpg"
import Slider from '../../components/Slider/Slider'
import Logo from "../../assets/images/logo.jpg"
import Card from '../../components/Card/Card'
import Cimg1 from "../../assets/images/arte.png"
import eka1 from "../../assets/images/artpiece/eka1.jpg"
import eka2 from "../../assets/images/artpiece/eka_2.jpg"
import eka3 from "../../assets/images/artpiece/eka_3.jpg"
import eka4 from "../../assets/images/artpiece/eka_4.jpg"
import eka5 from "../../assets/images/artpiece/eka_5.jpg"
import eka6 from "../../assets/images/artpiece/eka_6.jpg"
import eka7 from "../../assets/images/artpiece/eka_7.jpg"
import Map from '../../components/Map/Map'
import Button from '../../components/Button/Button'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState(''); // For storing search input
    const [visibleCards, setVisibleCards] = useState(4); // For controlling number of visible cards

    const cardData = [
        // { img: Cimg1, title: "Golfing on Green" },
        // { img: Cimg1, title: "Golfing on Red" },
        // { img: Cimg1, title: "Golfing on Yellow" },
        // { img: Cimg1, title: "Golfing on Purple" },
        // { img: Cimg1, title: "Golfing on Orange" },
        // { img: Cimg1, title: "Golfing on Pink" },
        // { img: Cimg1, title: "Golfing on Yellow" },
        // { img: Cimg1, title: "Golfing on Purple" },
        // { img: Cimg1, title: "Golfing on Orange" },
        // { img: Cimg1, title: "Golfing on Pink" },
        // { img: Cimg1, title: "Golfing on Brown" },
        { img: eka1, title: "Eka 3D Art 1" },
        { img: eka2, title: "Eka 3D Art 2" },
        { img: eka3, title: "Eka 3D Art 3" },
        { img: eka4, title: "Eka 3D Art 4" },
        { img: eka5, title: "Eka 3D Art 5" },
        { img: eka6, title: "Eka 3D Art 6" },
        { img: eka7, title: "Eka 3D Art 7" },
    ];

    // Function to handle search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filtered cards based on the search input
    const filteredCards = searchTerm === ''
        ? cardData
        : cardData.filter(card =>
            card.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    // Function to show more cards (increment by 4)
    const loadMoreCards = () => {
        setVisibleCards(prev => prev + 4);
    };


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
                {/* <h2>Explore Section</h2>

                <input
                    type="text"
                    placeholder="Search for a card..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className='hinput'
                />

                <div className="CardContainer">
                    {filteredCards.slice(0, visibleCards).map((card, index) => (
                        <Card key={index} img={card.img} title={card.title} />
                    ))}
                </div>

                {visibleCards < filteredCards.length && (
                    <div className='buttonBorder'>
                        <Button msg="More" onClick={loadMoreCards} />
                    </div>
                )} */}

                {filteredCards.length === 0 && <p className='notF'>Nothing found ...</p>}
                <h2>Location</h2>
                <p>
                    <iframe
                        title='Gallery map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8707036814767!2d-73.97745102445434!3d40.76486843437812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2591f631fd52f%3A0x2fbffe68280a4b08!2s24%20Central%20Park%20South%20Art%20Gallery!5e0!3m2!1sen!2sus!4v1728918197626!5m2!1sen!2sus"
                        className='mapStyle'
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </p>
                {/* <Map /> */}
                {/* <a href='https://matterport.com/discover/space/aUVjaGebjMk'>check the link</a> */}
            </div>
        </div>
    )
}

export default Home