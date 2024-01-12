import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import Navbar from './globals/Navbar';
import FloatingNav from './globals/FloatingNav';
import Footer from './globals/Footer';

function App() {
  
  return (
    <div className="App"> 
     <Navbar />  
     <FloatingNav /> 
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/ContactUs" element={<ContactUs contact={indexData}/>} /> */}
  
            </Routes>  
            <Footer /> 
        </div>
  );
}

export default App;