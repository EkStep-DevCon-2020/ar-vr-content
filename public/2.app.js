webpackJsonp([2],{

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(1);

var _glamor = __webpack_require__(12);

var _Header = __webpack_require__(66);

var _Header2 = _interopRequireDefault(_Header);

var _Sidebar = __webpack_require__(68);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _MainContent = __webpack_require__(67);

var _MainContent2 = _interopRequireDefault(_MainContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Guide = function (_Component) {
  _inherits(Guide, _Component);

  function Guide() {
    _classCallCheck(this, Guide);

    return _possibleConstructorReturn(this, (Guide.__proto__ || Object.getPrototypeOf(Guide)).apply(this, arguments));
  }

  _createClass(Guide, [{
    key: 'render',
    value: function render() {
      return (0, _preact.h)(
        'article',
        styles.container,
        (0, _preact.h)(_Header2.default, null),
        (0, _preact.h)(
          'div',
          styles.main,
          (0, _preact.h)(_Sidebar2.default, null),
          (0, _preact.h)(_MainContent2.default, null)
        )
      );
    }
  }]);

  return Guide;
}(_preact.Component);

exports.default = Guide;


var styles = {
  container: (0, _glamor.style)({
    marginLeft: 50,
    marginRight: 50,
    width: '100vw',
    maxWidth: 960,
    padding: 20,
    margin: '0 auto',
    '@media(max-width: 1000px)': {
      width: 'auto'
    }
  }),

  main: (0, _glamor.style)({
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
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

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nlp = __webpack_require__(56);

var _nlp2 = _interopRequireDefault(_nlp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _nlp2.default;

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module constants
 */

var TYPES = {
  'audio': { alias: ['sound', '🔊'] },
  'panorama': { alias: ['🌅'] },
  'image': { alias: ['foto', 'picture', 'imagen'] },
  'text': { alias: ['texto', '📝'] },
  'videosphere': { alias: ['video esfera', '🎥'] },
  'video': { alias: [] },
  'seconds': { alias: ['segundos', '⏲'] },
  'voiceover': { alias: ['voz en off', '📢'] },
  'chart': { alias: ['gráfico', '📊'] },
  'background': { alias: ['fondo'] },
  'model': { alias: ['modelo'] },
  'sky': { alias: ['cielo'] }
};

var ENTITIES_REGEX = new RegExp('(^|\\s|;|\\.|,|:)(' + Object.keys(TYPES).map(function (type) {
  return TYPES[type].alias.concat(type).join('|');
}).join('|') + ')(\\s|$|;|\\.|,|:)', 'gi');
var LOCATION_REGEX = /right|left|behind|front|above|below|atrás|frente|izquierda|derecha|arriba|abajo/gi;
var SIZE_REGEX = /tiny|small|large|huge|diminuto|pequeño|grande|enorme/i;
var SUN_POSITION_REGEX = /sunrise|sunset|morning|noon|afternoon|evening|night|amanecer|atardecer|mañana|mediodía|tarde|noche/i;
var LATLON_REGEX = /\-?\d+\.\d+,\s*\-?\d+\.\d+/;
var MARKER_REGEX = /marker|marcador/i;
var SCENE_LINK_REGEX = /(first|second|third|fourth|fifth|sixth|primera|segunda|tercera|cuarta|quinta|sexta) (scene|escena)/i;
var SCENE_INDEXES = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'primera', 'segunda', 'tercera', 'cuarta', 'quinta', 'sexta'];

module.exports = function (str) {
  return str.split('\n').map(getObjects).filter(function (obj) {
    return obj.length;
  });
};

function getObjects(p) {
  var entities = [];
  var entity;

  // Iterate over the paragraph and extract entities
  while ((entity = ENTITIES_REGEX.exec(p)) !== null) {
    entities.push({ type: entity[2].trim(), index: entity.index });
  }

  // Extract attributes for each entity
  return entities.map(function (entity, i) {
    // for backwards words I'm going back to the previous entity and add the length
    var sp = i !== 0 ? p.substring(entities[i - 1].index + entities[i - 1].type.length, entities[i].index + entities[i].type.length + 1) : p.substring(0, entities[i].index + entities[i].type.length + 1);

    // special case for duration
    var match;
    if (entity.type === 'seconds' || entity.type === 'second' || entity.type === '⏲' || entity.type === 'segundo' || entity.type === 'segundos') {
      match = sp.match(/[0-9]+ (⏲|seconds?|segundos)/);
      if (!match) return false;

      return {
        type: 'duration',
        value: parseInt(match[0].replace(/(⏲|seconds?|segundos)/, ''), 10)
      };
    } else if (entity.type === 'background') {
      match = sp.match(/(#[a-fA-F0-9]{3,6}|\w+) background/i);
      return {
        type: 'background',
        color: match[0].replace(' background', '')
      };
    }

    // Get the portion of the text relative to this entity
    sp = i === entities.length - 1 ? p.substring(entity.index) : p.substring(entity.index, entities[i + 1].index + 1);

    var str = sp;
    switch (entity.type) {
      case 'audio':
      case 'sound':
      case '🔊':
        var audioUrl = getUrl(str);
        var audioQuote = getQuote(str);
        if (!(audioUrl || audioQuote)) return;
        return {
          type: 'audio',
          src: audioUrl,
          text: !audioUrl && audioQuote,
          position: getPosition(str)
        };
      case 'voiceover':
      case 'voz en off':
      case '📢':
        var voiceoverQuote = getQuote(str);
        if (!voiceoverQuote) return;
        return {
          type: 'voiceover',
          text: voiceoverQuote,
          lang: getVoiceoverLang(entity.type)
        };
      case 'chart':
      case 'gráfico':
      case '📊':
        var chartUrl = getUrl(str);
        var chartMarker = getMarker(str);
        if (!chartUrl) return;
        var chartPos = getPosition(str, 10, 10);
        return {
          type: 'chart',
          src: chartUrl,
          position: chartPos,
          scale: getSize(str),
          marker: chartMarker
        };
      case 'panorama':
      case '🌅':
        var panoUrl = getUrl(str);
        var panoQuote = getQuote(str);
        var panoLatLon = getLatLon(str);
        if (!(panoUrl || panoQuote || panoLatLon)) return;
        return {
          type: 'panorama',
          src: panoUrl,
          text: !panoUrl && panoQuote,
          latlon: !(panoUrl || panoQuote) && panoLatLon
        };
      case 'video':
        var videoUrl = getUrl(str);
        if (!videoUrl) return;
        var videoPos = getPosition(str);
        return {
          type: 'video',
          src: videoUrl,
          position: videoPos,
          scale: getSize(str),
          link: getLink(str),
          marker: getMarker(str)
        };
      case 'videosphere':
      case 'video esfera':
      case '🎥':
        var sphereUrl = getUrl(str);
        if (!sphereUrl) return;
        return {
          type: 'videosphere',
          src: sphereUrl
        };
      case 'image':
      case 'picture':
      case 'foto':
      case 'imagen':
        var imgUrl = getUrl(str);
        var imgQuote = getQuote(str);
        if (!(imgUrl || imgQuote)) return;
        var imgPos = getPosition(str);
        return {
          type: 'image',
          src: imgUrl,
          text: !imgUrl && imgQuote,
          position: imgPos,
          scale: getSize(str),
          link: getLink(str),
          marker: getMarker(str)
        };
      case 'text':
      case 'texto':
      case '📝':
        var textQuote = getQuote(str);
        if (!textQuote) return;
        var textPos = getPosition(str /*, 14, textQuote.length / 30*/);
        return {
          type: 'text',
          text: textQuote,
          position: textPos,
          scale: getSize(str).map(function (el) {
            return el * 25;
          }),
          marker: getMarker(str)
        };
      case 'sky':
      case 'cielo':
        return {
          type: 'sky',
          position: getSunPosition(str)
        };
      case 'model':
      case 'modelo':
        var url = getUrl(str, /\.obj$/);
        var mtl = null;
        var ext = '';
        if (url) {
          mtl = getUrl(str, /\.mtl$/);
          ext = ['obj'];
        } else {
          url = getUrl(str);
          if (url) {
            ext = url.split('.');
          }
        }

        if (!url) return;
        var modelPos = convertModelPosition(getPosition(str));
        return {
          type: 'model',
          src: url,
          mtl: mtl,
          extension: ext[ext.length - 1],
          position: modelPos,
          scale: getSize(str),
          marker: getMarker(str)
        };
      case 'fondo':
        match = sp.match(/fondo (#[a-fA-F0-9]{3,6})/i);
        if (!(match && match.length >= 2)) return;
        return {
          type: 'background',
          color: match[1]
        };
    }

    return entity;
  }).filter(function (entity) {
    return !!entity;
  });
}

function convertModelPosition(pos) {
  return [pos[0], pos[1] - 3, pos[2]];
}

function getUrl(str, validate) {
  var match = str.match(/https?:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if (!(match && match.length)) return;
  if (validate) {
    match = match.filter(function (m) {
      return validate.test(m);
    });
  }
  if (!match.length) return;

  return match[0];
}

function getQuote(str) {
  var match = str.match(/".*"/);
  if (!(match && match.length)) return '';
  return match[0].replace(/"/g, '');
}

function getPosition(str, width, height) {
  width = width || 0;
  height = height || 0;

  var positions = [];
  var position = null;
  var input = str;
  var distance = null;
  while ((position = LOCATION_REGEX.exec(str)) !== null) {
    positions.push({ type: position[0], index: position.index });
    distance = input.substring(0, position.index).match(/(\d*(\.\d+)?) (meter|metro)/i);
    positions[positions.length - 1].distance = distance && distance.length ? parseFloat(distance[0].replace(/meter|metro/i, '')) : 0;
    input = input.slice(position.index);
  }
  return getAbsPos(positions.length ? positions : [{ type: 'front', distance: 0 }], width, height);
}

function getSize(str) {
  var match = str.match(SIZE_REGEX);
  return getAbsSize(match && match.length ? match[0] : 'normal');
}

function getLink(str) {
  var match = str.match(SCENE_LINK_REGEX);
  if (!(match && match.length >= 2 && SCENE_INDEXES.indexOf(match[1]) !== -1)) return;
  return SCENE_INDEXES.indexOf(match[1]) % (SCENE_INDEXES.length / 2);
}

function getAbsPos(positions, width, height) {
  var xSize = -0.5 * width;
  var ySize = -0.5 * height;
  var initialPosition = [0, 1.6, 0];
  for (var i = 0; i < positions.length; i++) {
    switch (positions[i].type) {
      case 'left':
      case 'izquierda':
        initialPosition[0] -= positions[i].distance || 7;
        initialPosition[1] += ySize;
        initialPosition[2] -= xSize;
        break;
      case 'right':
      case 'derecha':
        initialPosition[0] += positions[i].distance || 7;
        initialPosition[1] += ySize;
        initialPosition[2] += xSize;
        break;
      case 'above':
      case 'arriba':
        initialPosition[0] += xSize;
        initialPosition[1] += positions[i].distance || 6;
        break;
      case 'below':
      case 'abajo':
        initialPosition[0] += xSize;
        initialPosition[1] -= positions[i].distance || 3;
        break;
      case 'behind':
      case 'atrás':
        initialPosition[0] -= xSize;
        initialPosition[1] += ySize;
        initialPosition[2] += positions[i].distance || 8;
        break;
      case 'front':
      case 'frente':
      default:
        initialPosition[0] += xSize;
        initialPosition[1] += ySize;
        initialPosition[2] -= positions[i].distance || 8;
        break;
    }
  }
  return initialPosition;
}

function getAbsSize(str) {
  switch (str) {
    case 'tiny':
    case 'diminuto':
      return [1 / 3, 1 / 3, 1 / 3];
    case 'small':
    case 'pequeño':
      return [1 / 2, 1 / 2, 1 / 2];
    case 'large':
    case 'grande':
      return [2, 2, 2];
    case 'huge':
    case 'enorme':
      return [3, 3, 3];
    default:
      return [1, 1, 1];
  }
}

function getSunPosition(str) {
  var match = str.match(SUN_POSITION_REGEX);
  return getAbsSunPos(match && match.length ? match[0] : null);
}

function getAbsSunPos(str) {
  switch (str) {
    case 'noon':case 'mediodía':
      return [0, 1, 0];
    case 'sunrise':case 'sunset':case 'amanecer':case 'atardecer':
      return [0, 0, -1];
    case 'evening':case 'night':case 'noche':
      return [10, -1, 0];
    case 'morning':case 'afternoon':case 'mañana':case 'tarde':
    default:
      return [1, 0.5, 0];
  }
}

function getLatLon(str) {
  var match = str.match(LATLON_REGEX);
  if (!(match && match.length)) return null;
  return match[0].split(',').map(parseFloat);
}

function getMarker(str) {
  var match = str.match(MARKER_REGEX);
  if (!(match && match.length)) return null;
  return true;
}

function getVoiceoverLang(type) {
  switch (type) {
    case 'voz en off':
      return 'es-ES';
    default:
      return 'en-US';
  }
}

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = __webpack_require__(1);

var _nlp = __webpack_require__(55);

var _nlp2 = _interopRequireDefault(_nlp);

var _i18n = __webpack_require__(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _glamor = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var text = _ref.text,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'GuriVR' : _ref$title;
  return (0, _preact.h)(
    'div',
    _extends({ 'class': 'cm-s-one-dark' }, styles.container),
    (0, _preact.h)('pre', _extends({}, styles.text, { dangerouslySetInnerHTML: { __html: text } })),
    (0, _preact.h)(
      'a',
      _extends({ href: '/api/preview?mode=' + getMode(text) + '&title=' + title + '&body=' + encodeURIComponent(JSON.stringify((0, _nlp2.default)(getText(text)))),
        target: '_blank' }, styles.run),
      (0, _i18n2.default)('code_example.run')
    )
  );
};

var bufferDiv = document.createElement('div');

var getText = function getText(str) {
  bufferDiv.innerHTML = str;
  return bufferDiv.textContent || bufferDiv.innerText;
};

var getMode = function getMode(str) {
  return (/ar mode|modo ra/gi.test(str) ? 'ar' : 'vr'
  );
};

var styles = {
  container: (0, _glamor.style)({
    padding: 20,
    margin: 0,
    backgroundColor: '#282C34',
    borderRadius: 3,
    color: '#818181',
    fontSize: 16,
    position: 'relative',
    paddingBottom: 50
  }),

  text: (0, _glamor.style)({
    whiteSpace: 'pre-wrap',
    margin: 0,
    fontFamily: 'monospace',
    wordBreak: 'break-all'
  }),

  run: (0, _glamor.style)({
    display: 'inline-block',
    textAlign: 'right',
    backgroundColor: '#fff',
    color: '#57309D',
    fontSize: '14px !important',
    position: 'absolute',
    borderRadius: 3.75,
    bottom: 8,
    right: 15,
    padding: '8px 12px',
    textTransform: 'uppercase',
    textDecoration: 'none'
  })
};

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preact = __webpack_require__(1);

var _glamor = __webpack_require__(12);

var _Navbar = __webpack_require__(54);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _LangSwitch = __webpack_require__(53);

var _LangSwitch2 = _interopRequireDefault(_LangSwitch);

var _Logo = __webpack_require__(51);

var _Logo2 = _interopRequireDefault(_Logo);

var _preactRouter = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _preact.h)(
    'header',
    styles.header,
    (0, _preact.h)(
      _preactRouter.Link,
      { href: '/' },
      (0, _preact.h)(_Logo2.default, { color: '#5A33A2' })
    ),
    (0, _preact.h)(
      'div',
      styles.navigation,
      (0, _preact.h)(_Navbar2.default, { color: 'rgba(0, 0, 0, .4)', activeColor: '#5A33A2', active: 'guide' }),
      (0, _preact.h)(
        'div',
        styles.switchContainer,
        (0, _preact.h)(_LangSwitch2.default, null)
      )
    )
  );
};

var styles = {
  logo: (0, _glamor.style)({
    width: 220,
    height: 104,
    fill: '#5A33A2'
  }),

  navigation: (0, _glamor.style)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap-reverse',
    paddingBottom: 30
  }),

  header: (0, _glamor.style)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 80,
    flexWrap: 'wrap-reverse',
    '@media(max-width: 700px)': {
      marginBottom: 30,
      marginTop: 60
    },
    '@media(max-width: 530px)': {
      justifyContent: 'center'
    }
  }),

  switchContainer: (0, _glamor.style)({
    marginLeft: 30,
    height: 30,
    '@media(max-width: 700px)': {
      position: 'absolute',
      right: 20,
      top: 20
    }
  })
};

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preact = __webpack_require__(1);

var _i18n = __webpack_require__(5);

var _i18n2 = _interopRequireDefault(_i18n);

var _glamor = __webpack_require__(12);

var _CodeExample = __webpack_require__(65);

var _CodeExample2 = _interopRequireDefault(_CodeExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _preact.h)(
    'div',
    styles.container,
    (0, _preact.h)(
      'section',
      { id: 'introduction' },
      (0, _preact.h)(
        'h2',
        styles.sectionTitle,
        (0, _i18n2.default)('guide.introduction.title')
      ),
      (0, _preact.h)('p', { dangerouslySetInnerHTML: { __html: (0, _i18n2.default)('guide.introduction.first') } }),
      (0, _preact.h)('p', { dangerouslySetInnerHTML: { __html: (0, _i18n2.default)('guide.introduction.second') } })
    ),
    (0, _preact.h)(
      'section',
      { id: 'getting-started' },
      (0, _preact.h)(
        'h2',
        styles.sectionTitle,
        (0, _i18n2.default)('guide.getting_started.title')
      ),
      (0, _preact.h)('p', { dangerouslySetInnerHTML: { __html: (0, _i18n2.default)('guide.getting_started.first') } }),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.getting_started.second')
      )
    ),
    (0, _preact.h)(
      'section',
      { id: 'scenes' },
      (0, _preact.h)(
        'h2',
        styles.sectionTitle,
        (0, _i18n2.default)('guide.scenes.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.scenes.first')
      ),
      (0, _preact.h)(_CodeExample2.default, { text: (0, _i18n2.default)('guide.scenes.preview') }),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.scenes.second')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.scenes.third')
      )
    ),
    (0, _preact.h)(
      'section',
      { id: 'entities' },
      (0, _preact.h)(
        'h2',
        styles.sectionTitle,
        (0, _i18n2.default)('guide.entities.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.first')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.second')
      ),
      (0, _preact.h)(_CodeExample2.default, {
        title: (0, _i18n2.default)('guide.entities.title'),
        text: (0, _i18n2.default)('guide.entities.preview') }),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.third')
      )
    ),
    (0, _preact.h)(
      'section',
      { id: 'audio' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.audio.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.audio.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          styles.attr,
          (0, _i18n2.default)('guide.audio.keywords')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.source')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.source_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.required')
        ),
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.position')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.position_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.optional')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Audio example',
        text: (0, _i18n2.default)('guide.audio.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'panorama' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.panorama.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.panorama.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          styles.attr,
          'panorama'
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.source')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.source_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.required')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Panorama example',
        text: (0, _i18n2.default)('guide.panorama.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'videosphere' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.videosphere.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.videosphere.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          styles.attr,
          (0, _i18n2.default)('guide.videosphere.keywords')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.source')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.source_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.required')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Videosphere example',
        text: (0, _i18n2.default)('guide.videosphere.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'image' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.image.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.image.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          styles.attr,
          (0, _i18n2.default)('guide.image.keywords')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.source')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.source_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.required')
        ),
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.position')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.position_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.optional')
        ),
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.scale')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.scale_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.optional')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Image example',
        text: (0, _i18n2.default)('guide.image.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'video' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.video.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.video.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          styles.attr,
          'video'
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.source')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.source_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.required')
        ),
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.position')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.position_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.optional')
        ),
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.scale')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.scale_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.optional')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Video example',
        text: (0, _i18n2.default)('guide.video.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'text' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.text.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.text.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          styles.attr,
          (0, _i18n2.default)('guide.text.keywords')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.text')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.text_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.required')
        ),
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.position')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.position_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.optional')
        ),
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.scale')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.scale_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.optional')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Text example',
        text: (0, _i18n2.default)('guide.text.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'duration' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.duration.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.duration.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          { style: styles.attr },
          (0, _i18n2.default)('guide.duration.keywords')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            { style: styles.attr },
            (0, _i18n2.default)('guide.attributes.duration')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.duration_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.required')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Duration example',
        text: (0, _i18n2.default)('guide.duration.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'voiceover' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.voiceover.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.voiceover.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          styles.attr,
          (0, _i18n2.default)('guide.voiceover.keywords')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.text')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.text_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.required')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Voiceover example',
        text: (0, _i18n2.default)('guide.voiceover.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'chart' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.chart.title')
      ),
      (0, _preact.h)('p', { dangerouslySetInnerHTML: { __html: (0, _i18n2.default)('guide.chart.description') } }),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          styles.attr,
          (0, _i18n2.default)('guide.chart.keywords')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.source')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.source_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.required')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Chart example',
        text: (0, _i18n2.default)('guide.chart.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'sky' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.sky.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.sky.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          styles.attr,
          (0, _i18n2.default)('guide.sky.keywords')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.sun_position')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.sun_position_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.optional')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Sky example',
        text: (0, _i18n2.default)('guide.sky.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'background' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.background.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.background.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          styles.attr,
          (0, _i18n2.default)('guide.background.keywords')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.color')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.color_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.required')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Background example',
        text: (0, _i18n2.default)('guide.background.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: '3dmodel' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.3dmodel.title')
      ),
      (0, _preact.h)('p', { dangerouslySetInnerHTML: { __html: (0, _i18n2.default)('guide.3dmodel.description') } }),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.keywords'),
        ': ',
        (0, _preact.h)(
          'span',
          styles.attr,
          (0, _i18n2.default)('guide.3dmodel.keywords')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.attributes'),
        ':'
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            (0, _i18n2.default)('guide.attributes.source')
          ),
          ' (',
          (0, _i18n2.default)('guide.attributes.source_types'),
          ') | ',
          (0, _i18n2.default)('guide.entities.required')
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Model example',
        text: (0, _i18n2.default)('guide.3dmodel.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'links' },
      (0, _preact.h)(
        'h3',
        null,
        (0, _i18n2.default)('guide.links.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.links.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'Links example',
        text: (0, _i18n2.default)('guide.links.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'search' },
      (0, _preact.h)(
        'h2',
        styles.sectionTitle,
        (0, _i18n2.default)('guide.search.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.search.description')
      ),
      (0, _preact.h)(
        'p',
        styles.sectionDesc,
        (0, _i18n2.default)('guide.search.example')
      )
    ),
    (0, _preact.h)(
      'section',
      { id: 'ar' },
      (0, _preact.h)(
        'h2',
        styles.sectionTitle,
        (0, _i18n2.default)('guide.ar.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.ar.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(_CodeExample2.default, { title: 'AR mode example', text: (0, _i18n2.default)('guide.ar.preview') })
    ),
    (0, _preact.h)(
      'section',
      { id: 'api' },
      (0, _preact.h)(
        'h2',
        styles.sectionTitle,
        (0, _i18n2.default)('guide.api.title')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.api.description')
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _preact.h)(
          'strong',
          null,
          'POST https://gurivr.com/api/stories'
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.api.params')
      ),
      (0, _preact.h)(
        'ul',
        null,
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            'text'
          ),
          ' (string) | ',
          (0, _i18n2.default)('guide.entities.required')
        ),
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            'mode'
          ),
          ' (vr|ar) | (default: vr)'
        ),
        (0, _preact.h)(
          'li',
          styles.attrItem,
          (0, _preact.h)(
            'span',
            styles.attr,
            'title'
          ),
          ' (string)'
        )
      ),
      (0, _preact.h)(
        'p',
        null,
        (0, _i18n2.default)('guide.entities.example')
      ),
      (0, _preact.h)(
        'div',
        { 'class': 'cm-s-one-dark' },
        (0, _preact.h)(
          'pre',
          styles.attr,
          (0, _i18n2.default)('guide.api.curl')
        )
      ),
      (0, _preact.h)('p', { dangerouslySetInnerHTML: { __html: (0, _i18n2.default)('guide.api.tweetbot') } })
    )
  );
};

var styles = {
  container: (0, _glamor.style)({
    position: 'relative',
    left: 250,
    flex: 1,
    maxWidth: 700,
    width: '100%',
    marginTop: -30,
    color: '#666',
    fontSize: 18,
    '& p': {
      lineHeight: 1.5
    },
    '& a': {
      textDecoration: 'none',
      fontWeight: 'bold',
      color: '#333',
      fontSize: 20
    },
    '@media(max-width: 1000px)': {
      left: 0
    }
  }),

  title: (0, _glamor.style)({
    textAlign: 'center'
  }),

  embed: (0, _glamor.style)({
    display: 'flex',
    justifyContent: 'center',
    margin: '15px auto'
  }),

  attr: (0, _glamor.style)({
    backgroundColor: '#eee',
    padding: 3
  }),

  attrItem: (0, _glamor.style)({
    padding: 10
  }),

  sectionTitle: (0, _glamor.style)({
    fontSize: 40,
    color: '#57309D'
  }),

  sectionDesc: (0, _glamor.style)({
    wordBreak: 'break-all'
  })
};

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = __webpack_require__(1);

var _glamor = __webpack_require__(12);

var _i18n = __webpack_require__(5);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _preact.h)(
    'div',
    styles.container,
    (0, _preact.h)(
      'a',
      _extends({}, (0, _glamor.merge)(styles.link, styles.title), { href: '#introduction' }),
      (0, _i18n2.default)('guide.introduction.title')
    ),
    (0, _preact.h)(
      'a',
      _extends({}, (0, _glamor.merge)(styles.link, styles.title), { href: '#getting-started' }),
      (0, _i18n2.default)('guide.getting_started.title')
    ),
    (0, _preact.h)(
      'a',
      _extends({}, (0, _glamor.merge)(styles.link, styles.title), { href: '#scenes' }),
      (0, _i18n2.default)('guide.scenes.title')
    ),
    (0, _preact.h)(
      'a',
      _extends({}, (0, _glamor.merge)(styles.link, styles.title), { href: '#entities' }),
      (0, _i18n2.default)('guide.entities.title')
    ),
    (0, _preact.h)(
      'a',
      _extends({}, (0, _glamor.merge)(styles.link, styles.title), { href: '#links' }),
      (0, _i18n2.default)('guide.links.title')
    ),
    (0, _preact.h)(
      'a',
      _extends({}, (0, _glamor.merge)(styles.link, styles.title), { href: '#search' }),
      (0, _i18n2.default)('guide.search.title')
    ),
    (0, _preact.h)(
      'a',
      _extends({}, (0, _glamor.merge)(styles.link, styles.title), { href: '#ar' }),
      (0, _i18n2.default)('guide.ar.title')
    ),
    (0, _preact.h)(
      'a',
      _extends({}, (0, _glamor.merge)(styles.link, styles.title), { href: '#sharing' }),
      (0, _i18n2.default)('guide.sharing.title')
    ),
    (0, _preact.h)(
      'a',
      _extends({}, (0, _glamor.merge)(styles.link, styles.title), { href: '#api' }),
      (0, _i18n2.default)('guide.api.title')
    )
  );
};

var styles = {
  container: (0, _glamor.style)({
    flex: 0,
    position: 'fixed',
    width: 250,
    overflowY: 'auto',
    '@media(max-width: 1000px)': {
      'display': 'none'
    }
  }),

  title: (0, _glamor.style)({
    color: '#000000',
    textTransform: 'none',
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
    ':hover': {
      color: '#000000',
      textDecoration: 'none'
    }
  }),

  link: (0, _glamor.style)({
    color: 'rgba(0, 0, 0, .34)',
    textTransform: 'uppercase',
    fontSize: 18,
    textDecoration: 'none',
    display: 'block',
    marginTop: 10,
    ':hover': {
      color: 'rgba(0, 0, 0, .65)',
      textDecoration: 'underline'
    }
  })
};

/***/ }

});