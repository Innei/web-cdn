webpackHotUpdate("static/development/pages/projects/[id].js",{

/***/ "./pages/projects/[id].tsx":
/*!*********************************!*\
  !*** ./pages/projects/[id].tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_Kico_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/Kico.jpg */ "./assets/images/Kico.jpg");
/* harmony import */ var assets_images_Kico_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_Kico_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Image */ "./components/Image/index.tsx");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/api */ "./utils/api.ts");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/innei/GitHub/mx-web/pages/projects/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var ProjectView = function ProjectView(props) {
  var _props$images;

  var name = props.name,
      avatar = props.avatar;
  return __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("section", {
    className: "project-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(components_Image__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    defaultImage: assets_images_Kico_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: name,
    src: avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.description), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.previewUrl && __jsx("a", {
    href: props.previewUrl,
    className: "btn blue",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\u9884\u89C8\u7AD9\u70B9"), props.projectUrl && __jsx("a", {
    href: props.projectUrl,
    className: "btn transparent",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\u83B7\u53D6\u9879\u76EE"), props.docUrl && __jsx("a", {
    href: props.docUrl,
    className: "btn transparent",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "\u9879\u76EE\u6587\u6863"))), ((_props$images = props.images) === null || _props$images === void 0 ? void 0 : _props$images.length) && __jsx("section", {
    className: "project-screenshot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, props.images.map(function (image, i) {
    return __jsx("img", {
      src: image,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    });
  })), __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
    source: props.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })));
};

ProjectView.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var query, id, _yield$Rest$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = ctx.query;
            id = query.id;
            _context.next = 4;
            return Object(utils_api__WEBPACK_IMPORTED_MODULE_5__["Rest"])('Project').get(id);

          case 4:
            _yield$Rest$get = _context.sent;
            data = _yield$Rest$get.data;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ProjectView);

/***/ })

})
//# sourceMappingURL=[id].js.a6ab22410b5f581c7446.hot-update.js.map