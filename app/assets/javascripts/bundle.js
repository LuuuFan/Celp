/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/luu/celp/node_modules/react/index.js'\n    at Error (native)");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/luu/celp/node_modules/react-router-dom/es/index.js'\n    at Error (native)");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/luu/celp/node_modules/process/browser.js'\n    at Error (native)");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/luu/celp/node_modules/react-redux/es/index.js'\n    at Error (native)");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/luu/celp/node_modules/prop-types/index.js'\n    at Error (native)");

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.createSession = exports.updateUser = exports.createUser = exports.clearErrors = exports.receiveErrors = exports.receiveCurrentUser = exports.CLEAR_ERRORS = exports.RECEIVE_ERRORS = exports.LOGOUT_CURRENT_USER = exports.RECEIVE_CURRENT_USER = undefined;

var _session = __webpack_require__(100);

var APIUtilSession = _interopRequireWildcard(_session);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_CURRENT_USER = exports.RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
var LOGOUT_CURRENT_USER = exports.LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
var RECEIVE_ERRORS = exports.RECEIVE_ERRORS = 'RECEIVE_ERRORS';
var CLEAR_ERRORS = exports.CLEAR_ERRORS = 'CLEAR_ERRORS';

var receiveCurrentUser = exports.receiveCurrentUser = function receiveCurrentUser(currentUser) {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
};

var receiveErrors = exports.receiveErrors = function receiveErrors(errors) {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

var clearErrors = exports.clearErrors = function clearErrors() {
  return {
    type: CLEAR_ERRORS
  };
};

var createUser = exports.createUser = function createUser(user) {
  return function (dispatch) {
    return APIUtilSession.createUser(user).then(function (user) {
      return dispatch(receiveCurrentUser(user));
    }, function (errors) {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

var updateUser = exports.updateUser = function updateUser(user) {
  return function (dispatch) {
    return APIUtilSession.updateUser(user).then(function (user) {
      return dispatch(receiveCurrentUser(user));
    }, function (errors) {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

var createSession = exports.createSession = function createSession(user) {
  return function (dispatch) {
    return APIUtilSession.createSession(user).then(function (user) {
      return dispatch(receiveCurrentUser(user));
    }, function (errors) {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

var logout = exports.logout = function logout() {
  return function (dispatch) {
    return APIUtilSession.deleteSession().then(function (user) {
      return dispatch(receiveCurrentUser(null));
    }, function (errors) {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSMS = exports.requestBiz = exports.requestAllBiz = exports.receiveBiz = exports.receiveAllBiz = exports.RECEIVE_BIZ = exports.RECEIVE_ALL_BIZ = undefined;

var _biz_util = __webpack_require__(99);

var APIUtilBiz = _interopRequireWildcard(_biz_util);

var _session = __webpack_require__(7);

var _notification = __webpack_require__(47);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_BIZ = exports.RECEIVE_ALL_BIZ = 'RECEIVE_ALL_BIZ';
var RECEIVE_BIZ = exports.RECEIVE_BIZ = 'RECEIVE_BIZ';

var receiveAllBiz = exports.receiveAllBiz = function receiveAllBiz(bizes) {
  return {
    type: RECEIVE_ALL_BIZ,
    bizes: bizes
  };
};

var receiveBiz = exports.receiveBiz = function receiveBiz(payload) {
  return {
    type: RECEIVE_BIZ,
    payload: payload
  };
};

var requestAllBiz = exports.requestAllBiz = function requestAllBiz() {
  return function (dispatch) {
    return APIUtilBiz.fetchBizes().then(function (bizes) {
      return dispatch(receiveAllBiz(bizes));
    });
  };
};

var requestBiz = exports.requestBiz = function requestBiz(bizId) {
  return function (dispatch) {
    return APIUtilBiz.fetchBiz(bizId).then(function (payload) {
      return dispatch(receiveBiz(payload));
    });
  };
};

var sendSMS = exports.sendSMS = function sendSMS(bizId, phoneNumber) {
  return function (dispatch) {
    return APIUtilBiz.sendSMS(bizId, phoneNumber).then(function (confirmation) {
      return dispatch((0, _notification.receiveConfirmation)(confirmation));
    }, function (errors) {
      return dispatch((0, _session.receiveErrors)(errors.responseJSON));
    });
  };
};

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteReview = exports.updateReview = exports.requestReview = exports.requestAllReviews = exports.createReview = exports.removeReview = exports.receiveReview = exports.receiveAllReviews = exports.REMOVE_REVIEW = exports.RECEIVE_REVIEW = exports.RECEIVE_ALL_REVIEWS = undefined;

var _review_util = __webpack_require__(101);

var APIUtilReview = _interopRequireWildcard(_review_util);

var _session = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_REVIEWS = exports.RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
var RECEIVE_REVIEW = exports.RECEIVE_REVIEW = 'RECEIVE_REVIEW';
var REMOVE_REVIEW = exports.REMOVE_REVIEW = 'REMOVE_REVIEW';

var receiveAllReviews = exports.receiveAllReviews = function receiveAllReviews(reviews) {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews: reviews
  };
};

var receiveReview = exports.receiveReview = function receiveReview(payload) {
  return {
    type: RECEIVE_REVIEW,
    review: payload.review,
    biz: payload.biz
  };
};

var removeReview = exports.removeReview = function removeReview(payload) {
  return {
    type: REMOVE_REVIEW,
    reviewId: payload.review.id,
    biz: payload.biz
  };
};

var createReview = exports.createReview = function createReview(bizId, review) {
  return function (dispatch) {
    return APIUtilReview.createReview(bizId, review).then(function (review) {
      return dispatch(receiveReview(review));
    }, function (errors) {
      return dispatch((0, _session.receiveErrors)(errors.responseJSON));
    });
  };
};

var requestAllReviews = exports.requestAllReviews = function requestAllReviews(bizId) {
  return function (dispatch) {
    return APIUtilReview.requestAllReviews(bizId).then(function (reviews) {
      return dispatch(receiveAllReviews(reviews));
    });
  };
};

var requestReview = exports.requestReview = function requestReview(bizId) {
  return function (dispatch) {
    return APIUtilReview.requestReview(bizId).then(function (payload) {
      return dispatch(receiveReview(payload));
    });
  };
};

var updateReview = exports.updateReview = function updateReview(bizId, review) {
  return function (dispatch) {
    return APIUtilReview.updateReview(bizId, review).then(function (payload) {
      return dispatch(receiveReview(payload));
    }, function (errors) {
      return dispatch((0, _session.receiveErrors)(errors.responseJSON));
    });
  };
};

var deleteReview = exports.deleteReview = function deleteReview(reviewId) {
  return function (dispatch) {
    return APIUtilReview.deleteReview(reviewId).then(function (payload) {
      return dispatch(removeReview(payload));
    }, function (errors) {
      return dispatch((0, _session.receiveErrors)(errors.responseJSON));
    });
  };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestUser = exports.receiveUser = exports.RECEIVE_USER = undefined;

var _user_util = __webpack_require__(103);

var APIUtilUser = _interopRequireWildcard(_user_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_USER = exports.RECEIVE_USER = 'RECEIVE_USER';

var receiveUser = exports.receiveUser = function receiveUser(payload) {
  var reviews = payload.reviews ? payload.reviews : {};
  var imgs = payload.imgs ? payload.imgs : {};
  var biz = payload.biz ? payload.biz : {};
  return {
    type: RECEIVE_USER,
    user: payload.user,
    reviews: reviews,
    imgs: imgs,
    biz: biz
  };
};

var requestUser = exports.requestUser = function requestUser(username) {
  return function (dispatch) {
    return APIUtilUser.requestUser(username).then(function (payload) {
      return dispatch(receiveUser(payload));
    }, function (errors) {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/luu/celp/node_modules/redux/es/index.js'\n    at Error (native)");

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestCategory = exports.requestSearch = undefined;

var _search_util = __webpack_require__(154);

var APIUtilSearch = _interopRequireWildcard(_search_util);

var _biz = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var requestSearch = exports.requestSearch = function requestSearch(key, loc) {
  return function (dispatch) {
    return APIUtilSearch.requestSearch(key, loc).then(function (bizes) {
      return dispatch((0, _biz.receiveAllBiz)(bizes));
    });
  };
};

var requestCategory = exports.requestCategory = function requestCategory(cat, num) {
  return function (dispatch) {
    return APIUtilSearch.requestCategory(cat, num).then(function (bizes) {
      return dispatch((0, _biz.receiveAllBiz)(bizes));
    });
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizIndexItemRating = function (_React$Component) {
  _inherits(BizIndexItemRating, _React$Component);

  function BizIndexItemRating() {
    _classCallCheck(this, BizIndexItemRating);

    return _possibleConstructorReturn(this, (BizIndexItemRating.__proto__ || Object.getPrototypeOf(BizIndexItemRating)).apply(this, arguments));
  }

  _createClass(BizIndexItemRating, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var biz = this.props.biz;

      var rate = document.getElementById('biz-info-rating-' + biz.id);
      var position = biz.biz_rate === 0 ? 240 : 222 + 36 * biz.biz_rate;
      if (rate) {
        rate.style.backgroundPosition = '0 -' + position + 'px';
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.props.biz.biz_rate !== newProps.biz.biz_rate) {
        var biz = newProps.biz;

        var rate = document.getElementById('biz-info-rating-' + biz.id);
        var position = biz.biz_rate === 0 ? 240 : 222 + 36 * biz.biz_rate;
        if (rate) {
          rate.style.backgroundPosition = '0 -' + position + 'px';
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var biz = this.props.biz;

      return _react2.default.createElement('div', { id: 'biz-info-rating-' + biz.id, className: 'biz-info-rating' });
    }
  }]);

  return BizIndexItemRating;
}(_react2.default.Component);

exports.default = BizIndexItemRating;

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/luu/celp/node_modules/react-dom/index.js'\n    at Error (native)");

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteImg = exports.createImg = exports.requestImg = exports.requestAllImg = exports.removeImg = exports.receiveImg = exports.receiveAllImg = exports.REMOVE_IMG = exports.RECEIVE_IMG = exports.RECEIVE_ALL_IMG = undefined;

var _img_util = __webpack_require__(105);

var APIUtilImg = _interopRequireWildcard(_img_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_IMG = exports.RECEIVE_ALL_IMG = 'RECEIVE_ALL_IMG';
var RECEIVE_IMG = exports.RECEIVE_IMG = 'RECEIVE_IMG';
var REMOVE_IMG = exports.REMOVE_IMG = 'REMOVE_IMG';

var receiveAllImg = exports.receiveAllImg = function receiveAllImg(imgs) {
  return {
    type: RECEIVE_ALL_IMG,
    imgs: imgs
  };
};

var receiveImg = exports.receiveImg = function receiveImg(img) {
  return {
    type: RECEIVE_IMG,
    img: img
  };
};

var removeImg = exports.removeImg = function removeImg(imgId) {
  return {
    type: REMOVE_IMG,
    imgId: imgId
  };
};

var requestAllImg = exports.requestAllImg = function requestAllImg(id) {
  return function (dispatch) {
    return APIUtilImg.requestAllImg(id).then(function (imgs) {
      return dispatch(receiveAllImg(imgs));
    });
  };
};

var requestImg = exports.requestImg = function requestImg(imgId) {
  return function (dispatch) {
    return APIUtilImg.requestImg(imgId).then(function (img) {
      return dispatch(receiveImg(img));
    });
  };
};

var createImg = exports.createImg = function createImg(bizId, img) {
  return function (dispatch) {
    return APIUtilImg.createImg(bizId, img).then(function (img) {
      return dispatch(receiveImg(img));
    });
  };
};

var deleteImg = exports.deleteImg = function deleteImg(imgId) {
  return function (dispatch) {
    return APIUtilImg.deleteImg(imgId).then(function (img) {
      return dispatch(removeImg(img.id));
    });
  };
};

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _search = __webpack_require__(153);

var _search2 = _interopRequireDefault(_search);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(4);

var _search3 = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    requestSearch: function requestSearch(key, loc) {
      return dispatch((0, _search3.requestSearch)(key, loc));
    }
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, mapDispatchToProps)(_search2.default));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading() {
  return _react2.default.createElement(
    'div',
    { className: 'loading' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1517685405/celp/loading_n3hxjr.gif' })
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Loading...'
    )
  );
};

exports.default = Loading;

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RECEIVE_CONFIRMATION = exports.RECEIVE_CONFIRMATION = 'RECEIVE_CONFIRMATION';
var CLEAR_NOTIFICATION = exports.CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

var clearNotification = exports.clearNotification = function clearNotification() {
  return {
    type: CLEAR_NOTIFICATION
  };
};

var receiveConfirmation = exports.receiveConfirmation = function receiveConfirmation(confirmation) {
  return {
    type: RECEIVE_CONFIRMATION,
    confirmation: confirmation
  };
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBookmark = exports.createBookmark = exports.removeBookmark = exports.receiveBookmark = exports.REMOVE_BOOKMARK = exports.RECEIVE_BOOKMARK = undefined;

var _bookmark_util = __webpack_require__(102);

var APIUtilBookmark = _interopRequireWildcard(_bookmark_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_BOOKMARK = exports.RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
var REMOVE_BOOKMARK = exports.REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

var receiveBookmark = exports.receiveBookmark = function receiveBookmark(payload) {
  return {
    type: 'RECEIVE_BOOKMARK',
    biz: payload.biz
  };
};

var removeBookmark = exports.removeBookmark = function removeBookmark(payload) {
  return {
    type: 'REMOVE_BOOKMARK',
    biz: payload.biz
  };
};

var createBookmark = exports.createBookmark = function createBookmark(bizId) {
  return function (dispatch) {
    return APIUtilBookmark.createBookmark(bizId).then(function (payload) {
      return dispatch(receiveBookmark(payload));
    });
  };
};

var deleteBookmark = exports.deleteBookmark = function deleteBookmark(bizId) {
  return function (dispatch) {
    return APIUtilBookmark.deleteBookmark(bizId).then(function (payload) {
      return dispatch(removeBookmark(payload));
    });
  };
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteReviewTag = exports.createReviewTag = exports.removeReviewTag = exports.receiveReviewTag = exports.REMOVE_REVIEW_TAG = exports.RECEIVE_REVIEW_TAG = undefined;

var _review_tag_util = __webpack_require__(107);

var APIUtilReviewTag = _interopRequireWildcard(_review_tag_util);

var _review = __webpack_require__(12);

var _session = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_REVIEW_TAG = exports.RECEIVE_REVIEW_TAG = 'RECEIVE_REVIEW_TAG';
var REMOVE_REVIEW_TAG = exports.REMOVE_REVIEW_TAG = 'REMOVE_REVIEW_TAG';

var receiveReviewTag = exports.receiveReviewTag = function receiveReviewTag(payload) {
  return {
    type: 'RECEIVE_REVIEW_TAG',
    review: payload.review
  };
};

var removeReviewTag = exports.removeReviewTag = function removeReviewTag(payload) {
  return {
    type: 'REMOVE_REVIEW_TAG',
    review: payload.review
  };
};

var createReviewTag = exports.createReviewTag = function createReviewTag(reviewId, tag) {
  return function (dispatch) {
    return APIUtilReviewTag.createReviewTag(reviewId, tag).then(function (payload) {
      return dispatch(receiveReviewTag(payload));
    }, function (errors) {
      return dispatch((0, _session.receiveErrors)(errors.responseJSON));
    });
  };
};

var deleteReviewTag = exports.deleteReviewTag = function deleteReviewTag(reviewId, tag) {
  return function (dispatch) {
    return APIUtilReviewTag.deleteReviewTag(reviewId, tag).then(function (payload) {
      return dispatch(removeReviewTag(payload));
    });
  };
};

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      var userDropdown = document.getElementById('dropdown');
      if (userDropdown.classList.length > 0 && e.target.classList.value !== 'dropdown-modal-screen') {
        userDropdown.classList.remove('hidden');
      } else {
        userDropdown.classList.add('hidden');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          currentUser = _props.currentUser,
          logout = _props.logout;

      var display = currentUser ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'user', onClick: function onClick(e) {
              return _this2.handleClick(e);
            } },
          _react2.default.createElement(
            'div',
            { className: 'userImg' },
            _react2.default.createElement('img', { src: currentUser.avatar_url })
          ),
          _react2.default.createElement(
            'div',
            { className: 'userMenu' },
            _react2.default.createElement('i', { className: 'fas fa-sort-down' })
          ),
          _react2.default.createElement(
            'div',
            { id: 'dropdown', className: 'hidden' },
            _react2.default.createElement(
              'div',
              { id: 'user-dropdown' },
              _react2.default.createElement(
                'div',
                { className: 'user-dropdown-detail' },
                _react2.default.createElement(
                  'div',
                  { className: 'user-dropdown-detail-userImg' },
                  _react2.default.createElement('img', { src: currentUser.avatar_url })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'user-detail' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/aboutme' },
                    currentUser.username
                  )
                )
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement('i', { className: 'fa fa-user', 'aria-hidden': 'true' }),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/aboutme' },
                    'About Me'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement('i', { className: 'fa fa-cog', 'aria-hidden': 'true' }),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/settings' },
                    'Account Setting'
                  )
                )
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'a',
                  null,
                  _react2.default.createElement(
                    'li',
                    { onClick: function onClick() {
                        return _this2.props.logout();
                      } },
                    'Log Out'
                  )
                )
              )
            ),
            _react2.default.createElement('div', { onClick: function onClick(e) {
                return _this2.handleClick(e);
              }, className: 'dropdown-modal-screen' })
          )
        )
      ) : _react2.default.createElement(
        'div',
        { className: 'signup' },
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'signup-btn', to: '/signup' },
            _react2.default.createElement(
              'li',
              null,
              'Sign Up'
            )
          )
        )
      );
      return display;
    }
  }]);

  return Button;
}(_react2.default.Component);

exports.default = Button;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(1);

var _search = __webpack_require__(20);

var _category = __webpack_require__(155);

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    requestCategory: function requestCategory(cat) {
      return dispatch((0, _search.requestCategory)(cat));
    }
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, mapDispatchToProps)(_category2.default));

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeCenterActivities = function (_React$Component) {
  _inherits(HomeCenterActivities, _React$Component);

  function HomeCenterActivities(props) {
    _classCallCheck(this, HomeCenterActivities);

    var _this = _possibleConstructorReturn(this, (HomeCenterActivities.__proto__ || Object.getPrototypeOf(HomeCenterActivities)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(HomeCenterActivities, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'home-center-recent-activity' },
        _react2.default.createElement(
          'h1',
          null,
          'Recent Activity'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'li',
              { className: 'tooltip' },
              'Nearby',
              _react2.default.createElement(
                'div',
                { className: 'tooltiptext' },
                'under construction'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'tooltip' },
              'Friends',
              _react2.default.createElement(
                'div',
                { className: 'tooltiptext' },
                'under construction'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'tooltip' },
              'Following',
              _react2.default.createElement(
                'div',
                { className: 'tooltiptext' },
                'under construction'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'home-center-activities group' },
          _react2.default.createElement(
            'div',
            { className: 'home-center-activity-item' },
            _react2.default.createElement(
              'div',
              { className: 'home-center-activity-item-user' },
              _react2.default.createElement(
                'div',
                { className: 'activity-item-avatar' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://celp.herokuapp.com/#/user/night' },
                  _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1517865922/celp/1517951_10202453119865002_502589953_o_qngm10.jpg' })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://celp.herokuapp.com/#/user/night' },
                  _react2.default.createElement(
                    'h2',
                    null,
                    'night'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Added 2 photos'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'activity-item-biz' },
              _react2.default.createElement(
                'a',
                { href: 'https://celp.herokuapp.com/#/biz/41/' },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Sungrass Bakery'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'activity-two-photo-container' },
                _react2.default.createElement(
                  'div',
                  { className: 'activity-one-of-two-photo' },
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'https://celp.herokuapp.com/#/biz/41/' },
                      _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1518152703/celp/IMG_6974_ci5qep.jpg' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'tooltip' },
                    _react2.default.createElement('i', { className: 'far fa-thumbs-up' }),
                    'Like',
                    _react2.default.createElement(
                      'div',
                      { className: 'tooltiptext' },
                      'under construction'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'activity-one-of-two-photo' },
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: 'https://celp.herokuapp.com/#/biz/41/' },
                      _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1518152650/celp/IMG_8181_wezxkw.jpg' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'tooltip' },
                    _react2.default.createElement('i', { className: 'far fa-thumbs-up' }),
                    'Like',
                    _react2.default.createElement(
                      'div',
                      { className: 'tooltiptext' },
                      'under construction'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'home-center-activity-item' },
            _react2.default.createElement(
              'div',
              { className: 'home-center-activity-item-user' },
              _react2.default.createElement(
                'div',
                { className: 'activity-item-avatar' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://celp.herokuapp.com/#/user/luufan' },
                  _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1517865985/celp/323463_2651367759148_317015209_o_ywnmvb.jpg' })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://celp.herokuapp.com/#/user/luufan' },
                  _react2.default.createElement(
                    'h2',
                    null,
                    'luufan'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Wrote a review'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'activity-item-biz' },
              _react2.default.createElement(
                'div',
                { className: 'activity-item-biz-img' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://celp.herokuapp.com/#/biz/48/' },
                  _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1518141662/celp/o_llfg8s.png' })
                )
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://celp.herokuapp.com/#/biz/48/' },
                _react2.default.createElement(
                  'h2',
                  null,
                  'App Academy'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'activity-item-biz-review' },
                _react2.default.createElement(
                  'p',
                  null,
                  'I was once in your shoes looking to see if App Academy was the right bootcamp for me. Well, you\'re in luck. I\'m going to spend the next ten minutes giving you a quick rundown on my thoughts on this program. A quick note of disclosure, I will be  receiving an a/A branded sweater for posting a review but fear not, that review is completely unbiased and independent of that.'
                )
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://celp.herokuapp.com/#/biz/48/' },
                'Continue reading'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'home-center-activity-item' },
            _react2.default.createElement(
              'div',
              { className: 'home-center-activity-item-user' },
              _react2.default.createElement(
                'div',
                { className: 'activity-item-avatar' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://celp.herokuapp.com/#/user/night' },
                  _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1517865922/celp/1517951_10202453119865002_502589953_o_qngm10.jpg' })
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://celp.herokuapp.com/#/user/night' },
                  _react2.default.createElement(
                    'h2',
                    null,
                    'night'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Added 1 photo'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'activity-item-biz' },
              _react2.default.createElement(
                'a',
                { href: 'https://celp.herokuapp.com/#/biz/42/' },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Shasha Caf\xE9'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'activity-one-photo-container' },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'https://celp.herokuapp.com/#/biz/42/' },
                    _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1518152938/celp/IMG_6995_xbjibc.jpg' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'tooltip' },
                  _react2.default.createElement('i', { className: 'far fa-thumbs-up' }),
                  'Like',
                  _react2.default.createElement(
                    'div',
                    { className: 'tooltiptext' },
                    'under construction'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return HomeCenterActivities;
}(_react2.default.Component);

exports.default = HomeCenterActivities;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    _this.addBizPlace = _this.addBizPlace.bind(_this);
    return _this;
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.geocoder = new google.maps.Geocoder();
      var map = _reactDom2.default.findDOMNode(this.refs.map);
      var options = {
        center: { lat: 37.7758, lng: -122.435 },
        zoom: 13
      };
      this.map = new google.maps.Map(map, options);
      this.listenForMove();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      var pos = void 0;
      if (this.props.bizes) {
        this.props.bizes.forEach(function (biz, idx) {
          if (biz.lat && biz.lng) {
            pos = new google.maps.LatLng(biz.lat, biz.lng);
            _this2.addBizPlace({ pos: pos, name: biz.name });
            if (idx === 0) {
              _this2.map.setCenter(pos);
            }
          }
          // else {
          //   this.geocoder.geocode({'address': biz.display_address}, (results, status)=>{
          //     if (status == 'OK') {
          //       if (idx === 0) {
          //         this.map.setCenter(results[0].geometry.location);
          //       }
          //       this.addBizPlace({pos: results[0].geometry.location, name: biz.name})
          //     } else {
          //       alert('Geocode was not successful for the following reason: ' + status);
          //     }
          //   });
          // }
        });
      } else if (this.props.biz) {
        if (this.props.biz.lat && this.props.biz.lng) {
          pos = new google.maps.LatLng(this.props.biz.lat, this.props.biz.lng);
          this.addBizPlace({ pos: pos, name: this.props.biz.name });
          this.map.setCenter(pos);
        }
        // else {
        //   this.geocoder.geocode({'address': this.props.biz.display_address}, (results, status)=>{
        //     if (status == 'OK') {
        //       this.map.setCenter(results[0].geometry.location);
        //       this.addBizPlace({pos: results[0].geometry.location, name: this.props.biz.name})
        //     } else {
        //       alert('Geocode was not successful for the following reason: ' + status);
        //     }
        //   });
        // }
      }
      // bizPlace.forEach(this.addBizPlace);
    }
  }, {
    key: 'addBizPlace',
    value: function addBizPlace(place) {
      // const pos = new google.maps.LatLng(place.lat, place.lng);
      var marker = new google.maps.Marker({
        position: place.pos,
        map: this.map
      });
      marker.addListener('click', function () {
        // Future feature;
      });
    }
  }, {
    key: 'listenForMove',
    value: function listenForMove() {
      var _this3 = this;

      google.maps.event.addListener(this.map, 'idle', function () {
        var bounds = _this3.map.getBounds();
        // Future feature;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'map', ref: 'map' },
        _react2.default.createElement(
          'p',
          null,
          'Hey! Here is google map.'
        )
      );
    }
  }]);

  return Map;
}(_react2.default.Component);

exports.default = Map;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReviewsIndexItemRating = function (_React$Component) {
  _inherits(ReviewsIndexItemRating, _React$Component);

  function ReviewsIndexItemRating() {
    _classCallCheck(this, ReviewsIndexItemRating);

    return _possibleConstructorReturn(this, (ReviewsIndexItemRating.__proto__ || Object.getPrototypeOf(ReviewsIndexItemRating)).apply(this, arguments));
  }

  _createClass(ReviewsIndexItemRating, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var review = this.props.review;

      var rate = document.getElementById('review-item-rate-' + review.id);
      var position = review.rate === 0 ? 240 : 222 + 36 * review.rate;
      if (rate) {
        rate.style.backgroundPosition = '0 -' + position + 'px';
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.props.review.rate !== newProps.review.rate) {
        var review = newProps.review;

        var rate = document.getElementById('review-item-rate-' + review.id);
        var position = review.rate === 0 ? 240 : 222 + 36 * review.rate;
        if (rate) {
          rate.style.backgroundPosition = '0 -' + position + 'px';
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var review = this.props.review;

      return _react2.default.createElement('div', { id: 'review-item-rate-' + review.id,
        className: 'biz-review-rating' });
    }
  }]);

  return ReviewsIndexItemRating;
}(_react2.default.Component);

exports.default = ReviewsIndexItemRating;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _configureStore = __webpack_require__(79);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _root = __webpack_require__(113);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  var store = (0, _configureStore2.default)(preloadedState);
  window.store = store;
  _reactDom2.default.render(_react2.default.createElement(_root2.default, { store: store }), document.getElementById('root'));
});

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reduxThunk = __webpack_require__(95);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _root = __webpack_require__(96);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { composeWithDevTools } from 'redux-devtools-extension';

// import logger from 'redux-logger';
var middlewares = [_reduxThunk2.default];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  var _require = __webpack_require__(112),
      logger = _require.logger;

  middlewares.push(logger);
}

var configureStore = function configureStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _redux.createStore)(_root2.default, preloadedState, _redux.applyMiddleware.apply(undefined, middlewares));
};

exports.default = configureStore;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/luu/celp/node_modules/redux-thunk/lib/index.js'\n    at Error (native)");

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _entities = __webpack_require__(97);

var _entities2 = _interopRequireDefault(_entities);

var _session = __webpack_require__(109);

var _session2 = _interopRequireDefault(_session);

var _errors = __webpack_require__(110);

var _errors2 = _interopRequireDefault(_errors);

var _notification = __webpack_require__(111);

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  entities: _entities2.default,
  session: _session2.default,
  errors: _errors2.default,
  notification: _notification2.default
});

exports.default = rootReducer;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _biz = __webpack_require__(98);

var _biz2 = _interopRequireDefault(_biz);

var _img = __webpack_require__(104);

var _img2 = _interopRequireDefault(_img);

var _review = __webpack_require__(106);

var _review2 = _interopRequireDefault(_review);

var _user = __webpack_require__(108);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entitiesReducer = (0, _redux.combineReducers)({
  biz: _biz2.default,
  imgs: _img2.default,
  reviews: _review2.default,
  users: _user2.default
});

exports.default = entitiesReducer;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _biz = __webpack_require__(8);

var _review = __webpack_require__(12);

var _bookmark = __webpack_require__(48);

var _user = __webpack_require__(13);

var bizReducer = function bizReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  Object.freeze(state);
  var newState = {};
  switch (action.type) {
    case _biz.RECEIVE_ALL_BIZ:
      return action.bizes;

    case _biz.RECEIVE_BIZ:
      newState = Object.assign({}, state);
      newState[action.payload.biz.id] = action.payload.biz;
      return Object.assign({}, state, newState);
    case _review.RECEIVE_REVIEW:
      newState = Object.assign({}, state);
      newState[action.biz.id] = action.biz;
      return newState;
    case _review.REMOVE_REVIEW:
      newState = Object.assign({}, state);
      newState[action.biz.id] = action.biz;
      return newState;
    case _bookmark.RECEIVE_BOOKMARK:
      newState = Object.assign({}, state);
      newState[action.biz.id] = action.biz;
      return newState;
    case _bookmark.REMOVE_BOOKMARK:
      newState = Object.assign({}, state);
      newState[action.biz.id] = action.biz;
      return newState;
    case _user.RECEIVE_USER:
      newState = Object.assign({}, state, action.biz);
      return newState;
    default:
      return state;
  }
};

exports.default = bizReducer;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fetchBizes = exports.fetchBizes = function fetchBizes() {
  return $.ajax({
    url: 'api/biz',
    method: 'GET'
  });
};

var fetchBiz = exports.fetchBiz = function fetchBiz(bizId) {
  return $.ajax({
    url: 'api/biz/' + bizId,
    method: 'GET'
  });
};

var sendSMS = exports.sendSMS = function sendSMS(bizId, phoneNumber) {
  return $.ajax({
    url: 'api/biz/' + bizId + '/sms',
    method: 'POST',
    data: { phoneNumber: phoneNumber }
  });
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createUser = exports.createUser = function createUser(user) {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user: user }
  });
};

var updateUser = exports.updateUser = function updateUser(user) {
  return $.ajax({
    url: '/api/users/' + user.id,
    method: 'PATCH',
    data: { user: user }
  });
};

var createSession = exports.createSession = function createSession(user) {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user: user }
  });
};

var deleteSession = exports.deleteSession = function deleteSession() {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createReview = exports.createReview = function createReview(bizId, review) {
  return $.ajax({
    url: 'api/biz/' + bizId + '/reviews',
    method: 'POST',
    data: { review: review }
  });
};

var requestAllReviews = exports.requestAllReviews = function requestAllReviews(bizId) {
  return $.ajax({
    url: 'api/biz/' + bizId + '/reviews',
    method: 'GET'
  });
};

var requestReview = exports.requestReview = function requestReview(bizId) {
  return $.ajax({
    url: 'api/biz/' + bizId + '/review',
    method: 'GET'
  });
};

var updateReview = exports.updateReview = function updateReview(bizId, review) {
  return $.ajax({
    url: 'api/biz/' + bizId + '/review',
    method: 'PATCH',
    data: { review: review }
  });
};

var deleteReview = exports.deleteReview = function deleteReview(reviewId) {
  return $.ajax({
    url: 'api/reviews/' + reviewId,
    method: 'DELETE'
  });
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createBookmark = exports.createBookmark = function createBookmark(bizId) {
  return $.ajax({
    url: 'api/biz/' + bizId + '/bookmark',
    method: 'POST'
  });
};

var deleteBookmark = exports.deleteBookmark = function deleteBookmark(bizId) {
  return $.ajax({
    url: 'api/biz/' + bizId + '/bookmark',
    method: 'DELETE'
  });
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var requestUser = exports.requestUser = function requestUser(username) {
  return $.ajax({
    url: 'api/users/' + username,
    method: 'GET'
  });
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _biz = __webpack_require__(8);

var _img = __webpack_require__(27);

var _user = __webpack_require__(13);

var imgReducer = function imgReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  Object.freeze(state);
  var newState = {};
  switch (action.type) {
    case _biz.RECEIVE_BIZ:
      if (action.payload.imgs) {
        return action.payload.imgs;
      } else {
        return state;
      }
    case _img.RECEIVE_ALL_IMG:
      return Object.assign({}, state, action.imgs);
    case _img.RECEIVE_IMG:
      newState[action.img.id] = action.img;
      return Object.assign({}, state, newState);
    case _img.REMOVE_IMG:
      newState = Object.assign({}, state);
      delete newState[action.imgId];
      return newState;
    case _user.RECEIVE_USER:
      return action.imgs;
    default:
      return state;
  }
};

exports.default = imgReducer;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createImg = exports.createImg = function createImg(bizId, img) {
  return $.ajax({
    url: 'api/biz/' + bizId + '/imgs',
    method: 'POST',
    data: { img: img }
  });
};

var requestAllImg = exports.requestAllImg = function requestAllImg(bizId) {
  return $.ajax({
    url: 'api/biz/' + bizId + '/imgs',
    method: 'GET'
  });
};

var requestImg = exports.requestImg = function requestImg(imgId) {
  return $.ajax({
    url: 'api/img/' + imgId,
    method: 'GET'
  });
};

var deleteImg = exports.deleteImg = function deleteImg(imgId) {
  return $.ajax({
    url: 'api/imgs/' + imgId,
    method: 'DELETE'
  });
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _biz = __webpack_require__(8);

var _review = __webpack_require__(12);

var _user = __webpack_require__(13);

var _review_tag = __webpack_require__(49);

var reviewReducer = function reviewReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  Object.freeze(state);
  var newState = {};
  switch (action.type) {
    case _biz.RECEIVE_BIZ:
      if (action.payload.reviews) {
        return action.payload.reviews;
      } else {
        return state;
      }

    case _review.RECEIVE_ALL_REVIEWS:
      return Object.assign({}, action.reviews);

    case _review.RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return Object.assign({}, state, newState);

    case _review.REMOVE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.reviewId];
      newState.order.splice(newState.order.indexOf(action.reviewId), 1);
      return newState;

    case _user.RECEIVE_USER:
      return action.reviews;

    case _review_tag.RECEIVE_REVIEW_TAG:
      newState = Object.assign({}, state);
      newState[action.review.id] = action.review;
      return newState;

    case _review_tag.REMOVE_REVIEW_TAG:
      newState = Object.assign({}, state);
      newState[action.review.id] = action.review;
      return newState;

    default:
      return state;
  }
};

exports.default = reviewReducer;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createReviewTag = exports.createReviewTag = function createReviewTag(reviewId, tag) {
  return $.ajax({
    url: 'api/reviews/' + reviewId + '/review_tags',
    method: 'POST',
    data: { tag: tag }
  });
};

var deleteReviewTag = exports.deleteReviewTag = function deleteReviewTag(reviewId, tag) {
  return $.ajax({
    url: 'api/reviews/' + reviewId + '/review_tags',
    method: 'DELETE',
    data: { tag: tag }
  });
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _biz = __webpack_require__(8);

var _user = __webpack_require__(13);

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  Object.freeze(state);
  var newState = {};
  switch (action.type) {
    case _biz.RECEIVE_BIZ:
      if (action.payload.users) {
        return action.payload.users;
      } else {
        return state;
      }
    case _user.RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

exports.default = userReducer;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _session = __webpack_require__(7);

var _nullSession = { currentUser: null };

var sessionReducer = function sessionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _nullSession;
  var action = arguments[1];

  Object.freeze(state);
  var newState = void 0;
  switch (action.type) {
    case _session.RECEIVE_CURRENT_USER:
      newState = { currentUser: action.currentUser };
      return newState;
    default:
      return state;
  };
};

exports.default = sessionReducer;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _session = __webpack_require__(7);

var errorsReducer = function errorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  Object.freeze(state);
  var newState = void 0;
  switch (action.type) {
    case _session.RECEIVE_ERRORS:
      return action.errors;
    case _session.CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

exports.default = errorsReducer;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notification = __webpack_require__(47);

var notificationReducer = function notificationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  Object.freeze(state);
  var newState = void 0;
  switch (action.type) {
    case _notification.RECEIVE_CONFIRMATION:
      return action.confirmation;

    case _notification.CLEAR_NOTIFICATION:
      return {};

    default:
      return state;

  }
};

exports.default = notificationReducer;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/luu/celp/node_modules/redux-logger/dist/redux-logger.js'\n    at Error (native)");

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(1);

var _app = __webpack_require__(150);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
  var store = _ref.store;
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.HashRouter,
      null,
      _react2.default.createElement(_app2.default, null)
    )
  );
};

exports.default = Root;

/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _nav_bar_container = __webpack_require__(151);

var _nav_bar_container2 = _interopRequireDefault(_nav_bar_container);

var _session_form_container = __webpack_require__(156);

var _session_form_container2 = _interopRequireDefault(_session_form_container);

var _route_util = __webpack_require__(159);

var _home_container = __webpack_require__(160);

var _home_container2 = _interopRequireDefault(_home_container);

var _not_found = __webpack_require__(164);

var _not_found2 = _interopRequireDefault(_not_found);

var _biz_index_container = __webpack_require__(166);

var _biz_index_container2 = _interopRequireDefault(_biz_index_container);

var _biz_show_container = __webpack_require__(169);

var _biz_show_container2 = _interopRequireDefault(_biz_show_container);

var _add_img_container = __webpack_require__(180);

var _add_img_container2 = _interopRequireDefault(_add_img_container);

var _biz_img_index_container = __webpack_require__(192);

var _biz_img_index_container2 = _interopRequireDefault(_biz_img_index_container);

var _footer = __webpack_require__(195);

var _footer2 = _interopRequireDefault(_footer);

var _write_review_container = __webpack_require__(196);

var _write_review_container2 = _interopRequireDefault(_write_review_container);

var _user_profile_container = __webpack_require__(198);

var _user_profile_container2 = _interopRequireDefault(_user_profile_container);

var _user_settings_container = __webpack_require__(205);

var _user_settings_container2 = _interopRequireDefault(_user_settings_container);

var _write_review_search = __webpack_require__(210);

var _write_review_search2 = _interopRequireDefault(_write_review_search);

var _events = __webpack_require__(211);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    { className: 'main' },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home_container2.default }),
      _react2.default.createElement(_route_util.AuthRoute, { path: '/signup', component: _session_form_container2.default }),
      _react2.default.createElement(_route_util.AuthRoute, { path: '/login', component: _session_form_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _nav_bar_container2.default })
    ),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/' }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/signup' }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/login' }),
      _react2.default.createElement(_route_util.ProtectedRoute, { exact: true, path: '/settings', component: _user_settings_container2.default }),
      _react2.default.createElement(_route_util.ProtectedRoute, { exact: true, path: '/aboutme', component: _user_profile_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/user/:username', component: _user_profile_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/search', component: _biz_index_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/writereview/search', component: _write_review_search2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/events', component: _events2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/biz/:bizId', component: _biz_show_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/biz/:bizId/photos', component: _biz_img_index_container2.default }),
      _react2.default.createElement(_route_util.ProtectedRoute, { exact: true, path: '/biz/:bizId/addphoto', component: _add_img_container2.default }),
      _react2.default.createElement(_route_util.ProtectedRoute, { exact: true, path: '/update_review/biz/:bizId', component: _write_review_container2.default }),
      _react2.default.createElement(_route_util.ProtectedRoute, { exact: true, path: '/write_review/biz/:bizId', component: _write_review_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { render: function render() {
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
        } })
    ),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { component: _footer2.default })
    )
  );
};

exports.default = App;
// <Route component={NotFound} />

// <Route exact path='/biz' component={BizIndexContainer} />

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(1);

var _nav_bar = __webpack_require__(152);

var _nav_bar2 = _interopRequireDefault(_nav_bar);

var _session = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.session.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      return dispatch((0, _session.logout)());
    }
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_nav_bar2.default));

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _button = __webpack_require__(62);

var _button2 = _interopRequireDefault(_button);

var _search_container = __webpack_require__(35);

var _search_container2 = _interopRequireDefault(_search_container);

var _category_container = __webpack_require__(63);

var _category_container2 = _interopRequireDefault(_category_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));
  }

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentUser = _props.currentUser,
          logout = _props.logout;

      return _react2.default.createElement(
        'header',
        { className: 'header' },
        _react2.default.createElement(
          'div',
          { className: 'nav-bar' },
          _react2.default.createElement(
            'h1',
            { className: 'logo' },
            _react2.default.createElement(
              'a',
              { href: '/' },
              _react2.default.createElement(
                'span',
                null,
                'Celp'
              ),
              _react2.default.createElement('i', { className: 'fab fa-yelp' })
            )
          ),
          _react2.default.createElement(_search_container2.default, null),
          _react2.default.createElement(_button2.default, { currentUser: currentUser, logout: logout })
        ),
        _react2.default.createElement(
          'div',
          { className: 'menu-bar' },
          _react2.default.createElement(
            'div',
            { className: 'menu' },
            _react2.default.createElement(_category_container2.default, null),
            _react2.default.createElement(
              'div',
              { className: 'services' },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '/#/writereview/search' },
                  _react2.default.createElement(
                    'li',
                    null,
                    'Write a Review'
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { href: '/#/events' },
                  _react2.default.createElement(
                    'li',
                    null,
                    'Events'
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/talk' },
                  _react2.default.createElement(
                    'li',
                    { className: 'tooltip' },
                    'Talk'
                  )
                )
              )
            ),
            !currentUser ? _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/login' },
              _react2.default.createElement(
                'div',
                { className: 'login-btn' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Log In'
                )
              )
            ) : ""
          )
        )
      );
    }
  }]);

  return NavBar;
}(_react2.default.Component);

exports.default = NavBar;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = { key: '', loc: '', className: 'hidden' };
    return _this;
  }

  // componentDidMount(){
  //   if (this.props.match.params.key || this.props.match.params.loc) {
  //     let key = this.props.match.params.key;
  //     let loc = this.props.match.params.loc;
  //     this.props.requestSearch(key, loc)
  //       .then(this.props.history.push(`/search?key=${key}&loc=${loc}`));
  //   }
  // }

  _createClass(Search, [{
    key: 'handleInput',
    value: function handleInput(e, type) {
      if (this.state.className == '') {
        this.setState({ className: 'hidden' });
      }
      this.setState(_defineProperty({}, type, e.target.value));
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      var loc = this.state.loc.split(' ').join('+');
      var key = this.state.key.split(' ').join('+');
      if (!loc && !key) {
        this.setState({ className: '' });
      } else {
        this.props.requestSearch(key, loc).then(this.props.history.push('/search?key=' + key + '&loc=' + loc));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        { onSubmit: function onSubmit(e) {
            return handleClick(e);
          }, className: 'searchBar' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            null,
            'Find'
          ),
          _react2.default.createElement('input', { onChange: function onChange(e) {
              return _this2.handleInput(e, 'key');
            }, type: 'text', value: this.state.key, placeholder: 'App Academy, Cake, Bakeries' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'searchBar-location' },
          _react2.default.createElement(
            'span',
            null,
            'Near'
          ),
          _react2.default.createElement('input', { onChange: function onChange(e) {
              return _this2.handleInput(e, 'loc');
            }, type: 'text', value: this.state.loc, placeholder: 'San Francisco, CA' })
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick(e) {
              return _this2.handleClick(e);
            } },
          _react2.default.createElement('i', { className: 'fas fa-search' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'hint ' + this.state.className },
          'Say something here'
        )
      );
    }
  }]);

  return Search;
}(_react2.default.Component);

exports.default = Search;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var requestSearch = exports.requestSearch = function requestSearch(key, loc) {
  return $.ajax({
    url: 'api/searches?key=' + key + '&loc=' + loc,
    method: 'GET'
  });
};

var requestCategory = exports.requestCategory = function requestCategory(cat, num) {
  return $.ajax({
    url: 'api/searches?cat=' + cat + '&num=' + num,
    method: 'GET'
  });
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_React$Component) {
  _inherits(Category, _React$Component);

  function Category() {
    _classCallCheck(this, Category);

    return _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).apply(this, arguments));
  }

  _createClass(Category, [{
    key: 'handleClick',
    value: function handleClick(cat) {
      this.props.requestCategory(cat).then(this.props.history.push('/search?cat=' + cat));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'business' },
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                return _this2.handleClick("Restaurant");
              } },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('i', { className: 'fas fa-utensils' }),
              _react2.default.createElement(
                'p',
                null,
                'Restaurants'
              )
            )
          ),
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                return _this2.handleClick("Nightlife");
              } },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('i', { className: 'fas fa-glass-martini' }),
              _react2.default.createElement(
                'p',
                null,
                'Nightlife'
              )
            )
          ),
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                return _this2.handleClick("Homeservices");
              } },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('i', { className: 'fas fa-wrench' }),
              _react2.default.createElement(
                'p',
                null,
                'Home Services'
              ),
              _react2.default.createElement('i', { className: 'fa fa-sort-desc', 'aria-hidden': 'true' })
            )
          )
        )
      );
    }
  }]);

  return Category;
}(_react2.default.Component);

exports.default = Category;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(4);

var _session = __webpack_require__(7);

var _session_form = __webpack_require__(157);

var _session_form2 = _interopRequireDefault(_session_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var formType = ownProps.match.path === '/signup' ? 'signup' : 'login';
  return {
    formType: formType,
    errors: state.errors
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  var _action = ownProps.match.path === '/signup' ? _session.createUser : _session.createSession;
  return {
    action: function action(user) {
      return dispatch(_action(user));
    },
    clearErrors: function clearErrors() {
      return dispatch((0, _session.clearErrors)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_session_form2.default);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _session_img = __webpack_require__(158);

var _session_img2 = _interopRequireDefault(_session_img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SessionForm = function (_React$Component) {
  _inherits(SessionForm, _React$Component);

  function SessionForm() {
    _classCallCheck(this, SessionForm);

    var _this = _possibleConstructorReturn(this, (SessionForm.__proto__ || Object.getPrototypeOf(SessionForm)).call(this));

    _this.state = {
      'username': '',
      'email': '',
      'password': ''
    };
    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  _createClass(SessionForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.clearErrors();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.props.match.path !== newProps.match.path) {
        this.props.clearErrors();
      }
    }
  }, {
    key: 'handleInput',
    value: function handleInput(type) {
      var _this2 = this;

      return function (e) {
        _this2.setState(_defineProperty({}, type, e.target.value));
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _this3 = this;

      e.preventDefault();
      this.props.action(this.state).then(function () {
        return _this3.props.history.push('/');
      });
      this.setState({
        'username': '',
        'email': '',
        'password': ''
      });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.props.clearErrors();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var img = ['https://res.cloudinary.com/ddwejrtgh/image/upload/v1517865952/celp/135238_10202453128025206_873409347_o_vz2crb.jpg'];
      var text = this.props.formType == 'signup' ? 'Sign Up' : 'Log In';
      var h2 = this.props.formType == 'signup' ? 'Sign Up for' : 'Log In to';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          { className: 'header-session' },
          _react2.default.createElement(
            'h1',
            { className: 'logo' },
            _react2.default.createElement(
              'a',
              { href: '/' },
              _react2.default.createElement(
                'span',
                null,
                'Celp'
              ),
              _react2.default.createElement('i', { className: 'fab fa-yelp' })
            )
          )
        ),
        this.props.errors.length ? _react2.default.createElement(
          'div',
          { className: 'session-error' },
          _react2.default.createElement(
            'p',
            null,
            this.props.errors[0]
          ),
          _react2.default.createElement(
            'div',
            { onClick: function onClick() {
                return _this4.handleClose();
              }, className: 'errors-closeBtn' },
            '\xD7'
          )
        ) : "",
        _react2.default.createElement(
          'div',
          { className: 'session' },
          _react2.default.createElement(
            'div',
            { className: 'session-form' },
            _react2.default.createElement(
              'h2',
              null,
              h2,
              ' Celp'
            ),
            this.props.formType !== 'signup' ? _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'p',
                null,
                'New to Celp? ',
                _react2.default.createElement(
                  'a',
                  { href: '#/signup/' },
                  'Sign up'
                )
              )
            ) : _react2.default.createElement(
              'h3',
              null,
              'Connect with great local businesses'
            ),
            _react2.default.createElement(
              'div',
              { className: 'term' },
              _react2.default.createElement(
                'p',
                null,
                'By ',
                text,
                ', you agree to Celp\u2019s ',
                _react2.default.createElement(
                  'a',
                  null,
                  'Terms of Service'
                ),
                ' and ',
                _react2.default.createElement(
                  'a',
                  null,
                  'Privacy Policy.'
                )
              )
            ),
            _react2.default.createElement(
              'form',
              { className: 'normal-form' },
              _react2.default.createElement('input', { id: 'username', onChange: this.handleInput('username'), name: 'user[username]', type: 'text', value: this.state.username, placeholder: 'username' }),
              this.props.formType == 'signup' ? _react2.default.createElement('input', { onChange: this.handleInput('email'), type: 'text', name: 'user[email]', value: this.state.email, placeholder: 'email' }) : '',
              _react2.default.createElement('input', { id: 'password', onChange: this.handleInput('password'), type: 'password', name: 'user[password]', value: this.state.password, placeholder: 'password' }),
              this.props.formType !== 'signup' ? _react2.default.createElement(
                'a',
                { href: '#/forgotpassword/' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Forgot password?'
                )
              ) : '',
              _react2.default.createElement(
                'button',
                { id: 'login', onClick: function onClick(e) {
                    return _this4.handleClick(e);
                  } },
                text
              ),
              this.props.formType !== 'signup' ? _react2.default.createElement(
                'p',
                null,
                'New to Celp? ',
                _react2.default.createElement(
                  'a',
                  { href: '#/signup/' },
                  'Sign up'
                )
              ) : _react2.default.createElement(
                'p',
                null,
                'Already on Celp? ',
                _react2.default.createElement(
                  'a',
                  { href: '#/login/' },
                  'Log in'
                )
              )
            )
          ),
          _react2.default.createElement(_session_img2.default, { img: img[0] })
        )
      );
    }
  }]);

  return SessionForm;
}(_react2.default.Component);

exports.default = SessionForm;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SessionImg = function SessionImg(_ref) {
  var img = _ref.img;
  return _react2.default.createElement(
    'div',
    { className: 'session-img' },
    _react2.default.createElement('img', { src: img })
  );
};

exports.default = SessionImg;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProtectedRoute = exports.AuthRoute = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = function Auth(_ref) {
  var Component = _ref.component,
      path = _ref.path,
      loggedIn = _ref.loggedIn,
      exact = _ref.exact;
  return _react2.default.createElement(_reactRouterDom.Route, { path: path, exact: exact, render: function render(props) {
      return loggedIn ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }) : _react2.default.createElement(Component, props);
    }
  });
};

var Protected = function Protected(_ref2) {
  var Component = _ref2.component,
      path = _ref2.path,
      loggedIn = _ref2.loggedIn,
      exact = _ref2.exact;
  return _react2.default.createElement(_reactRouterDom.Route, { path: path, exact: exact, render: function render(props) {
      return loggedIn ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

var AuthRoute = exports.AuthRoute = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, null)(Auth));

var ProtectedRoute = exports.ProtectedRoute = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, null)(Protected));

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _home = __webpack_require__(161);

var _home2 = _interopRequireDefault(_home);

var _session = __webpack_require__(7);

var _search = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.session.currentUser,
    bizes: Object.values(state.entities.biz),
    img: ['https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1522874_10202453141665547_272813371_o.jpg?oh=ef1f681bc575f9596268b4aa7ad1c89a&oe=5B26A25C', 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1559264_10202644420367395_1712400262_o.jpg?oh=86dab3ebf108d9a7b0f86aac79abd884&oe=5ADD2FE1', 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1932594_10202694158330813_956381266_o.jpg?oh=9cb0eca26e19c589c9a1ed7baafc4718&oe=5AED5112', 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1780203_10202739253498164_176394682_o.jpg?oh=5601d7dff6eb11a843356b6c7bf43ad0&oe=5B257BF7', 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/1781138_10203058700044128_2477849618289538833_o.jpg?oh=94d82f982e25f4bcaef50f5c7179cde9&oe=5AE41CF0', 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/10257499_10203058700124130_4604953966735714631_o.jpg?oh=a7b965f0ec8763c059571f004befc809&oe=5AE79426']
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      return dispatch((0, _session.logout)());
    },
    createSession: function createSession(user) {
      return dispatch((0, _session.createSession)(user));
    },
    requestCategory: function requestCategory(cat, num) {
      return dispatch((0, _search.requestCategory)(cat, num));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_home2.default);

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(62);

var _button2 = _interopRequireDefault(_button);

var _search_container = __webpack_require__(35);

var _search_container2 = _interopRequireDefault(_search_container);

var _category_container = __webpack_require__(63);

var _category_container2 = _interopRequireDefault(_category_container);

var _home_center = __webpack_require__(162);

var _home_center2 = _interopRequireDefault(_home_center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.requestCategory('Restaurant', 3);
    }
  }, {
    key: 'loginDemo',
    value: function loginDemo() {
      var _this2 = this;

      window.setTimeout(function () {
        var username = document.getElementById('username');
        username.value = 'demo_user';
        window.setTimeout(function () {
          var password = document.getElementById('password');
          password.value = 'password';
          window.setTimeout(function () {
            var btn = document.getElementById('login');
            btn.setAttribute("style", "background-color: #a71c1c");
            window.setTimeout(function () {
              _this2.props.createSession({ username: 'demo_user', email: '', password: 'password' }).then(_this2.props.history.push('/'));
            }, 100);
          }, 500);
        }, 1000);
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          currentUser = _props.currentUser,
          logout = _props.logout,
          img = _props.img;

      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'home-img-frame' },
          _react2.default.createElement('img', { className: 'home-img', src: '' + img[Math.floor(Math.random() * 6)] }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://celp.herokuapp.com/#/biz/41/' },
              'Sungrass Bakery'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'home-img-photo-by' },
            _react2.default.createElement(
              'p',
              null,
              'Photo by '
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://celp.herokuapp.com/#/user/luufan' },
              'luufan'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'home-main' },
          _react2.default.createElement(
            'div',
            { className: 'home-header' },
            _react2.default.createElement(
              'div',
              { className: 'services' },
              _react2.default.createElement(
                'a',
                { href: '/#/writereview/search' },
                _react2.default.createElement(
                  'div',
                  null,
                  'Write a Review'
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/#/events' },
                _react2.default.createElement(
                  'div',
                  null,
                  'Events'
                )
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://www.yelp.com/talk' },
                _react2.default.createElement(
                  'div',
                  null,
                  'Talk'
                )
              )
            ),
            currentUser ? _react2.default.createElement(_button2.default, { currentUser: currentUser, logout: logout }) : _react2.default.createElement(
              'div',
              { className: 'sessionButton' },
              _react2.default.createElement(
                'a',
                { href: '/#/login', onClick: function onClick() {
                    return _this3.loginDemo();
                  } },
                _react2.default.createElement(
                  'div',
                  { className: 'login demo-login' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Demo User'
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/#/login' },
                _react2.default.createElement(
                  'div',
                  { className: 'login' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Log In'
                  )
                )
              ),
              _react2.default.createElement(
                'a',
                { href: '/#/signup' },
                _react2.default.createElement(
                  'div',
                  { className: 'signup' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Sign Up'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'home-logo-container' },
            _react2.default.createElement(
              'a',
              { href: '/' },
              _react2.default.createElement(
                'h1',
                { className: 'home-logo' },
                'Celp',
                _react2.default.createElement('i', { className: 'fab fa-yelp' })
              )
            )
          ),
          _react2.default.createElement(_search_container2.default, null),
          _react2.default.createElement(_category_container2.default, null)
        ),
        _react2.default.createElement(_home_center2.default, { bizes: this.props.bizes })
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _home_center_item = __webpack_require__(163);

var _home_center_item2 = _interopRequireDefault(_home_center_item);

var _reactRouterDom = __webpack_require__(1);

var _home_center_activities = __webpack_require__(64);

var _home_center_activities2 = _interopRequireDefault(_home_center_activities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeCenter = function (_React$Component) {
  _inherits(HomeCenter, _React$Component);

  function HomeCenter() {
    _classCallCheck(this, HomeCenter);

    return _possibleConstructorReturn(this, (HomeCenter.__proto__ || Object.getPrototypeOf(HomeCenter)).apply(this, arguments));
  }

  _createClass(HomeCenter, [{
    key: 'render',
    value: function render() {
      var bizes = this.props.bizes;

      return _react2.default.createElement(
        'div',
        { className: 'home-center' },
        _react2.default.createElement(
          'div',
          { className: 'home-center-restaurant-location' },
          _react2.default.createElement(
            'h1',
            null,
            'Celp San Francisco'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/search?key=&loc=daly+city' },
              _react2.default.createElement(
                'li',
                null,
                'Daly City'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/search?key=&loc=South+San+Francisco' },
              _react2.default.createElement(
                'li',
                null,
                'South San Francisco'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/search?key=&loc=San+Bruno' },
              _react2.default.createElement(
                'li',
                null,
                'San Bruno'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/search?key=&loc=Millbrae' },
              _react2.default.createElement(
                'li',
                null,
                'Millbrae'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/search?key=&loc=Burlingame' },
              _react2.default.createElement(
                'li',
                null,
                'Burlingame'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/search?key=&loc=San+Mateo' },
              _react2.default.createElement(
                'li',
                null,
                'San Mateo'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/search?key=&loc=Foster+City' },
              _react2.default.createElement(
                'li',
                null,
                'Foster City'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/search?key=&loc=Belmont' },
              _react2.default.createElement(
                'li',
                null,
                'Belmont'
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/search?key=&loc=Redwood+City' },
              _react2.default.createElement(
                'li',
                null,
                'Redwood City'
              )
            )
          ),
          bizes.length > 0 ? _react2.default.createElement(
            'div',
            { className: 'home-center-restaurant-samples' },
            _react2.default.createElement(
              'h2',
              null,
              'Hot & New Businesses'
            ),
            _react2.default.createElement(
              'div',
              null,
              bizes.map(function (biz) {
                return _react2.default.createElement(_home_center_item2.default, { key: biz.id, biz: biz });
              })
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/search?cat=Restaurant' },
              'See more hot and new businesses'
            )
          ) : ""
        ),
        _react2.default.createElement(_home_center_activities2.default, null)
      );
    }
  }]);

  return HomeCenter;
}(_react2.default.Component);

exports.default = HomeCenter;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _biz_index_item_rating = __webpack_require__(21);

var _biz_index_item_rating2 = _interopRequireDefault(_biz_index_item_rating);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeCenterItem = function (_React$Component) {
  _inherits(HomeCenterItem, _React$Component);

  function HomeCenterItem() {
    _classCallCheck(this, HomeCenterItem);

    return _possibleConstructorReturn(this, (HomeCenterItem.__proto__ || Object.getPrototypeOf(HomeCenterItem)).apply(this, arguments));
  }

  _createClass(HomeCenterItem, [{
    key: 'render',
    value: function render() {
      var biz = this.props.biz;

      return _react2.default.createElement(
        'div',
        { className: 'home-center-item' },
        biz && biz.name ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'home-center-item-img' },
            biz.img_url ? _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/biz/' + biz.id },
              _react2.default.createElement('img', { src: biz.img_url })
            ) : _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/biz/' + biz.id },
              _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1517604984/celp/IMG_0531_id5npe.jpg' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'home-center-item-biz-info' },
            _react2.default.createElement(
              'div',
              { className: 'home-center-item-biz-name' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/biz/' + biz.id },
                _react2.default.createElement(
                  'h1',
                  null,
                  biz.name
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'home-ceter-item-biz-info-rating-review' },
              _react2.default.createElement(_biz_index_item_rating2.default, { biz: biz }),
              _react2.default.createElement(
                'p',
                null,
                biz.reviews_num,
                ' ',
                biz.reviews_num > 1 ? 'reviews' : 'review'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'biz-info-price-tags' },
              _react2.default.createElement(
                'div',
                { className: 'biz-info-price' },
                biz.price ? _react2.default.createElement(
                  'p',
                  null,
                  biz.price
                ) : "$$"
              ),
              biz.tags && biz.tags.length > 0 ? _react2.default.createElement(
                'p',
                null,
                '\xB7'
              ) : "",
              biz.tags && biz.tags.length > 0 ? _react2.default.createElement(
                'div',
                { className: 'biz-info-tags' },
                biz.tags.map(function (tag, idx) {
                  return _react2.default.createElement(
                    'p',
                    { key: idx },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/search?key=' + tag },
                      tag,
                      ' '
                    )
                  );
                })
              ) : ""
            ),
            biz.location && biz.location.city ? _react2.default.createElement(
              'p',
              null,
              biz.location.city
            ) : "",
            _react2.default.createElement(
              'div',
              { className: 'home-center-item-biz-hot' },
              _react2.default.createElement('i', { className: 'fas fa-fire' }),
              _react2.default.createElement(
                'p',
                null,
                'Hot place'
              )
            )
          )
        ) : ""
      );
    }
  }]);

  return HomeCenterItem;
}(_react2.default.Component);

exports.default = HomeCenterItem;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _not_found_util = __webpack_require__(165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_React$Component) {
  _inherits(NotFound, _React$Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      var imgArr = $.parseJSON((0, _not_found_util.getGif)().responseText);
      var imgUrl = imgArr.data[Math.floor(Math.random() * 25)].images.original.webp;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'notfound' },
          _react2.default.createElement(
            'h1',
            null,
            'Oops! Page Not Found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'notfound-img' },
            _react2.default.createElement('img', { src: imgUrl })
          )
        )
      );
    }
  }]);

  return NotFound;
}(_react2.default.Component);

exports.default = NotFound;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getGif = exports.getGif = function getGif() {
  return $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=e9H4ByZs95vlGYE7rg0nYbiF8eNgX4Dr',
    method: 'GET',
    async: false
  });
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _biz_index = __webpack_require__(167);

var _biz_index2 = _interopRequireDefault(_biz_index);

var _search = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    bizes: Object.values(state.entities.biz)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    requestSearch: function requestSearch(key, loc) {
      return dispatch((0, _search.requestSearch)(key, loc));
    },
    requestCategory: function requestCategory(cat, num) {
      return dispatch((0, _search.requestCategory)(cat, num));
    }
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_biz_index2.default));

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _biz_index_item = __webpack_require__(168);

var _biz_index_item2 = _interopRequireDefault(_biz_index_item);

var _map = __webpack_require__(65);

var _map2 = _interopRequireDefault(_map);

var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizIndex = function (_React$Component) {
  _inherits(BizIndex, _React$Component);

  function BizIndex() {
    _classCallCheck(this, BizIndex);

    var _this = _possibleConstructorReturn(this, (BizIndex.__proto__ || Object.getPrototypeOf(BizIndex)).call(this));

    _this.state = {
      loc: '',
      cat: '',
      key: '',
      filter: '',
      bizes: []
    };
    return _this;
  }

  _createClass(BizIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.scrollTo(0, 0);
      // ReactDOM.findDOMNode(this).scrollTop = 0;
      if (this.props.location.search.includes('key')) {
        var arr = this.props.location.search.split('&');
        var key = arr[0] ? arr[0].slice(5) : "";
        var loc = arr[1] ? arr[1].slice(4) : "";
        this.setState({ cat: '' });
        this.setState({ loc: loc.split('+').join(' '), key: key });
        this.props.requestSearch(key, loc).then(function () {
          _this2.setState({ bizes: _this2.props.bizes });
        });
      } else if (this.props.location.search.includes('cat')) {
        this.setState({ cat: this.props.location.search.slice(5) });
        this.props.requestCategory(this.props.location.search.slice(5)).then(function () {
          _this2.setState({ bizes: _this2.props.bizes });
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _this3 = this;

      if (this.props.location.search !== newProps.location.search) {
        if (newProps.location.search.includes('key')) {
          var arr = newProps.location.search.split('&');
          var key = arr[0] ? arr[0].slice(5) : "";
          var loc = arr[1] ? arr[1].slice(4) : "";
          this.setState({ cat: '' });
          this.setState({ loc: loc.split('+').join(' '), key: key });
          this.props.requestSearch(key, loc).then(function () {
            _this3.setState({ bizes: _this3.props.bizes });
          });
        } else if (newProps.location.search.includes('cat')) {
          this.setState({ cat: newProps.location.search.slice(5) });
          this.props.requestCategory(newProps.location.search.slice(5)).then(function () {
            _this3.setState({ bizes: _this3.props.bizes });
          });
        }
      }
    }
  }, {
    key: 'handleFilter',
    value: function handleFilter(fil) {
      if (this.state.filter === fil) {
        this.setState({ filter: '', bizes: this.props.bizes });
      } else if (fil === 'open') {
        this.setState({ filter: fil, bizes: this.props.bizes.filter(function (biz) {
            return biz.is_open === true;
          }) });
      } else {
        this.setState({ filter: fil, bizes: this.props.bizes.filter(function (biz) {
            return biz.price === fil;
          }) });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var bizes = this.state.bizes;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'search-banner' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'search-title' },
              _react2.default.createElement(
                'h1',
                null,
                'Best ',
                this.state.cat ? this.state.cat : this.state.key
              ),
              _react2.default.createElement(
                'h1',
                null,
                this.state.cat ? 'in San Francisco, CA' : _react2.default.createElement(
                  'div',
                  null,
                  this.state.loc ? 'in ' + this.state.loc : ''
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'filter-btn' },
              _react2.default.createElement(
                'div',
                { className: 'filter-price' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    { onClick: function onClick() {
                        return _this4.handleFilter('$');
                      }, className: this.state.filter == '$' ? 'filtered' : "" },
                    '$'
                  ),
                  _react2.default.createElement(
                    'li',
                    { onClick: function onClick() {
                        return _this4.handleFilter('$$');
                      }, className: this.state.filter == '$$' ? 'filtered' : "" },
                    '$$'
                  ),
                  _react2.default.createElement(
                    'li',
                    { onClick: function onClick() {
                        return _this4.handleFilter('$$$');
                      }, className: this.state.filter == '$$$' ? 'filtered' : "" },
                    '$$$'
                  ),
                  _react2.default.createElement(
                    'li',
                    { onClick: function onClick() {
                        return _this4.handleFilter('$$$$');
                      }, className: this.state.filter == '$$$$' ? 'filtered' : "" },
                    '$$$$'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'filter-open-hour' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    { onClick: function onClick() {
                        return _this4.handleFilter('open');
                      }, className: this.state.filter == 'open' ? 'filtered' : "" },
                    _react2.default.createElement('i', { className: 'far fa-clock' }),
                    'Open Now'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'index' },
          _react2.default.createElement(
            'ul',
            { className: 'biz_index_list' },
            bizes.map(function (biz, idx) {
              return _react2.default.createElement(_biz_index_item2.default, { key: idx, biz: biz, idx: idx });
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'biz-index-map' },
            _react2.default.createElement(_map2.default, { bizes: bizes })
          )
        )
      );
    }
  }]);

  return BizIndex;
}(_react2.default.Component);

exports.default = BizIndex;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _biz_index_item_rating = __webpack_require__(21);

var _biz_index_item_rating2 = _interopRequireDefault(_biz_index_item_rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizIndexItem = function (_React$Component) {
  _inherits(BizIndexItem, _React$Component);

  function BizIndexItem() {
    _classCallCheck(this, BizIndexItem);

    return _possibleConstructorReturn(this, (BizIndexItem.__proto__ || Object.getPrototypeOf(BizIndexItem)).call(this));
  }

  _createClass(BizIndexItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          biz = _props.biz,
          idx = _props.idx;

      var review = void 0;
      if (biz.reviews_num > 1) {
        review = biz.reviews_num + ' Reviews';
      } else if (biz.reviews_num) {
        review = biz.reviews_num + ' Review';
      }

      return _react2.default.createElement(
        'div',
        { className: 'biz_index_item' },
        biz.img_url ? _react2.default.createElement(
          'div',
          { className: 'index-thumb' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/biz/' + biz.id },
            _react2.default.createElement('img', { src: '' + biz.img_url })
          )
        ) : _react2.default.createElement(
          'div',
          { className: 'index-thumb' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/biz/' + biz.id },
            _react2.default.createElement('img', { src: 'https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/fe8c0c8725d3/assets/img/default_avatars/business_90_square.png' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'biz-index-item-right' },
          _react2.default.createElement(
            'div',
            { className: 'biz-info' },
            _react2.default.createElement(
              'div',
              { className: 'biz-info-left' },
              _react2.default.createElement(
                'div',
                { className: 'biz-info-title' },
                _react2.default.createElement(
                  'p',
                  null,
                  idx + 1,
                  '.'
                ),
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/biz/' + biz.id },
                  biz.name
                )
              ),
              biz.reviews_num ? _react2.default.createElement(
                'div',
                { className: 'biz-info-rate-review' },
                _react2.default.createElement(_biz_index_item_rating2.default, { biz: biz }),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    review
                  )
                )
              ) : "",
              _react2.default.createElement(
                'div',
                { className: 'biz-info-price-tags' },
                _react2.default.createElement(
                  'div',
                  { className: 'biz-info-price' },
                  biz.price ? _react2.default.createElement(
                    'p',
                    null,
                    biz.price
                  ) : "No Price Reference Yet"
                ),
                biz.tags && biz.tags.length > 0 ? _react2.default.createElement(
                  'p',
                  null,
                  '\xB7'
                ) : "",
                biz.tags && biz.tags.length > 0 ? _react2.default.createElement(
                  'div',
                  { className: 'biz-info-tags' },
                  biz.tags.map(function (tag, idx) {
                    return _react2.default.createElement(
                      'p',
                      { key: idx },
                      _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/search?key=' + tag },
                        tag,
                        ' '
                      )
                    );
                  })
                ) : ""
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'biz-info-right' },
              _react2.default.createElement(
                'div',
                { className: 'biz-info-address' },
                biz.display_address
              ),
              _react2.default.createElement(
                'div',
                { className: 'biz-info-phone' },
                _react2.default.createElement(
                  'p',
                  null,
                  biz.phone
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'sample-review' },
            biz.review_sample ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'sample-review-user-avatar' },
                _react2.default.createElement('img', { src: biz.review_sample.user_url })
              ),
              _react2.default.createElement(
                'div',
                { className: 'sample-review-body group' },
                _react2.default.createElement(
                  'p',
                  null,
                  biz.review_sample.body.slice(0, 160),
                  _react2.default.createElement(
                    'a',
                    { href: '/#/biz/' + biz.id },
                    'read more'
                  )
                )
              )
            ) : ""
          )
        )
      );
    }
  }]);

  return BizIndexItem;
}(_react2.default.Component);

exports.default = BizIndexItem;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _biz_show = __webpack_require__(170);

var _biz_show2 = _interopRequireDefault(_biz_show);

var _biz = __webpack_require__(8);

var _reactRouterDom = __webpack_require__(1);

var _review = __webpack_require__(12);

var _review_tag = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var biz = state.entities.biz[ownProps.match.params.bizId];
  var bizEnoughInfo = false;
  if (biz) {
    bizEnoughInfo = biz.hasOwnProperty("location");
  }
  var imgs = [];
  if (biz && biz.img_ids) {
    imgs = biz.img_ids.map(function (id) {
      return state.entities.imgs[id];
    });
  }
  var reviews = [];
  var users = [];
  if (biz && biz.review_ids) {
    reviews = state.entities.reviews.order.map(function (id) {
      return state.entities.reviews[id];
    });
    users = state.entities.users;
  }
  var currentUser = state.session.currentUser;
  return {
    biz: biz,
    imgs: imgs,
    reviews: reviews,
    users: users,
    currentUser: currentUser,
    bizEnoughInfo: bizEnoughInfo
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    requestBiz: function requestBiz(bizId) {
      return dispatch((0, _biz.requestBiz)(bizId));
    },
    deleteReview: function deleteReview(reviewId) {
      return dispatch((0, _review.deleteReview)(reviewId));
    },
    sendSMS: function sendSMS(bizId, phoneNumber) {
      return dispatch((0, _biz.sendSMS)(bizId, phoneNumber));
    },
    createReviewTag: function createReviewTag(reviewId, tag) {
      return dispatch((0, _review_tag.createReviewTag)(reviewId, tag));
    },
    deleteReviewTag: function deleteReviewTag(reviewId, tag) {
      return dispatch((0, _review_tag.deleteReviewTag)(reviewId, tag));
    }
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_biz_show2.default));

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _biz_show_img = __webpack_require__(171);

var _biz_show_img2 = _interopRequireDefault(_biz_show_img);

var _reviews_index = __webpack_require__(173);

var _reviews_index2 = _interopRequireDefault(_reviews_index);

var _reactRouterDom = __webpack_require__(1);

var _loading = __webpack_require__(36);

var _loading2 = _interopRequireDefault(_loading);

var _biz_show_rating = __webpack_require__(177);

var _biz_show_rating2 = _interopRequireDefault(_biz_show_rating);

var _map = __webpack_require__(65);

var _map2 = _interopRequireDefault(_map);

var _biz_show_bookmark_container = __webpack_require__(178);

var _biz_show_bookmark_container2 = _interopRequireDefault(_biz_show_bookmark_container);

var _biz_index_item_rating = __webpack_require__(21);

var _biz_index_item_rating2 = _interopRequireDefault(_biz_index_item_rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizShow = function (_React$Component) {
  _inherits(BizShow, _React$Component);

  function BizShow() {
    _classCallCheck(this, BizShow);

    var _this = _possibleConstructorReturn(this, (BizShow.__proto__ || Object.getPrototypeOf(BizShow)).call(this));

    _this.state = {
      className: 'modal',
      phoneNumber: '',
      hint: 'hidden'
    };
    _this.handlePhoneNumber = _this.handlePhoneNumber.bind(_this);
    return _this;
  }

  _createClass(BizShow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.scrollTo(0, 0);
      this.props.requestBiz(this.props.match.params.bizId);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (!this.props.biz || this.props.match.params.bizId !== newProps.match.params.bizId || this.props.reviews.length !== newProps.reviews.length) {
        this.props.requestBiz(newProps.match.params.bizId);
      }
    }
  }, {
    key: 'openModal',
    value: function openModal() {
      this.setState({ className: 'is-open', phoneNumber: '' });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      // e.preventDefault();
      this.setState({ className: 'modal' });
    }
  }, {
    key: 'handlePhoneNumber',
    value: function handlePhoneNumber() {
      var _this2 = this;

      return function (e) {
        if (_this2.state.hint === '') {
          _this2.setState({ hint: 'hidden' });
        }
        _this2.setState({ phoneNumber: e.target.value });
      };
    }
  }, {
    key: 'phoneNumberCheck',
    value: function phoneNumberCheck(str) {
      var pattern = new RegExp(/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/);
      return pattern.test(str);
    }
  }, {
    key: 'sendPhoneNumber',
    value: function sendPhoneNumber(e) {
      e.preventDefault();
      if (this.phoneNumberCheck(this.state.phoneNumber)) {
        this.props.sendSMS(this.props.biz.id, this.state.phoneNumber).then(this.closeModal());
      } else {
        this.setState({ hint: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          bizEnoughInfo = _props.bizEnoughInfo,
          biz = _props.biz,
          imgs = _props.imgs,
          reviews = _props.reviews,
          users = _props.users,
          currentUser = _props.currentUser,
          deleteReview = _props.deleteReview,
          createReviewTag = _props.createReviewTag,
          deleteReviewTag = _props.deleteReviewTag;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'biz-show' },
          bizEnoughInfo ? _react2.default.createElement(
            'div',
            { className: 'biz-show-detail' },
            _react2.default.createElement(
              'div',
              { className: 'biz-show-top' },
              _react2.default.createElement(
                'div',
                { className: 'biz-show-left-top' },
                _react2.default.createElement(
                  'h1',
                  null,
                  biz.name
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'biz-show-rating-number' },
                  _react2.default.createElement(_biz_show_rating2.default, { biz: biz }),
                  biz.total_reviews > 1 ? _react2.default.createElement(
                    'p',
                    null,
                    biz.total_reviews,
                    ' reviews'
                  ) : _react2.default.createElement(
                    'p',
                    null,
                    biz.total_reviews === 1 ? "1 review" : '0 review'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'biz-info-price-tags' },
                  _react2.default.createElement(
                    'div',
                    { className: 'biz-info-price' },
                    biz.price ? _react2.default.createElement(
                      'p',
                      null,
                      biz.price
                    ) : "$$"
                  ),
                  biz.tags && biz.tags.length > 0 ? _react2.default.createElement(
                    'p',
                    null,
                    '\xB7'
                  ) : "",
                  biz.tags && biz.tags.length > 0 ? _react2.default.createElement(
                    'div',
                    { className: 'biz-info-tags' },
                    biz.tags.map(function (tag, idx) {
                      return _react2.default.createElement(
                        'p',
                        { key: idx },
                        _react2.default.createElement(
                          _reactRouterDom.Link,
                          { to: '/search?key=' + tag },
                          tag,
                          ' '
                        )
                      );
                    })
                  ) : ""
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'biz-show-right-top' },
                currentUser && biz.user_ids && biz.user_ids.includes(currentUser.id) ? _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/update_review/biz/' + biz.id },
                  _react2.default.createElement(
                    'button',
                    { className: 'writeReview' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-star' }),
                      'Update your Review'
                    )
                  )
                ) : _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/write_review/biz/' + biz.id },
                  _react2.default.createElement(
                    'button',
                    { className: 'writeReview' },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-star' }),
                      'Write a Review'
                    )
                  )
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '/#/biz/' + biz.id + '/addphoto' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-camera' }),
                      'Add Photo'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { onClick: function onClick() {
                        return _this3.openModal();
                      } },
                    _react2.default.createElement('i', { className: 'fas fa-share-square' }),
                    'Share'
                  ),
                  _react2.default.createElement(_reactRouterDom.Route, { component: _biz_show_bookmark_container2.default })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'biz-show-bottom' },
              _react2.default.createElement(
                'div',
                { className: 'biz-show-left-bottom' },
                _react2.default.createElement(
                  'div',
                  { className: 'biz-show-map' },
                  _react2.default.createElement(_map2.default, { biz: biz })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'biz-show-left-bottom-detail' },
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'div',
                      { className: 'biz-show-info' },
                      _react2.default.createElement(
                        'table',
                        null,
                        _react2.default.createElement(
                          'tbody',
                          null,
                          _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                              'th',
                              null,
                              _react2.default.createElement('i', { className: 'fas fa-map-marker' })
                            ),
                            _react2.default.createElement(
                              'td',
                              null,
                              biz.location.address1,
                              _react2.default.createElement('br', null),
                              biz.location.address2 ? _react2.default.createElement(
                                'p',
                                null,
                                biz.location.address2,
                                _react2.default.createElement('br', null)
                              ) : "",
                              biz.location.city,
                              ', \xA0',
                              biz.location.state,
                              ' \xA0',
                              biz.location.zipcode
                            )
                          ),
                          _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                              'th',
                              null,
                              _react2.default.createElement('i', { className: 'far fa-compass' })
                            ),
                            _react2.default.createElement(
                              'td',
                              null,
                              _react2.default.createElement(
                                'a',
                                { href: 'https://www.google.com/maps/dir/' + biz.display_address, target: '_blank' },
                                'Get Directions'
                              )
                            )
                          ),
                          _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                              'th',
                              null,
                              _react2.default.createElement('i', { className: 'fas fa-phone' })
                            ),
                            _react2.default.createElement(
                              'td',
                              null,
                              biz.phone
                            )
                          ),
                          _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                              'th',
                              null,
                              _react2.default.createElement('i', { className: 'fas fa-home' })
                            ),
                            _react2.default.createElement(
                              'td',
                              null,
                              biz.website ? _react2.default.createElement(
                                'a',
                                { href: 'http://' + biz.website },
                                biz.website
                              ) : _react2.default.createElement(
                                'a',
                                { href: '/#/biz/' + biz.id },
                                'celp.com'
                              )
                            )
                          ),
                          _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                              'th',
                              null,
                              _react2.default.createElement('i', { className: 'fas fa-mobile-alt' })
                            ),
                            _react2.default.createElement(
                              'td',
                              null,
                              _react2.default.createElement(
                                'a',
                                { onClick: function onClick() {
                                    return _this3.openModal();
                                  } },
                                'Send to your Phone'
                              )
                            )
                          )
                        )
                      ),
                      _react2.default.createElement('div', { className: 'biz-show-edit' })
                    )
                  )
                )
              ),
              _react2.default.createElement(_biz_show_img2.default, { imgs: imgs, biz: biz, currentUser: currentUser })
            ),
            _react2.default.createElement(
              'div',
              { className: this.state.className, id: 'send-sms' },
              _react2.default.createElement(
                'div',
                { className: 'biz-show-sms' },
                _react2.default.createElement(
                  'div',
                  { className: 'biz-show-sms-header' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    'Text to Phone'
                  ),
                  _react2.default.createElement(
                    'div',
                    { onClick: function onClick() {
                        return _this3.closeModal();
                      } },
                    _react2.default.createElement(
                      'span',
                      null,
                      '\xD7'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'biz_index_item' },
                  biz.img_url ? _react2.default.createElement(
                    'div',
                    { className: 'index-thumb' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/biz/' + biz.id, target: '_blank' },
                      _react2.default.createElement('img', { src: '' + biz.img_url })
                    )
                  ) : _react2.default.createElement(
                    'div',
                    { className: 'index-thumb' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/biz/' + biz.id, target: '_blank' },
                      _react2.default.createElement('img', { src: 'https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/fe8c0c8725d3/assets/img/default_avatars/business_90_square.png' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biz-index-item-right' },
                    _react2.default.createElement(
                      'div',
                      { className: 'biz-info' },
                      _react2.default.createElement(
                        'div',
                        { className: 'biz-info-left' },
                        _react2.default.createElement(
                          'div',
                          { className: 'biz-info-title' },
                          _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/biz/' + biz.id, target: '_blank' },
                            biz.name
                          )
                        ),
                        biz.review_ids && biz.review_ids.length > 0 ? _react2.default.createElement(
                          'div',
                          { className: 'biz-info-rate-review' },
                          _react2.default.createElement(_biz_index_item_rating2.default, { biz: biz }),
                          biz.review_ids.length == 1 ? _react2.default.createElement(
                            'p',
                            null,
                            '1 review'
                          ) : _react2.default.createElement(
                            'p',
                            null,
                            biz.review_ids.length,
                            ' reviews'
                          )
                        ) : "",
                        _react2.default.createElement(
                          'div',
                          { className: 'biz-info-price-tags' },
                          _react2.default.createElement(
                            'div',
                            { className: 'biz-info-price' },
                            biz.price ? _react2.default.createElement(
                              'p',
                              null,
                              biz.price
                            ) : "$$"
                          ),
                          biz.tags && biz.tags.length > 0 ? _react2.default.createElement(
                            'p',
                            null,
                            '\xB7'
                          ) : "",
                          biz.tags && biz.tags.length > 0 ? _react2.default.createElement(
                            'div',
                            { className: 'biz-info-tags' },
                            biz.tags.map(function (tag, idx) {
                              return _react2.default.createElement(
                                'p',
                                { key: idx },
                                _react2.default.createElement(
                                  _reactRouterDom.Link,
                                  { to: '/search?key=' + tag },
                                  tag,
                                  ' '
                                )
                              );
                            })
                          ) : ""
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'Text a link to your phone so you can quickly get directions, see photos, and read reviews on the go!'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'developer-notification' },
                  'Message from Developer: I\'m using free trial twilio that can only send message to verified number, feel free to contact me @425-449-2096.'
                ),
                _react2.default.createElement(
                  'form',
                  { className: 'send-sms-phone-number' },
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('input', { readOnly: true, value: '+1' }),
                    _react2.default.createElement('input', { onChange: this.handlePhoneNumber(), value: this.state.phoneNumber, type: 'text', placeholder: 'Phone Number' }),
                    _react2.default.createElement(
                      'div',
                      { className: 'hint ' + this.state.hint },
                      'Please input the valid phone number'
                    )
                  ),
                  _react2.default.createElement('input', { onClick: function onClick(e) {
                      return _this3.sendPhoneNumber(e);
                    }, type: 'submit', value: 'Text Link' })
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Your carrier\'s rates may apply'
                )
              ),
              _react2.default.createElement('div', { onClick: function onClick() {
                  return _this3.closeModal();
                }, className: 'modal-screen' })
            )
          ) : _react2.default.createElement(_loading2.default, null)
        ),
        _react2.default.createElement(
          'div',
          null,
          bizEnoughInfo && reviews ? _react2.default.createElement(_reviews_index2.default, {
            reviews: reviews,
            users: users,
            currentUser: currentUser,
            deleteReview: deleteReview,
            createReviewTag: createReviewTag,
            deleteReviewTag: deleteReviewTag,
            biz: biz }) : ""
        )
      );
    }
  }]);

  return BizShow;
}(_react2.default.Component);

exports.default = BizShow;

// <div className='thumb biz-show-img-zoom' id='biz-show-img-2'>
//   <img src='https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/1487994_10202453162466067_1183927869_o.jpg?oh=965e3bb005bd86a4858fe85048640aed&oe=5AEAEB97' />
// </div>
// <div onMouseOver={()=>this.mouseOver()} className='thumb' id='biz-show-img-3'>
//   <img src='https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/1501349_10202453168466217_804954821_o.jpg?oh=fcb423a163691b33856b052bb38dfe24&oe=5ADDCFDB' />
// </div>

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _biz_show_img_item = __webpack_require__(172);

var _biz_show_img_item2 = _interopRequireDefault(_biz_show_img_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizShowImg = function (_React$Component) {
  _inherits(BizShowImg, _React$Component);

  function BizShowImg() {
    _classCallCheck(this, BizShowImg);

    var _this = _possibleConstructorReturn(this, (BizShowImg.__proto__ || Object.getPrototypeOf(BizShowImg)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(BizShowImg, [{
    key: 'mouseOver',
    value: function mouseOver() {
      // const img = document.getElementById("biz-show-img-2");
      // // debugger
      // img.classList.remove(".biz-show-img-zoom");
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          imgs = _props.imgs,
          biz = _props.biz,
          currentUser = _props.currentUser;

      return _react2.default.createElement(
        'div',
        { className: 'biz-show-right-bottom' },
        _react2.default.createElement(
          'div',
          { className: 'biz-show-img' },
          imgs.length > 0 ? _react2.default.createElement(
            'div',
            null,
            imgs.map(function (img, idx) {
              if (idx <= 2) {
                return _react2.default.createElement(
                  'div',
                  { key: idx, className: 'thumb', id: 'biz-show-img-' + idx },
                  img ? _react2.default.createElement(_biz_show_img_item2.default, { img: img, biz: biz, currentUser: currentUser }) : ""
                );
              }
            })
          ) : _react2.default.createElement(
            'div',
            { className: 'biz-show-no-img' },
            _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1517535496/celp/city_line_nypobt.png' }),
            _react2.default.createElement(
              'a',
              { href: '/#/biz/' + biz.id + '/addphoto' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('i', { className: 'fas fa-camera' }),
                'Add Photo'
              )
            )
          )
        ),
        imgs.length > 0 ? _react2.default.createElement(
          'div',
          { className: 'biz-show-more-img' },
          _react2.default.createElement('i', { className: 'far fa-images' }),
          _react2.default.createElement(
            'a',
            { href: '/#/biz/' + biz.id + '/photos' },
            'See all ',
            biz.img_ids.length
          )
        ) : ""
      );
    }
  }]);

  return BizShowImg;
}(_react2.default.Component);

exports.default = BizShowImg;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizShowImgItem = function (_React$Component) {
  _inherits(BizShowImgItem, _React$Component);

  function BizShowImgItem() {
    _classCallCheck(this, BizShowImgItem);

    var _this = _possibleConstructorReturn(this, (BizShowImgItem.__proto__ || Object.getPrototypeOf(BizShowImgItem)).call(this));

    _this.state = { className: 'modal' };
    return _this;
  }

  _createClass(BizShowImgItem, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      $(document).keydown(function (e) {
        if (e.keyCode == 27) {
          _this2.closeShowImg(e);
        }
      });
    }
  }, {
    key: 'showImg',
    value: function showImg(e) {
      e.preventDefault();
      if (e.target.tagName === 'IMG') {
        this.setState({ className: 'is-open' });
      }
    }
  }, {
    key: 'closeShowImg',
    value: function closeShowImg(e) {
      e.preventDefault();
      this.setState({ className: 'modal' });
    }
    //
    // handleDelete(imgId){
    //   const {bizId} = this.props;
    //   this.props.deleteImg(imgId)
    //     .then(()=>{
    //         this.setState({className: 'modal'});
    //       }
    //     );
    // }

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          img = _props.img,
          biz = _props.biz,
          currentUser = _props.currentUser;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { className: 'biz-show-img-item', onClick: function onClick(e) {
            return _this3.showImg(e);
          }, src: img.url }),
        _react2.default.createElement(
          'div',
          { className: this.state.className + ' biz-show-img-item-modal' },
          _react2.default.createElement(
            'div',
            { className: 'img-show' },
            _react2.default.createElement('img', { src: img.url }),
            _react2.default.createElement(
              'div',
              { className: 'close-modal', onClick: function onClick(e) {
                  return _this3.closeShowImg(e);
                } },
              _react2.default.createElement(
                'span',
                null,
                '\xD7'
              )
            )
          ),
          _react2.default.createElement('div', { onClick: function onClick(e) {
              return _this3.closeShowImg(e);
            }, className: 'modal-screen' })
        )
      );
    }
  }]);

  return BizShowImgItem;
}(_react2.default.Component);

exports.default = BizShowImgItem;

// <div className='modal-img-show-description'>
//   <div>
//     <div className="biz-all-imgs-title-img">
//       <img/>
//     </div>
//     <div>
//       <a href={`#/biz/${biz.id}`}>{img.biz}</a>
//       <p>From {img.user}</p>
//     </div>
//     <div className='close-modal' onClick={(e)=>this.closeShowImg(e)}>
//       <span>&times;</span>
//     </div>
//   </div>
//   <div className='img-description'>
//     <p>{img.description}</p>
//   </div>
//   {currentUser && img.user_id === currentUser.id ?
//     <table className='img-description-table'>
//       <tbody>
//         <tr>
//           <th><i className="far fa-trash-alt"></i></th>
//           <td onClick={()=>this.handleDelete(img.id)}>Delete photo</td>
//         </tr>
//       </tbody>
//     </table>
//     : ""}
//   {img && img.created_at ?
//     <div className='img-description-created-at'>{img.created_at.slice(0, 10)}</div>
//   : ""}
// </div>

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _loading = __webpack_require__(36);

var _loading2 = _interopRequireDefault(_loading);

var _reviews_index_item = __webpack_require__(174);

var _reviews_index_item2 = _interopRequireDefault(_reviews_index_item);

var _reactRouterDom = __webpack_require__(1);

var _biz_show_more_info = __webpack_require__(175);

var _biz_show_more_info2 = _interopRequireDefault(_biz_show_more_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReviewsIndex = function (_React$Component) {
  _inherits(ReviewsIndex, _React$Component);

  function ReviewsIndex() {
    _classCallCheck(this, ReviewsIndex);

    return _possibleConstructorReturn(this, (ReviewsIndex.__proto__ || Object.getPrototypeOf(ReviewsIndex)).apply(this, arguments));
  }

  _createClass(ReviewsIndex, [{
    key: 'render',


    // componentDidMount(){
    //   this.props.requestAllReviews(this.props.match.params.bizId);
    // }
    //
    // componentWillReceiveProps(newProps){
    //   if (this.props.match.params.bizId !== newProps.match.params.bizId) {
    //     debugger
    //     this.props.requestAllReviews(newProps.match.params.bizId);
    //   }
    // }

    value: function render() {
      var _props = this.props,
          reviews = _props.reviews,
          biz = _props.biz,
          currentUser = _props.currentUser,
          users = _props.users,
          deleteReview = _props.deleteReview,
          history = _props.history,
          deleteReviewTag = _props.deleteReviewTag,
          createReviewTag = _props.createReviewTag;

      return _react2.default.createElement(
        'div',
        { className: 'review-main group' },
        _react2.default.createElement(
          'div',
          { className: 'review-index' },
          _react2.default.createElement(
            'div',
            { className: 'ask-community' },
            _react2.default.createElement(
              'h1',
              null,
              'Ask the Community'
            ),
            _react2.default.createElement('hr', null),
            biz ? _react2.default.createElement(
              'p',
              null,
              'Celp users haven\'t asked any questions yet about ',
              _react2.default.createElement(
                'strong',
                null,
                biz.name
              )
            ) : "",
            _react2.default.createElement(
              'button',
              { className: 'ask-question tooltip' },
              'Ask a Question',
              _react2.default.createElement(
                'div',
                { className: 'tooltiptext' },
                'under construction'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'review-index-title' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h1',
                null,
                'Recommended Reviews'
              ),
              biz ? _react2.default.createElement(
                'h2',
                null,
                'for ',
                biz.name
              ) : ''
            ),
            _react2.default.createElement(
              'div',
              { className: 'searchReview ' },
              _react2.default.createElement('input', { placeholder: 'Search within the reviews' }),
              _react2.default.createElement(
                'button',
                null,
                _react2.default.createElement('i', { className: 'fas fa-search' })
              )
            )
          ),
          _react2.default.createElement('hr', null),
          biz.review_ids && biz.review_ids.length > 0 ? _react2.default.createElement(
            'div',
            null,
            reviews.map(function (review) {
              return _react2.default.createElement(
                'div',
                { key: review.id },
                review ? _react2.default.createElement(_reviews_index_item2.default, {
                  review: review,
                  users: users,
                  bizId: biz.id,
                  currentUser: currentUser,
                  createReviewTag: createReviewTag,
                  deleteReviewTag: deleteReviewTag,
                  deleteReview: deleteReview }) : ""
              );
            })
          ) : _react2.default.createElement(
            'div',
            { className: 'no-review' },
            _react2.default.createElement(
              'h1',
              null,
              'There is no review for this business, be the first one to review it!'
            )
          )
        ),
        _react2.default.createElement(_biz_show_more_info2.default, { biz: biz })
      );
    }
  }]);

  return ReviewsIndex;
}(_react2.default.Component);

exports.default = ReviewsIndex;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reviews_index_item_rating = __webpack_require__(66);

var _reviews_index_item_rating2 = _interopRequireDefault(_reviews_index_item_rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReviewsIndexItem = function (_React$Component) {
  _inherits(ReviewsIndexItem, _React$Component);

  function ReviewsIndexItem() {
    _classCallCheck(this, ReviewsIndexItem);

    var _this = _possibleConstructorReturn(this, (ReviewsIndexItem.__proto__ || Object.getPrototypeOf(ReviewsIndexItem)).call(this));

    _this.state = {
      className: 'modal',
      report: 'modal',
      notification: '',
      error: '',
      reportContent: ''
    };
    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  _createClass(ReviewsIndexItem, [{
    key: 'handleClick',
    value: function handleClick(e, id) {
      e.preventDefault();
      this.props.deleteReview(id);
      this.setState({ className: 'modal' });
    }
  }, {
    key: 'showDelete',
    value: function showDelete(e) {
      e.preventDefault();
      if (e.target.classList.value !== 'modal-screen') {
        this.setState({ className: 'is-open' });
      }
    }
  }, {
    key: 'closeDelete',
    value: function closeDelete(e) {
      e.preventDefault();
      this.setState({ className: 'modal' });
    }
  }, {
    key: 'reviewTag',
    value: function reviewTag(e, tag) {
      if (!this.props.currentUser) {
        this.setState({ notification: 'Please login before tag review' });
      } else {
        if (e.target.className === '') {
          this.props.createReviewTag(this.props.review.id, tag);
        } else {
          this.props.deleteReviewTag(this.props.review.id, tag);
        }
      }
    }
  }, {
    key: 'openReport',
    value: function openReport(e) {
      e.preventDefault();
      if (e.target.classList.value !== 'modal-screen') {
        this.setState({ report: 'is-open' });
      }
    }
  }, {
    key: 'handleInput',
    value: function handleInput(e) {
      if (this.state.error) {
        this.setState({ error: '' });
      }
      this.setState({ reportContent: e.target.value });
    }
  }, {
    key: 'closeReport',
    value: function closeReport(e) {
      e.preventDefault();
      if (this.state.reportContent && e.target.innerText === 'Report') {
        this.setState({
          report: 'modal',
          notification: 'Your report has been submit.'
        });
      } else if (e.target.innerText === 'Report') {
        this.setState({ error: 'report-error' });
      } else {
        this.setState({ report: 'modal' });
      }
    }

    // mouseOver(id){
    //   const reviewTable = document.getElementById(`review-table-${id}`);
    //   reviewTable.classList.remove('hidden');
    // }
    //
    // mouseOut(id){
    //   const reviewTable = document.getElementById(`review-table-${id}`);
    //   reviewTable.classList.add('hidden');
    // }

    // onMouseOut={()=>this.mouseOut(review.id)} onMouseOver={()=>this.mouseOver(review.id)}

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          review = _props.review,
          currentUser = _props.currentUser,
          deleteReview = _props.deleteReview,
          users = _props.users;

      return _react2.default.createElement(
        'div',
        null,
        review && users[review.user_id] ? _react2.default.createElement(
          'div',
          { className: 'reviews-index-item' },
          _react2.default.createElement(
            'div',
            { className: 'review-user' },
            _react2.default.createElement(
              'div',
              { className: 'review-user-info' },
              _react2.default.createElement(
                'div',
                { className: 'review-user-avatar' },
                _react2.default.createElement('img', { src: users[review.user_id].avatar_url })
              ),
              _react2.default.createElement(
                'div',
                { className: 'review-user-info' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/user/' + users[review.user_id].username },
                      users[review.user_id].username
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'San Francisco, CA'
                  ),
                  users[review.user_id].user_review_num > 1 ? _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'strong',
                      null,
                      users[review.user_id].user_review_num
                    ),
                    ' reviews'
                  ) : _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'strong',
                      null,
                      '1'
                    ),
                    ' review'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'review-table-' + review.id, className: 'review-table' },
              _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-share-square' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Share Review'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-code' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Embed Review'
                    )
                  ),
                  currentUser && review.user_id === currentUser.id ? _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-pencil-alt' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: '/#/update_review/biz/' + review.biz_id },
                        'Edit Review'
                      )
                    )
                  ) : _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement('th', null),
                    _react2.default.createElement('td', null)
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'review-info' },
            _react2.default.createElement(
              'div',
              { className: 'review-info-rate-time' },
              _react2.default.createElement(_reviews_index_item_rating2.default, { review: review }),
              _react2.default.createElement(
                'p',
                null,
                review.updated_at.slice(0, 10)
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'review-info-body' },
              _react2.default.createElement(
                'p',
                null,
                review.body
              ),
              this.state.notification ? _react2.default.createElement(
                'div',
                { className: 'submit-report' },
                this.state.notification
              ) : "",
              currentUser && review.user_id === currentUser.id ? _react2.default.createElement(
                'div',
                { className: 'review-status' },
                _react2.default.createElement(
                  'div',
                  { onClick: function onClick(e) {
                      return _this2.showDelete(e);
                    }, className: 'deleteReview' },
                  _react2.default.createElement('i', { className: 'fas fa-trash-alt' })
                )
              ) : _react2.default.createElement(
                'div',
                { className: 'review-status' },
                this.props.review.is_tagged_by_user && this.props.review.is_tagged_by_user.length > 0 ? _react2.default.createElement(
                  'p',
                  { className: 'already-voted' },
                  'You voted'
                ) : _react2.default.createElement(
                  'p',
                  null,
                  'Was this review ...?'
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'ul',
                    { className: 'group' },
                    _react2.default.createElement(
                      'li',
                      { onClick: function onClick(e) {
                          return _this2.reviewTag(e, 'userful');
                        }, className: review.is_tagged_by_user && review.is_tagged_by_user.includes('userful') ? 'tagged' : "" },
                      _react2.default.createElement('i', { className: 'fas fa-lightbulb' }),
                      'Userful'
                    ),
                    _react2.default.createElement(
                      'li',
                      { onClick: function onClick(e) {
                          return _this2.reviewTag(e, 'funny');
                        }, className: review.is_tagged_by_user && review.is_tagged_by_user.includes('funny') ? 'tagged' : "" },
                      _react2.default.createElement('i', { className: 'far fa-smile' }),
                      'Funny'
                    ),
                    _react2.default.createElement(
                      'li',
                      { onClick: function onClick(e) {
                          return _this2.reviewTag(e, 'cool');
                        }, className: review.is_tagged_by_user && review.is_tagged_by_user.includes('cool') ? 'tagged' : "" },
                      _react2.default.createElement('i', { className: 'far fa-hand-peace' }),
                      'Cool'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { onClick: function onClick(e) {
                        return _this2.openReport(e);
                      }, className: 'report-review' },
                    _react2.default.createElement('i', { className: 'fas fa-flag' })
                  )
                )
              )
            )
          )
        ) : "",
        _react2.default.createElement(
          'div',
          { className: this.state.className, id: 'modal-' + review.id },
          _react2.default.createElement(
            'div',
            { className: 'delete-confirmation' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h1',
                null,
                'Confirmation'
              ),
              _react2.default.createElement(
                'div',
                { onClick: function onClick(e) {
                    return _this2.closeDelete(e);
                  } },
                _react2.default.createElement(
                  'span',
                  null,
                  '\xD7'
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Are you sure you would like to delete this review?'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'button',
                { onClick: function onClick(e) {
                    return _this2.handleClick(e, review.id);
                  } },
                'Yes'
              ),
              _react2.default.createElement(
                'button',
                { onClick: function onClick(e) {
                    return _this2.closeDelete(e);
                  } },
                'No'
              )
            )
          ),
          _react2.default.createElement('div', { onClick: function onClick(e) {
              return _this2.closeDelete(e);
            }, className: 'modal-screen' })
        ),
        _react2.default.createElement(
          'div',
          { className: this.state.report, id: 'modal-' + review.id },
          _react2.default.createElement(
            'div',
            { className: 'report-review-modal' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h1',
                null,
                'Report'
              ),
              _react2.default.createElement(
                'div',
                { onClick: function onClick(e) {
                    return _this2.closeReport(e);
                  } },
                _react2.default.createElement(
                  'span',
                  null,
                  '\xD7'
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Please refer to our ',
              _react2.default.createElement(
                'a',
                { href: 'https://www.yelp.com/guidelines' },
                'Content Guidelines'
              ),
              ' and ',
              _react2.default.createElement(
                'a',
                { href: 'https://www.yelp.com/static?p=tos' },
                'Terms of Service'
              ),
              ' from ',
              _react2.default.createElement(
                'a',
                { href: 'https://www.yelp.com' },
                'Yelp'
              ),
              ' and let us know why you think the content you\'ve reported may violate these guidelines.'
            ),
            _react2.default.createElement(
              'form',
              null,
              _react2.default.createElement(
                'label',
                { className: this.state.error },
                'Please provide specific details below:'
              ),
              _react2.default.createElement('textarea', { onChange: function onChange(e) {
                  return _this2.handleInput(e);
                }, value: this.state.reportContent }),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'button',
                  { onClick: function onClick(e) {
                      return _this2.closeReport(e);
                    } },
                  'Report'
                ),
                _react2.default.createElement(
                  'a',
                  { onClick: function onClick(e) {
                      return _this2.closeReport(e);
                    } },
                  'Cancel'
                )
              )
            )
          ),
          _react2.default.createElement('div', { onClick: function onClick(e) {
              return _this2.closeReport(e);
            }, className: 'modal-screen' })
        )
      );
    }
  }]);

  return ReviewsIndexItem;
}(_react2.default.Component);

;

exports.default = ReviewsIndexItem;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _biz_more_info_hours = __webpack_require__(176);

var _biz_more_info_hours2 = _interopRequireDefault(_biz_more_info_hours);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BizShowMoreInfo = function BizShowMoreInfo(_ref) {
  var biz = _ref.biz;
  return _react2.default.createElement(
    'div',
    { className: 'biz-show-more-info' },
    biz.hours ? _react2.default.createElement(_biz_more_info_hours2.default, { hours: biz.hours, isOpen: biz.is_open, todayHour: biz.today_hour }) : '',
    _react2.default.createElement(
      'h1',
      null,
      'More business info'
    ),
    _react2.default.createElement(
      'div',
      { className: 'more-biz-info' },
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Takes Reservations'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.takes_reservations ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Delivery'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.delivery ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Take-out'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.take_out ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Accepts Credit Cards'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.credit_cards ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Accepts Apple Pay'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.apple_pay ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Accepts Android Pay'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.android_pay ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Accepts Bitcoin'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.bitcoin ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Parking'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.parking
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Bike Parking'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.bike_parking ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Wheelchair Accessible'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.wheelchair ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Noise Level'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.noise_level
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Alcohol'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.alcohol
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Outdoor Seating'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.outdoor_seating ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Wi-Fi'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.wifi ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Has TV'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.has_tv ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Dogs Allowed'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.dogs_allowed ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Cats Allowed'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.cats_allowed ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Waiter Service'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.waiter_service ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Caters'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.caters ? "Yes" : "No"
        )
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Gender Neutral Restrooms'
        ),
        _react2.default.createElement(
          'dd',
          null,
          biz.gender_neutral_restrooms ? "Yes" : "No"
        )
      )
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Other Restaurants Nearby'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'a',
        { href: '/#/search?cat=Restaurant' },
        _react2.default.createElement(
          'li',
          null,
          'Find more Restaurants nearby'
        )
      )
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Browse nearby'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('i', { className: 'fas fa-utensils' }),
        _react2.default.createElement(
          'a',
          { href: '/#/search?cat=Restaurant' },
          _react2.default.createElement(
            'p',
            null,
            'Restaurants'
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('i', { className: 'fas fa-glass-martini' }),
        _react2.default.createElement(
          'a',
          { href: '/#/search?cat=Nightlife' },
          _react2.default.createElement(
            'p',
            null,
            'Nightlife'
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('i', { className: 'fas fa-shopping-bag' }),
        _react2.default.createElement(
          'a',
          { href: 'https://www.yelp.com/search?cflt=shopping&find_near=panuchos-san-francisco', target: '_blank' },
          _react2.default.createElement(
            'p',
            null,
            'Shopping'
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('i', { className: 'fas fa-ellipsis-h' }),
        _react2.default.createElement(
          'a',
          { href: '/#/search?cat=Restaurant' },
          _react2.default.createElement(
            'p',
            null,
            'Show all'
          )
        )
      )
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Dining in Celp'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('i', { className: 'fas fa-search' }),
        _react2.default.createElement(
          'a',
          { href: 'https://www.yelp.com', target: '_blank' },
          _react2.default.createElement(
            'p',
            null,
            'Search for reservations in Yelp'
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement('i', { className: 'fas fa-calendar-alt' }),
        _react2.default.createElement(
          'a',
          { href: 'https://www.yelp.com', target: '_blank' },
          _react2.default.createElement(
            'p',
            null,
            'Book a Table in Yelp'
          )
        )
      )
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Near Me'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'a',
        { href: '/#/search?cat=Restaurant' },
        _react2.default.createElement(
          'li',
          null,
          'Restaurants Near Me'
        )
      )
    )
  );
};

exports.default = BizShowMoreInfo;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizMoreInfoHours = function (_React$Component) {
  _inherits(BizMoreInfoHours, _React$Component);

  function BizMoreInfoHours(props) {
    _classCallCheck(this, BizMoreInfoHours);

    var _this = _possibleConstructorReturn(this, (BizMoreInfoHours.__proto__ || Object.getPrototypeOf(BizMoreInfoHours)).call(this, props));

    _this.state = { className: 'closed-now', openStatus: 'Closed now' };
    return _this;
  }

  _createClass(BizMoreInfoHours, [{
    key: 'ComponentDidMount',
    value: function ComponentDidMount() {
      if (this.props.isOpen) {
        this.setState({ className: 'open-now', openStatus: 'Open now' });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.isOpen) {
        this.setState({ className: 'open-now', openStatus: 'Open now' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          hours = _props.hours,
          todayHour = _props.todayHour;

      var time = function time(str) {
        if (str.slice(0, 2) > 12) {
          return str.slice(0, 2) - 12 + ':' + str.slice(2) + ' pm';
        } else {
          return str.slice(0, 2) + ':' + str.slice(2) + ' am';
        }
      };

      var today = new Date().getDay();

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'today-open-info' },
          _react2.default.createElement('i', { className: 'far fa-clock' }),
          _react2.default.createElement(
            'div',
            null,
            todayHour ? _react2.default.createElement(
              'p',
              null,
              'Today ',
              time(todayHour[0]),
              ' - ',
              time(todayHour[1])
            ) : "",
            _react2.default.createElement(
              'div',
              { className: this.state.className },
              this.state.openStatus
            )
          )
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Hours'
        ),
        _react2.default.createElement(
          'table',
          { className: 'biz-more-info-hours' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Mon'
              ),
              _react2.default.createElement(
                'td',
                null,
                hours[1] ? time(hours[1].start) + ' - ' + time(hours[1].end) : "Closed"
              ),
              _react2.default.createElement(
                'td',
                null,
                today === 1 ? _react2.default.createElement(
                  'div',
                  { className: this.state.className },
                  this.state.openStatus
                ) : ""
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Tue'
              ),
              _react2.default.createElement(
                'td',
                null,
                hours[2] ? time(hours[2].start) + ' - ' + time(hours[2].end) : "Closed"
              ),
              _react2.default.createElement(
                'td',
                null,
                today === 2 ? _react2.default.createElement(
                  'div',
                  { className: this.state.className },
                  this.state.openStatus
                ) : ""
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Wed'
              ),
              _react2.default.createElement(
                'td',
                null,
                hours[3] ? time(hours[3].start) + ' - ' + time(hours[3].end) : "Closed"
              ),
              _react2.default.createElement(
                'td',
                null,
                today === 3 ? _react2.default.createElement(
                  'div',
                  { className: this.state.className },
                  this.state.openStatus
                ) : ""
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Thu'
              ),
              _react2.default.createElement(
                'td',
                null,
                hours[4] ? time(hours[4].start) + ' - ' + time(hours[4].end) : "Closed"
              ),
              _react2.default.createElement(
                'td',
                null,
                today === 4 ? _react2.default.createElement(
                  'div',
                  { className: this.state.className },
                  this.state.openStatus
                ) : ""
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Fri'
              ),
              _react2.default.createElement(
                'td',
                null,
                hours[5] ? time(hours[5].start) + ' - ' + time(hours[5].end) : "Closed"
              ),
              _react2.default.createElement(
                'td',
                null,
                today === 5 ? _react2.default.createElement(
                  'div',
                  { className: this.state.className },
                  this.state.openStatus
                ) : ""
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Sat'
              ),
              _react2.default.createElement(
                'td',
                null,
                hours[6] ? time(hours[6].start) + ' - ' + time(hours[6].end) : "Closed"
              ),
              _react2.default.createElement(
                'td',
                null,
                today === 6 ? _react2.default.createElement(
                  'div',
                  { className: this.state.className },
                  this.state.openStatus
                ) : ""
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Sun'
              ),
              _react2.default.createElement(
                'td',
                null,
                hours[0] ? time(hours[0].start) + ' - ' + time(hours[0].end) : "Closed"
              ),
              _react2.default.createElement(
                'td',
                null,
                today === 0 ? _react2.default.createElement(
                  'div',
                  { className: this.state.className },
                  this.state.openStatus
                ) : ""
              )
            )
          )
        )
      );
    }
  }]);

  return BizMoreInfoHours;
}(_react2.default.Component);

exports.default = BizMoreInfoHours;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizShowRating = function (_React$Component) {
  _inherits(BizShowRating, _React$Component);

  function BizShowRating() {
    _classCallCheck(this, BizShowRating);

    return _possibleConstructorReturn(this, (BizShowRating.__proto__ || Object.getPrototypeOf(BizShowRating)).apply(this, arguments));
  }

  _createClass(BizShowRating, [{
    key: 'setRatingPosition',
    value: function setRatingPosition(biz) {
      var rate = document.getElementById('biz-show-rating-' + biz.id);
      var position = biz.biz_rate === 0 ? 0 : 48 * biz.biz_rate - 24;
      if (rate) {
        rate.style.backgroundPosition = '0 -' + position + 'px';
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var biz = this.props.biz;

      this.setRatingPosition(biz);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (this.props.biz.biz_rate !== newProps.biz.biz_rate) {
        var biz = newProps.biz;

        this.setRatingPosition(biz);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var biz = this.props.biz;

      return _react2.default.createElement('div', { id: 'biz-show-rating-' + biz.id, className: 'biz-info-rating' });
    }
  }]);

  return BizShowRating;
}(_react2.default.Component);

exports.default = BizShowRating;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _bookmark = __webpack_require__(48);

var _biz_show_bookmark = __webpack_require__(179);

var _biz_show_bookmark2 = _interopRequireDefault(_biz_show_bookmark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    marked: state.entities.biz[ownProps.match.params.bizId]['bookmarked?']
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    createBookmark: function createBookmark(bizId) {
      return dispatch((0, _bookmark.createBookmark)(bizId));
    },
    deleteBookmark: function deleteBookmark(bizId) {
      return dispatch((0, _bookmark.deleteBookmark)(bizId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_biz_show_bookmark2.default);

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizShowBookmark = function (_React$Component) {
  _inherits(BizShowBookmark, _React$Component);

  function BizShowBookmark() {
    _classCallCheck(this, BizShowBookmark);

    return _possibleConstructorReturn(this, (BizShowBookmark.__proto__ || Object.getPrototypeOf(BizShowBookmark)).apply(this, arguments));
  }

  _createClass(BizShowBookmark, [{
    key: 'handleClick',
    value: function handleClick(action) {
      if (action == 'unmark') {
        this.props.deleteBookmark(this.props.match.params.bizId);
      } else {
        this.props.createBookmark(this.props.match.params.bizId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var marked = this.props.marked;

      if (marked === undefined) {
        return _react2.default.createElement('div', null);
      } else if (marked) {
        return _react2.default.createElement(
          'li',
          { onClick: function onClick() {
              return _this2.handleClick('unmark');
            }, className: 'biz-show-bookmark-marked' },
          _react2.default.createElement(
            'p',
            { className: 'inner' },
            _react2.default.createElement('i', { className: 'fas fa-bookmark' }),
            'Bookmarked'
          )
        );
      } else {
        return _react2.default.createElement(
          'li',
          { onClick: function onClick() {
              return _this2.handleClick('mark');
            } },
          _react2.default.createElement('i', { className: 'fas fa-bookmark' }),
          'Bookmark'
        );
      }
    }
  }]);

  return BizShowBookmark;
}(_react2.default.Component);

exports.default = BizShowBookmark;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _add_img = __webpack_require__(181);

var _add_img2 = _interopRequireDefault(_add_img);

var _biz = __webpack_require__(8);

var _img = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    biz: state.entities.biz[ownProps.match.params.bizId]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    requestBiz: function requestBiz(bizId) {
      return dispatch((0, _biz.requestBiz)(bizId));
    },
    createImg: function createImg(bizId, img) {
      return dispatch((0, _img.createImg)(bizId, img));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_add_img2.default);

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = __webpack_require__(182);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _superagent = __webpack_require__(186);

var _superagent2 = _interopRequireDefault(_superagent);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddImg = function (_React$Component) {
  _inherits(AddImg, _React$Component);

  function AddImg(props) {
    _classCallCheck(this, AddImg);

    var _this = _possibleConstructorReturn(this, (AddImg.__proto__ || Object.getPrototypeOf(AddImg)).call(this, props));

    _this.state = { img: [] };
    return _this;
  }

  _createClass(AddImg, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.requestBiz(this.props.match.params.bizId);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (!this.props.biz) {
        this.props.requestBiz(this.props.match.params.bizId);
      }
    }
  }, {
    key: 'cloudinary',
    value: function (_cloudinary) {
      function cloudinary() {
        return _cloudinary.apply(this, arguments);
      }

      cloudinary.toString = function () {
        return _cloudinary.toString();
      };

      return cloudinary;
    }(function () {
      var _this2 = this;

      cloudinary.openUploadWidget({ cloud_name: 'ddwejrtgh', upload_preset: 'l8du0kzb' }, function (errors, result) {
        if (errors) {}
        result.forEach(function (file) {
          var img = { url: file.url, description: '' };
          _this2.setState({ img: _this2.state.img.concat([img]) });
        });
      });
    })
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _this3 = this;

      e.preventDefault();
      this.state.img.forEach(function (img) {
        _this3.props.createImg(_this3.props.biz.id, img).then(_this3.props.history.push('/biz/' + _this3.props.biz.id));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          biz = _props.biz,
          imgs = _props.imgs;

      return _react2.default.createElement(
        'div',
        { className: 'upload-photo-page' },
        _react2.default.createElement(
          'div',
          null,
          biz ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h1',
              null,
              _react2.default.createElement(
                'a',
                { href: '/#/biz/' + biz.id },
                biz.name,
                ':'
              ),
              ' Your Photos'
            ),
            biz.img_ids.length > 0 ? _react2.default.createElement(
              'a',
              { href: '/#/biz/' + biz.id + '/photos' },
              'View all photos'
            ) : ""
          ) : "",
          _react2.default.createElement(
            'button',
            { className: 'invokeCloudinary', onClick: function onClick() {
                return _this4.cloudinary();
              } },
            'Click to upload images'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'uploadImgGroup group' },
          this.state.img ? this.state.img.map(function (img, idx) {
            return _react2.default.createElement(
              'div',
              { key: idx, className: 'addImgContainer' },
              _react2.default.createElement(
                'div',
                { className: 'uploadedImg' },
                _react2.default.createElement(
                  'div',
                  { className: 'deleteUpload' },
                  _react2.default.createElement('i', { className: 'fas fa-trash-alt' })
                ),
                _react2.default.createElement('img', { src: '' + img.url })
              ),
              _react2.default.createElement('textarea', { placeholder: 'Add a caption' })
            );
          }) : ''
        ),
        this.state.img.length > 0 ? _react2.default.createElement(
          'div',
          { className: 'finish-upload' },
          _react2.default.createElement(
            'button',
            { onClick: function onClick(e) {
                return _this4.handleClick(e);
              } },
            'Finish'
          )
        ) : ""
      );
    }
  }]);

  return AddImg;
}(_react2.default.Component);

exports.default = AddImg;

// <div className='uploadImgGroup group'>
//   <div className='addImgContainer'>
//     <div className='uploadedImg'>
//       <div className='deleteUpload'>
//         <i className="fas fa-trash-alt"></i>
//       </div>
//       <img src='http://res.cloudinary.com/ddwejrtgh/image/upload/v1517642020/celp/IMG_2236_vydurt.jpg' />
//     </div>
//     <textarea placeholder='Add a caption'/>
//   </div>
// </div>

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_styles__ = __webpack_require__(185);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint prefer-template: 0 */






var Dropzone = function (_React$Component) {
  _inherits(Dropzone, _React$Component);

  function Dropzone(props, context) {
    _classCallCheck(this, Dropzone);

    var _this = _possibleConstructorReturn(this, (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this, props, context));

    _this.renderChildren = function (children, isDragActive, isDragAccept, isDragReject) {
      if (typeof children === 'function') {
        return children(_extends({}, _this.state, {
          isDragActive: isDragActive,
          isDragAccept: isDragAccept,
          isDragReject: isDragReject
        }));
      }
      return children;
    };

    _this.composeHandlers = _this.composeHandlers.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onDocumentDrop = _this.onDocumentDrop.bind(_this);
    _this.onDragEnter = _this.onDragEnter.bind(_this);
    _this.onDragLeave = _this.onDragLeave.bind(_this);
    _this.onDragOver = _this.onDragOver.bind(_this);
    _this.onDragStart = _this.onDragStart.bind(_this);
    _this.onDrop = _this.onDrop.bind(_this);
    _this.onFileDialogCancel = _this.onFileDialogCancel.bind(_this);
    _this.onInputElementClick = _this.onInputElementClick.bind(_this);

    _this.setRef = _this.setRef.bind(_this);
    _this.setRefs = _this.setRefs.bind(_this);

    _this.isFileDialogActive = false;

    _this.state = {
      draggedFiles: [],
      acceptedFiles: [],
      rejectedFiles: []
    };
    return _this;
  }

  _createClass(Dropzone, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var preventDropOnDocument = this.props.preventDropOnDocument;

      this.dragTargets = [];

      if (preventDropOnDocument) {
        document.addEventListener('dragover', __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* onDocumentDragOver */], false);
        document.addEventListener('drop', this.onDocumentDrop, false);
      }
      this.fileInputEl.addEventListener('click', this.onInputElementClick, false);
      // Tried implementing addEventListener, but didn't work out
      document.body.onfocus = this.onFileDialogCancel;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var preventDropOnDocument = this.props.preventDropOnDocument;

      if (preventDropOnDocument) {
        document.removeEventListener('dragover', __WEBPACK_IMPORTED_MODULE_2__utils__["e" /* onDocumentDragOver */]);
        document.removeEventListener('drop', this.onDocumentDrop);
      }
      if (this.fileInputEl != null) {
        this.fileInputEl.removeEventListener('click', this.onInputElementClick, false);
      }
      // Can be replaced with removeEventListener, if addEventListener works
      if (document != null) {
        document.body.onfocus = null;
      }
    }
  }, {
    key: 'composeHandlers',
    value: function composeHandlers(handler) {
      if (this.props.disabled) {
        return null;
      }

      return handler;
    }
  }, {
    key: 'onDocumentDrop',
    value: function onDocumentDrop(evt) {
      if (this.node && this.node.contains(evt.target)) {
        // if we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
        return;
      }
      evt.preventDefault();
      this.dragTargets = [];
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(evt) {
      if (this.props.onDragStart) {
        this.props.onDragStart.call(this, evt);
      }
    }
  }, {
    key: 'onDragEnter',
    value: function onDragEnter(evt) {
      evt.preventDefault();

      // Count the dropzone and any children that are entered.
      if (this.dragTargets.indexOf(evt.target) === -1) {
        this.dragTargets.push(evt.target);
      }

      this.setState({
        isDragActive: true, // Do not rely on files for the drag state. It doesn't work in Safari.
        draggedFiles: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* getDataTransferItems */])(evt)
      });

      if (this.props.onDragEnter) {
        this.props.onDragEnter.call(this, evt);
      }
    }
  }, {
    key: 'onDragOver',
    value: function onDragOver(evt) {
      // eslint-disable-line class-methods-use-this
      evt.preventDefault();
      evt.stopPropagation();
      try {
        // The file dialog on Chrome allows users to drag files from the dialog onto
        // the dropzone, causing the browser the crash when the file dialog is closed.
        // A drop effect of 'none' prevents the file from being dropped
        evt.dataTransfer.dropEffect = this.isFileDialogActive ? 'none' : 'copy'; // eslint-disable-line no-param-reassign
      } catch (err) {
        // continue regardless of error
      }

      if (this.props.onDragOver) {
        this.props.onDragOver.call(this, evt);
      }
      return false;
    }
  }, {
    key: 'onDragLeave',
    value: function onDragLeave(evt) {
      var _this2 = this;

      evt.preventDefault();

      // Only deactivate once the dropzone and all children have been left.
      this.dragTargets = this.dragTargets.filter(function (el) {
        return el !== evt.target && _this2.node.contains(el);
      });
      if (this.dragTargets.length > 0) {
        return;
      }

      // Clear dragging files state
      this.setState({
        isDragActive: false,
        draggedFiles: []
      });

      if (this.props.onDragLeave) {
        this.props.onDragLeave.call(this, evt);
      }
    }
  }, {
    key: 'onDrop',
    value: function onDrop(evt) {
      var _this3 = this;

      var _props = this.props,
          onDrop = _props.onDrop,
          onDropAccepted = _props.onDropAccepted,
          onDropRejected = _props.onDropRejected,
          multiple = _props.multiple,
          disablePreview = _props.disablePreview,
          accept = _props.accept;

      var fileList = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* getDataTransferItems */])(evt);
      var acceptedFiles = [];
      var rejectedFiles = [];

      // Stop default browser behavior
      evt.preventDefault();

      // Reset the counter along with the drag on a drop.
      this.dragTargets = [];
      this.isFileDialogActive = false;

      fileList.forEach(function (file) {
        if (!disablePreview) {
          try {
            file.preview = window.URL.createObjectURL(file); // eslint-disable-line no-param-reassign
          } catch (err) {
            if (process.env.NODE_ENV !== 'production') {
              console.error('Failed to generate preview for file', file, err); // eslint-disable-line no-console
            }
          }
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* fileAccepted */])(file, accept) && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* fileMatchSize */])(file, _this3.props.maxSize, _this3.props.minSize)) {
          acceptedFiles.push(file);
        } else {
          rejectedFiles.push(file);
        }
      });

      if (!multiple) {
        // if not in multi mode add any extra accepted files to rejected.
        // This will allow end users to easily ignore a multi file drop in "single" mode.
        rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.splice(1)));
      }

      if (onDrop) {
        onDrop.call(this, acceptedFiles, rejectedFiles, evt);
      }

      if (rejectedFiles.length > 0 && onDropRejected) {
        onDropRejected.call(this, rejectedFiles, evt);
      }

      if (acceptedFiles.length > 0 && onDropAccepted) {
        onDropAccepted.call(this, acceptedFiles, evt);
      }

      // Clear files value
      this.draggedFiles = null;

      // Reset drag state
      this.setState({
        isDragActive: false,
        draggedFiles: [],
        acceptedFiles: acceptedFiles,
        rejectedFiles: rejectedFiles
      });
    }
  }, {
    key: 'onClick',
    value: function onClick(evt) {
      var _props2 = this.props,
          onClick = _props2.onClick,
          disableClick = _props2.disableClick;

      if (!disableClick) {
        evt.stopPropagation();

        if (onClick) {
          onClick.call(this, evt);
        }

        // in IE11/Edge the file-browser dialog is blocking, ensure this is behind setTimeout
        // this is so react can handle state changes in the onClick prop above above
        // see: https://github.com/react-dropzone/react-dropzone/issues/450
        setTimeout(this.open.bind(this), 0);
      }
    }
  }, {
    key: 'onInputElementClick',
    value: function onInputElementClick(evt) {
      evt.stopPropagation();
      if (this.props.inputProps && this.props.inputProps.onClick) {
        this.props.inputProps.onClick();
      }
    }
  }, {
    key: 'onFileDialogCancel',
    value: function onFileDialogCancel() {
      var _this4 = this;

      // timeout will not recognize context of this method
      var onFileDialogCancel = this.props.onFileDialogCancel;
      // execute the timeout only if the FileDialog is opened in the browser

      if (this.isFileDialogActive) {
        setTimeout(function () {
          // Returns an object as FileList
          var files = _this4.fileInputEl.files;


          if (!files.length) {
            _this4.isFileDialogActive = false;
          }

          if (typeof onFileDialogCancel === 'function') {
            onFileDialogCancel();
          }
        }, 300);
      }
    }
  }, {
    key: 'setRef',
    value: function setRef(ref) {
      this.node = ref;
    }
  }, {
    key: 'setRefs',
    value: function setRefs(ref) {
      this.fileInputEl = ref;
    }
    /**
     * Open system file upload dialog.
     *
     * @public
     */

  }, {
    key: 'open',
    value: function open() {
      this.isFileDialogActive = true;
      this.fileInputEl.value = null;
      this.fileInputEl.click();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          accept = _props3.accept,
          acceptClassName = _props3.acceptClassName,
          activeClassName = _props3.activeClassName,
          children = _props3.children,
          disabled = _props3.disabled,
          disabledClassName = _props3.disabledClassName,
          inputProps = _props3.inputProps,
          multiple = _props3.multiple,
          name = _props3.name,
          rejectClassName = _props3.rejectClassName,
          rest = _objectWithoutProperties(_props3, ['accept', 'acceptClassName', 'activeClassName', 'children', 'disabled', 'disabledClassName', 'inputProps', 'multiple', 'name', 'rejectClassName']);

      var acceptStyle = rest.acceptStyle,
          activeStyle = rest.activeStyle,
          _rest$className = rest.className,
          className = _rest$className === undefined ? '' : _rest$className,
          disabledStyle = rest.disabledStyle,
          rejectStyle = rest.rejectStyle,
          style = rest.style,
          props = _objectWithoutProperties(rest, ['acceptStyle', 'activeStyle', 'className', 'disabledStyle', 'rejectStyle', 'style']);

      var _state = this.state,
          isDragActive = _state.isDragActive,
          draggedFiles = _state.draggedFiles;

      var filesCount = draggedFiles.length;
      var isMultipleAllowed = multiple || filesCount <= 1;
      var isDragAccept = filesCount > 0 && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* allFilesAccepted */])(draggedFiles, this.props.accept);
      var isDragReject = filesCount > 0 && (!isDragAccept || !isMultipleAllowed);
      var noStyles = !className && !style && !activeStyle && !acceptStyle && !rejectStyle && !disabledStyle;

      if (isDragActive && activeClassName) {
        className += ' ' + activeClassName;
      }
      if (isDragAccept && acceptClassName) {
        className += ' ' + acceptClassName;
      }
      if (isDragReject && rejectClassName) {
        className += ' ' + rejectClassName;
      }
      if (disabled && disabledClassName) {
        className += ' ' + disabledClassName;
      }

      if (noStyles) {
        style = __WEBPACK_IMPORTED_MODULE_3__utils_styles__["a" /* default */].default;
        activeStyle = __WEBPACK_IMPORTED_MODULE_3__utils_styles__["a" /* default */].active;
        acceptStyle = style.active;
        rejectStyle = __WEBPACK_IMPORTED_MODULE_3__utils_styles__["a" /* default */].rejected;
        disabledStyle = __WEBPACK_IMPORTED_MODULE_3__utils_styles__["a" /* default */].disabled;
      }

      var appliedStyle = _extends({}, style);
      if (activeStyle && isDragActive) {
        appliedStyle = _extends({}, style, activeStyle);
      }
      if (acceptStyle && isDragAccept) {
        appliedStyle = _extends({}, appliedStyle, acceptStyle);
      }
      if (rejectStyle && isDragReject) {
        appliedStyle = _extends({}, appliedStyle, rejectStyle);
      }
      if (disabledStyle && disabled) {
        appliedStyle = _extends({}, style, disabledStyle);
      }

      var inputAttributes = {
        accept: accept,
        disabled: disabled,
        type: 'file',
        style: { display: 'none' },
        multiple: __WEBPACK_IMPORTED_MODULE_2__utils__["f" /* supportMultiple */] && multiple,
        ref: this.setRefs,
        onChange: this.onDrop,
        autoComplete: 'off'
      };

      if (name && name.length) {
        inputAttributes.name = name;
      }

      // Destructure custom props away from props used for the div element

      var acceptedFiles = props.acceptedFiles,
          preventDropOnDocument = props.preventDropOnDocument,
          disablePreview = props.disablePreview,
          disableClick = props.disableClick,
          onDropAccepted = props.onDropAccepted,
          onDropRejected = props.onDropRejected,
          onFileDialogCancel = props.onFileDialogCancel,
          maxSize = props.maxSize,
          minSize = props.minSize,
          divProps = _objectWithoutProperties(props, ['acceptedFiles', 'preventDropOnDocument', 'disablePreview', 'disableClick', 'onDropAccepted', 'onDropRejected', 'onFileDialogCancel', 'maxSize', 'minSize']);

      return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(
        'div',
        _extends({
          className: className,
          style: appliedStyle
        }, divProps /* expand user provided props first so event handlers are never overridden */, {
          onClick: this.composeHandlers(this.onClick),
          onDragStart: this.composeHandlers(this.onDragStart),
          onDragEnter: this.composeHandlers(this.onDragEnter),
          onDragOver: this.composeHandlers(this.onDragOver),
          onDragLeave: this.composeHandlers(this.onDragLeave),
          onDrop: this.composeHandlers(this.onDrop),
          ref: this.setRef,
          'aria-disabled': disabled
        }),
        this.renderChildren(children, isDragActive, isDragAccept, isDragReject),
        __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes))
      );
    }
  }]);

  return Dropzone;
}(__WEBPACK_IMPORTED_MODULE_0_react__["default"].Component);

/* harmony default export */ __webpack_exports__["default"] = (Dropzone);

Dropzone.propTypes = {
  /**
   * Allow specific types of files. See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].string,

  /**
   * Contents of the dropzone
   */
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].node, __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].func]),

  /**
   * Disallow clicking on the dropzone container to open file dialog
   */
  disableClick: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].bool,

  /**
  * Enable/disable the dropzone entirely
  */
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].bool,

  /**
   * Enable/disable preview generation
   */
  disablePreview: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].bool,

  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].bool,

  /**
   * Pass additional attributes to the `<input type="file"/>` tag
   */
  inputProps: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].object,

  /**
   * Allow dropping multiple files
   */
  multiple: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].bool,

  /**
   * `name` attribute for the input tag
   */
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].string,

  /**
   * Maximum file size
   */
  maxSize: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].number,

  /**
   * Minimum file size
   */
  minSize: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].number,

  /**
   * className
   */
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].string,

  /**
   * className for active state
   */
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].string,

  /**
   * className for accepted state
   */
  acceptClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].string,

  /**
   * className for rejected state
   */
  rejectClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].string,

  /**
   * className for disabled state
   */
  disabledClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].string,

  /**
   * CSS styles to apply
   */
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].object,

  /**
   * CSS styles to apply when drag is active
   */
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].object,

  /**
   * CSS styles to apply when drop will be accepted
   */
  acceptStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].object,

  /**
   * CSS styles to apply when drop will be rejected
   */
  rejectStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].object,

  /**
   * CSS styles to apply when dropzone is disabled
   */
  disabledStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].object,

  /**
   * onClick callback
   * @param {Event} event
   */
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].func,

  /**
   * onDrop callback
   */
  onDrop: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].func,

  /**
   * onDropAccepted callback
   */
  onDropAccepted: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].func,

  /**
   * onDropRejected callback
   */
  onDropRejected: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].func,

  /**
   * onDragStart callback
   */
  onDragStart: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].func,

  /**
   * onDragEnter callback
   */
  onDragEnter: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].func,

  /**
   * onDragOver callback
   */
  onDragOver: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].func,

  /**
   * onDragLeave callback
   */
  onDragLeave: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].func,

  /**
   * Provide a callback on clicking the cancel button of the file dialog
   */
  onFileDialogCancel: __WEBPACK_IMPORTED_MODULE_1_prop_types__["default"].func
};

Dropzone.defaultProps = {
  preventDropOnDocument: true,
  disabled: false,
  disablePreview: false,
  disableClick: false,
  multiple: true,
  maxSize: Infinity,
  minSize: 0
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportMultiple; });
/* harmony export (immutable) */ __webpack_exports__["d"] = getDataTransferItems;
/* harmony export (immutable) */ __webpack_exports__["b"] = fileAccepted;
/* harmony export (immutable) */ __webpack_exports__["c"] = fileMatchSize;
/* harmony export (immutable) */ __webpack_exports__["a"] = allFilesAccepted;
/* harmony export (immutable) */ __webpack_exports__["e"] = onDocumentDragOver;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_attr_accept__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_attr_accept___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_attr_accept__);


var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;

function getDataTransferItems(event) {
  var dataTransferItemsList = [];
  if (event.dataTransfer) {
    var dt = event.dataTransfer;
    if (dt.files && dt.files.length) {
      dataTransferItemsList = dt.files;
    } else if (dt.items && dt.items.length) {
      // During the drag even the dataTransfer.files is null
      // but Chrome implements some drag store, which is accesible via dataTransfer.items
      dataTransferItemsList = dt.items;
    }
  } else if (event.target && event.target.files) {
    dataTransferItemsList = event.target.files;
  }
  // Convert from DataTransferItemsList to the native Array
  return Array.prototype.slice.call(dataTransferItemsList);
}

// Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted
function fileAccepted(file, accept) {
  return file.type === 'application/x-moz-file' || __WEBPACK_IMPORTED_MODULE_0_attr_accept___default()(file, accept);
}

function fileMatchSize(file, maxSize, minSize) {
  return file.size <= maxSize && file.size >= minSize;
}

function allFilesAccepted(files, accept) {
  return files.every(function (file) {
    return fileAccepted(file, accept);
  });
}

// allow the entire document to be a drag target
function onDocumentDragOver(evt) {
  evt.preventDefault();
}

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=Array.isArray(n)?n:n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,y,d=t&s.G,h=t&s.P,v=d?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=d?o:o[n]||(o[n]={});d&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],y=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,y),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  rejected: {
    borderStyle: 'solid',
    borderColor: '#c66',
    backgroundColor: '#eee'
  },
  disabled: {
    opacity: 0.5
  },
  active: {
    borderStyle: 'solid',
    borderColor: '#6c6',
    backgroundColor: '#eee'
  },
  default: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 5
  }
});

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = __webpack_require__(187);
var RequestBase = __webpack_require__(188);
var isObject = __webpack_require__(67);
var ResponseBase = __webpack_require__(189);
var Agent = __webpack_require__(191);

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify,
};

/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse,
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    if (index === -1) { // could be empty line, just skip it
      continue;
    }
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[\/+]json($|[^-\w])/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str) {
  var parse = request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch(custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (1 === arguments.length) pass = '';
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    };
  }

  var encoder = function(string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }
    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
}

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = (this.xhr = request.getXHR());
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function() {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
  Agent.prototype[method.toLowerCase()] = function(url, fn) {
    var req = new request.Request(method, url);
    this._setDefaults(req);
    if (fn) {
      req.end(fn);
    }
    return req;
  };
});

Agent.prototype.del = Agent.prototype['delete'];

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(67);

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count, fn){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry = function(err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch(e) {
      console.error(e);
    }
  }
  if (res && res.status && res.status >= 500 && res.status != 501) return true;
  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
    // Superagent timeout
    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }
  return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {

  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {
      self.end(function(err, res) {
        if (err) innerReject(err);
        else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function(n){
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function() {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header,
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");}

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var utils = __webpack_require__(190);

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function(header, changesOrigin){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  // secuirty
  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }
  return header;
};


/***/ }),
/* 191 */
/***/ (function(module, exports) {

function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects",
 "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function(/*varargs*/) {
    this._defaults.push({fn:fn, arguments:arguments});
    return this;
  }
});

Agent.prototype._setDefaults = function(req) {
    this._defaults.forEach(function(def) {
      req[def.fn].apply(req, def.arguments);
    });
};

module.exports = Agent;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _biz_img_index = __webpack_require__(193);

var _biz_img_index2 = _interopRequireDefault(_biz_img_index);

var _img = __webpack_require__(27);

var _biz = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    // biz: state.entities.biz[ownProps.match.params.bizId],
    imgs: Object.values(state.entities.imgs),
    currentUser: state.session.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    // requestBiz: (bizId) => dispatch(requestBiz(bizId)),
    requestAllImg: function requestAllImg(bizId) {
      return dispatch((0, _img.requestAllImg)(bizId));
    },
    deleteImg: function deleteImg(imgId) {
      return dispatch((0, _img.deleteImg)(imgId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_biz_img_index2.default);

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _biz_img_index_item = __webpack_require__(194);

var _biz_img_index_item2 = _interopRequireDefault(_biz_img_index_item);

var _reactRouterDom = __webpack_require__(1);

var _loading = __webpack_require__(36);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizImgIndex = function (_React$Component) {
  _inherits(BizImgIndex, _React$Component);

  function BizImgIndex() {
    _classCallCheck(this, BizImgIndex);

    return _possibleConstructorReturn(this, (BizImgIndex.__proto__ || Object.getPrototypeOf(BizImgIndex)).apply(this, arguments));
  }

  _createClass(BizImgIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.requestAllImg(this.props.match.params.bizId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          imgs = _props.imgs,
          currentUser = _props.currentUser,
          deleteImg = _props.deleteImg;

      return _react2.default.createElement(
        'div',
        { className: 'biz-all-imgs' },
        this.props.imgs.length > 0 ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Photos for ',
            imgs[0].biz
          ),
          _react2.default.createElement(
            'div',
            { className: 'biz-all-imgs-title' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'biz-all-imgs-title-img' },
                _react2.default.createElement('img', { src: '' + imgs[0].biz_img_url })
              ),
              _react2.default.createElement(
                'div',
                { className: 'biz-all-imgs-title-biz-name' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/biz/' + this.props.match.params.bizId },
                  imgs[0].biz
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/biz/' + this.props.match.params.bizId + '/addphoto' },
              _react2.default.createElement(
                'button',
                null,
                _react2.default.createElement('i', { className: 'fas fa-camera' }),
                'Add photos'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'group' },
            imgs.map(function (img, idx) {
              return _react2.default.createElement(_biz_img_index_item2.default, {
                key: idx,
                bizId: _this2.props.match.params.bizId,
                currentUser: currentUser,
                img: img,
                deleteImg: deleteImg,
                cover: imgs[0].biz_img_url });
            })
          )
        ) : _react2.default.createElement(_loading2.default, null)
      );
    }
  }]);

  return BizImgIndex;
}(_react2.default.Component);

exports.default = BizImgIndex;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BizImgIndexItem = function (_React$Component) {
  _inherits(BizImgIndexItem, _React$Component);

  function BizImgIndexItem() {
    _classCallCheck(this, BizImgIndexItem);

    var _this = _possibleConstructorReturn(this, (BizImgIndexItem.__proto__ || Object.getPrototypeOf(BizImgIndexItem)).call(this));

    _this.state = { className: 'modal' };
    return _this;
  }

  _createClass(BizImgIndexItem, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      $(document).keydown(function (e) {
        if (e.keyCode == 27) {
          _this2.closeShowImg(e);
        }
      });
    }
  }, {
    key: 'showImg',
    value: function showImg(e) {
      e.preventDefault();
      if (e.target.tagName === 'IMG') {
        this.setState({ className: 'is-open' });
      }
    }
  }, {
    key: 'closeShowImg',
    value: function closeShowImg(e) {
      e.preventDefault();
      this.setState({ className: 'modal' });
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete(imgId) {
      var _this3 = this;

      var bizId = this.props.bizId;

      this.props.deleteImg(imgId).then(function () {
        _this3.setState({ className: 'modal' });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          img = _props.img,
          cover = _props.cover,
          bizId = _props.bizId,
          currentUser = _props.currentUser;

      return _react2.default.createElement(
        'div',
        { className: 'img-item' },
        img ? _react2.default.createElement('img', { onClick: function onClick(e) {
            return _this4.showImg(e);
          }, src: img.url }) : "",
        _react2.default.createElement(
          'div',
          { className: this.state.className, id: 'modal-' + img.id },
          _react2.default.createElement(
            'div',
            { className: 'img-show' },
            _react2.default.createElement(
              'div',
              { className: 'modal-img-show' },
              _react2.default.createElement('img', { src: img.url })
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-img-show-description' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'biz-all-imgs-title-img' },
                  _react2.default.createElement('img', { src: cover })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '#/biz/' + bizId },
                    img.biz
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'From ',
                    img.user
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'close-modal', onClick: function onClick(e) {
                      return _this4.closeShowImg(e);
                    } },
                  _react2.default.createElement(
                    'span',
                    null,
                    '\xD7'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'img-description' },
                _react2.default.createElement(
                  'p',
                  null,
                  img.description
                )
              ),
              currentUser && img.user_id === currentUser.id ? _react2.default.createElement(
                'table',
                { className: 'img-description-table' },
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      _react2.default.createElement('i', { className: 'far fa-trash-alt' })
                    ),
                    _react2.default.createElement(
                      'td',
                      { onClick: function onClick() {
                          return _this4.handleDelete(img.id);
                        } },
                      'Delete photo'
                    )
                  )
                )
              ) : "",
              img && img.created_at ? _react2.default.createElement(
                'div',
                { className: 'img-description-created-at' },
                img.created_at.slice(0, 10)
              ) : ""
            )
          ),
          _react2.default.createElement('div', { onClick: function onClick(e) {
              return _this4.closeShowImg(e);
            }, className: 'modal-screen' })
        )
      );
    }
  }]);

  return BizImgIndexItem;
}(_react2.default.Component);

exports.default = BizImgIndexItem;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'div',
    { className: 'footer' },
    _react2.default.createElement(
      'div',
      { className: 'footer-background' },
      _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1517535496/celp/city_line_nypobt.png' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer-main' },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'About',
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/LuuuFan/Celp' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('i', { className: 'fab fa-github' }),
                'About Celp'
              )
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.linkedin.com/in/lu-fan-a4a94812/' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('i', { className: 'fab fa-linkedin' }),
                'About Me'
              )
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.facebook.com/angelia.fan.3' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('i', { className: 'fab fa-facebook-f' }),
                'More About Me'
              )
            )
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          'Discover',
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'a',
              { href: '/' },
              _react2.default.createElement(
                'li',
                null,
                'The Local Celp'
              )
            ),
            _react2.default.createElement(
              'a',
              { href: '/' },
              _react2.default.createElement(
                'li',
                null,
                'Celp Blog'
              )
            ),
            _react2.default.createElement(
              'a',
              { href: '/' },
              _react2.default.createElement(
                'li',
                null,
                'Support'
              )
            )
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          'Celp for Business Owner'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Languages',
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'a',
                { href: '/' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement('i', { className: 'fas fa-language' }),
                  'English'
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            'Countries',
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'a',
                { href: '/' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement('i', { className: 'fas fa-globe' }),
                  'United States'
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'Copyright \xA9 2018-2018 Celp Inc. ',
      _react2.default.createElement('i', { className: 'fab fa-yelp' }),
      ' and related marks are registered trademarks of Celp.'
    )
  );
};

exports.default = Footer;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _write_review = __webpack_require__(197);

var _write_review2 = _interopRequireDefault(_write_review);

var _review = __webpack_require__(12);

var _biz = __webpack_require__(8);

var _session = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var review = { body: '', rate: 0 };
  if (ownProps.match.path == '/update_review/biz/:bizId') {
    review = Object.values(state.entities.reviews).find(function (el) {
      return el.user_id === state.session.currentUser.id;
    });
  }
  return {
    biz: state.entities.biz[ownProps.match.params.bizId],
    review: review,
    errors: state.errors
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    createReview: function createReview(bizId, review) {
      return dispatch((0, _review.createReview)(bizId, review));
    },
    updateReview: function updateReview(bizId, review) {
      return dispatch((0, _review.updateReview)(bizId, review));
    },
    requestReview: function requestReview(bizId) {
      return dispatch((0, _review.requestReview)(bizId));
    },
    requestBiz: function requestBiz(bizId) {
      return dispatch((0, _biz.requestBiz)(bizId));
    },
    clearErrors: function clearErrors() {
      return dispatch((0, _session.clearErrors)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_write_review2.default);

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WriteReview = function (_React$Component) {
  _inherits(WriteReview, _React$Component);

  function WriteReview(props) {
    _classCallCheck(this, WriteReview);

    var _this = _possibleConstructorReturn(this, (WriteReview.__proto__ || Object.getPrototypeOf(WriteReview)).call(this, props));

    _this.state = _this.props.review;
    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  _createClass(WriteReview, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.match.path == '/update_review/biz/:bizId') {
        this.props.requestReview(this.props.match.params.bizId);
      }
      if (!this.props.biz) {
        this.props.requestBiz(this.props.match.params.bizId);
      }
      this.props.clearErrors();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (!this.state.body && !this.state.rate || this.props.match.params.bizId !== newProps.match.params.bizId) {
        this.setState(newProps.review);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var background = document.getElementById('write-review-rating-background');
      if (background) {
        var position = 48 * this.state.rate - 24;
        background.style.backgroundPosition = '0 -' + position + 'px';
      }
    }
  }, {
    key: 'handleInput',
    value: function handleInput(e) {
      if (this.props.errors.length > 0) {
        this.props.clearErrors();
      }
      this.setState({ body: e.target.value });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e, rate) {
      this.setState({ rate: rate });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      if (this.props.match.path == '/write_review/biz/:bizId') {
        this.props.createReview(this.props.match.params.bizId, this.state).then(function () {
          return _this2.props.history.push('/biz/' + _this2.props.match.params.bizId);
        });
      } else {
        this.props.updateReview(this.props.match.params.bizId, this.state).then(function () {
          return _this2.props.history.push('/biz/' + _this2.props.match.params.bizId);
        });
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver(rate) {
      var background = document.getElementById('write-review-rating-background');
      var position = 48 * rate - 24;
      background.style.backgroundPosition = '0 -' + position + 'px';
      this.setState({ rate: rate });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this,
          _React$createElement,
          _React$createElement2,
          _React$createElement3,
          _React$createElement4,
          _React$createElement5;

      var _props = this.props,
          biz = _props.biz,
          review = _props.review,
          errors = _props.errors;

      var btnName = this.props.match.path == '/write_review/biz/:bizId' ? "Post Review" : "Update Review";
      return _react2.default.createElement(
        'div',
        { className: 'write-review' },
        biz ? _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement(
            'a',
            { href: '/#/biz/' + biz.id, target: '_blank' },
            biz.name
          )
        ) : "",
        this.state ? _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this3.handleSubmit(e);
            } },
          _react2.default.createElement(
            'div',
            { className: 'write-review-input' },
            _react2.default.createElement(
              'div',
              { id: 'write-review-rating-background' },
              _react2.default.createElement(
                'ul',
                { id: 'write-review-rating' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'rate-1', onMouseOver: function onMouseOver() {
                        return _this3.mouseOver(1);
                      } },
                    _react2.default.createElement('input', (_React$createElement = { id: 'rate-1', type: 'radio', name: 'rating' }, _defineProperty(_React$createElement, 'id', 'rating-1'), _defineProperty(_React$createElement, 'checked', this.state.rate === 1), _defineProperty(_React$createElement, 'onChange', function onChange(e) {
                      return _this3.handleChange(e, 1);
                    }), _React$createElement))
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'rate-2', onMouseOver: function onMouseOver() {
                        return _this3.mouseOver(2);
                      } },
                    _react2.default.createElement('input', (_React$createElement2 = { id: 'rate-2', type: 'radio', name: 'rating' }, _defineProperty(_React$createElement2, 'id', 'rating-2'), _defineProperty(_React$createElement2, 'checked', this.state.rate === 2), _defineProperty(_React$createElement2, 'onChange', function onChange(e) {
                      return _this3.handleChange(e, 2);
                    }), _React$createElement2))
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'rate-3', onMouseOver: function onMouseOver() {
                        return _this3.mouseOver(3);
                      } },
                    _react2.default.createElement('input', (_React$createElement3 = { id: 'rate-3', type: 'radio', name: 'rating' }, _defineProperty(_React$createElement3, 'id', 'rating-3'), _defineProperty(_React$createElement3, 'checked', this.state.rate === 3), _defineProperty(_React$createElement3, 'onChange', function onChange(e) {
                      return _this3.handleChange(e, 3);
                    }), _React$createElement3))
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'rate-4', onMouseOver: function onMouseOver() {
                        return _this3.mouseOver(4);
                      } },
                    _react2.default.createElement('input', (_React$createElement4 = { id: 'rate-4', type: 'radio', name: 'rating' }, _defineProperty(_React$createElement4, 'id', 'rating-4'), _defineProperty(_React$createElement4, 'checked', this.state.rate === 4), _defineProperty(_React$createElement4, 'onChange', function onChange(e) {
                      return _this3.handleChange(e, 4);
                    }), _React$createElement4))
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'rate-5', onMouseOver: function onMouseOver() {
                        return _this3.mouseOver(5);
                      } },
                    _react2.default.createElement('input', (_React$createElement5 = { id: 'rate-5', type: 'radio', name: 'rating' }, _defineProperty(_React$createElement5, 'id', 'rating-5'), _defineProperty(_React$createElement5, 'checked', this.state.rate === 5), _defineProperty(_React$createElement5, 'onChange', function onChange(e) {
                      return _this3.handleChange(e, 5);
                    }), _React$createElement5))
                  )
                )
              )
            ),
            _react2.default.createElement('textarea', {
              onChange: this.handleInput,
              value: this.state.body,
              placeholder: 'Your review helps others learn about great local businesses. \nPlease don\'t review this business if you received a freebie for writing this review, or if you\'re connected in any way to the owner or employees.'
            }),
            errors.length ? _react2.default.createElement(
              'div',
              { className: 'write-review-error' },
              _react2.default.createElement(
                'p',
                null,
                errors[0]
              )
            ) : ""
          ),
          _react2.default.createElement('input', { type: 'submit', value: btnName })
        ) : ""
      );
    }
  }]);

  return WriteReview;
}(_react2.default.Component);

exports.default = WriteReview;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _user_profile = __webpack_require__(199);

var _user_profile2 = _interopRequireDefault(_user_profile);

var _user = __webpack_require__(13);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    user: state.entities.users,
    biz: state.entities.biz,
    reviews: state.entities.reviews,
    imgs: state.entities.imgs,
    currentUser: state.session.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    requestUser: function requestUser(username) {
      return dispatch((0, _user.requestUser)(username));
    }
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_user_profile2.default));

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _user_profile_nav = __webpack_require__(200);

var _user_profile_nav2 = _interopRequireDefault(_user_profile_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserProfile = function (_React$Component) {
  _inherits(UserProfile, _React$Component);

  function UserProfile() {
    _classCallCheck(this, UserProfile);

    return _possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).apply(this, arguments));
  }

  _createClass(UserProfile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.match.path == '/aboutme') {
        this.props.requestUser(this.props.currentUser.username);
      } else if (this.props.match.path == '/user/:username') {
        this.props.requestUser(this.props.match.params.username);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.match.params.username && newProps.match.params.username !== this.props.match.params.username) {
        this.props.requestUser(newProps.match.params.username);
      } else if (this.props.match.params.username && newProps.match.path == '/aboutme') {
        this.props.requestUser(newProps.currentUser.username);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          biz = _props.biz,
          reviews = _props.reviews,
          imgs = _props.imgs,
          currentUser = _props.currentUser;

      return _react2.default.createElement(
        'div',
        { className: 'user-profile' },
        user.username ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'user-show-header' },
            _react2.default.createElement(
              'div',
              { className: 'user-show' },
              _react2.default.createElement(
                'div',
                { className: 'user-show-avatar' },
                _react2.default.createElement('img', { src: user.avatar_url })
              ),
              _react2.default.createElement(
                'div',
                { className: 'user-summary-actions' },
                _react2.default.createElement(
                  'div',
                  { className: 'user-summary' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    user.username
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'San Francisco, CA'
                  ),
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'ul',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'fas fa-star' }),
                        user.review_num,
                        ' Reviews'
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'fas fa-camera' }),
                        user.img_num,
                        ' Photos'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'user-actions' },
                  currentUser && user && currentUser.id === user.id ? _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-camera-retro' }),
                      _react2.default.createElement(
                        'a',
                        { href: '/#/settings' },
                        'Add Profile Photos'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-id-card' }),
                      _react2.default.createElement(
                        'a',
                        { href: '/#/settings' },
                        'Update Your Profile'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'tooltip' },
                      _react2.default.createElement('i', { className: 'fas fa-users' }),
                      _react2.default.createElement(
                        'a',
                        null,
                        'Find Friends'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'tooltiptext' },
                        'under construction'
                      )
                    )
                  ) : ""
                )
              )
            )
          )
        ) : "",
        user ? _react2.default.createElement(_user_profile_nav2.default, { user: user, imgs: imgs, reviews: reviews, biz: biz }) : ""
      );
    }
  }]);

  return UserProfile;
}(_react2.default.Component);

exports.default = UserProfile;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user_profile_center = __webpack_require__(201);

var _user_profile_center2 = _interopRequireDefault(_user_profile_center);

var _user_profile_reviews = __webpack_require__(202);

var _user_profile_reviews2 = _interopRequireDefault(_user_profile_reviews);

var _user_profile_biz_photos = __webpack_require__(203);

var _user_profile_biz_photos2 = _interopRequireDefault(_user_profile_biz_photos);

var _user_profile_bookmarks = __webpack_require__(204);

var _user_profile_bookmarks2 = _interopRequireDefault(_user_profile_bookmarks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserProfileNav = function (_React$Component) {
  _inherits(UserProfileNav, _React$Component);

  function UserProfileNav(props) {
    _classCallCheck(this, UserProfileNav);

    var _this = _possibleConstructorReturn(this, (UserProfileNav.__proto__ || Object.getPrototypeOf(UserProfileNav)).call(this, props));

    _this.state = { listName: 'UserProfileCenter' };
    return _this;
  }

  _createClass(UserProfileNav, [{
    key: 'handleClick',
    value: function handleClick(listName) {
      this.setState({ listName: listName });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          user = _props.user,
          imgs = _props.imgs,
          reviews = _props.reviews,
          biz = _props.biz;

      return _react2.default.createElement(
        'div',
        { className: 'user-show-detail' },
        _react2.default.createElement(
          'div',
          { className: 'user-show-detail-nav' },
          user.username ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              null,
              user.username + '\'s Profile'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                { className: this.state.listName == 'UserProfileCenter' ? 'user-profile-nav-clicked' : "", onClick: function onClick() {
                    return _this2.handleClick('UserProfileCenter');
                  } },
                _react2.default.createElement('i', { className: 'fas fa-user' }),
                'Profile Overview'
              ),
              _react2.default.createElement(
                'li',
                { className: this.state.listName == 'UserProfileReviews' ? 'user-profile-nav-clicked' : "", onClick: function onClick() {
                    return _this2.handleClick('UserProfileReviews');
                  } },
                _react2.default.createElement('i', { className: 'fas fa-star' }),
                'Reviews'
              ),
              _react2.default.createElement(
                'li',
                { className: this.state.listName == 'UserProfileBizPhotos' ? 'user-profile-nav-clicked' : "", onClick: function onClick() {
                    return _this2.handleClick('UserProfileBizPhotos');
                  } },
                _react2.default.createElement('i', { className: 'fas fa-camera' }),
                'Business Photos'
              ),
              _react2.default.createElement(
                'li',
                { className: this.state.listName == 'UserProfileBookmarks' ? 'user-profile-nav-clicked' : "", onClick: function onClick() {
                    return _this2.handleClick('UserProfileBookmarks');
                  } },
                _react2.default.createElement('i', { className: 'fas fa-bookmark' }),
                'Bookmarks'
              )
            )
          ) : ""
        ),
        _react2.default.createElement(
          'div',
          { className: 'user-show-detail-center-summary' },
          this.state.listName == 'UserProfileCenter' ? _react2.default.createElement(_user_profile_center2.default, { user: user, imgs: imgs, reviews: reviews, biz: biz }) : "",
          this.state.listName == 'UserProfileReviews' ? _react2.default.createElement(_user_profile_reviews2.default, { user: user, imgs: imgs, reviews: reviews, biz: biz }) : "",
          this.state.listName == 'UserProfileBizPhotos' ? _react2.default.createElement(_user_profile_biz_photos2.default, { user: user, imgs: imgs, reviews: reviews, biz: biz }) : "",
          this.state.listName == 'UserProfileBookmarks' ? _react2.default.createElement(_user_profile_bookmarks2.default, { user: user, imgs: imgs, reviews: reviews, biz: biz }) : "",
          _react2.default.createElement(
            'div',
            { className: 'user-show-detail-summary' },
            _react2.default.createElement(
              'h2',
              null,
              'About ',
              user.username
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Last 90 days'
            ),
            _react2.default.createElement(
              'table',
              null,
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement('i', { className: 'fas fa-star' })
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'b',
                      null,
                      user.review_num
                    ),
                    ' Reviews'
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement('i', { className: 'fas fa-camera-retro' })
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'b',
                      null,
                      user.img_num
                    ),
                    ' Photos'
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    _react2.default.createElement('i', { className: 'fas fa-bookmark' })
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                      'b',
                      null,
                      user.bookmark_num
                    ),
                    ' Bookmarks'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return UserProfileNav;
}(_react2.default.Component);

exports.default = UserProfileNav;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserProfileCenter = function (_React$Component) {
  _inherits(UserProfileCenter, _React$Component);

  function UserProfileCenter(props) {
    _classCallCheck(this, UserProfileCenter);

    var _this = _possibleConstructorReturn(this, (UserProfileCenter.__proto__ || Object.getPrototypeOf(UserProfileCenter)).call(this, props));

    _this.state = { className: '' };
    return _this;
  }

  _createClass(UserProfileCenter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          imgs = _props.imgs,
          reviews = _props.reviews,
          biz = _props.biz;

      return _react2.default.createElement(
        'div',
        { className: 'user-show-detail-center' },
        user && user.username ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Recent Activity'
          ),
          user.img_num > 0 ? _react2.default.createElement(
            'div',
            { className: 'user-show-recent-activity-item group' },
            _react2.default.createElement(
              'div',
              { className: 'activity-item-avatar' },
              _react2.default.createElement('img', { src: user.avatar_url })
            ),
            _react2.default.createElement(
              'div',
              { className: 'activity-item-detail' },
              biz[imgs[imgs.order[0]].biz_id] && biz[imgs[imgs.order[0]].biz_id].name ? _react2.default.createElement(
                'p',
                null,
                'You added a photo for ',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/biz/' + imgs[imgs.order[0]].biz_id },
                  biz[imgs[imgs.order[0]].biz_id].name
                )
              ) : "",
              _react2.default.createElement(
                'div',
                { className: 'activity-item-img-container' },
                _react2.default.createElement('img', { src: imgs[imgs.order[0]].url })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'activity-item-update' },
              _react2.default.createElement(
                'p',
                null,
                imgs[imgs.order[0]].updated_at.slice(0, 10)
              )
            )
          ) : "",
          user.review_num > 0 ? _react2.default.createElement(
            'div',
            { className: 'user-show-recent-activity-item group' },
            _react2.default.createElement(
              'div',
              { className: 'activity-item-avatar' },
              _react2.default.createElement('img', { src: user.avatar_url })
            ),
            _react2.default.createElement(
              'div',
              { className: 'activity-item-detail' },
              _react2.default.createElement(
                'p',
                null,
                'You added a review for ',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/biz/' + reviews[reviews.order[0]].biz_id },
                  biz[reviews[reviews.order[0]].biz_id].name
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'activity-item-review-container' },
                _react2.default.createElement(
                  'p',
                  null,
                  reviews[reviews.order[0]].body
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'activity-item-update' },
              _react2.default.createElement(
                'p',
                null,
                reviews[reviews.order[0]].updated_at.slice(0, 10)
              )
            )
          ) : ""
        ) : ""
      );
    }
  }]);

  return UserProfileCenter;
}(_react2.default.Component);

exports.default = UserProfileCenter;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reviews_index_item_rating = __webpack_require__(66);

var _reviews_index_item_rating2 = _interopRequireDefault(_reviews_index_item_rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserProfileReviews = function (_React$Component) {
  _inherits(UserProfileReviews, _React$Component);

  function UserProfileReviews() {
    _classCallCheck(this, UserProfileReviews);

    var _this = _possibleConstructorReturn(this, (UserProfileReviews.__proto__ || Object.getPrototypeOf(UserProfileReviews)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(UserProfileReviews, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          imgs = _props.imgs,
          reviews = _props.reviews,
          biz = _props.biz;

      return _react2.default.createElement(
        'div',
        { className: 'user-profile-reviews' },
        _react2.default.createElement(
          'h1',
          null,
          'Reviews'
        ),
        reviews.order.length > 0 ? _react2.default.createElement(
          'div',
          null,
          reviews.order.map(function (idx) {
            return _react2.default.createElement(
              'div',
              { key: idx, className: 'user-profile-reviews-item' },
              _react2.default.createElement(
                'div',
                { className: 'user-profile-reviews-item-biz' },
                _react2.default.createElement(
                  'div',
                  { className: 'user-profile-reviews-item-biz-cover' },
                  _react2.default.createElement('img', { src: biz[reviews[idx].biz_id].img_url })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'user-profile-reviews-item-biz-info' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/biz/' + reviews[idx].biz_id },
                    biz[reviews[idx].biz_id].name
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'user-profile-reviews-item-biz-info-address' },
                    biz[reviews[idx].biz_id].display_address
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'user-profile-reviews-item-rating' },
                _react2.default.createElement(_reviews_index_item_rating2.default, { review: reviews[idx] }),
                _react2.default.createElement(
                  'p',
                  null,
                  ' ',
                  reviews[idx].updated_at.slice(0, 10)
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'user-profile-reviews-item-body' },
                _react2.default.createElement(
                  'p',
                  null,
                  reviews[idx].body
                )
              )
            );
          })
        ) : _react2.default.createElement(
          'div',
          null,
          'You don\'t have reviews yet. Go write a review for business.'
        )
      );
    }
  }]);

  return UserProfileReviews;
}(_react2.default.Component);

exports.default = UserProfileReviews;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserProfileBizPhotos = function (_React$Component) {
  _inherits(UserProfileBizPhotos, _React$Component);

  function UserProfileBizPhotos() {
    _classCallCheck(this, UserProfileBizPhotos);

    var _this = _possibleConstructorReturn(this, (UserProfileBizPhotos.__proto__ || Object.getPrototypeOf(UserProfileBizPhotos)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(UserProfileBizPhotos, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          imgs = _props.imgs,
          reviews = _props.reviews,
          biz = _props.biz;

      return _react2.default.createElement(
        'div',
        { className: 'user-profile-biz-photos' },
        _react2.default.createElement(
          'h1',
          null,
          'Business Photos'
        ),
        _react2.default.createElement(
          'div',
          { className: 'user-profile-biz-photos-index group' },
          imgs.order.length > 0 ? _react2.default.createElement(
            'div',
            null,
            imgs.order.map(function (idx) {
              return _react2.default.createElement(
                'div',
                { className: 'user-profile-biz-photos-item-container', key: idx },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/biz/' + imgs[idx].biz_id },
                  _react2.default.createElement('img', { src: imgs[idx].url })
                )
              );
            })
          ) : _react2.default.createElement(
            'div',
            null,
            'You don\'t have photo uploaded yet. Go upload photo for business.'
          )
        )
      );
    }
  }]);

  return UserProfileBizPhotos;
}(_react2.default.Component);

exports.default = UserProfileBizPhotos;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _biz_index_item_rating = __webpack_require__(21);

var _biz_index_item_rating2 = _interopRequireDefault(_biz_index_item_rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserProfileBookmarks = function (_React$Component) {
  _inherits(UserProfileBookmarks, _React$Component);

  function UserProfileBookmarks() {
    _classCallCheck(this, UserProfileBookmarks);

    var _this = _possibleConstructorReturn(this, (UserProfileBookmarks.__proto__ || Object.getPrototypeOf(UserProfileBookmarks)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(UserProfileBookmarks, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          imgs = _props.imgs,
          reviews = _props.reviews,
          biz = _props.biz;

      return _react2.default.createElement(
        'div',
        { className: 'user-profile-bookmarks' },
        _react2.default.createElement(
          'h1',
          null,
          'Bookmarks'
        ),
        user.bookmark_num > 0 ? _react2.default.createElement(
          'div',
          { className: 'user-profile-bookmarks-index' },
          user.bookmark_biz_ids.map(function (idx) {
            return _react2.default.createElement(
              'div',
              { className: 'user-profile-bookmarks-item', key: idx },
              _react2.default.createElement(
                'div',
                { className: 'user-profile-bookmarks-item-biz-cover' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/biz/' + idx },
                  _react2.default.createElement('img', { src: biz[idx].img_url })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'user-profile-bookmarks-item-biz-info' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/biz/' + idx },
                  biz[idx].name
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_biz_index_item_rating2.default, { biz: biz[idx] }),
                  biz[idx].reviews_num > 1 ? _react2.default.createElement(
                    'p',
                    null,
                    biz[idx].reviews_num,
                    ' reviews'
                  ) : _react2.default.createElement(
                    'p',
                    null,
                    biz[idx].reviews_num,
                    ' review'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'user-profile-reviews-item-biz-info-address' },
                  biz[idx].display_address
                )
              )
            );
          })
        ) : _react2.default.createElement(
          'div',
          null,
          'You don\'t have bookmark yet. Go find a business.'
        )
      );
    }
  }]);

  return UserProfileBookmarks;
}(_react2.default.Component);

exports.default = UserProfileBookmarks;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(1);

var _user_settings = __webpack_require__(206);

var _user_settings2 = _interopRequireDefault(_user_settings);

var _session = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateUser: function updateUser(user) {
      return dispatch((0, _session.updateUser)(user));
    },
    clearErrors: function clearErrors() {
      return dispatch((0, _session.clearErrors)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_user_settings2.default);

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _user_settings_profile = __webpack_require__(207);

var _user_settings_profile2 = _interopRequireDefault(_user_settings_profile);

var _user_settings_password = __webpack_require__(208);

var _user_settings_password2 = _interopRequireDefault(_user_settings_password);

var _user_settings_email = __webpack_require__(209);

var _user_settings_email2 = _interopRequireDefault(_user_settings_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserSettings = function (_React$Component) {
  _inherits(UserSettings, _React$Component);

  function UserSettings(props) {
    _classCallCheck(this, UserSettings);

    var _this = _possibleConstructorReturn(this, (UserSettings.__proto__ || Object.getPrototypeOf(UserSettings)).call(this, props));

    _this.state = { listName: 'UserProfile' };
    return _this;
  }

  _createClass(UserSettings, [{
    key: 'handleClick',
    value: function handleClick(listName) {
      this.setState({ listName: listName });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          currentUser = _props.currentUser,
          updateUser = _props.updateUser,
          errors = _props.errors,
          clearErrors = _props.clearErrors;

      return _react2.default.createElement(
        'div',
        { className: 'user-settings' },
        _react2.default.createElement(
          'div',
          { className: 'user-show-detail-nav' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              null,
              currentUser.username,
              '\'s Account Settings'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                { className: this.state.listName == 'UserProfile' ? 'user-profile-nav-clicked' : "", onClick: function onClick() {
                    return _this2.handleClick('UserProfile');
                  } },
                'Profile'
              ),
              _react2.default.createElement(
                'li',
                { className: this.state.listName == 'Password' ? 'user-profile-nav-clicked' : "", onClick: function onClick() {
                    return _this2.handleClick('Password');
                  } },
                'Password'
              ),
              _react2.default.createElement(
                'li',
                { className: this.state.listName == 'Email' ? 'user-profile-nav-clicked' : "", onClick: function onClick() {
                    return _this2.handleClick('Email');
                  } },
                'Email / Notifications'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'user-settings-sub-component' },
          this.state.listName == 'UserProfile' ? _react2.default.createElement(_user_settings_profile2.default, { currentUser: currentUser, updateUser: updateUser }) : "",
          this.state.listName == 'Password' ? _react2.default.createElement(_user_settings_password2.default, { currentUser: currentUser, clearErrors: clearErrors, updateUser: updateUser, errors: errors }) : "",
          this.state.listName == 'Email' ? _react2.default.createElement(_user_settings_email2.default, { currentUser: currentUser, updateUser: updateUser }) : ""
        )
      );
    }
  }]);

  return UserSettings;
}(_react2.default.Component);

exports.default = UserSettings;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserSettingsProfile = function (_React$Component) {
  _inherits(UserSettingsProfile, _React$Component);

  function UserSettingsProfile() {
    _classCallCheck(this, UserSettingsProfile);

    var _this = _possibleConstructorReturn(this, (UserSettingsProfile.__proto__ || Object.getPrototypeOf(UserSettingsProfile)).call(this));

    _this.state = {
      avatar_url: "",
      first_name: "",
      last_name: "",
      nickname: "",
      headline: "",
      love: "",
      find_me_in: "",
      notification: ""
    };
    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  _createClass(UserSettingsProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.currentUser && !this.state.avatar_url) {
        this.setState({
          avatar_url: this.props.currentUser.avatar_url,
          first_name: this.props.currentUser.first_name,
          last_name: this.props.currentUser.last_name,
          nickname: this.props.currentUser.nickname,
          headline: this.props.currentUser.headline,
          love: this.props.currentUser.love,
          find_me_in: this.props.currentUser.find_me_in
        });
      }
    }
  }, {
    key: "uploadAvatar",
    value: function uploadAvatar() {
      var _this2 = this;

      cloudinary.openUploadWidget({ cloud_name: 'ddwejrtgh', upload_preset: 'l8du0kzb' }, function (errors, result) {
        if (errors) {}
        result.forEach(function (file) {
          var avatar_url = 'https' + file.url.slice(4);
          _this2.setState({ avatar_url: avatar_url });
        });
      });
    }
  }, {
    key: "handleInput",
    value: function handleInput(type) {
      var _this3 = this;

      return function (e) {
        e.preventDefault();
        _this3.setState(_defineProperty({}, type, e.target.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this4 = this;

      e.preventDefault();
      var user = {
        id: this.props.currentUser.id,
        avatar_url: this.state.avatar_url,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        nickname: this.state.nickname,
        headline: this.state.headline,
        love: this.state.love,
        find_me_in: this.state.find_me_in
      };
      this.props.updateUser(user).then(function () {
        _this4.setState({ notification: 'You profile has been saved.' });
      });
    }
  }, {
    key: "closeNotification",
    value: function closeNotification() {
      this.setState({ notification: "" });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var currentUser = this.props.currentUser;

      return _react2.default.createElement(
        "div",
        { className: "user-setting-profile" },
        this.state.notification ? _react2.default.createElement(
          "div",
          { className: "success-notification" },
          this.state.notification,
          _react2.default.createElement(
            "div",
            { onClick: function onClick() {
                return _this5.closeNotification();
              } },
            _react2.default.createElement(
              "span",
              null,
              "\xD7"
            )
          )
        ) : "",
        _react2.default.createElement(
          "h1",
          null,
          "Profile"
        ),
        _react2.default.createElement(
          "p",
          null,
          "Tell us more about you."
        ),
        _react2.default.createElement(
          "div",
          { className: "user-setting-profile-avatar" },
          _react2.default.createElement(
            "h2",
            null,
            "Your Profile Photo ",
            _react2.default.createElement(
              "a",
              { onClick: function onClick() {
                  _this5.uploadAvatar();
                } },
              "(Add/Edit)"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "user-setting-profile-avatar-container" },
            _react2.default.createElement("img", { src: this.state.avatar_url })
          )
        ),
        _react2.default.createElement(
          "form",
          { className: "user-settings-profile-form" },
          _react2.default.createElement(
            "label",
            null,
            "First Name"
          ),
          _react2.default.createElement("input", { type: "text", value: this.state.first_name, onChange: this.handleInput('first_name') }),
          _react2.default.createElement(
            "label",
            null,
            "Last Name"
          ),
          _react2.default.createElement("input", { type: "text", value: this.state.last_name, onChange: this.handleInput('last_name') }),
          _react2.default.createElement(
            "label",
            null,
            "Nickname"
          ),
          _react2.default.createElement(
            "p",
            null,
            "The Boss, Calamity Jane, The Prolific Reviewer"
          ),
          _react2.default.createElement("input", { type: "text", value: this.state.nickname, onChange: this.handleInput('nickname') }),
          _react2.default.createElement(
            "label",
            null,
            "Your Headline"
          ),
          _react2.default.createElement(
            "p",
            null,
            "Taco Tuesday Aficionado, The Globetrotting Reviewer"
          ),
          _react2.default.createElement("input", { type: "text", value: this.state.headline, onChange: this.handleInput('headline') }),
          _react2.default.createElement(
            "label",
            null,
            "I Love..."
          ),
          _react2.default.createElement(
            "p",
            null,
            "Comma separated phrases (e.g. sushi, Radiohead, puppies)"
          ),
          _react2.default.createElement("textarea", { value: this.state.love, onChange: this.handleInput('love') }),
          _react2.default.createElement(
            "label",
            null,
            "Find Me In"
          ),
          _react2.default.createElement(
            "p",
            null,
            "Nob Hill, the newest brunch spot, a turtleneck"
          ),
          _react2.default.createElement("input", { type: "text", value: this.state.find_me_in, onChange: this.handleInput('find_me_in') }),
          _react2.default.createElement("input", { type: "submit", value: "Save Changes", onClick: function onClick(e) {
              _this5.handleSubmit(e);
            } })
        )
      );
    }
  }]);

  return UserSettingsProfile;
}(_react2.default.Component);

exports.default = UserSettingsProfile;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserSettingsPassword = function (_React$Component) {
  _inherits(UserSettingsPassword, _React$Component);

  function UserSettingsPassword() {
    _classCallCheck(this, UserSettingsPassword);

    var _this = _possibleConstructorReturn(this, (UserSettingsPassword.__proto__ || Object.getPrototypeOf(UserSettingsPassword)).call(this));

    _this.state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      error: '',
      notification: ''
    };
    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  _createClass(UserSettingsPassword, [{
    key: 'handleCancel',
    value: function handleCancel() {
      window.location.reload(true);
    }
  }, {
    key: 'handleInput',
    value: function handleInput(type) {
      var _this2 = this;

      return function (e) {
        e.preventDefault();
        _this2.setState(_defineProperty({}, type, e.target.value));
      };
    }
  }, {
    key: 'changePassword',
    value: function changePassword(e) {
      var _this3 = this;

      e.preventDefault();
      if (this.props.currentUser.username === 'demo_user') {
        this.setState({ error: 'Please do not change demo_user password.' });
      } else if (this.state.newPassword === this.state.confirmPassword) {
        var user = {
          id: this.props.currentUser.id,
          password: this.state.oldPassword,
          newPassword: this.state.newPassword
        };
        this.props.updateUser(user).then(function () {
          _this3.setState({
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            notification: 'Your new password has been saved.'
          });
        });
      } else {
        this.setState({ error: 'Verify new password is not same with new password' });
      }
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      if (this.state.error) {
        this.setState({ error: "" });
      } else {
        this.props.clearErrors();
      }
    }
  }, {
    key: 'closeNotification',
    value: function closeNotification() {
      this.setState({ notification: "" });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Change Your Password'
        ),
        this.state.notification ? _react2.default.createElement(
          'div',
          { className: 'success-notification' },
          this.state.notification,
          _react2.default.createElement(
            'div',
            { onClick: function onClick() {
                return _this4.closeNotification();
              } },
            _react2.default.createElement(
              'span',
              null,
              '\xD7'
            )
          )
        ) : "",
        this.props.errors.length ? _react2.default.createElement(
          'div',
          { className: 'session-error' },
          _react2.default.createElement(
            'p',
            null,
            this.props.errors[0]
          ),
          _react2.default.createElement(
            'div',
            { onClick: function onClick() {
                return _this4.handleClose();
              }, className: 'errors-closeBtn' },
            '\xD7'
          )
        ) : "",
        _react2.default.createElement(
          'form',
          { className: 'user-settings-change-password' },
          _react2.default.createElement(
            'label',
            null,
            'Current password'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Enter your existing password.'
          ),
          _react2.default.createElement('input', { onChange: this.handleInput('oldPassword'), type: 'password', value: this.state.oldPassword }),
          _react2.default.createElement(
            'label',
            null,
            'New Password'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Enter the new password you would like.'
          ),
          _react2.default.createElement('input', { onChange: this.handleInput('newPassword'), type: 'password', value: this.state.newPassword }),
          this.state.error ? _react2.default.createElement(
            'div',
            { className: 'session-error' },
            _react2.default.createElement(
              'p',
              null,
              this.state.error
            ),
            _react2.default.createElement(
              'div',
              { onClick: function onClick() {
                  return _this4.handleClose();
                }, className: 'errors-closeBtn' },
              '\xD7'
            )
          ) : "",
          _react2.default.createElement(
            'label',
            null,
            'Verify new password'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Reenter your password to verify.'
          ),
          _react2.default.createElement('input', { onChange: this.handleInput('confirmPassword'), type: 'password', value: this.state.confirmPassword }),
          _react2.default.createElement('input', { onClick: function onClick(e) {
              return _this4.changePassword(e);
            }, type: 'submit', value: 'Save New Password' }),
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                return _this4.handleCancel();
              } },
            'cancel'
          )
        )
      );
    }
  }]);

  return UserSettingsPassword;
}(_react2.default.Component);

exports.default = UserSettingsPassword;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserSettingsEmail = function (_React$Component) {
  _inherits(UserSettingsEmail, _React$Component);

  function UserSettingsEmail() {
    _classCallCheck(this, UserSettingsEmail);

    var _this = _possibleConstructorReturn(this, (UserSettingsEmail.__proto__ || Object.getPrototypeOf(UserSettingsEmail)).call(this));

    _this.state = {
      phoneNumber: "",
      password: "",
      email: "",
      className: 'modal',
      hint: 'hidden',
      notification: ''
    };
    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  _createClass(UserSettingsEmail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.currentUser) {
        this.setState({
          phoneNumber: this.props.currentUser.phone_number,
          notification: ''
        });
      }
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this.setState({ className: 'is-open', phoneNumber: '' });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({ className: 'modal' });
    }
  }, {
    key: "phoneNumberCheck",
    value: function phoneNumberCheck(str) {
      var pattern = new RegExp(/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/);
      return pattern.test(str);
    }
  }, {
    key: "handleInput",
    value: function handleInput(type) {
      var _this2 = this;

      return function (e) {
        if (_this2.state.hint === '') {
          _this2.setState({ hint: 'hidden' });
        }
        _this2.setState(_defineProperty({}, type, e.target.value));
      };
    }
  }, {
    key: "saveEmail",
    value: function saveEmail(e) {
      e.preventDefault();
      var user = {
        id: this.props.currentUser.id,
        multiple_email: this.state.email,
        password: this.state.password
        // this.props.updateUser(user)
      };
    }
  }, {
    key: "savePhoneNumber",
    value: function savePhoneNumber(e) {
      var _this3 = this;

      e.preventDefault();
      if (this.phoneNumberCheck(this.state.phoneNumber && this.props.currentUser.phone_number !== this.state.phoneNumber)) {
        var user = {
          id: this.props.currentUser.id,
          phone_number: this.state.phoneNumber
        };
        this.props.updateUser(user).then(function () {
          return _this3.setState({ notification: 'User information saved' });
        });
      } else if (this.props.currentUser.phone_number == this.state.phoneNumber) {
        this.setState({ notification: "You phone number doesn't change" });
      } else {
        this.setState({ hint: '' });
      }
    }
  }, {
    key: "closeNotification",
    value: function closeNotification() {
      this.setState({ notification: "" });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var currentUser = this.props.currentUser;

      return _react2.default.createElement(
        "div",
        null,
        this.state.notification ? _react2.default.createElement(
          "div",
          { className: "success-notification" },
          this.state.notification,
          _react2.default.createElement(
            "div",
            { onClick: function onClick() {
                return _this4.closeNotification();
              } },
            _react2.default.createElement(
              "span",
              null,
              "\xD7"
            )
          )
        ) : "",
        _react2.default.createElement(
          "div",
          { className: "user-settings-email-add" },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "h1",
              null,
              "Email Accounts"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Add accounts, remove accounts."
            )
          ),
          _react2.default.createElement(
            "button",
            { onClick: function onClick() {
                return _this4.openModal();
              } },
            "Add Email"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: this.state.className },
          _react2.default.createElement(
            "div",
            { className: "user-setting-add-email-modal" },
            _react2.default.createElement(
              "div",
              { className: "user-setting-add-email-modal-header" },
              _react2.default.createElement(
                "h1",
                null,
                "Add a new email account"
              ),
              _react2.default.createElement(
                "div",
                { onClick: function onClick() {
                    return _this4.closeModal();
                  } },
                _react2.default.createElement(
                  "span",
                  null,
                  "\xD7"
                )
              )
            ),
            _react2.default.createElement(
              "p",
              null,
              "This function does not finish yet. I will finish it as soon as possilbe. But I don't want to remove it. please~~~"
            ),
            _react2.default.createElement(
              "form",
              { className: "user-setting-add-email" },
              _react2.default.createElement(
                "label",
                null,
                "Current Celp Password"
              ),
              _react2.default.createElement("input", { type: "password", onChange: this.handleInput('password'), value: this.state.password }),
              _react2.default.createElement(
                "label",
                null,
                "Email Address"
              ),
              _react2.default.createElement("input", { type: "text", onChange: this.handleInput('email'), value: this.state.email }),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("input", { onClick: function onClick() {
                    return _this4.closeModal();
                  }, type: "submit", value: "Save" }),
                _react2.default.createElement(
                  "a",
                  { onClick: function onClick() {
                      return _this4.closeModal();
                    } },
                  "Cancel"
                )
              )
            )
          ),
          _react2.default.createElement("div", { onClick: function onClick() {
              return _this4.closeModal();
            }, className: "modal-screen" })
        ),
        _react2.default.createElement(
          "div",
          { className: "user-settings-email-current-account" },
          currentUser.email,
          " \xB7 Primary account"
        ),
        _react2.default.createElement(
          "div",
          { className: "user-settings-email-phone" },
          _react2.default.createElement(
            "h1",
            null,
            "Phone Number"
          ),
          _react2.default.createElement(
            "p",
            null,
            "Add or edit your phone number. We\u2019ll do nothing with it since we are using free trial SMS service, cannot send message to non-verified phonenumber"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "user-settings-email-update-phone" },
          _react2.default.createElement(
            "form",
            { className: "user-setting-email-phone-form" },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement("input", { readOnly: true, value: "+1" }),
              _react2.default.createElement("input", { onChange: this.handleInput('phoneNumber'), type: "text", value: this.state.phoneNumber }),
              _react2.default.createElement(
                "div",
                { className: "hint " + this.state.hint },
                "Please input the valid phone number"
              )
            ),
            _react2.default.createElement("input", { onClick: function onClick(e) {
                return _this4.savePhoneNumber(e);
              }, className: "user-settings-save-phone-numbers", type: "submit", value: "Save Phone Number" })
          )
        )
      );
    }
  }]);

  return UserSettingsEmail;
}(_react2.default.Component);

exports.default = UserSettingsEmail;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _search_container = __webpack_require__(35);

var _search_container2 = _interopRequireDefault(_search_container);

var _home_center_activities = __webpack_require__(64);

var _home_center_activities2 = _interopRequireDefault(_home_center_activities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WriteReviewSearch = function (_React$Component) {
  _inherits(WriteReviewSearch, _React$Component);

  function WriteReviewSearch() {
    _classCallCheck(this, WriteReviewSearch);

    var _this = _possibleConstructorReturn(this, (WriteReviewSearch.__proto__ || Object.getPrototypeOf(WriteReviewSearch)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(WriteReviewSearch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'write-review-search-banner' },
          _react2.default.createElement(
            'div',
            { className: 'write-review-search-header' },
            _react2.default.createElement(
              'div',
              { className: 'write-review-search' },
              _react2.default.createElement(
                'h1',
                null,
                'You Next Review Awaits'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Review everything from your favorite burger to your dentist.'
              ),
              _react2.default.createElement(_search_container2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'write-review-search-img-container' },
              _react2.default.createElement('img', { src: 'https://s3-media3.fl.yelpcdn.com/assets/2/www/img/6010a06f69a3/writeareview/rating_building.png' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'write-review-temp' },
          _react2.default.createElement(_home_center_activities2.default, null)
        )
      );
    }
  }]);

  return WriteReviewSearch;
}(_react2.default.Component);

exports.default = WriteReviewSearch;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Events = function (_React$Component) {
  _inherits(Events, _React$Component);

  function Events() {
    _classCallCheck(this, Events);

    return _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).apply(this, arguments));
  }

  _createClass(Events, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'events' },
        _react2.default.createElement(
          'div',
          { className: 'events-header' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h1',
              null,
              'Browse Events'
            ),
            _react2.default.createElement(
              'p',
              null,
              'This is a showcase page, everything links to real ',
              _react2.default.createElement(
                'a',
                { href: 'https://www.yelp.com/events' },
                'Yelp'
              ),
              '.'
            )
          ),
          _react2.default.createElement(
            'a',
            { href: 'https://www.yelp.com/events/create' },
            _react2.default.createElement(
              'button',
              null,
              'Create an Event on Yelp'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'events-index group' },
          _react2.default.createElement(
            'div',
            { className: 'events-index-item' },
            _react2.default.createElement(
              'div',
              { className: 'events-index-item-img-container' },
              _react2.default.createElement(
                'a',
                { href: 'https://www.yelp.com/events/san-mateo-cat-and-kitten-adoption-fair-adoption-fair-this-sunday-3-11-at-pet-club-in-san-mateo-12-3-pm' },
                _react2.default.createElement('img', { src: 'https://s3-media1.fl.yelpcdn.com/ephoto/D_ozNRnmHnNljkusMTfRBg/300s.jpg' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'events-item-description' },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/san-mateo-cat-and-kitten-adoption-fair-adoption-fair-this-sunday-3-11-at-pet-club-in-san-mateo-12-3-pm' },
                  'Cat and Kitten Adoption Fair Adoption Fair'
                )
              ),
              _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-calendar-alt' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Mar 11, 12:00pm'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-map-marker' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'pet Club -- San Mateo'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'Want Kitties? Oh, ho, ho. Have we got kitties for you!  We have LOTS of kittens...'
              ),
              _react2.default.createElement(
                'div',
                { className: 'events-item-category' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/sf/browse?c=9' },
                  'Charities'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'events-index-item' },
            _react2.default.createElement(
              'div',
              { className: 'events-index-item-img-container' },
              _react2.default.createElement(
                'a',
                { href: 'https://www.yelp.com/events/san-francisco-san-francisco-decorator-showcase-2018' },
                _react2.default.createElement('img', { src: 'https://s3-media3.fl.yelpcdn.com/ephoto/bsDcDN2tr45ohUsq0Mwzlg/300s.jpg' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'events-item-description' },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/san-francisco-san-francisco-decorator-showcase-2018' },
                  'San Francisco Decorator Showcase 2018'
                )
              ),
              _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-calendar-alt' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Apr 28, 10:00 am'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-map-marker' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '465 Marina Blvd. San Francisco'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'The 41st San Francisco Decorator Showcase is delighted to announce the ...'
              ),
              _react2.default.createElement(
                'div',
                { className: 'events-item-category' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/sf/browse?c=9' },
                  'Charities'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'events-index-item' },
            _react2.default.createElement(
              'div',
              { className: 'events-index-item-img-container' },
              _react2.default.createElement(
                'a',
                { href: 'https://www.yelp.com/events/san-francisco-san-francisco-spca-150th-anniversary-celebration' },
                _react2.default.createElement('img', { src: 'https://s3-media2.fl.yelpcdn.com/ephoto/tC_iZSQA8XsdW66gyuQpLQ/300s.jpg' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'events-item-description' },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/san-francisco-san-francisco-spca-150th-anniversary-celebration' },
                  'San Francisco SPCA 150th Anniversary Celebration'
                )
              ),
              _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-calendar-alt' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Apr 18, 6:30 pm'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-map-marker' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'San Francisco City Hall'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'The San Francisco SPCA is celebrating 150 years of rescuing and caring for animals ...'
              ),
              _react2.default.createElement(
                'div',
                { className: 'events-item-category' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/sf/browse?c=9' },
                  'Charities'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'events-index-item' },
            _react2.default.createElement(
              'div',
              { className: 'events-index-item-img-container' },
              _react2.default.createElement(
                'a',
                { href: 'https://www.yelp.com/events/san-francisco-san-franciscos-167th-annual-st-patricks-day-festival-and-parade' },
                _react2.default.createElement('img', { src: 'https://s3-media2.fl.yelpcdn.com/ephoto/cmRAg3C_tim9duJH7gnVmg/300s.jpg' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'events-item-description' },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/san-francisco-san-franciscos-167th-annual-st-patricks-day-festival-and-parade' },
                  'San Francisco\'s 167th Annual St. Patrick\'s Day Festival and Parade'
                )
              ),
              _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-calendar-alt' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Mar 17, 10:00 am'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-map-marker' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      '2ND St San Francisco, CA 94107'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'The 167th Annual St. Patrick\'s Day Parade in San Francisco is a well established event ...'
              ),
              _react2.default.createElement(
                'div',
                { className: 'events-item-category' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/sf/browse?c=8' },
                  'Festivals & Fairs'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'events-index-item' },
            _react2.default.createElement(
              'div',
              { className: 'events-index-item-img-container' },
              _react2.default.createElement(
                'a',
                { href: 'https://www.yelp.com/events/palo-alto-palo-alto-festival-of-the-arts-13' },
                _react2.default.createElement('img', { src: 'https://s3-media3.fl.yelpcdn.com/ephoto/sxPBBtgFYE0wQQ_aRzvnZw/300s.jpg' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'events-item-description' },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/palo-alto-palo-alto-festival-of-the-arts-13' },
                  'Palo Alto Festival of the Arts'
                )
              ),
              _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-calendar-alt' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Aug 25, 10:00 am'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-map-marker' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'University Ave Palo Alto, CA 94306'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'The 167th Annual St. Patrick\'s Day Parade in San Francisco is a well established event ...'
              ),
              _react2.default.createElement(
                'div',
                { className: 'events-item-category' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/sf/browse?c=8' },
                  'Festivals & Fairs'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'events-index-item' },
            _react2.default.createElement(
              'div',
              { className: 'events-index-item-img-container' },
              _react2.default.createElement(
                'a',
                { href: 'https://www.yelp.com/events/fremont-halal-fest-2018' },
                _react2.default.createElement('img', { src: 'https://s3-media3.fl.yelpcdn.com/ephoto/yl0yqa581KWwcohENu3ZaQ/300s.jpg' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'events-item-description' },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/fremont-halal-fest-2018' },
                  'Halal Fest 2018'
                )
              ),
              _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-calendar-alt' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Jun 30, 12:00 pm'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('i', { className: 'fas fa-map-marker' })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      'Halal Fest 2018 Town Fair Plaza'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'The 6th Annual Halal Food & Eid Festival is scheduled for Saturday June 30th (12 noon to 11pm)...'
              ),
              _react2.default.createElement(
                'div',
                { className: 'events-item-category' },
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.yelp.com/events/sf/browse?c=7' },
                  'Food & Drink'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Events;
}(_react2.default.Component);

exports.default = Events;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map