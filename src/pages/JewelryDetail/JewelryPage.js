import React, { useState } from 'react';
import "./JewelryPage.css";
import { useLocation, useNavigate } from 'react-router';
import Accordion from '../../components/Accordian/Accordion'; // If needed
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form'; // If there's a form
import img1 from "../../assets/images/artpiece/eka1.jpg"
import brac1 from "../../assets/images/jewelry/braclet/brac1/main1.jpg"
import brac1b from "../../assets/images/jewelry/braclet/brac1/main2.jpg"
import brac2 from "../../assets/images/jewelry/braclet/brac2/main3.jpg"
import brac2b from "../../assets/images/jewelry/braclet/brac2/main4.jpg"
import brac3 from "../../assets/images/jewelry/braclet/brac3/main18.jpg"
import brac3b from "../../assets/images/jewelry/braclet/brac3/main19.jpg"
import brac4 from "../../assets/images/jewelry/braclet/brac4/main1.jpg"
import brac4b from "../../assets/images/jewelry/braclet/brac4/main2.jpg"
import brac5 from "../../assets/images/jewelry/braclet/brac5/main16.jpg"
import brac5b from "../../assets/images/jewelry/braclet/brac5/main17.jpg"

import ear1 from "../../assets/images/jewelry/earing/earing/main1.jpg"
import ear1b from "../../assets/images/jewelry/earing/earing/main2.jpg"
import ear2 from "../../assets/images/jewelry/earing/earing1/main1.jpg"
import ear2b from "../../assets/images/jewelry/earing/earing1/main2.jpg"
import ear3 from "../../assets/images/jewelry/earing/earing2/main1.png"
import ear3b from "../../assets/images/jewelry/earing/earing2/main2.jpg"
import ear4 from "../../assets/images/jewelry/earing/earing3/main1.jpg"
import ear4b from "../../assets/images/jewelry/earing/earing3/main2.jpg"
import ear5 from "../../assets/images/jewelry/earing/earing4/main1.jpg"
import ear5b from "../../assets/images/jewelry/earing/earing4/main2.jpg"
import ear6 from "../../assets/images/jewelry/earing/earing5/main1.jpg"
import ear6b from "../../assets/images/jewelry/earing/earing5/main2.jpg"

import ring1 from "../../assets/images/jewelry/ring/ring1/main1.jpg"
import ring1b from "../../assets/images/jewelry/ring/ring1/main2.jpg"
import ring2 from "../../assets/images/jewelry/ring/ring2/main1.jpg"
import ring2b from "../../assets/images/jewelry/ring/ring2/main2.jpg"
import ring3 from "../../assets/images/jewelry/ring/ring3/main1.jpg"
import ring3b from "../../assets/images/jewelry/ring/ring3/main2.jpg"
import ring4 from "../../assets/images/jewelry/ring/ring4/main1.jpg"
import ring4b from "../../assets/images/jewelry/ring/ring4/main2.jpg"
import ring5 from "../../assets/images/jewelry/ring/ring5/main1.jpg"
import ring5b from "../../assets/images/jewelry/ring/ring5/main2.jpg"
import ring6 from "../../assets/images/jewelry/ring/ring6/main1.jpg"
import ring6b from "../../assets/images/jewelry/ring/ring6/main2.jpg"
import ring7 from "../../assets/images/jewelry/ring/ring7/main2.jpg"
import ring7b from "../../assets/images/jewelry/ring/ring7/mian1.jpg"
import ring8 from "../../assets/images/jewelry/ring/ring8/main1.jpg"
import ring8b from "../../assets/images/jewelry/ring/ring8/main2.jpg"
import ring9 from "../../assets/images/jewelry/ring/ring9/main1.jpg"
import ring9b from "../../assets/images/jewelry/ring/ring9/main2.jpg"



const JewelryPage = () => {
    const location = useLocation();
    const { img, title } = location.state || {};
    const [selectedImg, setSelectedImg] = useState(img);

    const navigate = useNavigate();

    const goToContactUs = () => {
        navigate('/contact-us');
    };

    if (!img || !title) {
        return <p>No jewelry selected!</p>;
    }

    const jewelryPieces = [
        {
            titleImg: "Green Jade Bracelet",
            author: "Green Jade",
            detail: "This is a beautiful, high-quality jade bangle with a rich, vibrant green color. The jade appears translucent, suggesting it is of good quality. The bangle is likely made from a type of jadeite jade, known for its durability and beauty.",
            thumbnails: [
                brac1,
                brac1b,
            ]
        },
        {
            titleImg: "Special Lavendar Jade Bracelet",
            author: "Lavendar Jade with malachite accents",
            detail: "This is a beautiful lavender jade bead bracelet with accents of malachite. The lavender jade beads are a lovely pale purple color, creating a serene and elegant look. The malachite accents add a touch of vibrant green, contrasting beautifully with the lavender.",
            thumbnails: [
                brac2,
                brac2b,
            ]
        },
        {
            titleImg: "Lavendar Jade beads Bracelet",
            author: "Lavendar Jade",
            detail: "This is a beautiful and elegant lavender jade bead bracelet. The beads are a lovely pale purple color with a subtle translucency, creating a serene and sophisticated look. The bracelet is made of high-quality jade, known for its durability and beauty.",
            thumbnails: [
                brac3,
                brac3b,
            ]
        },
        {
            titleImg: "Green Jade beads Bracelet",
            author: "Light Green Jade with gemstones",
            detail: "This is a beautiful and unique jade bracelet featuring a variety of gemstones in addition to the jade. The bracelet features round beads of jade in a pale green color, interspersed with smaller beads of malachite (green), carnelian (orange), and possibly quartz (clear). The combination of colors creates a vibrant and eye-catching look.",
            thumbnails: [
                brac4,
                brac4b,
            ]
        },
        {
            titleImg: "Lavendar Jade Bracelet",
            author: "Lavendar Jade",
            detail: "This is a beautiful and elegant lavender jade bangle. The bangle is a lovely pale purple color with a subtle translucency, creating a serene and sophisticated look. The jade appears to be of high quality, with a smooth polished finish.",
            thumbnails: [
                brac5,
                brac5b,
            ]
        },
        {
            titleImg: "Black Pearl and Diamond Earrings",
            author: "Black Pearl on the top and diamonds engraved on the sides",
            detail: "These black pearl and diamond earrings are a breathtaking example of classic jewelry design. The rich color of the pearls is complemented by the dazzling brilliance of the diamonds, creating a look of understated luxury.",
            thumbnails: [
                ear1,
                ear1b,
            ]
        },
        {
            titleImg: "Classic Diamond Flower Earrings",
            author: "Diamond Earings in flowers shape",
            detail: "These exquisite earrings feature a delicate flower design with sparkling diamonds set in a black enamel setting. The classic design is timeless and elegant, making them perfect for any occasion.",
            thumbnails: [
                ear2,
                ear2b,
            ]
        },
        {
            titleImg: "Modernist Diamond Earrings",
            author: " The black enamel provides a striking contrast to the gold and diamonds, creating a visually interesting design.",
            detail: "These stunning earrings feature a bold geometric design with black enamel accents. The sparkling diamonds add a touch of luxury and glamour, making them a perfect choice for a special occasion.",
            thumbnails: [
                ear3,
                ear3b,
            ]
        },
        {
            titleImg: "Classic Jade and Diamond Earrings",
            author: "Sparkling diamonds surround the jade, adding a touch of luxury and glamour.",
            detail: "These exquisite earrings feature a stunning green jade stone surrounded by a halo of sparkling diamonds. The classic design is timeless and elegant, making them perfect for any occasion.",
            thumbnails: [
                ear4,
                ear4b,
            ]
        },
        {
            titleImg: "Pearl and Diamond Elegance",
            author: "The centerpiece of these earrings is a beautiful white pearl, known for its beauty and elegance which is surounded by diamonds.",
            detail: "These exquisite earrings feature a stunning white pearl adorned with sparkling diamonds. The classic design is timeless and elegant, making them perfect for any occasion.",
            thumbnails: [
                ear5,
                ear5b,
            ]
        },
        {
            titleImg: "Coral Jade and Diamond Earring",
            author: "The centerpiece of these earrings is a beautiful coral Jade stone, known for its beauty and elegance which is surounded by diamonds.",
            detail: "These exquisite earrings feature a stunning jade stone surrounded by a halo of sparkling diamonds. The classic design is timeless and elegant, making them perfect for any occasion.",
            thumbnails: [
                ear6,
                ear6b,
            ]
        },
        {
            titleImg: "Radiant Yellow Diamond Halo Ring",
            author: "This ring is crafted from 18k white gold, a durable and luxurious metal. The centerpiece is a beautiful sapphire, known for its hardness and rich color. The surrounding diamonds are of high quality, adding to the overall brilliance of the ring.",
            detail: "This elegant ring features a stunning oval-cut sapphire surrounded by a halo of sparkling diamonds. The sapphire is a deep blue color, and the diamonds add a touch of brilliance and sparkle. The ring is set in 18k white gold, which complements the sapphire perfectly.",
            thumbnails: [
                ring1,
                ring1b,
            ]
        },
        {
            titleImg: "Black Rose Ring with Diamonds",
            author: "This ring features a delicate rose design with a black enamel center, surrounded by a sparkling halo of diamonds. The rose is a symbol of love and beauty, making this ring a perfect gift for a special occasion.",
            detail: "This ring is crafted from 18k yellow gold, a durable and luxurious metal. The black enamel adds a touch of sophistication, while the diamonds provide a dazzling sparkle.",
            thumbnails: [
                ring2,
                ring2b,
            ]
        },
        {
            titleImg: "Blue Flower Ring with Diamonds",
            author: "This ring is crafted from 18k yellow gold, a durable and luxurious metal. The dark blue enamel adds a touch of sophistication, while the diamonds provide a dazzling sparkle.",
            detail: "This ring features a stunning floral design with a cluster of diamonds in the center, surrounded by a dark blue enamel border. The intricate details and contrasting colors make this ring a truly unique and eye-catching piece.",
            thumbnails: [
                ring3,
                ring3b,
            ]
        },
        {
            titleImg: "Swirl Diamond Ring",
            author: "This ring features a unique and modern design with a swirling band of baguette-cut diamonds. The diamonds are set in a sleek and contemporary style, creating a dazzling and eye-catching piece.",
            detail: "This ring is crafted from 18k white gold, a durable and luxurious metal. The baguette-cut diamonds add a touch of elegance and sophistication, making this ring a perfect choice for a special occasion.",
            thumbnails: [
                ring4,
                ring4b,
            ]
        },
        {
            titleImg: "Classic Diamond Ring",
            author: "This ring is crafted from platinum, a durable and precious metal. The diamonds add a touch of luxury and elegance, making this ring a perfect choice for a special occasion.",
            detail: "This ring features a vintage-inspired design with a rectangular shape and a central diamond surrounded by smaller diamonds. The intricate detailing and Art Deco-style motifs make this ring a truly unique and timeless piece.",
            thumbnails: [
                ring5,
                ring5b,
            ]
        },
        {
            titleImg: "Royal Blue Sapphire Ring",
            author: "This ring features a stunning oval-cut sapphire surrounded by a halo of sparkling diamonds. The sapphire is a deep blue color, and the diamonds add a touch of brilliance and sparkle. The ring is set in platinum, a durable and precious metal.",
            detail: "This ring is perfect for a woman who wants a unique and eye-catching engagement ring. The sapphire is a symbol of wisdom and loyalty, and the diamonds represent purity and innocence. This ring is sure to be treasured for years to come.",
            thumbnails: [
                ring6,
                ring6b,
            ]
        },
        {
            titleImg: "Coral Jade and Diamond Ring",
            author: "This ring features a stunning oval-cut coral stone surrounded by a delicate diamond setting. The coral is a vibrant orange color, and the diamonds add a touch of sparkle and elegance. The ring is set in 18k white gold, which complements the coral perfectly.",
            detail: "This ring is perfect for a woman who wants a unique and eye-catching piece of jewelry. The coral is a symbol of good luck and protection, and the diamonds represent purity and innocence. This ring is sure to be treasured for years to come.",
            thumbnails: [
                ring7,
                ring7b,
            ]
        },
        {
            titleImg: "Unique Diamond Flower Ring",
            author: "The centerpiece of these earrings is a beautiful white pearl, known for its beauty and elegance which is surounded by diamonds.",
            detail: "These exquisite earrings feature a stunning white pearl adorned with sparkling diamonds. The classic design is timeless and elegant, making them perfect for any occasion.",
            thumbnails: [
                ring8,
                ring8b,
            ]
        },
        {
            titleImg: "Elegant Floral Diamond Ring",
            author: "This ring features a stunning floral design with a black and gold enamel flower and a diamond in the center. The intricate details and contrasting colors make this ring a truly unique and eye-catching piece.",
            detail: "This ring is crafted from 18k yellow gold, a durable and luxurious metal. The black and gold enamel adds a touch of sophistication, while the diamond provides a dazzling sparkle.",
            thumbnails: [
                ring9,
                ring9b,
            ]
        },
        // Add more jewelry pieces
    ];

    const matchedJewelry = jewelryPieces.find(jewelry => jewelry.titleImg === title);

    return (
        <>
            <div className='artPage'>
                <div className='artCardBorder'>
                    <div className='artCard'>
                        <h1>{title}</h1>
                        {/* Display the selected image */}
                        <img src={selectedImg} alt={title} />
                        <p>Click on Thumbnail to View</p>

                        {/* Render matched art details if found */}
                        {matchedJewelry ? (
                            <div>
                                {matchedJewelry.thumbnails && (
                                    <div className="thumbnails">
                                        {matchedJewelry.thumbnails.map((thumbnail, index) => (
                                            <img
                                                key={index}
                                                src={thumbnail}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="thumbnail"
                                                style={{ width: '100px', height: '100px', marginRight: '10px', cursor: 'pointer' }}
                                                onClick={() => setSelectedImg(thumbnail)}
                                            />
                                        ))}
                                    </div>
                                )}
                                <Accordion data={matchedJewelry} />
                            </div>
                        ) : (
                            <p>No additional information available for this piece.</p>
                        )}
                    </div>
                    <div className='artContent'>
                        <h1>Contact for more Information, Availability, and Price</h1>
                        <Form />
                        <h2>Or</h2>
                        <Button msg={"Contact Us"} onClick={goToContactUs} />
                    </div>
                </div>

            </div>
        </>
    );
};

export default JewelryPage;
