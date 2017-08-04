import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <div className='navbar'>
                <a href='#description'>Our Story</a>
                <a href='#Menu'>Menu</a>
                <h1>PIZZA-EXPRESS</h1>
                <a href='#Locations'>Locations</a>
                <a href='#Contact'>Contact</a>
            </div>
        )
    }
}


export default Navbar;
