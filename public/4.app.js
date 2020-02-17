webpackJsonp([4],{

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

var _preactRouter = __webpack_require__(13);

var _Logo = __webpack_require__(51);

var _Logo2 = _interopRequireDefault(_Logo);

var _datalayer = __webpack_require__(52);

var _glamor = __webpack_require__(12);

var _i18n = __webpack_require__(5);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      email: '',
      sent: false
    };

    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'onSubmit',
    value: function onSubmit(evt) {
      var _this2 = this;

      evt.preventDefault();
      (0, _datalayer.sendVerification)(this.state.email).then(function () {
        return _this2.setState({ sent: true });
      });

      return false;
    }
  }, {
    key: 'renderSent',
    value: function renderSent() {
      return (0, _preact.h)(
        'p',
        styles.text,
        (0, _i18n2.default)('login.sent')
      );
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      var email = this.state.email;

      return (0, _preact.h)(
        'form',
        { onSubmit: this.onSubmit },
        (0, _preact.h)(
          'p',
          styles.text,
          (0, _i18n2.default)('login.text')
        ),
        (0, _preact.h)(
          'div',
          styles.emailGroup,
          (0, _preact.h)(
            'label',
            _extends({ 'for': 'email' }, styles.label),
            'E-mail'
          ),
          (0, _preact.h)('input', _extends({ type: 'email', id: 'email', required: true, placeholder: 'me@gmail.com',
            value: email }, styles.email, { onInput: this.linkState('email'),
            autofocus: true }))
        ),
        (0, _preact.h)(
          'button',
          _extends({}, styles.button, { type: 'submit' }),
          (0, _i18n2.default)('login.login')
        )
      );
    }
  }, {
    key: 'render',
    value: function render(props, _ref) {
      var sent = _ref.sent;

      return (0, _preact.h)(
        'div',
        styles.container,
        (0, _preact.h)(
          _preactRouter.Link,
          _extends({ href: '/' }, styles.logoContainer),
          (0, _preact.h)(_Logo2.default, { color: '#5A33A2' })
        ),
        sent ? this.renderSent() : this.renderForm()
      );
    }
  }]);

  return Login;
}(_preact.Component);

exports.default = Login;


var styles = {
  container: (0, _glamor.style)({
    margin: '50px auto',
    width: 350
  }),

  logoContainer: (0, _glamor.style)({
    justifyContent: 'center',
    display: 'flex'
  }),

  label: (0, _glamor.style)({
    color: '#5A33A2',
    fontSize: 12,
    marginBottom: 5
  }),

  email: (0, _glamor.style)({
    fontSize: 16,
    border: 0,
    borderBottom: '3px solid #5A33A2'
  }),

  emailGroup: (0, _glamor.style)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 40
  }),

  text: (0, _glamor.style)({
    fontSize: 16,
    color: '#999',
    marginTop: 50,
    textAlign: 'center'
  }),

  button: (0, _glamor.style)({
    marginTop: 50,
    display: 'block',
    borderRadius: 5,
    backgroundColor: '#5A33A2',
    border: 'none',
    color: '#fff',
    width: '100%',
    fontSize: 18,
    textTransform: 'uppercase',
    padding: 14,
    fontWeight: 500,
    boxShadow: '0 2px 3px rgba(90,53,162,0.3)',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#734EBB'
    }
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

/***/ }

});