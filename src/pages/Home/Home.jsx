import React from "react";
import classNames from "classnames/bind";
import DefaultLayout from "~/layouts/defaultLayout/DefaultLayout ";
import styles from "./Home.module.scss";
import Filter from "~/components/Filter/Filter";
import Production from "~/components/Production/Production";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <DefaultLayout>
      <div className={cx("container")}>
        <Filter />
        <Production />
      </div>
    </DefaultLayout>
  );
};

export default Home;
