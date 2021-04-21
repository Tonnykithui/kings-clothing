import React from 'react'
import './forminput.styles.scss'

const forminput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {
                label ? 
                (<label className={`${otherProps.value.length ? 'Shrink' : ''} form-input-label`}>
                   {label}
                </label>) : null
            }
        </div>
    )
}

export default forminput
