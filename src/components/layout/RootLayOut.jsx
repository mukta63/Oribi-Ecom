import React from 'react'
import Header from '../pages/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Footer'

const RootLayOut = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayOut