(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["AkfaTimeline"] = factory(require("react"));
	else
		root["AkfaTimeline"] = factory(root["react"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__155__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 27
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* src/components/Timeline/Timeline.css */

/* 
  Temel: "sales sayfası" temasıyla uyumlu renkler, 
  light vs. dark tanımları 
*/

:root {
  /* Light Tema Varsayılan Renkler */
  --background-color: #f5f5f2;       /* Açık tema arka plan */
  --text-color: #666;               /* Açık tema yazı rengi */
  --border-color: #bbb;             /* Daha yumuşak border */

  /* Header */
  --header-background-color: #f5f5f2;  /* Üst header, tablo header */
  --header-text-color: #666;

  /* Resources */
  --resource-background-color: #f5f5f2;  
  --resource-text-color: #666;
  --group-header-background-color: #dadada;

  /* Timeline */
  --timeline-header-background-color: #f5f5f2;
  --timeline-cell-border-color: #ccc;
  --timeline-event-background-color: #fff;
  --timeline-event-border-color: #666;
  --timeline-event-text-color: #666;

  /* Scrollbar */
  --scrollbar-thumb-background: #aaa;
  --scrollbar-thumb-hover-background: #888;

  --resource-width: 150px;
  --cell-height: 40px;
  --header-height: 60px;
  --time-slot-height: 20px;
  --container-height: 480px;

  --timeline-new-event-background-color: #ff5722;
  --timeline-new-event-text-color: #fff;

  --timeline-event-background-color: #ff7f50; 
  --timeline-event-text-color: #fff;
  --timeline-event-border-color: #fff;

  --timeline-cell-selected-bg: rgba(25,118,210,0.2);

  user-select: none; /* Metin seçimini engelle */
}

/* Koyu Tema */
.dark-mode {
  /* Koyu tema */
  --background-color: #16202a;               /* Koyu tema arka plan */
  --text-color: #ddd;                        /* Koyu tema yazı rengi */
  --border-color: #444;

  --header-background-color: #16202a;
  --header-text-color: #bbb;

  --resource-background-color: #16202a;
  --resource-text-color: #bbb;
  --group-header-background-color: #0d141b;

  --timeline-header-background-color: #16202a;
  --timeline-cell-border-color: #444;
  --timeline-event-background-color: #2a2a2a;
  --timeline-event-border-color: #222;
  --timeline-event-text-color: #ddd;

  --scrollbar-thumb-background: #555;
  --scrollbar-thumb-hover-background: #888;

  --timeline-new-event-background-color: #a83e20;
  --timeline-new-event-text-color: #eee;

  --timeline-event-background-color: #a83e20;
  --timeline-event-text-color: #fff;
  --timeline-event-border-color: #222;

  --timeline-cell-selected-bg: rgba(76,175,80,0.2);
}

/* Genel Timeline Konteyner */
.timeline-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: var(--background-color);
  color: var(--text-color);
}

/* Master Header */
.timeline-master-header {
  width: 100%;
  background-color: var(--header-background-color);
  color: var(--header-text-color);
  border-bottom: 1px solid var(--border-color);
  z-index: 10;
  padding: 10px;
  box-sizing: border-box;
}

/* Timeline Body */
.timeline-body {
  display: flex;
  flex: 1;
}

/* Sol Kısım: Resources */
.timeline-resources-container {
  width: var(--resource-width);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
  position: sticky;
  left: 0;
  top: var(--header-height);
  z-index: 2;
  background-color: var(--resource-background-color);
  overflow-y: auto;
}

/* Resources Header */
.resources-header {
  background-color: var(--header-background-color);
  color: var(--resource-text-color);
  text-align: center;
  width: var(--resource-width);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(var(--header-height) * 2); /* Üst üste iki header yüksekliği */
  border-right: 1px solid var(--border-color);
  box-sizing: border-box;
}

/* Grup Başlığı Hücreleri */
.group-header-row {
  display: flex;
  height: var(--cell-height);
  background-color: var(--group-header-background-color);
  color: var(--resource-text-color);
  font-weight: bold;
}

.group-header-cell {
  flex: 1;
  border: 1px solid var(--border-color);
  text-align: center;
  background-color: var(--group-header-background-color);
  color: var(--resource-text-color);
  height: var(--cell-height);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Resource Grupları */
.resource-group {
  display: flex;
  flex-direction: column;
}

/* Resource Grup Header */
.resource-group-header {
  background-color: var(--group-header-background-color);
  color: var(--resource-text-color);
  font-weight: bold;
  height: var(--cell-height);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px;
  cursor: pointer;
  border: 1px solid var(--border-color);
}

/* Resource Hücreleri */
.resource-cell {
  padding: 0;
  text-align: left;
  background-color: var(--resource-background-color);
  color: var(--resource-text-color);
  height: var(--cell-height);
  display: flex;
  align-items: center;
  border: 0.3px solid var(--border-color);
  box-sizing: border-box;
}

/* Sağ Kısım: Timeline */
.timeline-scrollable-container {
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Header ve Content Wrapper */
.timeline-header-content-wrapper {
  display: flex;
  flex-direction: column;
}

/* Timeline Header */
.timeline-header {
  display: flex;
  background-color: var(--timeline-header-background-color);
  color: var(--header-text-color);
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--header-height);
  overflow: hidden;
  box-sizing: border-box;
}

/* Timeline Content */
.timeline-content {
  display: flex;
  flex-direction: column;
}

/* Grup Container */
.group-container {
  display: flex;
  flex-direction: column;
}

/* Resource Satırları */
.resource-row {
  display: flex;
  box-sizing: border-box;
  position: relative;
  height: var(--cell-height);
  border: 1px solid var(--border-color);
  margin-top: -1px;
  overflow: hidden;
}

/* Timeline Hücreleri */
.timeline-cell {
  flex: 1;
  border: 1px solid var(--timeline-cell-border-color);
  height: 100%;
  box-sizing: border-box;
}

/* Hücre Seçili Durumu */
.timeline-cell.selected {
  background-color: rgba(25, 118, 210, 0.2); /* satır içi/hover */
}

/* Event Stilleri */
.event {
  position: absolute;
  background-color: var(--timeline-event-background-color);
  color: var(--timeline-event-text-color);
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 4px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  z-index: 10;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid var(--timeline-event-border-color);
  cursor: pointer;
}

/* Event Time Stili */
.event-time {
  font-size: 10px;
  margin-top: 2px;
}

/* Scrollbar için */
.timeline-scrollable-container::-webkit-scrollbar {
  height: 10px;
}

.timeline-scrollable-container::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb-background);
  border-radius: 5px;
}

.timeline-scrollable-container::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover-background);
}

.resources-header {
  background-color: var(--header-background-color);
  color: var(--resource-text-color);
  text-align: center;
  width: var(--resource-width);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-right: 1px solid var(--border-color);
  box-sizing: border-box;
}

/* TimelineHeader Container */
.timeline-header-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Ay + Yıl satırı */
.timeline-header-month-row {
  display: flex;
  background-color: var(--header-background-color);
  color: var(--header-text-color);
  font-weight: bold;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid var(--border-color);
}

/* Ay + Yıl hücreleri */
.timeline-header-month-cell {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-right => dynamic, inline style if needed */
  box-sizing: border-box;
}

/* Günlük Hücreler (tarih satırı) */
.timeline-header-day-row {
  display: flex;
  background-color: var(--timeline-header-background-color);
  color: var(--header-text-color);
  /* border-bottom: 1px solid var(--border-color); if needed */
}

/* Günlük hücre (her gün) */
.timeline-header-day-cell {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  box-sizing: border-box;
}


/* src/components/Timeline/Timeline.css */
/* Ekleme: MasterHeader stili */

/* Kapsayıcı */
.master-header-container {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Butonlar solda, select sağda */
  padding: 10px;
  background-color: var(--header-background-color);
  color: var(--header-text-color);
}

.master-header-buttons {
  display: flex; /* Yan yana dizilim */
  align-items: center; /* Dikey hizalama */
}

.master-header-btn {
  background-color: transparent;
  color: var(--header-text-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 6px 12px;
  margin-right: 10px; /* Butonlar arasında mesafe */
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.master-header-btn:hover {
  background-color: rgba(25, 118, 210, 0.2); /* Açık tema hover */
}

.dark-mode .master-header-btn:hover {
  background-color: rgba(76, 175, 80, 0.2); /* Koyu tema hover */
}

.master-header-btn:focus {
  outline: none;
}



/* Tarih seçici (Date Picker) */
.master-header-date-picker {
  background-color: transparent;
  color: var(--header-text-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 5px 12px;
  margin-right: 10px; /* Butonlar arasında mesafe */
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.master-header-date-picker:hover {
  background-color: rgba(25, 118, 210, 0.2); /* Açık tema hover */
}

.dark-mode .master-header-date-picker:hover {
  background-color: rgba(76, 175, 80, 0.2); /* Koyu tema hover */
}

.master-header-date-picker:focus {
  outline: none;
}

/* Select */
.master-header-select {
  margin-left: auto; /* Sağa yaslamak için */
  background-color: transparent;
  color: var(--header-text-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;
}

.master-header-select:focus {
  outline: none;
}

/* Flatpickr Takvim Kutusu */
.flatpickr-calendar {
  background-color: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Gölge efekti */
}


/* Flatpickr Günü */
.flatpickr-day {
  background-color: var(--background-color); /* Arka plan rengi */
  color: var(--text-color); /* Yazı rengi */
  border-radius: 4px; /* Köşeleri yuvarlat */
  cursor: pointer;
}

.flatpickr-day:hover {
  background-color: rgba(25, 118, 210, 0.2); /* Hover efekti */
}

.dark-mode .flatpickr-day:hover {
  background-color: rgba(76, 175, 80, 0.2); /* Koyu tema hover efekti */
}

/* Seçili Gün */
.flatpickr-day.selected {
  background-color: #4caf50; /* Seçili gün rengi */
  color: white; /* Seçili gün yazı rengi */
}

/* Flatpickr Ay ve Yıl */
.flatpickr-months .flatpickr-month {
  background-color: var(--background-color);
  color: var(--text-color);
}

/* Flatpickr Ay İleri ve Geri Düğmeleri */
.flatpickr-prev-month, .flatpickr-next-month {
  color: var(--text-color);
  cursor: pointer;
}

/* Koyu Tema Örnekleri */
.dark-mode .flatpickr-calendar {
  background-color: #1f2937; /* Koyu tema arka plan */
  color: #ffffff; /* Koyu tema yazı rengi */
}

.dark-mode .flatpickr-day.selected {
  background-color: #4caf50;
  color: white;
}


/* Container */
.timeline-content-container {
  position: relative;
  width: 100%;
  height: auto; /* or as needed */
  display: flex;
  flex-direction: column;
}

/* Group container */
.timeline-group-container {
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
}

/* Group header row */
.timeline-group-header-row {
  display: flex;
  margin-top: -0.08rem;
}

.timeline-group-header-cell {
  flex: 1;
  height: 2.58rem;
  background-color: var(--group-header-background-color);
  border: 1px solid var(--border-color);
  
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Resource row */
.timeline-resource-row {
  display: flex;
  position: relative;
  height: var(--cell-height, 40px);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
}

/* Each day cell */
.timeline-cell {
  flex: 1;
  height: 100%;
  position: relative;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  box-sizing: border-box;
  cursor: pointer;
}

/* "selected" day cell */
.timeline-cell.selected {
  background-color: var(--timeline-cell-selected-bg, rgba(25,118,210,0.2));
}

/* Event */
.timeline-event {
  position: absolute;
  background-color: var(--timeline-event-background-color, #0093ce);
  color: var(--timeline-event-text-color, #fff);
  font-size: 14px;
  padding: 5px;
  border-radius: 20px;
  box-sizing: border-box;
  z-index: 10;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid var(--timeline-event-border-color, #fff);
  top: 5px; /* or a variable offset if you want */
  /* "left" and "width" are inline from JS */
}

/* Extend handle */
.timeline-event-extend-handle {
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  cursor: col-resize;
  z-index: 20;
}

/* Temp event (while creating) */
.timeline-temp-event {
  position: absolute;
  background-color: var(--timeline-new-event-background-color, #0093ce);
  color: var(--timeline-new-event-text-color, #fff);
  opacity: 0.7;
  border-radius: 20px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  /* "left"/"width" from JS: " ...calculatePosition(tempEvent, dates)" */
  top: 5px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 56
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ 72
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ 113
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ 155
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__155__;

/***/ },

/***/ 314
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ 540
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ 601
(module) {



module.exports = function (i) {
  return i[1];
};

/***/ },

/***/ 659
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ 825
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Timeline_Timeline)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(155);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Timeline/Timeline.css
var Timeline = __webpack_require__(27);
;// ./src/components/Timeline/Timeline.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Timeline/* default */.A, options);




       /* harmony default export */ const Timeline_Timeline = (Timeline/* default */.A && Timeline/* default */.A.locals ? Timeline/* default */.A.locals : undefined);

;// ./src/components/Timeline/MasterHeader.js


const MasterHeader = _ref => {
  let {
    selectedDate,
    onDateSelect,
    onToday,
    onAdvance,
    onRetreat,
    onMonthAdvance,
    onMonthRetreat,
    dayRange,
    setDayRange
  } = _ref;
  const formattedDate = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000 - selectedDate.getTimezoneOffset() * 60000).toISOString().split("T")[0]; // YYYY-MM-DD formatı

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "master-header-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "master-header-buttons"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: onMonthRetreat
  }, "1 Ay Geri"), /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: onRetreat
  }, "5 G\xFCn Geri"), /*#__PURE__*/external_react_default().createElement("input", {
    type: "date",
    className: "master-header-date-picker",
    value: formattedDate // Seçili tarih burada gösteriliyor
    ,
    onChange: e => onDateSelect(e.target.value) // Tarih seçimi
    ,
    onKeyDown: e => e.preventDefault() // Manuel girişleri engelle
  }), /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: onAdvance
  }, "5 G\xFCn \u0130leri"), /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: onMonthAdvance
  }, "1 Ay \u0130leri"), /*#__PURE__*/external_react_default().createElement("button", {
    className: "master-header-btn",
    onClick: onToday
  }, "Bug\xFCn")), /*#__PURE__*/external_react_default().createElement("select", {
    className: "master-header-select",
    value: dayRange,
    onChange: e => setDayRange(parseInt(e.target.value, 10))
  }, /*#__PURE__*/external_react_default().createElement("option", {
    value: 30
  }, "30 G\xFCn"), /*#__PURE__*/external_react_default().createElement("option", {
    value: 60
  }, "60 G\xFCn"), /*#__PURE__*/external_react_default().createElement("option", {
    value: 90
  }, "90 G\xFCn")));
};
/* harmony default export */ const Timeline_MasterHeader = (MasterHeader);
;// ./src/components/Timeline/ResourcesHeader.js
// ResourcesHeader.js


const ResourcesHeader = _ref => {
  let {
    content
  } = _ref;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "resources-header"
  }, content);
};
/* harmony default export */ const Timeline_ResourcesHeader = (ResourcesHeader);
;// ./src/components/Timeline/Resources.js

const Resources = _ref => {
  let {
    groupedResources = [],
    // Kaynakların listesi
    collapsedGroups = {},
    // Grupların açık/kapalı durumunu tutan nesne
    toggleGroupCollapse,
    // Grupları açma/kapama fonksiyonu
    resourceSettings = {
      showIdAsName: false,
      // Varsayılan: `name` varsa onu göster, yoksa `id`
      isGrouped: true,
      // Varsayılan: Gruplama açık
      isCollapsible: true // Varsayılan: Gruplar açılıp kapanabilir
    }
  } = _ref;
  const {
    showIdAsName,
    isGrouped,
    isCollapsible
  } = resourceSettings;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-resources"
  }, isGrouped ?
  // Gruplama aktif
  groupedResources.map((group, groupIndex) => /*#__PURE__*/external_react_default().createElement("div", {
    key: groupIndex,
    className: "resource-group"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "resource-group-header",
    onClick: () => isCollapsible && toggleGroupCollapse(group.groupName)
  }, group.groupName, " ", isCollapsible && (collapsedGroups[group.groupName] ? "▲" : "▼")), !collapsedGroups[group.groupName] && group.resources.map((resource, resourceIndex) => /*#__PURE__*/external_react_default().createElement("div", {
    key: resourceIndex,
    className: "resource-cell"
  }, showIdAsName ? resource.id : resource.name || resource.id)))) :
  // Gruplama yok
  groupedResources.flatMap(group => group.resources).map((resource, resourceIndex) => /*#__PURE__*/external_react_default().createElement("div", {
    key: resourceIndex,
    className: "resource-cell"
  }, showIdAsName ? resource.id : resource.name || resource.id)));
};
/* harmony default export */ const Timeline_Resources = (Resources);
;// ./src/components/Timeline/TimelineHeader.js

 // CSS dosyasını import etmeyi unutma

const TimelineHeader = _ref => {
  let {
    dates,
    monthHeaders
  } = _ref;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-header-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-header-month-row"
  }, monthHeaders.map((monthHeader, index) => /*#__PURE__*/external_react_default().createElement("div", {
    key: index,
    className: "timeline-header-month-cell",
    style: {
      flex: monthHeader.endIndex - monthHeader.startIndex + 1,
      borderRight: index < monthHeaders.length - 1 ? "1px solid var(--border-color)" : "none"
    }
  }, monthHeader.monthName, " ", monthHeader.year))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-header-day-row"
  }, dates.map((date, index) => /*#__PURE__*/external_react_default().createElement("div", {
    key: index,
    className: "timeline-header-day-cell",
    style: {
      flex: 1,
      borderRight: index < dates.length - 1 ? "1px solid var(--border-color)" : "none"
    }
  }, date.display))));
};
/* harmony default export */ const Timeline_TimelineHeader = (TimelineHeader);
;// ./src/utils/dateUtils.js
// src/utils/dateUtils.js

/**
 * "dd/mm/yyyy" formatındaki bir tarih string'ini Date objesine dönüştürür.
 * Eğer dateInput bir string değilse, direkt Date objesini döndürür.
 * @param {string | Object | Date} dateInput - "dd/mm/yyyy" formatında tarih stringi veya {fullDate: Date, display: string} objesi veya Date objesi.
 * @returns {Date} - Date objesi.
 */
const parseDate = dateInput => {
  if (dateInput instanceof Date) {
    return dateInput;
  }
  if (typeof dateInput === 'string') {
    const [day, month, year] = dateInput.split("/").map(Number);
    return new Date(year, month - 1, day);
  } else if (typeof dateInput === 'object' && dateInput.fullDate instanceof Date) {
    return new Date(dateInput.fullDate.getTime() + dateInput.fullDate.getTimezoneOffset() * 60000);
  } else {
    console.error("parseDate received invalid input:", dateInput);
    return new Date(); // veya hata fırlat
  }
};

/**
 * Bir tarihin belirli bir aralık içinde olup olmadığını kontrol eder.
 * @param {string | Object | Date} date - "dd/mm/yyyy" formatında tarih stringi, {fullDate: Date, display: string} objesi veya Date objesi.
 * @param {string | Object | Date} startDate - "dd/mm/yyyy" formatında başlangıç tarihi stringi, {fullDate: Date, display: string} objesi veya Date objesi.
 * @param {string | Object | Date} endDate - "dd/mm/yyyy" formatında bitiş tarihi stringi, {fullDate: Date, display: string} objesi veya Date objesi.
 * @returns {boolean} - Tarih aralık içinde ise true, değilse false.
 */
const isDateInRange = (date, startDate, endDate) => {
  const d = parseDate(date);
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  return d >= start && d <= end;
};
;// ./src/hooks/useDragAndDrop.js
// src/hooks/useDragAndDrop.js

 // Named import

const useDragAndDrop = function () {
  let initialEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const [isDragging, setIsDragging] = (0,external_react_.useState)(false);
  const [dragStart, setDragStart] = (0,external_react_.useState)(null);
  const [dragEnd, setDragEnd] = (0,external_react_.useState)(null);
  const [events, setEvents] = (0,external_react_.useState)(initialEvents);

  // Sürükleme başlat
  const startDrag = (resourceId, date) => {
    setIsDragging(true);
    setDragStart({
      resourceId,
      date
    });
    setDragEnd({
      resourceId,
      date
    });
  };

  // Sürükleme hareketi
  const updateDrag = (resourceId, date) => {
    if (!isDragging) return;
    setDragEnd({
      resourceId,
      date
    });
  };

  // Sürükleme bitişi
  const endDrag = dates => {
    if (!isDragging || !dragStart || !dragEnd) return;
    if (dragStart.resourceId !== dragEnd.resourceId) {
      resetDrag();
      return;
    }
    const startDateIndex = dates.findIndex(d => parseDate(d.fullDate).toDateString() === parseDate(dragStart.date.fullDate).toDateString());
    const endDateIndex = dates.findIndex(d => parseDate(d.fullDate).toDateString() === parseDate(dragEnd.date.fullDate).toDateString());
    if (startDateIndex === -1 || endDateIndex === -1) {
      resetDrag();
      return;
    }
    const sortedStartIndex = Math.min(startDateIndex, endDateIndex);
    const sortedEndIndex = Math.max(startDateIndex, endDateIndex);
    const startDate = dates[sortedStartIndex].fullDate;
    const endDate = dates[sortedEndIndex].fullDate;
    const newEvent = {
      id: Date.now(),
      title: "Yeni Etkinlik",
      resourceId: dragStart.resourceId,
      startDate: startDate,
      endDate: endDate,
      color: "#ff7f50"
    };
    setEvents(prev => [...prev, newEvent]);
    resetDrag();
  };
  const resetDrag = () => {
    setIsDragging(false);
    setDragStart(null);
    setDragEnd(null);
  };
  return {
    events,
    isDragging,
    dragStart,
    dragEnd,
    startDrag,
    updateDrag,
    endDrag,
    setEvents
  };
};
/* harmony default export */ const hooks_useDragAndDrop = (useDragAndDrop);
;// ./src/hooks/useEventDragDrop.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const useEventDragDrop = (events, setEvents, setDropInfo) => {
  const [draggingEvent, setDraggingEvent] = (0,external_react_.useState)(null);
  const [dragOffset, setDragOffset] = (0,external_react_.useState)(0);
  const [mode, setMode] = (0,external_react_.useState)(null); // "drag" veya "extend"

  const handleDragStart = (event, eventId) => {
    if (mode === "extend") return; // Uzatma modundaysa taşıma işlemini başlatma

    event.stopPropagation();
    const eventElement = event.target;
    const eventRect = eventElement.getBoundingClientRect();
    const offset = event.clientX - eventRect.left;
    setDraggingEvent(eventId);
    setDragOffset(offset);
    setMode("drag"); // Modu taşıma olarak ayarla

    const draggedEvent = events.find(evt => evt.id === eventId);
    if (draggedEvent) {
      console.log("Dragging Event Start:", draggedEvent.startDate);
      console.log("Dragging Event End:", draggedEvent.endDate);
    }
  };
  const handleExtendStart = (event, eventId) => {
    event.stopPropagation();
    setDraggingEvent(eventId);
    setMode("extend"); // Modu uzatma olarak ayarla
  };
  const handleDragOver = event => {
    event.preventDefault();
  };
  const handleDrop = (event, resourceId, targetDate) => {
    event.preventDefault();
    if (mode === "drag" && draggingEvent) {
      const draggedEvent = events.find(evt => evt.id === draggingEvent);
      if (draggedEvent) {
        const duration = draggedEvent.endDate - draggedEvent.startDate;
        const cellWidth = event.target.offsetWidth || 30;
        const offsetDays = Math.floor(dragOffset / cellWidth);
        const newStartDate = new Date(targetDate.getTime() - offsetDays * 24 * 60 * 60 * 1000);
        const newEndDate = new Date(newStartDate.getTime() + duration);

        // Callback kontrolü ve loglama
        if (setDropInfo) {
          console.log("setDropInfo is being called with:", {
            id: draggingEvent,
            newResourceId: resourceId,
            newStartDate,
            newEndDate
          });
          setDropInfo({
            id: draggingEvent,
            newResourceId: resourceId,
            newStartDate,
            newEndDate
          });
        }

        // Event güncellemesi
        setEvents(prevEvents => prevEvents.map(evt => evt.id === draggingEvent ? _objectSpread(_objectSpread({}, evt), {}, {
          resourceId,
          startDate: newStartDate,
          endDate: newEndDate
        }) : evt));
      }
    }
    setDraggingEvent(null);
    setDragOffset(0);
    setMode(null);
  };
  const handleExtend = (event, eventId, newEndDate) => {
    if (mode !== "extend" || draggingEvent !== eventId) return;
    setEvents(prevEvents => prevEvents.map(evt => evt.id === eventId ? _objectSpread(_objectSpread({}, evt), {}, {
      endDate: newEndDate
    }) : evt));
    console.log("Extended Event ID:", eventId, "New End Date:", newEndDate);
    setDraggingEvent(null);
    setMode(null);
  };
  const handleDragEnd = () => {
    setDraggingEvent(null);
    setDragOffset(0);
    setMode(null);
  };
  return {
    handleDragStart,
    handleExtendStart,
    handleDragOver,
    handleDrop,
    handleExtend,
    handleDragEnd
  };
};
/* harmony default export */ const hooks_useEventDragDrop = (useEventDragDrop);
;// ./src/components/Timeline/Indicator.js

const Indicator = _ref => {
  let {
    todayIndex,
    totalDays
  } = _ref;
  if (todayIndex < 0 || todayIndex >= totalDays) {
    return null; // Bugün timeline dışında ise çizgiyi gösterme
  }
  return /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: "calc(".concat((todayIndex + 0.5) / totalDays, " * 100%)"),
      // Günün ortasına yerleştirmek için +0.5
      width: "2px",
      height: "100%",
      backgroundColor: "transparent",
      zIndex: 5,
      borderStyle: "dashed",
      // Kesikli çizgi için
      borderWidth: "0 0 0 2px",
      // Sadece sol tarafa kesikli çizgi
      borderColor: "red"
    }
  });
};
/* harmony default export */ const Timeline_Indicator = (Indicator);
;// ./src/hooks/useExtendEvent.js
function useExtendEvent_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function useExtendEvent_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? useExtendEvent_ownKeys(Object(t), !0).forEach(function (r) { useExtendEvent_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : useExtendEvent_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useExtendEvent_defineProperty(e, r, t) { return (r = useExtendEvent_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function useExtendEvent_toPropertyKey(t) { var i = useExtendEvent_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function useExtendEvent_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const useExtendEvent = (events, setEvents) => {
  /**
   * Etkinliği uzatmak veya kısaltmak için kullanılan işlev.
   * @param {number} eventId - Güncellenmesi gereken etkinliğin ID'si.
   * @param {Date} newEndDate - Etkinliğin yeni bitiş tarihi.
   */
  const extendEvent = (0,external_react_.useCallback)((eventId, newEndDate) => {
    setEvents(prevEvents => prevEvents.map(event => event.id === eventId ? useExtendEvent_objectSpread(useExtendEvent_objectSpread({}, event), {}, {
      endDate: newEndDate // Yeni bitiş tarihini günceller
    }) : event // Diğer etkinlikler aynı kalır
    ));
  }, [setEvents]);
  return {
    extendEvent
  };
};
/* harmony default export */ const hooks_useExtendEvent = (useExtendEvent);
;// ./src/components/Timeline/TimelineContent.js
function TimelineContent_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function TimelineContent_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? TimelineContent_ownKeys(Object(t), !0).forEach(function (r) { TimelineContent_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TimelineContent_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function TimelineContent_defineProperty(e, r, t) { return (r = TimelineContent_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function TimelineContent_toPropertyKey(t) { var i = TimelineContent_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function TimelineContent_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






// import "./Timeline.css"; // varsayalım "Timeline.css" globalde import ediliyor

const TimelineContent = _ref => {
  let {
    groupedResources,
    dates,
    collapsedGroups,
    events,
    setEvents,
    onEventClick,
    todayIndex,
    indicatorOn,
    resourceSettings,
    setDropInfo,
    eventsDragOn = true,
    eventsExtendOn = true,
    createNewEventOn = true,
    onExtendInfo,
    onCreateEventInfo,
    onEventRightClick,
    eventTooltipOn = true,
    tooltipComponent: TooltipComponent,
    tempEventStyle = {},
    eventStyleResolver = () => ({})
  } = _ref;
  // ------------------- HOOKS & STATE -------------------
  const containerRef = (0,external_react_.useRef)(null);

  // Drag
  const {
    isDragging,
    dragStart,
    dragEnd
  } = hooks_useDragAndDrop(events, setEvents);
  const {
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd
  } = hooks_useEventDragDrop(events, setEvents, setDropInfo // Doğrudan setDropInfo'yu geçiriyoruz
  );

  // Extend
  const {
    extendEvent
  } = hooks_useExtendEvent(events, setEvents);
  const [mode, setMode] = (0,external_react_.useState)(null); // null | "extend"
  const [extendingEvent, setExtendingEvent] = (0,external_react_.useState)(null);
  const [originalEndDate, setOriginalEndDate] = (0,external_react_.useState)(null);
  const [startMouseX, setStartMouseX] = (0,external_react_.useState)(null);

  // Create new event
  const [isCreating, setIsCreating] = (0,external_react_.useState)(false);
  const [tempEvent, setTempEvent] = (0,external_react_.useState)(null);

  // Tooltip
  const [selectedEvent, setSelectedEvent] = (0,external_react_.useState)(null);
  const [tooltipPosition, setTooltipPosition] = (0,external_react_.useState)({
    top: 0,
    left: 0
  });
  const totalDays = dates.length;

  // ------------------- Tooltip Logic -------------------
  const handleEventClickInternal = (event, e) => {
    e.stopPropagation();
    // Eğer mod "extend" ise tooltip'i açma
    if (mode === "extend") {
      return;
    }

    // Harici callback
    if (onEventClick) onEventClick(event, e);

    // Tooltip göstermek
    const eventElement = e.currentTarget;
    if (eventElement) {
      const rect = eventElement.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + window.scrollY,
        left: rect.left + rect.width / 2 + window.scrollX
      });
      setSelectedEvent(event);
    }
  };
  const handleCloseTooltip = () => {
    setSelectedEvent(null);
  };

  // ------------------- Create New Event -------------------
  const handleCellClick = (resourceId, date) => {
    if (!createNewEventOn) return; // create devrede değilse

    const startDate = parseDate(date.fullDate);
    const newEvent = {
      id: Date.now(),
      title: "1 Gece",
      startDate,
      endDate: new Date(startDate.getTime() + 24 * 60 * 60 * 1000),
      resourceId,
      // color => var(--timeline-new-event-background-color) => => Sonra inline style yerine className
      color: "" // Bunu .css’te "var(--timeline-new-event-background-color)" atayabilirsin
    };
    setTempEvent(newEvent);
    setIsCreating(true);
  };
  (0,external_react_.useEffect)(() => {
    if (!createNewEventOn) return;
    if (!isCreating) return;
    if (mode === "extend") {
      console.log(">>> 'extend' mode, skip new event creation");
      return;
    }
    const handleMouseMove = e => {
      if (!isCreating || !tempEvent) return;
      const cell = document.elementFromPoint(e.clientX, e.clientY);
      const cellW = (cell === null || cell === void 0 ? void 0 : cell.offsetWidth) || 30;
      const startX = tempEvent.startX || e.clientX;
      const deltaX = e.clientX - startX;
      const daysToAdd = Math.max(1, Math.floor(deltaX / cellW));
      const newEndDate = new Date(tempEvent.startDate.getTime());
      newEndDate.setDate(newEndDate.getDate() + daysToAdd);
      setTempEvent(TimelineContent_objectSpread(TimelineContent_objectSpread({}, tempEvent), {}, {
        endDate: newEndDate,
        startX: startX,
        title: "".concat(daysToAdd, " Gece")
      }));
    };
    const handleMouseUp = () => {
      if (isCreating && tempEvent) {
        setEvents([...events, tempEvent]);
        if (onCreateEventInfo) {
          onCreateEventInfo(tempEvent);
        }
      }
      setTempEvent(null);
      setIsCreating(false);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [createNewEventOn, isCreating, mode, tempEvent, events, onCreateEventInfo, setEvents]);

  // ------------------- Drag Logic -------------------
  const handleDragStartSafe = (e, eventId) => {
    if (!eventsDragOn) {
      e.preventDefault();
      return;
    }
    handleDragStart(e, eventId);
  };
  const handleDragEndSafe = e => {
    if (!eventsDragOn) {
      e.preventDefault();
      return;
    }
    handleDragEnd();
  };

  // ------------------- Extend Logic -------------------
  const handleMouseDownExtend = (mouseEvent, event) => {
    if (!eventsExtendOn) return;
    mouseEvent.stopPropagation();
    console.log(">>> Extend start ID:", event.id);
    setMode("extend");
    setExtendingEvent(event);
    setOriginalEndDate(event.endDate);
    setStartMouseX(mouseEvent.clientX);
  };
  const handleMouseMoveExtend = e => {
    if (mode !== "extend" || !extendingEvent) return;
    if (!eventsExtendOn) return;
    const currentMouseX = e.clientX;
    const deltaX = currentMouseX - (startMouseX !== null && startMouseX !== void 0 ? startMouseX : 0);
    const cellW = 30;
    const daysToAdd = Math.floor(deltaX / cellW);
    const newEndDate = new Date((originalEndDate !== null && originalEndDate !== void 0 ? originalEndDate : new Date()).getTime());
    newEndDate.setDate(newEndDate.getDate() + daysToAdd);
    setEvents(prev => prev.map(evt => evt.id === extendingEvent.id ? TimelineContent_objectSpread(TimelineContent_objectSpread({}, evt), {}, {
      endDate: newEndDate
    }) : evt));
  };
  const handleMouseUpExtend = () => {
    console.log(">>> Extend finished ID:", extendingEvent === null || extendingEvent === void 0 ? void 0 : extendingEvent.id);
    if (onExtendInfo && extendingEvent) {
      // callback
      const updatedEvent = events.find(ev => ev.id === extendingEvent.id);
      if (updatedEvent) {
        onExtendInfo({
          eventId: extendingEvent.id,
          newEndDate: updatedEvent.endDate
        });
      }
    }

    // Tooltip açılmasını engellemek için modun null olmasını geciktiriyoruz
    setTimeout(() => {
      setMode(null);
    }, 100); // 100ms gecikme
    setExtendingEvent(null);
    setOriginalEndDate(null);
    setStartMouseX(null);
  };
  (0,external_react_.useEffect)(() => {
    if (mode === "extend") {
      const onMove = e => handleMouseMoveExtend(e);
      const onUp = () => handleMouseUpExtend();
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
      return () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
    }
  }, [mode, extendingEvent, eventsExtendOn, originalEndDate, startMouseX]);

  // ------------------- Right Click (context) -------------------
  const handleRightClickEvent = (evt, reactEvent) => {
    reactEvent.preventDefault();
    if (onEventRightClick) onEventRightClick(evt, reactEvent);
  };

  // ------------------- Helper isCellSelected -------------------
  const isCellSelected = (resourceId, date) => {
    if (!dragStart || !dragEnd) return false;
    if (resourceId !== dragStart.resourceId) return false;
    const startIndex = dates.findIndex(d => parseDate(d.fullDate).getTime() === parseDate(dragStart.date).getTime());
    const endIndex = dates.findIndex(d => parseDate(d.fullDate).getTime() === parseDate(dragEnd.date).getTime());
    const currentIndex = dates.findIndex(d => parseDate(d.fullDate).getTime() === parseDate(date.fullDate).getTime());
    if (startIndex === -1 || endIndex === -1 || currentIndex === -1) return false;
    return currentIndex >= Math.min(startIndex, endIndex) && currentIndex <= Math.max(startIndex, endIndex);
  };

  // ------------------- calculatePosition -------------------
  const calculatePosition = (ev, dateArr) => {
    const startDate = parseDate(ev.startDate);
    const endDate = parseDate(ev.endDate);
    const startIndex = dateArr.findIndex(d => parseDate(d.fullDate).toDateString() === startDate.toDateString());
    const endIndex = dateArr.findIndex(d => parseDate(d.fullDate).toDateString() === endDate.toDateString());
    const totalDays = dateArr.length;
    if (startIndex < 0 && endIndex < 0) {
      return {
        isVisible: false,
        left: 0,
        width: 0,
        isPartialStart: false,
        isPartialEnd: false
      };
    }
    if (startIndex >= totalDays && endIndex >= totalDays) {
      return {
        isVisible: false,
        left: 0,
        width: 0,
        isPartialStart: false,
        isPartialEnd: false
      };
    }
    const effectiveStartIndex = Math.max(startIndex, 0);
    const effectiveEndIndex = Math.min(endIndex, totalDays - 1);
    const isPartialStart = startIndex < 0;
    const isPartialEnd = endIndex >= totalDays;
    const leftPercentage = (effectiveStartIndex + (isPartialStart ? 0 : 0.5)) / totalDays * 100;
    const rightPercentage = (effectiveEndIndex + (isPartialEnd ? 1 : 0.5)) / totalDays * 100;
    const widthPercentage = rightPercentage - leftPercentage;
    return {
      isVisible: true,
      left: "".concat(leftPercentage, "%"),
      width: "".concat(widthPercentage, "%"),
      isPartialStart,
      isPartialEnd
    };
  };

  // ------------------- RENDER -------------------
  return /*#__PURE__*/external_react_default().createElement("div", {
    ref: containerRef,
    className: "timeline-content-container" // Yeni class, stilini timeline.css'e ekleyebilirsin
  }, indicatorOn && /*#__PURE__*/external_react_default().createElement(Timeline_Indicator, {
    todayIndex: todayIndex,
    totalDays: totalDays
  }), groupedResources.map((group, groupIndex) => /*#__PURE__*/external_react_default().createElement("div", {
    key: groupIndex,
    className: "timeline-group-container"
  }, resourceSettings.isGrouped && /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-group-header-row"
  }, dates.map((dateObj, colIndex) => /*#__PURE__*/external_react_default().createElement("div", {
    key: "group-header-".concat(groupIndex, "-").concat(colIndex),
    className: "timeline-group-header-cell"
  }))), !collapsedGroups[group.groupName] && group.resources.map((resource, rowIndex) => {
    const resourceEvents = events.filter(ev => ev.resourceId === resource.id);
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: resource.id,
      className: "timeline-resource-row"
    }, resourceEvents.map(event => {
      const {
        isVisible,
        left,
        width,
        isPartialStart,
        isPartialEnd
      } = calculatePosition(event, dates);
      if (!isVisible) return null;

      // Kullanıcıdan gelen stil
      const eventStyle = eventStyleResolver ? eventStyleResolver(event) : {};
      return /*#__PURE__*/external_react_default().createElement("div", {
        key: event.id,
        className: "timeline-event",
        draggable: mode !== "extend" && eventsDragOn,
        onDragStart: e => {
          if (mode === "extend") {
            e.preventDefault();
            return;
          }
          handleDragStartSafe(e, event.id);
        },
        onDragEnd: e => {
          if (mode === "extend") {
            e.preventDefault();
            return;
          }
          handleDragEndSafe(e);
        },
        onContextMenu: reactEvent => handleRightClickEvent(event, reactEvent),
        onClick: ev => handleEventClickInternal(event, ev),
        style: TimelineContent_objectSpread({
          left,
          width,
          top: "5px",
          borderTopLeftRadius: isPartialStart ? "0px" : "20px",
          borderBottomLeftRadius: isPartialStart ? "0px" : "20px",
          borderTopRightRadius: isPartialEnd ? "0px" : "20px",
          borderBottomRightRadius: isPartialEnd ? "0px" : "20px",
          cursor: mode === "extend" ? "col-resize" : "grab"
        }, eventStyle)
      }, event.title, eventsExtendOn && /*#__PURE__*/external_react_default().createElement("div", {
        className: "timeline-event-extend-handle",
        onMouseDown: mouseEvent => {
          mouseEvent.stopPropagation();
          handleMouseDownExtend(mouseEvent, event);
        }
      }));
    }), tempEvent && tempEvent.resourceId === resource.id && /*#__PURE__*/external_react_default().createElement("div", {
      className: "timeline-temp-event",
      style: TimelineContent_objectSpread(TimelineContent_objectSpread({}, calculatePosition(tempEvent, dates)), tempEventStyle)
    }, tempEvent.title), dates.map((dateObj, colIndex) => /*#__PURE__*/external_react_default().createElement("div", {
      key: "cell-".concat(groupIndex, "-").concat(rowIndex, "-").concat(colIndex),
      className: "timeline-cell ".concat(isCellSelected(resource.id, dateObj) ? "selected" : ""),
      "data-date": JSON.stringify(dateObj),
      "data-resource-id": resource.id,
      onMouseDown: () => handleCellClick(resource.id, dateObj),
      onDragOver: e => handleDragOver(e),
      onDrop: e => handleDrop(e, resource.id, parseDate(dateObj.fullDate))
    })));
  }))), eventTooltipOn && selectedEvent && TooltipComponent && mode !== "extend" && /*#__PURE__*/external_react_default().createElement(TooltipComponent, {
    event: selectedEvent,
    position: tooltipPosition,
    onClose: handleCloseTooltip
  }));
};
/* harmony default export */ const Timeline_TimelineContent = (TimelineContent);
;// ./src/components/Timeline/EventTooltip.js
// src/components/Timeline/EventTooltip.js

const EventTooltip = _ref => {
  let {
    event,
    position = {
      top: 0,
      left: 0
    },
    onClose,
    onEdit,
    onDelete
  } = _ref;
  if (!event) return null;
  const {
    top,
    left
  } = position;

  // Rezervasyon durumuna göre renk belirleme
  const getStatusColor = status => {
    switch (status) {
      case "Confirmed":
        return "#4caf50";
      // Yeşil
      case "Pending":
        return "#ff9800";
      // Turuncu
      case "Cancelled":
        return "#f44336";
      // Kırmızı
      case "Completed":
        return "#2196f3";
      // Mavi
      default:
        return "#9e9e9e";
      // Gri
    }
  };
  const statusColor = getStatusColor(event.status);
  return /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      position: "absolute",
      top: top - 200,
      // Tooltip'in biraz yukarıda görünmesi için
      left: left + 70,
      transform: "translateX(-50%)",
      backgroundColor: "#ffffff",
      color: "#333333",
      borderRadius: "10px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      fontSize: "16px",
      zIndex: 1000,
      pointerEvents: "auto",
      // Tooltip'in tıklanabilir olmasını sağlar
      whiteSpace: "normal",
      maxWidth: "400px",
      width: "100%",
      transition: "opacity 0.3s ease, transform 0.3s ease"
    }
  }, onClose && /*#__PURE__*/external_react_default().createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: "10px",
      right: "15px",
      background: "transparent",
      border: "none",
      color: "#aaa",
      fontSize: "24px",
      cursor: "pointer",
      transition: "color 0.2s"
    },
    "aria-label": "Kapat",
    onMouseOver: e => e.target.style.color = "#000",
    onMouseOut: e => e.target.style.color = "#aaa"
  }, "\xD7"), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      backgroundColor: statusColor,
      color: "#ffffff",
      padding: "15px 20px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "5px"
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      fontWeight: "bold",
      fontSize: "18px"
    }
  }, event.title), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      fontSize: "14px"
    }
  }, "Rezervasyon ID: ", event.reservationId)), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }
  }, Array.isArray(event.guestNames) && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "Misafirler:"), " ", event.guestNames.join(", ")), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px"
    }
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "Giri\u015F:"), " ", new Date(event.startDate).toLocaleDateString()), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "\xC7\u0131k\u0131\u015F:"), " ", new Date(event.endDate).toLocaleDateString())), (event.totalAmount !== undefined || event.amountPaid !== undefined) && /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px"
    }
  }, event.amountPaid !== undefined && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "\xD6denen Miktar:"), " $", event.amountPaid.toFixed(2)), event.totalAmount !== undefined && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "Toplam Bor\xE7:"), " $", event.totalAmount.toFixed(2))), event.status && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "Durum:"), " ", event.status), event.note && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("strong", null, "Not:"), " ", event.note)), /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      padding: "15px 20px",
      borderTop: "1px solid #ddd",
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px"
    }
  }, onEdit && /*#__PURE__*/external_react_default().createElement("button", {
    onClick: () => onEdit(event),
    style: {
      padding: "8px 16px",
      backgroundColor: "#2196f3",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      transition: "background-color 0.2s"
    },
    onMouseOver: e => e.target.style.backgroundColor = "#1976d2",
    onMouseOut: e => e.target.style.backgroundColor = "#2196f3"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    role: "img",
    "aria-label": "D\xFCzenle"
  }, "\u270F\uFE0F"), "D\xFCzenle"), onDelete && /*#__PURE__*/external_react_default().createElement("button", {
    onClick: () => onDelete(event.id),
    style: {
      padding: "8px 16px",
      backgroundColor: "#f44336",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      transition: "background-color 0.2s"
    },
    onMouseOver: e => e.target.style.backgroundColor = "#d32f2f",
    onMouseOut: e => e.target.style.backgroundColor = "#f44336"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    role: "img",
    "aria-label": "Sil"
  }, "\uD83D\uDDD1\uFE0F"), "Sil")));
};
/* harmony default export */ const Timeline_EventTooltip = (EventTooltip);
;// ./src/utils/timelineUtils.js
// src/utils/timelineUtils.js

const generateTimelineData = (startYear, endYear) => {
  const dayNames = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
  const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  const dates = [];
  const monthHeaders = [];
  for (let year = startYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const daysInMonth = new Date(year, month, 0).getDate();
      const startIndex = dates.length;
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const dayName = dayNames[date.getDay()];
        dates.push({
          fullDate: date,
          display: "".concat(day, " ").concat(dayName)
        });
      }
      const endIndex = dates.length - 1;
      monthHeaders.push({
        monthName: monthNames[month - 1],
        year,
        startIndex,
        endIndex,
        totalDays: endIndex - startIndex + 1
      });
    }
  }
  return {
    dates,
    monthHeaders
  };
};
;// ./src/components/Timeline/Timeline.js
function Timeline_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Timeline_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Timeline_ownKeys(Object(t), !0).forEach(function (r) { Timeline_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Timeline_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Timeline_defineProperty(e, r, t) { return (r = Timeline_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Timeline_toPropertyKey(t) { var i = Timeline_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function Timeline_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









const Timeline_Timeline_Timeline = _ref => {
  let {
    resources,
    programDate = null,
    events = [],
    resourceSettings = {
      showIdAsName: false,
      isGrouped: true,
      isCollapsible: true
    },
    indicatorOn = false,
    dropInfo,
    setDropInfo,
    masterHeaderView = true,
    resourceHeaderContent = "Akfa Timeline",
    eventsDragOn = true,
    eventsExtendOn = true,
    createNewEventOn = true,
    onDragInfo,
    onExtendInfo,
    onCreateEventInfo,
    // İsteğe bağlı event tıklama callback'leri
    onEventClick,
    onEventRightClick,
    // Yatay scroll özelliği aç/kapa
    horizontalScrollOn = false,
    // Varsayılan false

    dayRange = 30,
    setDayRange,
    themeType = "light",
    // Tema bilgisi varsayılan olarak light

    eventTooltipOn = true,
    tooltipComponent: TooltipComponent,
    // Özelleştirilebilir Tooltip bileşeni
    tempEventStyle = {},
    eventStyleResolver = () => ({}),
    indicatorDate = new Date(),
    onToday,
    onAdvance,
    onRetreat,
    onMonthAdvance,
    onMonthRetreat
  } = _ref;
  // ---------------------------------------------------------
  // 1) timelineData oluştur (dates, monthHeaders vs.)
  // ---------------------------------------------------------
  const timelineData = generateTimelineData(2020, 2030); // 10 yıllık veri
  const {
    dates,
    monthHeaders
  } = timelineData;
  const [selectedDate, setSelectedDate] = (0,external_react_.useState)(() => {
    const date = programDate ? new Date(programDate) : new Date();
    date.setDate(date.getDate() - 3); // Program tarihinden 3 gün öncesini al
    return date;
  });

  // ---------------------------------------------------------
  // 2) local state
  // ---------------------------------------------------------
  const [collapsedGroups, setCollapsedGroups] = (0,external_react_.useState)({});
  const [localEvents, setLocalEvents] = (0,external_react_.useState)(events);
  const [selectedEvent, setSelectedEvent] = (0,external_react_.useState)(null);
  const [tooltipPosition, setTooltipPosition] = (0,external_react_.useState)({
    top: 0,
    left: 0
  });

  // dayRange = ekranda göstermeyi istediğimiz gün/hücre sayısı (ör. 30 gün)

  const [isDarkMode, setIsDarkMode] = (0,external_react_.useState)(themeType === "dark");
  (0,external_react_.useEffect)(() => {
    if (themeType !== undefined) {
      setIsDarkMode(themeType === "dark");
    }
  }, [themeType]);
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };
  // ---------------------------------------------------------
  // 3) Sabit hücre genişliği (örneğin 56.95 px)
  //    Container genişliği = dayRange * cellWidth
  // ---------------------------------------------------------
  const cellWidth = 56.95; // her gün/hücre ~57 piksel
  const containerWidth = dayRange * cellWidth;
  // örneğin dayRange=30 => containerWidth=30*56.95=1708.5 px

  // ---------------------------------------------------------
  // 4) Event Tooltip logic
  // ---------------------------------------------------------
  const handleEventClick = (event, e) => {
    // Harici onEventClick callback'i varsa, önce onu tetikleyelim
    if (onEventClick) {
      onEventClick(event, e);
    }
    // Ardından tooltip göstermek istiyorsak:
    const eventElement = e.currentTarget;
    if (eventElement) {
      const rect = eventElement.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + window.scrollY,
        left: rect.left + rect.width / 2 + window.scrollX
      });
      setSelectedEvent(event);
    }
  };
  const handleCloseTooltip = () => {
    setSelectedEvent(null);
  };

  // ---------------------------------------------------------
  // 5) Tarih filtreleme => filteredDates
  // ---------------------------------------------------------
  const startIndex = dates.findIndex(d => d.fullDate >= selectedDate);
  const endIndex = startIndex + dayRange;
  const filteredDates = startIndex !== -1 ? dates.slice(startIndex, Math.min(endIndex, dates.length)) : [];
  const today = programDate ? new Date(programDate) : new Date();
  today.setDate(today.getDate() - 3);
  const todayIndex = filteredDates.findIndex(d => new Date(d.fullDate).toDateString() === new Date(indicatorDate).toDateString());
  const totalDays = filteredDates.length;

  // ---------------------------------------------------------
  // 6) Grupları aç/kapa
  // ---------------------------------------------------------
  const toggleGroupCollapse = groupName => {
    setCollapsedGroups(prev => Timeline_objectSpread(Timeline_objectSpread({}, prev), {}, {
      [groupName]: !prev[groupName]
    }));
  };

  // ---------------------------------------------------------
  // 7) Navigation fonksiyonları
  // ---------------------------------------------------------  const { dates, monthHeaders } = timelineData;

  const handleDateChange = newDate => {
    setSelectedDate(new Date(newDate));
  };
  const handleToday = () => {
    const today = programDate ? new Date(programDate) : new Date();
    today.setDate(today.getDate() - 3); // Program tarihinden 3 gün öncesini ayarla
    setSelectedDate(today);
  };
  const handleAdvance = () => {
    setSelectedDate(prev => new Date(prev.getTime() + 5 * 24 * 60 * 60 * 1000));
  };
  const handleRetreat = () => {
    setSelectedDate(prev => new Date(prev.getTime() - 5 * 24 * 60 * 60 * 1000));
  };
  const handleMonthAdvance = () => {
    setSelectedDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };
  const handleMonthRetreat = () => {
    setSelectedDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // ---------------------------------------------------------
  // 8) Dark Mode
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // 9) Ay başlıklarını filtrele
  // ---------------------------------------------------------
  const filteredMonthHeaders = monthHeaders.map(header => {
    const adjustedStartIndex = Math.max(header.startIndex, startIndex);
    const adjustedEndIndex = Math.min(header.endIndex, endIndex - 1);
    return Timeline_objectSpread(Timeline_objectSpread({}, header), {}, {
      startIndex: adjustedStartIndex,
      endIndex: adjustedEndIndex
    });
  }).filter(header => header.startIndex <= header.endIndex);

  // ---------------------------------------------------------
  // 10) Return
  // ---------------------------------------------------------
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-container ".concat(isDarkMode ? "dark-mode" : "")
  }, masterHeaderView && /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-master-header"
  }, /*#__PURE__*/external_react_default().createElement(Timeline_MasterHeader, {
    selectedDate: selectedDate // Seçili tarihi gönder
    ,
    onDateSelect: handleDateChange,
    onToday: handleToday,
    onAdvance: handleAdvance,
    onRetreat: handleRetreat,
    onMonthAdvance: handleMonthAdvance,
    onMonthRetreat: handleMonthRetreat,
    dayRange: dayRange,
    setDayRange: setDayRange
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-body"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-resources-container",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/external_react_default().createElement(Timeline_ResourcesHeader, {
    content: resourceHeaderContent
  }), /*#__PURE__*/external_react_default().createElement(Timeline_Resources, {
    groupedResources: resources,
    toggleGroupCollapse: toggleGroupCollapse,
    collapsedGroups: collapsedGroups,
    resourceSettings: resourceSettings
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-scrollable-container",
    style: {
      overflowX: horizontalScrollOn ? "auto" : "hidden"
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "timeline-header-content-wrapper",
    style: {
      width: horizontalScrollOn ? "".concat(containerWidth, "px") : "100%"
    }
  }, /*#__PURE__*/external_react_default().createElement(Timeline_TimelineHeader, {
    dates: filteredDates,
    monthHeaders: filteredMonthHeaders
  }), /*#__PURE__*/external_react_default().createElement(Timeline_TimelineContent, {
    groupedResources: resources,
    dates: filteredDates,
    collapsedGroups: collapsedGroups,
    events: localEvents,
    setEvents: setLocalEvents,
    onEventClick: onEventClick,
    todayIndex: todayIndex,
    indicatorOn: indicatorOn,
    resourceSettings: resourceSettings,
    toggleGroupCollapse: toggleGroupCollapse,
    setDropInfo: setDropInfo,
    eventsDragOn: eventsDragOn,
    eventsExtendOn: eventsExtendOn,
    createNewEventOn: createNewEventOn,
    onDragInfo: onDragInfo,
    onExtendInfo: onExtendInfo,
    onCreateEventInfo: onCreateEventInfo,
    onEventRightClick: onEventRightClick,
    eventTooltipOn: eventTooltipOn // Tooltip kontrolü
    ,
    tooltipComponent: TooltipComponent // Özelleştirilebilir Tooltip bileşeni
    ,
    tempEventStyle: tempEventStyle,
    eventStyleResolver: eventStyleResolver
  }), selectedEvent && /*#__PURE__*/external_react_default().createElement(Timeline_EventTooltip, {
    event: selectedEvent,
    position: tooltipPosition,
    onClose: handleCloseTooltip,
    onDelete: eventId => setLocalEvents(prev => prev.filter(e => e.id !== eventId))
  })))));
};
/* harmony default export */ const components_Timeline_Timeline = (Timeline_Timeline_Timeline);
/******/ 	return __webpack_exports__;
/******/ })()
;
});