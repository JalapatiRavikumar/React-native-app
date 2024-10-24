// api/api.js
const API_URL = 'https://fakestoreapi.com/products'; // Sample API

export const fetchItems = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};
