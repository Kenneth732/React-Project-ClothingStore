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

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="shopping-store">
        <nav className="navbar">
  <i className="material-icons menu-icon">
    menu
  </i>
  <div className="logo">
    <img src="https://github.com/subeshb1/GrabCheap/blob/master/img/logo_inverse.jpg?raw=true" alt="logo" />
    <div className="text">    GrabCheap
    </div>
  </div>
  <div className="item search right" tabindex="0">
    <div className="search-group">
      <select>
        <option value="all">All</option>
        <option value="all">Mens</option>
        <option value="all">Womens</option>
        <option value="all">Winter</option>
        <option value="all">Summer</option>
      </select>
    <input type="text" />
    <i className="material-icons search-icon">
      search
    </i>
      </div>
  </div>
  
  
  <a href="" className="  item">

    <div className="group">
      <i className="material-icons" >
        account_circle
      </i>
      <div className="detail">
        Account
        <div className="sub">Sign In</div>
      </div>
    </div>
  </a>

  <a href="" className="item">
    <div className="group">
      <i className="material-icons">
        shopping_cart
      </i>  
      <div className="detail">
        Cart 
        <div className="sub">Rs 0.0</div>
      </div>
    </div>
  </a>
</nav>
      <header>
        <h1>Shopping Store</h1>
        <button className="cart-button" onClick={toggleCart}>
          Cart ({cart.reduce((totalItems, item) => totalItems + (item.quantity || 1), 0)})
        </button>
      </header>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {isCartOpen && (
        <div className="cart">
          <button className="close-button" onClick={toggleCart}>
            Close Cart
          </button>
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity || 1}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                </div>
              ))}
              <div className="cart-total">
                Total: ${cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0)}
              </div>
            </div>
          )}
        </div>
      )}
      {isCartOpen && <div className="cart-backdrop" onClick={toggleCart}></div>}
    </div>
  );
}

export default ShoppingStore;
