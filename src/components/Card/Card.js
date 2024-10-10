import React from 'react'
import "./Card.css"

const Card = ({ img, title }) => {
    return (
        <div className='cardBorder'>
            <img src={img} alt="img" />
            <h3>{title}</h3>
        </div>
    )
}

export default Card