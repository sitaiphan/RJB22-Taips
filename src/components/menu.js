import React from 'react'
import './menu.css'
import './img-HW/basic-images/1.jpg'
import image from './img-HW/basic-images/1.jpg'

export default function Menu() {
  return (
    <div className="app">
          <div className="main">
            <img src={image} alt="" />
            <div className="container">
              <h3 className="title">Clothing and Apparel</h3>
              <p>Accessories</p>
              <p>Bags</p>
              <p>Kid's Fashion</p>
              <p>Mens</p>
            </div>
          </div>
    </div>
  )
}
