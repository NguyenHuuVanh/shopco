import React, {useEffect, useState} from "react";
import classnames from "classnames/bind";
import styles from "./Production.module.scss";
import icons from "~/assets/svgs/icons";
import PaginatedItems from "../Panigation/Panigation";
import data from "~/data/data";
console.log("🚀 ~ data:", data);

const cx = classnames.bind(styles);

const Production = () => {
  const [itemsPerPage] = useState(9); // Số item mỗi trang
  const [currentPage, setCurrentPage] = useState(0);

  const products = data[0].products;
  const filters = data[1].filters;
  console.log("🚀 ~ Production ~ filters:", filters);
  const pagination = data[2];
  const footer = data[3];

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Lấy phần nguyên (ví dụ: 3.5 -> 3)
    const hasHalfStar = rating % 1 !== 0; // Kiểm tra có phần thập phân không (3.5 -> true, 3 -> false)

    const stars = [];

    // Thêm ngôi sao đầy đủ
    for (let i = 0; i < fullStars; i++) {
      stars.push(icons.fullStarProduction());
    }

    // Thêm ngôi sao nửa nếu có phần thập phân
    if (hasHalfStar) {
      stars.push(icons.halfStarProduction());
    }

    return stars;
  };

  return (
    <div className={cx("product-page")}>
      <header className={cx("product-header")}>
        <h1 className={cx("category-title")}>Casual</h1>
        <div className={cx("product-meta")}>
          <span className={cx("product-count")}>
            Showing 1-10 of 100 Products <div className={cx("product-filter")}>{icons.filterMobile()}</div>
          </span>
          <div className={cx("sort-dropdown")}>
            <span>
              Sort by: <strong>Most Popular</strong> {icons.dropdown()}
            </span>
            {/* <select className={cx("sort-select")}>
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select> */}
          </div>
        </div>
      </header>

      <div className={cx("product-grid")}>
        {currentItems.map((product) => (
          <div key={product.id} className={cx("product-card", {featured: product.featured})}>
            <div className={cx("product-image-container")}>
              <div className={cx("product-image")}>
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className={cx("product-info")}>
              <h3 className={cx("product-name")}>{product.name}</h3>
              <div className={cx("product-rating")}>
                {renderStars(product.rating)}
                <span className={cx("rating-value")}>
                  {product.rating}
                  <p>/5</p>
                </span>
              </div>
              <div className={cx("product-price")}>${product.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={cx("divider")}></div>

      <div className={cx("pagination")}>
        <div className={cx("pagination-numbers")}>
          <PaginatedItems
            itemsPerPage={itemsPerPage}
            totalItems={products.length}
            currentPage={currentPage}
            onPageChange={(selectedPage) => setCurrentPage(selectedPage)}
          />
        </div>
      </div>
    </div>
  );
};

export default Production;
