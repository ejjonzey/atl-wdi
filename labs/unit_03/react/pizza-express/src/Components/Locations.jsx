import React, { Component } from 'react';

class Locations extends Component{
    render(){
        return(
            <div className='location'>
                <p>{this.props.data.name}</p>
                <h3>Address:</h3>
                <p>{this.props.data.address}</p>
                <h3>Phone:</h3>
                <p>{this.props.data.phone}</p>
            </div>
        );
    }
}


export default Locations;