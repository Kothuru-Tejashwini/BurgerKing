import React from 'react';
import './App.css';

export default class Head extends React.Component{
  render(){
    return(
      <>
        <ul id="nav">
          <li id="li1"><i class="fa-solid fa-bars"></i></li>
          <li id="li2"><h1>BURGER KING</h1></li>
          <li id="li3"><i class="fa-solid fa-user"></i></li>
          <li id="li4"><button id="cart"><i class="fa-solid fa-bag-shopping"></i> View Cart</button></li>
        </ul>
      </>
    )
  }
}