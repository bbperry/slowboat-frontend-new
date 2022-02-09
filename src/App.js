import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UserForm from './components/User/UserForm';
import SignupForm from './components/User/SignupForm';
import About from './components/About/About';
import Events from './components/Events/Events';
import Store from './components/Store/Store';
import Stripe from './components/Store/Stripe';
import Cart from './components/Store/Cart';
import Footer from './components/Header/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState({});

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
  console.log(currentUser.username)

  return (
    <div>
      <Header currentUser={currentUser}
       setCurrentUser={setCurrentUser} 
       />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/stripe" element={<Stripe />} />
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
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
