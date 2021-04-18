import React from 'react'
import './MenuItem.styles.scss'
const MenuItem = ({ title, img }) => {
    return (
        <div className="menuItem">
          <div className="background-image"
           style={{
            backgroundImage:`url(${img})`}} 
          ></div>
          <div className="menuContent">
            <div className="innerMenu">
              <h1 className="title">{title.toUpperCase()}</h1>
              <p>Shop Now</p>
            </div>
          </div>
        </div>
    )
}

export default MenuItem