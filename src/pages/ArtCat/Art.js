import React, { useState } from 'react'
import "./Art.css"
import img1 from "../../assets/images/artpiece/eka1.jpg"

const Art = () => {
    // Sample image data with titles
    const imageData = [
        { img: img1, title: 'Image 1' },
        { img: img1, title: 'Image 2' },
        { img: img1, title: 'Image 3' },
        { img: img1, title: 'Image 4' },
        { img: img1, title: 'Image 5' },
        { img: img1, title: 'Image 6' },
        { img: img1, title: 'Image 7' },
        { img: img1, title: 'Image 8' },
        { img: img1, title: 'Image 9' },
        { img: img1, title: 'Image 10' },
        { img: img1, title: 'Image 11' },
        { img: img1, title: 'Image 12' },
        { img: img1, title: 'Image 13' },
        { img: img1, title: 'Image 14' },
        { img: img1, title: 'Image 15' },
        { img: img1, title: 'Image 16' },
        { img: img1, title: 'Image 17' },
        { img: img1, title: 'Image 18' },
        { img: img1, title: 'Image 19' },
        { img: img1, title: 'Image 20' },
        // Add more images as needed
    ];

    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const imagesPerPage = 10; // Number of images per page

    // Calculate the total number of pages
    const totalPages = Math.ceil(imageData.length / imagesPerPage);

    // Get the images to display on the current page
    const currentImages = imageData.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
    );

    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <h1>Art Category</h1>

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


            <div className="galleryWrapper">
                <div className="imagesGrid">
                    {currentImages.map((image, index) => (
                        <div key={index} className="imageCard">
                            <img src={image.img} alt={image.title} />
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
            </div>
        </>
    )
}

export default Art