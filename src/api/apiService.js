import { mockRestaurants } from './mockData.js';

export const fetchRestaurants = () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve({ data: mockRestaurants });
    }, 500);
  });
};

export const fetchRestaurantById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const restaurant = mockRestaurants.find(r => r.id === id);
      if (restaurant) {
        resolve({ data: restaurant });
      } else {
        reject(new Error('Restaurant not found'));
      }
    }, 300);
  });
};
