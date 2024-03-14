import React from "react";
import { nanoid } from "nanoid";

import { poinciana } from "../data";
import Wrapper from "../assets/wrappers/Cities";

const PoincianaPage = () => {
  return (
    <>
      <Wrapper>
        <div className="section-center">
          {poinciana.map((item) => {
            const { id, image, alt, address, city, link, price, directions } =
              item;
            return (
              <div className="house-listing" key={id}>
                <h2>{city}</h2>
                <div className="image-house">
                  <a href={directions} target="_blank" rel="noreferrer">
                    <img src={image} alt={alt} className="image" />
                  </a>
                </div>
                <h2>{address}</h2>
                <h2>${price}</h2>
                <h3 className="buttons">
                  <a href={link} target="_blank" rel="noreferrer">
                    <button className="btn">Listing</button>
                  </a>
                  <button className="btn remove-btn">Remove</button>
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
