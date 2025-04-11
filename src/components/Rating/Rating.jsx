// src/components/Rating/Rating.js
import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./Rating.module.scss";
import icons from "~/assets/svgs/icons";

const cx = classNames.bind(styles);

const Rating = ({initialRating = 0, onRatingChange}) => {
  const [rating, setRating] = useState(initialRating); // Lưu rating hiện tại
  const [hoverRating, setHoverRating] = useState(0); // Lưu rating khi hover

  // Xử lý khi click vào một nửa ngôi sao
  const handleClick = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value); // Gọi callback nếu có
    }
  };

  // Xử lý khi hover vào một nửa ngôi sao
  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  // Xử lý khi rời chuột
  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className={cx("rating")}>
      {Array.from({length: 5}, (_, starIndex) => {
        const starValue = starIndex + 1; // Giá trị của ngôi sao (1, 2, 3, 4, 5)

        return (
          <div key={starIndex} className={cx("star")}>
            {/* Nửa trái của ngôi sao */}
            <div
              className={cx("half", {
                filled: hoverRating >= starValue - 0.5 || (!hoverRating && rating >= starValue - 0.5),
              })}
              onClick={() => handleClick(starValue - 0.5)}
              onMouseEnter={() => handleMouseEnter(starValue - 0.5)}
              onMouseLeave={handleMouseLeave}
            >
              {icons.starLeft()}
            </div>

            {/* Nửa phải của ngôi sao */}
            <div
              className={cx("half", {
                filled: hoverRating >= starValue || (!hoverRating && rating >= starValue),
              })}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
            >
              {icons.starRight()}
            </div>
          </div>
        );
      })}
      <span className={cx("ratingValue")}>({rating})</span>
    </div>
  );
};

export default Rating;
