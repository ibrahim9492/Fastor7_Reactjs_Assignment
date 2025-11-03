import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRestaurants } from '../api/apiService';
import RestaurantCard from '../components/RestaurantCard';
import Header from '../components/Header';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const response = await fetchRestaurants();
        setRestaurants(response.data);
      } catch (err) {
        setError('Failed to load restaurants');
      } finally {
        setLoading(false);
      }
    };
    loadRestaurants();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="restaurant-list-container">
      <Header title="Nearby Restaurants" />
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
