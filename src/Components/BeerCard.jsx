import React from 'react';

function BeerCard({ beer }) {
  return (
    <div key={beer.id} className="beer-card">
      <img src={beer.image} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p className="price">Price: <strong>{beer.price}</strong></p>
      <div className="rating">
        <p>Reviews: <strong>{beer.rating.reviews}</strong></p>
        <p><strong>{(beer.rating.average).toFixed(1)}</strong>⭐⭐⭐</p>
      </div>
    </div>
  );
}

export default BeerCard;
