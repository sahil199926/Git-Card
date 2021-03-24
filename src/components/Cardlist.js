import React from 'react';
import Card from './Cards';
const Cardlist = ({ val }) => {
    return  val.map((itm) => <Card profile={itm} />) ;



}

export default Cardlist;