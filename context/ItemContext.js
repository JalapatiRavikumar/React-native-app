// context/ItemContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchItems } from '../api/api';

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadItems = async () => {
            const data = await fetchItems();
            setItems(data);
        };
        loadItems();
    }, []);

    return (
        <ItemContext.Provider value={{ items }}>
            {children}
        </ItemContext.Provider>
    );
};

export const useItems = () => useContext(ItemContext);
