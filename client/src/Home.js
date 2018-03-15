import React from 'react';
import LocationBar from './LocationBar';
import Listings from './Listings';

const Home = (props) => (
  <div id="home">
    <img src="/img/home-header.jpg" class="header-img" />
    <LocationBar className="location-bar" onLocationSelect={props.onLocationSelect} />
    <Listings listings={props.listings} />
  </div>
)

export default Home;
