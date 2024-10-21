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
            titleImg: "Vase1",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase1_1,
                vase1_2,
            ]
        },
        {
            titleImg: "Vase2",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase2_1,
                vase2_2,
            ]
        },
        {
            titleImg: "Vase3",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase3_1,
                vase3_2,
            ]
        },
        {
            titleImg: "Vase4",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase4_1,
                vase4_2,
            ]
        },
        {
            titleImg: "Vase5",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase5_1,
                vase5_2,
            ]
        },
        {
            titleImg: "Vase6",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase6_1,
                vase6_2,
            ]
        },
        {
            titleImg: "Vase7",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase7_1,
                vase7_2,
            ]
        },
        {
            titleImg: "Vase8",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase8_1,
                vase8_2,
            ]
        },
        {
            titleImg: "Vase9",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase9_1,
                vase9_2,
            ]
        },
        {
            titleImg: "Vase10",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase10_1,
                vase10_2,
            ]
        },
        {
            titleImg: "Vase11",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase11_1,
                vase11_2,
            ]
        },        {
            titleImg: "Vase12",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase12_1,
                vase12_2,
            ]
        },
        {
            titleImg: "Vase13",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase13_1,
                vase13_2,
            ]
        },
        {
            titleImg: "Vase14",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase14_1,
                vase14_2,
            ]
        },
        {
            titleImg: "Vase15",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase15_1,
                vase15_2,
            ]
        },
        {
            titleImg: "Vase16",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase16_1,
                vase16_2,
            ]
        },
        {
            titleImg: "Vase17",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase17_1,
                vase17_2,
            ]
        },
        {
            titleImg: "Vase18",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase18_1,
                vase18_2,
            ]
        },
        {
            titleImg: "Vase19",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase19_1,
                vase19_2,
            ]
        },
        {
            titleImg: "Vase20",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase20_1,
                vase20_2,
            ]
        },
        {
            titleImg: "Vase21",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase21_1,
                vase21_2,
            ]
        },
        {
            titleImg: "Vase22",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase22_1,
                vase22_2,
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
            titleImg: "Vase23",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase23_1,
                vase23_2,
            ]
        },
        {
            titleImg: "Vase24",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase24_1,
                vase24_2,
            ]
        },
        {
            titleImg: "Vase25",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase25_1,
                vase25_2,
            ]
        },
        {
            titleImg: "Vase26",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                vase26_1,
                vase26_2,
            ]
        },
        {
            titleImg: "Clock1",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                clock1_1,
                clock1_2,
            ]
        },
        {
            titleImg: "Clock2",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                clock2_1,
                clock2_2,
            ]
        },
        {
            titleImg: "Clock3",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                clock3_1,
                clock3_2,
            ]
        },
        {
            titleImg: "Table1",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                table1_1,
                table1_2,
            ]
        },
        {
            titleImg: "Table2",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                table2_1,
                table2_2,
            ]
        },
        {
            titleImg: "lamp1",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                lamp1_1,
                lamp1_2,
            ]
        },
        {
            titleImg: "lamp2",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
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