import React, { Component } from 'react';
import Locations from './Locations';
import locationData from '../locationData';


class LocationList extends Component{
    render(){
        return(
            <div id='locations'>
                <h1>Locations</h1>
                <div class='location'>
                    <div class='locations'>
                    {locationData.map((item,i)=>{
                        return <Locations key={i} data={item}/>
                    })}
                </div>
            </div>
        </div>
        );
    }
}

export default LocationList;
