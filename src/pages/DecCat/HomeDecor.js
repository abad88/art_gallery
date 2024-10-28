import React, { useState } from 'react'
import "./HomeDecor.css"
import contactBanner from "../../assets/images/homedec.jpg"
import LazyLoad from 'react-lazyload'; // Import LazyLoad for lazy loading
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO
import { useNavigate } from 'react-router'
import vase1 from "../../assets/images/vases/vase1/main3.png"
import vase2 from "../../assets/images/vases/vase2/main3.png"
import vase3 from "../../assets/images/vases/vase3/main2.png"
import vase4 from "../../assets/images/vases/vase4/main1.png"
import vase5 from "../../assets/images/vases/vase5/main1.png"
import vase6 from "../../assets/images/vases/vase6/main1.png"
import vase7 from "../../assets/images/vases/vase7/main1.png"
import vase8 from "../../assets/images/vases/vase8/main1.png"
import vase9 from "../../assets/images/vases/vase9/main1.png"
import vase10 from "../../assets/images/vases/vase10/main1.png"
import vase11 from "../../assets/images/vases/vase11/main1.png"
import vase12 from "../../assets/images/vases/vase12/main1.png"
import vase13 from "../../assets/images/vases/vase13/main1.png"
import vase14 from "../../assets/images/vases/vase14/main1.png"
import vase15 from "../../assets/images/vases/vase15/main1.png"
import vase16 from "../../assets/images/vases/vase16/main1.png"
import vase17 from "../../assets/images/vases/vase17/main1.png"
import vase18 from "../../assets/images/vases/vase18/main1.png"
import vase19 from "../../assets/images/vases/vase19/main1.png"
import vase20 from "../../assets/images/vases/vase20/main1.png"
import vase21 from "../../assets/images/vases/vase21/main1.png"
import vase22 from "../../assets/images/vases/vase22/main1.png"
import vase23 from "../../assets/images/vases/vase23/main1.png"
import vase24 from "../../assets/images/vases/vase24/main1.png"
import vase25 from "../../assets/images/vases/vase25/main1.png"
import vase26 from "../../assets/images/vases/vase26/main1.png"
import clock1 from "../../assets/images/clocks/clock1/main1.png"
import clock2 from "../../assets/images/clocks/clock2/main1.png"
import clock3 from "../../assets/images/clocks/clock3/main1.png"
import table1 from "../../assets/images/tables/table1/main1.jpg"
import table2 from "../../assets/images/tables/table2/main1.png"
import lamp1 from "../../assets/images/lamp/lamp1/main1.png"
import lamp2 from "../../assets/images/lamp/lamp2/main1.png"
import v1 from "../../assets/images/vases/v1/main1.jpg"
import v2 from "../../assets/images/vases/v2/main1.jpg"
import v3 from "../../assets/images/vases/v3/main1.jpg"
import v4 from "../../assets/images/vases/v4/main1.jpg"
import v5 from "../../assets/images/vases/v5/main1.png"
import v6 from "../../assets/images/vases/v6/main1.png"

const HomeDecor = () => {
    const navigate = useNavigate();
    const imageData = [
        { img: vase1, title: 'Italian Central Piece', artist: "artist2", type: "Vase" },
        { img: vase2, title: 'Italian Central Piece (2)', artist: "artist2", type: "Vase" },
        { img: vase3, title: 'Italian Central Piece (3)', artist: "artist2", type: "Vase" },
        { img: vase4, title: 'Italian Murano Center Piece', artist: "Murano", type: "Vase" },
        { img: vase5, title: 'Italian Amber Center Piece', artist: "Amber", type: "Vase" },
        { img: vase6, title: 'Italian Center Piece (4)', artist: "artist3", type: "Vase" },
        { img: vase7, title: 'Crystal Ice Bucket', artist: "artist3", type: "Vase" },
        { img: vase8, title: 'Italian Cranberry Crystal Bowl', artist: "artist3", type: "Vase" },
        { img: vase9, title: 'Italian Amber Glass Center Piece (2)', artist: "Amber", type: "Vase" },
        { img: vase10, title: 'Italian Cranberry Crystal Bowl (2)', artist: "artist3", type: "Vase" },
        { img: vase11, title: 'Italian Crystal Urn', artist: "artist3", type: "Vase" },
        { img: vase12, title: 'Vintage long ripple glass vase', artist: "artist3", type: "Vase" },
        { img: vase13, title: 'Italian Crytal Ripple Center Piece', artist: "artist3", type: "Vase" },
        { img: vase14, title: 'Italian Crystal Candy Dish', artist: "artist3", type: "Vase" },
        { img: vase15, title: 'Italian Crystal Centerpiece', artist: "artist3", type: "Vase" },
        { img: vase16, title: 'Italian Crystal Centerpiece (2)', artist: "artist3", type: "Vase" },
        { img: vase17, title: 'Italian Crystal Vase', artist: "artist3", type: "Vase" },
        { img: vase18, title: 'Italian Crystal Centerpiece (3)', artist: "artist3", type: "Vase" },
        { img: vase19, title: 'Italian Murano Center Piece (2)', artist: "Murano", type: "Vase" },
        { img: vase20, title: 'Italian Amber Vase', artist: "Amber", type: "Vase" },
        { img: vase21, title: 'Italian Amber Vase with Marble bottom', artist: "Amber", type: "Vase" },
        { img: vase22, title: 'Italian Crystal centerpiece (4)', artist: "artist3", type: "Vase" },
        { img: vase23, title: 'Italian Crystal urn (2)', artist: "artist3", type: "Vase" },
        { img: vase24, title: 'Italian Italian Crystal centerpiece (5)', artist: "artist3", type: "Vase" },
        { img: vase25, title: 'Italian Crystal centerpiece (6)', artist: "artist3", type: "Vase" },
        { img: vase26, title: 'Italian Crystal bowl', artist: "artist3", type: "Vase" },
        { img: clock1, title: 'Porcelain Mantle Clock', artist: "Porcelain", type: "Clock" },
        { img: clock2, title: 'French Lyre Clock', artist: "Porcelain", type: "Clock" },
        { img: clock3, title: 'French Gilt Porcelain Clock', artist: "Porcelain", type: "Clock" },
        { img: lamp1, title: 'Tiffany-Style Baltic Amber Lamp', artist: "Amber", type: "Lamp" },
        { img: lamp2, title: 'Tiffany-Style Moss Agate Lamp', artist: "Amber", type: "Lamp" },
        { img: table1, title: 'Jade Coffee table', artist: "Jade", type: "Table" },
        { img: table2, title: 'Jade Coffee table (Rectangle)', artist: "Jade", type: "Table" },
        { img: v1, title: 'Amber CenterPiece with Dora Bronze', artist: "Amber", type: "Vase" },
        { img: v2, title: 'Capodimonte Vase', artist: "Capodimonte", type: "Vase" },
        { img: v3, title: 'Amber Vase with Dora Bronze', artist: "Amber", type: "Vase" },
        { img: v4, title: 'Malachite Vase', artist: "Malachite", type: "Vase" },
        { img: v5, title: 'Italian CenterPiece with Dora Bronze', artist: "oo", type: "Vase" },
        { img: v6, title: 'Italian CenterPiece with Dora Bronze (2)', artist: "oo", type: "Vase" },
        // Add more images as needed
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArtist, setSelectedArtist] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const imagesPerPage = 10;


    const handleCategoryClick = (type) => {
        setSelectedType(type);
        setCurrentPage(1);
    };


    const filteredImages = imageData.filter(image => {
        const matchesSearchTerm = image.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesArtist = selectedArtist === 'All' || image.artist === selectedArtist;
        const matchesType = selectedType === 'All' || image.type === selectedType;
        return matchesSearchTerm && matchesArtist && matchesType;
    });

    const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

    const currentImages = filteredImages.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleArtistChange = (e) => {
        setSelectedArtist(e.target.value);
        setCurrentPage(1);
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setCurrentPage(1);
    };

    const handleImageClick = (image) => {
        navigate('/home-decor', { state: { img: image.img, title: image.title } });
    };
    return (
        <>
            <Helmet>
                <title>Home Decoration</title>
                <meta name="description" content="Explore our collection of exquisite home decoration items including vases, clocks, lamps, and tables." />
            </Helmet>
            <div className="contactBanner">
                <img src={contactBanner} alt="logo" />
                <div className="heading">
                    <h1>Home Decoration</h1>
                </div>
            </div>
            <h1>Categories</h1>
            <div className='category2'>
                <div onClick={() => handleCategoryClick('Vase')}>
                    <img src={vase1} alt="Vase" />
                    <p>Vase</p>
                </div>
                <div onClick={() => handleCategoryClick('Clock')}>
                    <img src={clock1} alt="Clock" />
                    <p>Clock</p>
                </div>
                <div onClick={() => handleCategoryClick('Lamp')}>
                    <img src={lamp1} alt="Lamp" />
                    <p>Lamp</p>
                </div>
                <div onClick={() => handleCategoryClick('Table')}>
                    <img src={table2} alt="Table" />
                    <p>Table</p>
                </div>
            </div>
            <div className="galleryWrapper">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="searchInput"
                />
                <select value={selectedArtist} onChange={handleArtistChange} className="filterSelect">
                    <option value="All">Material</option>
                    <option value="Amber">Amber</option>
                    <option value="Murano">Murano</option>
                    <option value="Jade">Jade</option>
                    <option value="Porcelain">Porcelain</option>
                    <option value="Malachite">Malachite</option>
                </select>
                <select value={selectedType} onChange={handleTypeChange} className="filterSelect">
                    <option value="All">All Types</option>
                    <option value="Vase">Vase</option>
                    <option value="Clock">Clock</option>
                    <option value="Table">Table</option>
                    <option value="Lamp">Lamp</option>
                </select>

                <div className="imagesGrid">
                    {currentImages.map((image, index) => (
                        <div
                            key={index}
                            className="imageCard"
                            onClick={() => handleImageClick(image)} // Navigate to detail page on click
                        >
                            <LazyLoad height={200} offset={100} once>
                                <img src={image.img} alt={image.title} />
                            </LazyLoad>
                            <p>{image.title}</p>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`pageButton ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {filteredImages.length === 0 && <p>No images found matching the criteria.</p>}
            </div>
        </>
    )
}

export default HomeDecor