import React from 'react';

const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div
      className="restaurant-card"
      onClick={() => onClick(restaurant.id)}
    >
      <img src={restaurant.imageURL} alt={restaurant.name} className="restaurant-image" />
      <div className="restaurant-info">
        <h3 className="restaurant-name">{restaurant.name}</h3>
        <p className="restaurant-address">{restaurant.address}</p>
        <div className="restaurant-rating">Rating: {restaurant.rating}/5</div>
        <p className="restaurant-description">
          {restaurant.description.length > 100
            ? `${restaurant.description.substring(0, 100)}...`
            : restaurant.description
          }
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
