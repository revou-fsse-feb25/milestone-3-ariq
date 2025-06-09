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

/***/ "./context/CartContext.tsx":
/*!*********************************!*\
  !*** ./context/CartContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ CartProvider,useCart auto */ \n\n// Context-nya\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\n// Provider-nya\nconst CartProvider = ({ children })=>{\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (product)=>{\n        setCart((prev)=>{\n            const existing = prev.find((item)=>item.id === product.id);\n            if (existing) {\n                return prev.map((item)=>item.id === product.id ? {\n                        ...item,\n                        quantity: item.quantity + 1\n                    } : item);\n            } else {\n                return [\n                    ...prev,\n                    {\n                        ...product,\n                        quantity: 1\n                    }\n                ];\n            }\n        });\n    };\n    const removeFromCart = (id)=>{\n        setCart((prev)=>prev.filter((item)=>item.id !== id));\n    };\n    const increaseQty = (id)=>{\n        setCart((prev)=>prev.map((item)=>item.id === id ? {\n                    ...item,\n                    quantity: item.quantity + 1\n                } : item));\n    };\n    const decreaseQty = (id)=>{\n        setCart((prev)=>prev.map((item)=>item.id === id ? {\n                    ...item,\n                    quantity: item.quantity - 1\n                } : item).filter((item)=>item.quantity > 0));\n    };\n    const clearCart = ()=>{\n        setCart([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addToCart,\n            removeFromCart,\n            increaseQty,\n            decreaseQty,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anauf\\\\Documents\\\\software-engineering-revou\\\\revoshop\\\\context\\\\CartContext.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n// Hook biar gampang akses context-nya\nconst useCart = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) throw new Error(\"useCart must be used within CartProvider\");\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NhcnRDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXNFO0FBcUJ0RSxjQUFjO0FBQ2QsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUE4Qkk7QUFFL0QsZUFBZTtBQUNSLE1BQU1DLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQTJCO0lBQ2hFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBWSxFQUFFO0lBRTlDLE1BQU1PLFlBQVksQ0FBQ0M7UUFDakJGLFFBQVEsQ0FBQ0c7WUFDUCxNQUFNQyxXQUFXRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsRUFBRSxLQUFLTCxRQUFRSyxFQUFFO1lBQzNELElBQUlILFVBQVU7Z0JBQ1osT0FBT0QsS0FBS0ssR0FBRyxDQUFDLENBQUNGLE9BQ2ZBLEtBQUtDLEVBQUUsS0FBS0wsUUFBUUssRUFBRSxHQUNsQjt3QkFBRSxHQUFHRCxJQUFJO3dCQUFFRyxVQUFVSCxLQUFLRyxRQUFRLEdBQUc7b0JBQUUsSUFDdkNIO1lBRVIsT0FBTztnQkFDTCxPQUFPO3VCQUFJSDtvQkFBTTt3QkFBRSxHQUFHRCxPQUFPO3dCQUFFTyxVQUFVO29CQUFFO2lCQUFFO1lBQy9DO1FBQ0Y7SUFDRjtJQUVBLE1BQU1DLGlCQUFpQixDQUFDSDtRQUN0QlAsUUFBUSxDQUFDRyxPQUFTQSxLQUFLUSxNQUFNLENBQUMsQ0FBQ0wsT0FBU0EsS0FBS0MsRUFBRSxLQUFLQTtJQUN0RDtJQUVBLE1BQU1LLGNBQWMsQ0FBQ0w7UUFDbkJQLFFBQVEsQ0FBQ0csT0FDUEEsS0FBS0ssR0FBRyxDQUFDLENBQUNGLE9BQ1JBLEtBQUtDLEVBQUUsS0FBS0EsS0FBSztvQkFBRSxHQUFHRCxJQUFJO29CQUFFRyxVQUFVSCxLQUFLRyxRQUFRLEdBQUc7Z0JBQUUsSUFBSUg7SUFHbEU7SUFFQSxNQUFNTyxjQUFjLENBQUNOO1FBQ25CUCxRQUFRLENBQUNHLE9BQ1BBLEtBQ0dLLEdBQUcsQ0FBQyxDQUFDRixPQUNKQSxLQUFLQyxFQUFFLEtBQUtBLEtBQUs7b0JBQUUsR0FBR0QsSUFBSTtvQkFBRUcsVUFBVUgsS0FBS0csUUFBUSxHQUFHO2dCQUFFLElBQUlILE1BRTdESyxNQUFNLENBQUMsQ0FBQ0wsT0FBU0EsS0FBS0csUUFBUSxHQUFHO0lBRXhDO0lBRUEsTUFBTUssWUFBWTtRQUNoQmQsUUFBUSxFQUFFO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0wsWUFBWW9CLFFBQVE7UUFDbkJDLE9BQU87WUFBRWpCO1lBQU1FO1lBQVdTO1lBQWdCRTtZQUFhQztZQUFhQztRQUFVO2tCQUU3RWhCOzs7Ozs7QUFHUCxFQUFDO0FBRUQsc0NBQXNDO0FBQy9CLE1BQU1tQixVQUFVO0lBQ3JCLE1BQU1DLFVBQVV6QixpREFBVUEsQ0FBQ0U7SUFDM0IsSUFBSSxDQUFDdUIsU0FBUyxNQUFNLElBQUlDLE1BQU07SUFDOUIsT0FBT0Q7QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmV2b3Nob3AvLi9jb250ZXh0L0NhcnRDb250ZXh0LnRzeD9jMzIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbi8vIFRpcGUgZGF0YSBwcm9kdWsgZGFsYW0ga2VyYW5qYW5nXHJcbnR5cGUgUHJvZHVjdCA9IHtcclxuICBpZDogbnVtYmVyXHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIHByaWNlOiBudW1iZXJcclxuICBpbWFnZTogc3RyaW5nXHJcbiAgcXVhbnRpdHk6IG51bWJlclxyXG59XHJcblxyXG4vLyBUaXBlIGNvbnRleHRcclxudHlwZSBDYXJ0Q29udGV4dFR5cGUgPSB7XHJcbiAgY2FydDogUHJvZHVjdFtdXHJcbiAgYWRkVG9DYXJ0OiAocHJvZHVjdDogUHJvZHVjdCkgPT4gdm9pZFxyXG4gIHJlbW92ZUZyb21DYXJ0OiAoaWQ6IG51bWJlcikgPT4gdm9pZFxyXG4gIGluY3JlYXNlUXR5OiAoaWQ6IG51bWJlcikgPT4gdm9pZFxyXG4gIGRlY3JlYXNlUXR5OiAoaWQ6IG51bWJlcikgPT4gdm9pZFxyXG4gIGNsZWFyQ2FydDogKCkgPT4gdm9pZFxyXG59XHJcblxyXG4vLyBDb250ZXh0LW55YVxyXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q2FydENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXHJcblxyXG4vLyBQcm92aWRlci1ueWFcclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSlcclxuXHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcclxuICAgIHNldENhcnQoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBwcmV2LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpXHJcbiAgICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAgIHJldHVybiBwcmV2Lm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgIGl0ZW0uaWQgPT09IHByb2R1Y3QuaWRcclxuICAgICAgICAgICAgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9XHJcbiAgICAgICAgICAgIDogaXRlbVxyXG4gICAgICAgIClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gWy4uLnByZXYsIHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfV1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKGlkOiBudW1iZXIpID0+IHtcclxuICAgIHNldENhcnQoKHByZXYpID0+IHByZXYuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBpbmNyZWFzZVF0eSA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRDYXJ0KChwcmV2KSA9PlxyXG4gICAgICBwcmV2Lm1hcCgoaXRlbSkgPT5cclxuICAgICAgICBpdGVtLmlkID09PSBpZCA/IHsgLi4uaXRlbSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH0gOiBpdGVtXHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlY3JlYXNlUXR5ID0gKGlkOiBudW1iZXIpID0+IHtcclxuICAgIHNldENhcnQoKHByZXYpID0+XHJcbiAgICAgIHByZXZcclxuICAgICAgICAubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgaXRlbS5pZCA9PT0gaWQgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IC0gMSB9IDogaXRlbVxyXG4gICAgICAgIClcclxuICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnF1YW50aXR5ID4gMClcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyQ2FydCA9ICgpID0+IHtcclxuICAgIHNldENhcnQoW10pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IGNhcnQsIGFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQsIGluY3JlYXNlUXR5LCBkZWNyZWFzZVF0eSwgY2xlYXJDYXJ0IH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBIb29rIGJpYXIgZ2FtcGFuZyBha3NlcyBjb250ZXh0LW55YVxyXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dClcclxuICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcInVzZUNhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBDYXJ0UHJvdmlkZXJcIilcclxuICByZXR1cm4gY29udGV4dFxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ2FydENvbnRleHQiLCJ1bmRlZmluZWQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnQiLCJzZXRDYXJ0IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInByZXYiLCJleGlzdGluZyIsImZpbmQiLCJpdGVtIiwiaWQiLCJtYXAiLCJxdWFudGl0eSIsInJlbW92ZUZyb21DYXJ0IiwiZmlsdGVyIiwiaW5jcmVhc2VRdHkiLCJkZWNyZWFzZVF0eSIsImNsZWFyQ2FydCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0IiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/CartContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/CartContext */ \"./context/CartContext.tsx\");\n\n\n\n\nfunction MyApp({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\anauf\\\\Documents\\\\software-engineering-revou\\\\revoshop\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\anauf\\\\Documents\\\\software-engineering-revou\\\\revoshop\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anauf\\\\Documents\\\\software-engineering-revou\\\\revoshop\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFFbUI7QUFDSTtBQUV0QyxTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsV0FBVyxFQUFZO0lBQ3pGLHFCQUNFLDhEQUFDSiw0REFBZUE7UUFBQ0ssU0FBU0E7a0JBQ3hCLDRFQUFDSiw4REFBWUE7c0JBQ1gsNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXZvc2hvcC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCJcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiXHJcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxyXG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9DYXJ0Q29udGV4dFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XHJcbiAgICAgIDxDYXJ0UHJvdmlkZXI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0NhcnRQcm92aWRlcj5cclxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwiQ2FydFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();