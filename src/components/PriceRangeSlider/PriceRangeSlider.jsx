import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./PriceRangeSlider.module.scss"; // Import đúng file CSS

const cx = classNames.bind(styles);

const PriceRangeSlider = () => {
  const [priceRange, setPriceRange] = useState(50); // Giá trị ban đầu là 50

  const handleSliderChange = (event) => {
    setPriceRange(event.target.value); // Cập nhật giá trị khi người dùng di chuyển slider
  };

  return (
    <div className={cx("range-container")}>
      <label htmlFor="price-range" className={cx("label")}>
        Price Range
      </label>
      <input
        type="range"
        id="price-range"
        className={cx("range")}
        min={0}
        max={500}
        step={5}
        value={priceRange}
        onInput={handleSliderChange}
      />
      <div className={cx("range-values")}>
        <span>$0</span>
        <span>${priceRange}</span>
        <span>$500</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
