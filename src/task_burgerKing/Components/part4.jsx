import React from "react";
export default class Details  extends React.Component {
    render(){
        return (
            <>
            
              <ul id='nav3'>
                  <li><i class="fa-solid fa-house"></i><br></br><p className='nav3p'>Home</p></li>
                  <li><i class="fa-solid fa-burger"></i><br></br><p className='nav3p'>Menu</p></li>
                  <li><i class="fa-solid fa-tag"></i><br></br><p className='nav3p'>Offers</p></li>
                 <li><i class="fa-solid fa-crown"></i><p className="nav3p">Rewards</p></li>
              </ul>
            
            </>
        )
    }
}