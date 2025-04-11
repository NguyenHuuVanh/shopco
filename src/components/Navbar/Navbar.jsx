import React from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import icons from "~/assets/svgs/icons";
import images from "~/assets/images";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const cx = classNames.bind(styles);

const Navbar = () => {
  return (
    <div className={cx("container")}>
      <Container>
        <Row>
          <Col md="12">
            <div className={cx("sale-off")}>
              <div className={cx("context")}>
                Sign up and get 20% off to your first order. <p>Sign Up Now</p>
              </div>
              <div className={cx("icon")}>{icons.close()}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <nav className={cx("navbar")}>
            <div className={cx("navbar-container")}>
              <Col className={cx("column")}>
                <div className={cx("more-menu")}>{icons.moreMenu()}</div>
                <div className={cx("logo-section")}>
                  <img src={images.logo} alt="" />
                </div>
              </Col>
              {/* Navigation Links */}
              <div className={cx("nav-links")}>
                <div className={cx("nav-item", "dropdown")}>Shop {icons.dropdown()}</div>
                <div className={cx("nav-item")}>On Sale</div>
                <div className={cx("nav-item")}>New Arrivals</div>
                <div className={cx("nav-item")}>Brands</div>
              </div>
              {/* Search Bar */}
              <div className={cx("search-section")}>
                {icons.search()}
                <input type="text" placeholder="Search for products..." className={cx("search-input")} />
              </div>
              {/* Sign Up Section */}
              <Col md={4}>
                <div className={cx("signup-section")}>
                  <div className={cx("account-infomation")}>
                    <div className={cx("search")}>{icons.searchDarker()}</div>
                    <div className={cx("cart")}>{icons.cart()}</div>
                    <div className={cx("user")}>{icons.user()}</div>
                  </div>
                </div>
              </Col>
            </div>
          </nav>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
