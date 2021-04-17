import React from 'react'
import './Homepage.styles.scss'

function Homepage() {
    return (
    <div className="container">
      <div className="menuWrapper">
        <div className="menuItem">
          <div className="menuContent">
            <div className="innerMenu">
              <h1 className="title">Sneakers</h1>
              <p>Shop Now</p>
            </div>
          </div>
        </div>
        <div className="menuItem">
          <div className="menuContent">
            <div className="innerMenu">
              <h1>Hats</h1>
              <p>Shop Now</p>
            </div>
          </div>
        </div>
        <div className="menuItem">
          <div className="menuContent">
            <div className="innerMenu">
              <h1>Jackets</h1>
              <p>Shop Now</p>
            </div>
          </div>
        </div>
        <div className="menuItem">
          <div className="menuContent">
            <div className="innerMenu">
              <h1>Men</h1>
              <p>Shop Now</p>
            </div>
          </div>
        </div>
        <div className="menuItem">
          <div className="menuContent">
            <div className="innerMenu">
              <h1>Women</h1>
              <p>Shop Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Homepage
