import React from "react";
import { nanoid } from "nanoid";

// import { houses } from "../data";

const HouseComponent = () => {
  return (
    <>
      <div className="section-center">
        {houses.map((item) => {
          const { image, alt, address, city, link, price, directions } = item;

          return (
            <div className="house-listing" key={nanoid}>
              <div className="image-house">
                <h1>{city}</h1>
                <a href={directions} target="_blank" rel="noreferrer">
                  <img src={image} alt={alt} />
                </a>
              </div>
              <h2>{address}</h2>
              <h2>${price}</h2>
              <h3>
                <a href={link} target="_blank" rel="noreferrer">
                  Listing
                </a>
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HouseComponent;
