"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./data/products.js":
/*!**************************!*\
  !*** ./data/products.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst products = [\n    {\n        title: \"Amazon Ads for Authors 1\",\n        price: 299,\n        slug: \"Book-1\",\n        description: \"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available\",\n        cat: \"Books\",\n        count: 2,\n        image: \"/images/Book.png\"\n    },\n    {\n        title: \"Amazon Ads for Authors 2\",\n        price: 366,\n        slug: \"Book-2\",\n        description: \"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available\",\n        cat: \"Books\",\n        count: 5,\n        image: \"/images/Book.png\"\n    }\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL3Byb2R1Y3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxRQUFRLEdBQUc7SUFDZjtRQUNFQyxLQUFLLEVBQUUsMEJBQTBCO1FBQ2pDQyxLQUFLLEVBQUUsR0FBRztRQUNWQyxJQUFJLEVBQUUsUUFBUTtRQUNkQyxXQUFXLEVBQUUsNlBBQTZQO1FBQzFRQyxHQUFHLEVBQUUsT0FBTztRQUNaQyxLQUFLLEVBQUUsQ0FBQztRQUNSQyxLQUFLLEVBQUUsa0JBQWtCO0tBQzFCO0lBQ0Q7UUFDRU4sS0FBSyxFQUFFLDBCQUEwQjtRQUNqQ0MsS0FBSyxFQUFFLEdBQUc7UUFDVkMsSUFBSSxFQUFFLFFBQVE7UUFDZEMsV0FBVyxFQUFFLDZQQUE2UDtRQUMxUUMsR0FBRyxFQUFFLE9BQU87UUFDWkMsS0FBSyxFQUFFLENBQUM7UUFDUkMsS0FBSyxFQUFFLGtCQUFrQjtLQUMxQjtDQUNGO0FBR0QsaUVBQWVQLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waW5nLW5leHRqcy10YWlsd2luZC1tb25nb2RiLy4vZGF0YS9wcm9kdWN0cy5qcz9lYmY3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2R1Y3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFtYXpvbiBBZHMgZm9yIEF1dGhvcnMgMVwiLFxyXG4gICAgcHJpY2U6IDI5OSxcclxuICAgIHNsdWc6IFwiQm9vay0xXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJJbiBwdWJsaXNoaW5nIGFuZCBncmFwaGljIGRlc2lnbiwgTG9yZW0gaXBzdW0gaXMgYSBwbGFjZWhvbGRlciB0ZXh0IGNvbW1vbmx5IHVzZWQgdG8gZGVtb25zdHJhdGUgdGhlIHZpc3VhbCBmb3JtIG9mIGEgZG9jdW1lbnQgb3IgYSB0eXBlZmFjZSB3aXRob3V0IHJlbHlpbmcgb24gbWVhbmluZ2Z1bCBjb250ZW50LiBMb3JlbSBpcHN1bSBtYXkgYmUgdXNlZCBhcyBhIHBsYWNlaG9sZGVyIGJlZm9yZSBmaW5hbCBjb3B5IGlzIGF2YWlsYWJsZVwiLFxyXG4gICAgY2F0OiBcIkJvb2tzXCIsXHJcbiAgICBjb3VudDogMixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvQm9vay5wbmdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQW1hem9uIEFkcyBmb3IgQXV0aG9ycyAyXCIsXHJcbiAgICBwcmljZTogMzY2LFxyXG4gICAgc2x1ZzogXCJCb29rLTJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkluIHB1Ymxpc2hpbmcgYW5kIGdyYXBoaWMgZGVzaWduLCBMb3JlbSBpcHN1bSBpcyBhIHBsYWNlaG9sZGVyIHRleHQgY29tbW9ubHkgdXNlZCB0byBkZW1vbnN0cmF0ZSB0aGUgdmlzdWFsIGZvcm0gb2YgYSBkb2N1bWVudCBvciBhIHR5cGVmYWNlIHdpdGhvdXQgcmVseWluZyBvbiBtZWFuaW5nZnVsIGNvbnRlbnQuIExvcmVtIGlwc3VtIG1heSBiZSB1c2VkIGFzIGEgcGxhY2Vob2xkZXIgYmVmb3JlIGZpbmFsIGNvcHkgaXMgYXZhaWxhYmxlXCIsXHJcbiAgICBjYXQ6IFwiQm9va3NcIixcclxuICAgIGNvdW50OiA1LFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9Cb29rLnBuZ1wiXHJcbiAgfVxyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNcclxuIl0sIm5hbWVzIjpbInByb2R1Y3RzIiwidGl0bGUiLCJwcmljZSIsInNsdWciLCJkZXNjcmlwdGlvbiIsImNhdCIsImNvdW50IiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./data/products.js\n");

/***/ }),

/***/ "(api)/./models/product.js":
/*!***************************!*\
  !*** ./models/product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst produtSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    slug: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    cat: {\n        type: String,\n        required: true\n    },\n    count: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    image: {\n        type: String,\n        required: true\n    }\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", produtSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvcHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFLaEMsTUFBTUMsWUFBWSxHQUFHLElBQUlELHdEQUFlLENBQUM7SUFDckNHLEtBQUssRUFBRTtRQUFFQyxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN2Q0MsS0FBSyxFQUFFO1FBQUVILElBQUksRUFBRUksTUFBTTtRQUFFRixRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQ3ZDRyxJQUFJLEVBQUU7UUFBRUwsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDdENJLFdBQVcsRUFBRTtRQUFFTixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUM3Q0ssR0FBRyxFQUFFO1FBQUVQLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQ3JDTSxLQUFLLEVBQUU7UUFBRVIsSUFBSSxFQUFFSSxNQUFNO1FBQUVGLFFBQVEsRUFBRSxJQUFJO1FBQUVPLE9BQU8sRUFBRSxDQUFDO0tBQUU7SUFDbkRDLEtBQUssRUFBRTtRQUFFVixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtDQUMxQyxDQUFDO0FBR0YsTUFBTVMsT0FBTyxHQUFHZixnRUFBdUIsSUFBSUEscURBQWMsQ0FBQyxTQUFTLEVBQUVDLFlBQVksQ0FBQztBQUVsRixpRUFBZWMsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpbmctbmV4dGpzLXRhaWx3aW5kLW1vbmdvZGIvLi9tb2RlbHMvcHJvZHVjdC5qcz8wNzNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHByb2R1dFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgc2x1ZzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBjYXQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgY291bnQ6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMCB9LFxyXG4gICAgaW1hZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG59KVxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3QgPSBtb25nb29zZS5tb2RlbHMuUHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbCgnUHJvZHVjdCcsIHByb2R1dFNjaGVtYSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3QiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJwcm9kdXRTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInByaWNlIiwiTnVtYmVyIiwic2x1ZyIsImRlc2NyaXB0aW9uIiwiY2F0IiwiY291bnQiLCJkZWZhdWx0IiwiaW1hZ2UiLCJQcm9kdWN0IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/products */ \"(api)/./data/products.js\");\n/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/product */ \"(api)/./models/product.js\");\n\n\n\nasync function handler(req, res) {\n    await _utils_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].connect();\n    await _models_product__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteMany();\n    await _models_product__WEBPACK_IMPORTED_MODULE_2__[\"default\"].insertMany(_data_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    res.send({\n        message: \"products added\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUNXO0FBQ0E7QUFFMUMsZUFBZUcsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QixNQUFNTCx5REFBVSxFQUFFO0lBQ2xCLE1BQU1FLGtFQUFrQixFQUFFO0lBQzFCLE1BQU1BLGtFQUFrQixDQUFDRCxzREFBUSxDQUFDO0lBRWxDSSxHQUFHLENBQUNJLElBQUksQ0FBQztRQUFFQyxPQUFPLEVBQUUsZ0JBQWdCO0tBQUUsQ0FBQztDQUMxQztBQUdELGlFQUFlUCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGluZy1uZXh0anMtdGFpbHdpbmQtbW9uZ29kYi8uL3BhZ2VzL2FwaS9wcm9kdWN0cy5qcz80OWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tIFwiLi4vLi4vdXRpbHMvZGJcIlxyXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uLy4uL2RhdGEvcHJvZHVjdHNcIlxyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vbW9kZWxzL3Byb2R1Y3RcIlxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgYXdhaXQgZGIuY29ubmVjdCgpXHJcbiAgICBhd2FpdCBQcm9kdWN0LmRlbGV0ZU1hbnkoKVxyXG4gICAgYXdhaXQgUHJvZHVjdC5pbnNlcnRNYW55KHByb2R1Y3RzKVxyXG5cclxuICAgIHJlcy5zZW5kKHsgbWVzc2FnZTogXCJwcm9kdWN0cyBhZGRlZFwiIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbImRiIiwicHJvZHVjdHMiLCJQcm9kdWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3QiLCJkZWxldGVNYW55IiwiaW5zZXJ0TWFueSIsInNlbmQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://127.0.0.1:27017/shopping\");\n    console.log(\"Connected\");\n}\nconst db = {\n    connect\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFHaEMsZUFBZUMsT0FBTyxHQUFHO0lBQ3JCLE1BQU1ELHVEQUFnQixDQUFDLG9DQUFvQyxDQUFDO0lBRzVERSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztDQUM1QjtBQUVELE1BQU1DLEVBQUUsR0FBRztJQUFFSCxPQUFPO0NBQUU7QUFHdEIsaUVBQWVHLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waW5nLW5leHRqcy10YWlsd2luZC1tb25nb2RiLy4vdXRpbHMvZGIuanM/N2NiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiOi8vMTI3LjAuMC4xOjI3MDE3L3Nob3BwaW5nXCIpXHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIpO1xyXG59XHJcblxyXG5jb25zdCBkYiA9IHsgY29ubmVjdCB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();