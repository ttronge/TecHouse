import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import Home from './components/Home'
import register from './components/Register/register'
import Singin from './components/singin/Singin'
import SingleProperty from './components/singleProperty/singleProperty'
import axios from 'axios'
function App() {
  const [name, setName] = useState("")
  useEffect(() => {
    (
      async () => {
        const response = await axios.get('http://localhost:3009/api/cookie',
          { withCredentials: true })
        const content = await response
        setName(content.data.name)
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
          <Route exact path="/propiedad/:id" render={({ match }) => <SingleProperty propiedad={match.params.id} />} />

        </Switch>
      </BrowserRouter>

    </div >

  );
}

export default App;
