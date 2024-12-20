import axios from "axios";
import React from "react";
import styles from "./Api.module.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Buy from "./Buy";

export const Api = () => {
  const [data, setData] = useState([]);
  const clickeME = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    setData(response.data);
  };
  return (
    <>
      <button onClick={clickeME}>click Me</button>
      {data.map((elem, idx) => {
        return (
          <div key={idx}>
            <h3>{elem.author}</h3>
            <img className={styles.img} src={elem.download_url} alt="random" />
          </div>
        );
      })}
    </>
  );
};

export default Api;
