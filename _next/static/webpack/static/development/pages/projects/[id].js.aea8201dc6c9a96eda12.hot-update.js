webpackHotUpdate("static/development/pages/projects/[id].js",{

/***/ "./components/SliderImagesPopup/index.tsx":
/*!************************************************!*\
  !*** ./components/SliderImagesPopup/index.tsx ***!
  \************************************************/
/*! exports provided: SliderImagesPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderImagesPopup", function() { return SliderImagesPopup; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-lightbox */ "./node_modules/react-image-lightbox/dist/index.es.js");


var _jsxFileName = "/Users/innei/GitHub/mx-web/components/SliderImagesPopup/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var SliderImagesPopup = function SliderImagesPopup(props) {
  var images = props.images,
      photoIndex = props.photoIndex,
      onMovePrevRequest = props.onMovePrevRequest,
      onMoveNextRequest = props.onMoveNextRequest,
      onCloseRequest = props.onCloseRequest,
      isOpen = props.isOpen,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["images", "photoIndex", "onMovePrevRequest", "onMoveNextRequest", "onCloseRequest", "isOpen"]);

  return isOpen ? __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    mainSrc: images[photoIndex],
    nextSrc: images[(photoIndex + 1) % images.length],
    prevSrc: images[(photoIndex + images.length - 1) % images.length],
    onCloseRequest: onCloseRequest,
    onMovePrevRequest: onMovePrevRequest,
    onMoveNextRequest: onMoveNextRequest,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })) : null;
};

/***/ }),

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
/* harmony import */ var components_SliderImagesPopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/SliderImagesPopup */ "./components/SliderImagesPopup/index.tsx");


var _jsxFileName = "/Users/innei/GitHub/mx-web/pages/projects/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var ProjectView = function ProjectView(props) {
  var name = props.name,
      avatar = props.avatar,
      images = props.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      photoIndex = _useState[0],
      setIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  return __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("section", {
    className: "project-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(components_Image__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    defaultImage: assets_images_Kico_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: name,
    src: avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.description), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.previewUrl && __jsx("a", {
    href: props.previewUrl,
    className: "btn blue",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\u9884\u89C8\u7AD9\u70B9"), props.projectUrl && __jsx("a", {
    href: props.projectUrl,
    className: "btn transparent",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\u83B7\u53D6\u9879\u76EE"), props.docUrl && __jsx("a", {
    href: props.docUrl,
    className: "btn transparent",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\u9879\u76EE\u6587\u6863"))), (images === null || images === void 0 ? void 0 : images.length) && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("section", {
    className: "project-screenshot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, images.map(function (image, i) {
    return __jsx("img", {
      src: image,
      key: i,
      onClick: function onClick() {
        setIndex(i);
        setOpen(true);
      },
      style: {
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    });
  })), __jsx(components_SliderImagesPopup__WEBPACK_IMPORTED_MODULE_7__["SliderImagesPopup"], {
    images: images,
    onCloseRequest: function onCloseRequest() {
      return setOpen(false);
    },
    isOpen: isOpen,
    photoIndex: photoIndex,
    onMovePrevRequest: function onMovePrevRequest() {
      return setIndex((photoIndex + images.length - 1) % images.length);
    },
    onMoveNextRequest: function onMoveNextRequest() {
      return setIndex((photoIndex + 1) % images.length);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
    source: props.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
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
//# sourceMappingURL=[id].js.aea8201dc6c9a96eda12.hot-update.js.map