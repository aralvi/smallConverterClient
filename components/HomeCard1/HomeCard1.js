import React, { useState, useEffect } from "react";
import styles from "./HomeCard1.module.css";

const HomeCard1 = ({ title, img, para, link }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window?.innerWidth);
    }
  }, []);
  // These are the first 4 cards
  return (
    <article className={styles.card_container}>
      <h2>{title}</h2>
      <img src={img} />
      <p>{para}</p>
      <a href={link}></a>
    </article>
  );
};

export default HomeCard1;
