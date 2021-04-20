import React from 'react'
import './SingleItem.styles.scss'

const SingleItem = ({ name, imageUrl, price}) => {
    return (
        <div className='single-item'>
            <div className='image' style={{
                backgroundImage:`url(${imageUrl})`
            }}></div>
            <div className='item-content'>
               <p>{name}</p>
               <p>{price}</p>
            </div>
        </div>
    )
}

export default SingleItem
