import React from 'react';

const Debits = (props) => {
    return (
        <div>
        <span>Description: {props.description}</span>
        <span>Amount: {props.amount}</span>
        <span>Date: {props.date}</span> 
        </div>
    );
};

export default Debits;