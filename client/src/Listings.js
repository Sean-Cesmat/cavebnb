import React from 'react';

const Listings = props => (
  <div className="all-cave-listing-container">
    {props.listings.map((cave, index) => {
      return (
        <div key={index} className="cave-listing-container">
          <a href="/listing"  onClick={props.onCurrentSelect}>
            <div className="cave-image-container">
              <img src={cave.img} id={cave._id}  />
              <p>{cave.rating} ⭐️</p>
            </div>
            <h1>{cave.name}</h1>
            <p>{cave.price} <img src="/img/rock.png" className="rock" />s per 🌙s</p>
          </a>
        </div>
      )
    })}
  </div>
)

export default Listings;
