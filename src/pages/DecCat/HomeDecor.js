import React, { useState } from "react";
import "./HomeDecor.css";
import contactBanner from "../../assets/images/homedec.jpg";
import LazyLoad from "react-lazyload"; // Import LazyLoad for lazy loading
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import { useNavigate } from "react-router";
import vase1 from "../../assets/images/vases/vase1/main3.png";
import homeDecData from "../../data/homeDecData";
import clock1 from "../../assets/images/clocks/clock1/main1.png";
import table2 from "../../assets/images/tables/table2/main1.png";
import lamp1 from "../../assets/images/lamp/lamp1/main1.png";

const HomeDecor = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const imagesPerPage = 10;

  const handleCategoryClick = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const filteredImages = homeDecData.filter((image) => {
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
    navigate(`/home-decor/${image.title}`, { state: { img: image.img, title: image.title } });
  };
  return (
    <>
      <Helmet>
        <title>Home Decoration</title>
        <meta
          name="description"
          content="Explore our collection of exquisite home decoration items including vases, clocks, lamps, and tables."
        />
      </Helmet>
      <div className="contactBanner">
        <img src={contactBanner} alt="logo" />
        <div className="heading">
          <h1>Home Decoration</h1>
        </div>
      </div>
      <h1>Categories</h1>
      <div className="category2">
        <div onClick={() => handleCategoryClick("Vase")}>
          <img src={vase1} alt="Vase" />
          <p>Vase</p>
        </div>
        <div onClick={() => handleCategoryClick("Clock")}>
          <img src={clock1} alt="Clock" />
          <p>Clock</p>
        </div>
        <div onClick={() => handleCategoryClick("Lamp")}>
          <img src={lamp1} alt="Lamp" />
          <p>Lamp</p>
        </div>
        <div onClick={() => handleCategoryClick("Table")}>
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
        <select
          value={selectedArtist}
          onChange={handleArtistChange}
          className="filterSelect"
        >
          <option value="All">Material</option>
          <option value="Amber">Amber</option>
          <option value="Murano">Murano</option>
          <option value="Jade">Jade</option>
          <option value="Porcelain">Porcelain</option>
          <option value="Malachite">Malachite</option>
        </select>
        <select
          value={selectedType}
          onChange={handleTypeChange}
          className="filterSelect"
        >
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

export default HomeDecor;
