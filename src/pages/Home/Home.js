import React, { useState, useEffect } from 'react'
import "./Home.css"
import contactBanner from "../../assets/images/arth.jpg"
import Slider from '../../components/Slider/Slider'
import Logo from "../../assets/images/logo.jpg"
import eka1 from "../../assets/images/artpiece/eka1.jpg"
import eka2 from "../../assets/images/artpiece/eka_2.jpg"
import eka3 from "../../assets/images/artpiece/eka_3.jpg"
import eka4 from "../../assets/images/artpiece/eka_4.jpg"
import eka5 from "../../assets/images/artpiece/eka_5.jpg"
import eka6 from "../../assets/images/artpiece/eka_6.jpg"
import eka7 from "../../assets/images/artpiece/eka_7.jpg"
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import peterp from "../../assets/images/peterp.jpg"
import ekap from "../../assets/images/ekap.jpg"
import ArtistCard from '../../components/ArtistCard/ArtistCard'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState(''); // For storing search input
    const [visibleCards, setVisibleCards] = useState(4); // For controlling number of visible cards

    const cardData = [
        { img: eka1, title: "Eka 3D Art 1" },
        { img: eka2, title: "Eka 3D Art 2" },
        { img: eka3, title: "Eka 3D Art 3" },
        { img: eka4, title: "Eka 3D Art 4" },
        { img: eka5, title: "Eka 3D Art 5" },
        { img: eka6, title: "Eka 3D Art 6" },
        { img: eka7, title: "Eka 3D Art 7" },
    ];

    const artists = [
        {
            img: peterp, // Replace with actual image imports
            name: "Peter Max",
            description: "Peter Max is a renowned American artist, born on October 19 in Berlin, Germany. He is celebrated for his vibrant, psychedelic paintings and prints that became synonymous with the visual culture of the 1960s and 1970s. His work is characterized by bold colors, cosmic imagery, and a distinct pop art style. Max's artistic journey was influenced by his diverse cultural experiences, including his time in Shanghai and exposure to various art forms. He uses a variety of mediums to create his iconic pieces, which continue to captivate audiences worldwide."
        },
        {
            img: ekap,
            name: "Eka Peradze",
            description: "Eka Peradze is a talented painter from Tbilisi, Georgia, born on March 23. She is known for her vibrant and expressive works that often explore themes of nature, human emotions, and cultural heritage. Eka's inspiration comes from her deep connection to her homeland and the rich history and landscapes of Georgia. She uses a variety of techniques, including bold brushstrokes and a vivid color palette, to bring her artistic visions to life. Her paintings are celebrated for their ability to evoke strong emotional responses and capture the beauty of the world around her."
        },
        // Add more artists as needed
    ];

    const [currentArtistIndex, setCurrentArtistIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentArtistIndex(prevIndex => (prevIndex + 1) % artists.length);
        }, 15000); // Change artist every 15 seconds

        return () => clearInterval(interval);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCards = searchTerm === ''
        ? cardData
        : cardData.filter(card =>
            card.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const loadMoreCards = () => {
        setVisibleCards(prev => prev + 4);
    };


    return (
        <div>
            <div>
                <div className="contactBanner2">
                    <img src={contactBanner} alt="logo" />
                    <div className="heading">
                        <h1>Welcome</h1>
                        <img src={Logo} alt="logo" className='logo' />
                    </div>
                </div>
                <div className='contentHome'>
                    <h2>Some of our Art pieces from our collection</h2>
                </div>
                <ImageSlider/>
                {/* <Slider /> */}
                <ArtistCard artist={artists[currentArtistIndex]}/>
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
                {/* <ImageSlider/> */}
            </div>
        </div>
    )
}

export default Home