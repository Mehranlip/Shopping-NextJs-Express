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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFHaEMsTUFBTUMsVUFBVSxHQUFHLElBQUlELHdEQUFlLENBQUM7SUFDbkNHLElBQUksRUFBRTtRQUFFQyxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN0Q0MsS0FBSyxFQUFFO1FBQUVILElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFFO0lBQ3ZDRSxRQUFRLEVBQUU7UUFBRUosSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDMUNHLE9BQU8sRUFBRTtRQUFFTCxJQUFJLEVBQUVNLE9BQU87UUFBRUosUUFBUSxFQUFFLElBQUk7UUFBRUssT0FBTyxFQUFFLEtBQUs7S0FBRTtDQUU3RCxDQUFDO0FBR0YsTUFBTUMsSUFBSSxHQUFHWiw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxNQUFNLEVBQUVDLFVBQVUsQ0FBQztBQUd2RSxpRUFBZVcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpbmctbmV4dGpzLXRhaWx3aW5kLW1vbmdvZGIvLi9tb2RlbHMvdXNlci5qcz82NTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGlzQWRtaW46IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IGZhbHNlIH0sXHJcblxyXG59KVxyXG5cclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJwYXNzd29yZCIsImlzQWRtaW4iLCJCb29sZWFuIiwiZGVmYXVsdCIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/user */ \"(api)/./models/user.js\");\n\n\n\n\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user?._id) token._id === user._id;\n            if (user?.isAdmin) token.isAdmin === user.isAdmin;\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (token?._id) session.user._id = token._id;\n            if (token?.isAdmin) session.user.isAdmin = token.isAdmin;\n            return session;\n        }\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (Credentials) {\n                await _utils_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect();\n                const user = await _models_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    email: Credentials.email\n                });\n                if (user && bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compareSync(Credentials.password, user.password)) {\n                    return {\n                        _id: user._id,\n                        name: user.name,\n                        email: user.email,\n                        image: \"f\",\n                        isAdmin: user.isAdmin\n                    };\n                }\n                throw new Error(\"invalid email or password\");\n            }\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUUyQjtBQUVwQztBQUNNO0FBQ0s7O0FBS3hDLGlFQUFlQSxxREFBUSxDQUFDO0lBQ3BCSyxPQUFPLEVBQUU7UUFDTEMsUUFBUSxFQUFFLEtBQUs7S0FDbEI7SUFDREMsU0FBUyxFQUFFO1FBQ1AsTUFBTUMsR0FBRyxFQUFDLEVBQUVDLEtBQUssR0FBRUMsSUFBSSxHQUFFLEVBQUU7WUFDdkIsSUFBSUEsSUFBSSxFQUFFQyxHQUFHLEVBQUVGLEtBQUssQ0FBQ0UsR0FBRyxLQUFLRCxJQUFJLENBQUNDLEdBQUc7WUFFckMsSUFBSUQsSUFBSSxFQUFFRSxPQUFPLEVBQUVILEtBQUssQ0FBQ0csT0FBTyxLQUFLRixJQUFJLENBQUNFLE9BQU87WUFFakQsT0FBT0gsS0FBSztTQUNmO1FBRUQsTUFBTUosT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRUksS0FBSyxHQUFFLEVBQUU7WUFDOUIsSUFBSUEsS0FBSyxFQUFFRSxHQUFHLEVBQUVOLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDQyxHQUFHLEdBQUdGLEtBQUssQ0FBQ0UsR0FBRztZQUU1QyxJQUFJRixLQUFLLEVBQUVHLE9BQU8sRUFBRVAsT0FBTyxDQUFDSyxJQUFJLENBQUNFLE9BQU8sR0FBR0gsS0FBSyxDQUFDRyxPQUFPO1lBRXhELE9BQU9QLE9BQU87U0FDakI7S0FDSjtJQUVEUSxTQUFTLEVBQUU7UUFDUFosc0VBQW1CLENBQUM7WUFDaEIsTUFBTWEsU0FBUyxFQUFDQyxXQUFXLEVBQUU7Z0JBQ3pCLE1BQU1aLHlEQUFVLEVBQUU7Z0JBRWxCLE1BQU1PLElBQUksR0FBRyxNQUFNTiw0REFBWSxDQUFDO29CQUM1QmMsS0FBSyxFQUFFSCxXQUFXLENBQUNHLEtBQUs7aUJBQzNCLENBQUM7Z0JBRUYsSUFBSVIsSUFBSSxJQUFJUiwyREFBa0IsQ0FBQ2EsV0FBVyxDQUFDSyxRQUFRLEVBQUVWLElBQUksQ0FBQ1UsUUFBUSxDQUFDLEVBQUU7b0JBQ2pFLE9BQU87d0JBQ0hULEdBQUcsRUFBRUQsSUFBSSxDQUFDQyxHQUFHO3dCQUNiVSxJQUFJLEVBQUVYLElBQUksQ0FBQ1csSUFBSTt3QkFDZkgsS0FBSyxFQUFFUixJQUFJLENBQUNRLEtBQUs7d0JBQ2pCSSxLQUFLLEVBQUUsR0FBRzt3QkFDVlYsT0FBTyxFQUFFRixJQUFJLENBQUNFLE9BQU87cUJBQ3hCO2lCQUNKO2dCQUNELE1BQU0sSUFBSVcsS0FBSyxDQUFDLDJCQUEyQixDQUFDO2FBQy9DO1NBQ0osQ0FBQztLQUNMO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpbmctbmV4dGpzLXRhaWx3aW5kLW1vbmdvZGIvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5cclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcclxuXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXHJcbmltcG9ydCBkYiBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uL21vZGVscy91c2VyXCI7XHJcbjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gICAgc2Vzc2lvbjoge1xyXG4gICAgICAgIHN0cmF0ZWd5OiBcImp3dFwiXHJcbiAgICB9LFxyXG4gICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICAgICAgICBpZiAodXNlcj8uX2lkKSB0b2tlbi5faWQgPT09IHVzZXIuX2lkXHJcblxyXG4gICAgICAgICAgICBpZiAodXNlcj8uaXNBZG1pbikgdG9rZW4uaXNBZG1pbiA9PT0gdXNlci5pc0FkbWluXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xyXG4gICAgICAgICAgICBpZiAodG9rZW4/Ll9pZCkgc2Vzc2lvbi51c2VyLl9pZCA9IHRva2VuLl9pZFxyXG5cclxuICAgICAgICAgICAgaWYgKHRva2VuPy5pc0FkbWluKSBzZXNzaW9uLnVzZXIuaXNBZG1pbiA9IHRva2VuLmlzQWRtaW5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKENyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkYi5jb25uZWN0KClcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogQ3JlZGVudGlhbHMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh1c2VyICYmIGJjcnlwdC5jb21wYXJlU3luYyhDcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IHVzZXIuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCJmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRtaW46IHVzZXIuaXNBZG1pblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZW1haWwgb3IgcGFzc3dvcmRcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBdXHJcbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImRiIiwiVXNlciIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsIl9pZCIsImlzQWRtaW4iLCJwcm92aWRlcnMiLCJhdXRob3JpemUiLCJDcmVkZW50aWFscyIsImNvbm5lY3QiLCJmaW5kT25lIiwiZW1haWwiLCJjb21wYXJlU3luYyIsInBhc3N3b3JkIiwibmFtZSIsImltYWdlIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();