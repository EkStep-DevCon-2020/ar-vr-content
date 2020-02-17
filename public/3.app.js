webpackJsonp([3],{

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

var _preactRouter = __webpack_require__(13);

var _glamor = __webpack_require__(12);

var _datalayer = __webpack_require__(52);

var _config = __webpack_require__(58);

var _i18n = __webpack_require__(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _StoryCard = __webpack_require__(77);

var _StoryCard2 = _interopRequireDefault(_StoryCard);

var _Navbar = __webpack_require__(54);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _LangSwitch = __webpack_require__(53);

var _LangSwitch2 = _interopRequireDefault(_LangSwitch);

var _Logo = __webpack_require__(51);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoryList = function (_Component) {
  _inherits(StoryList, _Component);

  function StoryList(props) {
    _classCallCheck(this, StoryList);

    var _this = _possibleConstructorReturn(this, (StoryList.__proto__ || Object.getPrototypeOf(StoryList)).call(this, props));

    _this.state = {
      stories: []
    };

    _this.onDelete = _this.onDelete.bind(_this);
    return _this;
  }

  _createClass(StoryList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      (0, _datalayer.fetchUserStories)().then(function (stories) {
        return _this2.setState({ stories: stories });
      });
    }
  }, {
    key: 'onDelete',
    value: function onDelete(id) {
      var _this3 = this;

      if (window.confirm((0, _i18n2.default)('stories.delete_confirm'))) {
        (0, _datalayer.deleteStory)(id).then(function () {
          return _this3.setState({
            stories: _this3.state.stories.filter(function (_ref) {
              var _id = _ref._id;
              return _id !== id;
            })
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render(props, _ref2) {
      var _this4 = this;

      var stories = _ref2.stories;

      return (0, _preact.h)(
        'div',
        styles.container,
        (0, _preact.h)(
          'div',
          styles.headerContainer,
          (0, _preact.h)(
            _preactRouter.Link,
            { href: '/' },
            (0, _preact.h)(_Logo2.default, { color: '#5A33A2' })
          ),
          (0, _preact.h)(
            'div',
            styles.navContainer,
            (0, _preact.h)(_Navbar2.default, { color: 'rgba(0, 0, 0, .4)', underline: true,
              activeColor: '#5A33A2', active: 'stories' }),
            (0, _preact.h)(
              'div',
              styles.switchContainer,
              (0, _preact.h)(_LangSwitch2.default, null)
            )
          )
        ),
        (0, _preact.h)(
          'div',
          styles.listContainer,
          (0, _preact.h)(CreateStoryCard, null),
          stories.map(function (story) {
            return (0, _preact.h)(_StoryCard2.default, { onDelete: _this4.onDelete, story: story });
          })
        )
      );
    }
  }]);

  return StoryList;
}(_preact.Component);

exports.default = StoryList;


var CreateStoryCard = function CreateStoryCard() {
  return (0, _preact.h)(
    _preactRouter.Link,
    _extends({}, styles.createLink, { href: '/stories/create' }),
    (0, _preact.h)(
      'div',
      styles.createContainer,
      (0, _preact.h)('div', null),
      (0, _preact.h)(
        'div',
        styles.plusContainer,
        (0, _preact.h)(
          'p',
          styles.plus,
          (0, _preact.h)(
            'span',
            null,
            '+'
          )
        )
      ),
      (0, _preact.h)(
        'p',
        styles.createText,
        (0, _i18n2.default)('stories.add')
      )
    )
  );
};

var styles = {
  createLink: (0, _glamor.style)({
    textDecoration: 'none'
  }),

  listContainer: (0, _glamor.style)({
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }),

  plusContainer: (0, _glamor.style)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }),

  plus: (0, _glamor.style)({
    backgroundColor: '#e4e4e4',
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    fontSize: 30,
    color: '#5A33A2'
  }),

  createContainer: (0, _glamor.style)({
    width: 285,
    height: 250,
    marginRight: 20,
    border: '5px dashed #5A33A2',
    borderRadius: 10,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20
  }),

  container: (0, _glamor.style)({
    maxWidth: 960,
    width: '100vw',
    margin: '0 auto',
    padding: 20
  }),

  switchContainer: (0, _glamor.style)({
    marginLeft: 30,
    height: 30,
    display: 'inline-block',
    '@media(max-width: 700px)': {
      position: 'absolute',
      right: 20,
      top: 20
    }
  }),

  headerContainer: (0, _glamor.style)({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap-reverse',
    '@media(max-width: 700px)': {
      marginBottom: 30,
      marginTop: 60
    },
    '@media(max-width: 530px)': {
      justifyContent: 'center'
    }
  }),

  navContainer: (0, _glamor.style)({
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 30,
    flexWrap: 'wrap-reverse'
  }),

  createText: (0, _glamor.style)({
    textTransform: 'uppercase',
    color: '#5A33A2',
    fontSize: 22
  })
};

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preact = __webpack_require__(1);

exports.default = function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 220 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 104 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? '#ffffff' : _ref$color;
  return (0, _preact.h)(
    'svg',
    { width: width, height: height, viewBox: '0 0 220 104' },
    (0, _preact.h)(
      'g',
      { stroke: 'none', 'stroke-width': '1', fill: 'none', 'fill-rule': 'evenodd' },
      (0, _preact.h)(
        'g',
        { transform: 'translate(-610.000000, -47.000000)', fill: color },
        (0, _preact.h)(
          'g',
          { transform: 'translate(618.000000, 52.000000)' },
          (0, _preact.h)(
            'g',
            null,
            (0, _preact.h)(
              'g',
              { transform: 'translate(182.003031, 0.000000)' },
              (0, _preact.h)('polygon', { points: '21.192342 0.222951001 10.7025888 2.2932103 0.212835572 4.39531974 0.212835572 57.9354102 21.192342 53.7311913' })
            ),
            (0, _preact.h)(
              'g',
              { transform: 'translate(121.753752, 7.486123)' },
              (0, _preact.h)('polygon', { points: '21.733323 2.59998817 10.9757958 4.71849704 0.218268667 6.83700592 0.218268667 60.7626864 21.733323 56.5577673' }),
              (0, _preact.h)('path', { d: 'M45.1192516,33.0294793 C49.7028936,28.3109822 52.3221176,22.2122446 52.3221176,16.3060986 C52.3221176,11.7159961 50.7006932,7.57527416 47.7696568,4.6542998 C44.8698016,1.76542406 40.8162407,0.160493097 36.3573236,0.160493097 C35.0788929,0.160493097 33.8004621,0.288887574 32.4908501,0.545676529 L27.0653147,1.60493097 L27.0653147,45.0664615 L31.7425004,54.6318501 L52.6651112,50.5874241 L44.8698016,34.6986075 C44.5891705,34.152931 44.7138955,33.47886 45.1192516,33.0294793 L45.1192516,33.0294793 Z' })
            ),
            (0, _preact.h)(
              'g',
              { transform: 'translate(61.504472, 14.972246)' },
              (0, _preact.h)('path', { d: 'M22.9481716,60.9112105 C23.950134,60.9112105 25.1137033,60.8459252 26.0833443,60.7479972 L26.0833443,6.00625013 L0.226249579,10.8373644 L0.226249579,35.9722154 L0.226249579,38.2898445 L0.226249579,38.5509859 C0.226249579,44.9163053 2.58570947,50.6287714 6.72284463,54.7091044 C10.8599798,58.724152 16.6455047,60.9112105 22.9481716,60.9112105 L22.9481716,60.9112105 Z' }),
              (0, _preact.h)('path', { d: 'M48.8699091,47.9847157 C54.0090066,41.8152522 56.7886443,34.4706529 56.7886443,27.2892669 L56.7886443,0.130570655 L31.2547633,4.96168489 L31.2547633,59.6707893 C38.0422506,57.7448721 44.1509893,53.6645392 48.8699091,47.9847157 L48.8699091,47.9847157 Z' })
            ),
            (0, _preact.h)(
              'g',
              { transform: 'translate(0.000000, 27.449118)' },
              (0, _preact.h)('path', { d: 'M27.8267308,5.28811152 C12.4968463,8.25859392 0.0629564046,23.1110059 0.0629564046,38.3877725 C0.0629564046,50.5308434 8.08989799,59.5402186 19.6423982,60.6500692 L22.0347416,55.1008164 L27.7952526,41.6520389 L33.5557636,28.2032615 C33.7446329,27.7462642 34.1223713,27.4198375 34.5945443,27.3545522 L55.0553758,23.3721472 L55.0553758,0 L27.8267308,5.28811152 L27.8267308,5.28811152 Z' }),
              (0, _preact.h)('path', { d: 'M25.1825618,60.3889279 C25.5917785,60.3236426 26.0009951,60.2583572 26.4102117,60.1930719 L54.9924194,54.8723177 L54.9924194,28.6929014 L37.2387133,32.1530238 L25.1825618,60.3889279 L25.1825618,60.3889279 Z' })
            )
          )
        )
      )
    )
  );
};

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchResources = exports.uploadAsset = exports.updateStory = exports.createStory = exports.fetchStory = exports.fetchUserStories = exports.deleteStory = exports.sendVerification = exports.logout = undefined;

var _guri = __webpack_require__(3);

var _guri2 = _interopRequireDefault(_guri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logout = exports.logout = function logout() {
  return fetch('/api/logout', {
    method: 'POST',
    credentials: 'same-origin'
  }).then(function () {
    return _guri2.default.emit('logout');
  });
};

var sendVerification = exports.sendVerification = function sendVerification(email) {
  return fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ user: email }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
};

var deleteStory = exports.deleteStory = function deleteStory(id) {
  return fetch('/api/stories/' + id, {
    method: 'DELETE',
    credentials: 'same-origin'
  });
};

var fetchUserStories = exports.fetchUserStories = function fetchUserStories() {
  return fetch('/api/stories', { credentials: 'same-origin' }).then(function (res) {
    return res.json();
  });
};

var fetchStory = exports.fetchStory = function fetchStory(id) {
  return fetch('/api/stories/' + id, { credentials: 'same-origin' }).then(function (res) {
    return res.json();
  });
};

var createStory = exports.createStory = function createStory(story) {
  return fetch('/api/stories', {
    method: 'POST',
    body: JSON.stringify(story),
    credentials: 'same-origin',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(function (res) {
    return res.json();
  });
};

var updateStory = exports.updateStory = function updateStory(story) {
  return fetch('/api/stories/' + story._id, {
    method: 'PUT',
    body: JSON.stringify(story),
    credentials: 'same-origin',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(function (res) {
    return res.json();
  });
};

var uploadAsset = exports.uploadAsset = function uploadAsset(file) {
  var data = new FormData();
  data.append('file', file);
  return fetch('/api/assets', {
    method: 'POST',
    body: data
  }).then(function (res) {
    return res.json();
  });
};

var searchResources = exports.searchResources = function searchResources(type, text) {
  return fetch('/api/assets/search?type=' + type + '&query=' + text).then(function (res) {
    return res.json();
  });
};

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = __webpack_require__(1);

var _i18n = __webpack_require__(5);

var _glamor = __webpack_require__(12);

var locales = {
  'en': { value: 'en-US', name: 'English' },
  'es': { value: 'es-ES', name: 'Español' }
};

exports.default = function () {
  return (0, _preact.h)(
    'div',
    styles.container,
    (0, _preact.h)(
      'div',
      _extends({ onClick: function onClick() {
          return (0, _i18n.setLocale)(locales[(0, _i18n.getLocale)()].value);
        } }, styles.button, (0, _glamor.select)(':hover + div', { display: 'block' })),
      (0, _preact.h)(
        'span',
        styles.name,
        locales[(0, _i18n.getLocale)()] ? locales[(0, _i18n.getLocale)()].name : 'English'
      ),
      (0, _preact.h)('span', styles.arrowDown)
    ),
    (0, _preact.h)(
      'div',
      styles.content,
      Object.keys(locales).filter(function (l) {
        return (0, _i18n.getLocale)() !== l;
      }).map(function (l) {
        return (0, _preact.h)(
          'span',
          { onClick: function onClick() {
              return (0, _i18n.setLocale)(locales[l].value);
            } },
          locales[l].name
        );
      })
    )
  );
};

var styles = {
  container: (0, _glamor.style)({
    fontSize: 14,
    textTransform: 'uppercase'
  }),

  button: (0, _glamor.style)({
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 3,
    padding: '8px 10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  }),

  name: (0, _glamor.style)({
    marginRight: 8
  }),

  arrowDown: (0, _glamor.style)({
    width: 0,
    height: 0,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderTop: '5px solid #fff'
  }),

  content: (0, _glamor.style)({
    backgroundColor: 'rgba(0, 0, 0, .6)',
    padding: 5,
    color: '#fff',
    borderRadius: 0,
    cursor: 'pointer',
    display: 'none',
    ':hover': {
      display: 'block'
    }
  })
};

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = __webpack_require__(1);

var _preactRouter = __webpack_require__(13);

var _glamor = __webpack_require__(12);

var _i18n = __webpack_require__(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _guri = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? '#fff' : _ref$color,
      _ref$activeColor = _ref.activeColor,
      activeColor = _ref$activeColor === undefined ? '#FFEB3B' : _ref$activeColor,
      active = _ref.active;
  return (0, _preact.h)(
    'nav',
    styles.navbar,
    _guri.user ? (0, _preact.h)(
      _preactRouter.Link,
      _extends({ href: '/stories' }, styles.link(color, activeColor, active === 'stories', active === 'stories')),
      (0, _i18n2.default)('header.my_stories')
    ) : (0, _preact.h)(
      _preactRouter.Link,
      _extends({ href: '/login' }, styles.link(color, activeColor)),
      (0, _i18n2.default)('header.login')
    )
  );
};

var styles = {
  navbar: (0, _glamor.style)({
    width: 250,
    display: 'flex',
    justifyContent: 'space-between'
  }),

  link: function link(color, activeColor, isActive, underline) {
    return (0, _glamor.style)({
      cursor: 'pointer',
      textTransform: 'uppercase',
      color: isActive ? activeColor : color,
      fontWeight: 'bold',
      fontSize: 18,
      paddingBottom: 5,
      textDecoration: 'none',
      borderBottom: underline ? '3px solid ' + activeColor : 'none',
      ':hover': {
        color: activeColor
      },
      ':visited': {}
    });
  }
};

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(64);

Object.keys(_config).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _config[key];
    }
  });
});

/***/ },

/***/ 64:
/***/ function(module, exports) {

module.exports = {
	"assetsHost": "/uploads"
};

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = __webpack_require__(1);

var _preactRouter = __webpack_require__(13);

var _glamor = __webpack_require__(12);

var _config = __webpack_require__(58);

exports.default = function (_ref) {
  var story = _ref.story,
      onDelete = _ref.onDelete;
  return (0, _preact.h)(
    'div',
    styles.container,
    (0, _preact.h)(
      'div',
      styles.header,
      (0, _preact.h)(
        'h3',
        null,
        story.title
      )
    ),
    (0, _preact.h)(
      'p',
      styles.body,
      story.text.split('\n').filter(function (p) {
        return p.length;
      })[0]
    ),
    (0, _preact.h)(
      'div',
      styles.actions,
      (0, _preact.h)(
        'div',
        null,
        (0, _preact.h)(
          _preactRouter.Link,
          { href: '/stories/' + story._id },
          (0, _preact.h)(
            'svg',
            { fill: '#999', height: '24', viewBox: '0 0 24 24', width: '24' },
            (0, _preact.h)('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' }),
            (0, _preact.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' })
          )
        ),
        (0, _preact.h)(
          'a',
          _extends({}, styles.share, { href: _config.assetsHost + '/s/' + story._id + '.html', target: '_blank' }),
          (0, _preact.h)(
            'svg',
            { fill: '#999', height: '24', viewBox: '0 0 24 24', width: '24' },
            (0, _preact.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            (0, _preact.h)('path', { d: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z' })
          )
        )
      ),
      (0, _preact.h)(
        'span',
        _extends({}, styles.delete, { onClick: function onClick() {
            return onDelete(story._id);
          } }),
        (0, _preact.h)(
          'svg',
          { fill: '#999', height: '24', viewBox: '0 0 24 24', width: '24' },
          (0, _preact.h)('path', { d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' }),
          (0, _preact.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' })
        )
      )
    )
  );
};

var styles = {
  container: (0, _glamor.style)({
    marginRight: 20,
    width: 285,
    height: 250,
    border: '1px solid #e4e4e4',
    borderRadius: 4,
    marginBottom: 20,
    position: 'relative'
  }),

  header: (0, _glamor.style)({
    color: '#fff',
    backgroundColor: '#5A33A2',
    margin: 0,
    padding: '5px 10px',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    textShadow: '2px 2px #333'
  }),

  body: (0, _glamor.style)({
    padding: '0px 10px',
    color: '#999',
    overflow: 'hidden',
    paddingBottom: 25
  }),

  actions: (0, _glamor.style)({
    height: 40,
    position: 'absolute',
    bottom: 0,
    background: '#fff',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 5px'
  }),

  share: (0, _glamor.style)({
    marginLeft: 10
  }),

  delete: (0, _glamor.style)({
    cursor: 'pointer'
  })
};

/***/ }

});