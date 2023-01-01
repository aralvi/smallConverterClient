import React from "react";
import { useRouter } from "next/router";
import styles from "./HomeCard2.module.css";

const HomeCard2 = ({ title, para, icon, bgColor, borderColor, route }) => {
  const router = useRouter();
  return (
    <article
      className={styles.card_container}
      onClick={() => router.push(route)}
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: borderColor,
        backgroundColor: bgColor,
      }}
    >
      <h5>{title}</h5>
      <hr style={{ borderColor: borderColor }} />
      <p>{para}</p>
      <div style={{ width: "100%", height: "32px" }}></div>
      <img src={icon} />
    </article>
  );
};

export default HomeCard2;
