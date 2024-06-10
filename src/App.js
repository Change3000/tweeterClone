import React from 'react';
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Home from './views/Home.js'
import Navbar from './components/Navbar.js'
import './assets/index.css';
import './assets/tailwind.css';

// call when backend set
// <Login/>
// <Signup/>
function App() {
  return (
    <div className='flex w-full' >
      <Navbar/>
      <Home/>
      
    </div>
  );
}

export default App;
