import React, { useState } from "react";
import "./Jewelery.css";
import contactBanner from "../../assets/images/jewels.webp";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import LazyLoad from "react-lazyload"; // Import LazyLoad for lazy loading
import jewelryData from "../../data/jewelryData";
import neck5 from "../../assets/images/jewelry/necklace/neck5/main1.jpg";
import brac1 from "../../assets/images/jewelry/braclet/brac1/main1.jpg";
import ring1 from "../../assets/images/jewelry/ring/ring1/main1.jpg";
import earing2 from "../../assets/images/jewelry/earing/earing1/main1.jpg";

const Jewelery = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const itemsPerPage = 10;

  const handleCategoryClick = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const filteredItems = jewelryData.filter((item) => {
    const matchesSearchTerm = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesArtist =
      selectedArtist === "All" || item.artist === selectedArtist;
    const matchesType = selectedType === "All" || item.type === selectedType;
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
    navigate("/jewelry", { state: { img: item.img, title: item.title } });
  };
  return (
    <>
      <Helmet>
        <title>Jewelry Collection</title>
        <meta
          name="description"
          content="Explore our exclusive jewelry collection featuring rings, necklaces, earrings, and bracelets made from diamonds, jade, and pearls."
        />
      </Helmet>
      <div className="contactBanner">
        <img src={contactBanner} alt="logo" />
        <div className="heading">
          <h1>Jewelry</h1>
        </div>
      </div>

      <h1>Categories</h1>
      <div className="category2">
        <div onClick={() => handleCategoryClick("bracelet")}>
          <img src={brac1} alt="Bracelet" />
          <p>Bracelet</p>
        </div>
        <div onClick={() => handleCategoryClick("necklace")}>
          <img src={neck5} alt="Necklace" />
          <p>Necklace</p>
        </div>
        <div onClick={() => handleCategoryClick("ring")}>
          <img src={ring1} alt="Ring" />
          <p>Ring</p>
        </div>
        <div onClick={() => handleCategoryClick("earing")}>
          <img src={earing2} alt="Earing" />
          <p>Earing</p>
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
          <option value="Jade">Jade</option>
          <option value="Diamond">Diamond</option>
          <option value="Pearl">Pearl</option>
        </select>

        <select
          value={selectedType}
          onChange={handleTypeChange}
          className="filterSelect"
        >
          <option value="All">All Types</option>
          <option value="ring">Ring</option>
          <option value="necklace">Necklace</option>
          <option value="bracelet">Bracelet</option>
          <option value="earing">Earing</option>
        </select>

        <div className="imagesGrid">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="imageCard"
              onClick={() => handleImageClick(item)}
            >
              <LazyLoad height={200} offset={100} once>
                <img src={item.img} alt={item.title} />
              </LazyLoad>
              <p>{item.title}</p>
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

        {filteredItems.length === 0 && (
          <p>No items found matching the criteria.</p>
        )}
      </div>
    </>
  );
};

export default Jewelery;
