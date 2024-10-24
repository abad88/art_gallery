import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazyload'; // Import LazyLoad for lazy loading
import './Art.css';
import img1 from '../../assets/images/artpiece/eka1.jpg';
import contactBanner from '../../assets/images/artcc.jpg';
import ekImg1 from "../../assets/images/eka/img1/converted/main1.jpg"
import ekImg4 from "../../assets/images/eka/img2/converted/main1.jpg"
import ekImg7 from "../../assets/images/eka/img3/converted/main1.jpg"
import ekImg10 from "../../assets/images/eka/img4/converted/main.jpg"
import ekImg13 from "../../assets/images/eka/img5/converted/main1.jpg"
import ekImg16 from "../../assets/images/eka/img6/converted/main1.jpg"
import ekImg19 from "../../assets/images/eka/img7/converted/main1.jpg"
import alex1 from "../../assets/images/alexandria/img1/main1.jpg"
import alex2 from "../../assets/images/alexandria/img2/main1.jpg"
import lee from "../../assets/images/Lee/main1.jpg"
import vincent from "../../assets/images/vincent/main1.jpg"
import max1 from "../../assets/images/max/art1/main1.jpg"
import max2 from "../../assets/images/max/art2/main1.jpg"

const Art = () => {
    const navigate = useNavigate();
    const imageData = [
        { img: ekImg1, title: 'Action.Family (Arcylic Painting)', artist: "Eka Peradze", type: "3D" },
        { img: ekImg4, title: 'Love.Family.Action (Arcylic Painting)', artist: "Eka Peradze", type: "3D" },
        { img: ekImg7, title: 'Action.Freedom (Arcylic Painting)', artist: "Eka Peradze", type: "3D" },
        { img: ekImg10, title: 'Freedom.Love (Arcylic Painting)', artist: "Eka Peradze", type: "3D" },
        { img: ekImg13, title: 'Action.Freedom.Love (Arcylic Painting)', artist: "Eka Peradze", type: "3D" },
        { img: ekImg16, title: 'Love.Action (Arcylic Painting)', artist: "Eka Peradze", type: "3D" },
        { img: ekImg19, title: 'Freedom.Action (Arcylic Painting)', artist: "Eka Peradze", type: "3D" },
        { img: alex1, title: 'Butterflies on Blue', artist: "Alexandra Chateaux", type: "3D" },
        { img: alex2, title: 'Butterflies on Gray', artist: "Alexandra Chateaux", type: "3D" },
        { img: lee, title: 'Abstract Potrait', artist: "Lee Seoung", type: "3D" },
        { img: vincent, title: 'Butterfly Symphony', artist: "Vincent", type: "3D" },
        { img: max1, title: 'Peter Max Premium Art', artist: "Peter Max", type: "2D" },
        { img: max2, title: 'Peter Max Premium Art 2', artist: "Peter Max", type: "2D" },
        // Add more images as needed
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArtist, setSelectedArtist] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const imagesPerPage = 10;

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
        navigate('/art', { state: { img: image.img, title: image.title } });
    };

    return (
        <>
            <div className="contactBanner">
                <img src={contactBanner} alt="logo" />
                <div className="heading">
                    <h1>Art Category</h1>
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
                    <option value="All">All Artists</option>
                    <option value="Eka Peradze">Eka Peradze</option>
                    <option value="Vincent">Vincent</option>
                    <option value="Alexandra Chateaux">Alexandra Chateaux</option>
                    <option value="Lee Seoung">Lee Seoung</option>
                    <option value="Peter Max">Peter Max</option>
                </select>

                <select value={selectedType} onChange={handleTypeChange} className="filterSelect">
                    <option value="All">All Types</option>
                    <option value="3D">3D Art</option>
                    <option value="2D">2D Art</option>
                </select>

                <div className="imagesGrid">
                    {currentImages.map((image, index) => (
                        <div
                            key={index}
                            className="imageCard"
                            onClick={() => handleImageClick(image)} // Navigate to ArtPage on click
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
    );
};

export default Art;
