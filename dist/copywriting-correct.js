!function(e,u){"object"==typeof exports&&"object"==typeof module?module.exports=u():"function"==typeof define&&define.amd?define("copywriting-correct",[],u):"object"==typeof exports?exports["copywriting-correct"]=u():e["copywriting-correct"]=u()}(window,function(){return function(e){var u={};function t(r){if(u[r])return u[r].exports;var a=u[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=u,t.d=function(e,u,r){t.o(e,u)||Object.defineProperty(e,u,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,u){if(1&u&&(e=t(e)),8&u)return e;if(4&u&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&u&&"string"!=typeof e)for(var a in e)t.d(r,a,function(u){return e[u]}.bind(null,a));return r},t.n=function(e){var u=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(u,"a",u),u},t.o=function(e,u){return Object.prototype.hasOwnProperty.call(e,u)},t.p="/",t(t.s=5)}([function(e,u,t){"use strict";Object.defineProperty(u,"__esModule",{value:!0});var r=t(1),a=function(){function e(){}return e.handle=function(e){return e=(e=(e=(e=(e=(e=e.replace(new RegExp("["+Object.keys(r.fullWidthChars).join("")+"]","g"),function(e){return r.fullWidthChars[e]})).replace(/([\u4e00-\u9fa5])[\.。]{2,}/g,"$1……")).replace(new RegExp("([一-龥"+r.zhSymbols.join("")+"])(["+Object.keys(r.dotMarks).join("")+"])","g"),function(e,u,t){return u+r.dotMarks[t]})).replace(new RegExp("(["+Object.keys(r.labelMarks).join("")+"])([一-龥])","g"),function(e,u,t){return r.labelMarks[u]+t})).replace(new RegExp("([一-龥])(["+Object.keys(r.labelMarks).join("")+"])","g"),function(e,u,t){return u+r.labelMarks[t]})).replace(/([！？])([！？]*)/g,"$1")},e.rules=["character"],e}();u.CharacterCorrector=a,u.default=a},function(e,u,t){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.fullWidthChars={"０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","Ａ":"A","Ｂ":"B","Ｃ":"C","Ｄ":"D","Ｅ":"E","Ｆ":"F","Ｇ":"G","Ｈ":"H","Ｉ":"I","Ｊ":"J","Ｋ":"K","Ｌ":"L","Ｍ":"M","Ｎ":"N","Ｏ":"O","Ｐ":"P","Ｑ":"Q","Ｒ":"R","Ｓ":"S","Ｔ":"T","Ｕ":"U","Ｖ":"V","Ｗ":"W","Ｘ":"X","Ｙ":"Y","Ｚ":"Z","ａ":"a","ｂ":"b","ｃ":"c","ｄ":"d","ｅ":"e","ｆ":"f","ｇ":"g","ｈ":"h","ｉ":"i","ｊ":"j","ｋ":"k","ｌ":"l","ｍ":"m","ｎ":"n","ｏ":"o","ｐ":"p","ｑ":"q","ｒ":"r","ｓ":"s","ｔ":"t","ｕ":"u","ｖ":"v","ｗ":"w","ｘ":"x","ｙ":"y","ｚ":"z","－":"-"," ":" ","／":"/","％":"%","＃":"#","＠":"@","＆":"&","＜":"<","＞":">","［":"[","］":"]","｛":"{","｝":"}","＼":"\\","｜":"|","＋":"+","＝":"=","＿":"_","＾":"^","￣":"~","｀":"`"},u.dotMarks={"!":"！","?":"？",".":"。",",":"，",":":"：",";":"；"},u.labelMarks={"(":"（",")":"）"},u.zhSymbols=["。","？","！","，","、","；","：","「","」","『","』","‘","’","“","”","（","）","〔","〕","【","】","…","–","—","．","《","》","〈","〉"]},function(e,u,t){"use strict";Object.defineProperty(u,"__esModule",{value:!0});var r={ruby:"Ruby",mri:"MRI",rails:"Rails",gem:"Gem",rubygems:"RubyGems",rubyonrails:"Ruby on Rails",ror:"Ruby on Rails",rubyconf:"RubyConf",railsconf:"RailsConf",rubytuesday:"Ruby Tuesday",coffeescript:"CoffeeScript",scss:"SCSS",sass:"Sass",railscasts:"RailsCasts",execjs:"ExecJS",cocoapods:"CocoaPods",rack:"Rack",sinatra:"Sinatra",grape:"Grape",unicorn:"Unicorn",capistrano:"Capistrano",puppet:"Puppet",vagrant:"Vagrant",chef:"Chef",passenger:"Passenger",nodejs:"Node.js",npm:"NPM",php:"PHP",pear:"Pear",laravel:"Laravel",lumen:"Lumen",laravel4:"Laravel 4",laravel5:"Laravel 5",traits:"Traits",composer:"Composer",homestead:"Homestead",ioc:"IoC",phpspec:"PHPSpec",codeception:"Codeception",thinkphp:"ThinkPHP",afnetworking:"AFNetworking",reactivecocoa:"ReactiveCocoa",three20:"Three20",ssh:"SSH",web:"Web",api:"API",css:"CSS",html:"HTML",json:"JSON",jsonp:"JSONP",xml:"xml",yaml:"YAML",yml:"YAML",ini:"INI",csv:"CSV",soap:"SOAP",ajax:"Ajax",messagepack:"MessagePack",javascript:"JavaScript",js:"JS",png:"PNG",dsl:"DSL",tdd:"TDD",bdd:"BDD",cgi:"CGI","asp.net":"ASP.NET",".net":".NET",rest:"REST",orm:"ORM",oauth:"OAuth",oauth2:"OAuth2",i18n:"I18N",markdown:"Markdown",amazon:"Amazon",aws:"AWS",facebook:"Facebook",github:"GitHub",gist:"Gist",ruby_china:"Ruby China","ruby-china":"Ruby China",rubychina:"Ruby China",phphub:"PHPHub",v2ex:"V2EX",hackernews:"Hacker News",heroku:"Heroku",stackoverflow:"Stack Overflow",stackexchange:"StackExchange",twitter:"Twitter",youtube:"YouTube",slack:"Slack",laracasts:"Laracasts",dynamodb:"DynamoDB",mysql:"MySQL",postgresql:"PostgreSQL",sqlite:"SQLite",memcached:"Memcached",mongodb:"MongoDB",redis:"Redis",rethinkdb:"RethinkDB",elasticsearch:"Elasticsearch",solr:"Solr",sphinx:"Sphinx",window:"Windows",windows:"Windows",linux:"Linux",mac:"Mac",osx:"OS X",ubuntu:"Ubuntu",rhel:"RHEL",centos:"CentOS",archlinux:"Arch Linux",redhat:"RedHat",android:"Android",ios:"iOS",gitlab:"GitLab",gitlabci:"GitLab CI",fontawesome:"Font Awesome",bootstrap:"Bootstrap",less:"Less",jquery:"jQuery",requirejs:"RequireJS",underscore:"Underscore",angularjs:"AngularJS",emberjs:"Ember.js",backbone:"Backbone",seajs:"SeaJS",imagemagick:"ImageMagick",fluentd:"Fluentd",ffmpeg:"FFmpeg",wordpress:"WordPress",drupal:"Drupal",joomla:"Joomla",piwik:"Piwik",discuz:"Discuz!",git:"Git",svn:"SVN",vim:"VIM",emacs:"Emacs",textmate:"TextMate",sublime:"Sublime",rubymine:"RubyMine",sequelpro:"Sequel Pro",virtualbox:"VirtualBox",safari:"Safari",chrome:"Chrome",ie:"IE",firefox:"Firefox",dash:"Dash",termal:"Termal",iterm:"iTerm",iterm2:"iTerm2",iwork:"iWork",itunes:"iTunes",iphoto:"iPhoto",ibook:"iBook",imessage:"iMessage",tweetbot:"TweetBot",sparrow:"Sparrow",photoshop:"Photoshop",office:"Office",word:"Word",excel:"Excel",powerpoint:"PowerPoint",app:"App",iphone:"iPhone",ipad:"iPad",imac:"iMac",macbookpro:"MacBook Pro",macbook:"MacBook",rmbp:"rMBP","wi-fi":"Wi-Fi",wifi:"Wi-Fi",vps:"VPS",vpn:"VPN",arm:"ARM",cpu:"CPU",pdf:"PDF"},a=function(){function e(){}return e.handle=function(e){var u=function(u){r.hasOwnProperty(u)&&(e=e.replace(/\w+/g,function(e){return e.match(new RegExp("^"+u+"$","i"))?r[u]:e}))};for(var t in r)u(t);return e},e.rules=["properNouns"],e}();u.ProperNounsCorrector=a,u.default=a},function(e,u,t){"use strict";Object.defineProperty(u,"__esModule",{value:!0});var r=t(6),a=t(1),f=function(){function e(){}return e.handle=function(e){return(e=(e=r.spacing(e)).replace(new RegExp("([ ]*)(["+a.zhSymbols.join("")+"])([ ]*)","g"),"$2")).trim()},e.rules=["space"],e}();u.SpaceCorrector=f,u.default=f},function(e,u,t){"use strict";Object.defineProperty(u,"__esModule",{value:!0});var r=function(){function e(){}return e.handle=function(e){return e=(e=e.replace(/([0-9])([A-Za-z])/g,"$1 $2")).replace(/([0-9])([ ]*)([%°])/g,"$1$3")},e.rules=["unitOfMeasurement"],e}();u.UnitOfMeasurementCorrector=r,u.default=r},function(e,u,t){"use strict";Object.defineProperty(u,"__esModule",{value:!0});var r=t(0);u.CharacterCorrector=r.default;var a=t(2);u.ProperNounsCorrector=a.default;var f=t(3);u.SpaceCorrector=f.default;var n=t(4);u.UnitOfMeasurementCorrector=n.default;var o=t(7);u.default=o.CopyWritingCorrectService},function(e,u,t){
/*!
 * pangu.js
 * --------
 * @version: 3.3.0
 * @homepage: https://github.com/vinta/pangu.js
 * @license: MIT
 * @author: Vinta Chen <vinta.chen@gmail.com> (https://github.com/vinta)
 */
var r;r=function(){return function(e){var u={};function t(r){if(u[r])return u[r].exports;var a=u[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}return t.m=e,t.c=u,t.p="",t(0)}([function(e,u,t){"use strict";var r=function(){function e(e,u){for(var t=0;t<u.length;t++){var r=u[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(u,t,r){return t&&e(u.prototype,t),r&&e(u,r),u}}();var a=t(1).Pangu,f=function(e){function u(){!function(e,u){if(!(e instanceof u))throw new TypeError("Cannot call a class as a function")}(this,u);var e=function(e,u){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!u||"object"!=typeof u&&"function"!=typeof u?e:u}(this,Object.getPrototypeOf(u).call(this));return e.topTags=/^(html|head|body|#document)$/i,e.ignoreTags=/^(script|code|pre|textarea)$/i,e.spaceSensitiveTags=/^(a|del|pre|s|strike|u)$/i,e.spaceLikeTags=/^(br|hr|i|img|pangu)$/i,e.blockTags=/^(div|h1|h2|h3|h4|h5|h6|p)$/i,e}return function(e,u){if("function"!=typeof u&&null!==u)throw new TypeError("Super expression must either be null or a function, not "+typeof u);e.prototype=Object.create(u&&u.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(e,u):e.__proto__=u)}(u,a),r(u,[{key:"canIgnoreNode",value:function(e){for(var u=e.parentNode;u&&u.nodeName&&-1===u.nodeName.search(this.topTags);){if(u.nodeName.search(this.ignoreTags)>=0||u.isContentEditable||"true"===u.getAttribute("g_editable"))return!0;u=u.parentNode}return!1}},{key:"isFirstTextChild",value:function(e,u){for(var t=e.childNodes,r=0;r<t.length;r++){var a=t[r];if(8!==a.nodeType&&a.textContent)return a===u}return!1}},{key:"isLastTextChild",value:function(e,u){for(var t=e.childNodes,r=t.length-1;r>-1;r--){var a=t[r];if(8!==a.nodeType&&a.textContent)return a===u}return!1}},{key:"spacingNodeByXPath",value:function(e,u){for(var t=document.evaluate(e,u,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),r=void 0,a=void 0,f=t.snapshotLength-1;f>-1;--f)if(r=t.snapshotItem(f),this.canIgnoreNode(r))a=r;else{var n=this.spacing(r.data);if(r.data!==n&&(r.data=n),a){if(r.nextSibling&&r.nextSibling.nodeName.search(this.spaceLikeTags)>=0){a=r;continue}var o=r.data.toString().substr(-1)+a.data.toString().substr(0,1);if(this.spacing(o)!==o){for(var i=a;i.parentNode&&-1===i.nodeName.search(this.spaceSensitiveTags)&&this.isFirstTextChild(i.parentNode,i);)i=i.parentNode;for(var s=r;s.parentNode&&-1===s.nodeName.search(this.spaceSensitiveTags)&&this.isLastTextChild(s.parentNode,s);)s=s.parentNode;if(s.nextSibling&&s.nextSibling.nodeName.search(this.spaceLikeTags)>=0){a=r;continue}if(-1===s.nodeName.search(this.blockTags))if(-1===i.nodeName.search(this.spaceSensitiveTags))-1===i.nodeName.search(this.ignoreTags)&&-1===i.nodeName.search(this.blockTags)&&(a.previousSibling?-1===a.previousSibling.nodeName.search(this.spaceLikeTags)&&(a.data=" "+a.data):this.canIgnoreNode(a)||(a.data=" "+a.data));else if(-1===s.nodeName.search(this.spaceSensitiveTags))r.data=r.data+" ";else{var c=document.createElement("pangu");c.innerHTML=" ",i.previousSibling?-1===i.previousSibling.nodeName.search(this.spaceLikeTags)&&i.parentNode.insertBefore(c,i):i.parentNode.insertBefore(c,i),c.previousElementSibling||c.parentNode&&c.parentNode.removeChild(c)}}}a=r}}},{key:"spacingNode",value:function(e){this.spacingNodeByXPath(".//*/text()[normalize-space(.)]",e)}},{key:"spacingElementById",value:function(e){var u='id("'+e+'")//text()';this.spacingNodeByXPath(u,document)}},{key:"spacingElementByClassName",value:function(e){var u='//*[contains(concat(" ", normalize-space(@class), " "), "'+e+'")]//text()';this.spacingNodeByXPath(u,document)}},{key:"spacingElementByTagName",value:function(e){var u="//"+e+"//text()";this.spacingNodeByXPath(u,document)}},{key:"spacingPageTitle",value:function(){this.spacingNodeByXPath("/html/head/title/text()",document)}},{key:"spacingPageBody",value:function(){for(var e="/html/body//*/text()[normalize-space(.)]",u=["script","style","textarea"],t=0;t<u.length;t++){e+='[translate(name(..),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")!="'+u[t]+'"]'}this.spacingNodeByXPath(e,document)}},{key:"spacingPage",value:function(){this.spacingPageTitle(),this.spacingPageBody()}}]),u}(),n=new f;(e.exports=n).Pangu=f},function(e,u){"use strict";var t=function(){function e(e,u){for(var t=0;t<u.length;t++){var r=u[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(u,t,r){return t&&e(u.prototype,t),r&&e(u,r),u}}();var r=/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(["])/g,a=/(["])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,f=/(["']+)(\s*)(.+?)(\s*)(["']+)/g,n=/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])( )(')([A-Za-z])/g,o=/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(#)([A-Za-z0-9\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]+)(#)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,i=/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(#([^ ]))/g,s=/(([^ ])#)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,c=/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\+\-\*\/=&\\|<>])([A-Za-z0-9])/g,l=/([A-Za-z0-9])([\+\-\*\/=&\\|<>])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,p=/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\(\[\{<\u201c]+(.*?)[\)\]\}>\u201d]+)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,d=/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\(\[\{<\u201c>])/g,h=/([\)\]\}>\u201d<])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,g=/([\(\[\{<\u201c]+)(\s*)(.+?)(\s*)([\)\]\}>\u201d]+)/,b=/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([~!;:,\.\?\u2026])([A-Za-z0-9])/g,m=/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([A-Za-z0-9`\$%\^&\*\-=\+\\\|\/@\u00a1-\u00ff\u2022\u2027\u2150-\u218f])/g,y=/([A-Za-z0-9`~\$%\^&\*\-=\+\\\|\/!;:,\.\?\u00a1-\u00ff\u2022\u2026\u2027\u2150-\u218f])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,v=function(){function e(){!function(e,u){if(!(e instanceof u))throw new TypeError("Cannot call a class as a function")}(this,e)}return t(e,[{key:"spacing",value:function(e){var u=e,t=u=(u=(u=(u=(u=(u=(u=(u=(u=u.replace(r,"$1 $2")).replace(a,"$1 $2")).replace(f,"$1$3$5")).replace(n,"$1$3$4")).replace(o,"$1 $2$3$4 $5")).replace(i,"$1 $2")).replace(s,"$1 $3")).replace(c,"$1 $2 $3")).replace(l,"$1 $2 $3"),v=u.replace(p,"$1 $2 $4");return u=v,t===v&&(u=(u=u.replace(d,"$1 $2")).replace(h,"$1 $2")),u=(u=(u=(u=u.replace(g,"$1$3$5")).replace(b,"$1$2 $3")).replace(m,"$1 $2")).replace(y,"$1 $2")}},{key:"spacingText",value:function(e){var u=arguments.length<=1||void 0===arguments[1]?function(){}:arguments[1];try{u(null,this.spacing(e))}catch(e){u(e)}}}]),e}(),k=new v;(e.exports=k).Pangu=v}])},e.exports=r()},function(e,u,t){"use strict";Object.defineProperty(u,"__esModule",{value:!0});var r=t(0),a=t(2),f=t(3),n=t(4),o=function(){function e(){this.corrects=[r.default,f.default,n.default,a.default]}return e.prototype.addCorrectors=function(e){this.corrects=this.corrects.concat(e)},e.prototype.resetCorrectors=function(e){this.corrects=e},e.prototype.correct=function(e,u){for(var t=0,r=this.corrects;t<r.length;t++){var a=r[t],f={};if("object"==typeof u)for(var n in a.rules)u[n]&&(f[n]=u[n]);e=a.handle(e,f)}return e},e}();u.CopyWritingCorrectService=o}])});
//# sourceMappingURL=copywriting-correct.js.map