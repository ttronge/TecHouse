import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home'
import register from './components/Register/register'
import Singin from './components/singin/Singin'
import SingleProperty from './components/singleProperty/singleProperty'
import favoritos from './components/favoritos/fav'
import AgregarPropiedad from './components/agregarPropiedad/agregarPropiedad'
import propiedadesAll from './components/propiedaesAll/propiedades'
function App() {
  const [name, setName] = useState("")


  useEffect(() => {
    (
      async () => {
        try {
          const local = localStorage.getItem('user')
          const dataFinal = JSON.parse(local)
          //          console.log(dataFinal);

          setName(dataFinal.name)
        }
        catch {
          return 'error'
        }
      }
    )()

  })


  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home name={name} />} />
          <Route exact path="/registro" component={register} />
          <Route exact path='/singin' component={Singin} />
          <Route exact path='/favoritos' component={favoritos} />
          <Route exact path="/propiedades" component={propiedadesAll} />
          <Route exact path="/propiedad/:id" render={({ match }) => <SingleProperty propiedad={match.params.id} />} />
          <Route exact path='/agregar' component={AgregarPropiedad} />
        </Switch>
      </BrowserRouter>

    </div >

  );
}

export default App;
