import React from 'react';

const Listings = props => (
  <div>
    {props.listings.map((cave, index) => {
      return (
        <a href="listing" key={index} onClick={props.onCurrentSelect}>
          <li ><img src={cave.img} id={cave._id}  /></li>
        </a>
      )
    })}
  </div>
)

export default Listings;
