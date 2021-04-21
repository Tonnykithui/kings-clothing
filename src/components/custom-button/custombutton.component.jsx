import React from 'react'
import './custombutton.styles.scss'

const custombutton = ({ children , ...otherProps}) => {
    return (
        <div>
            <button className='btn'>{children}</button>
        </div>
    )
}

export default custombutton
