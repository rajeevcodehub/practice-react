import react, { useEffect, useState } from "react";
import { fetch_menu_api } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantCard from "./RestaurantCard";
import useMenuDetails from "../utils/useMenuDetails";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantDetail = () => {
  let { resId } = useParams();
  const menu = useMenuDetails(resId);

  if (!menu) {
    return <Shimmer />;
  }
  return (
    <div>
      <hr className="m-2"/>
      {menu?.map((item, index) => {
        return <RestaurantCategory resCategory={item?.card?.card} />;
      })}
    </div>
  );
};

export default RestaurantDetail;
