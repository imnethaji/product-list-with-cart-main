/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

interface DishImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}
interface Dish {
  image: DishImage;
  name: string;
  category: string;
  price: number;
}

interface DishCardProps {
  dessertData: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dessertData }) => {
  return (
    <div className="dish-card">
      <img src={dessertData.image.desktop} alt={dessertData.name} />
      <h3>{dessertData.category}</h3>
      <h2>{dessertData.name}</h2>
      <p>{dessertData.price}</p>
    </div>
  );
};

export default DishCard;
