import React from 'react';
import Register from './views/Register';
import Home from './views/Home';
import Profile from './views/Profile';
import Login from './views/Login';
import Navbar from './components/Navbar';
import TweetCard from './components/Tweet';
import './assets/index.css';
import './assets/tailwind.css';

function App() {
  return (
    <div className='flex w-full' >
      <Register/>
      <Login/>
      <Navbar/>
      <TweetCard/>
      <Profile/>
      <Home />
    </div>
  );
}

export default App;
