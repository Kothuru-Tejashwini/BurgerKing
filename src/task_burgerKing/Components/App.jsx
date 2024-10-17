import React from 'react';
import './App.css';
import Head from './nav.jsx';
import Bg1 from './part2.jsx'
import Carts from './part3.jsx';
import Nav from './part5.jsx';
import Details from './part4.jsx';
import data from "./data.jsx"

export default class App extends React.Component{
    render(){
        return(
            <>
            <Head></Head>
            <Bg1></Bg1>
            <div id="bg3">
            {data.map(x=>{
                return(
                    <Carts img={x.imgSrc} alt={x.altName} head={x.head} para={x.para} anchor={x.anchor} button={x.button}></Carts>
                )
            })}</div>
            <Details></Details>
            <Nav></Nav>
            </>
        )
    }
}