import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Produtos from './pages/Produtos'
import Usuario from './pages/Usuarios'
import { BrowserRouter, Switch,  Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/usuario" component={Usuario} />    
      </Switch>      
    </BrowserRouter>
  );
}

export default App;
