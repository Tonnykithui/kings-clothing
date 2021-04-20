import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage'
import { Switch, Route } from 'react-router-dom'
import ShopPage from '../src/pages/shop/Shop.component'
import Header from '../src/components/header/Header.components'

function App() {
 
  return (
    <div>
      <Header />
      <Switch>
         <Route exact path='/' component={Homepage}/>
         <Route exact path='/Shoppage' component={ShopPage}/>
      </Switch>
    </div>
      
   
  );
}

export default App;
