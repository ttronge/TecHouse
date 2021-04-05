import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import Home from './components/Home'
import register from './components/Register/register'
import PruebaSingin from './components/register'
import store from './store';
function App() {
  return (
    <div>
      <Provider store={store}>

        <BrowserRouter>

          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/prueba" component={register} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
