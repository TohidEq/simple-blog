import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Create from './components/Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

          <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
          </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
