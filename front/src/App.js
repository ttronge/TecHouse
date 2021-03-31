import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home'
import Register from './components/Register'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
