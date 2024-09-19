import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home.jsx';
import PO from './Pages/PO/PO';
import Cart from './Pages/Cart/Cart.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Loginpopup from './Components/LoginPopup/Loginpopup.jsx';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin? <Loginpopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PO />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
