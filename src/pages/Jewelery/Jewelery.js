import React, { useState } from "react";
import "./Jewelery.css";
import contactBanner from "../../assets/images/jewels.webp";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import LazyLoad from "react-lazyload"; // Import LazyLoad for lazy loading
import img1 from "../../assets/images/jwel.jpg";
import neck1 from "../../assets/images/jewelry/necklace/neck1/main1.jpg";
import neck2 from "../../assets/images/jewelry/necklace/neck2/main1.jpg";
import neck3 from "../../assets/images/jewelry/necklace/neck3/main1.jpg";
import neck4 from "../../assets/images/jewelry/necklace/neck4/main1.jpg";
import neck5 from "../../assets/images/jewelry/necklace/neck5/main1.jpg";
import neck6 from "../../assets/images/jewelry/necklace/neck6/main1.jpg";
import neck7 from "../../assets/images/jewelry/necklace/neck7/main1.jpg";
import neck8 from "../../assets/images/jewelry/necklace/neck8/main1.jpg";
import neck9 from "../../assets/images/jewelry/necklace/neck9/main1.jpg";
import neck10 from "../../assets/images/jewelry/necklace/neck10/main1.jpg";
import neck11 from "../../assets/images/jewelry/necklace/neck11/main1.jpg";
import neck12 from "../../assets/images/jewelry/necklace/neck12/main.jpg";
import brac1 from "../../assets/images/jewelry/braclet/brac1/main1.jpg";
import brac2 from "../../assets/images/jewelry/braclet/brac2/main3.jpg";
import brac3 from "../../assets/images/jewelry/braclet/brac3/main18.jpg";
import brac4 from "../../assets/images/jewelry/braclet/brac4/main1.jpg";
import brac5 from "../../assets/images/jewelry/braclet/brac5/main16.jpg";
import neck13 from "../../assets/images/jewelry/necklace/pendant1/main1.jpg";
import neck14 from "../../assets/images/jewelry/necklace/pendant2/main1.jpg";
import neck15 from "../../assets/images/jewelry/necklace/pendant3/main1.jpg";
import charm1 from "../../assets/images/jewelry/unique/charm1/main1.jpg";
import charm2 from "../../assets/images/jewelry/unique/charm2/main1.jpg";
import ring1 from "../../assets/images/jewelry/ring/ring1/main1.jpg";
import ring2 from "../../assets/images/jewelry/ring/ring2/main1.jpg";
import ring3 from "../../assets/images/jewelry/ring/ring3/main1.jpg";
import ring4 from "../../assets/images/jewelry/ring/ring4/main1.jpg";
import ring5 from "../../assets/images/jewelry/ring/ring5/main1.jpg";
import ring6 from "../../assets/images/jewelry/ring/ring6/main1.jpg";
import ring7 from "../../assets/images/jewelry/ring/ring7/mian1.jpg";
import ring8 from "../../assets/images/jewelry/ring/ring8/main1.jpg";
import ring9 from "../../assets/images/jewelry/ring/ring9/main1.jpg";
import ring10 from "../../assets/images/jewelry/ring/ring10/main1.jpg";
import ring11 from "../../assets/images/jewelry/ring/ring11/main1.jpg";
import ring12 from "../../assets/images/jewelry/ring/ring12/main1.jpg";
import ring13 from "../../assets/images/jewelry/ring/ring13/main1.jpg";
import earing1 from "../../assets/images/jewelry/earing/earing/main1.jpg";
import earing2 from "../../assets/images/jewelry/earing/earing1/main1.jpg";
import earing3 from "../../assets/images/jewelry/earing/earing2/main1.png";
import earing4 from "../../assets/images/jewelry/earing/earing3/main1.jpg";
import earing5 from "../../assets/images/jewelry/earing/earing4/main1.jpg";
import earing6 from "../../assets/images/jewelry/earing/earing5/main1.jpg";

const Jewelery = () => {
  const navigate = useNavigate();
  const jewelryData = [
    {
      img: ring1,
      title: "Radiant Yellow Diamond Halo Ring",
      artist: "Diamond",
      type: "ring",
    },
    {
      img: ring2,
      title: "Black Rose Ring with Diamonds",
      artist: "Diamond",
      type: "ring",
    },
    {
      img: ring3,
      title: "Blue Flower Ring with Diamonds",
      artist: "Diamond",
      type: "ring",
    },
    {
      img: ring4,
      title: "Swirl Diamond Ring",
      artist: "Diamond",
      type: "ring",
    },
    {
      img: ring5,
      title: "Classic Diamond Ring",
      artist: "Diamond",
      type: "ring",
    },
    {
      img: ring6,
      title: "Royal Blue Sapphire Ring",
      artist: "Diamond",
      type: "ring",
    },
    {
      img: ring7,
      title: "Coral Jade and Diamond Ring",
      artist: "Jade",
      type: "ring",
    },
    {
      img: ring8,
      title: "Unique Diamond Flower Ring",
      artist: "Diamond",
      type: "ring",
    },
    {
      img: ring9,
      title: "Elegant Floral Diamond Ring",
      artist: "Diamond",
      type: "ring",
    },
    {
      img: ring10,
      title: "Pink Sapphire and Topaz Halo Ring",
      artist: "Diamond",
      type: "ring",
    },
    {
      img: ring11,
      title: "Rainbow Sapphire Ring",
      artist: "Diamond",
      type: "ring",
    },
    {
      img: ring12,
      title: "Emerald and Diamond Halo Ring",
      artist: "Diamond",
      type: "ring",
    },
    {
      img: ring13,
      title: "Lavender Jade and Diamond Ring",
      artist: "Jade",
      type: "ring",
    },
    {
      img: brac1,
      title: "Green Jade Bracelet",
      artist: "Jade",
      type: "bracelet",
    },
    {
      img: brac2,
      title: "Special Lavendar Jade Bracelet",
      artist: "Jade",
      type: "bracelet",
    },
    {
      img: brac3,
      title: "Lavendar Jade beads Bracelet",
      artist: "Jade",
      type: "bracelet",
    },
    {
      img: brac4,
      title: "Green Jade beads Bracelet",
      artist: "Jade",
      type: "bracelet",
    },
    {
      img: brac5,
      title: "Lavendar Jade Bracelet",
      artist: "Jade",
      type: "bracelet",
    },
    {
      img: neck1,
      title: "Vibrant Coral Bead Necklace",
      artist: "necklace",
      type: "necklace",
    },
    {
      img: neck2,
      title: "Elegant Coral and Diamond Necklace",
      artist: "Jade",
      type: "necklace",
    },
    {
      img: neck3,
      title: "Elegant Jade Bead Necklace",
      artist: "Jade",
      type: "necklace",
    },
    {
      img: neck4,
      title: "Elegant Black Pearl Necklace",
      artist: "Pearl",
      type: "necklace",
    },
    {
      img: neck5,
      title: "Sapphire and Diamond Flower Necklace",
      artist: "Diamond",
      type: "necklace",
    },
    {
      img: neck6,
      title: "Elegant Red and White Pearl Necklace",
      artist: "Pearl",
      type: "necklace",
    },
    {
      img: neck7,
      title: "Intricate Jade Carving Necklace",
      artist: "Jade",
      type: "necklace",
    },
    {
      img: neck8,
      title: "Mother-of-Pearl and Diamond Necklace",
      artist: "Pearl",
      type: "necklace",
    },
    {
      img: neck9,
      title: "Dazzling Diamond Waterfall Necklace",
      artist: "Diamond",
      type: "necklace",
    },
    {
      img: neck10,
      title: "Delicate Diamond Filigree Necklace",
      artist: "Diamond",
      type: "necklace",
    },
    {
      img: neck11,
      title: "Timeless Jade Pendant Necklace",
      artist: "Jade",
      type: "necklace",
    },
    // { img: neck12, title: 'Jewelry 3', artist: "jeweler1", type: "Diamond" },
    {
      img: neck13,
      title: "Jade Swan Necklace",
      artist: "Jade",
      type: "necklace",
    },
    {
      img: neck14,
      title: "Chinese Mythology Jade Pendant",
      artist: "Jade",
      type: "necklace",
    },
    {
      img: neck15,
      title: "Chinese Jade Deity Pendant",
      artist: "Jade",
      type: "necklace",
    },
    {
      img: charm1,
      title: "Intricate Jade Carving Pendant",
      artist: "Jade",
      type: "necklace",
    },
    {
      img: charm2,
      title: "Timeless Jade Necklace Pendant",
      artist: "Jade",
      type: "necklace",
    },

    {
      img: earing1,
      title: "Black Pearl and Diamond Earrings",
      artist: "Diamond",
      type: "earing",
    },
    {
      img: earing2,
      title: "Classic Diamond Flower Earrings",
      artist: "Diamond",
      type: "earing",
    },
    {
      img: earing3,
      title: "Modernist Diamond Earrings",
      artist: "Diamond",
      type: "earing",
    },
    {
      img: earing4,
      title: "Classic Jade and Diamond Earrings",
      artist: "Jade",
      type: "earing",
    },
    {
      img: earing5,
      title: "Pearl and Diamond Elegance",
      artist: "Pearl",
      type: "earing",
    },
    {
      img: earing6,
      title: "Coral Jade and Diamond Earring",
      artist: "Jade",
      type: "earing",
    },

    // Add more jewelry items as needed
  ];

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
