import React, { useState } from 'react'
import "./Jewelery.css"
import contactBanner from "../../assets/images/jwel.jpg"
import { useNavigate } from 'react-router'
import img1 from "../../assets/images/jwel.jpg"

const Jewelery = () => {
    const navigate = useNavigate();
    const jewelryData = [
        { img: img1, title: 'Jewelry 1', artist: "jeweler1", type: "Gold" },
        { img: img1, title: 'Jewelry 2', artist: "jeweler2", type: "Silver" },
        { img: img1, title: 'Jewelry 3', artist: "jeweler1", type: "Diamond" },
        // Add more jewelry items as needed
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArtist, setSelectedArtist] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const itemsPerPage = 10;

    const filteredItems = jewelryData.filter(item => {
        const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesArtist = selectedArtist === 'All' || item.artist === selectedArtist;
        const matchesType = selectedType === 'All' || item.type === selectedType;
        return matchesSearchTerm && matchesArtist && matchesType;
    });

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const currentItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
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

    const handleImageClick = (item) => {
        navigate('/jewelry', { state: { img: item.img, title: item.title } });
    };
    return (
        <>
            <div className="contactBanner">
                <img src={contactBanner} alt="logo" />
                <div className="heading">
                    <h1>Jewelry</h1>
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
                    <option value="All">All Jewelers</option>
                    <option value="jeweler1">Jeweler1</option>
                    <option value="jeweler2">Jeweler2</option>
                </select>

                <select value={selectedType} onChange={handleTypeChange} className="filterSelect">
                    <option value="All">All Types</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Diamond">Diamond</option>
                </select>

                <div className="imagesGrid">
                    {currentItems.map((item, index) => (
                        <div
                            key={index}
                            className="imageCard"
                            onClick={() => handleImageClick(item)}
                        >
                            <img src={item.img} alt={item.title} />
                            <p>{item.title}</p>
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

                {filteredItems.length === 0 && <p>No items found matching the criteria.</p>}
            </div>
        </>
    )
}

export default Jewelery