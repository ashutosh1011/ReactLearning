import { IMG_CDN_URL, restaurantList } from "../config";

import React from "react";

const RestaurantCard = (restaurant) => {
  const { name, cloudinaryImageId, avgRatingString, cuisines } = restaurant;
  return (
    <div className="restaurant-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="img" />
      <h1>{name}</h1>
      <h4>{avgRatingString}</h4>
      <h4>{cuisines.join()}</h4>
    </div>
  );
};

export default RestaurantCard;
