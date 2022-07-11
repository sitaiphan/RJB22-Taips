import React from 'react'
import './img-session02/2.jpg'
import './Bai2.css'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

export default function Bai2() {
  return (
    <div className="app">
    <div className="main-bai2">
        {/* <img src="./img-HW/basic-images/2.jpg" alt="" /> */}
        <img className="img-bai2" src="https://tse2.mm.bing.net/th?id=OIP.pimYgiU5LnpGmokFSxU65wHaHa&pid=Api&P=0&w=176&h=176" alt="" />
        <div className="container">
            <div className="border-bai2">
            <h4 className="title-bai2">YOUNG SHOP</h4>
            </div>
            <p className="p-bai2">Samsung UHD TV 24inch</p>
            <p> 
            <AiFillStar className="star-yellow"></AiFillStar>
            <AiFillStar className="star-yellow"></AiFillStar>
            <AiFillStar className="star-yellow"></AiFillStar>
            <AiFillStar  className="star-yellow"/>
            <AiOutlineStar></AiOutlineStar>
            02</p>
            <p className="p-money">$599</p>
        </div>
    </div>
    </div>
  )
}

