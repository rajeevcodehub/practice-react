import React, { useState } from "react";
import { food_img_url } from "../utils/constants";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const RestaurantCategory = (props) => {
  const {showItem,setIndex, resCategory } = props;
  const { itemCards, title } = resCategory;

  const handleClick = () => {
    setIndex();
  }

 
  return (
    <div className="gap-2 p-3 w-1/2 m-2 items-center">
      <div className="flex justify-between">
        <h1 className="font-bold">
          {title}({itemCards.length})
        </h1>
        {showItem ? (
          <SlArrowDown onClick={handleClick} />
        ) : (
          <SlArrowUp onClick={handleClick} />
        )}
      </div>

      {showItem &&
        itemCards?.map((item, index) => {
          const { name, defaultPrice, price, description, imageId } =
            item?.card?.info;
          return (
            <div className="flex">
            <div className="flex justify-between my-2 bg-gray-100 p-2 ">
              <div className="w-3/4">
                <label>{name}</label>
                <div>₹{price ? price / 100 : defaultPrice / 100}</div>
                <p className="my-2">{description}</p>
              </div>
              <div className="w-1/4">
                {/* <div className="absolute text-green-300 p-2 ">ADD</div> */}
                <img src={food_img_url + imageId} alt="no image"></img>
              </div>
              
            </div>
            <hr className=" bg-gray-100"/>
            </div>
          );
        })}
      <div className="bg-gray-200 w-full h-3 " />
    </div>
  );
};

export default RestaurantCategory;
