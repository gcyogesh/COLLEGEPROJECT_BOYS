import React from "react"
import BottomNav from "../components/BottomNav"
import Slider from "../components/Slider"
import TopNav from "../components/TopNav"
import OurProgram from "../components/OurProgram"
import Footer from "../components/Footer"
import Testomonials from "../components/Testomonials"
import ScrollTop from "../components/ScrollTop"


const HomePage = () => {
  return (
   <>
   <TopNav/>
   <BottomNav/>
   <ScrollTop/>
   <Slider/>
   <OurProgram/>
   <Testomonials/>
   <Footer/>
   </>
  )
}

export default HomePage