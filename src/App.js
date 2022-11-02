import React from 'react'
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';

import "./styles/App.scss";
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/mediaQuery.scss"



const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/services" element={<Services />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App