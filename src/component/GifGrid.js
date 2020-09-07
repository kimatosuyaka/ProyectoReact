import React from "react";
import { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  //console.log("aqui", category);

  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} /> //con esto {...img} se envia cada una de las propiedades del img de forma independiente
        ))}
      </div>
    </>
  );
};
