import axios from 'axios';

const API_KEY = process.env.REACT_APP_CALORIE_NINJAS_API_KEY;
const BASE_URL = process.env.REACT_APP_CALORIE_NINJAS_API_URL;

export const getNutritionData = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/nutrition`, {
      params: { query },
      headers: { 'X-Api-Key': API_KEY }
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    throw error;
  }
};