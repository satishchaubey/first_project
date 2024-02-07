import React from "react";
import styles from "@/styles/Home.module.css";
import Cards from "./cards";

const footer = () => {
  return (
    <>
      <div>
        <div className={`${styles.title_container}`}>
          <p>
            <span className={`${styles.title}`}>Our Trusted Partners</span>
          </p>
          <p>
            <span className={`${styles.bottom_title}`}>
              plutos ONE works with the Leaders in the Banking Industry
            </span>
          </p>
        </div>
      </div>
      <div className={`${styles.footer_container}`}>
        <div className={`${styles.position_for_Card}`}>
          <Cards />
        </div>
        <div className={styles.footer_content}>
          <div className={`${styles.left_side}`}>
            <div className={`${styles.image_plutos}`}>
              <img
                src="https://www.plutos.one/images/new-home/logos/plutos%20white%20logo.svg"
                alt=""
                className={`${styles.pluto_img}`}
              />
            </div>
            <p className={`${styles.follow}`}>Follow us on</p>
            <div className={`${styles.icons}`}>
              <span className={`${styles.icons_color}`}>
                <img
                  src="https://www.plutos.one/images/new-home/icon/instagram.svg"
                  alt=""
                  className={`${styles.icons_all}`}
                />
              </span>
              <span className={`${styles.icons_color}`}>
                <img
                  src="https://www.plutos.one/images/new-home/icon/facebook.svg"
                  alt=""
                  className={`${styles.icons_all}`}
                />
              </span>
              <span className={`${styles.icons_color}`}>
                <img
                  src="https://www.plutos.one/images/new-home/icon/twitter.svg"
                  alt=""
                  className={`${styles.icons_all}`}
                />
              </span>
              <span className={`${styles.icons_color}`}>
                <img
                  src="https://www.plutos.one/images/new-home/icon/youtube.svg"
                  alt=""
                  className={`${styles.icons_all}`}
                />
              </span>
              <span className={`${styles.icons_color}`}>
                <img
                  src="https://www.plutos.one/images/new-home/icon/linkedin.svg"
                  alt=""
                  className={`${styles.icons_all}`}
                />
              </span>
            </div>
          </div>
          <div className={`${styles.right_side}`}>
            <div className={`${styles.support_plutos}`}>
              <span>
                For any support <br /> and queries
              </span>
            </div>
            <div className={`${styles.support_plutos_email}`}>
              <span>
                Email Us <br /> care@plutos.one
              </span>
            </div>
            <div className={`${styles.support_plutos_email}`}>
              <span>
                WhatsApp Us <br /> +91-9953364151
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.footer_bank_info}`}>
          <div>
            <h5>Bank Partners</h5>
            <div className={`${styles.for_gap} d-flex justify-content-around`}>
              <div className={`${styles.all_content}`}>
                <div>Bank Of Baroda</div>
                <div>IDFC FIRST</div>
                <div>SBI Rewardz</div>
                <div>Bandhan Bank</div>
              </div>
              <div className={`${styles.all_content}`}>
                <div>Rupay</div>
                <div>HDFC Bank</div>
                <div>IDBI Bank</div>
                <div>Kotak Bank</div>
              </div>
            </div>
          </div>
          <div className={`${styles.border_for}`}>
            <div>
              <div className={`${styles.border_padding}`}>
                <h5>Brand Partners</h5>
                <div
                  className={`${styles.for_gap} d-flex justify-content-around`}
                >
                  <div className={`${styles.all_content}`}>
                    <div>EaseMyTrip</div>
                    <div>Navbharat Gold</div>
                    <div>News9 Plus</div>
                  </div>
                  <div className={`${styles.all_content}`}>
                    <div>CoRover</div>
                    <div>Microtek</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.border_for}`}>
            <div className={`${styles.border_padding}`}>
              <h5>Quick Links</h5>
              <div
                className={`${styles.for_gap} d-flex justify-content-around`}
              >
                <div className={`${styles.all_content}`}>
                  <div>Privacy Policy</div>
                  <div>Refund Policy</div>
                  <div>Terms Of Use</div>
                </div>
                <div className={`${styles.all_content}`}>
                  <div>About Us</div>
                  <div>Team</div>
                  <div>Media</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <img
            src="https://www.plutos.one/images/new-home/logos/PCI%20DSS.svg"
            alt=""
            className="me-5"
          />
          <img
            src="https://www.plutos.one/images/new-home/logos/ISO.svg"
            alt=""
          />
        </div>
        <div className={`${styles.rights_all}`}>
          Plutos One Technology Pvt Ltd © Copyright 2024. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default footer;
