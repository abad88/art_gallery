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

import neck1 from "../../assets/images/jewelry/necklace/neck1/main1.jpg"
import neck1b from "../../assets/images/jewelry/necklace/neck1/main2.jpg"
import neck2 from "../../assets/images/jewelry/necklace/neck2/main1.jpg"
import neck2b from "../../assets/images/jewelry/necklace/neck2/main2.jpg"
import neck3 from "../../assets/images/jewelry/necklace/neck3/main1.jpg"
import neck3b from "../../assets/images/jewelry/necklace/neck3/main2.jpg"
import neck4 from "../../assets/images/jewelry/necklace/neck4/main1.jpg"
import neck4b from "../../assets/images/jewelry/necklace/neck4/main2.jpg"
import neck5 from "../../assets/images/jewelry/necklace/neck5/main1.jpg"
import neck5b from "../../assets/images/jewelry/necklace/neck5/main2.jpg"
import neck6 from "../../assets/images/jewelry/necklace/neck6/main1.jpg"
import neck6b from "../../assets/images/jewelry/necklace/neck6/main2.jpg"
import neck7 from "../../assets/images/jewelry/necklace/neck7/main1.jpg"
import neck7b from "../../assets/images/jewelry/necklace/neck7/main2.jpg"
import neck8 from "../../assets/images/jewelry/necklace/neck8/main1.jpg"
import neck8b from "../../assets/images/jewelry/necklace/neck8/main2.jpg"
import neck9 from "../../assets/images/jewelry/necklace/neck9/main1.jpg"
import neck9b from "../../assets/images/jewelry/necklace/neck9/main2.jpg"
import neck10 from "../../assets/images/jewelry/necklace/neck10/main1.jpg"
import neck10b from "../../assets/images/jewelry/necklace/neck10/main2.jpg"
import neck11 from "../../assets/images/jewelry/necklace/neck11/main1.jpg"
import neck11b from "../../assets/images/jewelry/necklace/neck11/main2.jpg"
import neck12 from "../../assets/images/jewelry/necklace/neck12/main.jpg"
import neck12b from "../../assets/images/jewelry/necklace/neck12/main2.jpg"
import neck13 from "../../assets/images/jewelry/necklace/pendant1/main1.jpg"
import neck13b from "../../assets/images/jewelry/necklace/pendant1/main2.jpg"
import neck14 from "../../assets/images/jewelry/necklace/pendant2/main1.jpg"
import neck14b from "../../assets/images/jewelry/necklace/pendant2/main2.jpg"
import neck15 from "../../assets/images/jewelry/necklace/pendant3/main1.jpg"
import neck15b from "../../assets/images/jewelry/necklace/pendant3/main2.jpg"
import uniq1 from "../../assets/images/jewelry/unique/charm1/main1.jpg"
import uniq1b from "../../assets/images/jewelry/unique/charm1/main2.jpg"
import uniq2 from "../../assets/images/jewelry/unique/charm2/main1.jpg"
import uniq2b from "../../assets/images/jewelry/unique/charm2/main2.jpg"

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



        {
            titleImg: "Vibrant Coral Bead Necklace",
            author: "This necklace is crafted from natural coral, a precious gemstone known for its beauty and durability. The diamonds add a touch of sparkle and brilliance, enhancing the overall beauty of the necklace.",
            detail: "This necklace features multiple strands of vibrant red coral beads, creating a bold and eye-catching statement. The diamond clasp adds a touch of luxury and elegance, making this necklace a perfect choice for a special occasion.",
            thumbnails: [
                neck1,
                neck1b,
            ]
        },
        {
            titleImg: "Elegant Coral and Diamond Necklace",
            author: "This necklace is crafted from natural coral, a precious gemstone known for its beauty and durability. The diamonds add a touch of sparkle and brilliance, enhancing the overall beauty of the necklace.",
            detail: "This necklace features a stunning oval-cut coral pendant surrounded by a halo of sparkling diamonds. The coral is a vibrant orange color, and the diamonds add a touch of elegance and brilliance. The pendant is suspended from a delicate chain, making it a perfect choice for everyday wear or special occasions.",
            thumbnails: [
                neck2,
                neck2b,
            ]
        },
        {
            titleImg: "Elegant Jade Bead Necklace",
            author: "This ring features a stunning floral design with a black and gold enamel flower and a diamond in the center. The intricate details and contrasting colors make this ring a truly unique and eye-catching piece.",
            detail: "This ring is crafted from 18k yellow gold, a durable and luxurious metal. The black and gold enamel adds a touch of sophistication, while the diamond provides a dazzling sparkle.",
            thumbnails: [
                neck3,
                neck3b,
            ]
        },
        {
            titleImg: "Elegant Black Pearl Necklace",
            author: "This necklace is crafted from natural black pearls, a rare and valuable gemstone. Black pearls are often associated with mystery, elegance, and power, making this necklace a truly special piece of jewelry.",
            detail: "This necklace features a strand of beautiful black pearls, creating a classic and elegant look. The pearls are perfectly round and lustrous, adding a touch of sophistication to any outfit.",
            thumbnails: [
                neck4,
                neck4b,
            ]
        },
        {
            titleImg: "Sapphire and Diamond Flower Necklace",
            author: "This necklace is crafted from high-quality materials, including sapphires, diamonds, and precious metals. The intricate design and beautiful gemstones make this necklace a truly special and luxurious piece.",
            detail: "This necklace features a stunning floral design with alternating sapphire and diamond flowers. The sapphires are a deep blue color, and the diamonds add a touch of brilliance and sparkle. The delicate chain connects the flowers, creating a flowing and elegant look.",
            thumbnails: [
                neck5,
                neck5b,
            ]
        },
        {
            titleImg: "Elegant Red and White Pearl Necklace",
            author: "This necklace is crafted from natural coral and pearls, precious gemstones known for their beauty and durability. The combination of these two gemstones creates a truly unique and luxurious piece of jewelry.",
            detail: "This necklace features two strands of beautiful gemstones: a strand of vibrant red coral beads and a strand of lustrous white pearls. The contrast between the two colors creates a striking and elegant look. The coral and pearl beads are perfectly round and smooth, adding to the overall beauty of the necklace.",
            thumbnails: [
                neck6,
                neck6b,
            ]
        },
        {
            titleImg: "Intricate Jade Carving Necklace",
            author: "Jade is a precious gemstone known for its beauty and durability. It is often associated with good luck, health, and prosperity, making this necklace a meaningful and beautiful piece of jewelry.",
            detail: "This necklace features a stunning carved jade pendant, depicting a beautiful landscape scene. The intricate details and rich colors of the jade make this pendant a true work of art. The pendant is suspended from a delicate chain of small jade beads, adding to the overall elegance of the necklace",
            thumbnails: [
                neck7,
                neck7b,
            ]
        },
        {
            titleImg: "Mother-of-Pearl and Diamond Necklace",
            author: "This necklace is crafted from high-quality materials, including mother-of-pearl, diamonds, and gold. The intricate design and beautiful gemstones make this necklace a truly special and luxurious piece.",
            detail: "This necklace features a beautiful seashell-shaped pendant with mother-of-pearl and diamond accents. The mother-of-pearl creates a soft, iridescent glow, while the diamonds add a touch of sparkle and elegance. The pendant is suspended from a delicate gold chain, making it a perfect choice for everyday wear or special occasions.",
            thumbnails: [
                neck8,
                neck8b,
            ]
        },
        {
            titleImg: "Dazzling Diamond Waterfall Necklace",
            author: "This necklace is crafted from high-quality diamonds and precious metals, making it a truly luxurious and timeless piece. The intricate design and sparkling diamonds make this necklace a perfect choice for a special occasion or as a heirloom piece.",
            detail: "This stunning necklace features a dramatic design with a cascading waterfall of baguette-cut diamonds. The diamonds are set in a sleek and modern style, creating a dazzling and eye-catching piece. The necklace also includes a delicate chain of round diamonds, adding a touch of elegance and versatility.",
            thumbnails: [
                neck9,
                neck9b,
            ]
        },
        {
            titleImg: "Delicate Diamond Filigree Necklace",
            author: "The necklace is crafted from high-quality diamonds and precious metals, making it a truly luxurious piece. The intricate design and sparkling diamonds make this necklace perfect for a special occasion or as a heirloom piece.",
            detail: "This elegant necklace features a delicate diamond pendant, adorned with intricate filigree detailing. The pendant is suspended from a chain of sparkling diamonds, creating a timeless and sophisticated look.",
            thumbnails: [
                neck10,
                neck10b,
            ]
        },
        {
            titleImg: "Timeless Jade Pendant Necklace",
            author: "Jade is a precious gemstone known for its beauty and durability. It is often associated with good luck, health, and prosperity, making this necklace a meaningful and beautiful piece of jewelry.",
            detail: "This exquisite necklace features a stunning jade pendant carved with intricate details of a dragon and phoenix. The deep green color of the jade is complemented by a delicate diamond border, adding a touch of elegance and luxury. The pendant is suspended from a delicate chain, making it a perfect choice for everyday wear or special occasions.",
            thumbnails: [
                neck11,
                neck11b,
            ]
        },
        {
            titleImg: "Vibrant Emerald Bead Necklace",
            author: "Emeralds are precious gemstones known for their beauty and durability. They are often associated with love, wisdom, and good fortune, making this necklace a meaningful and beautiful piece of jewelry.",
            detail: "This stunning necklace features multiple strands of vibrant green emeralds, creating a bold and luxurious statement. The emeralds are perfectly matched in color and size, adding to the overall elegance of the necklace. The diamond clasp adds a touch of sparkle and sophistication, making this necklace a perfect choice for a special occasion.",
            thumbnails: [
                neck12,
                neck12b,
            ]
        },
        {
            titleImg: "Elegant Jade Bead Necklace",
            author: "This ring features a stunning floral design with a black and gold enamel flower and a diamond in the center. The intricate details and contrasting colors make this ring a truly unique and eye-catching piece.",
            detail: "This ring is crafted from 18k yellow gold, a durable and luxurious metal. The black and gold enamel adds a touch of sophistication, while the diamond provides a dazzling sparkle.",
            thumbnails: [
                neck13,
                neck13b,
            ]
        },
        {
            titleImg: "Chinese Mythology Jade Pendant",
            author: "Jade is a precious gemstone known for its beauty and durability. It is often associated with good luck, health, and prosperity, making this necklace a meaningful and beautiful piece of jewelry. The intricate carvings on the pendant add a cultural and historical significance to the piece.",
            detail: "This exquisite necklace features a unique jade pendant showcasing intricate carvings of a god and devil. The contrast between the smooth, translucent jade and the detailed carvings creates a stunning visual effect. The pendant is suspended from a colorful beaded necklace, adding to its overall appeal.",
            thumbnails: [
                neck14,
                neck14b,
            ]
        },
        {
            titleImg: "Chinese Jade Deity Pendant",
            author: "Jade is a precious gemstone known for its beauty and durability. It is often associated with good luck, health, and prosperity, making this pendant a meaningful and beautiful piece of jewelry.",
            detail: "This pendant features a beautifully carved jade figure, likely depicting a Chinese deity or mythological figure. The intricate details and smooth texture of the jade make this pendant a true work of art. The pendant is suspended from a simple black cord, allowing the focus to remain on the exquisite carving.",
            thumbnails: [
                neck15,
                neck15b,
            ]
        },
        {
            titleImg: "Intricate Jade Carving Pendant",
            author: "Jade is a precious gemstone known for its beauty and durability. It is often associated with good luck, health, and prosperity, making this pendant a meaningful and beautiful piece of jewelry.",
            detail: "This exquisite pendant features a beautifully carved jade figure, likely depicting a Chinese deity or mythological figure. The intricate details and smooth texture of the jade make this pendant a true work of art. The pendant is adorned with a colorful tassel, adding a touch of elegance and tradition.",
            thumbnails: [
                uniq1,
                uniq1b,
            ]
        },
        {
            titleImg: "Timeless Jade Necklace Pendant",
            author: "Jade is a precious gemstone known for its beauty and durability. It is often associated with good luck, health, and prosperity, making this pendant a meaningful and beautiful piece of jewelry.",
            detail: "This pendant features a beautifully carved jade piece depicting a dragon. The intricate details and vibrant green color of the jade make this pendant a true work of art. The pendant is adorned with a colorful tassel, adding a touch of elegance and tradition.",
            thumbnails: [
                uniq2,
                uniq2b,
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
