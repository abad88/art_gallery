import React, { useState } from 'react';
import "./Accordion.css";

// Single Accordion Item Component
const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false); // State to track if accordion is open or closed

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={toggleAccordion}>
                <h2>{title}</h2>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

// Accordion Component
const Accordion = ({ data }) => {
    return (
        <div className="accordion">
            <AccordionItem title={"Material"} content={data.author} />
            <AccordionItem title={"Detail"} content={data.detail} />
        </div>
    );
};

export default Accordion;
