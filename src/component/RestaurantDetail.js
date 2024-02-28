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

  const [itemIndex, setItemIndex] = useState(-1);

  if (!menu) {
    return <Shimmer />;
  }
  return (
    <div>
      <hr className="m-2" />
      {menu?.map((item, index) => {
        return (
          <RestaurantCategory
            showItem={index === itemIndex ? true : false}
            resCategory={item?.card?.card}
            setIndex = {() => setItemIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantDetail;
