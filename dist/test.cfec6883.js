// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\n.box * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  .box *::before, .box *::after{\n      box-sizing: border-box;\n  }\n  body {\n    position: relative;\n  }\n  .box {\n    width: 400px;\n    min-height: 50vh;\n    position: relative;\n    left: 50%;\n    top: 100px;\n    margin-left: -200px;\n  }\n  .box .head {\n    border: 1px solid #ccc;\n    width: 210px;\n    height: 195px;\n    background: #218ec9;\n    position: relative;\n    margin-left: auto;\n    margin-right: auto;\n    top: 30px;\n    border-radius: 50%;\n  }\n  .box .head .face {\n    width: 180px;\n    height: 168px;\n    border: 1px solid #ccc;\n    border-radius: 49%;\n    margin-left: auto;\n    margin-right: auto;\n    top: 26px;\n    position: relative;\n    background: #fff;\n  }\n  .box .head .face .eye_box {\n    width: 120px;\n    height: 50px;\n    margin-left: 30px;\n    top: 0;\n    position: relative;\n  }\n  .box .head .face .eye_box .eye:first-child {\n    margin-right: 5px;\n  }\n  .box .head .face .eye_box .eye {\n    border: 1px solid #889977;\n    width: 45px;\n    height: 50px;\n    border-radius: 50%;\n    background: #fff;\n    position: relative;\n    float: left;\n    left: 10px;\n    top: -5px;\n    margin: 0 auto;\n  }\n  @keyframes move_eye {\n    0% {\n      transform: translate(0px);\n    }\n    60% {\n      transform: translate(1px);\n    }\n    80% {\n      transform: translate(-1px);\n    }\n    100% {\n      transform: translate(0px);\n    }\n  }\n  .eye::after {\n    animation: move_eye 300ms infinite;\n  }\n  .box .head .face .eye_box .eye::after {\n    content: \"\";\n    border: 7px solid black;\n    width: 3px;\n    height: 6px;\n    border-radius: 50%;\n    top: 16px;\n    left: 25px;\n    position: relative;\n    display: block;\n    background: #fff;\n  }\n  .box .head .face .eye_box::after {\n    content: \"\";\n    border: 12px solid red;\n    width: 5px;\n    height: 5px;\n    margin: 0 auto;\n    position: relative;\n    display: block;\n    border-radius: 50%;\n    top: 30px;\n    left: -1px;\n    background: #fff;\n  }\n  .box .head .face::after {\n    content: \"\";\n    width: 2px;\n    height: 58px;\n    border: 1px solid #889977;\n    position: absolute;\n    margin: 0 auto;\n    top: 59px;\n    left: 87px;\n    background: black;\n    z-index: 3;\n  }\n  .box .head .face .line {\n    border-top: 3px solid;\n    width: 55px;\n    height: 10px;\n    position: absolute;\n    z-index: 3;\n  }\n  .box .head .face .line.L1 {\n    top: 59px;\n    left: 24px;\n    transform: rotate(11deg);\n  }\n  .box .head .face .line.L2 {\n    top: 76px;\n    left: 24px;\n    transform: rotate(1deg);\n  }\n  .box .head .face .line.L3 {\n    top: 94px;\n    left: 24px;\n    transform: rotate(350deg);\n  }\n  .box .head .face .line.R1 {\n    top: 59px;\n    right: 24px;\n    transform: rotate(-11deg);\n  }\n  .box .head .face .line.R2 {\n    top: 76px;\n    right: 24px;\n    transform: rotate(1deg);\n  }\n  .box .head .face .line.R3 {\n    top: 94px;\n    right: 24px;\n    transform: rotate(11deg);\n  }\n  .box .head .mouth {\n    border: 1px solid red;\n    width: 120px;\n    height: 60px;\n    border-radius: 90%;\n    background: red;\n    top: 124px;\n    left: 45px;\n    position: absolute;\n    overflow: hidden;\n    z-index: 1;\n  }\n  .box .head::before {\n    content: \"\";\n    z-index: 2;\n    width: 180px;\n    height: 60px;\n    position: absolute;\n    background: #fff;\n    top: 86px;\n    left: 14px;\n    border-radius: 90%;\n  }\n  .box .head::after {\n    display: block;\n    border-radius: 70%;\n    content: \"\";\n    width: 65px;\n    height: 28px;\n    border: 1px solid #889977;\n    position: relative;\n    margin: 0 auto;\n    top: -14px;\n    left: 1px;\n    background: #c77550;\n    z-index: 2;\n  }\n  ";
exports.default = string;
},{}],"test.js":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 50,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};

player.init();
},{"./css.js":"css.js"}],"C:\\Users\\DELL\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '61430' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\DELL\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.cfec6883.map