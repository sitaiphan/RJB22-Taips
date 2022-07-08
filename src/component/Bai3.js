import React from 'react'
import image from './img-HW/basic-images/3.jpg'
import './Bai3.css'

export default function Bai3() {
  return (
    <div className="app">Bai3
        <div className="main-bai3">
        <img src={image} alt="" className="css-img-bai3"/>
        <div className="container">
            <h4 className="title-bai3">Technology</h4>
            <p className="p-bai3">Harman Kardon Onyx Studio Mini, Revie & Experiences</p>
            <p>Feb 21, 2021 by <a className="p-drfurion" href="">drfurion</a></p>
        </div>
        </div>
    </div>
  )
}
