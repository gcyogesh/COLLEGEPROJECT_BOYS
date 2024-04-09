import React from 'react'

import TopNav from '@/app/components/TopNav'
import BottomNav from '@/app/components/BottomNav'
import UpperAbout from '@/app/components/About/UpperAbout'
import OurFeatures from '@/app/components/About/OurGoals'
import Footer from '@/app/components/Footer'



const AboutPage = () => {
  return (
    <>
    <TopNav/>
    <BottomNav/>
    <UpperAbout/>
    <OurFeatures/>
    <Footer/>
    </>
  )
}

export default AboutPage
