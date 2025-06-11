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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ CartProvider,useCart auto */ \n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst CartProvider = ({ children })=>{\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (product)=>{\n        setCart((prev)=>{\n            const found = prev.find((item)=>item.product.id === product.id);\n            if (found) {\n                return prev.map((item)=>item.product.id === product.id ? {\n                        ...item,\n                        quantity: item.quantity + 1\n                    } : item);\n            }\n            return [\n                ...prev,\n                {\n                    product,\n                    quantity: 1\n                }\n            ];\n        });\n    };\n    const removeFromCart = (productId)=>{\n        setCart((prev)=>prev.filter((item)=>item.product.id !== productId));\n    };\n    const increaseQty = (productId)=>{\n        setCart((prev)=>prev.map((item)=>item.product.id === productId ? {\n                    ...item,\n                    quantity: item.quantity + 1\n                } : item));\n    };\n    const decreaseQty = (productId)=>{\n        setCart((prev)=>prev.map((item)=>item.product.id === productId ? {\n                    ...item,\n                    quantity: item.quantity - 1\n                } : item).filter((item)=>item.quantity > 0));\n    };\n    const clearCart = ()=>{\n        setCart([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addToCart,\n            removeFromCart,\n            increaseQty,\n            decreaseQty,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anauf\\\\Documents\\\\software-engineering-revou\\\\revoshop\\\\context\\\\CartContext.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCart = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) throw new Error(\"useCart must be used within CartProvider\");\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NhcnRDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXNFO0FBdUJ0RSxNQUFNRyw0QkFBY0gsb0RBQWFBLENBQThCSTtBQUV4RCxNQUFNQyxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUEyQjtJQUNoRSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQWEsRUFBRTtJQUUvQyxNQUFNTyxZQUFZLENBQUNDO1FBQ2pCRixRQUFRLENBQUNHO1lBQ1AsTUFBTUMsUUFBUUQsS0FBS0UsSUFBSSxDQUFDLENBQUNDLE9BQVNBLEtBQUtKLE9BQU8sQ0FBQ0ssRUFBRSxLQUFLTCxRQUFRSyxFQUFFO1lBQ2hFLElBQUlILE9BQU87Z0JBQ1QsT0FBT0QsS0FBS0ssR0FBRyxDQUFDLENBQUNGLE9BQ2ZBLEtBQUtKLE9BQU8sQ0FBQ0ssRUFBRSxLQUFLTCxRQUFRSyxFQUFFLEdBQzFCO3dCQUFFLEdBQUdELElBQUk7d0JBQUVHLFVBQVVILEtBQUtHLFFBQVEsR0FBRztvQkFBRSxJQUN2Q0g7WUFFUjtZQUNBLE9BQU87bUJBQUlIO2dCQUFNO29CQUFFRDtvQkFBU08sVUFBVTtnQkFBRTthQUFFO1FBQzVDO0lBQ0Y7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0M7UUFDdEJYLFFBQVEsQ0FBQ0csT0FBU0EsS0FBS1MsTUFBTSxDQUFDLENBQUNOLE9BQVNBLEtBQUtKLE9BQU8sQ0FBQ0ssRUFBRSxLQUFLSTtJQUM5RDtJQUVBLE1BQU1FLGNBQWMsQ0FBQ0Y7UUFDbkJYLFFBQVEsQ0FBQ0csT0FDUEEsS0FBS0ssR0FBRyxDQUFDLENBQUNGLE9BQ1JBLEtBQUtKLE9BQU8sQ0FBQ0ssRUFBRSxLQUFLSSxZQUNoQjtvQkFBRSxHQUFHTCxJQUFJO29CQUFFRyxVQUFVSCxLQUFLRyxRQUFRLEdBQUc7Z0JBQUUsSUFDdkNIO0lBR1Y7SUFFQSxNQUFNUSxjQUFjLENBQUNIO1FBQ25CWCxRQUFRLENBQUNHLE9BQ1BBLEtBQ0dLLEdBQUcsQ0FBQyxDQUFDRixPQUNKQSxLQUFLSixPQUFPLENBQUNLLEVBQUUsS0FBS0ksWUFDaEI7b0JBQUUsR0FBR0wsSUFBSTtvQkFBRUcsVUFBVUgsS0FBS0csUUFBUSxHQUFHO2dCQUFFLElBQ3ZDSCxNQUVMTSxNQUFNLENBQUMsQ0FBQ04sT0FBU0EsS0FBS0csUUFBUSxHQUFHO0lBRXhDO0lBRUEsTUFBTU0sWUFBWTtRQUNoQmYsUUFBUSxFQUFFO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0wsWUFBWXFCLFFBQVE7UUFDbkJDLE9BQU87WUFBRWxCO1lBQU1FO1lBQVdTO1lBQWdCRztZQUFhQztZQUFhQztRQUFVO2tCQUU3RWpCOzs7Ozs7QUFHUCxFQUFDO0FBRU0sTUFBTW9CLFVBQVU7SUFDckIsTUFBTUMsVUFBVTFCLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJLENBQUN3QixTQUFTLE1BQU0sSUFBSUMsTUFBTTtJQUM5QixPQUFPRDtBQUNULEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXZvc2hvcC8uL2NvbnRleHQvQ2FydENvbnRleHQudHN4P2MzMjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxudHlwZSBQcm9kdWN0ID0ge1xyXG4gIGlkOiBudW1iZXJcclxuICB0aXRsZTogc3RyaW5nXHJcbiAgcHJpY2U6IG51bWJlclxyXG4gIGltYWdlOiBzdHJpbmdcclxufVxyXG5cclxudHlwZSBDYXJ0SXRlbSA9IHtcclxuICBwcm9kdWN0OiBQcm9kdWN0XHJcbiAgcXVhbnRpdHk6IG51bWJlclxyXG59XHJcblxyXG50eXBlIENhcnRDb250ZXh0VHlwZSA9IHtcclxuICBjYXJ0OiBDYXJ0SXRlbVtdXHJcbiAgYWRkVG9DYXJ0OiAocHJvZHVjdDogUHJvZHVjdCkgPT4gdm9pZFxyXG4gIHJlbW92ZUZyb21DYXJ0OiAocHJvZHVjdElkOiBudW1iZXIpID0+IHZvaWRcclxuICBpbmNyZWFzZVF0eTogKHByb2R1Y3RJZDogbnVtYmVyKSA9PiB2b2lkXHJcbiAgZGVjcmVhc2VRdHk6IChwcm9kdWN0SWQ6IG51bWJlcikgPT4gdm9pZFxyXG4gIGNsZWFyQ2FydDogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q2FydENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZTxDYXJ0SXRlbVtdPihbXSlcclxuXHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcclxuICAgIHNldENhcnQoKHByZXYpID0+IHtcclxuICAgICAgY29uc3QgZm91bmQgPSBwcmV2LmZpbmQoKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdC5pZCA9PT0gcHJvZHVjdC5pZClcclxuICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXYubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgaXRlbS5wcm9kdWN0LmlkID09PSBwcm9kdWN0LmlkXHJcbiAgICAgICAgICAgID8geyAuLi5pdGVtLCBxdWFudGl0eTogaXRlbS5xdWFudGl0eSArIDEgfVxyXG4gICAgICAgICAgICA6IGl0ZW1cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFsuLi5wcmV2LCB7IHByb2R1Y3QsIHF1YW50aXR5OiAxIH1dXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAocHJvZHVjdElkOiBudW1iZXIpID0+IHtcclxuICAgIHNldENhcnQoKHByZXYpID0+IHByZXYuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnByb2R1Y3QuaWQgIT09IHByb2R1Y3RJZCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBpbmNyZWFzZVF0eSA9IChwcm9kdWN0SWQ6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0Q2FydCgocHJldikgPT5cclxuICAgICAgcHJldi5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgaXRlbS5wcm9kdWN0LmlkID09PSBwcm9kdWN0SWRcclxuICAgICAgICAgID8geyAuLi5pdGVtLCBxdWFudGl0eTogaXRlbS5xdWFudGl0eSArIDEgfVxyXG4gICAgICAgICAgOiBpdGVtXHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlY3JlYXNlUXR5ID0gKHByb2R1Y3RJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRDYXJ0KChwcmV2KSA9PlxyXG4gICAgICBwcmV2XHJcbiAgICAgICAgLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgIGl0ZW0ucHJvZHVjdC5pZCA9PT0gcHJvZHVjdElkXHJcbiAgICAgICAgICAgID8geyAuLi5pdGVtLCBxdWFudGl0eTogaXRlbS5xdWFudGl0eSAtIDEgfVxyXG4gICAgICAgICAgICA6IGl0ZW1cclxuICAgICAgICApXHJcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5xdWFudGl0eSA+IDApXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiB7XHJcbiAgICBzZXRDYXJ0KFtdKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBjYXJ0LCBhZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0LCBpbmNyZWFzZVF0eSwgZGVjcmVhc2VRdHksIGNsZWFyQ2FydCB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpXHJcbiAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VDYXJ0IG11c3QgYmUgdXNlZCB3aXRoaW4gQ2FydFByb3ZpZGVyXCIpXHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwidW5kZWZpbmVkIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0Iiwic2V0Q2FydCIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJwcmV2IiwiZm91bmQiLCJmaW5kIiwiaXRlbSIsImlkIiwibWFwIiwicXVhbnRpdHkiLCJyZW1vdmVGcm9tQ2FydCIsInByb2R1Y3RJZCIsImZpbHRlciIsImluY3JlYXNlUXR5IiwiZGVjcmVhc2VRdHkiLCJjbGVhckNhcnQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2FydCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/CartContext.tsx\n");

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