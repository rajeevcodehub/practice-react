import { food_img_url } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    let name, cuisines, avgRating, sla, cloudinaryImageId;
    if (resData && resData.info) {
      ({ name, cuisines, avgRating, sla, cloudinaryImageId, imageId } = resData.info);
      cloudinaryImageId = cloudinaryImageId??imageId;
    } else {
      console.log("resData or info is undefined");
    }

    return (
      <div className="m-4 p-4 w-[240px] bg-gray-100 rounded-lg hover:bg-gray-200">
        <img
          className="rounded-lg"
          alt="Restaurant Logo"
          src={food_img_url + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;