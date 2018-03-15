import React from 'react';

const LocationBar = (props) => (
  <div id="location-bar">
    <select name="location-selection">
      <option value="Big Rock"> Big Rock</option>
      <option value="Big Water">Big Water</option>
      <option value="Little Water">Little Water</option>
      <option value="Many Tree">Many Tree</option>
    </select>
    <button onSubmit={props.onLocationSelect}>Update</button>
  </div>
)

export default LocationBar;
