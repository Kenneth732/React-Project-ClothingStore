import React, { useEffect, useState } from 'react';
import './ShoppingStore.css';

function ShoppingStore() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/clothingData')
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);