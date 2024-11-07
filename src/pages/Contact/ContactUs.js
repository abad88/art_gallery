import React from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import "./ContactUs.css";
import contactBanner from "../../assets/images/artcc.jpg";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Art Gallery</title>
        <meta
          name="description"
          content="Get in touch with us at our New York gallery. Find our location, contact information, and opening hours."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="contactBanner">
        <img src={contactBanner} alt="Contact Us Banner" loading="lazy" />
        <div className="heading">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contentBorder">
        <div className="contactContent">
          <h2>Location</h2>
          <h3>
            24 Central Park South, New York, New York 10019, United States
          </h3>
        </div>

        <div className="contactContent">
          <h2>Contact Information</h2>
          <h3>Tel: 212-588-8700</h3>
          <h3>Email: 24cpsgallery@gmail.com</h3>
        </div>

        <div className="contactContent">
          <h2>Opening Hours</h2>
          <h3>Monday-Sunday 10:00AM - 07:00PM</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
