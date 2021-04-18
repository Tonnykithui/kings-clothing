import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage'
import { Switch, Route } from 'react-router-dom'


const Hats = (props) => {
  console.log(props)
  return(
    <div>
      <h1>HATS PAGES</h1>
    </div>
  )
}


function App() {
 
  return (
    <div>
      <Switch>
         <Route exact path='/' component={Homepage}/>
         <Route exact component={Hats}/>
      </Switch>
    </div>
      
   
  );
}

export default App;
