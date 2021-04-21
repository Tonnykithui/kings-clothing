import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/red-plus.svg'
import { auth } from '../../firebase/firebase.utils'

const header = ({ Signedin }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/'>
                    SHOP
                </Link>
                <Link className='option' to=''>
                    CONTACT
                </Link>

                {
                    Signedin ? 
                    (<div className='option' onClick={()=>auth.signOut()}>
                        SIGN OUT
                    </div>) : 
                    <Link to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default header
