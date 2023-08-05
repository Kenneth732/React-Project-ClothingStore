import React, { useEffect, useState } from 'react';
import './ShoppingStore.css';

function ShoppingStore() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);