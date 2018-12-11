(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("copywriting-correct", [], factory);
	else if(typeof exports === 'object')
		exports["copywriting-correct"] = factory();
	else
		root["copywriting-correct"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 修正字符
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(1);
var CharacterCorrector = /** @class */ (function () {
    function CharacterCorrector() {
    }
    CharacterCorrector.handle = function (text) {
        //  把数字和英文、部分标点符号等全角字符转换为半角字符
        text = text.replace(new RegExp("[" + Object.keys(utils_1.fullWidthChars).join('') + "]", 'g'), function ($) {
            return utils_1.fullWidthChars[$];
        });
        // 中文字符后面使用中文省略号
        text = text.replace(/([\u4e00-\u9fa5])[\.。]{2,}/g, '$1……');
        // 中文字符后面全部使用中文点号
        text = text.replace(new RegExp("([\u4E00-\u9FA5" + utils_1.zhSymbols.join('') + "])([" + Object.keys(utils_1.dotMarks).join('') + "])", 'g'), function ($, $1, $2) {
            return $1 + utils_1.dotMarks[$2];
        });
        // 两侧有中文字符的标号使用中文标号
        text = text.replace(new RegExp("([" + Object.keys(utils_1.labelMarks).join('') + "])([\u4E00-\u9FA5])", 'g'), function ($, $1, $2) {
            return utils_1.labelMarks[$1] + $2;
        });
        text = text.replace(new RegExp("([\u4E00-\u9FA5])([" + Object.keys(utils_1.labelMarks).join('') + "])", 'g'), function ($, $1, $2) {
            return $1 + utils_1.labelMarks[$2];
        });
        // 去除重复标点
        text = text.replace(/([！？])([！？]*)/g, '$1');
        return text;
    };
    CharacterCorrector.rules = ['character'];
    return CharacterCorrector;
}());
exports.CharacterCorrector = CharacterCorrector;
exports.default = CharacterCorrector;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fullWidthChars = {
    '０': '0', '１': '1', '２': '2', '３': '3', '４': '4',
    '５': '5', '６': '6', '７': '7', '８': '8', '９': '9',
    Ａ: 'A', Ｂ: 'B', Ｃ: 'C', Ｄ: 'D', Ｅ: 'E',
    Ｆ: 'F', Ｇ: 'G', Ｈ: 'H', Ｉ: 'I', Ｊ: 'J',
    Ｋ: 'K', Ｌ: 'L', Ｍ: 'M', Ｎ: 'N', Ｏ: 'O',
    Ｐ: 'P', Ｑ: 'Q', Ｒ: 'R', Ｓ: 'S', Ｔ: 'T',
    Ｕ: 'U', Ｖ: 'V', Ｗ: 'W', Ｘ: 'X', Ｙ: 'Y',
    Ｚ: 'Z', ａ: 'a', ｂ: 'b', ｃ: 'c', ｄ: 'd',
    ｅ: 'e', ｆ: 'f', ｇ: 'g', ｈ: 'h', ｉ: 'i',
    ｊ: 'j', ｋ: 'k', ｌ: 'l', ｍ: 'm', ｎ: 'n',
    ｏ: 'o', ｐ: 'p', ｑ: 'q', ｒ: 'r', ｓ: 's',
    ｔ: 't', ｕ: 'u', ｖ: 'v', ｗ: 'w', ｘ: 'x',
    ｙ: 'y', ｚ: 'z', '－': '-', ' ': ' ', '／': '/',
    '％': '%', '＃': '#', '＠': '@', '＆': '&', '＜': '<',
    '＞': '>', '［': '[', '］': ']', '｛': '{', '｝': '}',
    '＼': '\\', '｜': '|', '＋': '+', '＝': '=', '＿': '_',
    '＾': '^', '￣': '~', '｀': '`',
};
exports.dotMarks = {
    '!': '！',
    '?': '？',
    '.': '。',
    ',': '，',
    ':': '：',
    ';': '；',
};
exports.labelMarks = {
    '(': '（',
    ')': '）',
};
exports.zhSymbols = [
    '。', '？', '！', '，',
    '、', '；', '：', '「',
    '」', '『', '』', '‘',
    '’', '“', '”', '（',
    '）', '〔', '〕', '【',
    '】', '…', '–', '—',
    '．', '《', '》', '〈', '〉',
];


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var properNouns = {
    // Ruby
    ruby: 'Ruby',
    mri: 'MRI',
    rails: 'Rails',
    gem: 'Gem',
    rubygems: 'RubyGems',
    rubyonrails: 'Ruby on Rails',
    ror: 'Ruby on Rails',
    rubyconf: 'RubyConf',
    railsconf: 'RailsConf',
    rubytuesday: 'Ruby Tuesday',
    coffeescript: 'CoffeeScript',
    scss: 'SCSS',
    sass: 'Sass',
    railscasts: 'RailsCasts',
    execjs: 'ExecJS',
    cocoapods: 'CocoaPods',
    rack: 'Rack',
    sinatra: 'Sinatra',
    grape: 'Grape',
    unicorn: 'Unicorn',
    capistrano: 'Capistrano',
    puppet: 'Puppet',
    vagrant: 'Vagrant',
    chef: 'Chef',
    passenger: 'Passenger',
    // 'capybara'      : 'Capybara',
    // 'lotus'         : 'Lotus',
    // 'mina'          : 'Mina',
    // 'rubymotion'    : 'RubyMotion',
    // 'irb'           : 'IRB',
    // 'pry'           : 'Pry',
    // 'jruby'         : 'JRuby',
    // 'mruby'         : 'mRuby',
    // 'rvm'           : 'RVM',
    // 'rbenv'         : 'rbenv',
    // 'yard'          : 'YARD',
    // 'rdoc'          : 'RDoc',
    // 'rspec'         : 'RSpec',
    // 'minitest'      : 'MiniTest',
    // 'thin'          : 'Thin',
    // 'puma'          : 'Puma',
    // 'activerecord'  : 'ActiveRecord',
    // 'active-record' : 'ActiveRecord',
    // 'activemodal'   : 'ActiveModel',
    // 'activesupport' : 'ActiveSupport',
    // 'datamapper'    : 'DataMapper',
    // 'devise'        : 'Devise',
    // 'cancancan'     : 'CanCanCan',
    // 'resque'        : 'Resque',
    // 'sidekiq'       : 'Sidekiq',
    // 'turbolinks'    : 'Turbolinks',
    // 'sprockets'     : 'Sprockets',
    // 'redcarpet'     : 'Redcarpet',
    // 'sunspot'       : 'Sunspot',
    // 'carrierwave'   : 'CarrierWave',
    // 'paperclip'     : 'PaperClip',
    // 'simpleform'    : 'Simple Form',
    // 'kaminari'      : 'Kaminari',
    // 'will_paginate' : 'will_paginate',
    // 'minimagick'    : 'MiniMagick',
    // 'rmagick'       : 'RMagick',
    // 'nokogiri'      : 'Nokogiri',
    // 'god'           : 'God',
    // 'eventmachine'  : 'EventMachine',
    // 'simplecov'     : 'SimpleCov',
    // 'brakeman'      : 'Brakeman',
    // 'activeadmin'   : 'ActiveAdmin',
    // 'railsadmin'    : 'RailsAdmin',
    // Python
    // Node.js
    nodejs: 'Node.js',
    npm: 'NPM',
    // Go
    // PHP
    php: 'PHP',
    pear: 'Pear',
    laravel: 'Laravel',
    lumen: 'Lumen',
    laravel4: 'Laravel 4',
    laravel5: 'Laravel 5',
    traits: 'Traits',
    composer: 'Composer',
    homestead: 'Homestead',
    ioc: 'IoC',
    phpspec: 'PHPSpec',
    codeception: 'Codeception',
    thinkphp: 'ThinkPHP',
    // Cocoa
    afnetworking: 'AFNetworking',
    reactivecocoa: 'ReactiveCocoa',
    three20: 'Three20',
    // Java
    // Programming
    ssh: 'SSH',
    web: 'Web',
    api: 'API',
    css: 'CSS',
    html: 'HTML',
    json: 'JSON',
    jsonp: 'JSONP',
    xml: 'xml',
    yaml: 'YAML',
    yml: 'YAML',
    ini: 'INI',
    csv: 'CSV',
    soap: 'SOAP',
    ajax: 'Ajax',
    messagepack: 'MessagePack',
    javascript: 'JavaScript',
    js: 'JS',
    png: 'PNG',
    dsl: 'DSL',
    tdd: 'TDD',
    bdd: 'BDD',
    cgi: 'CGI',
    'asp.net': 'ASP.NET',
    '.net': '.NET',
    rest: 'REST',
    orm: 'ORM',
    oauth: 'OAuth',
    oauth2: 'OAuth2',
    i18n: 'I18N',
    markdown: 'Markdown',
    // Sites
    amazon: 'Amazon',
    aws: 'AWS',
    facebook: 'Facebook',
    github: 'GitHub',
    gist: 'Gist',
    ruby_china: 'Ruby China',
    'ruby-china': 'Ruby China',
    rubychina: 'Ruby China',
    phphub: 'PHPHub',
    v2ex: 'V2EX',
    hackernews: 'Hacker News',
    heroku: 'Heroku',
    stackoverflow: 'Stack Overflow',
    stackexchange: 'StackExchange',
    twitter: 'Twitter',
    youtube: 'YouTube',
    slack: 'Slack',
    laracasts: 'Laracasts',
    // Databases
    dynamodb: 'DynamoDB',
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    memcached: 'Memcached',
    mongodb: 'MongoDB',
    redis: 'Redis',
    rethinkdb: 'RethinkDB',
    elasticsearch: 'Elasticsearch',
    solr: 'Solr',
    sphinx: 'Sphinx',
    // System
    window: 'Windows',
    windows: 'Windows',
    linux: 'Linux',
    mac: 'Mac',
    osx: 'OS X',
    ubuntu: 'Ubuntu',
    rhel: 'RHEL',
    centos: 'CentOS',
    archlinux: 'Arch Linux',
    redhat: 'RedHat',
    android: 'Android',
    ios: 'iOS',
    // OpenSource Projects
    gitlab: 'GitLab',
    gitlabci: 'GitLab CI',
    fontawesome: 'Font Awesome',
    bootstrap: 'Bootstrap',
    less: 'Less',
    jquery: 'jQuery',
    requirejs: 'RequireJS',
    underscore: 'Underscore',
    angularjs: 'AngularJS',
    emberjs: 'Ember.js',
    backbone: 'Backbone',
    seajs: 'SeaJS',
    imagemagick: 'ImageMagick',
    fluentd: 'Fluentd',
    ffmpeg: 'FFmpeg',
    wordpress: 'WordPress',
    drupal: 'Drupal',
    joomla: 'Joomla',
    piwik: 'Piwik',
    discuz: 'Discuz!',
    // Tools
    git: 'Git',
    svn: 'SVN',
    vim: 'VIM',
    emacs: 'Emacs',
    textmate: 'TextMate',
    sublime: 'Sublime',
    rubymine: 'RubyMine',
    sequelpro: 'Sequel Pro',
    virtualbox: 'VirtualBox',
    safari: 'Safari',
    chrome: 'Chrome',
    ie: 'IE',
    firefox: 'Firefox',
    dash: 'Dash',
    termal: 'Termal',
    iterm: 'iTerm',
    iterm2: 'iTerm2',
    iwork: 'iWork',
    itunes: 'iTunes',
    iphoto: 'iPhoto',
    ibook: 'iBook',
    imessage: 'iMessage',
    tweetbot: 'TweetBot',
    sparrow: 'Sparrow',
    photoshop: 'Photoshop',
    office: 'Office',
    word: 'Word',
    excel: 'Excel',
    powerpoint: 'PowerPoint',
    // Misc
    app: 'App',
    iphone: 'iPhone',
    ipad: 'iPad',
    imac: 'iMac',
    macbookpro: 'MacBook Pro',
    macbook: 'MacBook',
    rmbp: 'rMBP',
    'wi-fi': 'Wi-Fi',
    wifi: 'Wi-Fi',
    vps: 'VPS',
    vpn: 'VPN',
    arm: 'ARM',
    cpu: 'CPU',
    pdf: 'PDF',
};
// 纠正专有名词
var ProperNounsCorrector = /** @class */ (function () {
    function ProperNounsCorrector() {
    }
    ProperNounsCorrector.handle = function (text) {
        var _loop_1 = function (i) {
            if (properNouns.hasOwnProperty(i)) {
                text = text.replace(/\w+/g, function ($) { return $.match(new RegExp("^" + i + "$", 'i')) ? properNouns[i] : $; });
            }
        };
        for (var i in properNouns) {
            _loop_1(i);
        }
        return text;
    };
    ProperNounsCorrector.rules = ['properNouns'];
    return ProperNounsCorrector;
}());
exports.ProperNounsCorrector = ProperNounsCorrector;
exports.default = ProperNounsCorrector;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pangu = __webpack_require__(7);
var utils_1 = __webpack_require__(1);
// 修正空格
var SpaceCorrector = /** @class */ (function () {
    function SpaceCorrector() {
    }
    SpaceCorrector.handle = function (text) {
        // 盘古空格（中文与英文、中文与数字）
        text = pangu.spacing(text);
        // 全角符号前后去空格
        text = text.replace(new RegExp("([ ]*)([" + utils_1.zhSymbols.join('') + "])([ ]*)", 'g'), '$2');
        return text.trim();
    };
    SpaceCorrector.rules = ['space'];
    return SpaceCorrector;
}());
exports.SpaceCorrector = SpaceCorrector;
exports.default = SpaceCorrector;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// 计量单位
var UnitOfMeasurementCorrector = /** @class */ (function () {
    function UnitOfMeasurementCorrector() {
    }
    UnitOfMeasurementCorrector.handle = function (text) {
        // 数字+英文 中间加空格
        text = text.replace(/([0-9])([A-Za-z])/g, '$1 $2');
        // 数字+%° 中间不加空格
        text = text.replace(/([0-9])([ ]*)([%°])/g, '$1$3');
        return text;
    };
    UnitOfMeasurementCorrector.rules = ['unitOfMeasurement'];
    return UnitOfMeasurementCorrector;
}());
exports.UnitOfMeasurementCorrector = UnitOfMeasurementCorrector;
exports.default = UnitOfMeasurementCorrector;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CopyWritingCorrectService_1 = __webpack_require__(6);
var CharacterCorrector_1 = __webpack_require__(0);
exports.CharacterCorrector = CharacterCorrector_1.default;
var ProperNounsCorrector_1 = __webpack_require__(2);
exports.ProperNounsCorrector = ProperNounsCorrector_1.default;
var SpaceCorrector_1 = __webpack_require__(3);
exports.SpaceCorrector = SpaceCorrector_1.default;
var UnitOfMeasurementCorrector_1 = __webpack_require__(4);
exports.UnitOfMeasurementCorrector = UnitOfMeasurementCorrector_1.default;
exports.default = CopyWritingCorrectService_1.CopyWritingCorrectService;
if (typeof window === 'object') {
    window.CopyWritingCorrectService = CopyWritingCorrectService_1.CopyWritingCorrectService;
    window.CopyWritingCorrectors = [
        CharacterCorrector_1.default,
        SpaceCorrector_1.default,
        ProperNounsCorrector_1.default,
        UnitOfMeasurementCorrector_1.default,
    ];
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CharacterCorrector_1 = __webpack_require__(0);
var ProperNounsCorrector_1 = __webpack_require__(2);
var SpaceCorrector_1 = __webpack_require__(3);
var UnitOfMeasurementCorrector_1 = __webpack_require__(4);
var CopyWritingCorrectService = /** @class */ (function () {
    function CopyWritingCorrectService() {
        this.corrects = [
            CharacterCorrector_1.default,
            SpaceCorrector_1.default,
            UnitOfMeasurementCorrector_1.default,
            ProperNounsCorrector_1.default,
        ];
    }
    CopyWritingCorrectService.prototype.addCorrectors = function (correctors) {
        this.corrects = this.corrects.concat(correctors);
    };
    CopyWritingCorrectService.prototype.resetCorrectors = function (correctors) {
        this.corrects = correctors;
    };
    CopyWritingCorrectService.prototype.correct = function (text, rules) {
        for (var _i = 0, _a = this.corrects; _i < _a.length; _i++) {
            var corrector = _a[_i];
            var correctorRules = {};
            if (typeof rules === 'object') {
                for (var rule in corrector.rules) {
                    if (rules[rule]) {
                        correctorRules[rule] = rules[rule];
                    }
                }
            }
            text = corrector.handle(text, correctorRules);
        }
        return text;
    };
    return CopyWritingCorrectService;
}());
exports.CopyWritingCorrectService = CopyWritingCorrectService;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * pangu.js
 * --------
 * @version: 3.3.0
 * @homepage: https://github.com/vinta/pangu.js
 * @license: MIT
 * @author: Vinta Chen <vinta.chen@gmail.com> (https://github.com/vinta)
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/

        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var Pangu = __webpack_require__(1).Pangu; // https://developer.mozilla.org/en/docs/Web/API/Node/nodeType


      var COMMENT_NODE_TYPE = 8;

      var BrowserPangu = function (_Pangu) {
        _inherits(BrowserPangu, _Pangu);

        function BrowserPangu() {
          _classCallCheck(this, BrowserPangu);

          var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BrowserPangu).call(this));

          _this.topTags = /^(html|head|body|#document)$/i;
          _this.ignoreTags = /^(script|code|pre|textarea)$/i;
          _this.spaceSensitiveTags = /^(a|del|pre|s|strike|u)$/i;
          _this.spaceLikeTags = /^(br|hr|i|img|pangu)$/i;
          _this.blockTags = /^(div|h1|h2|h3|h4|h5|h6|p)$/i; // TODO
          // this.ignoreClasses
          // this.ignoreAttributes

          return _this;
        }

        _createClass(BrowserPangu, [{
          key: 'canIgnoreNode',
          value: function canIgnoreNode(node) {
            var parentNode = node.parentNode;

            while (parentNode && parentNode.nodeName && parentNode.nodeName.search(this.topTags) === -1) {
              if (parentNode.nodeName.search(this.ignoreTags) >= 0 || parentNode.isContentEditable || parentNode.getAttribute('g_editable') === 'true') {
                return true;
              }

              parentNode = parentNode.parentNode;
            }

            return false;
          }
        }, {
          key: 'isFirstTextChild',
          value: function isFirstTextChild(parentNode, targetNode) {
            var childNodes = parentNode.childNodes; // 只判斷第一個含有 text 的 node

            for (var i = 0; i < childNodes.length; i++) {
              var childNode = childNodes[i];

              if (childNode.nodeType !== COMMENT_NODE_TYPE && childNode.textContent) {
                return childNode === targetNode;
              }
            }

            return false;
          }
        }, {
          key: 'isLastTextChild',
          value: function isLastTextChild(parentNode, targetNode) {
            var childNodes = parentNode.childNodes; // 只判斷倒數第一個含有 text 的 node

            for (var i = childNodes.length - 1; i > -1; i--) {
              var childNode = childNodes[i];

              if (childNode.nodeType !== COMMENT_NODE_TYPE && childNode.textContent) {
                return childNode === targetNode;
              }
            }

            return false;
          }
        }, {
          key: 'spacingNodeByXPath',
          value: function spacingNodeByXPath(xPathQuery, contextNode) {
            // 因為 xPathQuery 會是用 text() 結尾，所以這些 nodes 會是 text 而不是 DOM element
            // snapshotLength 要配合 XPathResult.ORDERED_NODE_SNAPSHOT_TYPE 使用
            // https://developer.mozilla.org/en-US/docs/DOM/document.evaluate
            // https://developer.mozilla.org/en-US/docs/Web/API/XPathResult
            var textNodes = document.evaluate(xPathQuery, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            var currentTextNode = void 0;
            var nextTextNode = void 0; // 從最下面、最裡面的節點開始，所以是倒序的

            for (var i = textNodes.snapshotLength - 1; i > -1; --i) {
              currentTextNode = textNodes.snapshotItem(i);

              if (this.canIgnoreNode(currentTextNode)) {
                nextTextNode = currentTextNode;
                continue;
              }

              var newText = this.spacing(currentTextNode.data);

              if (currentTextNode.data !== newText) {
                currentTextNode.data = newText;
              } // 處理嵌套的 <tag> 中的文字


              if (nextTextNode) {
                // TODO
                // 現在只是簡單地判斷相鄰的下一個 node 是不是 <br>
                // 萬一遇上嵌套的標籤就不行了
                if (currentTextNode.nextSibling && currentTextNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
                  nextTextNode = currentTextNode;
                  continue;
                } // currentTextNode 的最後一個字 + nextTextNode 的第一個字


                var testText = currentTextNode.data.toString().substr(-1) + nextTextNode.data.toString().substr(0, 1);
                var testNewText = this.spacing(testText);

                if (testNewText !== testText) {
                  // 往上找 nextTextNode 的 parent node
                  // 直到遇到 spaceSensitiveTags
                  // 而且 nextTextNode 必須是第一個 text child
                  // 才能把空格加在 nextTextNode 的前面
                  var nextNode = nextTextNode;

                  while (nextNode.parentNode && nextNode.nodeName.search(this.spaceSensitiveTags) === -1 && this.isFirstTextChild(nextNode.parentNode, nextNode)) {
                    nextNode = nextNode.parentNode;
                  }

                  var currentNode = currentTextNode;

                  while (currentNode.parentNode && currentNode.nodeName.search(this.spaceSensitiveTags) === -1 && this.isLastTextChild(currentNode.parentNode, currentNode)) {
                    currentNode = currentNode.parentNode;
                  }

                  if (currentNode.nextSibling) {
                    if (currentNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
                      nextTextNode = currentTextNode;
                      continue;
                    }
                  }

                  if (currentNode.nodeName.search(this.blockTags) === -1) {
                    if (nextNode.nodeName.search(this.spaceSensitiveTags) === -1) {
                      if (nextNode.nodeName.search(this.ignoreTags) === -1 && nextNode.nodeName.search(this.blockTags) === -1) {
                        if (nextTextNode.previousSibling) {
                          if (nextTextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                            nextTextNode.data = ' ' + nextTextNode.data;
                          }
                        } else {
                          // dirty hack
                          if (!this.canIgnoreNode(nextTextNode)) {
                            nextTextNode.data = ' ' + nextTextNode.data;
                          }
                        }
                      }
                    } else if (currentNode.nodeName.search(this.spaceSensitiveTags) === -1) {
                      currentTextNode.data = currentTextNode.data + ' ';
                    } else {
                      var panguSpace = document.createElement('pangu');
                      panguSpace.innerHTML = ' '; // 避免一直被加空格

                      if (nextNode.previousSibling) {
                        if (nextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                          nextNode.parentNode.insertBefore(panguSpace, nextNode);
                        }
                      } else {
                        nextNode.parentNode.insertBefore(panguSpace, nextNode);
                      } // TODO
                      // 主要是想要避免在元素（通常都是 <li>）的開頭加空格
                      // 這個做法有點蠢，但是不管還是先硬上


                      if (!panguSpace.previousElementSibling) {
                        if (panguSpace.parentNode) {
                          panguSpace.parentNode.removeChild(panguSpace);
                        }
                      }
                    }
                  }
                }
              }

              nextTextNode = currentTextNode;
            }
          }
        }, {
          key: 'spacingNode',
          value: function spacingNode(contextNode) {
            var xPathQuery = './/*/text()[normalize-space(.)]';
            this.spacingNodeByXPath(xPathQuery, contextNode);
          }
        }, {
          key: 'spacingElementById',
          value: function spacingElementById(idName) {
            var xPathQuery = 'id("' + idName + '")//text()';
            this.spacingNodeByXPath(xPathQuery, document);
          }
        }, {
          key: 'spacingElementByClassName',
          value: function spacingElementByClassName(className) {
            var xPathQuery = '//*[contains(concat(" ", normalize-space(@class), " "), "' + className + '")]//text()';
            this.spacingNodeByXPath(xPathQuery, document);
          }
        }, {
          key: 'spacingElementByTagName',
          value: function spacingElementByTagName(tagName) {
            var xPathQuery = '//' + tagName + '//text()';
            this.spacingNodeByXPath(xPathQuery, document);
          }
        }, {
          key: 'spacingPageTitle',
          value: function spacingPageTitle() {
            var xPathQuery = '/html/head/title/text()';
            this.spacingNodeByXPath(xPathQuery, document);
          }
        }, {
          key: 'spacingPageBody',
          value: function spacingPageBody() {
            // // >> 任意位置的節點
            // . >> 當前節點
            // .. >> 父節點
            // [] >> 條件
            // text() >> 節點的文字內容，例如 hello 之於 <tag>hello</tag>
            //
            // [@contenteditable]
            // 帶有 contenteditable 屬性的節點
            //
            // normalize-space(.)
            // 當前節點的頭尾的空白字元都會被移除，大於兩個以上的空白字元會被置換成單一空白
            // https://developer.mozilla.org/en-US/docs/XPath/Functions/normalize-space
            //
            // name(..)
            // 父節點的名稱
            // https://developer.mozilla.org/en-US/docs/XPath/Functions/name
            //
            // translate(string, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz")
            // 將 string 轉換成小寫，因為 XML 是 case-sensitive 的
            // https://developer.mozilla.org/en-US/docs/XPath/Functions/translate
            //
            // 1. 處理 <title>
            // 2. 處理 <body> 底下的節點
            // 3. 略過 contentEditable 的節點
            // 4. 略過特定節點，例如 <script> 和 <style>
            //
            // 注意，以下的 query 只會取出各節點的 text 內容！
            var xPathQuery = '/html/body//*/text()[normalize-space(.)]';
            var _arr = ['script', 'style', 'textarea'];

            for (var _i = 0; _i < _arr.length; _i++) {
              var tag = _arr[_i]; // 理論上這幾個 tag 裡面不會包含其他 tag
              // 所以可以直接用 .. 取父節點
              // ex: [translate(name(..), "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz") != "script"]

              xPathQuery += '[translate(name(..),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")!="' + tag + '"]';
            }

            this.spacingNodeByXPath(xPathQuery, document);
          } // TODO: 支援 callback 和 promise

        }, {
          key: 'spacingPage',
          value: function spacingPage() {
            this.spacingPageTitle();
            this.spacingPageBody();
          }
        }]);

        return BrowserPangu;
      }(Pangu);

      var pangu = new BrowserPangu();
      exports = module.exports = pangu;
      exports.Pangu = BrowserPangu;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports) {
      'use strict';

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      } // CJK is short for Chinese, Japanese and Korean.
      //
      // The constant cjk contains following Unicode blocks:
      // 	\u2e80-\u2eff CJK Radicals Supplement
      // 	\u2f00-\u2fdf Kangxi Radicals
      // 	\u3040-\u309f Hiragana
      // 	\u30a0-\u30ff Katakana
      // 	\u3100-\u312f Bopomofo
      // 	\u3200-\u32ff Enclosed CJK Letters and Months
      // 	\u3400-\u4dbf CJK Unified Ideographs Extension A
      // 	\u4e00-\u9fff CJK Unified Ideographs
      // 	\uf900-\ufaff CJK Compatibility Ideographs
      //
      // For more information about Unicode blocks, see
      // 	http://unicode-table.com/en/
      //  https://github.com/vinta/pangu
      // ANS is short for Alphabets, Numbers and Symbols (`~!@#$%^&*()-_=+[]{}\|;:'",<.>/?).
      //
      // CAUTION: those ANS in following constants do not contain all symbols above.
      // cjkQuote >> 跟 Go 版差了一個 '
      // quoteCJK >> 跟 Go 版差了一個 '


      var cjkQuote = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(["])/g;
      var quoteCJK = /(["])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g;
      var fixQuote = /(["']+)(\s*)(.+?)(\s*)(["']+)/g;
      var fixSingleQuote = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])( )(')([A-Za-z])/g;
      var hashANSCJKhash = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(#)([A-Za-z0-9\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]+)(#)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g;
      var cjkHash = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(#([^ ]))/g;
      var hashCJK = /(([^ ])#)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g;
      var cjkOperatorANS = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\+\-\*\/=&\\|<>])([A-Za-z0-9])/g;
      var ansOperatorCJK = /([A-Za-z0-9])([\+\-\*\/=&\\|<>])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g;
      var cjkBracketCJK = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\(\[\{<\u201c]+(.*?)[\)\]\}>\u201d]+)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g;
      var cjkBracket = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\(\[\{<\u201c>])/g;
      var bracketCJK = /([\)\]\}>\u201d<])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g;
      var fixBracket = /([\(\[\{<\u201c]+)(\s*)(.+?)(\s*)([\)\]\}>\u201d]+)/;
      var fixSymbol = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([~!;:,\.\?\u2026])([A-Za-z0-9])/g;
      var cjkANS = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([A-Za-z0-9`\$%\^&\*\-=\+\\\|/@\u00a1-\u00ff\u2022\u2027\u2150-\u218f])/g;
      var ansCJK = /([A-Za-z0-9`~\$%\^&\*\-=\+\\\|/!;:,\.\?\u00a1-\u00ff\u2022\u2026\u2027\u2150-\u218f])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g;

      var Pangu = function () {
        function Pangu() {
          _classCallCheck(this, Pangu);
        }

        _createClass(Pangu, [{
          key: 'spacing',
          value: function spacing(text) {
            var newText = text;
            newText = newText.replace(cjkQuote, '$1 $2');
            newText = newText.replace(quoteCJK, '$1 $2');
            newText = newText.replace(fixQuote, '$1$3$5');
            newText = newText.replace(fixSingleQuote, '$1$3$4');
            newText = newText.replace(hashANSCJKhash, '$1 $2$3$4 $5');
            newText = newText.replace(cjkHash, '$1 $2');
            newText = newText.replace(hashCJK, '$1 $3');
            newText = newText.replace(cjkOperatorANS, '$1 $2 $3');
            newText = newText.replace(ansOperatorCJK, '$1 $2 $3');
            var oldText = newText;
            var tmpText = newText.replace(cjkBracketCJK, '$1 $2 $4');
            newText = tmpText;

            if (oldText === tmpText) {
              newText = newText.replace(cjkBracket, '$1 $2');
              newText = newText.replace(bracketCJK, '$1 $2');
            }

            newText = newText.replace(fixBracket, '$1$3$5');
            newText = newText.replace(fixSymbol, '$1$2 $3');
            newText = newText.replace(cjkANS, '$1 $2');
            newText = newText.replace(ansCJK, '$1 $2');
            return newText;
          }
        }, {
          key: 'spacingText',
          value: function spacingText(text) {
            var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

            try {
              var newText = this.spacing(text);
              callback(null, newText);
            } catch (err) {
              callback(err);
            }
          }
        }]);

        return Pangu;
      }();

      var pangu = new Pangu();
      exports = module.exports = pangu;
      exports.Pangu = Pangu;
      /***/
    }
    /******/
    ])
  );
});

;

/***/ })
/******/ ]);
});
//# sourceMappingURL=copywriting-correct.js.map