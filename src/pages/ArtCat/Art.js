import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload"; // Import LazyLoad for lazy loading
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import "./Art.css";
import contactBanner from "../../assets/images/artcc.jpg";
import imageData from "../../data/imageData";

const Art = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const imagesPerPage = 10;

  const filteredImages = imageData.filter((image) => {
    const matchesSearchTerm = image.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesArtist =
      selectedArtist === "All" || image.artist === selectedArtist;
    const matchesType = selectedType === "All" || image.type === selectedType;
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
    navigate(`/art/${image.title}`, { state: { img: image.img, title: image.title } });
  };

  return (
    <>
      <Helmet>
        <title>Art Gallery - 24 CPS Art Gallery</title>
        <meta
          name="description"
          content="Explore a diverse collection of art pieces at 24 CPS Art Gallery. Discover works from renowned artists and enhance your art collection."
        />
        <link rel="canonical" href="/art" />
      </Helmet>

      <div className="contactBanner">
        <img src={contactBanner} alt="Art Gallery Banner" />
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

        <select
          value={selectedArtist}
          onChange={handleArtistChange}
          className="filterSelect"
        >
          <option value="All">All Artists</option>
          <option value="Eka Peradze">Eka Peradze</option>
          <option value="Vincent">Vincent</option>
          <option value="Alexandra Chateaux">Alexandra Chateaux</option>
          <option value="Lee Seoung">Lee Seoung</option>
          <option value="Peter Max">Peter Max</option>
        </select>

        <select
          value={selectedType}
          onChange={handleTypeChange}
          className="filterSelect"
        >
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
              className={`pageButton ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p>No images found matching the criteria.</p>
        )}
      </div>
    </>
  );
};

export default Art;
