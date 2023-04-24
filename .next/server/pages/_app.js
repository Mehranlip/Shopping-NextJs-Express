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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/Cart.js":
/*!*************************!*\
  !*** ./context/Cart.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartContextProvider\": () => (/* binding */ CartContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\")) : {\n        cartItems: []\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"ADD_ITEMS\":\n            {\n                const newItem = action.payload;\n                const exisitingItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);\n                const cartItems = exisitingItem ? state.cart.cartItems.map((item)=>item.title === exisitingItem.title ? newItem : item) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"REMOVE_ITEM\":\n            {\n                const cartItems1 = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems: cartItems1\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems: cartItems1\n                    }\n                };\n            }\n        default:\n            return state;\n    }\n}\nfunction CartContextProvider({ children  }) {\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mehranlip\\\\Desktop\\\\shoping-nextjs-tailwind-mongodb\\\\context\\\\Cart.js\",\n        lineNumber: 45,\n        columnNumber: 12\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NhcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtEO0FBQ2xCO0FBR3pCLE1BQU1HLFdBQVcsaUJBQUdILG9EQUFhLEVBQUU7QUFFMUMsTUFBTUksWUFBWSxHQUFHO0lBQ2pCQyxJQUFJLEVBQUVILHFEQUFXLENBQUMsTUFBTSxDQUFDLEdBQUdLLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixxREFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUc7UUFBRU8sU0FBUyxFQUFFLEVBQUU7S0FBRTtDQUNsRjtBQUdELFNBQVNDLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEVBQUU7SUFDNUIsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2YsS0FBSyxXQUFXO1lBQUU7Z0JBQ2QsTUFBTUMsT0FBTyxHQUFHRixNQUFNLENBQUNHLE9BQU87Z0JBRzlCLE1BQU1DLGFBQWEsR0FBR0wsS0FBSyxDQUFDTixJQUFJLENBQUNJLFNBQVMsQ0FBQ1EsSUFBSSxDQUFDLENBQUNDLElBQUksR0FBS0EsSUFBSSxDQUFDQyxJQUFJLEtBQUtMLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDO2dCQUdyRixNQUFNVixTQUFTLEdBQUdPLGFBQWEsR0FBR0wsS0FBSyxDQUFDTixJQUFJLENBQUNJLFNBQVMsQ0FBQ1csR0FBRyxDQUFDLENBQUNGLElBQUksR0FBS0EsSUFBSSxDQUFDRyxLQUFLLEtBQUtMLGFBQWEsQ0FBQ0ssS0FBSyxHQUFHUCxPQUFPLEdBQUdJLElBQUksQ0FBQyxHQUFHO3VCQUFJUCxLQUFLLENBQUNOLElBQUksQ0FBQ0ksU0FBUztvQkFBRUssT0FBTztpQkFBQztnQkFFOUpaLHFEQUFXLENBQUMsTUFBTSxFQUFFSyxJQUFJLENBQUNnQixTQUFTLENBQUM7b0JBQUUsR0FBR1osS0FBSyxDQUFDTixJQUFJO29CQUFFSSxTQUFTO2lCQUFFLENBQUMsQ0FBQztnQkFDakUsT0FBTztvQkFBRSxHQUFHRSxLQUFLO29CQUFFTixJQUFJLEVBQUU7d0JBQUUsR0FBR00sS0FBSyxDQUFDTixJQUFJO3dCQUFFSSxTQUFTO3FCQUFFO2lCQUFFO2FBQzFEO1FBRUQsS0FBSyxhQUFhO1lBQUU7Z0JBQ2hCLE1BQU1BLFVBQVMsR0FBR0UsS0FBSyxDQUFDTixJQUFJLENBQUNJLFNBQVMsQ0FBQ2UsTUFBTSxDQUFDLENBQUNOLElBQUksR0FBS0EsSUFBSSxDQUFDQyxJQUFJLEtBQUtQLE1BQU0sQ0FBQ0csT0FBTyxDQUFDSSxJQUFJLENBQUM7Z0JBQzFGakIscURBQVcsQ0FBQyxNQUFNLEVBQUVLLElBQUksQ0FBQ2dCLFNBQVMsQ0FBQztvQkFBRSxHQUFHWixLQUFLLENBQUNOLElBQUk7b0JBQUVJLFNBQVMsRUFBVEEsVUFBUztpQkFBRSxDQUFDLENBQUM7Z0JBQ2pFLE9BQU87b0JBQUUsR0FBR0UsS0FBSztvQkFBRU4sSUFBSSxFQUFFO3dCQUFFLEdBQUdNLEtBQUssQ0FBQ04sSUFBSTt3QkFBRUksU0FBUyxFQUFUQSxVQUFTO3FCQUFFO2lCQUFFO2FBQzFEO1FBRUQ7WUFDSSxPQUFPRSxLQUFLO0tBQ25CO0NBRUo7QUFHTSxTQUFTYyxtQkFBbUIsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUU5QyxNQUFNLEtBQUNmLEtBQUssTUFBRWdCLFFBQVEsTUFBSTFCLGlEQUFVLENBQUNTLE9BQU8sRUFBRU4sWUFBWSxDQUFDO0lBQzNELE1BQU13QixLQUFLLEdBQUc7UUFBRWpCLEtBQUs7UUFBRWdCLFFBQVE7S0FBRTtJQUVqQyxxQkFBTyw4REFBQ3hCLFdBQVcsQ0FBQzBCLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUNwQ0YsUUFBUTs7Ozs7WUFDVTtDQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpbmctbmV4dGpzLXRhaWx3aW5kLW1vbmdvZGIvLi9jb250ZXh0L0NhcnQuanM/NDg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNhcnQ6IENvb2tpZXMuZ2V0KFwiY2FydFwiKSA/IEpTT04ucGFyc2UoQ29va2llcy5nZXQoXCJjYXJ0XCIpKSA6IHsgY2FydEl0ZW1zOiBbXSB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdBRERfSVRFTVMnOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhY3Rpb24ucGF5bG9hZFxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXNpdGluZ0l0ZW0gPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLnNsdWcgPT09IG5ld0l0ZW0uc2x1ZylcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBleGlzaXRpbmdJdGVtID8gc3RhdGUuY2FydC5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLnRpdGxlID09PSBleGlzaXRpbmdJdGVtLnRpdGxlID8gbmV3SXRlbSA6IGl0ZW0pIDogWy4uLnN0YXRlLmNhcnQuY2FydEl0ZW1zLCBuZXdJdGVtXVxyXG5cclxuICAgICAgICAgICAgQ29va2llcy5zZXQoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0pKVxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFwiUkVNT1ZFX0lURU1cIjoge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2x1ZyAhPT0gYWN0aW9uLnBheWxvYWQuc2x1ZylcclxuICAgICAgICAgICAgQ29va2llcy5zZXQoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0pKVxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FydENvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG4gICAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9XHJcblxyXG4gICAgcmV0dXJuIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiQ29va2llcyIsIkNhcnRDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiY2FydCIsImdldCIsIkpTT04iLCJwYXJzZSIsImNhcnRJdGVtcyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXNpdGluZ0l0ZW0iLCJmaW5kIiwiaXRlbSIsInNsdWciLCJtYXAiLCJ0aXRsZSIsInNldCIsInN0cmluZ2lmeSIsImZpbHRlciIsIkNhcnRDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/Cart.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Cart */ \"./context/Cart.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_Cart__WEBPACK_IMPORTED_MODULE_2__]);\n_context_Cart__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n            session: pageProps.session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_Cart__WEBPACK_IMPORTED_MODULE_2__.CartContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mehranlip\\\\Desktop\\\\shoping-nextjs-tailwind-mongodb\\\\pages\\\\_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mehranlip\\\\Desktop\\\\shoping-nextjs-tailwind-mongodb\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Mehranlip\\\\Desktop\\\\shoping-nextjs-tailwind-mongodb\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mehranlip\\\\Desktop\\\\shoping-nextjs-tailwind-mongodb\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDdUI7QUFDSDtBQUVsRCxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEVBQUUsRUFBRUMsT0FBTyxHQUFFLEdBQUdELFNBQVMsRUFBRSxHQUFFLEVBQUU7SUFDbEUscUJBQU8sOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGNBQWM7a0JBQ2xDLDRFQUFDTiw0REFBZTtZQUFDSSxPQUFPLEVBQUVELFNBQVMsQ0FBQ0MsT0FBTztzQkFDekMsNEVBQUNMLDhEQUFtQjswQkFDbEIsNEVBQUNHLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7O29CQUNSOzs7OztnQkFDTjs7Ozs7WUFDZDtDQUNQO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waW5nLW5leHRqcy10YWlsd2luZC1tb25nb2RiLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgQ2FydENvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQ2FydCdcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfSkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktMTAwICc+XG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XG4gICAgICA8Q2FydENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9DYXJ0Q29udGV4dFByb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiU2Vzc2lvblByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();