import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./Newsletter.module.scss";
import icons from "~/assets/svgs/icons";

const cx = classNames.bind(styles);

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic subscribe tại đây
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <section className={cx("newsletter-section")}>
      <div className={cx("newsletter-container")}>
        <h2 className={cx("newsletter-title")}>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>

        <form className={cx("newsletter-form")} onSubmit={handleSubmit}>
          <div className={cx("input-group")}>
            <div className={cx("input")}>
              {icons.gmail()}
              <input
                type="email"
                placeholder="Enter your email address"
                className={cx("email-input")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={cx("subscribe-button")}>
              Subscribe to Newsletter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
