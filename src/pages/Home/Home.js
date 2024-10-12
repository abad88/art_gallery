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
        { img: eka1, title: "Eka 3D Art" },
        { img: eka2, title: "Eka 3D Art" },
        { img: eka3, title: "Eka 3D Art" },
        { img: eka4, title: "Eka 3D Art" },
        { img: eka5, title: "Eka 3D Art" },
        { img: eka6, title: "Eka 3D Art" },
        { img: eka7, title: "Eka 3D Art" },
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
                <h2>Explore Section</h2>

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
                )}

                {filteredCards.length === 0 && <p className='notF'>Nothing found ...</p>}
                {/* <Map /> */}
            </div>
        </div>
    )
}

export default Home