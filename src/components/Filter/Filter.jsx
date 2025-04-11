import React, {useState} from "react";
import classnames from "classnames/bind";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import styles from "./Filter.module.scss";
import icons from "~/assets/svgs/icons";
import {ChevronUp, ChevronDown, Star} from "lucide-react";
import data from "~/data/data";

const cx = classnames.bind(styles);

const Filter = () => {
  const [priceExpanded, setPriceExpanded] = useState(true);
  const [ratingExpanded, setRatingExpanded] = useState(true);
  const filters = data[1].filters;

  const [priceRange, setPriceRange] = useState([50, 200]);

  const togglePrice = () => setPriceExpanded(!priceExpanded);
  const toggleRating = () => setRatingExpanded(!ratingExpanded);

  const handlePriceChange = (e) => {
    setPriceRange([parseInt(e.target.value), priceRange[1]]);
  };

  const categories = [
    {id: "electronics", name: "Electronics"},
    {id: "jewelery", name: "Jewelery"},
    {id: "mens-clothing", name: "Men's Clothing"},
    {id: "womens-clothing", name: "Women's Clothing"},
  ];

  return (
    <div className={cx("filter-container")}>
      <div className={cx("breadcrumb")}>
        <span>Home</span>
        {icons.dropdown()}
        <span className={cx("current-category")}>Casual</span>
      </div>

      <div className={cx("filters-panel")}>
        <div className={cx("filters-header")}>
          <h2>Filters</h2>
          <button className={cx("sort-button")}>{icons.filter()}</button>
        </div>

        <div className={cx("category-list")}>
          {categories.map((category) => (
            <div key={category.id} className={cx("category-item")}>
              <span>{category.name}</span>
              {icons.dropdown()}
            </div>
          ))}
        </div>

        <div className={cx("divider")}></div>

        <div className={cx("filter-section")}>
          <div className={cx("filter-header")} onClick={togglePrice}>
            <h3>Price</h3>
            {icons.dropdown()}
          </div>

          {/* {priceExpanded && <PriceRangeSlider />} */}
          {priceExpanded && (
            <RangeSlider
              id={"range-slider-custom"}
              min={0}
              max={500}
              step={5}
              value={priceRange}
              onInput={setPriceRange}
            />
          )}
          <div className={cx("price-values")}>
            <span className={cx("price-value")}>${priceRange[0]}</span>
            <span className={cx("price-value")}>${priceRange[1]}</span>
          </div>
        </div>

        <div className={cx("divider")}></div>
        <div className={cx("divider")}></div>

        <div className={cx("filter-section")}>
          <div className={cx("filter-header")} onClick={toggleRating}>
            <h3>Rating</h3>
            {ratingExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {/* {ratingExpanded && (
            <div className={cx("rating-stars")}>
              <div className={cx("star")}>
                {icons.starLeft()}
                {icons.starRight()}
              </div>
              <div className={cx("star")}>
                {icons.starLeft()}
                {icons.starRight()}
              </div>
              <div className={cx("star")}>
                {icons.starLeft()}
                {icons.starRight()}
              </div>
              <div className={cx("star")}>
                {icons.starLeft()}
                {icons.starRight()}
              </div>
              <div className={cx("star")}>
                {icons.starLeft()}
                {icons.starRight()}
              </div>
            </div>
          )} */}

          {ratingExpanded && (
            <div className={cx("rating-stars")}>
              <div className={cx("star")}>
                {icons.starActiveLeft()}
                {icons.starActiveRight()}
              </div>
              <div className={cx("star")}>
                {icons.starActiveLeft()}
                {icons.starActiveRight()}
              </div>
              <div className={cx("star")}>
                {icons.starActiveLeft()}
                {icons.starActiveRight()}
              </div>
              <div className={cx("star")}>
                {icons.starLeft()}
                {icons.starRight()}
              </div>
              <div className={cx("star")}>
                {icons.starLeft()}
                {icons.starRight()}
              </div>
            </div>
          )}
        </div>

        <div className={cx("divider")}></div>

        <button className={cx("apply-button")}>Apply Filter</button>
      </div>
    </div>
  );
};

export default Filter;
