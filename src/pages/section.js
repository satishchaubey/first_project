import React from "react";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./form";

const section = () => {
  const imgUrl = "https://ems-be.plutos.one/api/v1/";
  const [polls, setPolls] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const getPolls = async () => {
    try {
      const response = await axios.get("/api/getPolls");
      setPolls(response?.data?.data?.[0]?.poll_option || []);
    } catch (error) {}
  };
  useEffect(() => {
    getPolls();
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  return (
    <>
    <div className={`${styles.main_container}`}>
      <div className="">
        <div className={`${styles.content_container_heading}`}>
          Get Exciting Vouchers
        </div>
      </div>
      <div className={`${styles.content_main_heading}`}>
        Favourite bollywood Rom-com movie
      </div>
      <div className={`${styles.image_container}`}>
        {polls.map((poll, index) => (
          <div key={index} className={`${styles.new_section_container_child}`}>
            <div>
              <img
                src={`${imgUrl}/${poll.option_image}`}
                alt=""
                className={`${styles.new_section_images}`}
              />
              <div className={`${styles.new_checkbox_container}`}>
                <div className={`${styles.option_section}`}>{poll.option}</div>
                <div className={`${styles.checkbox}`}>
                  <input
                    type="radio"
                    readOnly
                    checked={selectedOption === poll.option}
                    onChange={() => handleOptionChange(poll.option)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     </div>
      
      <div className={`${styles.container_form}`}>
        <Form selectedOption={selectedOption} />
      </div>
    </>
  );
};

export default section;
