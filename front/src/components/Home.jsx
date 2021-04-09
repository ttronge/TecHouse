
import React, { useSelector, useState, useEffect } from 'react'
import Navbar from './navbar/Navbar'
import { Link, Redirect } from 'react-router-dom'
import Card from '../components/card/card'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Card />


    </div>
  )
}
export default Home
