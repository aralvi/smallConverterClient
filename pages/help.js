import Accordian from "@components/accordian/Accordian";
import React from "react";
import styles from "../styles/Help.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEyeSlash,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
function Help() {
  return (
    <>
      {/* First Section */}
      <div className="container m-4 text-center con">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 p-4">
            <h1 className={styles.heading}>
              Hi! Welcome to the Small Converter Tool helpdesk!
            </h1>

            <br />
            <p className={styles.subheading}>
              Here you find all solutions to the most common issues. And of
              course, you can also submit a support request or ask for a new
              feature!
            </p>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      {/* Second Section */}
      <div className="container">
        <Accordian />
      </div>
      {/* Third Section */}

      <div className="container mt-4 mb-5  text-center">
        <div className="row mt-4 ">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 p-4 mt-4 mb-5 ">
            <h1 className={styles.mailHeading}>
              Not finding what you are looking for?
            </h1>
            <p className={styles.mailSubTitle}>
              Chat with us or send us an email
            </p>
            {/* <!-- Icon buttons with text--> */}
            <button type="button" class="btn btn-outline-primary">
              <FontAwesomeIcon icon={faEnvelope} className="px-2" />
              Send us an email
            </button>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </>
  );
}

export default Help;
