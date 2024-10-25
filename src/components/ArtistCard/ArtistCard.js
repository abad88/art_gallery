import React from 'react'
import "./ArtistCard.css"

const ArtistCard = ({artist}) => {
  return (
    <>
    <div className="artistCard">
        <img src={artist.img} alt={artist.name} className="artistImage" />
        <div className="artistInfo">
        <h1>Our Artists</h1>
            <h3>{artist.name}</h3>
            <p>{artist.description}</p>
        </div>
    </div> 
    </>
  )
}

export default ArtistCard
