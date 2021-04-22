import React, { useEffect, useState } from 'react'

import Navbar from './navbar/Navbar'
import Card from '../components/card/card'
const Home = ({ name, user }) => {



  return (
    <div>
      <Navbar name={name} />

      <Card user={user} />

    </div>
  )
}
export default Home
