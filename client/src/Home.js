import React from 'react';
import LocationBar from './LocationBar';

const Home = (props) => (
  <div id="home">
    <img src="/img/home-header.jpg" class="header-img" />
    <LocationBar className="location-bar" onLocationSelect={props.onLocationSelect} />
  </div>
)

export default Home;
