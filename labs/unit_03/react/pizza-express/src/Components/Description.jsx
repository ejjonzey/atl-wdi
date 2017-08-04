import React, { Component } from 'react';
import pizzaoven from '../images/pizzaoven.jpg';

class Description extends Component{
    render(){
        return(
            <div id='description' className='description'>
                <img src= {pizzaoven} />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem quaerat, ad, eos voluptates esse laudantium incidunt saepe odio assumenda voluptatem eveniet autem. Architecto error, minus optio esse expedita veritatis.</p>
            </div>
        );
    }
}

export default Description;