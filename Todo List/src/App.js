import React, { Fragment } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Produtos from './pages/Produtos'
import { BrowserRouter, Switch,  Route } from 'react-router-dom' // configurar rota
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/produtos" component={Produtos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
