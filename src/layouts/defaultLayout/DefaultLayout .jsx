import React from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";

const cx = classNames.bind(styles);

const DefaultLayout = ({children}) => {
  return (
    <>
      <div className={cx("container")}>
        <Navbar />
        <main className={cx("container")}>{children}</main>
        <Footer />
      </div>
      <div className={cx("overlay")}></div>
    </>
  );
};

export default DefaultLayout;
