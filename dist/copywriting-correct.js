/*!
 * copywriting-correct - 中英文文案排版纠正器
 * --------
 * @version 1.0.6
 * @homepage: https://github.com/rikakomoe/copywriting-correct#readme
 * @license MIT
 * @author rikakomoe
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("copywriting-correct", [], factory);
	else if(typeof exports === 'object')
		exports["copywriting-correct"] = factory();
	else
		root["copywriting-correct"] = factory();
})((typeof window !== 'undefined' ? window : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
    '·', '/',
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
var pangu = __webpack_require__(6);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * pangu.js
 * --------
 * @version: 4.0.7
 * @homepage: https://github.com/vinta/pangu.js
 * @license: MIT
 * @author: Vinta Chen <vinta.chen@gmail.com> (https://github.com/vinta)
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(window, function () {
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
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
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

        module.l = true;
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
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      (function (global, factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else { var mod; }
      })(this, function () {
        "use strict";

        function _typeof(obj) {
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }

        var _require = __webpack_require__(1),
            Pangu = _require.Pangu;

        function once(func) {
          var _this = this,
              _arguments = arguments;

          var executed = false;
          return function () {
            if (executed) {
              return;
            }

            var self = _this;
            executed = true;
            func.apply(self, _arguments);
          };
        }

        function debounce(func, delay, mustRunDelay) {
          var _this2 = this,
              _arguments2 = arguments;

          var timer = null;
          var startTime = null;
          return function () {
            var self = _this2;
            var args = _arguments2;
            var currentTime = +new Date();
            clearTimeout(timer);

            if (!startTime) {
              startTime = currentTime;
            }

            if (currentTime - startTime >= mustRunDelay) {
              func.apply(self, args);
              startTime = currentTime;
            } else {
              timer = setTimeout(function () {
                func.apply(self, args);
              }, delay);
            }
          };
        }

        var BrowserPangu = function (_Pangu) {
          _inherits(BrowserPangu, _Pangu);

          function BrowserPangu() {
            var _this3;

            _classCallCheck(this, BrowserPangu);

            _this3 = _possibleConstructorReturn(this, _getPrototypeOf(BrowserPangu).call(this));
            _this3.blockTags = /^(div|p|h1|h2|h3|h4|h5|h6)$/i;
            _this3.ignoredTags = /^(script|code|pre|textarea)$/i;
            _this3.presentationalTags = /^(b|code|del|em|i|s|strong)$/i;
            _this3.spaceLikeTags = /^(br|hr|i|img|pangu)$/i;
            _this3.spaceSensitiveTags = /^(a|del|pre|s|strike|u)$/i;
            _this3.isAutoSpacingPageExecuted = false;
            return _this3;
          }

          _createClass(BrowserPangu, [{
            key: "isContentEditable",
            value: function isContentEditable(node) {
              return node.isContentEditable || node.getAttribute && node.getAttribute('g_editable') === 'true';
            }
          }, {
            key: "isSpecificTag",
            value: function isSpecificTag(node, tagRegex) {
              return node && node.nodeName && node.nodeName.search(tagRegex) >= 0;
            }
          }, {
            key: "isInsideSpecificTag",
            value: function isInsideSpecificTag(node, tagRegex) {
              var checkCurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
              var currentNode = node;

              if (checkCurrent) {
                if (this.isSpecificTag(currentNode, tagRegex)) {
                  return true;
                }
              }

              while (currentNode.parentNode) {
                currentNode = currentNode.parentNode;

                if (this.isSpecificTag(currentNode, tagRegex)) {
                  return true;
                }
              }

              return false;
            }
          }, {
            key: "canIgnoreNode",
            value: function canIgnoreNode(node) {
              var currentNode = node;

              if (currentNode && (this.isSpecificTag(currentNode, this.ignoredTags) || this.isContentEditable(currentNode))) {
                return true;
              }

              while (currentNode.parentNode) {
                currentNode = currentNode.parentNode;

                if (currentNode && (this.isSpecificTag(currentNode, this.ignoredTags) || this.isContentEditable(currentNode))) {
                  return true;
                }
              }

              return false;
            }
          }, {
            key: "isFirstTextChild",
            value: function isFirstTextChild(parentNode, targetNode) {
              var childNodes = parentNode.childNodes;

              for (var i = 0; i < childNodes.length; i++) {
                var childNode = childNodes[i];

                if (childNode.nodeType !== Node.COMMENT_NODE && childNode.textContent) {
                  return childNode === targetNode;
                }
              }

              return false;
            }
          }, {
            key: "isLastTextChild",
            value: function isLastTextChild(parentNode, targetNode) {
              var childNodes = parentNode.childNodes;

              for (var i = childNodes.length - 1; i > -1; i--) {
                var childNode = childNodes[i];

                if (childNode.nodeType !== Node.COMMENT_NODE && childNode.textContent) {
                  return childNode === targetNode;
                }
              }

              return false;
            }
          }, {
            key: "spacingNodeByXPath",
            value: function spacingNodeByXPath(xPathQuery, contextNode) {
              if (!(contextNode instanceof Node) || contextNode instanceof DocumentFragment) {
                return;
              }

              var textNodes = document.evaluate(xPathQuery, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
              var currentTextNode;
              var nextTextNode;

              for (var i = textNodes.snapshotLength - 1; i > -1; --i) {
                currentTextNode = textNodes.snapshotItem(i);

                if (this.isSpecificTag(currentTextNode.parentNode, this.presentationalTags) && !this.isInsideSpecificTag(currentTextNode.parentNode, this.ignoredTags)) {
                  var elementNode = currentTextNode.parentNode;

                  if (elementNode.previousSibling) {
                    var previousSibling = elementNode.previousSibling;

                    if (previousSibling.nodeType === Node.TEXT_NODE) {
                      var testText = previousSibling.data.substr(-1) + currentTextNode.data.toString().charAt(0);
                      var testNewText = this.spacing(testText);

                      if (testText !== testNewText) {
                        previousSibling.data = "".concat(previousSibling.data, " ");
                      }
                    }
                  }

                  if (elementNode.nextSibling) {
                    var nextSibling = elementNode.nextSibling;

                    if (nextSibling.nodeType === Node.TEXT_NODE) {
                      var _testText = currentTextNode.data.substr(-1) + nextSibling.data.toString().charAt(0);

                      var _testNewText = this.spacing(_testText);

                      if (_testText !== _testNewText) {
                        nextSibling.data = " ".concat(nextSibling.data);
                      }
                    }
                  }
                }

                if (this.canIgnoreNode(currentTextNode)) {
                  nextTextNode = currentTextNode;
                  continue;
                }

                var newText = this.spacing(currentTextNode.data);

                if (currentTextNode.data !== newText) {
                  currentTextNode.data = newText;
                }

                if (nextTextNode) {
                  if (currentTextNode.nextSibling && currentTextNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
                    nextTextNode = currentTextNode;
                    continue;
                  }

                  var _testText2 = currentTextNode.data.toString().substr(-1) + nextTextNode.data.toString().substr(0, 1);

                  var _testNewText2 = this.spacing(_testText2);

                  if (_testNewText2 !== _testText2) {
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
                        if (nextNode.nodeName.search(this.ignoredTags) === -1 && nextNode.nodeName.search(this.blockTags) === -1) {
                          if (nextTextNode.previousSibling) {
                            if (nextTextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                              nextTextNode.data = " ".concat(nextTextNode.data);
                            }
                          } else {
                            if (!this.canIgnoreNode(nextTextNode)) {
                              nextTextNode.data = " ".concat(nextTextNode.data);
                            }
                          }
                        }
                      } else if (currentNode.nodeName.search(this.spaceSensitiveTags) === -1) {
                        currentTextNode.data = "".concat(currentTextNode.data, " ");
                      } else {
                        var panguSpace = document.createElement('pangu');
                        panguSpace.innerHTML = ' ';

                        if (nextNode.previousSibling) {
                          if (nextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                            nextNode.parentNode.insertBefore(panguSpace, nextNode);
                          }
                        } else {
                          nextNode.parentNode.insertBefore(panguSpace, nextNode);
                        }

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
            key: "spacingNode",
            value: function spacingNode(contextNode) {
              var xPathQuery = './/*/text()[normalize-space(.)]';

              if (contextNode.children && contextNode.children.length === 0) {
                xPathQuery = './/text()[normalize-space(.)]';
              }

              this.spacingNodeByXPath(xPathQuery, contextNode);
            }
          }, {
            key: "spacingElementById",
            value: function spacingElementById(idName) {
              var xPathQuery = "id(\"".concat(idName, "\")//text()");
              this.spacingNodeByXPath(xPathQuery, document);
            }
          }, {
            key: "spacingElementByClassName",
            value: function spacingElementByClassName(className) {
              var xPathQuery = "//*[contains(concat(\" \", normalize-space(@class), \" \"), \"".concat(className, "\")]//text()");
              this.spacingNodeByXPath(xPathQuery, document);
            }
          }, {
            key: "spacingElementByTagName",
            value: function spacingElementByTagName(tagName) {
              var xPathQuery = "//".concat(tagName, "//text()");
              this.spacingNodeByXPath(xPathQuery, document);
            }
          }, {
            key: "spacingPageTitle",
            value: function spacingPageTitle() {
              var xPathQuery = '/html/head/title/text()';
              this.spacingNodeByXPath(xPathQuery, document);
            }
          }, {
            key: "spacingPageBody",
            value: function spacingPageBody() {
              var xPathQuery = '/html/body//*/text()[normalize-space(.)]';
              ['script', 'style', 'textarea'].forEach(function (tag) {
                xPathQuery = "".concat(xPathQuery, "[translate(name(..),\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\",\"abcdefghijklmnopqrstuvwxyz\")!=\"").concat(tag, "\"]");
              });
              this.spacingNodeByXPath(xPathQuery, document);
            }
          }, {
            key: "spacingPage",
            value: function spacingPage() {
              this.spacingPageTitle();
              this.spacingPageBody();
            }
          }, {
            key: "autoSpacingPage",
            value: function autoSpacingPage() {
              var pageDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
              var nodeDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
              var nodeMaxWait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

              if (!(document.body instanceof Node)) {
                return;
              }

              if (this.isAutoSpacingPageExecuted) {
                return;
              }

              this.isAutoSpacingPageExecuted = true;
              var self = this;
              var onceSpacingPage = once(function () {
                self.spacingPage();
              });
              var videos = document.getElementsByTagName('video');

              if (videos.length === 0) {
                setTimeout(function () {
                  onceSpacingPage();
                }, pageDelay);
              } else {
                for (var i = 0; i < videos.length; i++) {
                  var video = videos[i];

                  if (video.readyState === 4) {
                    setTimeout(function () {
                      onceSpacingPage();
                    }, 3000);
                    break;
                  }

                  video.addEventListener('loadeddata', function () {
                    setTimeout(function () {
                      onceSpacingPage();
                    }, 4000);
                  });
                }
              }

              var queue = [];
              var debouncedSpacingNodes = debounce(function () {
                while (queue.length) {
                  var node = queue.shift();

                  if (node) {
                    self.spacingNode(node);
                  }
                }
              }, nodeDelay, {
                'maxWait': nodeMaxWait
              });
              var mutationObserver = new MutationObserver(function (mutations, observer) {
                mutations.forEach(function (mutation) {
                  switch (mutation.type) {
                    case 'childList':
                      mutation.addedNodes.forEach(function (node) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                          queue.push(node);
                        } else if (node.nodeType === Node.TEXT_NODE) {
                          queue.push(node.parentNode);
                        }
                      });
                      break;

                    case 'characterData':
                      var node = mutation.target;

                      if (node.nodeType === Node.TEXT_NODE) {
                        queue.push(node.parentNode);
                      }

                      break;

                    default:
                      break;
                  }
                });
                debouncedSpacingNodes();
              });
              mutationObserver.observe(document.body, {
                characterData: true,
                childList: true,
                subtree: true
              });
            }
          }]);

          return BrowserPangu;
        }(Pangu);

        var pangu = new BrowserPangu();
        module.exports = pangu;
        module.exports.default = pangu;
        module.exports.Pangu = BrowserPangu;
      });
      /***/

    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      (function (global, factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else { var mod; }
      })(this, function () {
        "use strict";

        function _typeof(obj) {
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var CJK = "\u2E80-\u2EFF\u2F00-\u2FDF\u3040-\u309F\u30A0-\u30FA\u30FC-\u30FF\u3100-\u312F\u3200-\u32FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF";
        var ANY_CJK = new RegExp("[".concat(CJK, "]"));
        var CONVERT_TO_FULLWIDTH_CJK_SYMBOLS_CJK = new RegExp("([".concat(CJK, "])[ ]*([\\:]+|\\.)[ ]*([").concat(CJK, "])"), 'g');
        var CONVERT_TO_FULLWIDTH_CJK_SYMBOLS = new RegExp("([".concat(CJK, "])[ ]*([~\\!;,\\?]+)[ ]*"), 'g');
        var DOTS_CJK = new RegExp("([\\.]{2,}|\u2026)([".concat(CJK, "])"), 'g');
        var FIX_CJK_COLON_ANS = new RegExp("([".concat(CJK, "])\\:([A-Z0-9\\(\\)])"), 'g');
        var CJK_QUOTE = new RegExp("([".concat(CJK, "])([`\"\u05F4])"), 'g');
        var QUOTE_CJK = new RegExp("([`\"\u05F4])([".concat(CJK, "])"), 'g');
        var FIX_QUOTE_ANY_QUOTE = /([`"\u05f4]+)[ ]*(.+?)[ ]*([`"\u05f4]+)/g;
        var CJK_SINGLE_QUOTE_BUT_POSSESSIVE = new RegExp("([".concat(CJK, "])('[^s])"), 'g');
        var SINGLE_QUOTE_CJK = new RegExp("(')([".concat(CJK, "])"), 'g');
        var FIX_POSSESSIVE_SINGLE_QUOTE = new RegExp("([A-Za-z0-9".concat(CJK, "])( )('s)"), 'g');
        var HASH_ANS_CJK_HASH = new RegExp("([".concat(CJK, "])(#)([").concat(CJK, "]+)(#)([").concat(CJK, "])"), 'g');
        var CJK_HASH = new RegExp("([".concat(CJK, "])(#([^ ]))"), 'g');
        var HASH_CJK = new RegExp("(([^ ])#)([".concat(CJK, "])"), 'g');
        var CJK_OPERATOR_ANS = new RegExp("([".concat(CJK, "])([\\+\\-\\*\\/=&\\|<>])([A-Za-z0-9])"), 'g');
        var ANS_OPERATOR_CJK = new RegExp("([A-Za-z0-9])([\\+\\-\\*\\/=&\\|<>])([".concat(CJK, "])"), 'g');
        var FIX_SLASH_AS = /([/]) ([a-z\-_\./]+)/g;
        var FIX_SLASH_AS_SLASH = /([/\.])([A-Za-z\-_\./]+) ([/])/g;
        var CJK_LEFT_BRACKET = new RegExp("([".concat(CJK, "])([\\(\\[\\{<>\u201C])"), 'g');
        var RIGHT_BRACKET_CJK = new RegExp("([\\)\\]\\}<>\u201D])([".concat(CJK, "])"), 'g');
        var FIX_LEFT_BRACKET_ANY_RIGHT_BRACKET = /([\(\[\{<\u201c]+)[ ]*(.+?)[ ]*([\)\]\}>\u201d]+)/;
        var ANS_CJK_LEFT_BRACKET_ANY_RIGHT_BRACKET = new RegExp("([A-Za-z0-9".concat(CJK, "])[ ]*([\u201C])([A-Za-z0-9").concat(CJK, "\\-_ ]+)([\u201D])"), 'g');
        var LEFT_BRACKET_ANY_RIGHT_BRACKET_ANS_CJK = new RegExp("([\u201C])([A-Za-z0-9".concat(CJK, "\\-_ ]+)([\u201D])[ ]*([A-Za-z0-9").concat(CJK, "])"), 'g');
        var AN_LEFT_BRACKET = /([A-Za-z0-9])([\(\[\{])/g;
        var RIGHT_BRACKET_AN = /([\)\]\}])([A-Za-z0-9])/g;
        var CJK_ANS = new RegExp("([".concat(CJK, "])([A-Za-z\u0370-\u03FF0-9@\\$%\\^&\\*\\-\\+\\\\=\\|/\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])"), 'g');
        var ANS_CJK = new RegExp("([A-Za-z\u0370-\u03FF0-9~\\$%\\^&\\*\\-\\+\\\\=\\|/!;:,\\.\\?\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])([".concat(CJK, "])"), 'g');
        var S_A = /(%)([A-Za-z])/g;
        var MIDDLE_DOT = /([ ]*)([\u00b7\u2022\u2027])([ ]*)/g;

        var Pangu = function () {
          function Pangu() {
            _classCallCheck(this, Pangu);

            this.version = '4.0.7';
          }

          _createClass(Pangu, [{
            key: "convertToFullwidth",
            value: function convertToFullwidth(symbols) {
              return symbols.replace(/~/g, '～').replace(/!/g, '！').replace(/;/g, '；').replace(/:/g, '：').replace(/,/g, '，').replace(/\./g, '。').replace(/\?/g, '？');
            }
          }, {
            key: "spacing",
            value: function spacing(text) {
              if (typeof text !== 'string') {
                console.warn("spacing(text) only accepts string but got ".concat(_typeof(text)));
                return text;
              }

              if (text.length <= 1 || !ANY_CJK.test(text)) {
                return text;
              }

              var self = this;
              var newText = text;
              newText = newText.replace(CONVERT_TO_FULLWIDTH_CJK_SYMBOLS_CJK, function (match, leftCjk, symbols, rightCjk) {
                var fullwidthSymbols = self.convertToFullwidth(symbols);
                return "".concat(leftCjk).concat(fullwidthSymbols).concat(rightCjk);
              });
              newText = newText.replace(CONVERT_TO_FULLWIDTH_CJK_SYMBOLS, function (match, cjk, symbols) {
                var fullwidthSymbols = self.convertToFullwidth(symbols);
                return "".concat(cjk).concat(fullwidthSymbols);
              });
              newText = newText.replace(DOTS_CJK, '$1 $2');
              newText = newText.replace(FIX_CJK_COLON_ANS, '$1：$2');
              newText = newText.replace(CJK_QUOTE, '$1 $2');
              newText = newText.replace(QUOTE_CJK, '$1 $2');
              newText = newText.replace(FIX_QUOTE_ANY_QUOTE, '$1$2$3');
              newText = newText.replace(CJK_SINGLE_QUOTE_BUT_POSSESSIVE, '$1 $2');
              newText = newText.replace(SINGLE_QUOTE_CJK, '$1 $2');
              newText = newText.replace(FIX_POSSESSIVE_SINGLE_QUOTE, "$1's");
              newText = newText.replace(HASH_ANS_CJK_HASH, '$1 $2$3$4 $5');
              newText = newText.replace(CJK_HASH, '$1 $2');
              newText = newText.replace(HASH_CJK, '$1 $3');
              newText = newText.replace(CJK_OPERATOR_ANS, '$1 $2 $3');
              newText = newText.replace(ANS_OPERATOR_CJK, '$1 $2 $3');
              newText = newText.replace(FIX_SLASH_AS, '$1$2');
              newText = newText.replace(FIX_SLASH_AS_SLASH, '$1$2$3');
              newText = newText.replace(CJK_LEFT_BRACKET, '$1 $2');
              newText = newText.replace(RIGHT_BRACKET_CJK, '$1 $2');
              newText = newText.replace(FIX_LEFT_BRACKET_ANY_RIGHT_BRACKET, '$1$2$3');
              newText = newText.replace(ANS_CJK_LEFT_BRACKET_ANY_RIGHT_BRACKET, '$1 $2$3$4');
              newText = newText.replace(LEFT_BRACKET_ANY_RIGHT_BRACKET_ANS_CJK, '$1$2$3 $4');
              newText = newText.replace(AN_LEFT_BRACKET, '$1 $2');
              newText = newText.replace(RIGHT_BRACKET_AN, '$1 $2');
              newText = newText.replace(CJK_ANS, '$1 $2');
              newText = newText.replace(ANS_CJK, '$1 $2');
              newText = newText.replace(S_A, '$1 $2');
              newText = newText.replace(MIDDLE_DOT, '・');
              return newText;
            }
          }, {
            key: "spacingText",
            value: function spacingText(text) {
              var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
              var newText;

              try {
                newText = this.spacing(text);
              } catch (err) {
                callback(err);
                return;
              }

              callback(null, newText);
            }
          }, {
            key: "spacingTextSync",
            value: function spacingTextSync(text) {
              return this.spacing(text);
            }
          }]);

          return Pangu;
        }();

        var pangu = new Pangu();
        module.exports = pangu;
        module.exports.default = pangu;
        module.exports.Pangu = Pangu;
      });
      /***/

    }])
  );
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CopyWritingCorrectService_1 = __webpack_require__(5);
exports.CopyWritingCorrectService = CopyWritingCorrectService_1.CopyWritingCorrectService;
var CharacterCorrector_1 = __webpack_require__(0);
exports.CharacterCorrector = CharacterCorrector_1.default;
var ProperNounsCorrector_1 = __webpack_require__(2);
exports.ProperNounsCorrector = ProperNounsCorrector_1.default;
var SpaceCorrector_1 = __webpack_require__(3);
exports.SpaceCorrector = SpaceCorrector_1.default;
var UnitOfMeasurementCorrector_1 = __webpack_require__(4);
exports.UnitOfMeasurementCorrector = UnitOfMeasurementCorrector_1.default;
exports.default = CopyWritingCorrectService_1.CopyWritingCorrectService;
(function (global) {
    global.CopyWritingCorrectService = CopyWritingCorrectService_1.CopyWritingCorrectService;
    global.CopyWritingCorrectors = {
        CharacterCorrector: CharacterCorrector_1.default,
        SpaceCorrector: SpaceCorrector_1.default,
        ProperNounsCorrector: ProperNounsCorrector_1.default,
        UnitOfMeasurementCorrector: UnitOfMeasurementCorrector_1.default,
    };
})(typeof window === 'object' ? window : this);


/***/ })
/******/ ]);
});
//# sourceMappingURL=copywriting-correct.js.map