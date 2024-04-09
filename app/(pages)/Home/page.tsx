import React from "react"


import BottomNav from "@/app/components/BottomNav"
import TopNav from "@/app/components/TopNav"
import OurProgram from "@/app/components/OurProgram"
import Footer from "@/app/components/Footer"
import Testomonials from "@/app/components/Testomonials"
import ScrollToTop from "@/app/components/ScrollTop"
import Slider from "@/app/components/Slider"



const HomePage = () => {
  return (
   <>
   <TopNav/>
   <BottomNav/>
  <ScrollToTop/>
  <Slider/>
   <OurProgram/>
   <Testomonials/>
   <Footer/>
   </>
  )
}

export default HomePage

