import React, { useState } from 'react'
import "./Art.css"
import img1 from "../../assets/images/artpiece/eka1.jpg"

const Art = () => {
    // Sample image data with titles
    const imageData = [
        { img: img1, title: 'Image 1', artist: "artist1", type: "3D" },
        { img: img1, title: 'Image 2', artist: "artist2", type: "3D" },
        { img: img1, title: 'Image 3', artist: "artist1", type: "3D" },
        { img: img1, title: 'Image 4', artist: "artist1", type: "3D" },
        { img: img1, title: 'Image 5', artist: "artist1", type: "3D" },
        { img: img1, title: 'Image 6', artist: "artist2", type: "3D" },
        { img: img1, title: 'Image 7', artist: "artist1", type: "2D" },
        { img: img1, title: 'Image 8', artist: "artist1", type: "2D" },
        { img: img1, title: 'Image 9', artist: "artist1", type: "3D" },
        { img: img1, title: 'Image 10', artist: "artist2", type: "3D" },
        { img: img1, title: 'Image 11', artist: "artist2", type: "3D" },
        { img: img1, title: 'Image 12', artist: "artist1", type: "3D" },
        { img: img1, title: 'Image 13', artist: "artist1", type: "3D" },
        { img: img1, title: 'Image 14', artist: "artist1", type: "4D" },
        { img: img1, title: 'Image 15', artist: "artist3", type: "4D" },
        { img: img1, title: 'Image 16', artist: "artist1", type: "3D" },
        { img: img1, title: 'Image 17', artist: "artist1", type: "3D" },
        { img: img1, title: 'Image 18', artist: "artist1", type: "3D" },
        { img: img1, title: 'Image 19', artist: "artist1", type: "3D" },
        { img: img1, title: 'Image 20', artist: "artist1", type: "3D" },
        // Add more images as needed
    ];

    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const [searchTerm, setSearchTerm] = useState(''); // Track search input
    const [selectedArtist, setSelectedArtist] = useState('All'); // Filter by artist
    const [selectedType, setSelectedType] = useState('All'); // Filter by art type
    const imagesPerPage = 10; // Number of images per page

    // Filter images based on search term, selected artist, and selected type
    const filteredImages = imageData.filter(image => {
        const matchesSearchTerm = image.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesArtist = selectedArtist === 'All' || image.artist === selectedArtist;
        const matchesType = selectedType === 'All' || image.type === selectedType;
        return matchesSearchTerm && matchesArtist && matchesType;
    });

    // Calculate total pages after filtering
    const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

    // Get the images to display on the current page
    const currentImages = filteredImages.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
    );

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Handle search input change
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to page 1 after search
    };

    // Handle artist filter change
    const handleArtistChange = (e) => {
        setSelectedArtist(e.target.value);
        setCurrentPage(1); // Reset to page 1 after filter
    };

    // Handle type filter change
    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setCurrentPage(1); // Reset to page 1 after filter
    };

    return (
        <>
            <h1>Art Category</h1>

            <div className="galleryWrapper">
                {/* Search input */}
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="searchInput"
                />

                {/* Filter by Artist */}
                <select value={selectedArtist} onChange={handleArtistChange} className="filterSelect">
                    <option value="All">All Artists</option>
                    <option value="artist1">Artist1</option>
                    <option value="artist2">Artist2</option>
                    <option value="artist3">Artist3</option>
                </select>

                {/* Filter by Type */}
                <select value={selectedType} onChange={handleTypeChange} className="filterSelect">
                    <option value="All">All Types</option>
                    <option value="3D">3D Art</option>
                    <option value="2D">2D Art</option>
                    <option value="4D">4D Art</option>
                </select>

                <div className="imagesGrid">
                    {currentImages.map((image, index) => (
                        <div key={index} className="imageCard">
                            <img src={image.img} alt={image.title} />
                            <p>{image.title}</p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
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

                {/* Display message if no images found */}
                {filteredImages.length === 0 && <p>No images found matching the criteria.</p>}
            </div>
        </>
    )
}

export default Art