import React from  'react';
export default class Carts extends React.Component{
    constructor(props){
        super() 
    }
    render(){
        return(
                
                    <div className='cartdiv'>
                        <img className='cartimg' src={this.props.img} alt={this.props.alt}></img>
                        <h1 className='bg3h1'>{this.props.head}</h1>
                        <p className='bg3p'>{this.props.para}</p>
                        <p className='bg3a'>{this.props.anchor}</p><br></br>
                        <button className='bg3btn'>{this.props.button}</button>
                    </div>
        )
    }
}