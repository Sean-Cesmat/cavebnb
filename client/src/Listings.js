import React from 'react';

const Listings = props => (
  <div className="all-cave-listing-container">
    {props.listings.map((cave, index) => {
      return (
        <div key={index} className="cave-listing-container">
          <a href="/listing"  onClick={props.onCurrentSelect}>
            <div className="cave-image-container"><img src={cave.img} id={cave._id}  /></div>
            <h6>{cave.name}</h6>
            <p>{cave.price} per 🌙</p>
          </a>
        </div>
      )
    })}
  </div>
)

export default Listings;
