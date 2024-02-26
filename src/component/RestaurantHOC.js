const RestaurantHOC = (Component) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-50 p-2 mx-2">Recommended</label>
        <Component {...props} />
      </div>
    );
  };
};

export default RestaurantHOC;
