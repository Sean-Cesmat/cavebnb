import React from 'react';
import './Listing.css';

const Listing = props => {

  let ooos = props.current[0].ooos.map( (ooo, index) =>  {
    return (<span className='ooos' key={index}>{ooo}</span>)
  })

  return(
  <div>
    <div className='hero'>
      <img src={props.current[0].img} className="header-img"/>
    </div>

    <div>
      <div className='listing-name'>
        <h1>{props.current[0].name}</h1>
        <p>Cave near {props.current[0].location}</p>
        <h2>👤 {props.current[0].hostName}</h2>
        <p>Ooos: {ooos}</p>
      </div>
      <div className='button'>
        <button>Rent for {props.current[0].price} rocks</button>
      </div>
    </div>
  </div>
)
}

export default Listing;
