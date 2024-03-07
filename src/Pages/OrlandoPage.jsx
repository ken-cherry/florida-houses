import React from "react";
import { nanoid } from "nanoid";
import Wrapper from "../assets/wrappers/Orlando";

import { orlando } from "../data";

const OrlandoPage = () => {
  return (
    <>
      <Wrapper>
        <div className="section-center">
          {orlando.map((item) => {
            const { image, alt, address, city, link, price, directions } = item;
            return (
              <div className="house-listing" key={nanoid}>
                <div className="image-house">
                  <h2>{city}</h2>
                  <a href={directions} target="_blank" rel="noreferrer">
                    <img src={image} alt={alt} className="image" />
                  </a>
                </div>
                <h2>{address}</h2>
                <h2>${price}</h2>
                <h3>
                  <a href={link} target="_blank" rel="noreferrer">
                    <button className="btn">Listing</button>
                  </a>
                </h3>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default OrlandoPage;
