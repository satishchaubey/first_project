import React from "react";
import styles from "@/styles/Home.module.css";

const cards = () => {
  return (
    <>
      <div className={`${styles.position_setUp}`}>
        <div className={`${styles.under_position}`}>
          <img
            src="https://www.plutos.one/images/new-home/logos/upi%20logo.svg"
            alt=""
            className={`${styles.bank_images}`}
          />
          <img
            src="https://www.plutos.one/images/new-home/logos/visa%20logo.svg"
            alt=""
            className={`${styles.bank_images}`}
          />
          <img
            src="https://www.plutos.one/images/new-home/logos/rupay%20logo.svg"
            alt=""
            className={`${styles.bank_images}`}
          />
          <img
            src="https://www.plutos.one/images/new-home/logos/Bank-of-Baroda-logo.svg"
            alt=""
            className={`${styles.bank_images}`}
          />
        </div>
      </div>
    </>
  );
};

export default cards;
