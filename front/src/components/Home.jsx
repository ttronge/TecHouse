import React, { useSelector, useState, useEffect } from 'react'
import Navbar from './navbar/Navbar'
/* import { propiedades } from '../store/actions/propiedades'
import { dispatch, useDispatch } from 'react-redux' */

const Home = () => {
  return (
    <div>
      <Navbar />
      <h3>funciono </h3>

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