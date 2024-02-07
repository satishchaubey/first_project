import React from "react";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const form = ({selectedOption }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const optionAndFormData = { ...formData, selectedOption };
    console.log(optionAndFormData,"optionAndFormData");
    setFormData({ name: "", email: "" });
  };


  const isFormValid = formData.name !== "" && formData.email !== "";
  const isFormDisabled = selectedOption === null;


  console.log(selectedOption)

  return (
    <>
    
      <div className={`${styles.form}`}>
        <p className={`${styles.details}`}>Enter Details</p>
        <p className={`${styles.vouchers_details}`}>
          Get Free Vouchers Worth ₹1000+
        </p>
        <div className={`${styles.form_submit} order-md-2`}>
          <form onSubmit={handleSubmit}>
            <div className="">
              <input
                type="text"
                className={`${styles.input_box} form-control`}
                id="name"
                placeholder="Name "
                value={formData.name}
                onChange={handleChange}
                disabled={isFormDisabled}
              />
            </div>
            <div className="">
              <input
                type="email"
                className={`${styles.input_box} form-control`}
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isFormDisabled}
              />
            </div>
            <div className={`${styles.submit_button_margin}`}>
              <input
                type="submit"
                value="Confirm"
                className={`${styles.submit_button} ${
                  !isFormValid && styles.submit_button_disabled
                }`}
                disabled={!isFormValid || isFormDisabled}
              />
            </div>
          </form>
        </div>
      </div>
      <div className={`${styles.image_form}`}>
        <div className={`${styles.image_container}`}>
          <img
            src="https://www.plutos.one/images/contest/voucher-img.png"
            alt=""
            className={`${styles.img_contain}`}
          />
        </div>
      </div>
    </>
  );
};

export default form;
