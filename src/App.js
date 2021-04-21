import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage'
import { Switch, Route } from 'react-router-dom'
import ShopPage from '../src/pages/shop/Shop.component'
import Header from '../src/components/header/Header.components'
import Signin from './pages/sign-in and sign-up/signin.components';
import { auth } from '../src/firebase/firebase.utils'

class App extends React.Component {
    constructor(){
      super()

      this.state = {
        Signedin : null
      }
    }

    unsubscribeAuth = null

    componentDidMount(){
      this.unsubscribeAuth = auth.onAuthStateChanged(user => {
        this.setState({Signedin : user})
        console.log(user)
      })
    }

    componentWillUnmount(){
      this.unsubscribeAuth()
    }
     
    render(){

      return (
        <div>
          <Header Signedin={this.state.Signedin}/>
      
          <Switch>
             <Route exact path='/' component={Homepage}/>
             <Route exact path='/shop' component={ShopPage}/>
             <Route exact path='/signin' component={Signin}/>
          </Switch>
        </div>
    
      );
    }
}

export default App;
