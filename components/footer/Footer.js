import React from "react";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="bg-light">
      <div className={`${styles.container}`}>
        <div className={`${styles.logo_div}`}>
          <img
            src="icons/logo.svg"
            alt=""
            className="d-inline-block align-text-top image-fluid"
          />
          <div className={`${styles.social_icons_div}`}>
            <a href="#">
              <img src="icons/social-icons/twitter.svg" alt="" />
            </a>
            <a href="#">
              <img src="icons/social-icons/instagram.svg" alt="" />
            </a>
            <a href="#">
              <img src="icons/social-icons/linkedin.svg" alt="" />
            </a>
            <a href="#">
              <img src="icons/social-icons/facebook.svg" alt="" />
            </a>
          </div>
        </div>
        <div className={`${styles.link_div}`}>
          <ul className="list-unstyled">
            <li className="">Member Area</li>
            <li className="">
              <Link href={"/login"}>Sign In</Link>
            </li>
            <li className="">
              <Link href={"/signup"}>Sign Up</Link>
            </li>
            <li className="">
              <Link href={"/forgot_password"}>Forgot Password</Link>
            </li>
            {/* <li className="fw-bold">
                <Link href={"/new_password"}>Create New Password</Link>
              </li> */}
          </ul>
        </div>
        <div className={`${styles.link_div}`}>
          <ul className="list-unstyled">
            <li className="">Small Converter</li>
            <li className="">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="">
              <Link href={"/testimonials"}>Testominals</Link>
            </li>
            <li className="">
              <Link href={"/contact_us"}>Contact Us </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.link_div}`}>
          <ul className="list-unstyled">
            <li className="">Company</li>
            <li className="">
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            <li className="">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.link_div}`}>
          <ul className="list-unstyled">
            <li className="">Support</li>
            <li className="">
              <Link href={"/help"}>Help</Link>
            </li>
          </ul>
        </div>
        <div
          className={`${styles.social_icons_div} ${styles.show_hide_social}`}
        >
          <a href="#">
            <img src="icons/social-icons/twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="icons/social-icons/instagram.svg" alt="" />
          </a>
          <a href="#">
            <img src="icons/social-icons/linkedin.svg" alt="" />
          </a>
          <a href="#">
            <img src="icons/social-icons/facebook.svg" alt="" />
          </a>
        </div>
      </div>
      <hr style={{ border: "1px solid #E3E3E3", margin: "0" }} />
      <div className={`${styles.bottom_container}`}>
        <div>
          <p>&copy; 2022 Small Converter Tools</p>
          <div className="d-flex align-items-center" style={{ gap: "10px" }}>
            <p>English</p>

            <UncontrolledDropdown className={styles.footer_language_dropdown}>
              <DropdownToggle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                >
                  <path
                    id="Polygon_1"
                    data-name="Polygon 1"
                    d="M5.143,1.429a1,1,0,0,1,1.715,0l4.234,7.056A1,1,0,0,1,10.234,10H1.766A1,1,0,0,1,.909,8.486Z"
                    transform="translate(12 10) rotate(180)"
                    fill="#3a3a3a"
                  />
                </svg>
              </DropdownToggle>
              <DropdownMenu className="m-2">
                <DropdownItem>
                  <span>English</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
