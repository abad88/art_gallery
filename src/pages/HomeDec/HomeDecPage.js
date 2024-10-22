import React, { useState } from 'react'
import "./HomeDecPage.css"
import { useLocation, useNavigate } from 'react-router';
import Accordion from '../../components/Accordian/Accordion';
import Button from '../../components/Button/Button';
import im1 from "../../assets/images/artpiece/eka_22.jpg";
import im2 from "../../assets/images/artpiece/eka_5.jpg";
import Form from '../../components/Form/Form';
import vase1_1 from "../../assets/images/vases/vase1/main2.png"
import vase1_2 from "../../assets/images/vases/vase1/main1.png"
import vase2_1 from "../../assets/images/vases/vase2/main2.png"
import vase2_2 from "../../assets/images/vases/vase2/main1.png"
import vase3_1 from "../../assets/images/vases/vase3/main3.png"
import vase3_2 from "../../assets/images/vases/vase3/main1.png"
import vase4_1 from "../../assets/images/vases/vase4/main2.png"
import vase4_2 from "../../assets/images/vases/vase4/main3.png"
import vase5_1 from "../../assets/images/vases/vase5/main2.png"
import vase5_2 from "../../assets/images/vases/vase5/main3.png"
import vase6_1 from "../../assets/images/vases/vase6/main2.png"
import vase6_2 from "../../assets/images/vases/vase6/main3.png"
import vase7_1 from "../../assets/images/vases/vase7/main2.png"
import vase7_2 from "../../assets/images/vases/vase7/main3.png"
import vase8_1 from "../../assets/images/vases/vase8/main2.png"
import vase8_2 from "../../assets/images/vases/vase8/main3.png"
import vase9_1 from "../../assets/images/vases/vase9/main2.png"
import vase9_2 from "../../assets/images/vases/vase9/main3.png"
import vase10_1 from "../../assets/images/vases/vase10/main2.png"
import vase10_2 from "../../assets/images/vases/vase10/main3.png"
import vase11_1 from "../../assets/images/vases/vase11/main2.png"
import vase11_2 from "../../assets/images/vases/vase11/main3.png"
import vase12_1 from "../../assets/images/vases/vase12/main2.png"
import vase12_2 from "../../assets/images/vases/vase12/main1.png"
import vase13_1 from "../../assets/images/vases/vase13/main2.png"
import vase13_2 from "../../assets/images/vases/vase13/main3.png"
import vase14_1 from "../../assets/images/vases/vase14/main2.png"
import vase14_2 from "../../assets/images/vases/vase14/main3.png"
import vase15_1 from "../../assets/images/vases/vase15/main2.png"
import vase15_2 from "../../assets/images/vases/vase15/main3.png"
import vase16_1 from "../../assets/images/vases/vase16/main2.png"
import vase16_2 from "../../assets/images/vases/vase16/main3.png"
import vase17_1 from "../../assets/images/vases/vase17/main2.png"
import vase17_2 from "../../assets/images/vases/vase17/main3.png"
import vase18_1 from "../../assets/images/vases/vase18/main2.png"
import vase18_2 from "../../assets/images/vases/vase18/main3.png"
import vase19_1 from "../../assets/images/vases/vase19/main2.png"
import vase19_2 from "../../assets/images/vases/vase19/main3.png"
import vase20_1 from "../../assets/images/vases/vase20/main2.png"
import vase20_2 from "../../assets/images/vases/vase20/main3.png"
import vase21_1 from "../../assets/images/vases/vase21/main2.png"
import vase21_2 from "../../assets/images/vases/vase21/main3.png"
import vase22_1 from "../../assets/images/vases/vase22/main2.png"
import vase22_2 from "../../assets/images/vases/vase22/main3.png"
import vase23_1 from "../../assets/images/vases/vase23/main2.png"
import vase23_2 from "../../assets/images/vases/vase23/main3.png"
import vase24_1 from "../../assets/images/vases/vase24/main2.png"
import vase24_2 from "../../assets/images/vases/vase24/main3.png"
import vase25_1 from "../../assets/images/vases/vase25/main2.png"
import vase25_2 from "../../assets/images/vases/vase25/main3.png"
import vase26_1 from "../../assets/images/vases/vase26/main2.png"
import vase26_2 from "../../assets/images/vases/vase26/main3.png"
import clock1_1 from "../../assets/images/clocks/clock1/main2.png"
import clock1_2 from "../../assets/images/clocks/clock1/main3.png"
import clock2_1 from "../../assets/images/clocks/clock2/main2.png"
import clock2_2 from "../../assets/images/clocks/clock2/main3.png"
import clock3_1 from "../../assets/images/clocks/clock3/main2.png"
import clock3_2 from "../../assets/images/clocks/clock3/main3.png"
import lamp1_1 from "../../assets/images/lamp/lamp1/main2.png"
import lamp1_2 from "../../assets/images/lamp/lamp1/main3.png"
import lamp2_1 from "../../assets/images/lamp/lamp2/main2.png"
import lamp2_2 from "../../assets/images/lamp/lamp2/main3.png"
import table1_1 from "../../assets/images/tables/table1/main2.jpg"
import table1_2 from "../../assets/images/tables/table1/main3.jpg"
import table2_1 from "../../assets/images/tables/table2/main2.jpg"
import table2_2 from "../../assets/images/tables/table2/main3.jpg"

const HomeDecPage = () => {
    const location = useLocation();
    const { img, title } = location.state || {}; // Retrieve the card data
    const [selectedImg, setSelectedImg] = useState(img); // State to manage the selected image

    const navigate = useNavigate();

    const goToContactUs = () => {
        navigate('/contact-us');
    };

    const artPieces = [
        {
            titleImg: "Golfing on Green",
            author: "Mr Green",
            detail: "It is all about green money"
        },
        {
            titleImg: "Golfing on Red",
            author: "Mr Red",
            detail: "It is all about red money"
        },
        {
            titleImg: "Golfing on Yellow",
            author: "Mr Yellow",
            detail: "It is all about Yellow money"
        },
        {
            titleImg: "Crystal Fruit Bowl",
            author: "Crystal Fruit Bowl",
            detail: "This elegant fruit bowl is crafted from crystal, a material known for its clarity, brilliance, and durability. The bowl features a swirling, organic shape that adds a touch of sophistication and modern design. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish.",
            thumbnails: [
                vase1_1,
                vase1_2,
            ]
        },
        {
            titleImg: "Crystal Fruit Bowl (2)",
            author: "Crystal Fruit Bowl (2)",
            detail: "This elegant fruit bowl is crafted from crystal, a material known for its clarity, brilliance, and durability. The bowl features a swirling, organic shape that adds a touch of sophistication and modern design. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish.",
            thumbnails: [
                vase2_1,
                vase2_2,
            ]
        },
        {
            titleImg: "Crystal Fruit Bowl (3)",
            author: "Crystal Fruit Bowl (3)",
            detail: "This elegant fruit bowl is crafted from crystal, a material known for its clarity, brilliance, and durability. The bowl features a swirling, organic shape that adds a touch of sophistication and modern design. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish.",
            thumbnails: [
                vase3_1,
                vase3_2,
            ]
        },
        {
            titleImg: "Amethyst Glass Bowl",
            author: "Amethyst Glass Bowl",
            detail: "This exquisite bowl is crafted from amethyst glass, a type of quartz that exhibits a beautiful purple hue. The bowl features a fluted, geometric shape that adds a touch of sophistication and elegance. The base is made of a combination of gilt bronze and crystal, creating a visually striking and luxurious foundation.",
            thumbnails: [
                vase4_1,
                vase4_2,
            ]
        },
        {
            titleImg: "Amber Glass Bowl",
            author: "Amber Glass Bowl",
            detail: "This elegant bowl is crafted from amber glass, a type of glass that exhibits a warm, golden hue. The bowl features a ribbed, geometric shape that adds a touch of sophistication and elegance. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish.",
            thumbnails: [
                vase5_1,
                vase5_2,
            ]
        },
        {
            titleImg: "Crystal Fruit Bowl (4)",
            author: "Crystal Fruit Bowl (4)",
            detail: "This elegant fruit bowl is crafted from crystal, a material known for its clarity, brilliance, and durability. The bowl features a swirling, organic shape that adds a touch of sophistication and modern design. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish.",
            thumbnails: [
                vase6_1,
                vase6_2,
            ]
        },
        {
            titleImg: "Crystal Ice Bucket",
            author: "Crystal Ice Bucket",
            detail: "This elegant ice bucket is crafted from crystal, a material known for its clarity, brilliance, and durability. The bucket features a cylindrical shape with a flared rim, making it easy to fill and access ice. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish.",
            thumbnails: [
                vase7_1,
                vase7_2,
            ]
        },
        {
            titleImg: "Cranberry Glass Fruit Bowl",
            author: "Cranberry Glass Fruit Bowl",
            detail: "This exquisite bowl is crafted from cranberry glass, a type of glass that exhibits a deep, rich red hue. The bowl features a wavy, organic shape that adds a touch of sophistication and elegance. The base is made of a combination of gilt bronze and crystal, creating a visually striking and luxurious foundation",
            thumbnails: [
                vase8_1,
                vase8_2,
            ]
        },
        {
            titleImg: "Amber Glass Bowl (2)",
            author: "Amber Glass Bowl (2)",
            detail: "This elegant bowl is crafted from amber glass, a type of glass that exhibits a warm, golden hue. The bowl features a fluted, geometric shape that adds a touch of sophistication and elegance. The base is made of a combination of gilt bronze and crystal, creating a visually striking and luxurious foundation.",
            thumbnails: [
                vase9_1,
                vase9_2,
            ]
        },
        {
            titleImg: "Cranberry Glass Fruit Bowl (2)",
            author: "Cranberry Glass Fruit Bowl (2)",
            detail: "This exquisite bowl is crafted from cranberry glass, a type of glass that exhibits a deep, rich red hue. The bowl features a wavy, organic shape that adds a touch of sophistication and elegance. The base is made of a combination of gilt bronze and abalone, creating a visually striking and luxurious foundation.",
            thumbnails: [
                vase10_1,
                vase10_2,
            ]
        },
        {
            titleImg: "Crystal Urn",
            author: "Crystal Urn",
            detail: "This elegant urn is crafted from crystal, a material known for its clarity, brilliance, and durability. The urn features a classic urn shape with a wide mouth and a tapered base. The body is adorned with intricate, cut-glass details that create a shimmering effect when light passes through. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish.",
            thumbnails: [
                vase11_1,
                vase11_2,
            ]
        },        {
            titleImg: "Vintage long ripple glass vase",
            author: "Vintage long ripple glass vase",
            detail: "The intricate designs, vibrant colors, and high-quality craftsmanship. The vase's unique shape, with its layered, ribbed design and crystal-clear glass.",
            thumbnails: [
                vase12_1,
                vase12_2,
            ]
        },
        {
            titleImg: "Murano glass fruit bowl",
            author: "Murano glass fruit bowl",
            detail: "Murano glass is renowned for its intricate designs, vibrant colors, and high-quality craftsmanship. The perfume bottle's unique, organic shape and the use of gilt bronze and abalone in the base are characteristic of Murano glass pieces.",
            thumbnails: [
                vase13_1,
                vase13_2,
            ]
        },
        {
            titleImg: "Crystal Candy Dish",
            author: "Crystal Candy Dish",
            detail: "This elegant candy dish is crafted from crystal, a material known for its clarity, brilliance, and durability. The dish features a square shape with rounded corners, adding a touch of sophistication and modern design. The base is made of a combination of gilt bronze and abalone, creating a visually striking and luxurious foundation.",
            thumbnails: [
                vase14_1,
                vase14_2,
            ]
        },
        {
            titleImg: "Crystal Centerpiece",
            author: "Crystal Centerpiece",
            detail: "This elegant centerpiece is crafted from crystal, a material known for its clarity, brilliance, and durability. The bowl features a fan-shaped design with intricate cut-glass details that create a shimmering effect when light passes through. The base is made of a combination of gilt bronze and crystal, creating a visually striking and luxurious foundation.",
            thumbnails: [
                vase15_1,
                vase15_2,
            ]
        },
        {
            titleImg: "Crystal Centerpiece (2)",
            author: "Crystal Centerpiece (2)",
            detail: "This elegant centerpiece is crafted from crystal, a material known for its clarity, brilliance, and durability. The bowl features a square shape with rounded corners, adding a touch of sophistication and modern design. The base is made of a combination of gilt bronze and crystal, creating a visually striking and luxurious foundation.",
            thumbnails: [
                vase16_1,
                vase16_2,
            ]
        },
        {
            titleImg: "Crystal Vase",
            author: "Crystal Vase",
            detail: "This elegant vase is crafted from crystal, a material known for its clarity, brilliance, and durability. The vase features a rectangular shape with a ribbed design that adds texture and visual interest. The base is also made of crystal, providing a stable foundation for the vase.",
            thumbnails: [
                vase17_1,
                vase17_2,
            ]
        },
        {
            titleImg: "Cranberry Glass Fruit Bowl (2)",
            author: "Cranberry Glass Fruit Bowl (2)",
            detail: "This elegant fruit bowl is crafted from crystal, a material known for its clarity, brilliance, and durability. The bowl features a fluted, geometric shape that adds a touch of sophistication and modern design. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish.",
            thumbnails: [
                vase18_1,
                vase18_2,
            ]
        },
        {
            titleImg: "Purple Glass Bowl",
            author: "Purple Glass Bowl",
            detail: "This elegant bowl is crafted from purple glass, a material known for its rich, vibrant color. The bowl features a fluted, geometric shape that adds a touch of sophistication and elegance. The base is made of a combination of gilt bronze and porcelain, creating a visually striking and luxurious foundation",
            thumbnails: [
                vase19_1,
                vase19_2,
            ]
        },
        {
            titleImg: "Crystal Vase (2)",
            author: "Crystal Vase (2)",
            detail: "The vase features a classic urn shape with a wide mouth and a tapered base. The body is adorned with intricate, cut-glass details that create a shimmering effect when light passes through. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish.",
            thumbnails: [
                vase20_1,
                vase20_2,
            ]
        },
        {
            titleImg: "Glass Vase with Marble base",
            author: "Glass Vase with Marble base",
            detail: "The vase features a flared top and a tapered bottom, with a ribbed design that adds texture and visual interest. The amber color of the glass is striking and adds a touch of warmth. The base is made of a combination of gilt bronze and marble, creating a luxurious and elegant foundation.",
            thumbnails: [
                vase21_1,
                vase21_2,
            ]
        },
        {
            titleImg: "Crystal centerpiece (3)",
            author: "Crystal centerpiece (3)",
            detail: "The bowl features a circular shape with intricate cut-glass details that create a shimmering effect when light passes through. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish. The combination of crystal and gilt bronze creates a visually striking and luxurious piece.",
            thumbnails: [
                vase22_1,
                vase22_2,
            ]
        },
        {
            titleImg: "Crystal urn (2)",
            author: "Crystal urn (2)",
            detail: "The urn features a classic urn shape with a wide mouth and a tapered base. The body is adorned with intricate, cut-glass details that create a shimmering effect when light passes through. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish.",
            thumbnails: [
                vase23_1,
                vase23_2,
            ]
        },
        {
            titleImg: "Vase23",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase23_1,
                vase23_2,
            ]
        },
        {
            titleImg: "Crystal centerpiece (4)",
            author: "Crystal centerpiece (4)",
            detail: "The bowl features a fan-shaped design with intricate cut-glass details that create a shimmering effect when light passes through. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish. The combination of crystal and gilt bronze creates a visually striking and luxurious piece.",
            thumbnails: [
                vase24_1,
                vase24_2,
            ]
        },
        {
            titleImg: "Crystal centerpiece (5)",
            author: "Crystal centerpiece (5)",
            detail: "The bowl features a circular shape with intricate cut-glass details that create a shimmering effect when light passes through. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish. The combination of crystal and gilt bronze creates a visually striking and luxurious piece.",
            thumbnails: [
                vase25_1,
                vase25_2,
            ]
        },
        {
            titleImg: "Crystal bowl",
            author: "Crystal bowl",
            detail: "The bowl features a fluted, geometric shape that adds a touch of sophistication and elegance. The base is made of gilt bronze, a gilded brass alloy that provides a rich, golden finish. The combination of crystal and gilt bronze creates a visually striking and luxurious piece.",
            thumbnails: [
                vase26_1,
                vase26_2,
            ]
        },
        {
            titleImg: "Porcelain Putti Mantle Clock",
            author: "Porcelain Putti Mantle Clock",
            detail: "Premium German Porcelain Putti Mantle Clock",
            thumbnails: [
                clock1_1,
                clock1_2,
            ]
        },
        {
            titleImg: "French Lyre Clock",
            author: "French Lyre Clock",
            detail: "Crafted with exquisite detail, the clock features a lyre-shaped body, typically made of ormolu (gilded bronze) or marble",
            thumbnails: [
                clock2_1,
                clock2_2,
            ]
        },
        {
            titleImg: "French Gilt Porcelain Clock",
            author: "French Gilt Porcelain Clock",
            detail: "This elegant timepiece is a French gilt bronze mantel clock, characterized by its ornate design and decorative elements",
            thumbnails: [
                clock3_1,
                clock3_2,
            ]
        },
        {
            titleImg: "Onyx Coffee table",
            author: "Onyx Coffee table",
            detail: "This stunning coffee table set is crafted from exquisite onyx, a semi-precious gemstone known for its translucent quality and vibrant colors. The table features a large, circular top with intricate patterns of green, red, and brown hues comes with 4 onyx stools.",
            thumbnails: [
                table1_1,
                table1_2,
            ]
        },
        {
            titleImg: "Onyx Coffee table (Rectangle)",
            author: "Onyx Coffee table (Rectangle)",
            detail: "This stunning coffee table set is crafted from exquisite onyx, a semi-precious gemstone known for its translucent quality and vibrant colors. The table features a large, rectangular top with intricate patterns of green, red, and brown hues comes with 4 onyx stools.",
            thumbnails: [
                table2_1,
                table2_2,
            ]
        },
        {
            titleImg: "Tiffany-Style Baltic Amber Lamp",
            author: "Tiffany-Style Baltic Amber Lamp",
            detail: "This stunning lamp showcases the intricate artistry of Tiffany-style design, featuring a captivating combination of Baltic amber and bronze. The lamp's shade is composed of numerous amber glass pieces, meticulously cut and assembled to create a mesmerizing pattern of bubbles and droplets.",
            thumbnails: [
                lamp1_1,
                lamp1_2,
            ]
        },
        {
            titleImg: "Tiffany-Style Moss Agate Lamp",
            author: "Tiffany-Style Moss Agate Lamp",
            detail: "This exquisite lamp showcases the artistry of Tiffany-style design, featuring a captivating combination of moss agate and bronze. The lamp's shade is composed of numerous moss agate pieces, meticulously cut and assembled to create a mesmerizing pattern of swirling green and brown hues.",
            thumbnails: [
                lamp2_1,
                lamp2_2,
            ]
        },
    ];

    // Find the matching art piece based on the title and titleImg comparison
    const matchedArt = artPieces.find(art => art.titleImg === title);

    // Function to handle thumbnail click
    const handleThumbnailClick = (thumbnail) => {
        setSelectedImg(thumbnail); // Update the selected image state
    };

    if (!img || !title) {
        return <p>No card selected!</p>; // Handle case where no card was passed
    }
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
                        {matchedArt ? (
                            <div>
                                {matchedArt.thumbnails && (
                                    <div className="thumbnails">
                                        <div className="thumbnailContainer">
                                            {matchedArt.thumbnails.map((thumbnail, index) => (
                                                <img
                                                    key={index}
                                                    src={thumbnail}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="thumbnail"
                                                    style={{ width: '100px', height: '100px', marginRight: '10px', cursor: 'pointer' }}
                                                    onClick={() => handleThumbnailClick(thumbnail)} // Handle thumbnail click
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <Accordion data={matchedArt} />
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
    )
}

export default HomeDecPage