import React from "react";
export  default class Nav extends  React.Component {
    render(){
        return(
            <>
            <div id='bg4'>
            <div class='nav1inner'>
                <img alt='mobile' src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=1125&q=80&fit=max&auto=format"></img>
            </div>
            <div  class='nav1inner'>

                <h1 id='nav1innerh1'>Save$$$<br></br>With offers on demand</h1>
                <img class='bg4img'src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg' alt=""></img>
                <img class='bg4img'src='https://w7.pngwing.com/pngs/462/120/png-transparent-iphone-google-play-android-get-started-now-button-electronics-text-logo-thumbnail.png' alt=""></img>
                <p id='nav1innerp'>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
            </div>
            </div>
            <div id='nav2'>
                <span className="foot">TM & Copyright 2024 Burger King Company LLC. All Rights Reserved.</span>
                <span id='nav2a' className="foot">| Do Not Sell Or Share My Personal Information</span>
            </div>
           
            </>
        )
    }
}