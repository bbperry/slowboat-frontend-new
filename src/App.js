import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UserForm from './components/User/UserForm';
import About from './components/About/About';
import Events from './components/Events/Events';
import ProductList from './components/Store/ProductList';
import ProductDetails from './components/Store/ProductDetails';
import Stripe from './components/Store/Stripe';
import Cart from './components/Store/Cart';
import Footer from './components/Header/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState([]);

  // Auth
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setCurrentUser(data);
          console.log(data);
        });
    }
  }, []);

  const handleLogin = (currentUser) => {
    setCurrentUser(currentUser);
  };

  // const handleAuthClick = () => {
  //   const token = localStorage.getItem('token');
  //   fetch(`http://localhost:3000/user_is_authed`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data));
  // };

  console.log(currentUser);
  console.log(currentUser.username);

  // useEffect(() => {
  //   fetch('http://localhost:3000/cart_items')
  //     .then((res) => res.json())
  //     .then(setCart);
  // }, [deletes, updateCart]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [price]);


  return (
    <div>
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        
      />

      <Routes>
        <Route path="/products/:id" element={<ProductDetails price={price} setPrice={setPrice} />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events currentUser={currentUser} />} />
        <Route path="/store" element={<ProductList products={products} currentUser={currentUser} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/stripe/:id" element={<Stripe />} />
        <Route
          path="/login"
          element={
            <UserForm
              handleLogin={handleLogin}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        {/* <Route path="/signup" element={<SignupForm />}/> */}
        <Route path="/" element={<Home currentUser={currentUser} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// testing