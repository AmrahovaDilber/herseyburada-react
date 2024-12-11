const API_KEY="6759b8c7099e3090dbe2b76e"

export const API_URL = `https://${API_KEY}.mockapi.io/herseyburada`;

export const ENDPOINTS = {
  categories: 'categories',
};

// Function to construct the full API URL
export const getFullUrl = (endpoint) => `${API_URL}/${endpoint}`;
