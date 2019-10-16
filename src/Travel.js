import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <figcaption>
      <h1>{destination}</h1>
      <h2>{country}</h2>
      <img src={photo} />
      <h3>{distance}</h3>
      <hr/>
    </figcaption>
  </figure>
);

export default Travel;