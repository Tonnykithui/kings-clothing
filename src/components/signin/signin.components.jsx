import React, { Component } from 'react'
import Forminput from '../formInput/forminput.component'
import CustomButton from '../custom-button/custombutton.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class signin extends Component {
    constructor(){
        super()

        this.state = {
            email:'',
            password:''
        }

        

    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({[name]:value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Forminput
                     name="email" 
                     type="email" 
                     value={this.state.email} 
                     handleChange={this.handleChange} 
                     label="Email"
                     autocomplete="off"
                     />

                    <Forminput
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    label="Password"
                    />

                    <CustomButton type="submit" color="blue">Sign In</CustomButton>
                    <button onClick={ signInWithGoogle }>{' '}Sign In{' '}</button>
                    </form>
                    
            </div>
        )
    }
}

export default signin