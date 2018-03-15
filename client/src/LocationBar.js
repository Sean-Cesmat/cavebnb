import React from 'react';

const LocationBar = (props) => (
  <div>
    <select name="location-selection" onChange={props.onLocationSelect}>
      <option value="default" default>Choose Place</option>
      <option value="big-rock"> Big Rock</option>
      <option value="big-water">Big Water</option>
      <option value="little-water">Little Water</option>
      <option value="many-tree">Many Tree</option>
    </select>
  </div>
)

export default LocationBar;
