import React from 'react';
import Debit from './Debits'

const DebitsList = (props) => {

    const debitComponents = props.debits.map((debit)=>{
        return <Debit
description={debit.description}
amount={debit.amount}
date={debit.amount}/>;
    })

    return (
        <div>
           {debitComponents} 
        </div>
    );
};

export default DebitsList;