// services/apiService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

// Example function to fetch all products
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
