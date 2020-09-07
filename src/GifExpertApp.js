import React, { useState } from "react";
import { AddCategory } from "./component/AddCategory";
import { GifGrid } from "./component/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //   //setCategories([...categories, "Batman"]);
  //   setCategories((categ) => [...categ, "Superman"]);
  // };

  return (
    <>
      <h2>GifExpertAPP</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
