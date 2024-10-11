import React, { useState } from 'react'
import "./Home.css"
import contactBanner from "../../assets/images/arth.jpg"
import Slider from '../../components/Slider/Slider'
import Logo from "../../assets/images/logo.jpg"
import Card from '../../components/Card/Card'
import Cimg1 from "../../assets/images/arte.png"
import Map from '../../components/Map/Map'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState(''); // For storing search input
    const cardData = [
        { img: Cimg1, title: "Golfing on Green" },
        { img: Cimg1, title: "Golfing on Red" },
        { img: Cimg1, title: "Golfing on Yellow" },
        { img: Cimg1, title: "Golfing on Purple" },
        { img: Cimg1, title: "Golfing on Orange" },
        { img: Cimg1, title: "Golfing on Pink" },
        { img: Cimg1, title: "Golfing on Brown" }
    ];

    // Function to handle search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // If the search term is empty, show all cards; otherwise, filter
    const filteredCards = searchTerm === ''
        ? cardData
        : cardData.filter(card =>
            card.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

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
                    {filteredCards.length > 0 ? (
                        filteredCards.map((card, index) => (
                            <Card key={index} img={card.img} title={card.title} />
                        ))
                    ) : (
                        <p className='notF'>Nothing found ...</p>
                    )}
                </div>
                <Map />
            </div>
        </div>
    )
}

export default Home