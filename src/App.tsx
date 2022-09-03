import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Create from './components/Create';
import NotFound from './components/NotFound';
import BlogDetail from './components/BlogDetail';
import { findAllByAltText, render } from '@testing-library/react';
import { type } from 'os';
import { IBlogDetailProps } from './components/BlogDetail';

export default function App()  {


  function BlogShow() {
    let id  = parseInt(useParams().id||"8");
    return(
      <>
        {id}
      </>
    )
  }

  return (
    <Router>
      <div className="App">
        <Navbar />

          <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/blogs/:id' element={<BlogDetail/>} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>

        <Footer />
      </div>
    </Router>
  );
}

