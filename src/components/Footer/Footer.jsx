import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import images from "~/assets/images";
import icons from "~/assets/svgs/icons";
import Newsletter from "../Newsletter/Newsletter";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer")}>
      {/* Newsletter Section */}
      <Newsletter />
      {/* Links Section */}
      <div className={cx("links-section")}>
        <div className={cx("links-container")}>
          <div className={cx("link-group", "col1")}>
            <div className={cx("logo-section")}>
              <img src={images.logo} alt="" />
            </div>
            <p className={cx("context")}>
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <ul className={cx("link-socials")}>
              <li>{icons.twitter()}</li>
              <li>{icons.facebook()}</li>
              <li>{icons.instagram()}</li>
              <li>{icons.github()}</li>
            </ul>
          </div>

          <div className={cx("link-group", "col2")}>
            <div className={cx("link-company")}>
              <h2>Company</h2>
            </div>
            <ul className={cx("link-list", "company")}>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div className={cx("link-group", "col3")}>
            <div className={cx("link-company")}>
              <h2>Help</h2>
            </div>
            <ul className={cx("link-list", "help")}>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className={cx("link-group", "col4")}>
            <div className={cx("link-company")}>
              <h2>FAQ</h2>
            </div>
            <ul className={cx("link-list", "faq")}>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div className={cx("link-group", "col5")}>
            <div className={cx("link-company")}>
              <h2>Resources</h2>
            </div>
            <ul className={cx("link-list", "resources")}>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={cx("copyright")}>
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <img src={images.cash} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
