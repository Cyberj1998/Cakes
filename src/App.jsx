import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './componennts/Navbar';
import Hero from './componennts/Hero';
import Shop from './componennts/Shop';
import Cart from './componennts/Cart';
import Bento from './componennts/Bento';
import Marquee from './componennts/Marquee';
import Selector from './componennts/Selector';
import LateralScroll from './componennts/LateralScroll';
import Extension from './componennts/Extension';
import { gsap } from "gsap";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollSmoother);
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    ScrollSmoother.create({
      smooth: 2,
      effects: true
    })
  },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <div id='smooth-wrapper'>
              <div id='smooth-content'>
                <Navbar/>
                <Hero /> 
                <Bento />
                <Marquee />
                <Selector />
                <Marquee />
                <LateralScroll />
                <Extension />
              </div>
            </div>
          </>
          } 
        />
        <Route path="/shop" element={
          <>
            <Navbar/>
            <Shop />
          </>
          } 
        />
        <Route path="/cart" element={
          <>
            <Navbar/>
            <Cart />
          </>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
