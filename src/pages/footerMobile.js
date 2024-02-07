import React from "react";
import styles from "@/styles/Home.module.css";
import Cards from "./cards";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const footerMobile = () => {
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
        <div className={styles.footer_content_mobile}>
          <div className={`${styles.left_side}`}>
            <p className={`${styles.follow_mobile}`}>Follow us on</p>
            <div className={`${styles.icons_mobile}`}>
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
        </div>
        <div className={`${styles.outer_mobile_box}`}>
          <div className={`${styles.box_footer}`}>
            <div className={`${styles.support_Mobile}`}>For any Support</div>
            <div className="row text-center mt-3 mb-3 ">
              <div className="col-6">
                <div className={`${styles.social_icon_name}`}>
                  <div>
                    <FaWhatsapp size={20} />
                  </div>
                  <div className={`${styles.whatsapp_name}`}>WhatsApp</div>
                </div>
              </div>
              <div className="col-6">
                <div className={`${styles.social_icon_name}`}>
                  <div>
                    <MdOutlineEmail size={20} />
                  </div>
                  <div className={`${styles.whatsapp_name}`}>Email</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.content_footer_mobile}`}>
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
        <div className={`${styles.content_footer_mobile}`}>
          <div className={`${styles.border_padding}`}>
            <h5>Brand Partners</h5>
            <div className={`${styles.for_gap} d-flex justify-content-around`}>
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
        <div className={`${styles.content_footer_mobile}`}>
          <div className={`${styles.border_padding}`}>
            <h5>Quick Links</h5>
            <div className={`${styles.for_gap} d-flex justify-content-around`}>
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
        <div className="d-flex justify-content-center mt-3">
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
        <div className={`${styles.rights_all_mobile}`}>
          Plutos One Technology Pvt Ltd © Copyright 2024. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default footerMobile;
