import React from 'react'
import Navbar from '../organisms/Navbar/Navbar'

const MainTemplate = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default MainTemplate

