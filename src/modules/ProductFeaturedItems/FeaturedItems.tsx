"use client";
import React from "react";
import { MockDataProductItems } from "./mockData";

const FeaturedItems = () => {
  return (
    <div>
      <div className="flex justify-center font-bold text-[30px] p-10">Featured Items</div>
      <div className="flex justify-center p-[20px] gap-[80px]">
        {MockDataProductItems.map((prev, index) => (
          <div key={index}>
            <img
              className="w-[250px] h-[250px] rounded"
              src={prev.image}
              alt="error"
            />
            <p className="flex justify-center p-3 font-bold text-[23px]">{prev.name}</p>
            <p className="flex justify-center font-bold text-[23px] text-[red]">{prev.price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
};

FeaturedItems.useClient = true;

export default FeaturedItems;
