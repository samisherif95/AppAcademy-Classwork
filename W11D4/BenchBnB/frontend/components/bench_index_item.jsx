import React from 'react';
import {Link} from 'react-router-dom';

const BenchIndexItem = props =>(
    
    <li className='bench-index-item'>
        <p>{props.bench.description}</p>
    </li>
    
)

export default BenchIndexItem;