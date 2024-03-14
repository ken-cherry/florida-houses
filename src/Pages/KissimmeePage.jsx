import React, { useState } from "react";
import { nanoid } from "nanoid";
import Wrapper from "../assets/wrappers/Cities";

import { kissimmee } from "../data";
import RemoveComponent from "../components/RemoveComponent";

const KissimmeePage = () => {
  const [list, setList] = useState();

  return (
    <>
      <Wrapper>
        <div className="section-center">
          {kissimmee.map((item) => {
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
                  {/* <RemoveComponent /> */}
                  <button className="btn remove-btn">Remove</button>
                  {/* <button
                    className="btn remove-btn"
                    onClick={(id) => handleRemove(id)}
                  >
                    Remove
                  </button> */}
                </h3>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default KissimmeePage;
