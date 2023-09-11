import React, { useEffect, useState } from 'react'

function ShoppingStore() {
    const [product, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/clothingData')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    })

    const addToCart = (product) => {
        setCart([ ...cart, { ...product, quantity: 1 } ])
    }

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId)
        setCart(updatedCart)
    }

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map((item) => item.id === productId ? {
             ...item, quantity: item.quantity + 1
            } : item)
        setCart(updatedCart)
    }

    const decreaseQuantity = (productId) => {
        const updatedCart = cart.map((item) => item.id === productId && item.quantity > 1 ? {
            ...item, quantity: item.quantity - 1
        } : item );
        setCart(updatedCart)
    }

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

  return (
    <div className='shopping-store'>
        <header>
            <h1>Shopping Store</h1>
            <button className='cart-btn' onClick={toggleCart}>
                Cart ({ cart.reduce((totalItem, item) => totalItem + (item.quantity || 1), 0) })
            </button>
        </header>
        <div className='product-list'>
            {product.map((product) => (
                <div key={product.id} className='product'>
                    <img src={product.image} className='' alt='name' />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button className='' onClick={() => addToCart(product)}>Add To Cart</button>
                </div>
            ))}
        </div>
        {isCartOpen && (
            <div className='cart'>
                <button className='close-button' onClick={toggleCart}>
                    Close Cart
                </button>
                <h2>Cart</h2>
                {cart.map((item) => (
                    <div> </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default ShoppingStore