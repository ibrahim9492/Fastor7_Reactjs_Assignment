import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRestaurantById } from '../api/apiService';
import Header from '../components/Header';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRestaurant = async () => {
      try {
        const response = await fetchRestaurantById(id);
        setRestaurant(response.data);
      } catch (err) {
        setError('Restaurant not found');
      } finally {
        setLoading(false);
      }
    };
    loadRestaurant();
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
        try {
            // Try to share with file (works on mobile)
            const response = await fetch(restaurant.imageURL);
            const blob = await response.blob();
            const file = new File([blob], `${restaurant.name.replace(/\s+/g, '-')}-image.png`, { type: 'image/png' });

            await navigator.share({
                files: [file],
                title: `Check out ${restaurant.name}!`,
                text: `Amazing restaurant: ${restaurant.name} - ${restaurant.address}`,
            });
        } catch (error) {
            console.error('File sharing failed, trying URL sharing:', error);
            // Fallback to sharing URL and text only
            try {
                await navigator.share({
                    title: `Check out ${restaurant.name}!`,
                    text: `Amazing restaurant: ${restaurant.name} - ${restaurant.address}`,
                    url: restaurant.imageURL,
                });
            } catch (fallbackError) {
                console.error('URL sharing also failed:', fallbackError);
                // Final fallback: copy to clipboard or download
                handleFallbackShare();
            }
        }
    } else {
        // Browser doesn't support Web Share API
        handleFallbackShare();
    }
};

  const handleFallbackShare = () => {
    // Fallback: Copy share text to clipboard and show download option
    const shareText = `Check out ${restaurant.name}!\nAmazing restaurant: ${restaurant.name} - ${restaurant.address}\nImage: ${restaurant.imageURL}`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Share information copied to clipboard! You can now paste it to share.');
        }).catch(() => {
            alert('Unable to copy to clipboard. Share text:\n\n' + shareText);
        });
    } else {
        alert('Share text:\n\n' + shareText);
    }

    // Also offer to download the image
    const link = document.createElement('a');
    link.href = restaurant.imageURL;
    link.download = `${restaurant.name.replace(/\s+/g, '-')}-image.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="restaurant-detail-container">
      <Header title={restaurant.name} />
      <div className="restaurant-detail-content">
        <div className="restaurant-info-section">
          <div className="restaurant-details">
            <p>Address: {restaurant.address}</p>
            <p>Rating: {restaurant.rating}/5</p>
          </div>
          <div className="restaurant-description-full">
            <h3>About {restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <p>Experience exceptional dining at {restaurant.name}, where culinary excellence meets warm hospitality. Our dedicated team of chefs uses only the finest ingredients to create dishes that delight the senses and create lasting memories.</p>
            <p>Whether you're planning a romantic dinner, celebrating a special occasion, or simply enjoying a meal with friends and family, {restaurant.name} offers the perfect setting for your culinary journey.</p>
            <p>Our commitment to quality extends beyond our food - we pride ourselves on providing outstanding service in a comfortable, inviting atmosphere that makes every visit memorable.</p>
            <p>Join us and discover why {restaurant.name} has become a beloved destination for food lovers in the community. We look forward to welcoming you and sharing our passion for exceptional cuisine.</p>
          </div>
        </div>
        <div className="restaurant-image-section">
          <img src={restaurant.imageURL} alt={restaurant.name} className="restaurant-detail-image" />
        </div>
      </div>
      <button onClick={handleShare} className="share-button">Share Image</button>
    </div>
  );
};

export default RestaurantDetail;
