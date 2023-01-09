// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7eCBa":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a5990906dd8c476f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"c7zCl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Chess = exports.validateFen = exports.SQUARES = exports.DEFAULT_POSITION = exports.KING = exports.QUEEN = exports.ROOK = exports.BISHOP = exports.KNIGHT = exports.PAWN = exports.BLACK = exports.WHITE = void 0;
/*
 * Copyright (c) 2022, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *----------------------------------------------------------------------------*/ exports.WHITE = "w";
exports.BLACK = "b";
exports.PAWN = "p";
exports.KNIGHT = "n";
exports.BISHOP = "b";
exports.ROOK = "r";
exports.QUEEN = "q";
exports.KING = "k";
exports.DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const EMPTY = -1;
const FLAGS = {
    NORMAL: "n",
    CAPTURE: "c",
    BIG_PAWN: "b",
    EP_CAPTURE: "e",
    PROMOTION: "p",
    KSIDE_CASTLE: "k",
    QSIDE_CASTLE: "q"
};
// prettier-ignore
exports.SQUARES = [
    "a8",
    "b8",
    "c8",
    "d8",
    "e8",
    "f8",
    "g8",
    "h8",
    "a7",
    "b7",
    "c7",
    "d7",
    "e7",
    "f7",
    "g7",
    "h7",
    "a6",
    "b6",
    "c6",
    "d6",
    "e6",
    "f6",
    "g6",
    "h6",
    "a5",
    "b5",
    "c5",
    "d5",
    "e5",
    "f5",
    "g5",
    "h5",
    "a4",
    "b4",
    "c4",
    "d4",
    "e4",
    "f4",
    "g4",
    "h4",
    "a3",
    "b3",
    "c3",
    "d3",
    "e3",
    "f3",
    "g3",
    "h3",
    "a2",
    "b2",
    "c2",
    "d2",
    "e2",
    "f2",
    "g2",
    "h2",
    "a1",
    "b1",
    "c1",
    "d1",
    "e1",
    "f1",
    "g1",
    "h1"
];
const BITS = {
    NORMAL: 1,
    CAPTURE: 2,
    BIG_PAWN: 4,
    EP_CAPTURE: 8,
    PROMOTION: 16,
    KSIDE_CASTLE: 32,
    QSIDE_CASTLE: 64
};
// NOTES ABOUT 0x88 MOVE GENERATION ALGORITHM
// ----------------------------------------------------------------------------
// From https://github.com/jhlywa/chess.js/issues/230
//
// A lot of people are confused when they first see the internal representation
// of chess.js. It uses the 0x88 Move Generation Algorithm which internally
// stores the board as an 8x16 array. This is purely for efficiency but has a
// couple of interesting benefits:
//
// 1. 0x88 offers a very inexpensive "off the board" check. Bitwise AND (&) any
//    square with 0x88, if the result is non-zero then the square is off the
//    board. For example, assuming a knight square A8 (0 in 0x88 notation),
//    there are 8 possible directions in which the knight can move. These
//    directions are relative to the 8x16 board and are stored in the
//    PIECE_OFFSETS map. One possible move is A8 - 18 (up one square, and two
//    squares to the left - which is off the board). 0 - 18 = -18 & 0x88 = 0x88
//    (because of two-complement representation of -18). The non-zero result
//    means the square is off the board and the move is illegal. Take the
//    opposite move (from A8 to C7), 0 + 18 = 18 & 0x88 = 0. A result of zero
//    means the square is on the board.
//
// 2. The relative distance (or difference) between two squares on a 8x16 board
//    is unique and can be used to inexpensively determine if a piece on a
//    square can attack any other arbitrary square. For example, let's see if a
//    pawn on E7 can attack E2. The difference between E7 (20) - E2 (100) is
//    -80. We add 119 to make the ATTACKS array index non-negative (because the
//    worst case difference is A8 - H1 = -119). The ATTACKS array contains a
//    bitmask of pieces that can attack from that distance and direction.
//    ATTACKS[-80 + 119=39] gives us 24 or 0b11000 in binary. Look at the
//    PIECE_MASKS map to determine the mask for a given piece type. In our pawn
//    example, we would check to see if 24 & 0x1 is non-zero, which it is
//    not. So, naturally, a pawn on E7 can't attack a piece on E2. However, a
//    rook can since 24 & 0x8 is non-zero. The only thing left to check is that
//    there are no blocking pieces between E7 and E2. That's where the RAYS
//    array comes in. It provides an offset (in this case 16) to add to E7 (20)
//    to check for blocking pieces. E7 (20) + 16 = E6 (36) + 16 = E5 (52) etc.
// prettier-ignore
const Ox88 = {
    a8: 0,
    b8: 1,
    c8: 2,
    d8: 3,
    e8: 4,
    f8: 5,
    g8: 6,
    h8: 7,
    a7: 16,
    b7: 17,
    c7: 18,
    d7: 19,
    e7: 20,
    f7: 21,
    g7: 22,
    h7: 23,
    a6: 32,
    b6: 33,
    c6: 34,
    d6: 35,
    e6: 36,
    f6: 37,
    g6: 38,
    h6: 39,
    a5: 48,
    b5: 49,
    c5: 50,
    d5: 51,
    e5: 52,
    f5: 53,
    g5: 54,
    h5: 55,
    a4: 64,
    b4: 65,
    c4: 66,
    d4: 67,
    e4: 68,
    f4: 69,
    g4: 70,
    h4: 71,
    a3: 80,
    b3: 81,
    c3: 82,
    d3: 83,
    e3: 84,
    f3: 85,
    g3: 86,
    h3: 87,
    a2: 96,
    b2: 97,
    c2: 98,
    d2: 99,
    e2: 100,
    f2: 101,
    g2: 102,
    h2: 103,
    a1: 112,
    b1: 113,
    c1: 114,
    d1: 115,
    e1: 116,
    f1: 117,
    g1: 118,
    h1: 119
};
const PAWN_OFFSETS = {
    b: [
        16,
        32,
        17,
        15
    ],
    w: [
        -16,
        -32,
        -17,
        -15
    ]
};
const PIECE_OFFSETS = {
    n: [
        -18,
        -33,
        -31,
        -14,
        18,
        33,
        31,
        14
    ],
    b: [
        -17,
        -15,
        17,
        15
    ],
    r: [
        -16,
        1,
        16,
        -1
    ],
    q: [
        -17,
        -16,
        -15,
        1,
        17,
        16,
        15,
        -1
    ],
    k: [
        -17,
        -16,
        -15,
        1,
        17,
        16,
        15,
        -1
    ]
};
// prettier-ignore
const ATTACKS = [
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    24,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    2,
    24,
    2,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    53,
    56,
    53,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    24,
    24,
    24,
    56,
    0,
    56,
    24,
    24,
    24,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    53,
    56,
    53,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    2,
    24,
    2,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    24,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    20,
    0,
    0,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    20
];
// prettier-ignore
const RAYS = [
    17,
    0,
    0,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    17,
    0,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    0,
    16,
    0,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    0,
    16,
    0,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    0,
    16,
    0,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    17,
    16,
    15,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    -16,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    -16,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    -16,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    -17,
    0,
    0,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    0,
    -17,
    0,
    0,
    -15,
    0,
    0,
    0,
    0,
    0,
    0,
    -16,
    0,
    0,
    0,
    0,
    0,
    0,
    -17
];
const PIECE_MASKS = {
    p: 0x1,
    n: 0x2,
    b: 0x4,
    r: 0x8,
    q: 0x10,
    k: 0x20
};
const SYMBOLS = "pnbrqkPNBRQK";
const PROMOTIONS = [
    exports.KNIGHT,
    exports.BISHOP,
    exports.ROOK,
    exports.QUEEN
];
const RANK_1 = 7;
const RANK_2 = 6;
// const RANK_3 = 5
// const RANK_4 = 4
// const RANK_5 = 3
// const RANK_6 = 2
const RANK_7 = 1;
const RANK_8 = 0;
const ROOKS = {
    w: [
        {
            square: Ox88.a1,
            flag: BITS.QSIDE_CASTLE
        },
        {
            square: Ox88.h1,
            flag: BITS.KSIDE_CASTLE
        }
    ],
    b: [
        {
            square: Ox88.a8,
            flag: BITS.QSIDE_CASTLE
        },
        {
            square: Ox88.h8,
            flag: BITS.KSIDE_CASTLE
        }
    ]
};
const SECOND_RANK = {
    b: RANK_7,
    w: RANK_2
};
const TERMINATION_MARKERS = [
    "1-0",
    "0-1",
    "1/2-1/2",
    "*"
];
/**
 * Extracts the zero-based rank of an 0x88 square.
 */ function rank(square) {
    return square >> 4;
}
/**
 * Extracts the zero-based file of an 0x88 square.
 */ function file(square) {
    return square & 0xf;
}
function isDigit(c) {
    return "0123456789".indexOf(c) !== -1;
}
/**
 * Converts a 0x88 square to algebraic notation.
 */ function algebraic(square) {
    const f = file(square);
    const r = rank(square);
    return "abcdefgh".substring(f, f + 1) + "87654321".substring(r, r + 1);
}
function swapColor(color) {
    return color === exports.WHITE ? exports.BLACK : exports.WHITE;
}
/* TODO: this needs a bit of work - it validates structure but completely
 * ignores content (e.g. doesn't verify that each side has a king) ... we should
 * rewrite this, and ditch the silly error_number field while we're at it */ function validateFen(fen) {
    const errors = [];
    errors[0] = "No errors.";
    errors[1] = "FEN string must contain six space-delimited fields.";
    errors[2] = "6th field (move number) must be a positive integer.";
    errors[3] = "5th field (half move counter) must be a non-negative integer.";
    errors[4] = "4th field (en-passant square) is invalid.";
    errors[5] = "3rd field (castling availability) is invalid.";
    errors[6] = "2nd field (side to move) is invalid.";
    errors[7] = "1st field (piece positions) does not contain 8 '/'-delimited rows.";
    errors[8] = "1st field (piece positions) is invalid [consecutive numbers].";
    errors[9] = "1st field (piece positions) is invalid [invalid piece].";
    errors[10] = "1st field (piece positions) is invalid [row too large].";
    errors[11] = "Illegal en-passant square";
    /* 1st criterion: 6 space-seperated fields? */ const tokens = fen.split(/\s+/);
    if (tokens.length !== 6) return {
        valid: false,
        errorNumber: 1,
        error: errors[1]
    };
    /* 2nd criterion: move number field is a integer value > 0? */ const moveNumber = parseInt(tokens[5], 10);
    if (isNaN(moveNumber) || moveNumber <= 0) return {
        valid: false,
        errorNumber: 2,
        error: errors[2]
    };
    /* 3rd criterion: half move counter is an integer >= 0? */ const halfMoves = parseInt(tokens[4], 10);
    if (isNaN(halfMoves) || halfMoves < 0) return {
        valid: false,
        errorNumber: 3,
        error: errors[3]
    };
    /* 4th criterion: 4th field is a valid e.p.-string? */ if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) return {
        valid: false,
        errorNumber: 4,
        error: errors[4]
    };
    /* 5th criterion: 3th field is a valid castle-string? */ if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) return {
        valid: false,
        errorNumber: 5,
        error: errors[5]
    };
    /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */ if (!/^(w|b)$/.test(tokens[1])) return {
        valid: false,
        errorNumber: 6,
        error: errors[6]
    };
    /* 7th criterion: 1st field contains 8 rows? */ const rows = tokens[0].split("/");
    if (rows.length !== 8) return {
        valid: false,
        errorNumber: 7,
        error: errors[7]
    };
    /* 8th criterion: every row is valid? */ for(let i = 0; i < rows.length; i++){
        /* check for right sum of fields AND not two numbers in succession */ let sumFields = 0;
        let previousWasNumber = false;
        for(let k = 0; k < rows[i].length; k++)if (isDigit(rows[i][k])) {
            if (previousWasNumber) return {
                valid: false,
                errorNumber: 8,
                error: errors[8]
            };
            sumFields += parseInt(rows[i][k], 10);
            previousWasNumber = true;
        } else {
            if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) return {
                valid: false,
                errorNumber: 9,
                error: errors[9]
            };
            sumFields += 1;
            previousWasNumber = false;
        }
        if (sumFields !== 8) return {
            valid: false,
            errorNumber: 10,
            error: errors[10]
        };
    }
    if (tokens[3][1] == "3" && tokens[1] == "w" || tokens[3][1] == "6" && tokens[1] == "b") return {
        valid: false,
        errorNumber: 11,
        error: errors[11]
    };
    /* everything's okay! */ return {
        valid: true,
        errorNumber: 0,
        error: errors[0]
    };
}
exports.validateFen = validateFen;
/* this function is used to uniquely identify ambiguous moves */ function getDisambiguator(move, moves) {
    const from = move.from;
    const to = move.to;
    const piece = move.piece;
    let ambiguities = 0;
    let sameRank = 0;
    let sameFile = 0;
    for(let i = 0, len = moves.length; i < len; i++){
        const ambigFrom = moves[i].from;
        const ambigTo = moves[i].to;
        const ambigPiece = moves[i].piece;
        /* if a move of the same piece type ends on the same to square, we'll
         * need to add a disambiguator to the algebraic notation
         */ if (piece === ambigPiece && from !== ambigFrom && to === ambigTo) {
            ambiguities++;
            if (rank(from) === rank(ambigFrom)) sameRank++;
            if (file(from) === file(ambigFrom)) sameFile++;
        }
    }
    if (ambiguities > 0) {
        /* if there exists a similar moving piece on the same rank and file
           as the move in question, use the square as the disambiguator
        */ if (sameRank > 0 && sameFile > 0) return algebraic(from);
        else if (sameFile > 0) /* if the moving piece rests on the same file, use the rank symbol
               as the disambiguator
             */ return algebraic(from).charAt(1);
        else /* else use the file symbol */ return algebraic(from).charAt(0);
    }
    return "";
}
function addMove(moves, color, from, to, piece, captured, flags = BITS.NORMAL) {
    const r = rank(to);
    if (piece === exports.PAWN && (r === RANK_1 || r === RANK_8)) for(let i = 0; i < PROMOTIONS.length; i++){
        const promotion = PROMOTIONS[i];
        moves.push({
            color,
            from,
            to,
            piece,
            captured,
            promotion,
            flags: flags | BITS.PROMOTION
        });
    }
    else moves.push({
        color,
        from,
        to,
        piece,
        captured,
        promotion: undefined,
        flags
    });
}
function inferPieceType(san) {
    let pieceType = san.charAt(0);
    if (pieceType >= "a" && pieceType <= "h") {
        const matches = san.match(/[a-h]\d.*[a-h]\d/);
        if (matches) return undefined;
        return exports.PAWN;
    }
    pieceType = pieceType.toLowerCase();
    if (pieceType === "o") return exports.KING;
    return pieceType;
}
// parses all of the decorators out of a SAN string
function strippedSan(move) {
    return move.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
}
class Chess {
    constructor(fen = exports.DEFAULT_POSITION){
        this._board = new Array(128);
        this._turn = exports.WHITE;
        this._header = {};
        this._kings = {
            w: EMPTY,
            b: EMPTY
        };
        this._epSquare = -1;
        this._halfMoves = 0;
        this._moveNumber = 0;
        this._history = [];
        this._comments = {};
        this._castling = {
            w: 0,
            b: 0
        };
        this.load(fen);
    }
    clear(keepHeaders = false) {
        this._board = new Array(128);
        this._kings = {
            w: EMPTY,
            b: EMPTY
        };
        this._turn = exports.WHITE;
        this._castling = {
            w: 0,
            b: 0
        };
        this._epSquare = EMPTY;
        this._halfMoves = 0;
        this._moveNumber = 1;
        this._history = [];
        this._comments = {};
        this._header = keepHeaders ? this._header : {};
        this._updateSetup(this.fen());
    }
    load(fen, keepHeaders = false) {
        const tokens = fen.split(/\s+/);
        const position = tokens[0];
        let square = 0;
        if (!validateFen(fen).valid) return false;
        this.clear(keepHeaders);
        for(let i = 0; i < position.length; i++){
            const piece = position.charAt(i);
            if (piece === "/") square += 8;
            else if (isDigit(piece)) square += parseInt(piece, 10);
            else {
                const color = piece < "a" ? exports.WHITE : exports.BLACK;
                this.put({
                    type: piece.toLowerCase(),
                    color
                }, algebraic(square));
                square++;
            }
        }
        this._turn = tokens[1];
        if (tokens[2].indexOf("K") > -1) this._castling.w |= BITS.KSIDE_CASTLE;
        if (tokens[2].indexOf("Q") > -1) this._castling.w |= BITS.QSIDE_CASTLE;
        if (tokens[2].indexOf("k") > -1) this._castling.b |= BITS.KSIDE_CASTLE;
        if (tokens[2].indexOf("q") > -1) this._castling.b |= BITS.QSIDE_CASTLE;
        this._epSquare = tokens[3] === "-" ? EMPTY : Ox88[tokens[3]];
        this._halfMoves = parseInt(tokens[4], 10);
        this._moveNumber = parseInt(tokens[5], 10);
        this._updateSetup(this.fen());
        return true;
    }
    fen() {
        let empty = 0;
        let fen = "";
        for(let i = Ox88.a8; i <= Ox88.h1; i++){
            if (this._board[i]) {
                if (empty > 0) {
                    fen += empty;
                    empty = 0;
                }
                const { color , type: piece  } = this._board[i];
                fen += color === exports.WHITE ? piece.toUpperCase() : piece.toLowerCase();
            } else empty++;
            if (i + 1 & 0x88) {
                if (empty > 0) fen += empty;
                if (i !== Ox88.h1) fen += "/";
                empty = 0;
                i += 8;
            }
        }
        let cflags = "";
        if (this._castling[exports.WHITE] & BITS.KSIDE_CASTLE) cflags += "K";
        if (this._castling[exports.WHITE] & BITS.QSIDE_CASTLE) cflags += "Q";
        if (this._castling[exports.BLACK] & BITS.KSIDE_CASTLE) cflags += "k";
        if (this._castling[exports.BLACK] & BITS.QSIDE_CASTLE) cflags += "q";
        /* do we have an empty castling flag? */ cflags = cflags || "-";
        const epflags = this._epSquare === EMPTY ? "-" : algebraic(this._epSquare);
        return [
            fen,
            this._turn,
            cflags,
            epflags,
            this._halfMoves,
            this._moveNumber
        ].join(" ");
    }
    /* Called when the initial board setup is changed with put() or remove().
     * modifies the SetUp and FEN properties of the header object.  if the FEN
     * is equal to the default position, the SetUp and FEN are deleted the setup
     * is only updated if history.length is zero, ie moves haven't been  made.
     */ _updateSetup(fen) {
        if (this._history.length > 0) return;
        if (fen !== exports.DEFAULT_POSITION) {
            this._header["SetUp"] = "1";
            this._header["FEN"] = fen;
        } else {
            delete this._header["SetUp"];
            delete this._header["FEN"];
        }
    }
    reset() {
        this.load(exports.DEFAULT_POSITION);
    }
    get(square) {
        return this._board[Ox88[square]] || false;
    }
    put({ type , color  }, square) {
        /* check for piece */ if (SYMBOLS.indexOf(type.toLowerCase()) === -1) return false;
        /* check for valid square */ if (!(square in Ox88)) return false;
        const sq = Ox88[square];
        /* don't let the user place more than one king */ if (type == exports.KING && !(this._kings[color] == EMPTY || this._kings[color] == sq)) return false;
        this._board[sq] = {
            type: type,
            color: color
        };
        if (type === exports.KING) this._kings[color] = sq;
        this._updateSetup(this.fen());
        return true;
    }
    remove(square) {
        const piece = this.get(square);
        delete this._board[Ox88[square]];
        if (piece && piece.type === exports.KING) this._kings[piece.color] = EMPTY;
        this._updateSetup(this.fen());
        return piece;
    }
    _attacked(color, square) {
        for(let i = Ox88.a8; i <= Ox88.h1; i++){
            /* did we run off the end of the board */ if (i & 0x88) {
                i += 7;
                continue;
            }
            /* if empty square or wrong color */ if (this._board[i] === undefined || this._board[i].color !== color) continue;
            const piece = this._board[i];
            const difference = i - square;
            const index = difference + 119;
            if (ATTACKS[index] & PIECE_MASKS[piece.type]) {
                if (piece.type === exports.PAWN) {
                    if (difference > 0) {
                        if (piece.color === exports.WHITE) return true;
                    } else {
                        if (piece.color === exports.BLACK) return true;
                    }
                    continue;
                }
                /* if the piece is a knight or a king */ if (piece.type === "n" || piece.type === "k") return true;
                const offset = RAYS[index];
                let j = i + offset;
                let blocked = false;
                while(j !== square){
                    if (this._board[j] != null) {
                        blocked = true;
                        break;
                    }
                    j += offset;
                }
                if (!blocked) return true;
            }
        }
        return false;
    }
    _isKingAttacked(color) {
        return this._attacked(swapColor(color), this._kings[color]);
    }
    isCheck() {
        return this._isKingAttacked(this._turn);
    }
    inCheck() {
        return this.isCheck();
    }
    isCheckmate() {
        return this.isCheck() && this._moves().length === 0;
    }
    isStalemate() {
        return !this.isCheck() && this._moves().length === 0;
    }
    isInsufficientMaterial() {
        // k.b. vs k.b. (of opposite colors) with mate in 1:
        // 8/8/8/8/1b6/8/B1k5/K7 b - - 0 1
        //
        // k.b. vs k.n. with mate in 1:
        // 8/8/8/8/1n6/8/B7/K1k5 b - - 2 1
        const pieces = {
            b: 0,
            n: 0,
            r: 0,
            q: 0,
            k: 0,
            p: 0
        };
        const bishops = [];
        let numPieces = 0;
        let squareColor = 0;
        for(let i = Ox88.a8; i <= Ox88.h1; i++){
            squareColor = (squareColor + 1) % 2;
            if (i & 0x88) {
                i += 7;
                continue;
            }
            const piece = this._board[i];
            if (piece) {
                pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
                if (piece.type === exports.BISHOP) bishops.push(squareColor);
                numPieces++;
            }
        }
        // k vs. k
        if (numPieces === 2) return true;
        else if (// k vs. kn .... or .... k vs. kb
        numPieces === 3 && (pieces[exports.BISHOP] === 1 || pieces[exports.KNIGHT] === 1)) return true;
        else if (numPieces === pieces[exports.BISHOP] + 2) {
            // kb vs. kb where any number of bishops are all on the same color
            let sum = 0;
            const len = bishops.length;
            for(let i1 = 0; i1 < len; i1++)sum += bishops[i1];
            if (sum === 0 || sum === len) return true;
        }
        return false;
    }
    isThreefoldRepetition() {
        /* TODO: while this function is fine for casual use, a better
          * implementation would use a Zobrist key (instead of FEN). the
          * Zobrist key would be maintained in the make_move/undo_move
          functions,
          * avoiding the costly that we do below.
          */ const moves = [];
        const positions = {};
        let repetition = false;
        while(true){
            const move = this._undoMove();
            if (!move) break;
            moves.push(move);
        }
        while(true){
            /* remove the last two fields in the FEN string, they're not needed
             * when checking for draw by rep */ const fen = this.fen().split(" ").slice(0, 4).join(" ");
            /* has the position occurred three or move times */ positions[fen] = fen in positions ? positions[fen] + 1 : 1;
            if (positions[fen] >= 3) repetition = true;
            const move1 = moves.pop();
            if (!move1) break;
            else this._makeMove(move1);
        }
        return repetition;
    }
    isDraw() {
        return this._halfMoves >= 100 || // 50 moves per side = 100 half moves
        this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
    }
    isGameOver() {
        return this.isCheckmate() || this.isStalemate() || this.isDraw();
    }
    moves({ verbose =false , square  } = {}) {
        const moves = this._moves({
            square
        });
        if (verbose) return moves.map((move)=>this._makePretty(move));
        else return moves.map((move)=>this._moveToSan(move, moves));
    }
    _moves({ legal =true , piece , square  } = {}) {
        var _a;
        const forSquare = square ? square.toLowerCase() : undefined;
        const forPiece = piece === null || piece === void 0 ? void 0 : piece.toLowerCase();
        const moves = [];
        const us = this._turn;
        const them = swapColor(us);
        let firstSquare = Ox88.a8;
        let lastSquare = Ox88.h1;
        let singleSquare = false;
        /* are we generating moves for a single square? */ if (forSquare) {
            // illegal square, return empty moves
            if (!(forSquare in Ox88)) return [];
            else {
                firstSquare = lastSquare = Ox88[forSquare];
                singleSquare = true;
            }
        }
        for(let from = firstSquare; from <= lastSquare; from++){
            /* did we run off the end of the board */ if (from & 0x88) {
                from += 7;
                continue;
            }
            // empty square or opponent, skip
            if (!this._board[from] || this._board[from].color === them) continue;
            const { type  } = this._board[from];
            let to;
            if (type === exports.PAWN) {
                if (forPiece && forPiece !== type) continue;
                /* single square, non-capturing */ to = from + PAWN_OFFSETS[us][0];
                if (!this._board[to]) {
                    addMove(moves, us, from, to, exports.PAWN);
                    /* double square */ to = from + PAWN_OFFSETS[us][1];
                    if (SECOND_RANK[us] === rank(from) && !this._board[to]) addMove(moves, us, from, to, exports.PAWN, undefined, BITS.BIG_PAWN);
                }
                /* pawn captures */ for(let j = 2; j < 4; j++){
                    to = from + PAWN_OFFSETS[us][j];
                    if (to & 0x88) continue;
                    if (((_a = this._board[to]) === null || _a === void 0 ? void 0 : _a.color) === them) addMove(moves, us, from, to, exports.PAWN, this._board[to].type, BITS.CAPTURE);
                    else if (to === this._epSquare) addMove(moves, us, from, to, exports.PAWN, exports.PAWN, BITS.EP_CAPTURE);
                }
            } else {
                if (forPiece && forPiece !== type) continue;
                for(let j1 = 0, len = PIECE_OFFSETS[type].length; j1 < len; j1++){
                    const offset = PIECE_OFFSETS[type][j1];
                    to = from;
                    while(true){
                        to += offset;
                        if (to & 0x88) break;
                        if (!this._board[to]) addMove(moves, us, from, to, type);
                        else {
                            // own color, stop loop
                            if (this._board[to].color === us) break;
                            addMove(moves, us, from, to, type, this._board[to].type, BITS.CAPTURE);
                            break;
                        }
                        /* break, if knight or king */ if (type === exports.KNIGHT || type === exports.KING) break;
                    }
                }
            }
        }
        /* check for castling if:
         * a) we're generating all moves, or
         * b) we're doing single square move generation on the king's square
         */ if (forPiece === undefined || forPiece === exports.KING) {
            if (!singleSquare || lastSquare === this._kings[us]) {
                /* king-side castling */ if (this._castling[us] & BITS.KSIDE_CASTLE) {
                    const castlingFrom = this._kings[us];
                    const castlingTo = castlingFrom + 2;
                    if (!this._board[castlingFrom + 1] && !this._board[castlingTo] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom + 1) && !this._attacked(them, castlingTo)) addMove(moves, us, this._kings[us], castlingTo, exports.KING, undefined, BITS.KSIDE_CASTLE);
                }
                /* queen-side castling */ if (this._castling[us] & BITS.QSIDE_CASTLE) {
                    const castlingFrom1 = this._kings[us];
                    const castlingTo1 = castlingFrom1 - 2;
                    if (!this._board[castlingFrom1 - 1] && !this._board[castlingFrom1 - 2] && !this._board[castlingFrom1 - 3] && !this._attacked(them, this._kings[us]) && !this._attacked(them, castlingFrom1 - 1) && !this._attacked(them, castlingTo1)) addMove(moves, us, this._kings[us], castlingTo1, exports.KING, undefined, BITS.QSIDE_CASTLE);
                }
            }
        }
        /* return all pseudo-legal moves (this includes moves that allow the king
         * to be captured) */ if (!legal) return moves;
        /* filter out illegal moves */ const legalMoves = [];
        for(let i = 0, len1 = moves.length; i < len1; i++){
            this._makeMove(moves[i]);
            if (!this._isKingAttacked(us)) legalMoves.push(moves[i]);
            this._undoMove();
        }
        return legalMoves;
    }
    move(move, { sloppy =false  } = {}) {
        /* The move function can be called with in the following parameters:
            *
            * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
            *
            * .move({ from: 'h7', <- where the 'move' is a move object
            (additional
            *         to :'h8',      fields are ignored)
            *         promotion: 'q',
            *      })
            */ // sloppy parser allows the move parser to work around over disambiguation
        // bugs in Fritz and Chessbase
        let moveObj = null;
        if (typeof move === "string") moveObj = this._moveFromSan(move, sloppy);
        else if (typeof move === "object") {
            const moves = this._moves();
            /* convert the pretty move object to an ugly move object */ for(let i = 0, len = moves.length; i < len; i++)if (move.from === algebraic(moves[i].from) && move.to === algebraic(moves[i].to) && (!("promotion" in moves[i]) || move.promotion === moves[i].promotion)) {
                moveObj = moves[i];
                break;
            }
        }
        /* failed to find move */ if (!moveObj) return null;
        /* need to make a copy of move because we can't generate SAN after
           the move is made */ const prettyMove = this._makePretty(moveObj);
        this._makeMove(moveObj);
        return prettyMove;
    }
    _push(move) {
        this._history.push({
            move,
            kings: {
                b: this._kings.b,
                w: this._kings.w
            },
            turn: this._turn,
            castling: {
                b: this._castling.b,
                w: this._castling.w
            },
            epSquare: this._epSquare,
            halfMoves: this._halfMoves,
            moveNumber: this._moveNumber
        });
    }
    _makeMove(move) {
        const us = this._turn;
        const them = swapColor(us);
        this._push(move);
        this._board[move.to] = this._board[move.from];
        delete this._board[move.from];
        /* if ep capture, remove the captured pawn */ if (move.flags & BITS.EP_CAPTURE) {
            if (this._turn === exports.BLACK) delete this._board[move.to - 16];
            else delete this._board[move.to + 16];
        }
        /* if pawn promotion, replace with new piece */ if (move.promotion) this._board[move.to] = {
            type: move.promotion,
            color: us
        };
        /* if we moved the king */ if (this._board[move.to].type === exports.KING) {
            this._kings[us] = move.to;
            /* if we castled, move the rook next to the king */ if (move.flags & BITS.KSIDE_CASTLE) {
                const castlingTo = move.to - 1;
                const castlingFrom = move.to + 1;
                this._board[castlingTo] = this._board[castlingFrom];
                delete this._board[castlingFrom];
            } else if (move.flags & BITS.QSIDE_CASTLE) {
                const castlingTo1 = move.to + 1;
                const castlingFrom1 = move.to - 2;
                this._board[castlingTo1] = this._board[castlingFrom1];
                delete this._board[castlingFrom1];
            }
            /* turn off castling */ this._castling[us] = 0;
        }
        /* turn off castling if we move a rook */ if (this._castling[us]) {
            for(let i = 0, len = ROOKS[us].length; i < len; i++)if (move.from === ROOKS[us][i].square && this._castling[us] & ROOKS[us][i].flag) {
                this._castling[us] ^= ROOKS[us][i].flag;
                break;
            }
        }
        /* turn off castling if we capture a rook */ if (this._castling[them]) {
            for(let i1 = 0, len1 = ROOKS[them].length; i1 < len1; i1++)if (move.to === ROOKS[them][i1].square && this._castling[them] & ROOKS[them][i1].flag) {
                this._castling[them] ^= ROOKS[them][i1].flag;
                break;
            }
        }
        /* if big pawn move, update the en passant square */ if (move.flags & BITS.BIG_PAWN) {
            if (us === exports.BLACK) this._epSquare = move.to - 16;
            else this._epSquare = move.to + 16;
        } else this._epSquare = EMPTY;
        /* reset the 50 move counter if a pawn is moved or a piece is captured */ if (move.piece === exports.PAWN) this._halfMoves = 0;
        else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) this._halfMoves = 0;
        else this._halfMoves++;
        if (us === exports.BLACK) this._moveNumber++;
        this._turn = them;
    }
    undo() {
        const move = this._undoMove();
        return move ? this._makePretty(move) : null;
    }
    _undoMove() {
        const old = this._history.pop();
        if (old === undefined) return null;
        const move = old.move;
        this._kings = old.kings;
        this._turn = old.turn;
        this._castling = old.castling;
        this._epSquare = old.epSquare;
        this._halfMoves = old.halfMoves;
        this._moveNumber = old.moveNumber;
        const us = this._turn;
        const them = swapColor(us);
        this._board[move.from] = this._board[move.to];
        this._board[move.from].type = move.piece; // to undo any promotions
        delete this._board[move.to];
        if (move.captured) {
            if (move.flags & BITS.EP_CAPTURE) {
                // en passant capture
                let index;
                if (us === exports.BLACK) index = move.to - 16;
                else index = move.to + 16;
                this._board[index] = {
                    type: exports.PAWN,
                    color: them
                };
            } else // regular capture
            this._board[move.to] = {
                type: move.captured,
                color: them
            };
        }
        if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
            let castlingTo, castlingFrom;
            if (move.flags & BITS.KSIDE_CASTLE) {
                castlingTo = move.to + 1;
                castlingFrom = move.to - 1;
            } else {
                castlingTo = move.to - 2;
                castlingFrom = move.to + 1;
            }
            this._board[castlingTo] = this._board[castlingFrom];
            delete this._board[castlingFrom];
        }
        return move;
    }
    pgn({ newline ="\n" , maxWidth =0  } = {}) {
        /* using the specification from http://www.chessclub.com/help/PGN-spec
         * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
         */ const result = [];
        let headerExists = false;
        /* add the PGN header information */ for(const i in this._header){
            /* TODO: order of enumerated properties in header object is not
             * guaranteed, see ECMA-262 spec (section 12.6.4)
             */ result.push("[" + i + ' "' + this._header[i] + '"]' + newline);
            headerExists = true;
        }
        if (headerExists && this._history.length) result.push(newline);
        const appendComment = (moveString)=>{
            const comment = this._comments[this.fen()];
            if (typeof comment !== "undefined") {
                const delimiter = moveString.length > 0 ? " " : "";
                moveString = `${moveString}${delimiter}{${comment}}`;
            }
            return moveString;
        };
        /* pop all of history onto reversed_history */ const reversedHistory = [];
        while(this._history.length > 0)reversedHistory.push(this._undoMove());
        const moves = [];
        let moveString = "";
        /* special case of a commented starting position with no moves */ if (reversedHistory.length === 0) moves.push(appendComment(""));
        /* build the list of moves.  a move_string looks like: "3. e3 e6" */ while(reversedHistory.length > 0){
            moveString = appendComment(moveString);
            const move = reversedHistory.pop();
            // make TypeScript stop complaining about move being undefined
            if (!move) break;
            /* if the position started with black to move, start PGN with #. ... */ if (!this._history.length && move.color === "b") {
                const prefix = `${this._moveNumber}. ...`;
                /* is there a comment preceding the first move? */ moveString = moveString ? `${moveString} ${prefix}` : prefix;
            } else if (move.color === "w") {
                /* store the previous generated move_string if we have one */ if (moveString.length) moves.push(moveString);
                moveString = this._moveNumber + ".";
            }
            moveString = moveString + " " + this._moveToSan(move, this._moves({
                legal: true
            }));
            this._makeMove(move);
        }
        /* are there any other leftover moves? */ if (moveString.length) moves.push(appendComment(moveString));
        /* is there a result? */ if (typeof this._header.Result !== "undefined") moves.push(this._header.Result);
        /* history should be back to what it was before we started generating PGN,
         * so join together moves
         */ if (maxWidth === 0) return result.join("") + moves.join(" ");
        // JAH: huh?
        const strip = function() {
            if (result.length > 0 && result[result.length - 1] === " ") {
                result.pop();
                return true;
            }
            return false;
        };
        /* NB: this does not preserve comment whitespace. */ const wrapComment = function(width, move) {
            for (const token of move.split(" ")){
                if (!token) continue;
                if (width + token.length > maxWidth) {
                    while(strip())width--;
                    result.push(newline);
                    width = 0;
                }
                result.push(token);
                width += token.length;
                result.push(" ");
                width++;
            }
            if (strip()) width--;
            return width;
        };
        /* wrap the PGN output at max_width */ let currentWidth = 0;
        for(let i1 = 0; i1 < moves.length; i1++){
            if (currentWidth + moves[i1].length > maxWidth) {
                if (moves[i1].includes("{")) {
                    currentWidth = wrapComment(currentWidth, moves[i1]);
                    continue;
                }
            }
            /* if the current move will push past max_width */ if (currentWidth + moves[i1].length > maxWidth && i1 !== 0) {
                /* don't end the line with whitespace */ if (result[result.length - 1] === " ") result.pop();
                result.push(newline);
                currentWidth = 0;
            } else if (i1 !== 0) {
                result.push(" ");
                currentWidth++;
            }
            result.push(moves[i1]);
            currentWidth += moves[i1].length;
        }
        return result.join("");
    }
    header(...args) {
        for(let i = 0; i < args.length; i += 2)if (typeof args[i] === "string" && typeof args[i + 1] === "string") this._header[args[i]] = args[i + 1];
        return this._header;
    }
    loadPgn(pgn, { sloppy =false , newlineChar ="\r?\n"  } = {}) {
        // option sloppy=true
        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        function mask(str) {
            return str.replace(/\\/g, "\\");
        }
        function parsePgnHeader(header) {
            const headerObj = {};
            const headers = header.split(new RegExp(mask(newlineChar)));
            let key = "";
            let value = "";
            for(let i = 0; i < headers.length; i++){
                const regex = /^\s*\[([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                key = headers[i].replace(regex, "$1");
                value = headers[i].replace(regex, "$2");
                if (key.trim().length > 0) headerObj[key] = value;
            }
            return headerObj;
        }
        // strip whitespace from head/tail of PGN block
        pgn = pgn.trim();
        // RegExp to split header. Takes advantage of the fact that header and movetext
        // will always have a blank line between them (ie, two newline_char's).
        // With default newline_char, will equal: /^(\[((?:\r?\n)|.)*\])(?:\s*\r?\n){2}/
        const headerRegex = new RegExp("^(\\[((?:" + mask(newlineChar) + ")|.)*\\])" + "(?:\\s*" + mask(newlineChar) + "){2}");
        // If no header given, begin with moves.
        const headerRegexResults = headerRegex.exec(pgn);
        const headerString = headerRegexResults ? headerRegexResults.length >= 2 ? headerRegexResults[1] : "" : "";
        // Put the board in the starting position
        this.reset();
        /* parse PGN header */ const headers = parsePgnHeader(headerString);
        let fen = "";
        for(const key in headers){
            // check to see user is including fen (possibly with wrong tag case)
            if (key.toLowerCase() === "fen") fen = headers[key];
            this.header(key, headers[key]);
        }
        /* sloppy parser should attempt to load a fen tag, even if it's
         * the wrong case and doesn't include a corresponding [SetUp "1"] tag */ if (sloppy) {
            if (fen) {
                if (!this.load(fen, true)) return false;
            }
        } else /* strict parser - load the starting position indicated by [Setup '1']
             * and [FEN position] */ if (headers["SetUp"] === "1") {
            if (!("FEN" in headers && this.load(headers["FEN"], true))) // second argument to load: don't clear the headers
            return false;
        }
        /* NB: the regexes below that delete move numbers, recursive
         * annotations, and numeric annotation glyphs may also match
         * text in comments. To prevent this, we transform comments
         * by hex-encoding them in place and decoding them again after
         * the other tokens have been deleted.
         *
         * While the spec states that PGN files should be ASCII encoded,
         * we use {en,de}codeURIComponent here to support arbitrary UTF8
         * as a convenience for modern users */ function toHex(s) {
            return Array.from(s).map(function(c) {
                /* encodeURI doesn't transform most ASCII characters,
                 * so we handle these ourselves */ return c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16) : encodeURIComponent(c).replace(/%/g, "").toLowerCase();
            }).join("");
        }
        function fromHex(s) {
            return s.length == 0 ? "" : decodeURIComponent("%" + (s.match(/.{1,2}/g) || []).join("%"));
        }
        const encodeComment = function(s) {
            s = s.replace(new RegExp(mask(newlineChar), "g"), " ");
            return `{${toHex(s.slice(1, s.length - 1))}}`;
        };
        const decodeComment = function(s) {
            if (s.startsWith("{") && s.endsWith("}")) return fromHex(s.slice(1, s.length - 1));
        };
        /* delete header to get the moves */ let ms = pgn.replace(headerString, "").replace(/* encode comments so they don't get deleted below */ new RegExp(`({[^}]*})+?|;([^${mask(newlineChar)}]*)`, "g"), function(_match, bracket, semicolon) {
            return bracket !== undefined ? encodeComment(bracket) : " " + encodeComment(`{${semicolon.slice(1)}}`);
        }).replace(new RegExp(mask(newlineChar), "g"), " ");
        /* delete recursive annotation variations */ const ravRegex = /(\([^()]+\))+?/g;
        while(ravRegex.test(ms))ms = ms.replace(ravRegex, "");
        /* delete move numbers */ ms = ms.replace(/\d+\.(\.\.)?/g, "");
        /* delete ... indicating black to move */ ms = ms.replace(/\.\.\./g, "");
        /* delete numeric annotation glyphs */ ms = ms.replace(/\$\d+/g, "");
        /* trim and get array of moves */ let moves = ms.trim().split(new RegExp(/\s+/));
        /* delete empty entries */ moves = moves.join(",").replace(/,,+/g, ",").split(",");
        let result = "";
        for(let halfMove = 0; halfMove < moves.length; halfMove++){
            const comment = decodeComment(moves[halfMove]);
            if (comment !== undefined) {
                this._comments[this.fen()] = comment;
                continue;
            }
            const move = this._moveFromSan(moves[halfMove], sloppy);
            /* invalid move */ if (move == null) {
                /* was the move an end of game marker */ if (TERMINATION_MARKERS.indexOf(moves[halfMove]) > -1) result = moves[halfMove];
                else return false;
            } else {
                /* reset the end of game marker if making a valid move */ result = "";
                this._makeMove(move);
            }
        }
        /* Per section 8.2.6 of the PGN spec, the Result tag pair must match
    * match the termination marker. Only do this when headers are
            present,
            * but the result tag is missing
            */ if (result && Object.keys(this._header).length && !this._header["Result"]) this.header("Result", result);
        return true;
    }
    /* convert a move from 0x88 coordinates to Standard Algebraic Notation
      * (SAN)
      *
      * @param {boolean} sloppy Use the sloppy SAN generator to work around
      over
      * disambiguation bugs in Fritz and Chessbase.  See below:
      *
      * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
      * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
      * 4. ... Ne7 is technically the valid SAN
      */ _moveToSan(move, moves) {
        let output = "";
        if (move.flags & BITS.KSIDE_CASTLE) output = "O-O";
        else if (move.flags & BITS.QSIDE_CASTLE) output = "O-O-O";
        else {
            if (move.piece !== exports.PAWN) {
                const disambiguator = getDisambiguator(move, moves);
                output += move.piece.toUpperCase() + disambiguator;
            }
            if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
                if (move.piece === exports.PAWN) output += algebraic(move.from)[0];
                output += "x";
            }
            output += algebraic(move.to);
            if (move.promotion) output += "=" + move.promotion.toUpperCase();
        }
        this._makeMove(move);
        if (this.isCheck()) {
            if (this.isCheckmate()) output += "#";
            else output += "+";
        }
        this._undoMove();
        return output;
    }
    // convert a move from Standard Algebraic Notation (SAN) to 0x88
    // coordinates
    _moveFromSan(move, sloppy = false) {
        // strip off any move decorations: e.g Nf3+?! becomes Nf3
        const cleanMove = strippedSan(move);
        let pieceType = inferPieceType(cleanMove);
        let moves = this._moves({
            legal: true,
            piece: pieceType
        });
        // strict parser
        for(let i = 0, len = moves.length; i < len; i++){
            if (cleanMove === strippedSan(this._moveToSan(moves[i], moves))) return moves[i];
        }
        // strict parser failed and the sloppy parser wasn't used, return null
        if (!sloppy) return null;
        let piece = undefined;
        let matches = undefined;
        let from = undefined;
        let to = undefined;
        let promotion = undefined;
        // The sloppy parser allows the user to parse non-standard chess
        // notations. This parser is opt-in (by specifying the
        // '{ sloppy: true }' setting) and is only run after the Standard
        // Algebraic Notation (SAN) parser has failed.
        //
        // When running the sloppy parser, we'll run a regex to grab the piece,
        // the to/from square, and an optional promotion piece. This regex will
        // parse common non-standard notation like: Pe2-e4, Rc1c4, Qf3xf7,
        // f7f8q, b1c3
        // NOTE: Some positions and moves may be ambiguous when using the
        // sloppy parser. For example, in this position:
        // 6k1/8/8/B7/8/8/8/BN4K1 w - - 0 1, the move b1c3 may be interpreted
        // as Nc3 or B1c3 (a disambiguated bishop move). In these cases, the
        // sloppy parser will default to the most most basic interpretation
        // (which is b1c3 parsing to Nc3).
        // FIXME: these var's are hoisted into function scope, this will need
        // to change when switching to const/let
        let overlyDisambiguated = false;
        matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
        if (matches) {
            piece = matches[1];
            from = matches[2];
            to = matches[3];
            promotion = matches[4];
            if (from.length == 1) overlyDisambiguated = true;
        } else {
            // The [a-h]?[1-8]? portion of the regex below handles moves that may
            // be overly disambiguated (e.g. Nge7 is unnecessary and non-standard
            // when there is one legal knight move to e7). In this case, the value
            // of 'from' variable will be a rank or file, not a square.
            matches = cleanMove.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/);
            if (matches) {
                piece = matches[1];
                from = matches[2];
                to = matches[3];
                promotion = matches[4];
                if (from.length == 1) overlyDisambiguated = true;
            }
        }
        pieceType = inferPieceType(cleanMove);
        moves = this._moves({
            legal: true,
            piece: piece ? piece : pieceType
        });
        for(let i1 = 0, len1 = moves.length; i1 < len1; i1++)if (from && to) {
            // hand-compare move properties with the results from our sloppy
            // regex
            if ((!piece || piece.toLowerCase() == moves[i1].piece) && Ox88[from] == moves[i1].from && Ox88[to] == moves[i1].to && (!promotion || promotion.toLowerCase() == moves[i1].promotion)) return moves[i1];
            else if (overlyDisambiguated) {
                // SPECIAL CASE: we parsed a move string that may have an
                // unneeded rank/file disambiguator (e.g. Nge7).  The 'from'
                // variable will
                const square = algebraic(moves[i1].from);
                if ((!piece || piece.toLowerCase() == moves[i1].piece) && Ox88[to] == moves[i1].to && (from == square[0] || from == square[1]) && (!promotion || promotion.toLowerCase() == moves[i1].promotion)) return moves[i1];
            }
        }
        return null;
    }
    ascii() {
        let s = "   +------------------------+\n";
        for(let i = Ox88.a8; i <= Ox88.h1; i++){
            /* display the rank */ if (file(i) === 0) s += " " + "87654321"[rank(i)] + " |";
            if (this._board[i]) {
                const piece = this._board[i].type;
                const color = this._board[i].color;
                const symbol = color === exports.WHITE ? piece.toUpperCase() : piece.toLowerCase();
                s += " " + symbol + " ";
            } else s += " . ";
            if (i + 1 & 0x88) {
                s += "|\n";
                i += 8;
            }
        }
        s += "   +------------------------+\n";
        s += "     a  b  c  d  e  f  g  h";
        return s;
    }
    perft(depth) {
        const moves = this._moves({
            legal: false
        });
        let nodes = 0;
        const color = this._turn;
        for(let i = 0, len = moves.length; i < len; i++){
            this._makeMove(moves[i]);
            if (!this._isKingAttacked(color)) {
                if (depth - 1 > 0) nodes += this.perft(depth - 1);
                else nodes++;
            }
            this._undoMove();
        }
        return nodes;
    }
    /* pretty = external move object */ _makePretty(uglyMove) {
        const { color , piece , from , to , flags , captured , promotion  } = uglyMove;
        let prettyFlags = "";
        for(const flag in BITS)if (BITS[flag] & flags) prettyFlags += FLAGS[flag];
        const move = {
            color,
            piece,
            from: algebraic(from),
            to: algebraic(to),
            san: this._moveToSan(uglyMove, this._moves({
                legal: true
            })),
            flags: prettyFlags
        };
        if (captured) move.captured = captured;
        if (promotion) move.promotion = promotion;
        return move;
    }
    turn() {
        return this._turn;
    }
    board() {
        const output = [];
        let row = [];
        for(let i = Ox88.a8; i <= Ox88.h1; i++){
            if (this._board[i] == null) row.push(null);
            else row.push({
                square: algebraic(i),
                type: this._board[i].type,
                color: this._board[i].color
            });
            if (i + 1 & 0x88) {
                output.push(row);
                row = [];
                i += 8;
            }
        }
        return output;
    }
    squareColor(square) {
        if (square in Ox88) {
            const sq = Ox88[square];
            return (rank(sq) + file(sq)) % 2 === 0 ? "light" : "dark";
        }
        return null;
    }
    history({ verbose =false  } = {}) {
        const reversedHistory = [];
        const moveHistory = [];
        while(this._history.length > 0)reversedHistory.push(this._undoMove());
        while(true){
            const move = reversedHistory.pop();
            if (!move) break;
            if (verbose) moveHistory.push(this._makePretty(move));
            else moveHistory.push(this._moveToSan(move, this._moves()));
            this._makeMove(move);
        }
        return moveHistory;
    }
    _pruneComments() {
        const reversedHistory = [];
        const currentComments = {};
        const copyComment = (fen)=>{
            if (fen in this._comments) currentComments[fen] = this._comments[fen];
        };
        while(this._history.length > 0)reversedHistory.push(this._undoMove());
        copyComment(this.fen());
        while(true){
            const move = reversedHistory.pop();
            if (!move) break;
            this._makeMove(move);
            copyComment(this.fen());
        }
        this._comments = currentComments;
    }
    getComment() {
        return this._comments[this.fen()];
    }
    setComment(comment) {
        this._comments[this.fen()] = comment.replace("{", "[").replace("}", "]");
    }
    deleteComment() {
        const comment = this._comments[this.fen()];
        delete this._comments[this.fen()];
        return comment;
    }
    getComments() {
        this._pruneComments();
        return Object.keys(this._comments).map((fen)=>{
            return {
                fen: fen,
                comment: this._comments[fen]
            };
        });
    }
    deleteComments() {
        this._pruneComments();
        return Object.keys(this._comments).map((fen)=>{
            const comment = this._comments[fen];
            delete this._comments[fen];
            return {
                fen: fen,
                comment: comment
            };
        });
    }
}
exports.Chess = Chess; //   return {
 //     /***************************************************************************
 //      * PUBLIC CONSTANTS (is there a better way to do this?)
 //      **************************************************************************/
 //     SQUARES: (function () {
 //       /* from the ECMA-262 spec (section 12.6.4):
 //        * "The mechanics of enumerating the properties ... is
 //        * implementation dependent"
 //        * so: for (var sq in SQUARES) { keys.push(sq); } might not be
 //        * ordered correctly
 //        */
 //       var keys = []
 //       for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
 //         if (i & 0x88) {
 //           i += 7
 //           continue
 //         }
 //         keys.push(algebraic(i))
 //       }
 //       return keys
 //     })(),
 //     FLAGS: FLAGS,
 // }

},{}]},["7eCBa"], null, "parcelRequired356")

//# sourceMappingURL=index.dd8c476f.js.map
