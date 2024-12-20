import React from "react";
import styles from "./Buy.module.css";

export const Buy = () => {
  const bikes = [
    {
      id: 1,
      name: "Ducati",
      price: 155000,
      type: "Sport",
      engine: "155cc",
      color: "Blue",
      year: 2023,
    },
    {
      id: 2,
      name: "Honda CB Shine",
      price: 73000,
      type: "Commuter",
      engine: "125cc",
      color: "Red",
      year: 2023,
    },
    {
      id: 3,
      name: "Yahama",
      price: 107000,
      type: "Commuter",
      engine: "150cc",
      color: "Black",
      year: 2023,
    },
    {
      id: 14,
      name: "Kawasaki",
      price: 820000,
      type: "Sport",
      engine: "659cc",
      color: "Red",
      year: 2023,
    },
    {
      id: 4,
      name: "BMW",
      price: 295000,
      type: "Naked",
      engine: "373cc",
      color: "Orange",
      year: 2023,
    },
    {
      id: 5,
      name: "Suzuki",
      price: 190000,
      type: "Cruiser",
      engine: "349cc",
      color: "Green",
      year: 2023,
    },
    {
      id: 6,
      name: "Trump",
      price: 135000,
      type: "Sport",
      engine: "155cc",
      color: "Silver",
      year: 2023,
    },
    {
      id: 14,
      name: "Harley-Davidson",
      price: 820000,
      type: "Sport",
      engine: "659cc",
      color: "Red",
      year: 2023,
    },
    {
      id: 7,
      name: "KTM",
      price: 105000,
      type: "Sport",
      engine: "160cc",
      color: "Red",
      year: 2023,
    },
    {
      id: 8,
      name: "Indian",
      price: 210000,
      type: "Sport",
      engine: "249cc",
      color: "White",
      year: 2023,
    },
    {
      id: 9,
      name: "Aprilia",
      price: 600000,
      type: "Cruiser",
      engine: "883cc",
      color: "Black",
      year: 2023,
    },
    {
      id: 14,
      name: "Moto Guzzi",
      price: 820000,
      type: "Sport",
      engine: "659cc",
      color: "Red",
      year: 2023,
    },
    {
      id: 10,
      name: "Beneli",
      price: 1100000,
      type: "Naked",
      engine: "821cc",
      color: "Red",
      year: 2023,
    },
    {
      id: 11,
      name: "Royal Enfield Classic 350",
      price: 300000,
      type: "Sport",
      engine: "296cc",
      color: "Green",
      year: 2023,
    },
  ];

  return (
    <>
      <div className={styles.bikeList}>
        <h1>Bike Detail</h1>
        <div className={styles.boxContainer}>
          {bikes.map((bike, index) => (
            <div key={index} className={styles.box}>
              <h3>{bike.name}</h3>
              <ul>
                <li>Color: {bike.color}</li>
                <li>Engine: {bike.engine}</li>
                <li>Price: Rs {bike.price}</li>
                <li>Type: {bike.type}</li>
                <li>Year: {bike.year}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Buy;
