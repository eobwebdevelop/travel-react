import React from "react";

// Destructured prop way to create a component
const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <figcaption>
      <h1>{destination}</h1>
      <h2>{country}</h2>
      <img alt="" src={photo} />
      <h3>{distance}</h3>
      <hr/>
    </figcaption>
  </figure>
);

export default Travel;