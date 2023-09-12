import React, { useEffect, useState } from 'react';
import './ShoppingStore.css';

function ShoppingStore() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        // fetch('http://localhost:3000/clothingData')
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
                <div class="flex flex-wrap place-items-top">
                    <section class="relative mx-auto">
                        <nav class="flex justify-between bg-gray-900 text-white w-screen">
                            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                                <a class="text-3xl font-bold font-heading" href="#">
                                    Shine <span className='span'>Light</span>
                                </a>
                                <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                    <li><a class="hover:text-gray-200" href="#">Home</a></li>
                                    <li><a class="hover:text-gray-200" href="#">Catagory</a></li>
                                    <li><a class="hover:text-gray-200" href="#">Collections</a></li>
                                    <li><a class="hover:text-gray-200" href="#">Contact Us</a></li>
                                </ul>
                                <div class="hidden xl:flex items-center space-x-5 items-center">
                                    <a class="hover:text-gray-200" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="xl:flex items-center space-x-5 items-center">
                                    {/* <i class="fab fa-opencart" onClick={toggleCart}></i> */}
                                    <button className="cart-button" onClick={toggleCart}>
                                        <div class="cart-container">
                                            <i class="fab fa-opencart" onClick={toggleCart}></i>
                                            <p class="cart-item-count">
                                                ({cart.reduce((totalItems, item) => totalItems + (item.quantity || 1), 0)})
                                            </p>
                                        </div>
                                    </button>

                                </div>
                            </div>
                        </nav>

                    </section>
                </div>
                <div className='content'>
                    <h1>Shine a Light</h1>
                    <p class="mt-2 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> been the industry's standard dummy text ever since the 1500s,</p>

                    <div className='buttons'>
                        <button className='btn'>Get Started</button>
                    </div>
                </div>
            </div>
            <div className='px'>
                <div class="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
                    <div class="max-w-lg">
                        <h1 class="text-2xl font-bold text-gray-800">Beep Essences</h1>
                        <p class="mt-2 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias. Quas necessitatibus exercitationem praesentium.</p>
                    </div>
                    <div class="">
                        <button class="flex whitespace-nowrap rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition hover:translate-y-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Chat with us
                        </button>
                        <p class="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            +254 0742164615
                        </p>
                    </div>
                </div>
            </div>
            <div className='containers'>
                <h1 className='sub-title'>Products We Offer</h1>

                <div className='catalogs'>
                </div>
            </div>
            <div className='containers'>
                <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
                    {products.map((product) => (
                        <div key={product.id} class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                            <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                                <img class="peer absolute top-0 right-0 h-full w-full object-cover" src={product.image} alt="product image" />
                                <img class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                                <svg class="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
                            </a>
                            <div class="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 class="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                                </a>
                                <div class="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span class="text-3xl font-bold text-slate-900">${product.price}</span>
                                        <span class="text-sm text-slate-900 line-through">$699</span>
                                    </p>
                                </div>
                                <a onClick={() => addToCart(product)} href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to cart</a >
                            </div>
                        </div>

                    ))}
                </div>
            </div>

            {isCartOpen && (
                <div className="cart">
                    <button className="close-button" onClick={toggleCart}>
                    <i class="fas fa-times"></i>
                    </button>
                    <h2>Cart</h2>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <div>
                            {/* className='relative flex flex-1 flex-col justify-between' */}
                            {cart.map((item) => (
                                <div key={item.id} className="w-full cart-item mx-auto mt-8 max-w-2xl md:mt-12">
                                    <div className='relative flex flex-1 flex-col justify-between'>
                                        <div class="relative flex flex-1 flex-col justify-between">
                                            <img class="h-24 w-24 max-w-full rounded-lg object-cover" src={item.image} alt="" />
                                        </div>
                                        <h3 className='text-base font-semibold text-gray-900'>{item.name}</h3>
                                        <p className='flex w-full items-center justify-center'>{item.quantity || 1}</p>

                                        <div class="sm:order-1">
                                            <div class="mx-auto flex h-8 items-stretch text-gray-600">
                                                <button
                                                    class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                                    onClick={() => decreaseQuantity(item.id)}>-</button>

                                                <button className='flex w-full items-center justify-center bg-black-100 px-4 text-xs uppercase transition' onClick={() => removeFromCart(item.id)}>Remove</button>
                                                <button
                                                    class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                                    onClick={() => increaseQuantity(item.id)}>+</button>
                                            </div>
                                        </div>
                                    </div>
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
