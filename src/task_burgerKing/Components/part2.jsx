import React from "react";
export default class Bg1 extends React.Component{
    render(){
        return(
            <>
                <div id="bg2">
                    <div>
                    <h1 id="bg2h1">Start your<br></br> BK&#174; Order.</h1>
                    <button id="bg2btn1"><i class="fa-solid fa-bag-shopping"></i> order Pickup</button><br></br>
                    <button id="bg2btn2"><i class="fa-solid fa-motorcycle"></i> Order Delivery</button>
                    </div>
                    <div>
                    <img alt="gif" src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/abe90c6f781580dcf7622b9497663d510c3398d5-600x338.gif?w=1125&q=90&fit=max&auto=format "></img>
                    </div>
                </div>
                
            </>
        )
    }
}