import React, { useState } from "react";
import Divider from "./Divider";
import FruitCard from './FruitCard';

const SeasonSpecials = () => {
  const [fruits] = useState([
    {
      id: 7,
      image: "7",
      name: "Orange",
      price: 100,
      discount:4
    },
    {
      id: 1,
      image: "1",
      name: "Green Grapes",
      price: 100,
      discount:9
    },
    {
      id: 6,
      image: "6",
      name: "lemon",
      price: 150,
      discount:7
    },
  ]);
  return (
    <section className="w-5/6 mx-auto my-10">
      <Divider title={'Season Specials'}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10">
        {fruits.map((fruit) => {
          return <FruitCard key={fruit.id} fruit={fruit} />;
        })}
      </div>
    </section>
  );
};

export default SeasonSpecials;
