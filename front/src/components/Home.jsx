import React, { useSelector, useState, useEffect } from 'react'
import Navbar from './navbar/Navbar'
import { Link, Redirect } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navbar />
      <h3>funciono </h3>
      <li>
        <a href="http://localhost:3009/api/private">xd</a>

      </li>
    </div>
  )
}
export default Home
/*
const dispatch = useDispatch();

  //const [value, setValue] = useState();

  const propiedades = useSelector((state) => state.propiedades);
  useEffect(() => {
    dispatch(setPropiedades());
  }, []);

*/