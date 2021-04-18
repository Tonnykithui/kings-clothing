import React from 'react'
import './MenuItem.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, img, history, linkUrl, match }) => {
    return (
        <div className="menuItem" onClick={() => history.push(`${match.url} ${linkUrl}`)}>
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

export default withRouter(MenuItem)