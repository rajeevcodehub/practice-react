import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/restaurants";
import { swiggy_api } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantHOC from "./RestaurantHOC";
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  function filterBestRestaurant() {
    let res = restaurants.filter(
      (reaturant) => reaturant.info.avgRating >= 4.3
    );
    setRestaurants(res);
  }

  const filterRestaurant = () => {
    const filterres = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurants(filterres);
  };

  async function fetchData() {
    const data = await fetch(swiggy_api);
    const res = await data.json();
    const result =
      res?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurants(result);
    setFilterRestaurants(result);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const HOCRestaurant = RestaurantHOC(RestaurantCard);

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="m-4 px-4 py-1 bg-green-100 rounded-lg"
          onClick={filterRestaurant}
        >
          Search
        </button>
        <button
          className="m-4 px-4 py-1 bg-gray-100 rounded-lg"
          onClick={() => {
            filterBestRestaurant();
          }}
        >
          Best Restaurant
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants.map((restaurant) => (
          <Link to={"/restaurantDetail/" + restaurant.info.id}>
            {" "}
            {restaurant?.info?.avgRating > 4.5 ? (
              <HOCRestaurant key={restaurant.info.id} resData={restaurant} />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
