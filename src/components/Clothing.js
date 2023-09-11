import React, { useEffect, useState } from 'react';
import './ShoppingStore.css';
import Logo from './assets/Logo.png'

function ShoppingStore() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
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
            <div className='container'>
            <header>
                <nav>
                    <img src={Logo} className='Logo'/>
                    <ul>
                        <li>
                            <a href=''>Home</a>
                        </li>
                        <li>
                            <a href=''>About</a>
                        </li>
                        <li>
                            <a href=''>Products</a>
                        </li>
                        <li>
                            <a href=''>Testimonial</a>
                        </li>
                    </ul>
                    <button className="cart-button" onClick={toggleCart}>
                        Cart ({cart.reduce((totalItems, item) => totalItems + (item.quantity || 1), 0)})
                    </button>
                </nav>

                <div className='content'>
                    <h1>Shine a Light</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> been the industry's standard dummy text ever since the 1500s,</p>

                    <div className='buttons'>
                        <button className='btn'>Get Started</button>
                    </div>
                </div>
            </header>
            </div>
            <div className='containers'>
                <h1 className='sub-title'>Products We Offer</h1>

                <div className='catalogs'>
                <div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div class="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p class="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>


    </div>
  </div>
</div>
                </div>
            </div>
            <div className='containers'>
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
