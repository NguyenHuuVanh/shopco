// src/utils/imageLoader.js
const requireImages = require.context("~/assets/images/items", false, /\.png$/);

const imageMap = {};
requireImages.keys().forEach((key) => {
  const fileName = key.replace("./", "").split(".")[0]; // Lấy tên file không có đuôi
  imageMap[fileName] = requireImages(key); // Lưu đường dẫn ảnh vào object
});

export default imageMap;
