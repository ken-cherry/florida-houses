import React from "react";
import { nanoid } from "nanoid";

import { poinciana } from "../data";
import Wrapper from "../assets/wrappers/Poinciana";

const PoincianaPage = () => {
  return (
    <>
      <Wrapper>
        <div className="section-center">
          {poinciana.map((item) => {
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

export default PoincianaPage;
