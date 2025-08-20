import React from 'react'
import Navbar from '../Component/Navbar'
import Homebanner from '../Component/Homebanner'
import AboutNprcet from '../Component/AboutNprcet'
import AboutAcm from '../Component/AboutAcm'
import VsMisGo from '../Component/VsMisGo'
import Sponsors from '../Component/Sponsors'
import Contactsec from '../Component/Contactsec'
import Footer from '../Component/Footer'

function HomePage() {
  return (
    <>
    <Navbar/>
    <Homebanner/>
    <AboutNprcet/>
    <AboutAcm/>
    <VsMisGo/>
    <Sponsors/>
    <Contactsec/>
    <Footer/>

    </>
  )
}

export default HomePage